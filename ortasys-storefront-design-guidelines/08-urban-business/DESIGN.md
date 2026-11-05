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

- **Navigation:** compact, predictable, and high-contrast.
- **Primary button:** slate navy fill, white text, 8px radius, minimum 46px height.
- **Secondary button:** white surface, navy text, thin border.
- **Search panel:** white surface, clear field groupings, persistent labels, and a single primary action.
- **Hotel card:** property image, name, neighborhood/location, verified amenities, cancellation/meal facts when available, price, and booking action.
- **Location metadata:** use concise neighborhood or distance information only when supplied reliably.
- **Date and guest controls:** use shared booking components with clear labels and validation.
- **Business services:** do not display corporate account, invoicing, approval, or expense-management UI unless those capabilities are confirmed.
- **Footer:** organized information groups and complete policy links.

## Unique Architectural & Component DNA (Preset 08)

To make this corporate & urban business storefront feel like an executive rapid-booking terminal rather than a leisure holiday brochure, its layout and search engine use a high-density tabular architecture:

- **Hero Architecture (Compact Executive KPI Strip Banner):** Instead of a tall lifestyle banner, the hero is a compact, high-efficiency corporate header (`py-8`) displaying metropolitan district telemetry (`JAKARTA CBD`, `SENAYAN MICE`, `ITDC NUSA DUA`) and a 3-metric SLA readout bar (`< 650ms Live Sync`, `1 Gbps Workstation Verified`, `SNAP BI / DOKU Tax Invoice`).
- **Search Engine UI (Inline Single-Row Corporate Ribbon Bar):** A dense, single-row horizontal toolbar (`rounded-xs`) where mode tabs, district selector, check-in/out dates, delegate/room steppers, and the navy `Query Rates` button sit flush in a unified executive command ribbon.
- **Inventory Section Layout (High-Density Tabular Ledger List):** Replaces vertical photo cards with a structured **Corporate Property Ledger Table** (`divide-y divide-line`): each row displays a compact thumbnail + property code (`[ML-01]`), a middle column for CBD/MRT transit proximity & workstation specs, a policy/tax compliance column, and a right-aligned tabular price & instant booking column.
- **Corporate Capabilities (4-Column SLA Specification Bar):** A crisp 4-column specification grid detailing instant confirmation, e-Faktur PPN 11% readiness, net-final transparency, and multi-bank virtual account clearing.

## Homepage Composition

Recommended fixed homepage sequence:

1. Header and navigation.
2. City-led hero with direct search.
3. Popular city destinations.
4. Business-ready or centrally located stays, where factual data supports the claim.
5. Featured hotels.
6. Neighborhood or city guide content.
7. Agency service information.
8. Contact CTA and footer.

Search should be available in the first viewport. Avoid a long lifestyle introduction before the booking interface.

## Imagery & Content Direction

Use contemporary city photography: architecture, skyline, transit-connected districts, hotel interiors, cafés, and urban street scenes. Use real destination imagery rather than generic corporate meeting photos. Keep images crisp and naturally graded.

Use 16:9 hero crops and 4:3 hotel cards. Avoid excessive monochrome treatment. Ensure image crops work on mobile.

Do not claim corporate rates, preferred supplier status, airport proximity, business facilities, meeting rooms, Wi-Fi quality, or invoice support unless verified. Example property facts and prices must be marked illustrative.

## Interaction & Responsive Behavior

- Desktop: compact search panel with horizontal fields where space allows.
- Tablet: wrap search controls into two rows.
- Mobile: stack fields and keep primary search action full-width.
- Maintain clear price hierarchy and readable hotel details.
- Use visible keyboard focus and minimum 44px touch targets.
- Respect reduced-motion preferences.
- Preserve shared Ortasys booking and payment behavior.

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
