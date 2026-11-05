---
version: alpha
name: Nusantara Executive Desk — Corporate & MICE Travel Storefront (Ortasys S4)
description: High-density Swiss-grid corporate travel and MICE booking storefront built on the Ortasys S4 white-label engine, optimized for rapid multi-room business reservations.
colors:
  primary: "#1E1B4B"
  primary-hover: "#312E81"
  secondary: "#475569"
  tertiary: "#0284C7"
  tertiary-hover: "#0369A1"
  neutral: "#F1F5F9"
  surface: "#FFFFFF"
  surface-muted: "#E2E8F0"
  on-surface: "#0F172A"
  on-primary: "#FFFFFF"
  border-subtle: "#CBD5E1"
  success: "#059669"
  warning: "#D97706"
  error: "#E11D48"
typography:
  headline-display:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0em
  label-lg:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.01em
  label-md:
    fontFamily: IBM Plex Mono
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0em
    fontFeature: "'tnum' on"
  label-sm:
    fontFamily: IBM Plex Mono
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: 0.05em
rounded:
  none: 0px
  sm: 2px
  md: 4px
  lg: 6px
  xl: 8px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 40px
  container-max: 1360px
  grid-gutter: 16px
  section-padding: 40px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    padding: 12px
    height: 44px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-cta-live-check:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    padding: 12px
    height: 44px
  button-cta-live-check-hover:
    backgroundColor: "{colors.tertiary-hover}"
  search-console-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 10px
    height: 44px
  chip-module-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    padding: 6px
---

# DESIGN.md — Nusantara Executive Desk (Ortasys S4 Storefront #3)

## Overview

Nusantara Executive Desk is a corporate travel management and MICE (Meetings, Incentives, Conferences, Exhibitions) agency storefront running on the **Ortasys S4 White-Label Layer**. Its design language is **Swiss Grid Precision & High-Density Corporate Concierge** — tailored for corporate secretaries, procurement officers, and event coordinators who frequently book multiple rooms (`1–9 Rooms`) or group delegates (`1–20 Adults per room`) [F] and require instant, live-checked retail pricing with **DOKU** and **SNAP BI** settlement [F].

Even though it looks like an executive productivity application rather than a leisure magazine, it uses the exact same Ortasys S4 functional core while keeping wholesale B2B net rates completely hidden from corporate client users.

## Colors

A disciplined executive palette of deep indigo, cool steel slate, and high-visibility cobalt blue.

| Token Key | Hex Value | Semantic Role & Application on Ortasys S4 | Contrast Ratio |
| :--- | :--- | :--- | :--- |
| `primary` | `#1E1B4B` | **Executive Indigo** — Top command header, active navigation tab, and primary booking confirmation buttons. | 14.2:1 on `#FFFFFF` |
| `secondary` | `#475569` | **Steel Slate** — Table column headers, cancellation terms, and secondary metadata. | 6.9:1 on `#F1F5F9` |
| `tertiary` | `#0284C7` | **Signal Cobalt** — High-contrast *"Check Live Price"* button and interactive focus rings. | 4.6:1 on `#FFFFFF` |
| `neutral` | `#F1F5F9` | **Cool Alabaster** — High-contrast workspace background that clearly delineates white data cards. | Base Canvas |
| `surface` | `#FFFFFF` | ** Crisp Ledger White** — Horizontal stay rows, sticky search ribbon, and *"Why travel with us"* matrix cells. | Card Surface |
| `on-surface` | `#0F172A` | **Deep Slate Ink** — Primary text and numerical figures. | 17.4:1 on `#FFFFFF` |
| `error` | `#E11D48` | **Compliance Rose** — Immediate validation alert when date selection exceeds 30 nights. | 4.8:1 on `#FFFFFF` |

## Typography

- **Headlines (`Plus Jakarta Sans`):** Bold, tightly tracked geometric sans-serif for crisp section titles and executive banners.
- **Interface & Tables (`Inter`):** High-density UI copy (`14px` standard desktop body, `16px` mobile inputs) engineered for rapid scanning of room inclusions and corporate policies.
- **Financial & Occupancy Telemetry (`IBM Plex Mono`):** Strict tabular monospace (`label-md`, `label-sm`) for live price readouts, night counters (`Max 30 Nights`), and multi-room multiplier breakdowns (`e.g., 4 Rooms × 2 Adults × 3 Nights`).

## Layout

Nusantara Executive Desk replaces large decorative hero imagery with a **High-Density Command Ribbon & Horizontal Matrix Layout** (`1360px` max width, `16px` compact grid gutters):

1. **Compact Corporate Header (56px height):** Displays the Nusantara Executive Desk wordmark, the 5 Ortasys S4 modules (`Home`, `Tours`, `Things to do`, `Hotels`, `Build your trip` [F]), and a live price verification badge.
2. **Sticky Single-Row Command Search Ribbon:** Docked immediately below the header across a 12-column horizontal bar:
   - Cols 1–2: Segmented `Hotels` / `Activities` switch [F].
   - Cols 3–5: `Destination or hotel` field.
   - Cols 6–8: Dual `Check-in / Check-out` date range with live `Nights (Max 30)` counter [F].
   - Cols 9–10: Compact `Rooms (1–9)`, `Adults (1–20)`, `Children (0–20)` matrix selector [F].
   - Cols 11–12: Signal Cobalt *"Check Live Price"* trigger.
3. **Horizontal Ledger Stay Rows:** Instead of vertical photo cards, results render as full-width horizontal comparison rows (`180px` thumbnail on left, room & inclusion specs in center, live-checked retail total per room and for all rooms on the right).
4. **Structured 3-Cell "Why travel with us" Grid [F]:** Presented as an architectural 3-column specification table bordered by `1px solid #CBD5E1` lines.

## Elevation & Depth

Depth is achieved through **Architectural 1px Hairline Borders and High-Contrast Surface Shifts** (Zero Drop-Shadow Policy):

- Cards and search ribbons use `1px solid #CBD5E1` borders on `#FFFFFF` surfaces against the `#F1F5F9` canvas.
- Active or focused containers switch their border to `2px solid #0284C7` (`tertiary`).

## Shapes

Defined by **Architectural Sharpness**:

- All inputs, buttons, and cards use minimal `4px` (`rounded.md`) to `6px` (`rounded.lg`) corner radii, projecting institutional precision and financial reliability.

## Components

- **Sticky Command Search Ribbon (`search-console-card`):**
  - Features inline validation badges for the 30-night cap and automatic total guest multiplication (`Rooms × Adults/Room`).
  - Displays the verbatim S4 guarantee *"Every price is checked live when you ask for it"* [F] in `IBM Plex Mono` inside the ribbon footer bar.
- **Horizontal Corporate Stay Row:** Shows property name, district, room type, breakfast/cancellation policy, and final retail selling price (never exposing B2B net rates).

## Do's and Don'ts

- **Do** use horizontal full-width stay rows and tabular monospace (`IBM Plex Mono`) for all pricing and room-multiplier calculations.
- **Do** maintain a `44px` minimum height on all compact ribbon inputs and buttons to satisfy touch accessibility standards.
- **Do** label all sample properties and rates in design previews as *"Illustrative Sample Data"* [PRD 9.2].
- **Don't** use drop shadows on cards; rely strictly on `1px solid #CBD5E1` structural borders.
- **Don't** display wholesale net prices, agent commission percentages, or bedbank supplier tags (`RateHawk`, `Cloudbeds`, `MyAllocator`) on this storefront.
