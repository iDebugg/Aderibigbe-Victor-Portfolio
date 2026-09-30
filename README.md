# Aderibigbe Victor Portfolio

Personal portfolio for **Aderibigbe Victor**, a frontend developer building responsive product interfaces with React, Next.js, and TypeScript.

Built with Next.js 16 and React 19, using the App Router and static exports.

## Features

- Seven-project showcase with screenshots and responsive sticky cards
- About page and professional experience timeline
- Local-time meeting requests sent through email
- Keyboard-accessible navigation and reduced-motion support
- Content, navigation, and email contact available without JavaScript
- SEO metadata, structured data, sitemap, and robots configuration
- Desktop and mobile browser regression tests

## Run locally

```bash
git clone https://github.com/iDebugg/Aderibigbe-Victor-Portfolio.git
cd Aderibigbe-Victor-Portfolio
npm ci
npm run dev
```

Open the URL printed by Next.js (normally `http://localhost:3000`). Changes inside `app/`, `components/`, and `public/` refresh automatically.

## Main files

- `app/page.js` — homepage and project data
- `app/about/page.js` — about page
- `app/testimonials/page.js` — experience page
- `app/get-started/page.js` — contact page
- `components/` — reusable header, footer, project card, and booking components
- `app/globals.css` — complete visual system and responsive styles
- `public/site.js` — scroll, menu, animation, and calendar behavior
- `public/assets/` — portrait and project screenshots

## Production build

```bash
npm run build
```

Next.js writes the static production site to `out/`. After a successful export, the build automatically replaces the generated `dist/` copy for Sites hosting, including current project images. Do not edit `out/` or `dist/` directly.

Preview the production export with `npm start` at `http://127.0.0.1:4173` (override with `PORT`). This uses a local static server because the project exports static files.

## Validation

```bash
npm run lint
npx playwright install chromium # first-time browser setup
npm run build
npm test
```

`npm run check` runs lint, build, and browser tests together. To use an installed Google Chrome instead of downloading Chromium, run `PLAYWRIGHT_CHANNEL=chrome npm test` (or `PLAYWRIGHT_CHANNEL=chrome npm run check`). Browser tests cover desktop and mobile scheduler transitions, keyboard focus, JavaScript-free content, reduced motion, and route/image loading.

## Interaction architecture

Pages are build-time React Server Components. `public/site.js` initializes DOM interactions once per document load. Keep ordinary internal anchors unless converting the behavior to route-aware React client components.

The scheduler proposes fixed times in the visitor’s local timezone and opens an email request. It does not check calendar availability or confirm reservations.
