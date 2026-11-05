---
version: alpha
brandName: "Rimba Trek Adventures"
brandType: prototype-travel-agent
name: Ortasys Storefront — Adventure & Nature
description: Fixed white-label storefront preset for outdoor, adventure, expedition, and nature-focused travel operators.
colors:
  primary: "#183B32"
  primary-hover: "#102D26"
  secondary: "#D97736"
  tertiary: "#E6C99C"
  accent: "#6D8B63"
  background: "#F2F0E9"
  surface: "#FFFFFF"
  surface-muted: "#E5E7DE"
  text: "#242A27"
  text-muted: "#68716A"
  border: "#D2D8CF"
  success: "#34734D"
  warning: "#B56B24"
  error: "#B64138"
  focus: "#246B9B"
typography:
  display:
    fontFamily: "Barlow Condensed"
    fontSize: 68px
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: -0.025em
  h1:
    fontFamily: "Barlow Condensed"
    fontSize: 58px
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: -0.02em
  h2:
    fontFamily: "Barlow Condensed"
    fontSize: 42px
    fontWeight: 700
    lineHeight: 1.08
  h3:
    fontFamily: "Manrope"
    fontSize: 21px
    fontWeight: 700
    lineHeight: 1.25
  body-lg:
    fontFamily: "Manrope"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.55
  body-md:
    fontFamily: "Manrope"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: "Manrope"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "Manrope"
    fontSize: 12px
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: 0.08em
rounded:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 18px
  xl: 24px
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
    backgroundColor: "{colors.secondary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: "14px 24px"
    height: 50px
  button-secondary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: "14px 24px"
    height: 50px
  search-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: 24px
  activity-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
  input:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: 12px
---

# Design System: Ortasys Adventure & Nature

## Overview

**Prototype travel agent: Rimba Trek Adventures.** An outdoor travel operator focused on trekking, nature exploration, and guided adventure experiences.

This is a fictional example brand created to demonstrate how this fixed storefront preset could be applied by an Ortasys agent. The name and positioning are illustrative, not an existing customer or verified business.

A bold, energetic storefront for agencies and operators specializing in outdoor activities, expeditions, and nature-based travel. The interface should communicate movement, capability, and respect for the outdoors. It should feel active and confident without becoming aggressive or visually chaotic.

The design uses strong photography, condensed display typography, clear activity categories, and practical information hierarchy. Visitors should quickly understand what kind of adventure is offered, what level of effort is involved when that information exists, and how to search or book.

**Brand personality:** energetic, capable, adventurous, direct, nature-aware.

**Audience:** explorers, hikers, divers, outdoor enthusiasts, active couples, and travelers seeking guided nature experiences.

**Preset boundary:** fixed visual and layout preset. Agencies may replace brand identity, approved color overrides, imagery, content, and enabled modules. Booking rules, search fields, pricing visibility, accessibility, and transaction flow remain fixed.

## Colors

The palette combines deep forest green, trail orange, earth sand, and neutral off-white. Forest green anchors the brand; orange is the main action accent and should be used with restraint; sand provides warmth without reducing readability.

- **Primary Forest (#183B32):** navigation, headings, secondary actions, dark panels.
- **Primary Hover (#102D26):** hover and pressed states for forest controls.
- **Secondary Trail Orange (#D97736):** primary CTA and high-priority action.
- **Tertiary Earth Sand (#E6C99C):** supporting surfaces, dividers, quiet highlights.
- **Accent Moss (#6D8B63):** activity categories and subtle nature-related emphasis.
- **Background Off-white (#F2F0E9):** page canvas.
- **Surface White (#FFFFFF):** cards, forms, search panel.
- **Muted Sage (#E5E7DE):** alternate section surfaces and skeletons.
- **Text Charcoal (#242A27):** primary text.
- **Text Muted (#68716A):** supporting copy and metadata.
- **Border Sage Stone (#D2D8CF):** outlines and separators.
- **Success (#34734D), Warning (#B56B24), Error (#B64138):** semantic states.
- **Focus Blue (#246B9B):** keyboard focus.

Orange is reserved for primary actions and a small number of high-value markers. Do not use orange for long text or large background areas. Maintain WCAG AA contrast.

## Typography

Use Barlow Condensed for bold display headlines and Manrope for all body, navigation, labels, forms, and data. Condensed typography provides energy and strong section hierarchy; Manrope preserves readability in transactional UI.

- **Display / H1:** Barlow Condensed bold. Use short, action-oriented headlines.
- **H2:** Barlow Condensed bold. Use for activity categories and destination sections.
- **H3:** Manrope bold. Use for activity and property titles.
- **Body:** Manrope regular, 16px default; 18px for introductory copy.
- **Labels:** Manrope extra-bold, 12px, uppercase with moderate tracking.
- **Operational details:** Manrope with tabular numerals for duration, dates, group size, and prices.

Do not use condensed typography for long descriptions, legal content, or form labels. Avoid distressed, stencil, or camouflage type treatments.

## Layout

Use a 12-column desktop grid and a centered content width of approximately 1200px. The layout should feel dynamic but remain highly structured. Use strong horizontal bands, image-led sections, and clear activity groupings.

- **Header:** compact and robust, with clear navigation. Use a strong primary action such as “Find an adventure” only if it maps to a real supported flow.
- **Hero:** action-led photography showing a real activity or landscape. Headline should communicate the type of adventure, not a vague motivational slogan. Search should be visible within or immediately below the hero.
- **Search:** provide the hotel/activities selector only if both modes are supported. Activity-specific filters such as difficulty, duration, or group size must not be invented as functional controls unless the product actually supports them.
- **Activity categories:** use clear image-led tiles for trekking, diving, water activities, wildlife, or other categories only when the agency has those products.
- **Featured experiences:** use cards with verified duration, location, difficulty, inclusions, and customer-facing price where supplied.
- **Stays:** include hotels or lodges as a distinct module if accommodation is offered.
- **Destination section:** show relevant natural destinations with real photography and concise context.
- **Preparation / information block:** use only if the agency has verified practical guidance such as equipment, fitness requirements, or safety instructions.
- **Footer:** agency details, contact, policies, and required support links.

Desktop section spacing is 64–88px; mobile is 40–56px. Keep activity cards consistent and avoid excessive diagonal or tilted layouts.

## Elevation & Depth

Use functional, moderate depth. Cards have thin borders and subtle shadows on hover. Search panels and dropdowns may use a soft shadow. Avoid heavy 3D effects, neon outlines, aggressive gradients, and excessive motion. The photography should provide most of the visual energy.

## Shapes

Use sturdy, moderately rounded geometry. Buttons and inputs use 8px; cards use 12px; larger image containers use 18px. Avoid overly soft pill-heavy UI. Keep action controls visually robust and consistent.

## Components

- **Navigation:** compact, high-contrast, with a clear active state.
- **Primary button:** trail-orange fill with white label, 8px radius, 50px minimum height. Verify contrast before use; if the chosen text contrast fails, use a darker accessible orange or dark text treatment.
- **Secondary button:** forest-green fill or outline. It must remain visually subordinate to the primary action.
- **Search panel:** white surface with clear grouping and persistent labels. The search CTA uses the trail-orange primary treatment.
- **Activity card:** strong image, title, location, verified duration or category, and customer-facing price if available.
- **Difficulty indicator:** render only when a reliable difficulty value is provided. Use text labels in addition to color; never rely on color alone.
- **Duration and group size:** use concise metadata with tabular numerals. Do not invent maximum group sizes.
- **Hotel card:** use the shared hotel-card information hierarchy, not an activity-specific treatment.
- **Safety information:** present clear, factual, agency-approved requirements. Do not imply certifications, insurance, guide qualifications, or safety guarantees without evidence.
- **Trust block:** show real operational facts only; avoid unsupported claims about safety records or environmental impact.

## Unique Architectural & Component DNA (Preset 05)

To make this outdoor expedition preset feel like an authentic wilderness field-station dispatch rather than a hotel brochure, its layout and search engine use a rugged tactical workspace architecture:

- **Hero Architecture (Tactical Expedition Telemetry Banner):** A high-contrast forest-pine banner (`#183B32`) with a bottom telemetry ticker bar displaying elevation peaks (`3.726 MDPL`), APGI guide certification status, and national park Simaksi live sync.
- **Main Workspace Layout (2-Column Sticky Field-Station Split):** Instead of a full-width top search bar over a 3-column grid, the main body is a 12-column split workspace: the **Left 4 Columns** house a sticky vertical **Field-Station Dispatch Search Console** (`lg:sticky lg:top-24`), and the **Right 8 Columns** display the live expedition & basecamp catalog.
- **Search Engine UI (Vertical Field-Station Dispatch Console):** Stacked vertical tactical controls with high-contrast condensed labels (`SECTOR / CONSERVATION ZONE`, `EXPEDITION WINDOW`, `SQUAD & TENT MATRIX`) and a full-width trail-orange (`#D97736`) quota check trigger.
- **Inventory Section Layout (2-Column Topographic Dossier Cards):** Cards feature a top technical spec strip (`ELEVATION / DURATION / GRADE`), bold condensed titles, gear/logistics tags, and an orange-accented bottom quota bar.
- **Safety & Preparation Section (Expedition Gear & Protocol Matrix):** A 4-column tactical checklist grid detailing mandatory APGI safety gear, Simaksi permit sync, zero-waste mountaineering, and DOKU/SNAP BI settlement.

## Homepage Composition

Recommended fixed homepage sequence:

1. Header and navigation.
2. Full-width adventure hero with clear proposition and search entry point.
3. Activity category selector or curated activity collections.
4. Featured adventures and experiences.
5. Destination / nature collections.
6. Accommodation options, if supported.
7. Practical preparation or trip information, only when verified.
8. Agency-specific service and expertise section.
9. Contact CTA and footer.

The hero should establish energy and destination context, but search and activity discovery must remain immediately actionable.

## Imagery & Content Direction

Use real outdoor and nature photography: trekking, mountain landscapes, diving, snorkeling, kayaking, wildlife observation, coastlines, forests, and guided activities. Images should show authentic scale and context. Avoid unsafe-looking behavior, staged danger, or imagery that implies an activity the agency does not sell.

Use wide 16:9 hero imagery and consistent 4:3 or 3:2 activity-card crops. Keep focal subjects visible on mobile. Provide fallback images when an agency has not uploaded approved media.

Do not fabricate difficulty levels, trip duration, safety standards, environmental credentials, guide certifications, equipment inclusion, or group capacity. Sample activities and prices must be marked as illustrative in prototypes.

## Interaction & Responsive Behavior

- Desktop: use a visible search panel and a balanced activity grid.
- Tablet: reduce grid columns and keep activity metadata readable.
- Mobile: stack search fields, use full-width CTA, and show activity details before the booking action.
- Avoid auto-playing video and parallax that interferes with reading or performance.
- Respect reduced-motion preferences.
- Use clear keyboard focus, labels, validation, and minimum 44px touch targets.
- Keep the same booking and payment behavior as the shared Ortasys storefront engine.

## Do’s and Don’ts

- Do use authentic activity photography and clear category hierarchy.
- Do make practical trip information easy to find.
- Do show difficulty, duration, or requirements only when verified.
- Do use orange as a focused action accent.
- Don't use danger aesthetics, camouflage, distressed textures, or aggressive motion as shortcuts for adventure.
- Don't invent safety guarantees, certifications, environmental claims, or guide credentials.
- Don't imply activities are bookable if inventory is unavailable.
- Don't let large hero imagery push search too far down the page.
- Don't expose supplier net rates, agent margins, or internal B2B information.

## Ortasys Shared Invariants

Preserve shared booking engine behavior, required search fields, date and occupancy rules, price presentation, payment flow, confirmation behavior, and accessibility. Only customer-facing selling prices may appear. Supplier net rates, internal wallet balances, settlement data, and agent-only margins remain private. Activity-specific filters or booking features must not be shown unless supported by the actual product.
