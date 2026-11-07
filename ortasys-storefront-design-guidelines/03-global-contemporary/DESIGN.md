---
version: alpha
brandName: "Atlasway Travel"
brandType: prototype-travel-agent
name: Ortasys Storefront — Global & Contemporary
description: Fixed white-label storefront preset for digitally oriented agencies serving multi-destination and international travelers.
colors:
  primary: "#142C4E"
  primary-hover: "#0D1F39"
  secondary: "#3978B9"
  tertiary: "#A9C9E6"
  accent: "#2C9A91"
  background: "#F4F7FA"
  surface: "#FFFFFF"
  surface-muted: "#E8EEF4"
  text: "#252E3A"
  text-muted: "#647386"
  border: "#D7E0E9"
  success: "#237A55"
  warning: "#A86B20"
  error: "#B83F4B"
  focus: "#1769AA"
typography:
  display:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 60px
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: -0.045em
  h1:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.035em
  h2:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 34px
    fontWeight: 700
    lineHeight: 1.2
  h3:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 20px
    fontWeight: 650
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
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0.02em
rounded:
  xs: 6px
  sm: 10px
  md: 14px
  lg: 20px
  xl: 28px
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
    rounded: "{rounded.md}"
    padding: "14px 22px"
    height: 48px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "14px 22px"
    height: 48px
  search-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: 24px
  destination-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
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

# Design System: Ortasys Global & Contemporary

## Overview

**Prototype travel agent: Atlasway Travel.** A digitally oriented travel agency offering multi-destination discovery and streamlined online booking.

This is a fictional example brand created to demonstrate how this fixed storefront preset could be applied by an Ortasys agent. The name and positioning are illustrative, not an existing customer or verified business.

A contemporary, search-first storefront for digitally oriented travel agencies serving multiple destinations and international customers. The interface should feel efficient, globally legible, dependable, and current. It combines the clarity of a modern travel platform with the distinct identity of an individual agency.

This preset is the most neutral and scalable of the five. It should support broad destination discovery without looking like a generic copy of a major OTA. The agency's identity comes through its logo, photography, editorial copy, and approved brand color overrides, while the core interface remains consistent and highly usable.

**Brand personality:** modern, capable, clear, connected, dependable.

**Audience:** independent travelers, couples, families, and international customers comparing destinations and accommodation options.

**Preset boundary:** fixed page structure and visual preset. Agencies can replace approved brand assets and content, but cannot change booking rules, required fields, price visibility, accessibility, or core transaction hierarchy.

## Colors

The palette uses deep navy for trust and primary actions, clear blue for interaction, pale sky blue for supporting emphasis, and cool neutral surfaces for a clean digital experience.

- **Primary Navy (#142C4E):** primary CTA, active navigation, key headings where needed.
- **Primary Hover (#0D1F39):** hover and pressed state.
- **Secondary Blue (#3978B9):** links, selected controls, supporting actions.
- **Tertiary Sky (#A9C9E6):** quiet highlights, selected backgrounds, decorative accents.
- **Accent Teal (#2C9A91):** limited secondary emphasis and informational markers.
- **Background Cloud (#F4F7FA):** page canvas.
- **Surface White (#FFFFFF):** cards, search panel, forms, menus.
- **Muted Surface (#E8EEF4):** alternate sections, skeletons, quiet containers.
- **Text Slate (#252E3A):** primary text.
- **Text Muted (#647386):** descriptions, metadata, helper text.
- **Border Mist (#D7E0E9):** card borders and field outlines.
- **Success (#237A55), Warning (#A86B20), Error (#B83F4B):** semantic states.
- **Focus Blue (#1769AA):** keyboard focus ring.

Keep the primary navy action visually dominant. Use teal only as a supporting accent. Maintain WCAG AA contrast, including for text on blue surfaces and all interactive states.

## Typography

Use Plus Jakarta Sans for display and headings, paired with Inter for body copy, forms, labels, and dense information. The overall typography should be crisp and highly legible across languages.

- **Display / H1:** Plus Jakarta Sans bold. Use concise, confident headlines with controlled line length.
- **H2 / H3:** Plus Jakarta Sans semibold or bold. Establish clear hierarchy without excessive size jumps.
- **Body:** Inter regular, 16px default; 14px for metadata and 18px for introductory copy.
- **Labels:** Inter semibold, 12px. Use sentence case except for short metadata tags.
- **Prices, dates, occupancy:** Inter with tabular numerals where available.
- **International text:** ensure fallback stacks support accented Latin characters and non-Latin scripts if language support is added. Do not assume every selected font covers every language.

Avoid condensed or ornamental typefaces. Keep line lengths readable and use consistent typography across all transactional components.

## Layout

Use a 12-column grid and a centered content width of approximately 1200–1280px. The layout is modular, search-led, and optimized for scanning. Prioritize consistent alignment and repeatable card patterns.

- **Header:** clear logo, concise navigation, language/currency controls only when supported, and a visible account/contact action where relevant. Do not display inactive language or currency selectors.
- **Hero:** clean, confident headline with a prominent search panel. Photography may be a wide image, split image, or controlled collage, but the search path must dominate.
- **Search:** place hotel search in the hero or immediately below it. Use a clear segmented selector for Hotels and Activities only when both are available. Required fields should remain visible and understandable.
- **Destination discovery:** modular cards with consistent aspect ratios and clear destination labels. Use collections such as “Explore destinations” or “Popular places” only when backed by real content.
- **Featured hotels:** compact but information-rich cards. Prioritize property name, location, relevant amenities, customer-facing price, and availability context.
- **Travel inspiration:** use editorial rows or a controlled card grid, not a wall of promotional tiles.
- **Agency trust section:** present only approved and substantiated differentiators.
- **Footer:** include agency information, contact, policies, and any genuinely supported language or currency options.

Desktop sections typically use 64–88px vertical spacing. Mobile sections use 40–56px. Align cards and text to a consistent grid.

## Elevation & Depth

Use subtle, functional depth. Cards may have a light border and a very soft shadow on hover. Search panels and dropdowns can use slightly stronger separation. Avoid dramatic shadows, glassmorphism, and layered gradients. Depth should clarify interaction, not decorate the page.

## Shapes

Use a modern, moderately rounded shape language. Inputs use 10px radii, cards 14px, larger panels 20px, and buttons 14px. Pill shapes are reserved for compact chips or status labels, not every button. Keep radii consistent across the entire storefront.

## Components

- **Branded calendar:** single-month Indonesian picker with 14px menu corners, the same option surfaces/type/selected colors as this preset, and a fixed-size calendar icon separate from the editable date text. Arrow keys move by day/week, Home/End by week and Page Up/Down by month; Enter selects, Escape dismisses, and min/max dates disable unavailable days. The top-layer picker flips/clamps to the viewport and preserves native date values plus input/change events. Browsers without Popover API retain native controls; this is not the D12 dual-month calendar.

- **Navigation:** compact and predictable. Active item uses navy text and a subtle underline or background.
- **Primary button:** navy fill, white label, 48px minimum height, 14px radius. Labels should describe the action.
- **Secondary button:** white surface, navy text, thin border. Use for lower-priority actions.
- **Search panel:** white surface, subtle border/shadow, 20px radius. Maintain clear field grouping and a single dominant search CTA.
- **Inputs:** white surface, 1px border, 48–56px height, persistent labels, clear error/help text.
- **Segmented control:** use only for genuinely available search modes. Selected state uses navy or a clear navy-tinted surface.
- **Destination card:** consistent image crop, destination title, and optional verified metadata.
- **Hotel card:** clear image, property title, location, key attributes, price, and booking action. Avoid overcrowding with unverified badges.
- **Language/currency selector:** render only if the storefront supports the selected options and correct localization/price conversion.
- **Trust/value block:** use simple icons and concise verified claims.
- **Footer:** organized into readable link groups; avoid hiding policy links.
- **Dropdowns and autocomplete:** shared `.ui-select` controls use Inter, 48px triggers, 10px field corners and a separate 16px chevron with a 12px text gap. Top-layer menus use 14px corners, 6px padding and wrapping 44px option targets; navy marks selection, cool gray marks hover/keyboard focus, and the blue focus outline remains visible. Destination suggestions use the same menu as dynamically generated child-age selectors; native selects retain their values and validation.
- **Opened-state geometry:** dialogs use 20px corners, 24px desktop / 12px mobile viewport gutters, a sticky paper-white header and a nonshrinking 44px close control. Content scrolls inside the viewport; titles and action rows wrap independently. The trip drawer keeps its total/action outside the scrolling item list. Notifications sit below modal backdrops so they cannot cover booking actions.
- **Narrow controls:** date fields reflow at a 150px minimum rather than clipping native date segments; occupancy buttons retain 44px targets, child-age fields wrap, and sub-400px hub/tour tiles stack to prevent text and button collisions.

## Unique Architectural & Component DNA (Preset 03)

To make this digital agency preset feel like a modern multi-destination SaaS command center rather than a traditional brochure site, its components and layouts follow a distinct modular system:

- **Hero Architecture (Search-First Split Command Center):** Navy command deck with a supplied photographic background, 5:7 proposition/console split, and `Jakarta CBD`, `Bali Nusa Dua`, `Yogyakarta Zone` quick-hub controls. The console is the primary action, not a floating generic horizontal search bar.
- **Search Engine UI (Docked Multi-Hub Command Console):** Docked `Penginapan · Stays` / `Tur Kota & Pulau` tabs; numbered destination, dates, and occupancy groups; destination hub shortcuts inside the console; boxed modular fields; separate action dock and full-width, explicitly simulated catalogue status. Desktop guest steppers use stacked values with 44px decrease/increase controls.
- **Inventory Section Layout (Horizontal Comparison Rows):** Full-width 31% image / 43% specifications / 26% price-and-action rows, with dedicated detail and selection controls. No invented star ratings or confirmation badges. Prices are customer-facing IDR examples.
- **Tours & Mobility Layout:** Two-column horizontal image/text tiles opening product details before selection.
- **Editorial Journey Layout:** Three hub discovery panels followed by comparison inventory, compact mobility tiles, and a landscape/numbered-itinerary split. Consumer FAQ and contact replace merchant integration, supplier, margin, and compliance marketing.

## Homepage Composition

Implemented homepage sequence:

1. Compact agency navigation and trip drawer.
2. Navy search-first split command deck.
3. Three destination hubs with independent Stays/Tours shortcuts.
4. Horizontal comparison inventory on a muted section canvas.
5. Compact regional mobility tiles.
6. Landscape and numbered journey suggestions.
7. About/contact, FAQ and policy disclosure.
8. Agency footer with a quiet brand-guideline link.

The search function must be discoverable immediately. Do not force users to scroll through marketing content before they can search.

## Imagery & Content Direction

Use contemporary destination and hospitality photography with natural color grading and clear subject matter. Mix city skylines, architecture, resorts, landscapes, and authentic traveler experiences based on the agency's actual destination mix. Avoid generic global collages that do not communicate a real place.

Use consistent crops: 16:9 for hero, 4:3 for cards, and square thumbnails only for compact modules. Use image focal points that survive responsive cropping. Provide a neutral fallback when assets are missing.

Do not invent country coverage, destination counts, hotel counts, partner counts, customer reviews, ratings, awards, or service levels. Sample prices and inventory must be visibly identified as illustrative if used in a design prototype.

## Interaction & Responsive Behavior

- Desktop: a 5:7 split command deck; the console uses numbered destination, dates and occupancy groups. At 1200px and above, dates and guests share a two-column console row.
- Tablet (768–1199px): the deck remains split, but console date and occupancy groups stack. Horizontal inventory retains its image/specification/price ownership.
- Mobile (under 768px): proposition precedes the complete console, fields and steppers stack, primary search spans the panel, hub discovery becomes image/text strips, and comparison rows become image/specification/price stacks. Outer gutters are 16px with no carousel-dependent booking controls.
- Persistent labels, 48px fields, 44px buttons, visible focus and reduced-motion scrolling apply throughout. Detail, trip and checkout overlays support Escape, keyboard trapping and focus return.
- Required input: destination, 1–30 nights for stays (or tour date), 1–9 rooms, 1–20 adults and 0–20 children per room. Every child in every room requires an explicit 0–17 age selection; no age is preselected.
- The local catalogue has validation, loading, empty, reset and retryable error states. The FAQ demo disclosure includes an opt-in search-failure simulation. Searches invalidate stale calculations when inputs change.
- Search, detail, trip and three-step checkout remain local simulations. QRIS/VA are labelled examples; no funds, availability confirmation, email or official voucher is claimed. The downloadable file is a real plain-text simulation summary.
 
### Standalone documentation and token contract

`guidelines.html`, `search-board.html`, and `figcraft.html` preserve the former embedded documentation content and styling, with ordinary sibling-page links. `index.html` contains no documentation views or view router. Existing `brand-dna.json` is reused, including AA-safe `muted`, `secondaryText`, `fieldBorder`, `warning` and `focus`; decorative palette foundations remain unchanged.

Implementation change: replaced the mixed documentation/customer page with the command-center storefront above, retaining the existing product identities, image assets, sample selling prices and local booking interactions.


## Do’s and Don’ts

- Do make search the clearest action in the first viewport.
- Do use clean alignment and consistent card geometry.
- Do support international readability without implying unsupported localization.
- Do render locale selectors only when functional.
- Do keep customer-facing prices and policies easy to scan.
- Don't imitate a specific OTA's proprietary visual identity.
- Don't add fake country counts, inventory statistics, ratings, or “best price” claims.
- Don't clutter the hero with multiple competing CTAs.
- Don't expose supplier net rates, agent margins, or internal B2B information.

## Ortasys Shared Invariants

Preserve shared search fields, date constraints, room and guest logic, live price/availability behavior where supplied, customer-facing selling-price rules, payment flow, confirmation behavior, and accessibility. Never display supplier net rates, internal wallet balances, settlement information, or agent-only margins on the public storefront. Do not present unsupported currencies or languages as available.
