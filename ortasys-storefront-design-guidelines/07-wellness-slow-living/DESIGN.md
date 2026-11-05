---
version: alpha
brandName: "Sela Retreats"
brandType: prototype-travel-agent
name: Ortasys Storefront — Wellness & Slow Living
description: Fixed white-label storefront preset for wellness retreats, restorative escapes, and slow-travel specialists.
colors:
  primary: "#53665A"
  primary-hover: "#3D5045"
  secondary: "#A7A88A"
  tertiary: "#D9C8AE"
  accent: "#B98270"
  background: "#F5F3EC"
  surface: "#FFFEFA"
  surface-muted: "#EAE9DF"
  text: "#303B34"
  text-muted: "#737B70"
  border: "#DADBCF"
  success: "#4F765B"
  warning: "#A7793D"
  error: "#A94F49"
  focus: "#315F8B"
typography:
  display:
    fontFamily: "Lora"
    fontSize: 62px
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: -0.025em
  h1:
    fontFamily: "Lora"
    fontSize: 50px
    fontWeight: 500
    lineHeight: 1.1
  h2:
    fontFamily: "Lora"
    fontSize: 38px
    fontWeight: 500
    lineHeight: 1.15
  h3:
    fontFamily: "DM Sans"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.3
  body-lg:
    fontFamily: "DM Sans"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.7
  body-md:
    fontFamily: "DM Sans"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.65
  body-sm:
    fontFamily: "DM Sans"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "DM Sans"
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: 0.1em
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
  retreat-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
  input:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: 12px
---

# Design System: Ortasys Wellness & Slow Living

## Overview

**Prototype travel agent: Sela Retreats.** A slow-travel and wellness specialist offering restorative escapes, mindful stays, and retreat experiences.

This is a fictional example brand created to demonstrate how this fixed storefront preset could be applied by an Ortasys agent. The name and positioning are illustrative, not an existing customer or verified business.

A calm, restorative storefront for agencies specializing in wellness retreats, nature-based escapes, mindful travel, and slower-paced journeys. The experience should feel spacious and grounded, encouraging considered exploration rather than urgency. It should not make medical or therapeutic promises.

The visual language is soft but not vague: clear booking controls, readable property facts, and deliberate content hierarchy sit within a quiet editorial environment.

**Brand personality:** calm, restorative, thoughtful, natural, balanced.

**Audience:** travelers seeking quiet stays, wellness-oriented holidays, nature retreats, yoga or meditation experiences, and slower itineraries.

**Preset boundary:** fixed layout and visual preset. Agencies may change approved brand identity, photography, copy, and enabled modules. Booking logic, required fields, price visibility, accessibility, and transaction hierarchy remain fixed.

## Colors

The palette uses sage, mineral green, warm stone, and muted clay. It should create a calm atmosphere without compromising contrast or making the interface look faded.

- **Primary Sage (#53665A):** primary actions, navigation emphasis, selected controls.
- **Primary Hover (#3D5045):** hover and pressed states.
- **Secondary Olive Mist (#A7A88A):** supporting surfaces and quiet highlights.
- **Tertiary Warm Stone (#D9C8AE):** section backgrounds and separators.
- **Accent Muted Clay (#B98270):** limited editorial accents.
- **Background Soft Mineral (#F5F3EC):** page canvas.
- **Surface Warm White (#FFFEFA):** cards, forms, and search panel.
- **Muted Surface (#EAE9DF):** quiet alternate sections.
- **Text Deep Moss (#303B34):** primary text.
- **Text Muted (#737B70):** supporting copy.
- **Border Sage Stone (#DADBCF):** borders and separators.
- **Success (#4F765B), Warning (#A7793D), Error (#A94F49):** semantic states.
- **Focus Blue (#315F8B):** visible keyboard focus.

Do not use low-contrast pale sage for text. Keep primary actions visibly distinct. Maintain WCAG AA contrast.

## Typography

Use Lora for editorial headings and DM Sans for all functional text. This pairing supports a reflective voice while preserving clear booking controls.

- **Display / H1 / H2:** Lora medium. Use short, composed headlines.
- **H3:** DM Sans semibold for card and functional headings.
- **Body:** DM Sans regular, 16px default, with 1.65 line height.
- **Labels:** DM Sans semibold, 11px, moderate letter spacing.
- **Prices and dates:** DM Sans with tabular numerals.

Avoid script fonts, overly thin weights, and exaggerated letter spacing. Do not use more than two font families.

## Layout

Use a centered 12-column grid with a content width around 1200px. Use generous whitespace and slower visual pacing, but keep booking actions visible.

- **Header:** minimal navigation with clear agency identity and contact access.
- **Hero:** tranquil destination or retreat imagery with a concise statement of the agency's travel philosophy. Use a split layout or full-width image with carefully controlled contrast.
- **Search:** visible below or integrated into the hero. Search should not be hidden behind a mood-led CTA.
- **Retreat collections:** use curated collections for nature stays, quiet escapes, or wellness experiences only when actual inventory supports them.
- **Stays:** present accommodation with practical details, location, factual amenities, and customer-facing price.
- **Experience content:** yoga, spa, meditation, or wellness activities appear only if supplied and genuinely offered.
- **Slow travel editorial:** include destination stories or itinerary inspiration when the agency has approved content.
- **Agency approach:** explain the agency's service philosophy without making health outcome claims.
- **Footer:** contact, policy, FAQ, and agency information.

Desktop section spacing should be 80–104px; mobile 48–64px. Use fewer modules per viewport than the Global template.

## Elevation & Depth

Use almost-flat surfaces, soft borders, and restrained shadows. Search overlays may use a gentle shadow. Avoid glassmorphism, glow effects, hard gradients, and excessive animation. Visual calm should come from spacing, imagery, and typography.

## Shapes

Use soft, rounded geometry: 10px inputs, 16px cards, 24px panels, and pill-shaped buttons. Avoid excessive organic blobs or decorative wave shapes. The interface should feel composed rather than whimsical.

## Components

- **Navigation:** minimal, text-led, and uncluttered.
- **Primary button:** sage fill with white text, pill radius, minimum 48px height.
- **Secondary button:** warm-white surface, sage text and subtle border.
- **Search panel:** warm-white surface with clear labels and restrained elevation.
- **Retreat card:** strong image, title, location, factual inclusions, and price where available.
- **Hotel card:** use shared hotel information hierarchy and do not omit transactional facts.
- **Experience card:** show duration, location, and inclusions only when supplied.
- **Editorial quote:** use only approved, real quotations with permission and attribution.
- **Wellness claims:** do not imply medical benefit, guaranteed stress reduction, healing, detoxification, or therapeutic outcomes.

## Unique Architectural & Component DNA (Preset 07)

To make this restorative slow-travel storefront embody visual calm and unhurried pacing rather than dense commercial grid layouts, its sections and search console use a serene centered architecture:

- **Hero Architecture (Centered Zen Pavilion Frame):** A light oatmeal canvas (`#F5F3EC`) with centered poetic serif typography (`Lora`), generous breathing space, and a wide soft-framed panoramic sanctuary photograph (`rounded-[32px]`) below the headline.
- **Search Engine UI (Floating Zen Intention Pill Console):** A serene centered console (`max-w-4xl mx-auto rounded-[28px]`) with soft sage dividers, unhurried serif labels (*Pilih Lokasi Hening*, *Mulai Rehat*, *Selesai Rehat*, *Kapasitas Suaka*), and a pill-shaped sage verification trigger.
- **Inventory Section Layout (Single-Column Slow-Scroll Sanctuary Showcase):** Replaces multi-column card grids with a centered single-column vertical showcase (`max-w-4xl mx-auto`). Each sanctuary is presented as a wide horizontal pavilion card (`rounded-3xl`) with a 5-column natural-light image on one side and a 7-column restorative journal entry on the other.
- **Manifesto Section (Daily Slow-Living Rhythm Schedule):** A 3-part daily rhythm card sequence (*06:00 Hening Fajar*, *11:00 Kebun Nabati*, *17:00 Sound Bath Senja*) illustrating the unhurried pace of the retreats alongside transparent SNAP BI & DOKU settlement.

## Homepage Composition

Recommended fixed homepage sequence:

1. Minimal header.
2. Calm hero with agency proposition and visible search.
3. Curated retreat or destination collections.
4. Featured stays.
5. Wellness and slow-travel experiences, if enabled.
6. Destination story or agency philosophy.
7. Practical booking information and FAQ.
8. Contact CTA and footer.

The homepage should feel unhurried while keeping the booking journey obvious.

## Imagery & Content Direction

Use natural-light photography of quiet landscapes, thoughtful interiors, gardens, coastline, retreat spaces, and genuine wellness activities. Prefer authentic and understated imagery over staged luxury clichés. Avoid images implying medical treatment or guaranteed wellness outcomes.

Use 16:9 hero imagery and 4:3 cards. Keep a natural, low-saturation but still legible color treatment. Do not apply a heavy beige filter to every image. Provide neutral fallbacks.

Do not claim certified practitioners, medical outcomes, detox programs, sustainability credentials, or exclusive access unless confirmed. Example retreats and prices are illustrative.

## Interaction & Responsive Behavior

- Desktop: spacious editorial layout with visible search panel.
- Tablet: reduce spacing while retaining clear card hierarchy.
- Mobile: stack search controls and maintain comfortable vertical rhythm.
- Avoid auto-playing ambient video or sound.
- Respect reduced motion and provide immediate interaction feedback.
- Ensure visible keyboard focus and minimum 44px touch targets.
- Preserve shared Ortasys booking and payment behavior.

## Do’s and Don’ts

- Do use calm composition and authentic nature imagery.
- Do keep transactional information clear.
- Do use whitespace intentionally, not as a substitute for content.
- Do distinguish travel inspiration from verified product information.
- Don't use low-contrast pale text.
- Don't make health or therapeutic promises.
- Don't imply certification or practitioner credentials without evidence.
- Don't hide search or booking behind lifestyle storytelling.
- Don't expose supplier net rates or internal agent data.

## Ortasys Shared Invariants

Preserve the common search fields, room and guest rules, date constraints, customer-facing price display, payment flow, confirmation behavior, and accessibility. Do not invent wellness capabilities or health claims. Supplier net rates, internal wallet balances, settlement data, and agent margins remain private.
