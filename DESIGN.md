---
version: 1
name: HomeBase
description: A warm, hand-drawn storage marketplace for college students. Cream paper canvas (#FDF8F0), one confident brand blue (#0064A4) for text, structure and primary actions, and a sunny yellow (#FFD100) used as a highlight, never as text on cream. Marketplace bones borrowed from Airbnb (pill search bar, photo-first listing cards, sticky booking card, a single shadow tier); warmth and illustration borrowed from Notion (doodle spot illustrations, tinted feature cards). Type is rounded and friendly: Fredoka for headings, Nunito for everything else, and Patrick Hand only for small handwritten annotations.

colors:
  # Brand
  primary: "#0064A4"          # HomeBase Blue: headings, links, primary buttons, icons
  primary-pressed: "#004F82"
  primary-deep: "#003A61"     # dark bands, footer, logo pill
  primary-tint: "#E3EEF7"     # selected chips, info banners, map radius fill
  sun: "#FFD100"              # HomeBase Yellow: highlights, badges, the house in the logo
  sun-pressed: "#E6BC00"
  sun-tint: "#FFF4BF"         # highlight cards, "new" rows, marker swipes
  on-primary: "#FFFFFF"
  on-sun: "#14324A"

  # Surfaces
  canvas: "#FDF8F0"           # page background (cream paper)
  surface: "#FFFFFF"          # cards, inputs, popovers
  surface-sunk: "#F6EEDF"     # wells, table headers, disabled fields
  scrim: "#14324A"            # modal backdrop at 50% opacity

  # Text
  ink: "#14324A"              # body text (deep navy, never pure black)
  muted: "#5E6B76"            # secondary text, meta lines
  faint: "#8C96A0"            # placeholders, disabled text (large text only)

  # Lines
  hairline: "#E8DFCF"         # default 1px borders (warm, not gray)
  hairline-strong: "#CFC3AE"  # input borders, dividers that must be seen
  sketch: "#0064A4"           # 2px hand-drawn outline on illustrated elements

  # Semantic
  success: "#2E7D4F"
  success-tint: "#E1F2E7"
  warning: "#9A5B00"
  warning-tint: "#FFF0D6"
  error: "#C2362B"
  error-tint: "#FBE4E1"

typography:
  display-xl:   { fontFamily: "Fredoka", fontSize: 56px, fontWeight: 600, lineHeight: 1.05, letterSpacing: -0.5px }
  display-lg:   { fontFamily: "Fredoka", fontSize: 40px, fontWeight: 600, lineHeight: 1.1,  letterSpacing: -0.25px }
  heading-1:    { fontFamily: "Fredoka", fontSize: 32px, fontWeight: 600, lineHeight: 1.15 }
  heading-2:    { fontFamily: "Fredoka", fontSize: 24px, fontWeight: 600, lineHeight: 1.2 }
  heading-3:    { fontFamily: "Fredoka", fontSize: 20px, fontWeight: 500, lineHeight: 1.25 }
  title:        { fontFamily: "Nunito",  fontSize: 16px, fontWeight: 700, lineHeight: 1.3 }
  body-lg:      { fontFamily: "Nunito",  fontSize: 18px, fontWeight: 400, lineHeight: 1.55 }
  body-md:      { fontFamily: "Nunito",  fontSize: 16px, fontWeight: 400, lineHeight: 1.55 }
  body-sm:      { fontFamily: "Nunito",  fontSize: 14px, fontWeight: 400, lineHeight: 1.45 }
  caption:      { fontFamily: "Nunito",  fontSize: 13px, fontWeight: 600, lineHeight: 1.35 }
  badge:        { fontFamily: "Nunito",  fontSize: 12px, fontWeight: 800, lineHeight: 1.2, letterSpacing: 0.2px }
  button-md:    { fontFamily: "Nunito",  fontSize: 16px, fontWeight: 800, lineHeight: 1.2 }
  button-sm:    { fontFamily: "Nunito",  fontSize: 14px, fontWeight: 800, lineHeight: 1.2 }
  price:        { fontFamily: "Fredoka", fontSize: 22px, fontWeight: 600, lineHeight: 1.2 }
  annotation:   { fontFamily: "Patrick Hand", fontSize: 18px, fontWeight: 400, lineHeight: 1.3 }

rounded:
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 72px
  hero: 96px

elevation:
  flat: "none"
  float: "0 1px 0 rgba(20,50,74,0.04), 0 4px 14px rgba(20,50,74,0.08)"
  sticker: "3px 3px 0 #0064A4"   # hard offset shadow, playful accents only

components:
  button-primary:     { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button-md}", rounded: "{rounded.full}", padding: "14px 24px", height: 48px }
  button-primary-pressed: { backgroundColor: "{colors.primary-pressed}" }
  button-sun:         { backgroundColor: "{colors.sun}", textColor: "{colors.on-sun}", typography: "{typography.button-md}", rounded: "{rounded.full}", padding: "14px 24px", height: 48px }
  button-secondary:   { backgroundColor: "{colors.surface}", textColor: "{colors.primary}", border: "2px solid {colors.primary}", typography: "{typography.button-md}", rounded: "{rounded.full}", height: 48px }
  button-ghost:       { backgroundColor: transparent, textColor: "{colors.primary}", typography: "{typography.button-sm}", rounded: "{rounded.full}", padding: "8px 14px" }
  search-pill:        { backgroundColor: "{colors.surface}", border: "1px solid {colors.hairline}", rounded: "{rounded.full}", height: 64px, shadow: "{elevation.float}" }
  search-orb:         { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", rounded: "{rounded.full}", size: 48px }
  listing-card:       { backgroundColor: transparent, photoRounded: "{rounded.lg}", typography: "{typography.body-sm}" }
  booking-card:       { backgroundColor: "{colors.surface}", border: "1px solid {colors.hairline}", rounded: "{rounded.lg}", padding: 24px, shadow: "{elevation.float}" }
  feature-card:       { backgroundColor: "{colors.surface}", border: "1px solid {colors.hairline}", rounded: "{rounded.xl}", padding: 32px }
  feature-card-sun:   { backgroundColor: "{colors.sun-tint}", textColor: "{colors.ink}", rounded: "{rounded.xl}", padding: 32px }
  feature-card-blue:  { backgroundColor: "{colors.primary-tint}", textColor: "{colors.ink}", rounded: "{rounded.xl}", padding: 32px }
  badge-sun:          { backgroundColor: "{colors.sun}", textColor: "{colors.on-sun}", typography: "{typography.badge}", rounded: "{rounded.full}", padding: "4px 10px" }
  badge-blue:         { backgroundColor: "{colors.primary-tint}", textColor: "{colors.primary-pressed}", typography: "{typography.badge}", rounded: "{rounded.full}", padding: "4px 10px" }
  chip:               { backgroundColor: "{colors.surface}", textColor: "{colors.ink}", border: "1px solid {colors.hairline-strong}", rounded: "{rounded.full}", padding: "8px 14px" }
  chip-selected:      { backgroundColor: "{colors.primary-tint}", textColor: "{colors.primary-pressed}", border: "1px solid {colors.primary}" }
  text-input:         { backgroundColor: "{colors.surface}", textColor: "{colors.ink}", border: "1px solid {colors.hairline-strong}", rounded: "{rounded.md}", height: 52px, padding: "0 16px" }
  top-nav:            { backgroundColor: "{colors.canvas}", borderBottom: "1px solid {colors.hairline}", height: 72px }
  footer:             { backgroundColor: "{colors.primary-deep}", textColor: "{colors.on-primary}" }
---

# HomeBase Design System

Reference art: `docs/brand/logo-concept-3.png` (logo concept 3, palette, doodles).

## 1. Visual Theme & Atmosphere

HomeBase should feel like **a friendly note from a neighbor**, not a storage-unit company. The brand concept is hand-drawn: a yellow house with a heart-shaped map pin, sitting in an open blue box. Belonging + proximity + extra space.

Three ideas carry every screen:

1. **Cream paper, not white.** The page floor is `canvas` #FDF8F0. Cards and inputs sit on it in pure white, so surfaces separate without heavy shadows.
2. **Blue does the work, yellow brings the sun.** Blue is the voice: headings, links, primary buttons, icons, outlines. Yellow is the smile: badges, highlights, the occasional big call to action, illustration fills. Most screens are ~85% cream/white, ~12% blue, ~3% yellow.
3. **Real marketplace bones, hand-drawn skin.** Layouts follow proven marketplace patterns (pill search, photo-first grid, sticky booking card). Personality comes from the doodles, the rounded type and a few handwritten notes, never from breaking the layout.

**Borrowed from awesome-design-md:**
- *Airbnb:* pill search bar with round search orb, photo-first listing cards, sticky right-rail booking card that becomes a bottom bar on mobile, one shadow tier, everything rounded, dense card grid under an open hero.
- *Notion:* illustration-led marketing sections, softly tinted feature cards, friendly confident copy.

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| `primary` | #0064A4 | Headings, links, primary buttons, icons, focus ring, map markers |
| `primary-pressed` | #004F82 | Hover/pressed state for blue; text on `primary-tint` |
| `primary-deep` | #003A61 | Footer, dark hero bands, logo pill |
| `primary-tint` | #E3EEF7 | Selected chips, info banners, approximate-location circle on maps |
| `sun` | #FFD100 | Badges, highlight swipes, illustration fills, the "sun" CTA |
| `sun-pressed` | #E6BC00 | Hover/pressed for yellow buttons |
| `sun-tint` | #FFF4BF | Highlight cards ("Recommended for you"), new-message rows |
| `canvas` | #FDF8F0 | Page background |
| `surface` | #FFFFFF | Cards, inputs, menus, modals |
| `surface-sunk` | #F6EEDF | Wells, table headers, disabled fields |
| `ink` | #14324A | Body text |
| `muted` | #5E6B76 | Secondary text, meta lines |
| `hairline` / `hairline-strong` | #E8DFCF / #CFC3AE | Borders (warm beige, never cool gray) |
| `success` / `warning` / `error` | #2E7D4F / #9A5B00 / #C2362B | Status text and icons, each with a matching `-tint` background |

### Contrast rules (checked, WCAG 2.1)
- `primary` on `canvas`: 5.9:1. On white: 6.3:1. White on `primary`: 6.3:1. All fine for body text.
- `ink` on `canvas`: 12.5:1. `muted` on `canvas`: 5.2:1.
- `ink` on `sun`: 9.1:1. **Text on yellow is always `ink` (#14324A), never blue**; blue on yellow is only 4.3:1.
- **Yellow is never text on cream or white** (1.4:1). Use it as a fill, a highlight behind text, or an illustration color.
- `sun` on `primary-deep`: 8.1:1. Yellow text is allowed on the dark blue footer/bands.

## 3. Typography Rules

All three fonts are free on Google Fonts. Load them with `next/font/google`.

- **Fredoka** (600 for headings, 500 for small headings). Rounded and chunky, the closest match to the logo wordmark. Headings are `primary` blue.
- **Nunito** (400 body, 700 titles, 800 buttons and badges). Rounded terminals that pair with Fredoka but stay very readable at 14–16px. Body is `ink`.
- **Patrick Hand**: *annotations only.* Small handwritten notes beside illustrations or hero art ("your stuff, 5 min away ♡"), with a little hand-drawn arrow. Max one or two per screen, never for UI labels, buttons, prices or anything a user must read to complete a task.

| Token | Font | Size / Weight | Use |
|---|---|---|---|
| `display-xl` | Fredoka | 56 / 600 | Landing hero headline only (40px on mobile) |
| `display-lg` | Fredoka | 40 / 600 | Section heads on marketing pages |
| `heading-1` | Fredoka | 32 / 600 | Page titles in the app ("Your bookings") |
| `heading-2` | Fredoka | 24 / 600 | Section heads in the app, listing title |
| `heading-3` | Fredoka | 20 / 500 | Card heads, sub-sections |
| `title` | Nunito | 16 / 700 | Listing card title, list item titles |
| `body-lg` / `body-md` / `body-sm` | Nunito | 18 / 16 / 14, 400 | Running text, card meta |
| `caption` | Nunito | 13 / 600 | Labels above inputs, timestamps |
| `badge` | Nunito | 12 / 800 | Pills and badges |
| `price` | Fredoka | 22 / 600 | Prices on cards and the booking card |
| `annotation` | Patrick Hand | 18 / 400 | Handwritten notes (decorative) |

Use sentence case everywhere, including buttons. The wordmark is the only place that uses "Home Base" title case; in running text write **HomeBase**.

## 4. Component Stylings

### Buttons (all pill-shaped, 48px tall, 44px minimum on mobile)
- **Primary:** blue fill, white text. One per view: "Book this space", "Publish listing", "Search".
- **Sun:** yellow fill, `ink` text. For the single most important marketing CTA ("Find storage near campus"), and only on cream or blue backgrounds. Never two sun buttons on one screen.
- **Secondary:** white fill, 2px blue border, blue text. "Message host", "Save".
- **Ghost:** blue text, no border, `primary-tint` on hover.
- Pressed state: darker fill, plus a 1px translate down. No glow.

### Search pill (signature element, adapted from Airbnb)
White pill, 64px tall, `float` shadow, sitting on the cream hero. Segments split by hairlines: **Where** (campus or address) · **Move-in** · **Move-out** · **How much stuff?** (opens the AI space estimator). Ends in a 48px round blue search orb with a white magnifier. On mobile it collapses into a single tappable pill that opens a full-screen sheet.

### Listing card
Photo-first. 4:3 photo with `rounded.lg` corners, then 3–4 lines below with no card surface:
- `title`: "Dry basement corner · 0.8 mi from campus"
- `body-sm` muted: space type and size ("Half room · ~120 sq ft")
- `body-sm` muted: available dates
- `price` in blue + "/ month" in muted body-sm

Overlays on the photo: **badge-sun** top-left for one standout tag ("Climate controlled", "Trusted host"), a round white heart button top-right (blue outline, filled `sun` with blue outline when saved). Hover: photo scales to 1.02 and the card gets the `float` shadow.

### Listing detail
- Photo gallery: one large photo plus a 2×2 grid, `rounded.xl` on the outer corners.
- Left column (~62%): title (`heading-2`), host row (avatar, name, verified badge), "What fits here" (size category, estimator comparison), amenities with doodle icons, house rules, map.
- Right column (~34%): **booking card**, sticky. White, `rounded.lg`, hairline border, `float` shadow, 24px padding. Price in `price`, date fields, item summary from the estimator, fee breakdown in body-sm, full-width primary button. Mobile: becomes a sticky bottom bar with price and "Book".

### Map & location privacy
Listings show an **approximate area only**: a soft `primary-tint` circle (~400 m radius, 2px dashed `primary` edge) with no pin. The exact address and a solid pin (the heart-pin from the logo, blue with a yellow heart) appear only after a booking is confirmed. Search-results map markers are white price pills with a blue border; the selected one flips to blue fill with white text.

### Space estimator card
A `feature-card-sun` with a doodle of stacked boxes. Textarea: "List what you're storing, e.g. 2 suitcases, mini fridge, 6 boxes, bike". Result shows the size category as a large `heading-2` ("Half room"), approximate cubic feet, suggested box count, and a primary button "Show spaces that fit". Loading state: a small animated doodle box bouncing, plus "Measuring your stuff…".

### Badges & chips
- `badge-sun`: standout attributes and "New".
- `badge-blue`: neutral facts ("Verified ID", "Ground floor").
- Status badges use the semantic tint as fill and the semantic color as text: Confirmed (success), Pending (warning), Cancelled (error).
- Filter chips are white pills with a strong hairline; selected chips go `primary-tint` with blue text and border.

### Forms
White inputs, 52px tall, `rounded.md`, `hairline-strong` border, `caption` label above. Focus: 2px `primary` border plus a 3px `primary-tint` ring. Errors: `error` border, error text below with an icon. Never rely on color alone.

### Navigation
- **Top nav:** cream background, 72px, hairline bottom border. Logo (horizontal lockup) left, search pill compact in the center on app pages, right side: "Become a host" ghost button, avatar menu.
- **Footer:** `primary-deep` band, white and `sun` text, a row of small white line doodles (suitcase, boxes, globe) along the top edge.

### Empty states
Every empty state gets a doodle, one line of `heading-3`, one line of body, and one button. Example: no bookings yet → doodle of a student holding a box → "Nothing stored yet" → "Find a space near campus".

## 5. Layout Principles

- 4px base unit. Tokens: 4, 8, 12, 16, 24, 32, 48, 72, 96.
- Max content width 1200px; listing detail 1080px. Side gutters 16px on mobile, 24px tablet, 40px desktop.
- Marketing sections: 72–96px vertical padding, generous. App screens: tighter, 24–48px between sections, cards 16–24px apart. As with Airbnb: open hero, dense marketplace below.
- Listing grid: 1 column on mobile, 2 tablet, 3 laptop, 4 wide.
- Landing page rhythm: hero (headline + search pill + illustration of the student-to-host handoff) → "How it works" in 3 doodle steps (List your stuff → Pick a space nearby → Drop it off) → featured spaces grid → dual cards "For students" (`feature-card-blue`) / "For hosts" (`feature-card-sun`) → FAQ → footer.

## 6. Depth & Elevation

Mostly flat. Depth comes from white-on-cream separation.

- **flat:** default for everything.
- **float:** `0 1px 0 rgba(20,50,74,.04), 0 4px 14px rgba(20,50,74,.08)`. Search pill, booking card, menus, hovered listing cards. The only soft shadow.
- **sticker:** hard offset `3px 3px 0 #0064A4` with a 2px blue border. Playful accent for marketing elements only (a "How it works" step card, the logo badge). Never in the app UI.
- Modal scrim: `ink` at 50%.

## 7. Illustration & Imagery

- **Doodles** match the concept art: loose 2px blue line work, flat yellow fills, small "shine" tick marks around highlighted objects, cream background showing through. Subjects: house, heart-pin, open box, suitcase, stacked boxes, bike, globe, plane, students handing over a box.
- Use doodles for: hero, How it works, empty states, estimator, footer edge, error pages. Never on listing photos.
- **Listing photos** are real photos of real spaces, natural light, no filters. They carry the trust; doodles carry the warmth.
- **Icons:** Lucide (ships with shadcn), 1.75px stroke, `primary` color. Use doodle icons only in marketing/illustrative spots.
- **Highlight swipe:** to emphasize one word in a headline, put a hand-drawn `sun` marker stroke behind it (an SVG blob at ~70% height). Max one per headline.

## 8. Voice

Friendly, short and specific. Talk like an upperclassman who's done this before.
- "Store your stuff 5 minutes from campus." not "Secure peer-to-peer storage solutions."
- Buttons are verbs: "Find space", "Book this space", "List your garage".
- Hosts are "hosts," students are "students," the space is a "space," never "unit."

## 9. Do's and Don'ts

**Do**
- Keep the cream canvas on every page.
- Put text on yellow in `ink` only.
- Use one primary (blue) button per view and at most one sun button per page.
- Round everything: pills for buttons/chips/inputs-in-search, 12–24px for cards.
- Show approximate location until a booking is confirmed.
- Pair every doodle with real, readable UI.

**Don't**
- Don't use yellow for text, thin lines or icons on light backgrounds.
- Don't use pure black or cool grays; text is navy `ink`, lines are warm beige.
- Don't use Patrick Hand for anything functional.
- Don't stack shadows or use gradients. No glassmorphism, no neon, no dark mode for now.
- Don't put doodles over listing photos or crowd a screen with more than ~3 illustrations.
- Don't copy Airbnb's coral, logo, or wording; we borrowed the layout patterns, not the brand.

## 10. Responsive Behavior

| Name | Width | Key changes |
|---|---|---|
| Mobile | < 640px | Search pill becomes one tappable pill → full-screen sheet. Listing grid 1-up. Booking card → sticky bottom bar. Nav collapses to logo + avatar/menu. Hero headline 40px. |
| Tablet | 640–1023px | Listing grid 2-up. Booking card stays in flow below the gallery. |
| Laptop | 1024–1439px | Full search pill, grid 3-up, two-column listing detail with sticky booking card. |
| Wide | ≥ 1440px | Grid 4-up, content capped at 1200px. |

Touch targets are at least 44×44px. The heart button is 36px with extra hit area.

## 11. Implementation Notes (Next.js + Tailwind + shadcn/ui)

Map tokens onto shadcn's CSS variables in `app/globals.css` so every shadcn component inherits the brand:

```css
:root {
  --background: #FDF8F0;      /* canvas */
  --foreground: #14324A;      /* ink */
  --card: #FFFFFF;
  --card-foreground: #14324A;
  --popover: #FFFFFF;
  --popover-foreground: #14324A;
  --primary: #0064A4;
  --primary-foreground: #FFFFFF;
  --secondary: #FFF4BF;       /* sun-tint */
  --secondary-foreground: #14324A;
  --accent: #E3EEF7;          /* primary-tint */
  --accent-foreground: #004F82;
  --muted: #F6EEDF;           /* surface-sunk */
  --muted-foreground: #5E6B76;
  --destructive: #C2362B;
  --border: #E8DFCF;
  --input: #CFC3AE;
  --ring: #0064A4;
  --radius: 1rem;
  --sun: #FFD100;
}
```

Fonts via `next/font/google`: `Fredoka` (weights 500, 600) as `--font-heading`, `Nunito` (400, 700, 800) as `--font-sans`, `Patrick_Hand` (400) as `--font-hand`.

## 12. Agent Prompt Guide

When building any HomeBase screen:
1. Start on the cream `canvas`; put content in white cards with warm hairline borders.
2. Headings in Fredoka, blue. Body in Nunito, navy `ink`.
3. One blue pill primary action. Yellow only for badges, highlights, illustration fills, or the single marketing CTA (with `ink` text).
4. Follow the marketplace patterns above (search pill, photo-first cards, sticky booking card).
5. Add warmth with one doodle or one handwritten annotation, not both, unless it's the landing hero.
6. Check: no yellow text on light backgrounds, no black, no cool gray, location approximate unless booked.

Example prompts:
- "Build the HomeBase landing hero: cream canvas, Fredoka headline 'Summer storage, five minutes from campus' with a sun highlight swipe behind 'five minutes', the white search pill below, and the student-hands-box-to-host doodle on the right with a Patrick Hand note 'drop-off in 5 min ♡'."
- "Build a listing card grid with 8 seeded listings following the listing-card spec."
- "Build the listing detail page with the sticky booking card and an approximate-location map circle."
