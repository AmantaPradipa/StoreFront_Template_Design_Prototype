---
version: alpha
name: Bagus Travel — Editorial Heritage Luxury Storefront (Ortasys S4)
description: Quiet-luxury bespoke travel agency storefront built on the Ortasys S4 white-label engine, pairing warm limestone surfaces with deep ocean teal and artisanal amber accents.
colors:
  primary: "#0F4C5C"
  primary-hover: "#093540"
  secondary: "#475569"
  tertiary: "#B45309"
  tertiary-hover: "#92400E"
  neutral: "#FAF8F5"
  surface: "#FFFFFF"
  surface-muted: "#F3EFEA"
  on-surface: "#1C1917"
  on-primary: "#FFFFFF"
  border-subtle: "#E7E2DA"
  success: "#15803D"
  warning: "#B45309"
  error: "#B91C1C"
typography:
  headline-display:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: 0em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.005em
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.02em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.01em
    fontFeature: "'tnum' on"
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: 0.08em
rounded:
  none: 0px
  sm: 6px
  md: 10px
  lg: 16px
  xl: 24px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 64px
  container-max: 1200px
  grid-gutter: 24px
  section-padding: 64px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    padding: 14px
    height: 48px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-cta-live-check:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    padding: 14px
    height: 48px
  button-cta-live-check-hover:
    backgroundColor: "{colors.tertiary-hover}"
  search-console-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  input-field:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: 12px
    height: 46px
  chip-module-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 8px
---

# DESIGN.md — Bagus Travel (Ortasys S4 Storefront #1)

## Overview

Bagus Travel is the canonical reference storefront (`bagustravel.demostorefront.ortasys.com` [F]) on the **Ortasys S4 White-Label B2C Layer**. Its visual identity embodies **Editorial Heritage Luxury & Bespoke Concierge** — designed for discerning leisure travelers seeking curated villas, boutique hotels, private tours, and custom itineraries across Indonesia and beyond.

The interface balances the warmth of a high-end print travel journal with the deterministic reliability of the Ortasys real-time distribution engine:

- **Brand Headline & Promise [F]:** Hero copy leads with *"Private journeys by Bagus Travel"* and reinforces the core functional guarantee: *"Every price is checked live when you ask for it"*.
- **Strict B2B2C Isolation [A]:** Travelers interact exclusively with the Bagus Travel brand. Wholesale B2B net rates, agent profit margins, and upstream bedbank identifiers (RateHawk, Cloudbeds, MyAllocator) never appear on this surface.
- **Evidence-First Integrity [F]:** All sample hotel cards in design previews must carry an explicit *"Illustrative Sample Data"* badge, and checkout flows reference verified **DOKU** and **SNAP BI** payment rails.

## Colors

The palette pairs sun-warmed limestone neutrals with deep Indonesian ocean teal and artisanal amber gold. Every text-on-surface combination exceeds WCAG AA (4.5:1) contrast requirements.

| Token Key | Hex Value | Semantic Role & Application on Ortasys S4 | Contrast Ratio |
| :--- | :--- | :--- | :--- |
| `primary` | `#0F4C5C` | **Deep Ocean Teal** — Brand header identity, active search mode tab (`Hotels` / `Activities`), and primary stay selection buttons. | 9.1:1 on `#FFFFFF` |
| `secondary` | `#475569` | **Warm Slate** — Secondary metadata, occupancy helper text, and footer navigation links (`About us`, `Contact`, `FAQ`). | 7.2:1 on `#FAF8F5` |
| `tertiary` | `#B45309` | **Artisanal Amber Gold** — High-intent conversion trigger for the *"Check Live Price"* button and *"Build your trip"* header pill. | 5.0:1 on `#FFFFFF` |
| `neutral` | `#FAF8F5` | **Alabaster Limestone** — Primary page canvas, creating an editorial magazine warmth distinct from sterile corporate white. | Base Canvas |
| `surface` | `#FFFFFF` | **Pure Crisp Paper** — Floating S4 search console, stay cards, and the *"Why travel with us"* value container. | Card Surface |
| `on-surface` | `#1C1917` | **Charcoal Espresso** — Primary editorial headlines and body copy. | 16.8:1 on `#FFFFFF` |
| `error` | `#B91C1C` | **Crimson Alert** — Validation feedback when stay duration exceeds the 30-night limit or occupancy rules are violated. | 6.4:1 on `#FFFFFF` |

## Typography

The typography system establishes a dialogue between classic literary storytelling and live-pricing precision:

- **Headlines (`Playfair Display`):** High-contrast serif used for the hero title (*"Private journeys by Bagus Travel"*), destination headers, and the *"Why travel with us"* section title.
- **Body & Controls (`Plus Jakarta Sans`):** Clean humanist sans-serif at `16px` (`body-md`) and `14px` (`body-sm`) for form labels, cancellation summaries, and concierge descriptions.
- **Live Pricing & Occupancy Counters (`JetBrains Mono`):** Monospace with `font-variant-numeric: tabular-nums` (`label-md`) for retail prices, date ranges, and room/guest matrices so numbers align vertically across comparison cards.

## Layout

Bagus Travel uses a **Centered Editorial Atelier Layout** (`1200px` max container width, 12-column grid with `24px` gutters, and `8px` spatial rhythm):

1. **Top Editorial Header (72px height):** Left-aligned Bagus Travel monogram and wordmark; center navigation bar featuring the exact Ortasys S4 modules (`Home`, `Tours`, `Things to do`, `Hotels`, and a pill-styled `Build your trip` CTA [F]).
2. **Split Editorial Hero + Overlapping Search Console:** A `480px` atmospheric hero frame with an aspect-ratio-locked image container (`16:9` desktop, `4:3` mobile with graceful SVG fallback) and an overlapping floating search console (`-48px` top offset) anchored at the bottom edge.
3. **Asymmetrical 3-Column Curated Stay Showcase:** Displays live-checked retail property cards (explicitly badged as illustrative sample data in mockups) with generous `24px` internal padding.
4. **3-Pillar "Why travel with us" Narrative Block [F]:** Three balanced columns highlighting (1) Local knowledge, (2) Live checked pricing, and (3) Dedicated concierge support.
5. **Minimalist Atelier Footer [F]:** Contains `About us`, `Contact`, `FAQ`, and DOKU / SNAP BI payment trust notices.

## Elevation & Depth

Depth is expressed through **Warm Tonal Layering and Diffused Ambient Shadows** rather than heavy dark borders:

- **Level 0 (Canvas):** `#FAF8F5` warm limestone base.
- **Level 1 (Content Cards):** `#FFFFFF` surface with a `1px solid #E7E2DA` warm hairline border and subtle ambient shadow (`0 4px 20px -4px rgba(28, 25, 23, 0.06)`).
- **Level 2 (Floating Search Console & Popovers):** `#FFFFFF` surface with elevated shadow (`0 16px 36px -8px rgba(15, 76, 92, 0.14)`) to separate the interactive booking console from the hero photography.

## Shapes

The shape language blends **Editorial Refinement with Approachable Softness**:

- **Inputs & Buttons (`rounded.sm: 6px`, `rounded.md: 10px`):** Crisp enough to feel bespoke and tailored, avoiding overly bubbly consumer OTA tropes.
- **Search Console & Property Cards (`rounded.lg: 16px`):** Smooth framing for photography and multi-field booking forms.
- **Navigation Pills (`rounded.full: 9999px`):** Reserved for the *"Build your trip"* header button and active filter chips.

## Components

All components bind strictly to the **Ortasys S4 Functional Requirements (FR-1, FR-2, FR-3, FR-4, FR-6)**:

- **S4 Search Engine Console (`search-console-card`):**
  - **Mode Switcher Tabs [F]:** Segmented toggle switching between `Hotels` and `Activities`.
  - **Destination Input:** Text/autocomplete field (`Destination or hotel`) with minimum `46px` touch height.
  - **Dual Date Picker [F]:** Check-in and Check-out inputs enforcing a strict **maximum of 30 nights**; retail prices remain hidden until valid dates are selected.
  - **Uniform Multi-Room Occupancy Selector [F]:** Steppers/dropdowns for `Rooms (1–9)`, `Adults per room (1–20)`, and `Children per room (0–20)`, accompanied by a clear helper note stating that all booked rooms share the same guest configuration.
  - **Live Price Promise Strip [F]:** Inline status caption below the form reading *"Every price is checked live when you ask for it"*.
- **Retail Property Card:** Displays property hero image, star classification, room title, meal plan, and **Total Retail Selling Price** (multiplied across selected nights and rooms) with a primary *"Select Stay"* button.

## Do's and Don'ts

- **Do** display only the final retail selling price to travelers on every Bagus Travel screen.
- **Do** enforce the exact Ortasys S4 occupancy bounds (`1–9` rooms, `1–20` adults/room, `0–20` children/room, max `30` nights) in all form states.
- **Do** include the verbatim product promise *"Every price is checked live when you ask for it"* [F] inside the search console.
- **Do** label any mockup hotel prices or property names clearly as *"Illustrative Sample Data"* [PRD 9.2].
- **Don't** leak B2B wholesale net rates, agent markup percentages (`+12%`), or supplier badges (`RateHawk`, `Cloudbeds`, `MyAllocator`) anywhere on S4.
- **Don't** include unverified platform claims such as *"1,000,000+ hotels"*, *"99.98% uptime SLA"*, or *"PCI-DSS certified"* [PRD 9.2].
- **Don't** use pure `#000000` black or sterile `#F0F4F8` blue-gray backgrounds; preserve the warm `#FAF8F5` limestone editorial tone.
