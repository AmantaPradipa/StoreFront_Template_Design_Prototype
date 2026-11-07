---
version: alpha
brandName: "Aurelia Private Journeys"
brandType: prototype-travel-agent
name: Ortasys Storefront — Luxury & Bespoke
description: Fixed white-label storefront preset for premium travel advisors, private stays, and bespoke travel services.
colors:
  primary: "#24221F"
  primary-hover: "#11100F"
  secondary: "#6B6257"
  tertiary: "#B29A70"
  accent: "#7D6B52"
  background: "#F7F5F0"
  surface: "#FFFFFF"
  surface-muted: "#E8E1D5"
  text: "#24221F"
  text-muted: "#756F66"
  border: "#D9D3C9"
  success: "#356B50"
  warning: "#9B6B2F"
  error: "#A94442"
  focus: "#315F8B"
typography:
  display:
    fontFamily: "Cormorant Garamond"
    fontSize: 68px
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: -0.025em
  h1:
    fontFamily: "Cormorant Garamond"
    fontSize: 56px
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: -0.02em
  h2:
    fontFamily: "Cormorant Garamond"
    fontSize: 40px
    fontWeight: 500
    lineHeight: 1.12
  h3:
    fontFamily: "DM Sans"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.3
  body-lg:
    fontFamily: "DM Sans"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.65
  body-md:
    fontFamily: "DM Sans"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "DM Sans"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "DM Sans"
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: 0.12em
rounded:
  xs: 2px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 18px
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
    rounded: "{rounded.xs}"
    padding: "15px 28px"
    height: 50px
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.xs}"
    padding: "15px 28px"
    height: 50px
  search-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.xs}"
    padding: 28px
  property-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.xs}"
  input:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.text}"
    rounded: "{rounded.xs}"
    padding: 14px
---

# Design System: Ortasys Luxury & Bespoke

## Overview

**Prototype travel agent: Aurelia Private Journeys.** A premium travel advisor focused on private escapes, bespoke itineraries, and carefully selected stays.

This is a fictional example brand created to demonstrate how this fixed storefront preset could be applied by an Ortasys agent. The name and positioning are illustrative, not an existing customer or verified business.

A restrained, editorial storefront for premium travel advisors and agencies selling carefully curated stays and highly personalized journeys. The experience should communicate discretion, confidence, and considered service. Luxury is expressed through composition, photography, typography, material restraint, and clarity—not through ornamental gold effects or excessive decoration.

The site should feel like a private travel journal or a premium hospitality publication. It must still function as a dependable booking interface. Search, dates, occupancy, customer-facing price, policies, and booking actions remain easy to find and understand.

**Brand personality:** discreet, refined, confident, personal, considered.

**Audience:** premium leisure travelers, honeymooners, private villa guests, and customers seeking curated or bespoke travel support.

**Preset boundary:** fixed layout and visual preset. Agency configuration may replace brand identity, approved color overrides, photography, copy, contact details, and enabled modules. Booking logic, required fields, price visibility, accessibility, and core transaction hierarchy remain fixed.

## Colors

The palette is intentionally quiet: charcoal ink, warm ivory, stone, taupe, and a muted mineral accent. Metallic gold is not a default UI color. The muted bronze tone is a supporting accent and must not be used for small text unless contrast is verified.

- **Primary Charcoal (#24221F):** primary actions, headlines, navigation emphasis.
- **Primary Hover (#11100F):** pressed and hover state.
- **Secondary Taupe (#6B6257):** secondary text and understated controls.
- **Tertiary Muted Bronze (#B29A70):** small decorative accents, dividers, eyebrow labels, and selected highlights.
- **Accent Earth (#7D6B52):** restrained emphasis for editorial metadata.
- **Background Ivory (#F7F5F0):** primary page canvas.
- **Surface White (#FFFFFF):** booking panel, cards, menus, and form surfaces.
- **Muted Stone (#E8E1D5):** quiet section backgrounds.
- **Text Charcoal (#24221F):** primary text.
- **Text Muted (#756F66):** descriptions and metadata.
- **Border Stone (#D9D3C9):** thin outlines and separators.
- **Success (#356B50), Warning (#9B6B2F), Error (#A94442):** semantic feedback only.
- **Focus Blue (#315F8B):** visible keyboard focus.

Do not use bronze as a substitute for text contrast. Keep large surfaces neutral and use the accent sparingly. Maintain WCAG AA contrast for text and interactive controls.

## Typography

Use Cormorant Garamond for display and section headlines, paired with DM Sans for all functional and supporting text. The serif should feel editorial, not ornamental. DM Sans keeps booking controls, prices, labels, and navigation precise.

- **Display / H1:** Cormorant Garamond, medium. Use generous line height and deliberate line breaks.
- **H2:** Cormorant Garamond, medium. Section headlines should be short and editorial.
- **H3:** DM Sans semibold. Property titles and functional headings.
- **Body:** DM Sans regular, 15–17px, with comfortable line height.
- **Labels:** DM Sans semibold, 11px, uppercase with restrained tracking.
- **Price and booking data:** DM Sans with tabular numerals. Prices must remain more legible than decorative metadata.

Avoid thin font weights for essential information. Do not use script fonts or more than two font families.

## Layout

Use a centered content frame of approximately 1240px with a 12-column grid and generous whitespace. The composition should feel curated and spacious, not empty. Limit the number of competing modules in each viewport.

- **Header:** quiet, minimal navigation with ample horizontal spacing. Use a small wordmark and concise menu labels. The primary action may be “Plan your stay” or an agency-approved equivalent.
- **Hero:** cinematic, high-quality hospitality photography with a concise headline. Use a split layout or full-bleed image with a restrained overlay. Do not place a dense search form over the most visually important part of the image.
- **Search:** position a refined, clearly discoverable booking panel directly below the hero or as a floating panel at its lower edge. Do not hide core search behind a vague “Enquire” action if online booking is supported.
- **Curated stays:** present fewer, larger property cards with strong imagery and clear factual details. The visual treatment may be editorial, but information such as property name, location, occupancy details, and customer-facing price must remain scannable.
- **Signature experiences:** use a restrained editorial grid for experiences, only when enabled and available.
- **Service narrative:** a short agency-specific section explaining its advisory approach. Claims must be approved by the agency.
- **Concierge CTA:** a single contact-oriented section for customers who need assistance. Do not imply 24/7 or dedicated concierge service unless verified.
- **Footer:** compact, quiet, and complete. Include agency identity, contact, policies, and required legal links.

Use large section spacing (80–112px desktop; 48–64px mobile). Use asymmetry carefully and never at the expense of booking clarity.

## Elevation & Depth

Prefer flat surfaces, thin borders, and natural image contrast. Shadows should be nearly imperceptible and reserved for dropdowns or floating booking panels. No heavy card shadows, glassmorphism, metallic gradients, or glowing edges. Visual richness should come from photography and typography.

## Shapes

Use the locked architectural 2px corners for buttons, inputs, property frames and floating panels. Image masks may use larger corners, but avoid pill-shaped controls. The geometry stays tailored and consistent with the FigCraft ledger and brand-dna.json radiusUsage.

## Components

- **Branded calendar:** single-month Indonesian picker with 2px menu corners, the same option surfaces/type/selected colors as this preset, and a fixed-size calendar icon separate from the editable date text. Arrow keys move by day/week, Home/End by week and Page Up/Down by month; Enter selects, Escape dismisses, and min/max dates disable unavailable days. The top-layer picker flips/clamps to the viewport and preserves native date values plus input/change events. Browsers without Popover API retain native controls; this is not the D12 dual-month calendar.
- **Dropdown and dialog geometry:** charcoal/white controls and popovers retain the 2px architectural ledger corners, DM Sans functional type, 48px triggers, 44px options and separate chevrons. Guest panels become bounded bottom sheets on mobile. Dialog headers reserve a persistent 44px close target; long action labels, trip totals and payment rows wrap without collisions.

- **Navigation:** understated, text-led, with a subtle active indicator. Keep menu density low.
- **Primary button:** charcoal fill, white label, compact rectangular silhouette. Use one dominant action per section.
- **Secondary button:** text or thin-outline treatment. Never compete with the primary action.
- **Search panel:** white surface, thin stone border, restrained shadow only if floating. Labels remain visible at all times.
- **Inputs:** white, thin border, near-square corners, 50–56px height. Use clear focus and error states.
- **Property card:** large image, concise title, location, factual amenities, cancellation/meal details only if supplied, and visible customer-facing price when available.
- **Experience card:** editorial image and short description. Avoid decorative badges unless they convey verified information.
- **Price display:** clean typographic hierarchy. Never obscure the price with a promotional sticker or oversized discount treatment.
- **Concierge/contact block:** elegant but functional. Show actual supported contact channels and expected response information only when confirmed.
- **Footer:** typography-led, low contrast only for decorative separators; links must remain accessible.

## Unique Architectural & Component DNA (Preset 02)

To distinguish this luxury advisory preset from standard multi-card travel sites, its layout and search components follow a strict private-atelier architectural system:

- **Hero Architecture (50/50 Editorial Gallery Split):** A museum-like split hero where the left 6 columns display unhurried serif typography (`Cormorant Garamond`), edition metadata, and advisory manifesto on warm alabaster canvas (`#F7F5F0`), while the right 6 columns frame a tall architectural sanctuary portrait with an inset brass border.
- **Search Engine UI (Architectural Ledger Console):** A zero-shadow rectangular reservation ledger (2px corners), distinct from a capsule or wizard. A caption and two quiet rectangular mode tabs sit above five ruled cells: destination, check-in, check-out, guest-summary trigger, and a flush full-height charcoal submit. Guest counts and child ages expand in a 2px-corner panel anchored to the guest cell. Charter mode replaces both stay dates with one departure field. Inputs retain persistent uppercase labels and underlines. Tablet wraps into two columns; mobile keeps the date pair together, with destination, party, and submit each spanning the width.
- **Inventory Section Layout (Alternating Full-Width Lookbook Rows):** Replaces the 3-column card grid with full-width alternating editorial rows (Row 1: Image Left / Dossier Right; Row 2: Dossier Left / Image Right; Row 3: Image Left / Dossier Right), giving every sanctuary estate gallery-level breathing room.
- **Private Charters Layout (2-Column Editorial Spread):** Wide dual-column bespoke spreads with fine hairline frames and tabular tariff sheets.
- **Advisory Section (Architectural Ledger Table):** Three unboxed rows with Roman numerals (`I`, `II`, `III`), an editorial heading column, and a restrained explanation column. Describe the approach, transparent example pricing, and itinerary review without invented partner access or guaranteed availability.

## Homepage Composition

Recommended fixed homepage sequence:

1. Minimal header and navigation.
2. Cinematic hero with concise value proposition.
3. Search panel for hotels or other enabled inventory.
4. Curated property collection.
5. Signature stays or destinations.
6. Bespoke experiences, only if enabled.
7. Agency approach / service philosophy.
8. Contact or trip-planning CTA.
9. Minimal footer with policies and contact information.

The first viewport should establish premium positioning while making the booking path obvious. Avoid turning the homepage into a luxury magazine with no usable search entry point.

## Imagery & Content Direction

Use high-resolution, art-directed photography: private villas, thoughtful interiors, distinctive architecture, quiet coastlines, fine hospitality details, and authentic destination atmosphere. Favor natural light, balanced composition, and restrained color grading. Avoid over-saturated resort imagery, fake luxury cues, generic gold textures, and staged champagne imagery.

Use a tall 450×500px framed architectural portrait in the desktop hero, matching FigCraft D01, rather than forcing this slot into a landscape crop. Property lookbook rows use generous landscape photography; the three destination images form a quieter equal-width editorial strip. On mobile, retain the portrait focal subject and stack lookbook images before their dossiers.

Copy should be concise, specific, and calm. Avoid unverified words such as “exclusive access,” “VIP treatment,” “best rates,” or “24/7 concierge” unless the agency confirms the service. Sample copy must be treated as editable placeholder content, not factual Ortasys claims.

## Interaction & Responsive Behavior

- Desktop: preserve wide margins and a clear visual rhythm; search controls may sit in one row only if labels remain readable.
- Tablet: reduce whitespace gradually; retain property image prominence and form clarity.
- Mobile: stack search fields, use full-width primary action, and keep price and booking CTA visible without horizontal scrolling.
- Use subtle transitions only. Respect reduced-motion preferences.
- Keyboard focus must be clearly visible even within the restrained palette.
- Booking, payment, confirmation, and pricing behavior must remain identical to the shared Ortasys storefront contract.

## HTML implementation contract

- Visual reference: `Ortasys_StoreFront.figcraft`, page 02, D01 and D12. Preserve the quiet split hero, architectural portrait frame, ledger search, alternating full-width lookbook rows, three destination plates, dual charter spread, and Roman-numbered advisory rows.
- `index.html` is a standalone customer storefront. Design references live in sibling `guidelines.html`, `search-board.html`, and `figcraft.html`; no prominent documentation buttons, hidden documentation DOM, root routing, or brand mockups in the landing.
- `storefront.css` owns token-based responsive geometry; `storefront.js` owns search, guest panels, itinerary snapshots, details, and the explicit three-step checkout demonstration. Interface copy is Indonesian; proper brand and property names are preserved.
- Booking input contract: destination, dates 1–30 nights, rooms 1–9, adults per room 1–20, children per room 0–20, and ages 0–17 explicitly selected for every child. Unknown searches produce an empty state, not unrelated replacement inventory.
- All rates and properties are labelled examples. Do not represent a local timer as a live tariff check, or a sample checkout summary as a confirmed reservation. The demonstration collects guest details and a provider preference, never card numbers, then offers a real `.txt` sample summary download. Live booking/payment services are not connected.
- Maintain 44px touch targets, visible focus, native accessible dialogs, Escape dismissal, and reduced-motion support. Native date values are enhanced with the branded single-month picker described above; the D12 dual-month calendar remains a design reference.


## Do’s and Don’ts

- Do communicate luxury through restraint, typography, photography, and service clarity.
- Do keep booking and price information immediately understandable.
- Do use the muted bronze accent sparingly.
- Do prioritize authentic property imagery.
- Don't equate luxury with black-and-gold gradients, ornamental borders, or excessive animation.
- Don't make the booking interface difficult to find.
- Don't use low-contrast beige text for essential content.
- Don't claim VIP, concierge, exclusive inventory, or guaranteed upgrades without agency verification.
- Don't expose supplier net rates, agent margins, or internal B2B data.

## Ortasys Shared Invariants

Preserve shared booking engine behavior, required search fields, occupancy logic, availability and price data, payment flow, confirmation behavior, and accessibility. The public storefront displays customer-facing selling prices only. Supplier names, net rates, internal wallet balances, settlement data, and agent-only margins are not public content. Do not invent features or service guarantees.
