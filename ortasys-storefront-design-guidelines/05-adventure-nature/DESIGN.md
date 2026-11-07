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

- **Branded calendar:** single-month Indonesian picker with 8px menu corners, the same option surfaces/type/selected colors as this preset, and a fixed-size calendar icon separate from the editable date text. Arrow keys move by day/week, Home/End by week and Page Up/Down by month; Enter selects, Escape dismisses, and min/max dates disable unavailable days. The top-layer picker flips/clamps to the viewport and preserves native date values plus input/change events. Browsers without Popover API retain native controls; this is not the D12 dual-month calendar.

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
- **Opened controls:** `components.css` gives native-backed custom selects and destination suggestions a white field-dispatch surface, Manrope labels, 8px menu/trigger radii, 48px triggers, 44px wrapping options, pine selection and registered blue focus. Menus occupy the browser top layer and scroll within runtime-calculated viewport bounds.
- **Overlay geometry:** Detail photography, badge and 44px gallery targets occupy separate rows; thumbnails never cover the badge. Detail actions wrap with flexible price/action columns. Dialogs use 16px outer gutters (10px on mobile), dynamic viewport height bounds and scrollable content. Drawer/checkout headers reserve a nonshrinking 44px close target beside shrinkable titles. Occupancy controls reserve 140px for minus/value/plus; trip summaries wrap independently of removal controls.

## Unique Architectural & Component DNA (Preset 05)

To make this outdoor expedition preset feel like an authentic wilderness field-station dispatch rather than a hotel brochure, its layout and search engine use a rugged tactical workspace architecture:

- **Hero Architecture (Landscape Dispatch):** Full-width landscape photography, opaque pine-backed condensed headline on the left, a small `3.726 MDPL` Rinjani elevation note on the right, and a four-part operational readout below. No certification, safety guarantee, permit integration, or live-stock claims.
- **Main Workspace (Field-Station Split):** At desktop widths the shared 1240px container divides into a 340px vertical console and flexible dossier inventory. The console is sticky, with viewport-bounded internal scrolling when the party/age controls grow. It is not a horizontal search bar.
- **Search Anatomy:** Two real catalogue modes; destination; paired start/end dates; three separate occupancy rows; required ages for every child in each room; validation; full-width orange search action; persistent summary and explicit local-simulation note. Rooms are 1–9, adults per room 1–20, children per room 0–20, child ages 0–17, and dates 1–30 nights.
- **Inventory Hierarchy:** Two expedition dossiers per row, with a compact sector strip, landscape, condensed title, sample logistics, customer-facing IDR price, dossier button, and add-to-trip action. Basecamp mode uses horizontal image-and-detail dossiers on desktop, matching the D02 sidebar/results relationship. Destination and sector filters genuinely restrict the sample catalogue, including an empty state.
- **Editorial Story:** Four image-led terrain selectors lead back into the real console, followed by a camp photograph and preparation story. A pine topographic four-column preparation matrix gives practical questions, not unsupported operational guarantees. FAQ, policy disclosures, agency contact, and a quiet footer close the page.
- **Documentation Split:** `guidelines.html`, `search-board.html`, and `figcraft.html` preserve the former reference sections and their styling as independent pages with ordinary relative links. No documentation DOM, view switcher, technical navigation, or merchandise mockup remains on the customer landing page. The footer quietly links to the guidelines.
- **Prototype Honesty:** Catalogue, facilities, policies, and prices are labelled “Contoh konten agen”. “Setiap harga dicek langsung saat Anda mencari” is paired with explicit simulation context. Search calculates local examples; checkout never claims payment, booking, or permit issuance. Its download is a real local `.txt` simulation summary, not a pretend PDF voucher.

## Homepage Composition

Recommended fixed homepage sequence:

1. Customer navigation and landscape dispatch hero.
2. Sticky vertical console beside expedition/basecamp dossiers.
3. Four terrain selectors and camp preparation story.
4. Topographic preparation matrix.
5. FAQ, terms, privacy, and example agency contact.
6. Pine agency footer with one quiet guidelines link.

The hero should establish energy and destination context, but search and activity discovery must remain immediately actionable.

## Imagery & Content Direction

Use real outdoor and nature photography: trekking, mountain landscapes, diving, snorkeling, kayaking, wildlife observation, coastlines, forests, and guided activities. Images should show authentic scale and context. Avoid unsafe-looking behavior, staged danger, or imagery that implies an activity the agency does not sell.

Use wide 16:9 hero imagery and consistent 4:3 or 3:2 activity-card crops. Keep focal subjects visible on mobile. Provide fallback images when an agency has not uploaded approved media.

Do not fabricate difficulty levels, trip duration, safety standards, environmental credentials, guide certifications, equipment inclusion, or group capacity. Sample activities and prices must be marked as illustrative in prototypes.

## Interaction & Responsive Behavior

- Desktop (1024px+): 340px sticky console, two expedition dossiers per row, or horizontal basecamp dossiers. The console may scroll internally without pushing its action off the page.
- Tablet (768px): console precedes inventory; terrain and preparation grids use two columns. Compact navigation avoids crowding the booking controls.
- Mobile (390px): console, inventory, and story stack. Dates retain two labelled compact columns; occupancy uses full-width rows with separate minus/input/plus controls. Terrain stays two columns; the preparation matrix becomes one column.
- **Mobile header sizing:** The brand and its text wrapper may shrink (`min-width: 0`); only the 17px wordmark is shown, with the uppercase descriptor explicitly hidden. The trip counter and 44px menu retain their own width. Closed drawers leave layout entirely; page-wide overflow masking is not used.
- Fields are at least 48px tall; interactive controls have 44px minimum targets. Keyboard focus uses the registered focus token; dialogs support Escape, Tab containment, and focus return.
- Reduced-motion preferences suppress animation and smooth CSS scrolling. No autoplay or parallax is used.
- Registered AA text tokens are used instead of raw muted/accent swatches; orange CTAs use `onCta`, never white small text. Hero photo scrims are registered primary-derived decorative tokens in `brand-dna.json`.
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
