---
version: alpha
brandName: "TemanTrip Holidays"
brandType: prototype-travel-agent
name: Ortasys Storefront — Family & Group Travel
description: Fixed white-label storefront preset for family holidays, multigenerational travel, and group journeys.
colors:
  primary: "#315B46"
  primary-hover: "#244735"
  secondary: "#E58A55"
  tertiary: "#F0C98B"
  accent: "#6B86A5"
  background: "#FBF7EF"
  surface: "#FFFFFF"
  surface-muted: "#F1E9DC"
  text: "#29362F"
  text-muted: "#69756D"
  border: "#E2D9CC"
  success: "#34764F"
  warning: "#A66B25"
  error: "#B84A43"
  focus: "#245F91"
typography:
  display:
    fontFamily: "Nunito Sans"
    fontSize: 60px
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: -0.035em
  h1:
    fontFamily: "Nunito Sans"
    fontSize: 48px
    fontWeight: 800
    lineHeight: 1.1
  h2:
    fontFamily: "Nunito Sans"
    fontSize: 34px
    fontWeight: 800
    lineHeight: 1.18
  h3:
    fontFamily: "Inter"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.3
  body-lg:
    fontFamily: "Inter"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: "Inter"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
  body-sm:
    fontFamily: "Inter"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Inter"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0.02em
rounded:
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
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
    rounded: "{rounded.pill}"
    padding: "14px 24px"
    height: 48px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
    height: 48px
  search-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: 24px
  family-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
  input:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: 12px
---

# Design System: Ortasys Family & Group Travel

## Overview

**Prototype travel agent: TemanTrip Holidays.** A family and group travel agency designing practical, comfortable journeys for different age groups.

This is a fictional example brand created to demonstrate how this fixed storefront preset could be applied by an Ortasys agent. The name and positioning are illustrative, not an existing customer or verified business.

A friendly, reassuring storefront for travel agencies serving families, multigenerational groups, school or community groups, and organized leisure parties. The design should make planning feel manageable. It should reduce uncertainty around room occupancy, child policies, group needs, and trip coordination without becoming childish or visually noisy.

The brand voice is warm, practical, inclusive, and clear. Use approachable shapes and welcoming photography, but maintain a professional travel-service standard.

**Brand personality:** welcoming, dependable, organized, cheerful, considerate.

**Audience:** parents traveling with children, multigenerational families, friend groups, and group coordinators.

**Preset boundary:** fixed layout and visual preset. Agencies may replace brand assets, approved color overrides, imagery, copy, contact details, and enabled modules. They cannot change booking logic, supported occupancy rules, required fields, price visibility, accessibility, or transaction hierarchy.

## Colors

Use a grounded green base with warm coral and soft honey accents. The palette should feel optimistic and welcoming without resembling a children's toy brand.

- **Primary Garden Green (#315B46):** primary CTA, active navigation, important links.
- **Primary Hover (#244735):** hover and pressed state.
- **Secondary Warm Coral (#E58A55):** secondary emphasis and limited highlights.
- **Tertiary Honey (#F0C98B):** warm surfaces, badges, and small decorative accents.
- **Accent Soft Blue (#6B86A5):** supporting information and quiet highlights.
- **Background Warm White (#FBF7EF):** page canvas.
- **Surface White (#FFFFFF):** cards, search panel, and forms.
- **Muted Surface (#F1E9DC):** alternate sections and quiet containers.
- **Text Deep Green-Gray (#29362F):** primary text.
- **Text Muted (#69756D):** supporting copy and metadata.
- **Border Warm Sand (#E2D9CC):** outlines and separators.
- **Success (#34764F), Warning (#A66B25), Error (#B84A43):** semantic states.
- **Focus Blue (#245F91):** visible keyboard focus.

Keep green as the primary action color. Coral and honey are supporting accents, not competing CTA colors. Maintain WCAG AA contrast.

## Typography

Use Nunito Sans for headings and Inter for body, forms, navigation, and data. Nunito Sans gives the brand a friendly, rounded voice; Inter keeps booking details precise.

- **Display / H1 / H2:** Nunito Sans extra-bold. Use clear, upbeat, sentence-case headlines.
- **H3:** Inter bold for card and functional headings.
- **Body:** Inter regular, 16px default and 18px for introductory copy.
- **Labels:** Inter bold, 12px. Use explicit labels for room, adult, and child fields.
- **Prices and occupancy:** Inter with tabular numerals where available.

Avoid comic fonts, handwriting fonts, and overly playful display type. The site must remain credible to adult trip planners.

## Layout

Use a 12-column desktop grid and centered content width around 1200px. Favor clear grouping, generous card spacing, and predictable patterns. The page should make family and group planning feel straightforward.

- **Header:** welcoming wordmark, concise navigation, and visible contact or assistance action.
- **Hero:** family or group travel photography with a benefit-led headline. Keep search immediately visible.
- **Search:** use the shared booking form. Room and guest selectors must clearly communicate supported occupancy rules. Do not invent family-specific filters if the booking engine does not support them.
- **Trip collections:** organize by family breaks, group escapes, school holidays, or other categories only when the agency has relevant products.
- **Family-friendly stays:** property cards should surface verified family-relevant facts such as room type, meal plan, pool, connecting rooms, or child policy when supplied.
- **Group travel section:** use a clear enquiry CTA only if the agency actually handles group quotations outside standard booking.
- **Planning support:** concise content explaining what information customers should prepare.
- **Footer:** contact, policies, FAQ, and agency details.

Use 64–88px desktop section spacing and 40–56px on mobile. Keep the layout structured rather than collage-heavy.

## Elevation & Depth

Use soft, reassuring surfaces with subtle shadows for floating search panels and menus. Cards should use light borders and minimal elevation. Avoid heavy shadows, gradients, and excessive floating elements.

## Shapes

Use friendly rounded geometry: 12px inputs, 16px cards, 24px large panels, and pill-shaped buttons. Keep radii consistent. Avoid cartoon-like bubbles or oversized decorative circles.

## Components

- **Branded calendar:** single-month Indonesian picker with 12px menu corners, the same option surfaces/type/selected colors as this preset, and a fixed-size calendar icon separate from the editable date text. Arrow keys move by day/week, Home/End by week and Page Up/Down by month; Enter selects, Escape dismisses, and min/max dates disable unavailable days. The top-layer picker flips/clamps to the viewport and preserves native date values plus input/change events. Browsers without Popover API retain native controls; this is not the D12 dual-month calendar.

- **Navigation:** simple, predictable, and readable. Use clear active states.
- **Primary button:** warm apricot pill with the registered dark `onCta` text and minimum 48px height; garden-green pills mark secondary inventory actions and selected modes.
- **Secondary button:** white surface with green text and border.
- **Search panel:** white surface, 24px radius, clear grouping, persistent field labels.
- **Occupancy selector:** separate room, adults-per-room, and children-per-room rows; required explicit ages 0–17 for every child in every room. Never silently preselect an age.
- **Property card:** show room facts and family-relevant amenities only when available from verified property data.
- **Group enquiry card:** use only if the agency supports group quotation or assisted booking.
- **Trust content:** use approved, factual service information; do not invent family guarantees or child-safety claims.
- **FAQ accordion:** use for agency-approved policies, cancellation terms, room occupancy, and booking support.
- **Opened controls:** `components.css` keeps destination suggestions and native-backed age selects in the family palette: white surfaces, Inter copy, 12px trigger/menu radii, 8px options, garden-green selection, registered blue focus, 48px triggers and 44px wrapping option targets. Top-layer menus scroll within runtime-calculated viewport bounds rather than being clipped by planner panels.
- **Wizard and overlay geometry:** The three progress steps retain equal shrinkable columns; mobile step numbers sit above wrapping labels and action buttons occupy separate rows. Expanded child ages remain in their room groups; 140px occupancy steppers preserve three usable targets. Detail image, sample badge and 44px gallery thumbnails occupy separate rows, with wrapping price/actions below. Rounded 24px dialogs use 16px outer gutters (10px mobile), dynamic viewport height bounds and scrolling content; drawer/checkout headers reserve a nonshrinking 44px close control beside wrapping titles.

## Unique Architectural & Component DNA (Preset 06)

To make this family & group travel preset feel like a stress-free, guided multi-generational trip planner rather than a standard booking grid, its sections and search console follow a friendly step-by-step architecture:

- **Hero Architecture (Warm Family Scrapbook Split):** Cream-on-cream editorial composition, benefit-led dark headline on the left, and four supplied family/property photographs on the right. White paper borders, restrained rotation, honey tape, and small captions form the scrapbook; there is no large green hero container or guaranteed-facility claim.
- **Search Engine (Functional Three-Step Planner):** A soft white 26px-radius planner contains a persistent numbered progress rail, one active cream field panel, and a separate warm plan summary. **1: Destinasi → 2: Tanggal → 3: Rombongan & usia.** Real Next/Back controls and progress buttons preserve field/age state. Forward movement validates previous stages; only stage 3 exposes the local-search submit. Dates remain a distinct stage rather than sharing a horizontal row with all other controls.
- **Required Search Anatomy:** Both catalogue modes retain destination, start/end dates (1–30 nights), rooms 1–9, adults per room 1–20, and children per room 0–20. Each child in each room receives an unselected required age field (0–17). The total-party readout multiplies occupancy by rooms. Validation remains visible inside the active planner; loading and genuinely empty catalogue states are explicit.
- **Inventory (Warm Family Comparison):** Two wide image-led cards per row, with a clearly labelled “Matriks kenyamanan keluarga” definition table, sample room/duration, meal/service and child/older-relative facts. Local search reveals the group total and a warm per-person cost-sharing estimate. Prices and facilities are example agency content, never verified availability.
- **Editorial Journey:** Three warm numbered preparation cards explain comparing rooms, discussing shared costs, and confirming needs with the agent. A pine assistance strip, family FAQ, policy disclosures and agency footer follow; duplicate generic destination/about grids and mockup merchandise are removed.
- **Documentation Split:** `guidelines.html`, `search-board.html`, and `figcraft.html` preserve the former reference content and styling in independent pages with ordinary relative links. The landing contains no hidden documentation, router, Search Spec button, or Brand Guidelines navigation; only a quiet guidelines footer link remains.
- **Prototype Honesty:** “Setiap harga dicek langsung saat Anda mencari” appears with a local-simulation explanation. The working search, detail, trip, and checkout flows operate locally. Checkout explicitly makes no payment or reservation and offers an actual downloadable `.txt` simulation summary, not a claimed voucher.

## Homepage Composition

Recommended fixed homepage sequence:

1. Customer navigation and cream scrapbook hero.
2. Stateful three-step family planner with persistent plan summary.
3. Two-column family comparison inventory.
4. Three-stage family preparation story and assistance strip.
5. Family FAQ, terms, privacy and example contact details.
6. Pine agency footer with a quiet guidelines link.

The first viewport should reassure the trip planner and provide an immediate path to search.

## Imagery & Content Direction

Use authentic, inclusive photography of families and groups enjoying destinations. Show varied ages and family structures without relying on stereotypes. Images should communicate comfort, togetherness, and real travel moments.

Avoid staged stock imagery that looks overly commercial, unsafe depictions of children, or images that imply specific facilities not present in the listed property. Use 16:9 hero crops and consistent 4:3 cards. Provide image fallbacks and mobile-safe focal points.

Do not claim child-friendly certification, guaranteed connecting rooms, childcare, accessibility, or group discounts unless confirmed. All sample prices, room features, and offers must be clearly illustrative.

## Interaction & Responsive Behavior

- Desktop (1440px): split scrapbook hero; active planner panel occupies roughly three-fifths of the planner workspace and the summary two-fifths. Numbered steps remain visible. Inventory uses two columns.
- Tablet (768px): compact navigation, a readable split planner workspace, and stacked inventory. All controls remain in their dedicated stage rather than wrapping into a generic search row.
- Mobile (390px): hero and scrapbook stack, planner progress remains visible, active fields precede the summary, dates stack, and Next/Back/search controls remain discoverable. Comparison cards and preparation cards each use one column.
- **Mobile header sizing:** A shrinkable brand/text wrapper shows the 17px wordmark and explicitly hides the uppercase descriptor. Trip/menu controls retain reserved widths. Scrapbook grid items and comfort-matrix text may shrink or wrap. Closed drawers leave layout entirely; no page-wide overflow mask is used.
- Fields are 48px minimum, buttons 44px minimum, and focus uses the registered focus token. Retained dialogs support Escape, Tab containment and focus return.
- Registered AA-muted/secondary text and dark apricot-button text replace low-contrast raw swatches. Decorative paper/card shadows are primary-derived tokens registered in `brand-dna.json`.
- Reduced-motion preferences disable CSS animation and smooth scrolling. Important details never rely on hover.
- Preserve the shared Ortasys booking, payment, and confirmation behavior.

## Do’s and Don’ts

- Do make room and guest configuration easy to understand.
- Do use welcoming but credible language.
- Do surface verified family-relevant property information.
- Do keep group enquiry distinct from instant booking when workflows differ.
- Don't use childish illustrations or cartoon visual language.
- Don't promise connecting rooms, child facilities, or discounts without evidence.
- Don't invent group booking functionality.
- Don't hide occupancy rules in fine print.
- Don't expose supplier net rates or agent-only data.

## Ortasys Shared Invariants

Preserve shared search fields, room and guest logic, date constraints, customer-facing price rules, payment flow, booking confirmation, and accessibility. Do not invent occupancy capabilities or special group booking workflows. Supplier net rates, wallet balances, settlement data, and agent margins remain private.
