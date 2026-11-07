# Ortasys Storefront — Ten Fixed Template Presets

This package contains ten independent `DESIGN.md` files authored using the Google Stitch DESIGN.md approach: YAML front matter for machine-readable design tokens, followed by Markdown sections for human-readable design rationale.

## Prototype travel-agent brands

Each preset now has a fictional travel-agent identity so it can be evaluated as a storefront prototype. These are illustrative names, not real customers or verified businesses.

| # | Design preset | Prototype travel agent | Positioning |
|---|---|---|---|
| 1 | Local & Destination | **Jelajah Lombok** | Local destination specialist |
| 2 | Luxury & Bespoke | **Aurelia Private Journeys** | Premium and bespoke travel |
| 3 | Global & Contemporary | **Atlasway Travel** | Multi-destination digital agency |
| 4 | Culture & Heritage | **Akar Budaya Travel** | Cultural and heritage journeys |
| 5 | Adventure & Nature | **Rimba Trek Adventures** | Outdoor and nature adventures |
| 6 | Family & Group Travel | **TemanTrip Holidays** | Family and group holidays |
| 7 | Wellness & Slow Living | **Sela Retreats** | Wellness and slow travel |
| 8 | Urban & Business Travel | **MetroLink Travel** | City and business travel |
| 9 | Coastal & Island Escape | **Nusa Tide Escapes** | Coastal and island holidays |
| 10 | Budget & Backpacker | **Jalan Hemat Travel** | Budget and independent travel |

## Original templates

1. `01-local-destination/DESIGN.md` — Local & Destination
2. `02-luxury-bespoke/DESIGN.md` — Luxury & Bespoke
3. `03-global-contemporary/DESIGN.md` — Global & Contemporary
4. `04-culture-heritage/DESIGN.md` — Culture & Heritage
5. `05-adventure-nature/DESIGN.md` — Adventure & Nature

## Additional templates

6. `06-family-group/DESIGN.md` — Family & Group Travel
7. `07-wellness-slow-living/DESIGN.md` — Wellness & Slow Living
8. `08-urban-business/DESIGN.md` — Urban & Business Travel
9. `09-coastal-island/DESIGN.md` — Coastal & Island Escape
10. `10-budget-backpacker/DESIGN.md` — Budget & Backpacker

## Usage

Use one `DESIGN.md` per Stitch project/design system or import the selected file as the design reference for the relevant storefront preset. Do not combine all ten files into one design system when generating a single storefront screen.

Each numbered folder is an independent storefront. Open its own `index.html` directly; no root index or shared router is required. The cross-template prototype header and “Semua 10 Template” link are absent. Customer-facing pages do not embed design documentation. Each folder has separate `guidelines.html`, `search-board.html`, and `figcraft.html`; the root `index.html` is an optional catalogue linking directly to these files.

## Directory catalogue

- Root `index.html` is an editorial collection, not a routing shell. Its 40 unique storefront/document targets are unchanged; none of the ten template folders depend on it.
- `catalogue.css`, `catalogue.js`, and `catalogue-assets/` belong to the directory only. Layout styling no longer needs Tailwind CDN; Google Fonts retain local font-stack fallbacks.
- Preview WebPs are cropped/compressed from the supplied D01 and M01 FigCraft exports, not replacement photographs or embedded live storefronts. Existing template logos and palettes are retained. `.vizspec/brand-dna.json` locks the neutral catalogue chassis and each template's preview colours.
- Taste dials: variance 7, motion 6, density 3. One-time 720ms reveals, a viewport-paused 8s hero drift, 24px preview pan and 4px bezel lift provide motion without scroll hijacking. Reduced motion disables animation/transforms; keyboard focus cancels its reveal. All ten cards and 40 document targets remain usable without JavaScript.
- Browser verification: 320, 390, 768, 1024, 1440 and 1920px layouts without horizontal page overflow; normal/reduced-motion behavior; 23 decoded images; native index/skip anchors; and navigation to all four page types. The 176 checked flat-surface text elements had no contrast failures (minimum 4.70:1); this is not a complete WCAG audit.


## Implemented visual directions

The HTML adapts the existing `Ortasys_StoreFront.figcraft` D01/D02/D12 compositions without changing that design file or regenerating its supplied logos and photographs. These are different form structures and page compositions, not ten colour variants of one layout.

| Template | Search anatomy | Page composition |
|---|---|---|
| 01 Jelajah Lombok | Attached ivory capsule; floating mode tabs; anchored date and guest panels | Postcard collage, destination quartet, spotlight plus paired stays, host letter |
| 02 Aurelia | Ruled rectangular ledger; separate date cells; guest panel; flush full-height action | Architectural portrait, alternating lookbook rows, quiet advisory ledger |
| 03 Atlasway | Docked multi-hub command deck; destination shortcuts; grouped date and party controls | Search-first split hero and horizontal comparison rows |
| 04 Akar Budaya | Double-rule guest registry; Roman-numbered fields; expandable party ledger | Broadsheet hero, exhibition columns, documentary spreads |
| 05 Rimba Trek | Vertical field-station dispatch console beside catalogue | Landscape expedition hero, route dossiers and basecamp rows |
| 06 TemanTrip | Functional destination → dates → party/ages wizard, with Next/Back and retained input | Family scrapbook and comparison inventory |
| 07 Sela Retreats | Floating intention pill; date pair; anchored capacity panel | Centered pavilion, arched imagery, single-column sanctuary collection |
| 08 MetroLink | Seven-segment inline corporate ribbon | Skyline strip and four-column property ledger |
| 09 Nusa Tide | Harbor/beachfront split-deck console | Coastal editorial, interactive island strip and staggered lookbook |
| 10 Jalan Hemat | Perforated boarding-pass form with calculated tear-off summary/action | Departure board and ticket inventory |

## Prototype boundaries

- Local sample catalogue only: search results and prices do not verify live availability. Booking/payment completion is explicitly simulated and does not charge money, reserve inventory, or issue an official voucher.
- Required search validation covers destination, 1–30 nights, 1–9 rooms, 1–20 adults and 0–20 children per room, with an explicit age for every child. The family planner validates each step before advancing.
- Date values remain native form fields, enhanced with a brand-styled single-month Indonesian calendar. Destination suggestions, select menus and calendars share each preset's surfaces, typography, selection and focus treatment. Popovers support keyboard interaction and viewport-bounded placement; browsers without Popover API retain native controls. D12 dual-month/calendar variants remain design references.
- Download actions produce actual sample summaries, labelled as examples rather than official vouchers. Contact actions remain unconnected demonstrations.
- External Google Fonts and the inherited Tailwind CDN on templates 03–10/documentation require network access. Every folder has its own `components.css` and `components.js`; templates 01–02 also use sibling `storefront.css` and `storefront.js`. Keep each folder intact when copying or deploying it; no root import/router is required.
- Every template's `DESIGN.md` records its implemented hierarchy, search shape and responsive behavior. `brand-dna.json` remains its colour/identity source.


## Browser verification

- All ten storefronts and their opened calendars were exercised at 1440, 768, 390 and 320 px (40 viewport cases), without horizontal page overflow. Destination suggestions and dynamic age menus were selected with pointer and keyboard; native values were preserved.
- Stay/tour search, no-match results, explicit child ages, the 30-night boundary, item details, trip selection and simulated checkout were exercised. The family wizard also rejects invalid steps and retains input when moving back.
- Component corrections include wrapped action/price rows, reserved icon space, visible close controls, viewport-bounded scrolling, separated gallery/badge rows and noninteractive notifications. All ten search → detail → populated trip → simulated checkout paths were exercised at 320px.
- All 30 standalone documentation pages rendered with their images decoded successfully. Optional catalogue → guidelines → independent storefront navigation was exercised.
- Observed flat-surface text contrast failures were corrected. Selected calendar days were also checked while focused/hovered in all ten brands (at least 4.5:1); focused dates remain visible inside scrolling menus. Leap-day/month-end navigation, date bounds and nested Escape dismissal were exercised. These targeted checks are not a complete WCAG audit.
- Component CSS literal colours were cross-checked against each `brand-dna.json` `tokens` registry with no unregistered colours found. The bundled `audit_tokens.py` expects the older `colors.*.hex` schema, so its empty palette and warnings on 05/06 are not valid palette/contrast evidence for these files.

## Shared product rules

- Fixed layout and visual preset. Agent configuration is limited to approved brand assets and content.
- Shared Ortasys booking engine and transaction behavior.
- Public storefront shows customer-facing selling prices only.
- Supplier net rates, agent margins, wallet balances, and settlement data remain private.
- Do not invent inventory, hotel counts, reviews, ratings, certifications, guarantees, partner claims, or unsupported capabilities.
- Any sample property, price, destination, or testimonial in a prototype must be clearly identified as illustrative.

## Status

These are proposed design directions for exploration, not confirmed Ortasys corporate brand standards. The palettes, fonts, and layout rules are template recommendations and should be validated through homepage prototypes and stakeholder review.
