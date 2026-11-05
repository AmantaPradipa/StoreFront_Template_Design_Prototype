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

- **Navigation:** simple, predictable, and readable. Use clear active states.
- **Primary button:** garden-green pill with white text and minimum 48px height.
- **Secondary button:** white surface with green text and border.
- **Search panel:** white surface, 24px radius, clear grouping, persistent field labels.
- **Occupancy selector:** clearly label rooms, adults, and children. Child-age collection must only appear if supported by the actual booking flow.
- **Property card:** show room facts and family-relevant amenities only when available from verified property data.
- **Group enquiry card:** use only if the agency supports group quotation or assisted booking.
- **Trust content:** use approved, factual service information; do not invent family guarantees or child-safety claims.
- **FAQ accordion:** use for agency-approved policies, cancellation terms, room occupancy, and booking support.

## Unique Architectural & Component DNA (Preset 06)

To make this family & group travel preset feel like a stress-free, guided multi-generational trip planner rather than a standard booking grid, its sections and search console follow a friendly step-by-step architecture:

- **Hero Architecture (Warm Family Scrapbook Split):** A soft rounded container (`rounded-3xl`) where the left 6 columns present reassuring family headlines and verified comfort badges (`Connecting Rooms`, `Stroller-Friendly`), and the right 6 columns display a 2x2 photo scrapbook collage of multi-generational moments.
- **Search Engine UI (3-Step Guided Family Planner Wizard):** Instead of a raw form row, the search engine is divided into 3 numbered visual step-cards inside a soft cream container (`rounded-3xl`): **Langkah 1: Pilih Tujuan & Tanggal**, **Langkah 2: Atur Rombongan & Kamar (1–9 Unit)** with a live **"Total Anggota Rombongan: X Orang"** calculator pill, and **Langkah 3: Cek Kuota Kamar Terhubung**.
- **Inventory Section Layout (2-Column Wide Family Comparison Cards):** Wide 2-column horizontal/stacked family cards (`rounded-3xl`) featuring a dedicated **Matriks Kenyamanan Keluarga** table inside each card (Kapasitas Unit, Konfigurasi Kasur/Pintu, Fasilitas Anak/Lansia) plus a **"Estimasi Patungan per Orang"** helper readout alongside the total retail price.
- **Why Us Section (3-Step Horizontal Family Journey Timeline):** A visual step-by-step timeline (`1. Pilih Vila Terhubung` $\rightarrow$ `2. Satu Invoice Rombongan SNAP BI` $\rightarrow$ `3. Sambutan Ramah Anak & Lansia`).

## Homepage Composition

Recommended fixed homepage sequence:

1. Header and navigation.
2. Welcoming hero with search panel.
3. Popular family or group destinations.
4. Family-friendly or group-suitable stays, based on verified data.
5. Curated holiday collections.
6. Group travel enquiry section, if supported.
7. Practical planning FAQ.
8. Contact CTA and footer.

The first viewport should reassure the trip planner and provide an immediate path to search.

## Imagery & Content Direction

Use authentic, inclusive photography of families and groups enjoying destinations. Show varied ages and family structures without relying on stereotypes. Images should communicate comfort, togetherness, and real travel moments.

Avoid staged stock imagery that looks overly commercial, unsafe depictions of children, or images that imply specific facilities not present in the listed property. Use 16:9 hero crops and consistent 4:3 cards. Provide image fallbacks and mobile-safe focal points.

Do not claim child-friendly certification, guaranteed connecting rooms, childcare, accessibility, or group discounts unless confirmed. All sample prices, room features, and offers must be clearly illustrative.

## Interaction & Responsive Behavior

- Desktop: search may be horizontal if labels and values remain readable.
- Tablet: allow search fields to wrap into two rows.
- Mobile: stack fields, keep the CTA full-width, and make guest selectors easy to operate.
- Use at least 44px touch targets and clear focus states.
- Avoid hover-only access to important details.
- Respect reduced-motion settings.
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
