---
version: alpha
brandName: "MetroLink Travel"
brandType: prototype-travel-agent
name: Ortasys Storefront — Urban & Business Travel
description: Fixed white-label storefront preset for city-focused agencies and business-travel specialists.
colors:
  primary: "#23364D"
  primary-hover: "#17283B"
  secondary: "#3D78A8"
  tertiary: "#B7C7D5"
  accent: "#C28A4B"
  background: "#F3F5F7"
  surface: "#FFFFFF"
  surface-muted: "#E7ECF0"
  text: "#202B36"
  text-muted: "#65717D"
  border: "#D5DDE4"
  success: "#28734E"
  warning: "#A66B25"
  error: "#B54545"
  focus: "#1769AA"
typography:
  display:
    fontFamily: "IBM Plex Sans"
    fontSize: 58px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.035em
  h1:
    fontFamily: "IBM Plex Sans"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.1
  h2:
    fontFamily: "IBM Plex Sans"
    fontSize: 34px
    fontWeight: 650
    lineHeight: 1.2
  h3:
    fontFamily: "Inter"
    fontSize: 20px
    fontWeight: 650
    lineHeight: 1.3
  body-lg:
    fontFamily: "Inter"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: "Inter"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.55
  body-sm:
    fontFamily: "Inter"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "IBM Plex Sans"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0.04em
rounded:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 22px
  pill: 9999px
spacing:
  1: 4px
  2: 8px
  3: 12px
  4: 16px
  5: 20px
  6: 24px
  8: 32px
  10: 40px
  12: 48px
  16: 64px
  20: 80px
  24: 96px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: "13px 22px"
    height: 46px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "13px 22px"
    height: 46px
  search-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: 22px
  hotel-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
  input:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.text}"
    rounded: "{rounded.xs}"
    padding: 12px
---

# Design System: Ortasys Urban & Business Travel

## Overview

**Prototype travel agent: MetroLink Travel.** A city and business travel agency prioritizing efficient stays, reliable arrangements, and urban connectivity.

This is a fictional example brand created to demonstrate how this fixed storefront preset could be applied by an Ortasys agent. The name and positioning are illustrative, not an existing customer or verified business.

A structured, city-oriented storefront for agencies serving business travelers, urban explorers, and customers booking efficient city stays. It should feel capable, precise, and professional without becoming a corporate procurement dashboard.

The design prioritizes location, practical hotel details, clear booking controls, and fast scanning. City photography adds character, while a restrained interface supports users who may be booking around work schedules and short stays.

**Brand personality:** professional, efficient, urban, reliable, contemporary.

**Audience:** business travelers, conference attendees, city-break travelers, and customers seeking centrally located accommodation.

**Preset boundary:** fixed layout and visual preset. Agencies may replace approved brand identity, imagery, copy, and enabled modules. Booking logic, supported fields, price visibility, accessibility, and transaction flow remain fixed. Corporate approvals, invoicing, or expense integrations must not be implied unless actually supported.

## Colors

The palette uses deep slate navy, professional blue, cool neutrals, and a small warm accent.

- **Primary Slate Navy (#23364D):** primary actions, navigation, key emphasis.
- **Primary Hover (#17283B):** hover and pressed state.
- **Secondary City Blue (#3D78A8):** links, selected controls, supporting actions.
- **Tertiary Steel Blue (#B7C7D5):** quiet surfaces and separators.
- **Accent Brass (#C28A4B):** restrained highlight for editorial metadata, never a default text color.
- **Background Cool Gray (#F3F5F7):** page canvas.
- **Surface White (#FFFFFF):** cards, forms, and search.
- **Muted Surface (#E7ECF0):** alternate sections and quiet containers.
- **Text Charcoal (#202B36):** primary text.
- **Text Muted (#65717D):** descriptions and metadata.
- **Border Steel (#D5DDE4):** outlines and separators.
- **Success (#28734E), Warning (#A66B25), Error (#B54545):** semantic states.
- **Focus Blue (#1769AA):** visible keyboard focus.

Keep navy as the main action color. Use brass sparingly and never for small text without contrast validation. Maintain WCAG AA.

## Typography

Use IBM Plex Sans for headings and labels, paired with Inter for body copy and data. This creates a precise, contemporary business tone.

- **Display / H1 / H2:** IBM Plex Sans bold or semibold.
- **H3:** Inter semibold for property and functional headings.
- **Body:** Inter regular, 15px default and 17px for introductory copy.
- **Labels:** IBM Plex Sans semibold, 12px.
- **Dates, prices, and booking data:** Inter with tabular numerals.

Avoid decorative serifs, condensed display fonts, and excessively small metadata. Keep functional labels explicit.

## Layout

Use a 12-column grid and centered content width around 1200–1240px. Favor strong alignment, modular sections, and practical information density.

- **Header:** compact navigation, clear logo, and contact/account action. Language and currency selectors appear only when supported.
- **Hero:** city skyline, hotel architecture, or urban lifestyle photography. Use a direct headline and prominent search module.
- **Search:** make destination, check-in, check-out, and occupancy easy to scan. Do not add business-only fields such as company code or approval status unless the storefront product supports them.
- **City destinations:** present city collections with clear labels and contextual imagery.
- **Business-ready stays:** property cards prioritize location, room details, verified facilities, customer-facing price, and booking action.
- **Neighborhood guide:** include only if the agency has real editorial content.
- **Short-stay collections:** use only when actual inventory and booking rules support them.
- **Agency service block:** state practical service differentiators that have been confirmed.
- **Footer:** contact, policies, FAQs, and agency details.

Use 56–80px section spacing on desktop and 36–52px on mobile. Avoid oversized editorial gaps that slow down search.

## Elevation & Depth

Use crisp borders and restrained shadows. Search panels and menus may have a subtle shadow; cards should rely on consistent spacing and surface contrast. Avoid glassmorphism, glossy gradients, and excessive blur.

## Shapes

Use compact, structured geometry: 8px inputs, 12px cards, 16px panels, and 8px buttons. Keep corners consistent and avoid overly rounded, playful shapes.

## Components

- **Branded calendar:** single-month Indonesian picker with 12px menu corners, the same option surfaces/type/selected colors as this preset, and a fixed-size calendar icon separate from the editable date text. Arrow keys move by day/week, Home/End by week and Page Up/Down by month; Enter selects, Escape dismisses, and min/max dates disable unavailable days. The top-layer picker flips/clamps to the viewport and preserves native date values plus input/change events. Browsers without Popover API retain native controls; this is not the D12 dual-month calendar.

- **Navigation:** compact, predictable, and high-contrast.
- **Primary button:** slate navy fill, white text, 8px radius, minimum 46px height.
- **Secondary button:** white surface, navy text, thin border.
- **Search panel:** white surface, clear field groupings, persistent labels, and a single primary action.
- **Hotel card:** property image, name, neighborhood/location, verified amenities, cancellation/meal facts when available, price, and booking action.
- **Location metadata:** use concise neighborhood or distance information only when supplied reliably.
- **Date and guest controls:** use shared booking components with clear labels and validation.
- **Business services:** do not display corporate account, invoicing, approval, or expense-management UI unless those capabilities are confirmed.
- **Footer:** organized information groups and complete policy links.
- **Interactive geometry:** `components.css` uses existing navy/blue/cool-surface tokens, Inter body and IBM Plex Sans labels. Dropdown triggers have 8px corners, 48px minimum height, 12px insets and a reserved 16px chevron; 12px menus have 6px inset and wrapping 44px options. Selected rows use navy/white, hover uses cool muted surface, and keyboard focus uses blue.
- **Opened booking surfaces:** detail and checkout preserve precise 12px shells with 16px viewport gutters (12px mobile), scrollable content and 44px non-shrinking close controls. Gallery height is capped at 30dvh; price/actions wrap. Checkout stages wrap around fixed 20px markers. Inline occupancy and generated child-age fields remain in the ribbon; mobile navigation occupies a visible wrapping row. Ledger price/actions wrap on narrow screens.

## Unique Architectural & Component DNA (Preset 08)

To make this corporate & urban business storefront feel like an executive rapid-booking terminal rather than a leisure holiday brochure, its layout and search engine use a high-density tabular architecture:

- **Hero Architecture (Compact Executive Strip Banner):** Navy executive header, right-aligned skyline photograph, direct IBM Plex Sans headline and a district route strip. The three factual readouts describe **local simulation**, **1–30 nights**, and **demo payment**; do not claim measured latency, verified internet speed, tax readiness or live availability.
- **Search Engine UI (Inline Single-Row Corporate Ribbon Bar):** A flush, 4px-radius command ribbon overlaps the hero bottom. Its toolbar contains mode tabs and the mandatory price promise. At 1440px, one row holds district/city, check-in, check-out, rooms, adults per room, children per room and the navy search action. Persistent labels sit above the values. Rooms 1–9, adults 1–20 and children 0–20 are integer fields; children expand an explicit age selector for each child in each room, 0–17, with no default age.
- **Inventory Section Layout (High-Density Tabular Ledger List):** Four aligned columns use identical 33/29/21/17 widths for header and rows: property code/thumbnail/name, connectivity/work specifications, policy/service information, and right-aligned IDR price/action. Zebra surfaces and hairlines provide structure without a generic property card grid. Property facilities, policies and prices are tagged as examples, not verified facts.
- **Corporate Capabilities (4-Column Service Specification Bar):** Four factual specification cells explain confirmation requirements, unconnected invoice support, customer-facing price visibility and provider-only payment. A four-zone photographic index and clearly labeled schematic transit line provide metropolitan editorial context. No fictional SLA or corporate account functionality is implied. Design dials: variance 3, motion 1, density 8.

## Homepage Composition

Recommended fixed homepage sequence:

1. Compact agency header and local-example strip.
2. Skyline-led corporate hero, district line and factual status readouts.
3. Overlapping inline corporate ribbon.
4. Filtered property ledger with aligned service and policy columns.
5. Four-zone index.
6. Transit-corridor schematic and practical area guidance.
7. Four-column service specifications and booking FAQ.
8. Group-planning contact context and agency footer.

Search should be available in the first viewport. Avoid a long lifestyle introduction before the booking interface.

## Imagery & Content Direction

Use contemporary city photography: architecture, skyline, transit-connected districts, hotel interiors, cafés, and urban street scenes. Use real destination imagery rather than generic corporate meeting photos. Keep images crisp and naturally graded.

Use 16:9 hero crops and 4:3 hotel cards. Avoid excessive monochrome treatment. Ensure image crops work on mobile.

Do not claim corporate rates, preferred supplier status, airport proximity, business facilities, meeting rooms, Wi-Fi quality, or invoice support unless verified. Example property facts and prices must be marked illustrative.

## Interaction & Responsive Behavior

- Desktop 1440px: all seven search segments stay in one row; the ledger retains four aligned columns, not independent cards.
- Tablet 768px: ribbon fields wrap into three columns with a full-width action; ledger remains aligned with smaller property thumbnails and two-line names.
- Mobile 390px: destination spans the ribbon, dates form a pair, room/adult fields form a pair and child count gets its own row. Action is full-width. Each ledger entry becomes a labeled editorial row: property first, specifications/policy side-by-side, price/action across the bottom. There is no wide table forcing page overflow.
- Search labels are persistent; editable fields are 48px and touch targets at least 44px. Capacity inputs describe per-room counts. Explicit child ages, date bounds, loading and empty states are part of the working interaction, not only the D12 documentation.
- Native validation and search validation keep destination, integer guest bounds, ages and 1–30-night dates consistent. Unsupported searches do not silently repopulate all properties.
- Destination suggestions use exact area and name values from the active hotel or transit catalogue, rather than a shared hard-coded hotel-area list. Every suggested value matches its mode's text filter.
- Detail, trip and checkout interactions remain local. Payment and completion are explicitly simulated, not a live booking or verified transaction; download creates a real `.txt` simulation summary.
- Keyboard focus, modal focus trapping/restoration, Escape dismissal and reduced motion are supported. AA derivatives for text, focus and input outlines come from the existing `brand-dna.json`.

## Standalone Documentation

The former embedded documentation views have moved intact into `guidelines.html`, `search-board.html` and `figcraft.html`, with ordinary relative navigation. `index.html` has no documentation router, hidden documentation sections, prominent specification links or merchandise mockups. A quiet footer link opens guidelines; these pages do not depend on a parent hub.

## Do’s and Don’ts

- Do prioritize destination, dates, occupancy, and property facts.
- Do make the interface efficient and predictable.
- Do use city imagery to add character.
- Do show only verified location and business amenities.
- Don't turn the storefront into an enterprise admin dashboard.
- Don't imply corporate billing, approval workflows, or negotiated rates without support.
- Don't use tiny metadata or dense tables on mobile.
- Don't use brass as low-contrast text.
- Don't expose supplier net rates or internal agent data.

## Ortasys Shared Invariants

Preserve common search fields, date constraints, room and guest logic, customer-facing price rules, payment flow, confirmation behavior, and accessibility. Corporate workflows are not implied by this preset. Supplier net rates, wallet balances, settlement data, and agent-only margins remain private.
