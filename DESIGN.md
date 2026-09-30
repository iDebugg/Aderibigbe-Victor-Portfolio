---
name: Aderibigbe Victor Portfolio
description: A dark editorial portfolio system pairing monumental type with practical product evidence and direct contact paths.
colors:
  primary-lime: "#d6ff42"
  charcoal-canvas: "#292929"
  black-panel: "#151515"
  warm-paper: "#f5f3ef"
  muted-copy: "#b7b7b4"
  structural-line: "#474747"
  editorial-ink: "#181818"
  project-paper: "#ece8df"
  project-blue: "#264f86"
  project-rust: "#ad4f32"
  project-green: "#365c46"
  faq-surface: "#222222"
typography:
  display:
    fontFamily: "Bebas Neue, Impact, sans-serif"
    fontSize: "clamp(3.8rem, 7vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: "0.008em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(1.8rem, 3vw, 3.3rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.05em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.35
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.76rem"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "0.04em"
rounded:
  control: "6px"
  surface: "9px"
  project: "10px"
  pill: "999px"
  circle: "50%"
spacing:
  compact: "8px"
  control: "14px"
  content: "24px"
  shell-max: "56px"
  section: "120px"
components:
  action-button:
    backgroundColor: "{colors.warm-paper}"
    textColor: "{colors.editorial-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    height: "52px"
  action-button-disabled:
    backgroundColor: "#30302f"
    textColor: "#777777"
    rounded: "{rounded.control}"
    height: "52px"
  availability-pill:
    backgroundColor: "#333331"
    textColor: "{colors.warm-paper}"
    typography: "{typography.label}"
    rounded: "{rounded.surface}"
    padding: "12px 18px"
  round-link:
    backgroundColor: "transparent"
    textColor: "{colors.warm-paper}"
    typography: "{typography.label}"
    rounded: "{rounded.circle}"
    size: "145px"
  booking-panel:
    backgroundColor: "{colors.black-panel}"
    textColor: "{colors.warm-paper}"
    rounded: "{rounded.surface}"
  project-card:
    textColor: "{colors.warm-paper}"
    rounded: "{rounded.project}"
    padding: "clamp(28px, 4vw, 58px)"
---

# Design System: Aderibigbe Victor Portfolio

## Overview

**Creative North Star: "The Midnight Editorial Desk"**

The portfolio presents frontend engineering as editorial evidence. Monumental condensed statements establish confidence, while timelines, project blocks, accordions, technology labels, and the booking calendar make the work concrete. The interface feels direct and crafted: high contrast, lightly textured, and spacious at page scale, with compact controls and factual body copy.

The same visual frame spans four routes. Home is the broad portfolio index; About uses a short biography followed by three credentials; Experience uses a chronological ruled timeline; Contact centers the scheduler. Every route shares the minimal header, full-screen menu, dark canvas, and pale closing CTA, so navigation feels continuous even as page structures change.

**Key Characteristics:**

- Monumental uppercase Bebas Neue statements paired with Manrope interface copy
- A charcoal canvas, near-black functional panels, and a warm-paper closing inversion
- Rare electric lime for availability, focus, feedback, and selected time slots
- Color-block project cards used as portfolio evidence
- Fine rules, large vertical intervals, and compact metadata
- Scroll-triggered type reveals, a drifting ticker, and responsive card stacking
- One consistent header, menu, close section, and footer across all routes

## Colors

The core palette is restrained and nearly monochrome; project cards introduce controlled color as content-bearing surfaces.

### Primary

- **Signal Lime:** Communicates live availability, keyboard focus, selection, feedback, and text selection. It is not a general decoration color.

### Secondary

- **Portfolio Blue:** A cool project-card field for PalmBloc.
- **Project Rust:** A warm project-card field for Luxe Autos.
- **Agritech Green:** A grounded project-card field for Tizmine Farms.

### Neutral

- **Charcoal Canvas:** Default background across all routes.
- **Black Panel:** Booking and ToroAccess project surfaces.
- **Warm Paper:** Primary light text, menu field, closing CTA, selected dates, and light project-card family.
- **Project Paper:** A warmer, slightly deeper light surface used for the Medeet card.
- **Muted Copy:** Secondary text on dark backgrounds.
- **Structural Line:** Dividers for sections, accordions, timelines, and grids.
- **Editorial Ink:** Text on pale surfaces.
- **FAQ Surface:** Slightly darker inset field that separates the FAQ from the main canvas.

### Named Rules

**The Signal-Only Rule.** Signal Lime appears only for availability, focus, confirmation, text selection, or an active scheduler choice.

**The Evidence-Color Rule.** Blue, rust, green, and paper are reserved for project evidence blocks; they do not become general-purpose section backgrounds.

**The Paper Inversion Rule.** Warm Paper marks navigation or decisive action: the full-screen menu, closing CTA, selected date, and primary booking action.

## Typography

**Display Font:** Bebas Neue (with Impact and sans-serif fallbacks)

**Body Font:** Manrope (with sans-serif fallback)

**Character:** Bebas Neue creates a poster-scale voice for identity, section openings, project names, and menu destinations. Manrope handles facts, descriptions, dates, interactive states, and compact metadata with calm clarity.

### Hierarchy

- **Display** (400, responsive clamp, 0.88 line-height): Hero declarations, section titles, project names, menu links, ticker text, and closing CTAs. It is uppercase with minimal positive tracking.
- **Headline** (500, responsive clamp, 1.05 line-height): Booking titles and role titles that need emphasis without becoming display copy.
- **Body** (400, 16px base, 1.35 line-height): Biographies, project summaries, service descriptions, timeline details, and scheduler guidance. Lines typically stop between 35ch and 65ch depending on context.
- **Label** (500, compact scale): Availability, dates, project tags, buttons, footer text, and metadata. Structural labels may use uppercase and wider tracking.

### Named Rules

**The Two-Voice Rule.** Use Bebas Neue for statements and destinations; use Manrope for facts, instructions, and controls.

**The Tight-Poster Rule.** Display type stays uppercase with compressed leading and short line lengths. Do not loosen it into conventional marketing headings.

## Layout

All routes use a fluid shell with horizontal padding from 20px to 56px. The desktop header is a three-part grid: brand, centered availability pill, and menu trigger. Content sections generally use 120px vertical padding and fine top borders to establish rhythm.

Home uses a near-viewport split hero with Victor's portrait on the left and the main statement on the right, a three-column hero footer, a seven-project scroll stack, a two-column services section, a three-column role grid, and a two-column FAQ. About pairs its large introduction with a three-column biography row and three fact columns. Experience uses a ruled timeline with a narrow date column and broad role column. Contact uses a compact three-column booking grid for meeting details, calendar, and available times.

At 800px and below, primary grids stack into one column. The header shortens from 150px to 130px, the availability pill moves above the header grid, and the word “Menu” disappears while the four-dot trigger remains. Project cards keep the sticky stack with tighter 7px layer offsets and use a compact two-column internal grid for text cards or one column for screenshot cards. Biography, fact, role, service, FAQ, timeline, hero, and booking grids collapse. The scheduler becomes a fluid vertical panel with a 350px calendar and a two-column time grid; footers stack with social links first.

**The Scale-Contrast Rule.** Pair very large type and generous section intervals with small labels and compact controls; avoid a uniform medium scale.

**The Shared-Frame Rule.** New routes reuse the same header, full-screen menu, pale closing CTA, and footer before introducing page-specific composition.

## Elevation & Depth

The system relies first on tonal layers and one-pixel rules. The availability pill receives a low ambient shadow (`0 8px 24px rgba(0,0,0,.18)`), the booking panel receives a broad quiet shadow (`0 34px 80px rgba(0,0,0,.2)`), and project cards use flat color surfaces without shadows. A fixed low-opacity noise layer adds material texture to every route.

### Named Rules

**The Tonal-First Rule.** Establish hierarchy with background value, color blocks, and fine borders before adding shadow.

**The Flat-Card Rule.** Project cards establish depth through sticky overlap and subtle scale; they do not use shadows.

## Shapes

Large functional surfaces use 9–10px corners, standard action controls use 6px corners, and tags, time slots, menu-close controls, calendar navigation, avatar marks, and round links use pill or circular geometry. Rules remain thin and understated. The four-dot menu glyph supplies a small square motif against the circular interaction language.

**The Restrained-Radius Rule.** Large surfaces are gently rounded; only compact choices, navigation controls, tags, avatars, and circular calls to action use full rounding.

## Components

### Navigation

- **Header:** Shared three-part grid with nameplate, availability status, and menu trigger. The availability link targets Contact globally and the local booking anchor on the Contact route.
- **Menu:** A fixed Warm Paper panel enters from above over 750ms. Oversized Bebas Neue links sit on fine separators and translate 24px on hover. Opening locks body scroll, moves focus to Close, and makes background content inert. Tab stays within the panel; close, route selection, and Escape restore focus to the trigger. The closed panel is inert. Ordinary navigation links remain available until JavaScript initializes.
- **Mobile:** The status pill is centered above the brand/menu row and the menu trigger becomes icon-only.

### Project Cards

- **Structure:** Text-only cards use three desktop columns. Screenshot cards use a copy column and an image column; tags sit beneath the title. Five of the seven projects include screenshots.
- **Surface:** Each project owns one approved color block. Corners are 10px and padding scales from 28px to 58px.
- **Desktop Scroll:** Cards pin from 88px with an 11px cumulative offset. Each incoming card layers above the preceding card, creating a visible compressed stack that unwinds naturally when the visitor reverses direction. JavaScript adds a subtle reversible scale change while CSS sticky positioning carries the sequence.
- **Mobile:** Cards remain sticky from 64px with 7px cumulative offsets and subtle scaling. Text cards have a 400px minimum height; screenshot cards stack copy above media with content-driven height. Reduced motion makes all project cards normal-flow blocks without scaling.

### Round Links

Circular outlined calls to action are 145px on desktop and 112px on mobile. Hover fills them with Warm Paper, switches text to Editorial Ink, and rotates the circle by −7 degrees.

### Accordions

Services and FAQs use native disclosure rows separated by rules. The plus mark rotates 45 degrees when open. JavaScript enforces one open item within each list, keeping the section compact and scannable.

### Timeline and Fact Grids

Experience entries pair muted dates with role, organization, and a short factual summary. About and home role facts use three equal columns with top and bottom rules. All become single-column rows on mobile.

### Booking Calendar

The contact scheduler is capped at 920px on desktop and combines a portrait-led meeting summary, six-week calendar, and dedicated time rail. Past dates and weekends are disabled. Selecting a weekday reveals eight available time buttons; a 12h/24h control changes their format while preserving the selected numeric time, and selecting a time activates the Warm Paper action. Changing the date clears the time and disables the action; changing the month clears both date and time.

The browser resolves the visitor’s IANA timezone through `Intl.DateTimeFormat`. The meeting summary shows the friendly timezone name, and the calendar note adds the current short UTC offset. Month and selected-date labels use the visitor’s locale; the Sunday-first weekday row is English. The displayed slot times are treated as local to that visitor. Submitting opens an email addressed to Victor with the selected long-form local date, time, and IANA timezone embedded in the message body. These are proposed times, not live calendar availability or confirmed reservations. An email link remains available if JavaScript does not initialize.

### Availability Indicator

The shared header pill uses a muted charcoal fill, fine border, low shadow, and glowing Signal Lime dot. The pale closing CTA repeats the status with a quieter green dot and no glow.

### Motion and Scroll Effects

- **Standard Reveal:** Supporting groups start 35px lower and fade into place over 800ms.
- **Split Reveal:** Major headings start 70px lower, clipped from the bottom, and resolve over one second.
- **Triggering:** An Intersection Observer activates content once roughly 12% is visible with an 8% bottom exclusion. An initial animation-frame pass also reveals elements already within 92% of the viewport height.
- **Ticker:** The home technology line translates horizontally at 13% of page scroll distance.
- **Project Stack:** Desktop and mobile cards use native sticky positioning. A shared requestAnimationFrame callback updates card scaling and the technology ticker; ResizeObserver refreshes measurements when stack dimensions change.
- **Reduced Motion:** Smooth scrolling is disabled, transition durations collapse, all reveal content is visible, the ticker stops, and cards return to normal flow without scaling. Pointer motion is disabled. Browser preference changes are honored without reloading. Content is visible by default; reveal styles are enabled only when JavaScript and IntersectionObserver are available. New motion must honor the same preference.

## Do's and Don'ts

### Do:

- **Do** reuse the shared header, menu, close section, and footer on every route.
- **Do** let Bebas Neue carry major statements while Manrope carries evidence and interaction.
- **Do** reserve Signal Lime for meaningful state and feedback.
- **Do** use project colors only on portfolio evidence blocks.
- **Do** structure long information with fine rules, short summaries, and compact metadata.
- **Do** keep scheduler labels localized and include the visitor’s IANA timezone in meeting requests.
- **Do** stack all multi-column layouts cleanly at the 800px breakpoint.

### Don't:

- **Don't** introduce additional accent colors, gradients, or generic decorative imagery.
- **Don't** turn ordinary content sections into floating cards or apply the project-stack shadow elsewhere.
- **Don't** use Bebas Neue for body copy, instructions, dates, or dense interface text.
- **Don't** use the project palette as route-level theming.
- **Don't** assume a fixed timezone or omit timezone context from a requested meeting.
- **Don't** add motion without a reduced-motion fallback or bypass the existing requestAnimationFrame scroll pattern.
