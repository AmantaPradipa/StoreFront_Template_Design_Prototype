---
version: alpha
brandName: "Jelajah Lombok"
brandType: prototype-travel-agent
name: Ortasys Storefront — Local & Destination
description: Fixed white-label storefront preset for destination-led travel agencies and local destination specialists.
colors:
  primary: "#174C43"
  primary-hover: "#103B34"
  secondary: "#78A9A1"
  tertiary: "#D8B98C"
  accent: "#C66F4E"
  background: "#F4EDE1"
  surface: "#FFFCF6"
  surface-muted: "#EAE2D5"
  text: "#263B35"
  text-muted: "#68766F"
  border: "#D9D2C6"
  success: "#287A58"
  warning: "#A96524"
  error: "#B8473D"
  focus: "#236E9B"
typography:
  display:
    fontFamily: "DM Serif Display"
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: -0.035em
  h1:
    fontFamily: "DM Serif Display"
    fontSize: 52px
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: -0.025em
  h2:
    fontFamily: "DM Serif Display"
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.15
  h3:
    fontFamily: "Manrope"
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.25
  body-lg:
    fontFamily: "Manrope"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: "Manrope"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
  body-sm:
    fontFamily: "Manrope"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Manrope"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0.06em
rounded:
  xs: 6px
  sm: 10px
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
  destination-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
  hotel-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
  input:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: 12px
---

# Design System: Ortasys Local & Destination

## Overview

**Prototype travel agent: Jelajah Lombok.** A local destination specialist rooted in Lombok, with curated stays, island experiences, and regional travel services.

This is a fictional example brand created to demonstrate how this fixed storefront preset could be applied by an Ortasys agent. The name and positioning are illustrative, not an existing customer or verified business.

A warm, destination-led storefront for travel agencies whose strongest value is local knowledge. The experience should feel grounded, welcoming, trustworthy, and visually connected to a specific place without relying on generic tropical clichés. It is designed for regional destination specialists, independent travel advisors, and agencies curating stays and experiences in one destination or a focused region.

The visual story starts with place, then moves into practical discovery. Large destination photography creates emotional context, while clear search controls and structured hotel information make booking feel dependable. The interface should feel like a knowledgeable local host, not a mass-market OTA.

**Brand personality:** grounded, hospitable, knowledgeable, calm, exploratory.

**Audience:** travelers discovering a specific destination; couples, families, and independent travelers who value local recommendations.

**Preset boundary:** this is a fixed layout and visual preset. An agency may replace its logo, brand name, approved color overrides, hero/gallery imagery, copy, contact details, and enabled navigation modules. It may not alter booking logic, required booking fields, pricing visibility rules, accessibility behavior, or core page hierarchy.

## Colors

The palette combines forest green, warm sand, muted ocean tones, and a soft cream canvas. Green signals reliability and connection to nature; sand and cream keep the experience welcoming; ocean teal is supporting color rather than a competing CTA.

- **Primary Forest (#174C43):** primary actions, active navigation, key links, selected controls.
- **Primary Hover (#103B34):** hover and pressed states for primary actions.
- **Secondary Sea Glass (#78A9A1):** secondary highlights, subtle badges, decorative accents.
- **Tertiary Sand (#D8B98C):** warm supporting surfaces, editorial dividers, small decorative details.
- **Accent Clay (#C66F4E):** limited emphasis for destination labels or promotional markers. Never use as a second primary CTA.
- **Background Cream (#F4EDE1):** page canvas and broad section backgrounds.
- **Surface Ivory (#FFFCF6):** cards, search panel, dropdowns, and elevated content.
- **Muted Surface (#EAE2D5):** quiet section contrast and skeleton backgrounds.
- **Text Deep Green (#263B35):** primary text and headings.
- **Text Muted (#68766F):** descriptions, metadata, helper text.
- **Border Warm Stone (#D9D2C6):** subtle card borders and input outlines.
- **Success (#287A58), Warning (#A96524), Error (#B8473D):** semantic states only.
- **Focus Blue (#236E9B):** visible keyboard focus ring.

Use primary green for the single most important action in a viewport. Maintain WCAG AA contrast: 4.5:1 for normal text and 3:1 for large text and essential UI boundaries. Do not place text directly over busy photography without a sufficiently opaque overlay.

## Typography

Use DM Serif Display for expressive display headlines and Manrope for navigation, body copy, labels, forms, and data. This pairing gives the storefront an editorial destination character while keeping transactional UI clear.

- **Display / H1:** DM Serif Display, regular. Use sentence case, not all caps. Keep headlines short and place them over calm image regions or on a solid surface.
- **H2:** DM Serif Display, regular. Used for destination and editorial section headings.
- **H3:** Manrope bold. Used for card titles and functional subsection headings.
- **Body:** Manrope regular, 16px default, 18px for introductory copy.
- **Labels:** Manrope bold, 12px, modest letter spacing. Use uppercase sparingly for metadata such as destination category.
- **Numerical data:** Manrope with tabular numerals where supported, especially prices, dates, guest counts, and room quantities.

Do not use decorative scripts, faux-handwritten fonts, or more than two font families. Load the specified fonts or use close sans/serif fallbacks if unavailable.

## Layout

Use a 12-column desktop grid with a centered content width of approximately 1200px and 24px gutters. The page should have generous vertical breathing room and a clear rhythm between immersive photography and practical booking content.

- **Header:** compact, warm ivory navigation with logo at left, destination-oriented navigation centered or adjacent, and one clear contact or account action at right. Keep the header readable over both light and hero sections.
- **Hero:** wide landscape photography with a destination-specific headline, concise supporting sentence, and a prominent hotel/activities search panel. Prefer a split composition or image with a controlled dark-to-transparent overlay. The search panel must remain legible and must not be buried below decorative content.
- **Search:** place the search panel immediately within or below the hero. On desktop, use a horizontal form where space allows; on mobile, stack fields in a clear vertical order. Preserve all required fields and validation.
- **Featured destinations:** use large image cards with destination name and concise descriptive metadata. Avoid making every card identical in scale; use a restrained editorial rhythm.
- **Popular stays:** use consistent hotel cards with image, property name, location, factual attributes, and customer-facing price when returned by the booking system. Do not invent ratings, review counts, or availability.
- **Local experiences:** use image-led cards for tours or activities only when those products are enabled and supplied by the platform.
- **Why travel with us:** three concise, verifiable agency-specific value points. Do not insert generic promises unless the agency has approved them.
- **Footer:** agency identity, contact details, About, FAQ, and policy links. Include Ortasys branding only if the platform's white-label policy explicitly requires it.

Use a 4px base spacing unit. Desktop section spacing is typically 72–96px; mobile section spacing is 40–56px. Avoid edge-to-edge text blocks.

## Elevation & Depth

The design is mostly flat with gentle separation. Use soft, broad shadows only for floating search panels, dropdowns, and sticky booking elements. Cards should rely primarily on surface contrast and a subtle border rather than heavy elevation. Avoid glassmorphism, neon glows, and strong layered shadows.

## Shapes

Use friendly, moderately rounded geometry. Search panels and large feature cards use 16–24px radii; inputs use 10px; buttons are pill-shaped. Image corners should match their card container. Avoid mixing sharp, industrial geometry with highly rounded controls.

## Components

- **Navigation:** calm horizontal navigation; active state uses forest green and a thin underline or filled text treatment. Mobile navigation becomes a compact menu with a clearly visible close action.
- **Primary button:** forest-green pill with white text. Use action labels such as “Search hotels” or “Explore stays” only when that action is supported.
- **Secondary button:** ivory fill or transparent surface with green border/text. Do not give it the same visual weight as the primary CTA.
- **Search panel:** ivory surface, 24px radius, restrained shadow. Fields have persistent labels, not placeholder-only labels. The Hotels / Activities selector appears only if both search modes are actually supported.
- **Inputs and selectors:** white background, warm stone border, clear focus ring, 48–56px minimum height. Date and guest selectors must expose selected values and validation.
- **Destination card:** strong photography, readable location label, restrained text overlay, consistent image ratio.
- **Hotel card:** clear image, property name, destination, factual attributes, cancellation or meal information only when available, and customer-facing price. Keep price and booking action visually distinct.
- **Experience card:** show duration, category, and other verified attributes only when supplied.
- **Trust/value block:** use concise copy and simple line icons. Do not use unsupported statistics or certification marks.
- **Footer:** low visual density, clear contact hierarchy, accessible link contrast.

## Unique Architectural & Component DNA (Preset 01)

To ensure this preset looks unmistakably like an authentic regional destination host rather than a generic OTA, its section layouts and search console use the following unique patterns:

- **Hero Architecture (Bento Postcard Collage):** A 12-column asymmetric Bento hero. The left 7 columns display a tall primary postcard frame (`rounded-xl`) with warm editorial copy; the right 5 columns stack two secondary regional vignettes (Rinjani Highlands & Sade Village Craft) with live region quick-pick triggers.
- **Search Engine UI (Warm Host Pill-Strip Bar):** Instead of a boxed form, the search engine is an elongated ivory pill-capsule (`rounded-[32px]`) divided by subtle vertical warm-stone hairlines (`divide-x`), featuring a floating pill mode toggle on its upper lip and an oversized circular/pill forest-green submit button on the right.
- **Inventory Section Layout (Asymmetric Editorial Spotlight):** The first curated result renders as a 12-column horizontal "Editor's Local Spotlight" banner (7-column photo + 5-column narrative dossier), while subsequent properties render in a 2-column portrait card pair below it.
- **Tours & Experiences Layout (Horizontal Postcard Strips):** Experiences are presented as wide horizontal ticket-postcards with left-aligned thumbnail photography, middle narrative and duration badge, and right-aligned live price action.
- **Story / Value Section (Editorial Host Letter & Polaroid Frame):** A 2-column split featuring a signed "Catatan Tuan Rumah Lokal" (Local Host Letter) on warm sand paper alongside a 3-row vertical list of verified local commitments.

## Homepage Composition

Recommended fixed homepage sequence:

1. Header and navigation.
2. Destination-led hero with headline and search panel.
3. Featured destinations or destination collections.
4. Popular hotels / stays.
5. Local tours and activities, only if enabled.
6. Agency-specific “Why travel with us” content.
7. Contact or trip-planning CTA.
8. Footer with agency information and policies.

The hero should communicate the agency's destination expertise within the first viewport. Do not lead with generic global travel language if the agency specializes in one region.

## Imagery & Content Direction

Use authentic destination photography: coastlines, villages, local architecture, landscapes, food, and real traveler experiences. Prioritize images that communicate a specific place. Avoid generic stock images of anonymous airport lounges or staged business meetings.

Use wide landscape images for hero areas (recommended 16:9 or wider crop), 4:3 for destination cards, and 4:3 or 3:2 for hotel cards. Maintain a consistent image treatment and ensure focal subjects survive mobile cropping. Provide a neutral fallback when an agency has not uploaded an image.

All example brand names, destinations, descriptions, and offers in generated mockups must be clearly treated as editable sample content. Do not imply that sample hotels, prices, availability, awards, or reviews are real.

## Interaction & Responsive Behavior

- Desktop: horizontal search controls where legibility permits; avoid shrinking labels to force one row.
- Tablet: allow search controls to wrap into two rows; preserve comfortable touch targets.
- Mobile: stack search fields, keep the main CTA full-width, and use a single-column content flow.
- Search results and booking steps must follow the shared Ortasys booking behavior. This preset changes presentation, not transaction rules.
- All controls need keyboard access, visible focus, clear disabled/loading/error/success states, and descriptive labels.
- Respect reduced-motion preferences. Use subtle transitions only; never make essential information depend on animation.

## Do’s and Don’ts

- Do lead with a recognizable destination and a clear search path.
- Do use warm neutrals to support destination photography.
- Do use locally meaningful imagery supplied or approved by the agency.
- Do keep hotel facts, rates, availability, and policies connected to live platform data.
- Don't use tropical leaves, palm silhouettes, or beach gradients as automatic decoration.
- Don't use invented claims such as “best local price,” “number one,” or “trusted by thousands.”
- Don't expose supplier net rates or internal B2B information on the customer-facing storefront.
- Don't let imagery reduce search form contrast or readability.
- Don't turn every section into a large image card; preserve hierarchy and content variety.

## Ortasys Shared Invariants

This preset must preserve the common storefront contract: the same booking engine, search fields, date constraints, guest and room logic, customer-facing price rules, payment flow, confirmation behavior, and responsive accessibility requirements. Supplier names, net rates, internal wallet balances, settlement data, and agent-only margins must never appear on the public storefront. Do not fabricate capabilities not established in the product requirements.
