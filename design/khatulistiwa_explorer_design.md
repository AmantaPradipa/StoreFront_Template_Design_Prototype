---
version: alpha
name: Khatulistiwa Explorer — Adventure & Multi-Stop Trip Storefront (Ortasys S4)
description: Kinetic neo-brutalist expedition and custom itinerary storefront built on the Ortasys S4 white-label engine, foregrounding Activities, Tours, and Build Your Trip flows.
colors:
  primary: "#18181B"
  primary-hover: "#27272A"
  secondary: "#52525B"
  tertiary: "#C2410C"
  tertiary-hover: "#9A3412"
  neutral: "#FEFCE8"
  surface: "#FFFFFF"
  surface-muted: "#FEF9C3"
  on-surface: "#09090B"
  on-primary: "#FFFFFF"
  border-strong: "#18181B"
  success: "#15803D"
  warning: "#B45309"
  error: "#DC2626"
typography:
  headline-display:
    fontFamily: Space Grotesk
    fontSize: 44px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Public Sans
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0em
  body-md:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  body-sm:
    fontFamily: Public Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0em
  label-lg:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.02em
  label-md:
    fontFamily: Space Mono
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0em
    fontFeature: "'tnum' on"
  label-sm:
    fontFamily: Space Mono
    fontSize: 11px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: 0.06em
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 56px
  container-max: 1240px
  grid-gutter: 20px
  section-padding: 56px
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
    height: 48px
  chip-module-active:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    padding: 8px
---

# DESIGN.md — Khatulistiwa Explorer (Ortasys S4 Storefront #4)

## Overview

Khatulistiwa Explorer is an adventure, overland tour, and custom itinerary agency whose storefront runs on the **Ortasys S4 White-Label Layer**. Its aesthetic is **Kinetic Neo-Brutalist Field Guide & Expedition Workbench** — built for backpackers, volcano trekkers, dive groups, and independent travelers who actively use the S4 `Tours`, `Things to do`, `Hotels`, and `Build your trip` modules [F: FR-3, FR-4].

Inspired by topographic field manuals and boarding passes, Khatulistiwa Explorer uses high-contrast ink borders (`2px solid #18181B`), tactile offset shadows, and monospace telemetry while honoring every Ortasys S4 functional constraint and hiding all B2B net pricing.

## Colors

High-contrast topographic cream paired with obsidian basalt ink and deep volcanic flare orange.

| Token Key | Hex Value | Semantic Role & Application on Ortasys S4 | Contrast Ratio |
| :--- | :--- | :--- | :--- |
| `primary` | `#18181B` | **Obsidian Basalt** — Structural `2px` borders, navigation framing, and secondary action buttons. | 17.8:1 on `#FFFFFF` |
| `secondary` | `#52525B` | **Graphite Slate** — Field notes, occupancy rules, and itinerary timestamps. | 7.1:1 on `#FEFCE8` |
| `tertiary` | `#C2410C` | **Volcanic Flare** — Primary *"Check Live Price"* CTA, active `Activities` / `Hotels` switch, and *"Build your trip"* trigger. | 5.2:1 on `#FFFFFF` |
| `neutral` | `#FEFCE8` | **Topographic Field Cream** — Warm expedition map background across the main viewport. | Base Canvas |
| `surface` | `#FFFFFF` | **Ticket Stub White** — Search workbench card, stay/activity tickets, and *"Why travel with us"* blocks. | Card Surface |
| `on-surface` | `#09090B` | **Pure Carbon Ink** — High-impact headlines, form values, and retail prices. | 19.3:1 on `#FFFFFF` |
| `error` | `#DC2626` | **Signal Flare Red** — Hard border and badge alert when nights exceed 30 or room limits (`1–9`) are breached. | 5.6:1 on `#FFFFFF` |

## Typography

- **Headlines (`Space Grotesk`):** Bold, technical grotesque headings that give destination titles and section headers an energetic, modern expedition character.
- **Field Copy (`Public Sans`):** Ultra-clean, government-grade legibility for activity descriptions, hotel policies, and FAQ items.
- **Ticket Telemetry (`Space Mono`):** Used for the live price verification stamp (*"Every price is checked live when you ask for it"* [F]), room/guest counters (`1–9 Rms • 1–20 Adt • 0–20 Chd`), and retail prices.

## Layout

Khatulistiwa Explorer uses a **Modular Ticket-Stub Workbench & Split Itinerary Grid** (`1240px` max width, exposed `2px solid #18181B` structural grid lines):

1. **Boarding-Pass Top Header:** Divided into bordered cells for the Khatulistiwa Explorer emblem, the 5 S4 navigation modules (`Home`, `Tours`, `Things to do`, `Hotels`, and a high-contrast `Build your trip` cell [F]), and live currency status.
2. **Front-and-Center Expedition Search Workbench:** Positioned immediately above the fold inside a heavy-bordered (`2px solid #18181B`) ticket container with prominent dual tabs for **`Hotels`** and **`Activities`** [F: FR-1, FR-3].
3. **2-Column + Sticky Sidebar "Build Your Trip" Layout (FR-4):**
   - **Left 8 Columns:** 2-column grid of perforated ticket-style stay and activity cards (explicitly tagged as *"Illustrative Sample Data"* in mockups).
   - **Right 4 Columns:** A persistent *"Build your trip"* multi-supplier itinerary summary rail showing selected retail stays and activities before DOKU / SNAP BI checkout [F].
4. **3-Box Bordered "Why travel with us" Strip [F]:** Three hard-bordered cards featuring numbered field badges (`01`, `02`, `03`) for Local Knowledge, Live Checked Pricing, and Expedition Support.

## Elevation & Depth

Depth is communicated via **Tactile Neo-Brutalist Offset Shadows**:

- Interactive cards, the search console, and primary buttons combine a `2px solid #18181B` border with a crisp hard offset shadow (`4px 4px 0px #18181B`).
- On hover or active press, buttons translate `(2px, 2px)` and reduce shadow offset to `2px 2px 0px #18181B`, providing physical mechanical feedback.

## Shapes

Defined by **Ticket-Stub & Field-Manual Geometry**:

- **Inputs & Chips (`rounded.sm: 4px`, `rounded.md: 8px`):** Crisp utilitarian corners that pair cleanly with `2px` solid ink borders.
- **Workbench & Stay Cards (`rounded.lg: 12px`):** Structured rectangular cards with dashed horizontal dividers (`border-dashed`) separating room details from the live retail price stub.

## Components

- **Expedition Search Workbench (`search-console-card`):**
  - Prominent `Hotels` vs `Activities` mode tabs at top-left [F].
  - High-contrast inputs for `Destination or hotel`, `Check-in / Check-out` (`Max 30 Nights`), and `Rooms (1–9)`, `Adults/room (1–20)`, `Children/room (0–20)` [F].
  - Perforated bottom bar featuring a live green pulse dot and the verbatim text: *"Every price is checked live when you ask for it"* [F].
- **Ticket-Stub Stay/Activity Card:** Upper section shows property/activity visual and specs; lower perforated stub displays the retail selling price and an *"Add to Trip / Select"* button.

## Do's and Don'ts

- **Do** use `2px solid #18181B` borders and `4px 4px 0px #18181B` hard offset shadows on primary cards and buttons.
- **Do** foreground the `Activities`, `Tours`, and `Build your trip` modules alongside `Hotels` as verified in the S4 storefront specification [F].
- **Do** label all sample hotel/activity prices in mockups as *"Illustrative Sample Data"* [PRD 9.2].
- **Don't** use blurry glassmorphism or soft pastel gradients; keep surfaces crisp (`#FEFCE8` and `#FFFFFF`).
- **Don't** expose B2B net prices, agent margins, or upstream supplier names (`RateHawk`, `Cloudbeds`, `MyAllocator`) on any ticket stub.
