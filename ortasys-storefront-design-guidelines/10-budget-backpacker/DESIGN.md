---
version: alpha
brandName: "Jalan Hemat Travel"
brandType: prototype-travel-agent
name: Ortasys Storefront — Budget & Backpacker
description: Fixed white-label storefront preset for budget-conscious travelers, backpackers, and independent trip planners.
colors:
  primary: "#263C5A"
  primary-hover: "#192C45"
  secondary: "#E56B45"
  tertiary: "#E9B94F"
  accent: "#4F927E"
  background: "#F7F7F2"
  surface: "#FFFFFF"
  surface-muted: "#ECEEE8"
  text: "#252E36"
  text-muted: "#68717A"
  border: "#D9DED8"
  success: "#28734E"
  warning: "#A66B25"
  error: "#B54545"
  focus: "#1769AA"
typography:
  display:
    fontFamily: "Space Grotesk"
    fontSize: 62px
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: -0.045em
  h1:
    fontFamily: "Space Grotesk"
    fontSize: 50px
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: -0.035em
  h2:
    fontFamily: "Space Grotesk"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.15
  h3:
    fontFamily: "Inter"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.3
  body-lg:
    fontFamily: "Inter"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.55
  body-md:
    fontFamily: "Inter"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: "Inter"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "Space Grotesk"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0.04em
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
    padding: "13px 22px"
    height: 48px
  button-secondary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: "13px 22px"
    height: 48px
  search-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: 22px
  deal-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
  input:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: 12px
---

# Design System: Ortasys Budget & Backpacker

## Overview

**Prototype travel agent: Jalan Hemat Travel.** A budget-focused travel agency helping independent travelers plan practical, transparent, value-conscious trips.

This is a fictional example brand created to demonstrate how this fixed storefront preset could be applied by an Ortasys agent. The name and positioning are illustrative, not an existing customer or verified business.

A practical, energetic storefront for budget-conscious travelers, backpackers, and independent explorers. The design should make value easy to understand without implying that low price means low quality. It should feel resourceful, transparent, and accessible.

This is not a discount-coupon marketplace. The interface must remain trustworthy and clear about what is included, what is optional, and which price is actually available. Use a bold visual voice, but never allow urgency or promotional decoration to obscure booking facts.

**Brand personality:** independent, resourceful, youthful, direct, value-conscious.

**Audience:** backpackers, students, young travelers, solo travelers, and customers comparing practical accommodation options.

**Preset boundary:** fixed layout and visual preset. Agencies may replace brand identity, approved color overrides, imagery, copy, and enabled modules. Booking logic, required fields, price visibility, accessibility, and transaction flow remain fixed.

## Colors

The palette combines deep blue, energetic coral, warm yellow, and muted green. Coral is the primary CTA accent; yellow is a small highlight only and must not be used for low-contrast text.

- **Primary Deep Blue (#263C5A):** navigation, headings, secondary actions.
- **Primary Hover (#192C45):** hover and pressed state for blue controls.
- **Secondary Trail Coral (#E56B45):** primary CTA and limited promotional emphasis.
- **Tertiary Warm Yellow (#E9B94F):** small highlights, tags, and decorative accents.
- **Accent Explorer Green (#4F927E):** supporting status or category emphasis.
- **Background Soft Neutral (#F7F7F2):** page canvas.
- **Surface White (#FFFFFF):** cards, forms, and search panel.
- **Muted Surface (#ECEEE8):** alternate sections and skeleton backgrounds.
- **Text Charcoal (#252E36):** primary text.
- **Text Muted (#68717A):** supporting text and metadata.
- **Border Soft Gray (#D9DED8):** outlines and separators.
- **Success (#28734E), Warning (#A66B25), Error (#B54545):** semantic states.
- **Focus Blue (#1769AA):** keyboard focus.

Use coral for the primary CTA, deep blue for structure, and yellow only as a small accent. Maintain WCAG AA and never use yellow for essential text.

## Typography

Use Space Grotesk for headings and Inter for body, forms, navigation, and data. The typography should feel modern and energetic while staying highly readable.

- **Display / H1 / H2:** Space Grotesk bold. Use short, direct headlines.
- **H3:** Inter bold for cards and functional headings.
- **Body:** Inter regular, 16px default and 18px for introductory text.
- **Labels:** Space Grotesk bold, 12px.
- **Prices:** Inter with tabular numerals. Price must be clear and not visually disguised as a discount badge.

Avoid graffiti, distressed, handwritten, or overly playful fonts. The brand should feel youthful, not amateur.

## Layout

Use a 12-column grid and centered content width around 1200px. The design should be compact and practical, with clear discovery paths and honest price presentation.

- **Header:** compact navigation with clear agency identity. Avoid unnecessary utility controls.
- **Hero:** bold destination image or travel collage with a direct headline and immediate search entry point.
- **Search:** keep hotel/activities search highly visible. Do not add price sliders or backpacker-specific filters unless supported by the actual search engine.
- **Destination discovery:** use clear, image-led destination cards with concise context.
- **Value stays:** hotel cards should prioritize location, room facts, inclusions, customer-facing price, and booking action.
- **Travel collections:** use categories such as affordable city stays or independent travel routes only when the agency has real content.
- **Practical tips:** show useful travel information only when it is accurate and agency-approved.
- **Agency support:** provide a clear contact path for questions about booking, inclusions, and policies.
- **Footer:** agency information, policies, contact, and FAQ.

Desktop section spacing is 56–80px; mobile is 36–52px. Use clear modular cards and avoid an overcrowded coupon-board appearance.

## Elevation & Depth

Use modest shadows and clear borders. Cards may lift slightly on hover. Search panel and menus can use soft elevation. Avoid neumorphism, neon glow, heavy gradients, and excessive sticker-like effects.

## Shapes

Use sturdy, moderately rounded geometry: 8px inputs, 12px cards, 18px panels, and 8px buttons. Use pill shapes only for compact category chips or labels. Avoid making every element rounded or bubbly.

## Components

- **Branded calendar:** single-month Indonesian picker with 8px menu corners, the same option surfaces/type/selected colors as this preset, and a fixed-size calendar icon separate from the editable date text. Arrow keys move by day/week, Home/End by week and Page Up/Down by month; Enter selects, Escape dismisses, and min/max dates disable unavailable days. The top-layer picker flips/clamps to the viewport and preserves native date values plus input/change events. Browsers without Popover API retain native controls; this is not the D12 dual-month calendar.

- **Navigation:** compact and direct, with a clear active state.
- **Primary button:** coral fill with dark `onCta` text, minimum 48px height; retain the ticket implementation's sturdy button corners.
- **Secondary button:** deep-blue fill or white outlined treatment.
- **Search panel:** white surface, clear persistent labels, and one dominant CTA.
- **Hotel card:** image, property name, location, room details, verified inclusions, customer-facing price, and booking action.
- **Price display:** clearly distinguish total price, per-night price, taxes, and fees according to the actual pricing data. Never invent a discount or crossed-out original price.
- **Value label:** use only for a factual attribute or a real promotion. Avoid unsupported “cheapest” and “best deal” claims.
- **Destination card:** consistent crop and readable destination name.
- **FAQ:** explain booking conditions and included services in plain language.
- **Dropdown interaction geometry:** `components.css` retains Inter and compact 4px control corners; menus use an 8px border radius, 2px primary frame, 4px offset hair-token shadow and dashed option separators. Triggers are 48px, wrapping options at least 44px, chevrons fixed at 16px; the selected option uses primary/onPrimary. Destination suggestions, filters, sorting, dynamic ages and payment use the local `components.js` without replacing native form values or booking events.
- **Opened ticket panels:** detail, Trip Bag and checkout retain the ticket identity with dashed header/trip dividers. Dialogs stay 12px inside the viewport, with nonshrinking 44px close controls, wrapping headings and an independently scrolling body. Header/body padding is 22/24px desktop and 18px mobile. Detail price/action rows wrap and do not inherit inventory ticket cutouts or grid placement.
- **Narrow forms:** dates and child-age controls stack at ≤360px; totals and action rows wrap, payment controls remain full width, and mobile navigation is height-bounded and scrollable. Toasts use compact, noninteractive ticket geometry instead of obscuring a large portion of the search CTA.

## Unique Architectural & Component DNA (Preset 10)

To make this budget & backpacker preset feel like an honest, high-utility hostel & open-trip transit board rather than a luxury hotel site, its sections and search engine use a perforated ticket-stub and departure-board architecture:

- **Hero Architecture (Transit Departure Board Split):** Foto perjalanan berlapis indigo dengan judul Space Grotesk di kiri dan departure board di kanan. Baris YOG / BRM / LOM / TOB menampilkan harga contoh dan mengisi rute pencarian saat dipilih; papan ditandai katalog lokal, bukan ticker live.
- **Search Engine UI (Perforated Boarding-Pass / Ticket-Stub Console):** Tiket berbingkai primary 2px dengan grid 2:1, body putih dan stub surface-muted, garis perforasi vertikal serta lubang potong di kedua ujung. Mode, rute, tanggal dan counter berada pada body. Stub menampilkan **Estimasi patungan per orang**, pembagi dewasa + anak, total contoh, konteks simulasi, dan tombol coral dengan teks gelap `onCta`; tidak ada top bar biru generik.
- **Inventory Section Layout (Perforated Hostel & Open-Trip Tickets):** Tiket horizontal foto / spesifikasi / price stub dalam dua kolom desktop, dengan label kategori serta fasilitas contoh. Setelah pencarian, komposisi D02 menjadi sidebar 230px dan daftar tiket satu kolom. Price stub tetap terpisah oleh perforasi; pada seluler foto berada di kiri dan rincian + harga di kanan.
- **Rules Section (3-Column Utilitarian Spec Strip):** Tiga panel putih dengan divider putus-putus menjelaskan harga contoh, pemeriksaan fasilitas dan checkout simulasi. Tidak ada klaim fasilitas atau biaya admin universal.

### Implementasi pencarian & halaman pendukung

- Tiket desktop memiliki body 2/3 dan stub 1/3; pada ≤900px stub menjadi bagian sobekan horizontal dengan lubang di kiri/kanan. Pada ≤600px rute membentang penuh, tanggal dua kolom, counter berlabel bertumpuk dan stub selebar tiket.
- Header memakai nama pendek Jalan Hemat, identitas sekunder ringkas, tombol Trip Bag dan menu 44px; navigasi desktop disembunyikan pada ≤900px agar merek tidak meluap pada 390px maupun 768px.
- Rute wajib; menginap 1–30 malam; kamar/unit 1–9; dewasa per kamar 1–20; anak per kamar 0–20. Mode open trip memakai tanggal berangkat dan unit rombongan. Setiap anak di setiap kamar/rombongan membutuhkan usia eksplisit 0–17 tahun, tanpa usia default.
- Patungan membagi total contoh dengan seluruh dewasa + anak di semua unit, dan tidak mengklaim tarif per orang resmi. Menginap: tarif per unit × malam × unit. Open trip: tarif per orang × peserta. Inklusi dan kebijakan diberi konteks Contoh konten agen.
- Validasi, loading perhitungan lokal, hasil kosong tanpa penggantian diam-diam, filter kategori/anggaran, urutan harga, detail, Trip Bag dan checkout tetap bekerja mandiri. Checkout tidak menagih atau memesan; unduhan berupa ringkasan JSON berlabel simulasi, bukan voucher atau bukti bayar.
- `index.html` hanya etalase pelanggan. Isi dokumentasi asli dipisahkan ke `guidelines.html`, `search-board.html`, dan `figcraft.html`; semuanya memakai tautan relatif biasa tanpa root router. Tidak ada dokumentasi tersembunyi atau tombol teknis pada header/hero.
- Warna UI memakai token AA terdaftar di `brand-dna.json`: `muted`, `secondaryText`, `fieldBorder`, `cta`/`onCta`, `mutedOnDark`, dan `focus`; palet fondasi tetap. Dials: variance 6, motion 2, density 7. Focus keyboard terlihat, dialog native menjaga fokus, serta reduced-motion menghapus animasi.

## Homepage Composition

Recommended fixed homepage sequence:

1. Header and navigation.
2. Bold hero with visible search.
3. Popular budget-conscious destinations, if supported by real inventory.
4. Featured stays and accommodation options.
5. Destination collections or independent travel inspiration.
6. Activities and tours, if enabled.
7. Practical booking guidance and FAQ.
8. Contact CTA and footer.

Search and transparent pricing must appear early. Avoid leading with a large discount banner that pushes the actual inventory below the fold.

## Imagery & Content Direction

Use authentic, energetic travel photography: hostels, guesthouses, city streets, public spaces, landscapes, and independent travel moments. Avoid images that imply poor quality or unsafe accommodation. Do not stereotype backpackers as careless or exclusively young.

Use 16:9 hero imagery and 4:3 property cards. Keep image quality consistent and provide fallbacks.

Never fabricate prices, discounts, taxes, included meals, cancellation terms, ratings, or review counts. Do not claim “cheapest,” “lowest price,” or “best deal” without evidence. Clearly label illustrative prototype data.

## Interaction & Responsive Behavior

- Desktop: compact search panel and clear result cards.
- Tablet: use two-column destination and property grids.
- Mobile: stack search fields, keep price and CTA readable, and avoid dense metadata.
- Use minimum 44px touch targets and visible focus.
- Do not use countdown timers, fake scarcity, or manipulative urgency.
- Respect reduced motion.
- Preserve shared Ortasys booking and payment behavior.

## Do’s and Don’ts

- Do make price and inclusions transparent.
- Do keep the interface energetic but trustworthy.
- Do prioritize useful destination and accommodation information.
- Do use coral as a focused action accent.
- Don't use fake discount badges or artificial scarcity.
- Don't imply the lowest market price without evidence.
- Don't hide taxes, fees, or important booking conditions.
- Don't make the design look cheap or visually chaotic.
- Don't expose supplier net rates, agent margins, or internal B2B data.

## Ortasys Shared Invariants

Preserve common search fields, date and occupancy logic, customer-facing price rules, payment flow, booking confirmation, and accessibility. All prices and promotions must be grounded in actual data. Supplier net rates, internal wallet balances, settlement data, and agent-only margins remain private.
