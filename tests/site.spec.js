import { test, expect } from '@playwright/test';

// Use a fixed weekday to keep calendar assertions independent of the current date.
test.beforeEach(async ({ page }) => {
  await page.clock.setFixedTime(new Date('2026-09-30T12:00:00-04:00'));
});

test('date, time format, and month transitions keep the request consistent', async ({ page }) => {
  await page.goto('/get-started/');
  const action = page.locator('.continue');
  await page.getByRole('button', { name: 'Wednesday, September 30', exact: true }).click();
  await page.getByRole('button', { name: '3:00pm', exact: true }).click();
  await expect(action).toBeEnabled();
  await page.getByRole('button', { name: '24h', exact: true }).click();
  await expect(page.getByRole('button', { name: '15:00', exact: true })).toHaveAttribute('aria-pressed', 'true');
  await expect(action).toBeEnabled();
  await page.getByRole('button', { name: 'Thursday, October 1', exact: true }).click();
  await expect(action).toBeDisabled();
  await expect(page.locator('.time.selected')).toHaveCount(0);
  await page.getByRole('button', { name: '15:30', exact: true }).click();
  await page.getByRole('button', { name: 'Next month' }).click();
  await page.getByRole('button', { name: '12h', exact: true }).click();
  await expect(action).toBeDisabled();
  await expect(page.locator('.time')).toHaveCount(0);
  await expect(page.locator('.selected-date')).toHaveText('Select a date');
});

test('closed navigation is inert and open navigation contains keyboard focus', async ({ page }) => {
  await page.goto('/');
  const menu = page.locator('#site-menu');
  const toggle = page.getByRole('button', { name: 'Open menu' });
  await expect(menu).toHaveAttribute('inert', '');
  await toggle.click();
  await expect(page.getByRole('button', { name: 'Close', exact: true })).toBeFocused();
  await expect(page.locator('main')).toHaveAttribute('inert', '');
  await page.keyboard.press('Shift+Tab');
  await expect(menu.getByRole('link', { name: 'Contact' })).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(page.getByRole('button', { name: 'Close', exact: true })).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(toggle).toBeFocused();
  await expect(menu).toHaveAttribute('inert', '');
  await expect(page.locator('main')).not.toHaveAttribute('inert');
});

test('content, navigation and contact remain available without JavaScript', async ({ browser }, testInfo) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: testInfo.project.use.viewport });
  const page = await context.newPage();
  for (const route of ['/', '/about/', '/testimonials/', '/get-started/']) {
    await page.goto(`http://127.0.0.1:43187${route}`);
    await expect(page.locator('h1')).toHaveCSS('opacity', '1');
    await expect(page.locator('h1')).toHaveCSS('clip-path', 'none');
    await expect(page.locator('.fallback-nav')).toBeVisible();
  }
  await expect(page.locator('.booking-fallback a')).toBeVisible();
  await expect(page.locator('.calendar')).toBeHidden();
  await context.close();
});

test('reduced motion disables scrolling transforms, including after a preference change', async ({ page }) => {
  await page.goto('/');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.locator('.ticker').scrollIntoViewIfNeeded();
  await expect(page.locator('.ticker div')).toHaveCSS('transform', 'none');
  await expect(page.locator('.project-card').first()).toHaveCSS('transform', 'none');
  await expect(page.locator('.project-card').first()).toHaveCSS('position', 'relative');
  await expect(page.locator('h1')).toHaveCSS('opacity', '1');
  await page.reload();
  await expect(page.locator('.project-card').first()).toHaveCSS('transform', 'none');
});

test('all routes load without script errors and screenshots load', async ({ page }, testInfo) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  for (const route of ['/', '/about/', '/testimonials/', '/get-started/']) {
    await page.goto(route);
    await expect(page.locator('.menu-toggle')).toBeVisible();
    await expect(page.locator('h1')).toHaveCSS('opacity', '1');
    const pill = await page.locator('.availability').boundingBox();
    expect(pill.x).toBeGreaterThanOrEqual(0);
    expect(pill.x + pill.width).toBeLessThanOrEqual(testInfo.project.use.viewport.width);
    if (route === '/' || route === '/get-started/') {
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += innerHeight * 0.8) {
          scrollTo(0, y);
          await new Promise(resolve => setTimeout(resolve, 50));
        }
        scrollTo(0, 0);
      });
      await page.screenshot({ path: testInfo.outputPath(route === '/' ? 'home.png' : 'contact.png'), fullPage: true });
    }
  }
  expect(errors).toEqual([]);
  await page.goto('/');
  for (const image of await page.locator('.project-media img').all()) {
    await image.scrollIntoViewIfNeeded();
    await expect.poll(() => image.evaluate(element => element.complete && element.naturalWidth > 0)).toBe(true);
  }
});

test('content remains visible when IntersectionObserver is unavailable', async ({ page }) => {
  await page.addInitScript(() => { delete window.IntersectionObserver; });
  await page.goto('/get-started/');
  await expect(page.locator('h1')).toHaveCSS('opacity', '1');
  await expect(page.locator('button.day')).toHaveCount(40);
  await expect(page.locator('.booking')).toHaveClass('booking booking-ready');
});
