## version: alpha
name: Serenity Safar & Family Privilege — Group & Heritage Storefront (Ortasys S4)
description: Warm courtyard sanctuary storefront built on the Ortasys S4 white-label engine, designed for multi-generational family vacations and group journeys leveraging up to 9 rooms and 20 guests per room.
colors:
primary: "#4A1D34"
primary-hover: "#351324"
secondary: "#6B5B53"
tertiary: "#0F766E"
tertiary-hover: "#115E59"
neutral: "#FDFBF7"
surface: "#FFFFFF"
surface-muted: "#F5EFE6"
on-surface: "#27151E"
on-primary: "#FFFFFF"
border-subtle: "#E6DDD3"
success: "#15803D"
warning: "#B45309"
error: "#BE123C"
typography:
headline-display:
fontFamily: Cormorant Garamond
fontSize: 48px
fontWeight: 700
lineHeight: 1.12
letterSpacing: -0.015em
headline-lg:
fontFamily: Cormorant Garamond
fontSize: 36px
fontWeight: 700
lineHeight: 1.18
letterSpacing: -0.01em
headline-md:
fontFamily: Cormorant Garamond
fontSize: 26px
fontWeight: 600
lineHeight: 1.25
letterSpacing: 0em
body-lg:
fontFamily: Source Sans 3
fontSize: 18px
fontWeight: 400
lineHeight: 1.65
letterSpacing: 0em
body-md:
fontFamily: Source Sans 3
fontSize: 16px
fontWeight: 400
lineHeight: 1.6
letterSpacing: 0em
body-sm:
fontFamily: Source Sans 3
fontSize: 15px
fontWeight: 400
lineHeight: 1.5
letterSpacing: 0em
label-lg:
fontFamily: Source Sans 3
fontSize: 15px
fontWeight: 600
lineHeight: 1.2
letterSpacing: 0.01em
label-md:
fontFamily: DM Mono
fontSize: 13px
fontWeight: 500
lineHeight: 1.2
letterSpacing: 0.01em
fontFeature: "'tnum' on"
label-sm:
fontFamily: Source Sans 3
fontSize: 12px
fontWeight: 700
lineHeight: 1.15
letterSpacing: 0.06em
rounded:
none: 0px
sm: 8px
md: 12px
lg: 20px
xl: 28px
full: 9999px
spacing:
xs: 4px
sm: 8px
md: 16px
lg: 24px
xl: 36px
xxl: 64px
container-max: 1180px
grid-gutter: 28px
section-padding: 64px
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.on-primary}"
typography: "{typography.label-lg}"
rounded: "{rounded.md}"
padding: 14px
height: 50px
button-primary-hover:
backgroundColor: "{colors.primary-hover}"
button-cta-live-check:
backgroundColor: "{colors.tertiary}"
textColor: "{colors.on-primary}"
typography: "{typography.label-lg}"
rounded: "{rounded.md}"
padding: 14px
height: 50px
button-cta-live-check-hover:
backgroundColor: "{colors.tertiary-hover}"
search-console-card:
backgroundColor: "{colors.surface}"
textColor: "{colors.on-surface}"
rounded: "{rounded.lg}"
padding: "{spacing.xl}"
input-field:
backgroundColor: "{colors.neutral}"
textColor: "{colors.on-surface}"
typography: "{typography.body-md}"
rounded: "{rounded.md}"
padding: 14px
height: 50px
chip-module-active:
backgroundColor: "{colors.primary}"
textColor: "{colors.on-primary}"
typography: "{typography.label-sm}"
rounded: "{rounded.full}"
padding: 10px

# DESIGN.md — Serenity Safar & Family Privilege (Ortasys S4 Storefront #5)

## Overview

Serenity Safar & Family Privilege is a family group, heritage tour, and halal-friendly luxury travel agency operating on the **Ortasys S4 White-Label Layer**. Its visual style is **Warm Courtyard Sanctuary & Guided Family Hospitality** — specifically engineered around one of Ortasys S4's most distinctive functional capabilities: supporting large family and group configurations of **1 to 9 Rooms**, **1 to 20 Adults per room**, and **0 to 20 Children per room** (where all rooms share equal occupancy) for stays up to **30 nights** \[F: PRD 6.1\].

The design prioritizes generous font sizes (`16px–18px` body), reassuring step-by-step guidance for older and multi-generational family decision-makers, warm parchment surfaces, and complete isolation from B2B wholesale net pricing.

## Colors

A dignified, welcoming palette of deep pomegranate plum, warm sandstone parchment, and oasis turquoise.

| Token Key | Hex Value | Semantic Role & Application on Ortasys S4 | Contrast Ratio | 
| ----- | ----- | ----- | ----- | 
| `primary` | `#4A1D34` | **Deep Pomegranate Plum** — Brand header, active navigation indicators, and primary room selection buttons. | 11.4:1 on `#FFFFFF` | 
| `secondary` | `#6B5B53` | **Warm Taupe** — Family occupancy helper explanations, room inclusion notes, and footer links. | 5.9:1 on `#FDFBF7` | 
| `tertiary` | `#0F766E` | **Oasis Turquoise** — Reassuring high-contrast *"Check Live Price"* action button and verified live-price badges. | 5.4:1 on `#FFFFFF` | 
| `neutral` | `#FDFBF7` | **Warm Parchment Ivory** — Gentle, low-glare background canvas for comfortable extended reading. | Base Canvas | 
| `surface` | `#FFFFFF` | **Courtyard Alabaster** — Guided search card, family stay cards, and *"Why travel with us"* sanctuary panels. | Card Surface | 
| `on-surface` | `#27151E` | **Deep Mulberry Ink** — Primary headlines and body text with superior readability. | 16.2:1 on `#FFFFFF` | 
| `error` | `#BE123C` | **Rosewood Alert** — Clear, polite inline error message when nights exceed 30 or occupancy fields need attention. | 5.8:1 on `#FFFFFF` | 

## Typography

* **Headlines (`Cormorant Garamond`):** Classical, graceful serif headings (`48px` display, `36px` section) that evoke heritage hospitality, trust, and warmth.

* **Accessible Body & Labels (`Source Sans 3`):** Set at a generous `16px` (`body-md`) and `15px` (`body-sm`) with `50px` tall input fields so multi-generational family planners can read and tap effortlessly without eye strain.

* **Family Group & Price Counters (`DM Mono`):** Tabular numerals (`label-md`) for live-checked family package totals and clear room-by-guest multiplication (`e.g., 3 Rooms × 4 Adults + 2 Children per room`).

## Layout

Serenity Safar uses a **Spacious Sanctuary Card Flow & Guided Step-by-Step Search Layout** (`1180px` max width, wide `28px` gutters, and `36px` internal card padding):

1. **Centered Sanctuary Header:** Two-tier header with the Serenity Safar crest and contact assistance bar on top, followed by a calm centered navigation bar housing the 5 Ortasys S4 modules (`Home`, `Tours`, `Things to do`, `Hotels`, `Build your trip` \[F\]).

2. **Guided 3-Step Search Console Card:** Instead of crowding all inputs into a narrow strip, the S4 search engine is organized into three clearly numbered visual steps inside a spacious `#FFFFFF` card:

   * **Step 1 — Choose Experience & Destination:** `Hotels` vs `Activities` switch + `Destination or hotel` selector \[F\].

   * **Step 2 — Select Travel Dates (Up to 30 Nights):** Check-in and Check-out pickers with an automatic night badge \[F\].

   * **Step 3 — Configure Family Rooms:** Dedicated visual counter for `Rooms (1–9)`, `Adults per room (1–20)`, and `Children per room (0–20)` with an explicit, friendly callout explaining that each room accommodates the same number of family members \[F\].

3. **2-Column Wide Family Stay Showcase:** Large, unhurried property cards (2 per row on desktop) providing ample space for multi-room total price breakdowns (marked as *"Illustrative Sample Data"* in mockups).

4. **Warm Sandstone "Why travel with us" Section \[F\]:** Set on `#F5EFE6` (`surface-muted`) with three arch-topped (`rounded.lg: 20px`) cards highlighting Local Family Care, Live Checked Pricing (*"Every price is checked live when you ask for it"*), and Dedicated Concierge Assistance.

## Elevation & Depth

Depth is expressed through **Soft Sandstone Layering and Warm Taupe Borders**:

* Cards sit on `#FFFFFF` with a `1px solid #E6DDD3` border and a warm, low-contrast shadow (`0 10px 30px -6px rgba(74, 29, 52, 0.07)`).

* Step panels inside the search console use `#FDFBF7` recessed wells to guide the user's eye naturally from Step 1 to Step 3.

## Shapes

Inspired by **Courtyard Arches and Soft Cushioned Surfaces**:

* **Buttons & Inputs (`rounded.md: 12px`):** Friendly, approachable corners with a generous `50px` touch height.

* **Search Console & Family Cards (`rounded.lg: 20px`, `rounded.xl: 28px`):** Soft architectural framing that feels calm and welcoming.

## Components

* **Guided S4 Family Search Console (`search-console-card`):**

  * Highlights the Ortasys S4 multi-room capability (`1–9 rooms`, `1–20 adults/room`, `0–20 children/room` \[F\]) with a live "Total Family Group Size" summary pill.

  * Displays the verbatim product promise *"Every price is checked live when you ask for it"* \[F\] next to the Oasis Turquoise *"Check Live Price"* button.

* **Family Group Stay Card:** Shows both the per-room nightly retail rate and the combined multi-room retail total, settled via **DOKU** & **SNAP BI** \[F\].

## Do's and Don'ts

* **Do** maintain generous `50px` input/button heights and `15px–16px` minimum body text for multi-generational accessibility.

* **Do** surface a live "Total Family Group" summary badge that multiplies `Rooms × (Adults + Children per room)` per the Ortasys S4 equal-occupancy rule \[F\].

* **Do** mark all sample hotel names and retail figures in mockups as *"Illustrative Sample Data"* \[PRD 9.2\].

* **Don't** expose B2B wholesale net rates, agent margins, or supplier badges (`RateHawk`, `Cloudbeds`, `MyAllocator`) to travelers.

* **Don't** cram more than 2 property cards per row on desktop viewports; preserve generous breathing room.