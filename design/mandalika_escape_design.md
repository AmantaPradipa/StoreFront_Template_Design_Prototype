---
version: alpha
name: Mandalika Escape — Tropical Biophilic Resort Storefront (Ortasys S4)
description: Sunlit coastal and eco-resort storefront built on the Ortasys S4 white-label engine, featuring rainforest emerald tones, terracotta sunset accents, and a panoramic bento discovery layout.
colors:
  primary: "#065F46"
  primary-hover: "#064E3B"
  secondary: "#57534E"
  tertiary: "#C2410C"
  tertiary-hover: "#9A3412"
  neutral: "#F4F7F4"
  surface: "#FFFFFF"
  surface-muted: "#E6EFE9"
  on-surface: "#14261D"
  on-primary: "#FFFFFF"
  border-subtle: "#D5E2DA"
  success: "#15803D"
  warning: "#B45309"
  error: "#DC2626"
typography:
  headline-display:
    fontFamily: Fraunces
    fontSize: 46px
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Fraunces
    fontSize: 34px
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Fraunces
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.28
    letterSpacing: -0.01em
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: 0em
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0em
  body-sm:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0em
  label-lg:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.01em
  label-md:
    fontFamily: Space Grotesk
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.01em
    fontFeature: "'tnum' on"
  label-sm:
    fontFamily: DM Sans
    fontSize: 11px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: 0.06em
rounded:
  none: 0px
  sm: 10px
  md: 16px
  lg: 24px
  xl: 32px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 72px
  container-max: 1280px
  grid-gutter: 24px
  section-padding: 72px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: 14px
    height: 48px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-cta-live-check:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: 14px
    height: 48px
  button-cta-live-check-hover:
    backgroundColor: "{colors.tertiary-hover}"
  search-console-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.xl}"
    padding: "{spacing.lg}"
  input-field:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 12px
    height: 48px
  chip-module-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 10px
---

# DESIGN.md — Mandalika Escape (Ortasys S4 Storefront #2)

## Overview

Mandalika Escape is an island, coastal, and eco-resort specialist agency operating its white-label B2C storefront on the **Ortasys S4 Layer** (inspired by Ortasys's Lombok hospitality roots in Kuta Mandalika [F]). Its visual style is **Organic Biophilic Resort & Coastal Sunlit Minimalism**, crafted for honeymooners, surf & wellness travelers, and island-hopping vacationers across Lombok, Bali, and eastern Indonesia.

While sharing the exact underlying Ortasys S4 search and booking engine, Mandalika Escape transforms the visual presentation through organic curves, botanical greens, and a split-screen discovery layout:

- **Live Price Transparency [F]:** Features the core S4 guarantee *"Every price is checked live when you ask for it"* alongside instant retail package totals.
- **Complete White-Label Separation [A]:** Displays only Mandalika Escape branding and final traveler selling prices; all B2B net rates and supplier codes remain strictly confined to the S2 Agent Portal.

## Colors

Inspired by tropical foliage, volcanic coastal stone, and sunset horizons over Kuta Mandalika, every token pair is calibrated for WCAG AA accessibility.

| Token Key | Hex Value | Semantic Role & Application on Ortasys S4 | Contrast Ratio |
| :--- | :--- | :--- | :--- |
| `primary` | `#065F46` | **Rainforest Emerald** — Brand identity, active `Hotels` / `Activities` pill switchers, and room selection actions. | 7.6:1 on `#FFFFFF` |
| `secondary` | `#57534E` | **Volcanic Stone** — Supporting descriptions, room occupancy notes, and footer navigation links. | 6.8:1 on `#F4F7F4` |
| `tertiary` | `#C2410C` | **Terracotta Sunset** — Primary *"Check Live Price"* action button and *"Build your trip"* coastal itinerary badge. | 5.2:1 on `#FFFFFF` |
| `neutral` | `#F4F7F4` | **Palm Mist** — Soft botanical off-white page background that reduces glare on mobile screens outdoors. | Base Canvas |
| `surface` | `#FFFFFF` | **Sunlit Coral White** — Elevated search dock, bento resort cards, and *"Why travel with us"* feature pods. | Card Surface |
| `on-surface` | `#14261D` | **Deep Mangrove Ink** — High-contrast organic dark green-charcoal for all headings and body text. | 15.9:1 on `#FFFFFF` |
| `error` | `#DC2626` | **Hibiscus Alert** — Inline form validation for >30 night ranges or invalid guest counts. | 5.6:1 on `#FFFFFF` |

## Typography

- **Headlines (`Fraunces`):** An expressive, soft-serif variable font that lends a relaxed, coastal boutique resort personality to hero statements and destination bento headers.
- **Body & Form Controls (`DM Sans`):** Geometric yet rounded sans-serif at `16px` (`body-md`) for effortless scanning on both mobile and desktop viewports.
- **Live Pricing & Dates (`Space Grotesk`):** Set with `tabular-nums` (`label-md`) for live-checked nightly totals, night count badges (`1–30 Nights`), and multi-room summaries.

## Layout

Unlike Bagus Travel's top-down editorial stack, Mandalika Escape utilizes a **Panoramic Split-Hero & Bento Discovery Grid** (`1280px` max width, 12-column CSS Grid):

1. **Floating Pill Header Bar:** A detached, rounded navigation bar (`rounded.full`) floating `16px` from the top of the viewport, housing the Mandalika Escape logo and the 5 S4 modules (`Home`, `Tours`, `Things to do`, `Hotels`, `Build your trip` [F]).
2. **Asymmetrical 5:7 Split Hero:**
   - **Left 5 Columns (Vertical Docked Search Console):** The complete Ortasys S4 search engine (`Hotels` / `Activities` toggle, destination, check-in/out max 30 nights, `1–9` rooms, `1–20` adults/room, `0–20` children/room [F]) is stacked vertically in a sticky card so users can adjust dates without scrolling.
   - **Right 7 Columns (Visual Mosaic):** A 3-tile bento photo showcase with rounded `24px` corners and live availability tags.
3. **Bento Grid Stay & Activity Cards:** Resort stays and island activities are presented in a responsive 3-column bento layout with generous `72px` vertical section spacing.
4. **Rounded "Why travel with us" Pods [F]:** Three pebble-shaped (`24px` radius) feature cards highlighting local island expertise, live price verification, and on-ground WhatsApp/concierge support.

## Elevation & Depth

Depth relies on **Botanical Tonal Surfaces and Soft Diffused Glows**:

- **Tonal Containment:** Secondary sections sit inside `#E6EFE9` (`surface-muted`) containers with zero drop shadow.
- **Interactive Cards:** `#FFFFFF` cards use a `1px solid #D5E2DA` border and a soft green-tinted shadow (`0 12px 28px -6px rgba(6, 95, 70, 0.08)`).

## Shapes

The shape system embraces **Pebble & Pill Geometry**:

- **Buttons & Mode Toggles (`rounded.full: 9999px`):** All primary CTAs, module tabs (`Hotels` / `Activities`), and filter chips are fully pill-shaped.
- **Cards & Containers (`rounded.lg: 24px`, `rounded.xl: 32px`):** Generous organic corner radii soften photography and create a resort-sanctuary atmosphere.

## Components

- **Vertical Docked S4 Search Console (`search-console-card`):**
  - Houses the pill-shaped `Hotels` and `Activities` switcher at the top.
  - Stacks `Destination or hotel`, `Check-in / Check-out` (with automatic `Max 30 Nights` badge), and a unified 3-column stepper row for `Rooms (1–9)`, `Adults/room (1–20)`, and `Children/room (0–20)` [F].
  - Displays the mandatory guarantee *"Every price is checked live when you ask for it"* [F] directly above the pill-shaped Terracotta *"Check Live Price"* button.
- **Bento Resort Card:** Features a `4:3` image container with a top-left star badge, property name in `Fraunces`, room inclusion pills, and the total retail price for the selected rooms/nights.

## Do's and Don'ts

- **Do** use pill-shaped buttons (`rounded.full`) and `24px–32px` card radii consistently across all interactive containers.
- **Do** enforce the Ortasys S4 rule that all rooms in a multi-room search (`1–9 rooms`) share identical adult (`1–20`) and child (`0–20`) occupancy [F].
- **Do** mark all mockup resort rates and availability counts as *"Illustrative Sample Data"* [PRD 9.2].
- **Don't** expose Ortasys corporate navy (`#0F172A`), B2B net rates, or supplier names (`RateHawk`, `Cloudbeds`, `MyAllocator`) to retail visitors.
- **Don't** mix sharp `4px` corners with the organic `24px` pebble card system.
