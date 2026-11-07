---
version: alpha
brandName: "Akar Budaya Travel"
brandType: prototype-travel-agent
name: Ortasys Storefront — Culture & Heritage
description: Fixed white-label storefront preset for cultural, heritage, and locally immersive travel specialists.
colors:
  primary: "#803D32"
  primary-hover: "#642E27"
  secondary: "#C77B55"
  tertiary: "#D6B58D"
  accent: "#52634C"
  background: "#F5EFE5"
  surface: "#FFFAF2"
  surface-muted: "#E8D8BE"
  text: "#302822"
  text-muted: "#75685C"
  border: "#D8C9B6"
  success: "#426B4C"
  warning: "#9A652C"
  error: "#A84237"
  focus: "#315F8B"
typography:
  display:
    fontFamily: "Playfair Display"
    fontSize: 62px
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: -0.025em
  h1:
    fontFamily: "Playfair Display"
    fontSize: 50px
    fontWeight: 600
    lineHeight: 1.1
  h2:
    fontFamily: "Playfair Display"
    fontSize: 38px
    fontWeight: 600
    lineHeight: 1.16
  h3:
    fontFamily: "Source Sans 3"
    fontSize: 21px
    fontWeight: 650
    lineHeight: 1.3
  body-lg:
    fontFamily: "Source Sans 3"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.65
  body-md:
    fontFamily: "Source Sans 3"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Source Sans 3"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Source Sans 3"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0.08em
rounded:
  xs: 2px
  sm: 4px
  md: 8px
  lg: 14px
  xl: 20px
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
    padding: "14px 24px"
    height: 48px
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "14px 24px"
    height: 48px
  search-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: 24px
  editorial-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
  input:
    backgroundColor: "#FFFCF7"
    textColor: "{colors.text}"
    rounded: "{rounded.xs}"
    padding: 12px
---

# Design System: Ortasys Culture & Heritage

## Overview

**Prototype travel agent: Akar Budaya Travel.** A cultural travel specialist connecting travelers with heritage sites, local traditions, crafts, and food experiences.

This is a fictional example brand created to demonstrate how this fixed storefront preset could be applied by an Ortasys agent. The name and positioning are illustrative, not an existing customer or verified business.

An editorial, story-led storefront for travel agencies specializing in culture, heritage, history, craft, food, and meaningful local encounters. The design should feel thoughtful, human, and rooted in place. It must communicate cultural depth without turning cultural identity into superficial decoration.

Use the visual language of a contemporary travel journal: strong editorial typography, warm paper-like surfaces, documentary photography, and carefully paced storytelling. The booking experience remains clear and usable; narrative content supports discovery rather than obstructing search.

**Brand personality:** thoughtful, authentic, curious, respectful, informed.

**Audience:** culturally curious travelers, heritage visitors, slow travelers, and customers interested in local traditions, architecture, food, art, and history.

**Preset boundary:** fixed structure and visual preset. Agencies may replace brand identity, approved colors, imagery, content, contact details, and enabled modules. Booking behavior, required fields, accessibility, price visibility, and transaction flow remain fixed.

## Colors

The palette draws from clay, terracotta, warm paper, aged stone, and a restrained botanical green. It should feel material and editorial, not antique or theatrical.

- **Primary Terracotta (#803D32):** primary actions, active navigation, important links.
- **Primary Hover (#642E27):** hover and pressed states.
- **Secondary Clay (#C77B55):** supporting accents, editorial tags, small visual emphasis.
- **Tertiary Sandstone (#D6B58D):** dividers, background details, quiet highlights.
- **Accent Botanical (#52634C):** limited accent for nature-related or supporting elements.
- **Background Paper (#F5EFE5):** main canvas.
- **Surface Warm White (#FFFAF2):** cards, search panel, content surfaces.
- **Muted Paper (#E8D8BE):** section background and quiet containers.
- **Text Ink (#302822):** primary text and headlines.
- **Text Muted (#75685C):** supporting copy and metadata.
- **Border Sand (#D8C9B6):** subtle borders and separators.
- **Success (#426B4C), Warning (#9A652C), Error (#A84237):** semantic states.
- **Focus Blue (#315F8B):** keyboard focus ring.

Use terracotta as the primary interaction color, not as a large decorative wash. Maintain WCAG AA contrast. Never use muted clay or sandstone as small text on paper backgrounds without checking contrast.

## Typography

Use Playfair Display for editorial headlines and Source Sans 3 for functional text, navigation, body, labels, and booking controls. The serif voice should evoke a well-designed publication, while the sans-serif system remains practical and accessible.

- **Display / H1:** Playfair Display semibold. Use sentence case and editorial line breaks.
- **H2:** Playfair Display semibold. Use for story and collection headings.
- **H3:** Source Sans 3 semibold. Use for functional card titles and subsections.
- **Body:** Source Sans 3 regular, 16px default; 18px for narrative introductions.
- **Labels:** Source Sans 3 bold, 12px, uppercase with moderate tracking.
- **Booking data:** Source Sans 3 with tabular numerals where available.

Avoid pseudo-historical typefaces, distressed fonts, decorative calligraphy, or excessive all-caps text. Do not use more than two font families.

## Layout

Use a 12-column editorial grid with a centered width around 1200px. The page should alternate between narrative sections and practical discovery modules. Use asymmetry in editorial storytelling, but keep search and booking components aligned and predictable.

- **Header:** restrained navigation with a clear agency wordmark. Menu items may include destinations, experiences, stories, and contact only if those modules exist.
- **Hero:** documentary-style destination image with a strong editorial headline. Use a two-column composition or image-led full-width section. The hero should tell users what kind of cultural journey the agency offers.
- **Search:** place a visible hotel/activities search panel immediately below or integrated into the hero. Do not let editorial storytelling delay the booking path.
- **Cultural collections:** organize content by themes such as heritage, craft, food, architecture, or local life when real agency content supports those categories.
- **Destination stories:** use editorial cards with a clear image, title, short excerpt, and optional reading action.
- **Hotels and stays:** present accommodation in a more functional card system than editorial stories. Booking facts must remain easy to scan.
- **Experiences:** use image-led cards with duration, location, and factual inclusions only when data exists.
- **Agency philosophy:** provide a space for the agency's approach to responsible, respectful, or locally informed travel, but only use claims the agency approves.
- **Footer:** agency information, contact, About, FAQ, and policy links.

Desktop editorial sections use 72–96px vertical spacing. Mobile uses 44–60px. Keep narrative text at a readable measure of approximately 55–75 characters per line.

## Elevation & Depth

Favor flat, paper-like surfaces and thin borders. Use subtle shadow only for overlays and floating menus. Cards should feel like printed editorial panels rather than app tiles. Avoid vintage paper textures that reduce contrast, heavy shadows, bevels, and ornamental frames.

## Shapes

Use mostly restrained, squared geometry with small corner radii. Inputs and buttons use 4px; cards use 8px; larger editorial image containers may use 14px. Avoid excessive pill shapes. Decorative motifs must not interfere with content or be presented as authentic cultural symbols without agency approval.

## Components

- **Branded calendar:** single-month Indonesian picker with 4px menu corners, the same option surfaces/type/selected colors as this preset, and a fixed-size calendar icon separate from the editable date text. Arrow keys move by day/week, Home/End by week and Page Up/Down by month; Enter selects, Escape dismisses, and min/max dates disable unavailable days. The top-layer picker flips/clamps to the viewport and preserves native date values plus input/change events. Browsers without Popover API retain native controls; this is not the D12 dual-month calendar.

- **Navigation:** editorial text-led navigation with clear active state. Avoid complex mega menus unless the actual content structure requires them.
- **Primary button:** terracotta fill, white label, 4px radius. Use clear action language.
- **Secondary button:** transparent or warm-white surface with terracotta border/text.
- **Search panel:** warm-white surface with thin sandstone border. Keep persistent labels, clear field grouping, and visible search CTA.
- **Story card:** image, category label, editorial title, short excerpt, and action. Avoid fake publication dates or author identities.
- **Destination card:** image-led, with destination name and verified contextual copy.
- **Hotel card:** clear property title, location, relevant facts, customer-facing price, and booking action. Do not let editorial styling hide transactional information.
- **Experience card:** show duration, meeting point, inclusions, or difficulty only if supplied by the product data.
- **Quote / pull-quote:** use only real, approved customer or agency quotations with attribution and permission.
- **Footer:** quiet, text-led, with complete contact and policy navigation.
- **Dropdowns and autocomplete:** `.ui-select` uses Source Sans 3, 48px triggers, 4px corners and a separate 16px clay chevron with 12px spacing. Parchment top-layer menus have double clay rules, 6px inner padding and wrapping 44px options. Clay fill identifies selection, sandstone identifies hover/keyboard focus, and the locked blue focus ring remains visible. Destination suggestions and required child ages share these controls without changing native form values or validation.
- **Opened-state geometry:** dialogs retain restrained 4px corners and double archival rules, with 24px desktop / 12px mobile viewport gutters. Their sticky parchment headers reserve a nonshrinking 44px close target and allow long titles to wrap. Content scrolls within the viewport; action rows wrap and drawer totals remain outside the scrolling trip list. Notifications stay below modal backdrops, never over a booking CTA.
- **Registry and ledger reflow:** native date fields wrap at a 140px minimum; guest summaries reserve their own chevron space, age fields wrap, and occupancy buttons remain 44px targets. Exhibition ledgers wrap price and action independently, switching to full-width actions below 400px rather than forcing a single-line editorial column.

## Unique Architectural & Component DNA (Preset 04)

To make this cultural & heritage storefront read like an authentic archival monograph or museum broadsheet rather than a generic booking template, its sections and search console use the following distinctive structures:

- **Hero Architecture (Broadsheet Monograph Front-Page):** A journal utility masthead and crisp double-rule navigation precede a 3:6:3 editor's note / archival photograph with italic caption / four-entry heritage index composition. There is no generic full-bleed promotional hero.
- **Search Engine UI (Archival Registry / Buku Tamu Console):** Warm parchment with a double terracotta rule; compact top-docked modes (`Rumah Pusaka & Pesanggrahan` / `Tur Sejarah & Lokakarya`); Roman-numbered destination, date and guest columns; and a dedicated terracotta verification column. The guest summary opens an inline registry extension containing labelled occupancy steppers and required child ages.
- **Inventory Section Layout (Broadsheet Columnar Exhibition):** One unified exhibition grid divided by sandstone hairlines, archival plate numbers, documentary images, serif titles, contextual notes and a double-rule IDR selling-price ledger. No invented star ratings or heritage certifications.
- **Cultural Experiences Layout:** Two side-by-side documentary image/text spreads with caption metadata, example prices and detail actions.
- **Manifesto Section:** A centred, explicitly illustrative agency statement followed by a three-column, vertical-rule essay on respectful travel. No claimed local partnerships, guaranteed availability or ceremonial access.

## Homepage Composition

Implemented homepage sequence:

1. Journal masthead and editorial navigation.
2. Three-column broadsheet front page and functional heritage index.
3. Horizontal archival guest registry.
4. Columnar exhibition of sample heritage stays.
5. Two documentary experience spreads.
6. Agency manifesto and three-part cultural-ethics essay.
7. About/contact, FAQ, policy disclosure and agency footer.

The first screen must balance inspiration with utility. A visitor should understand the agency's focus and be able to begin a search without navigating through multiple story sections.

## Imagery & Content Direction

Use documentary and editorial photography: architecture, craft, food, landscapes, local markets, performances, museums, and human moments captured respectfully. Avoid staging or exoticizing people and communities. Seek visual specificity rather than generic “ethnic” motifs.

Do not use sacred objects, ceremonial clothing, indigenous patterns, religious symbols, or culturally specific motifs as decoration without context and permission. Avoid stock photos that reduce a culture to costume or spectacle. Use real images approved by the agency and correctly caption them when context matters.

Hero imagery should be wide (16:9 or wider crop); editorial stories may use 3:2 or 4:3; hotel cards should maintain consistent ratios. Ensure all image crops preserve meaningful context on mobile.

Copy should be descriptive, respectful, and specific. Do not invent cultural expertise, local partnerships, community impact, sustainability credentials, or access to private ceremonies. All sample copy is editable placeholder content.

## Interaction & Responsive Behavior

- Desktop (1101px and above): 3:6:3 editorial front page; a four-part destination/date/guest/action registry; and three exhibition columns sharing vertical rules.
- Tablet (768–1100px): editor and photograph share two columns, the index becomes a four-entry strip, and registry fields use a two-by-two layout. The exhibition remains a compact three-column collection; documentary spreads stack their photographs above text.
- Mobile (under 768px): editor note, archival image, index and registry follow reading order. Registry columns stack; the guest extension remains inline rather than floating off-screen. Exhibition plates become one ruled column and experience spreads become full-width. Outer gutters are 16px.
- Inputs remain 48px, touch targets 44px, with persistent labels, visible focus, reduced-motion support, and keyboard-operable dialogs (Escape, focus trapping and return).
- Stays require destination, 1–30 nights, 1–9 rooms, 1–20 adults and 0–20 children per room. Every child in every room must have an explicitly chosen age 0–17; there is no default age. Tours use a date and participant counts without multiplying participants by hidden rooms.
- Local catalogue interactions provide validation, loading, true empty results, reset and a retryable failure simulation in the FAQ demo disclosure. Search and product selection preserve a trip ledger and three-step guest/payment/summary simulation.
- Payment methods are explicitly illustrative QRIS/VA choices, not live transactions. No official reservation, payment success, email or voucher is claimed. The download is a real plain-text simulation summary.

### Standalone documentation and token contract

`guidelines.html`, `search-board.html`, and `figcraft.html` retain the original embedded documentation content and styling with ordinary sibling-page links. The customer landing has no hidden documentation DOM, view router, merchandise mockup or technical documentation navigation. A quiet footer link opens the guidelines.

Existing `brand-dna.json` is reused, including its AA-safe `muted`, `secondaryText`, `fieldBorder`, `warning` and `focus` tokens; no new palette or logo is introduced. Implementation change: replaced the mixed-purpose page with the registry/broadsheet composition above while retaining supplied product identities, assets, sample selling prices and usable local booking interactions.


## Do’s and Don’ts

- Do use storytelling to explain place, context, and experience.
- Do prioritize authentic, respectful, agency-approved photography.
- Do balance editorial content with a visible booking path.
- Do distinguish verified product details from editorial descriptions.
- Don't use cultural patterns as generic decoration.
- Don't exoticize local people or communities.
- Don't imply community benefit, sustainability, local ownership, or special access without evidence.
- Don't let serif typography compromise form readability.
- Don't expose supplier net rates, agent margins, or internal B2B information.

## Ortasys Shared Invariants

Preserve shared search and booking behavior, required fields, room and guest logic, availability and price presentation, payment flow, confirmation behavior, and accessibility. The public storefront displays customer-facing selling prices only. Supplier net rates, internal wallet balances, settlement data, and agent-only margins must remain private. Do not fabricate product or cultural claims.
