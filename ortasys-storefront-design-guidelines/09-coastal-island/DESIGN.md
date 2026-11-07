---
version: alpha
brandName: "Nusa Tide Escapes"
brandType: prototype-travel-agent
name: Ortasys Storefront — Coastal & Island Escape
description: Fixed white-label storefront preset for beach holidays, island stays, coastal escapes, and seaside travel specialists.
colors:
  primary: "#176B73"
  primary-hover: "#10545B"
  secondary: "#E29A70"
  tertiary: "#B9D8D3"
  accent: "#E8C98D"
  background: "#F3F8F6"
  surface: "#FFFFFF"
  surface-muted: "#E5F0ED"
  text: "#20383A"
  text-muted: "#647A79"
  border: "#D4E3DF"
  success: "#2F785C"
  warning: "#A96C2D"
  error: "#B34B45"
  focus: "#1A6593"
typography:
  display:
    fontFamily: "Fraunces"
    fontSize: 64px
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: -0.035em
  h1:
    fontFamily: "Fraunces"
    fontSize: 52px
    fontWeight: 600
    lineHeight: 1.08
  h2:
    fontFamily: "Fraunces"
    fontSize: 38px
    fontWeight: 600
    lineHeight: 1.14
  h3:
    fontFamily: "Manrope"
    fontSize: 21px
    fontWeight: 700
    lineHeight: 1.28
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
  input:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: 12px
---

# Design System: Ortasys Coastal & Island Escape

## Overview

**Prototype travel agent: Nusa Tide Escapes.** A coastal and island travel specialist featuring beach stays, island-hopping, and seaside escapes.

This is a fictional example brand created to demonstrate how this fixed storefront preset could be applied by an Ortasys agent. The name and positioning are illustrative, not an existing customer or verified business.

A fresh, airy storefront for agencies specializing in beaches, islands, coastal resorts, and seaside escapes. The visual identity should feel sunlit, open, and relaxed while retaining the clarity of a reliable booking platform.

This preset is distinct from Local & Destination: it is not tied to local cultural expertise or one specific region. It focuses on the emotional and visual language of coastal holidays, island stays, and ocean-facing accommodation.

**Brand personality:** breezy, optimistic, refreshing, relaxed, polished.

**Audience:** beach holiday travelers, island hoppers, couples, families, and customers seeking coastal accommodation.

**Preset boundary:** fixed visual and layout preset. Agencies may replace brand identity, approved colors, imagery, copy, and enabled modules. Booking behavior, required fields, price visibility, accessibility, and transaction hierarchy remain fixed.

## Colors

The palette uses ocean teal, sea-glass, warm coral, and pale sand. It should feel bright without relying on a generic blue gradient.

- **Primary Ocean Teal (#176B73):** primary CTA, active navigation, selected controls.
- **Primary Hover (#10545B):** hover and pressed state.
- **Secondary Coral Sand (#E29A70):** limited accents and editorial highlights.
- **Tertiary Sea Glass (#B9D8D3):** supporting surfaces and quiet selection states.
- **Accent Sun Sand (#E8C98D):** small decorative details and warm highlights.
- **Background Mist (#F3F8F6):** page canvas.
- **Surface White (#FFFFFF):** cards, search, and forms.
- **Muted Surface (#E5F0ED):** alternate section backgrounds.
- **Text Deep Teal (#20383A):** primary text.
- **Text Muted (#647A79):** supporting text and metadata.
- **Border Sea Mist (#D4E3DF):** outlines and separators.
- **Success (#2F785C), Warning (#A96C2D), Error (#B34B45):** semantic states.
- **Focus Blue (#1A6593):** visible keyboard focus.

Use teal for primary actions. Coral and sand are supporting accents. Avoid placing white text on pale sea-glass or sand colors. Maintain WCAG AA.

## Typography

Use Fraunces for display and section headings, paired with Manrope for functional UI and body text. The serif adds a relaxed editorial character without making the interface feel overly formal.

- **Display / H1 / H2:** Fraunces semibold. Use short, expressive headlines.
- **H3:** Manrope bold for card and functional headings.
- **Body:** Manrope regular, 16px default and 18px for introductory text.
- **Labels:** Manrope bold, 12px, moderate tracking.
- **Dates and prices:** Manrope with tabular numerals.

Avoid handwritten beach fonts, novelty scripts, and excessive italics. Keep forms and booking details in Manrope.

## Layout

Use a 12-column desktop grid and a centered content width around 1200px. The page should feel open and image-led, with a clear booking path.

- **Header:** clean navigation with clear brand identity and concise menu labels.
- **Hero:** wide ocean, coastline, or island imagery. Use a strong but relaxed headline and visible search panel.
- **Search:** place within or directly below the hero. Keep form labels and values readable against the surface.
- **Island collections:** present destination cards with clear place names and relevant factual descriptions.
- **Beachfront stays:** use property cards that surface verified beach access, location, room facts, and customer-facing price.
- **Coastal experiences:** show snorkeling, sailing, diving, or boat activities only when those products are available.
- **Travel inspiration:** use a restrained editorial module for island guides or coastal itineraries when agency content exists.
- **Contact section:** provide a clear assistance route for customers who need help choosing a stay.
- **Footer:** agency identity, contact, policies, and FAQ.

Use 72–96px desktop section spacing and 44–60px on mobile. Use image-led variety without making every section a full-bleed banner.

## Elevation & Depth

Use clean surfaces and soft, natural shadows. Search panels and dropdowns may use gentle elevation. Cards rely on white surfaces and subtle borders. Avoid glassmorphism, strong blue gradients, and glossy effects.

## Shapes

Use relaxed rounded geometry: 10px inputs, 16px cards, 24px panels, and pill buttons. Maintain consistent corner radii. Avoid wave-shaped containers and excessive decorative curves.

## Components

- **Branded calendar:** single-month Indonesian picker with 20px menu corners, the same option surfaces/type/selected colors as this preset, and a fixed-size calendar icon separate from the editable date text. Arrow keys move by day/week, Home/End by week and Page Up/Down by month; Enter selects, Escape dismisses, and min/max dates disable unavailable days. The top-layer picker flips/clamps to the viewport and preserves native date values plus input/change events. Browsers without Popover API retain native controls; this is not the D12 dual-month calendar.

- **Navigation:** light, clear, and minimal.
- **Primary button:** ocean-teal pill with white label, minimum 48px height.
- **Secondary button:** white surface with teal text and border.
- **Search panel:** white surface, 24px radius, persistent labels, and clear CTA.
- **Destination card:** landscape photography, destination name, and concise factual context.
- **Hotel card:** property image, name, location, verified beach or ocean attributes, customer-facing price, and booking action.
- **Activity card:** duration, location, and inclusions only when supplied.
- **Weather content:** do not add live weather modules unless a real data source and product behavior exist.
- **Trust content:** use approved agency claims only.
- **Dropdown interaction geometry:** `components.css` keeps Manrope, 10px control corners and 48px triggers; the sea-glass menu has relaxed 20px corners, 6px padding, wrapping 44px options, ocean-teal selection, and a nonshrinking 16px chevron. Destination suggestions, sorting, filters, child ages and payment share this treatment through the local `components.js`; native values and booking events remain authoritative. Keyboard focus uses the locked focus token.
- **Opened panels:** detail, Island Bag and checkout are flex-column dialogs inset 12px from the viewport, with a fixed header, 44px close control and independently scrolling body. Header titles shrink/wrap instead of displacing the close control. Padding reduces from 22/24px to 18px on mobile; gallery height scales from 160–260px. Price/action rows and totals wrap, and modal price bars never inherit catalogue layout or cutout decoration.
- **Narrow controls:** at ≤360px dates and child-age fields stack; navigation scrolls within the available height. Toasts use a compact, noninteractive field-radius surface rather than an oversized pill over the search action.

## Unique Architectural & Component DNA (Preset 09)

To make this coastal & island escape preset feel like an airy archipelago travel magazine and island-hopping charter guide rather than a standard city hotel list, its sections and search console use an archipelago-specific architecture:

- **Hero Architecture (Archipelago Magazine Split + Interactive Island Hopping Strip):** Hero editorial berlatar mist, judul Fraunces di kiri dan foto teluk setinggi 385px di kanan, bukan banner teal penuh. Empat pilihan pulau (`Nusa Penida`, `Gili Meno`, `Kuta Mandalika`, `Nusa Dua`) berada di bawahnya. Pilihan mengisi tujuan, menandai pulau aktif, memperbarui contoh akses darat/perahu, dan memfilter katalog lokal.
- **Search Engine UI (Split-Deck Harbor & Beachfront Console):** Panel putih radius 28px dengan pembagian 35%/65%. Dek kiri seafoam memuat mode Beachfront Stays / Katamaran & reef tours, tujuan, dan keterangan akses ilustratif. Dek kanan memuat tanggal, tiga counter, usia anak, ringkasan dan tombol coral dengan teks gelap `onCta`. Tidak ada data pasang-surut atau transportasi live.
- **Inventory Section Layout (Staggered Coastal Lookbook):** Sebelum pencarian, tiga kolom dengan kartu tengah turun 30px, foto pantai 255px, label atribut contoh, dan price bar seafoam; kartu keempat membentang dua kolom. Setelah pencarian, komposisi D02 menjadi sidebar filter 230px dan baris foto / informasi / harga. Tablet memakai dua kolom; seluler satu kolom tanpa stagger.
- **Manifesto Section (Maritime & Reef Editorial Split):** Dua panel foto keselamatan dan terumbu, diikuti arahan untuk mengonfirmasi operator, cuaca, fasilitas dan biaya. Tidak menyatakan kapal terverifikasi, kontribusi konservasi, atau transaksi nyata.

### Implementasi pencarian & halaman pendukung

- Isian minimal 48px; tombol counter dan navigasi minimal 44px. Tujuan wajib; menginap 1–30 malam; bungalow/unit 1–9; dewasa per kamar 1–20; anak per kamar 0–20. Setiap anak di setiap kamar mempunyai pemilih usia wajib 0–17 tahun dengan pilihan awal kosong dan nilai yang dipertahankan saat jumlah berubah.
- Mode tur menggunakan satu tanggal berangkat dan unit rombongan; jumlah dewasa/anak serta usia tetap eksplisit. Harga contoh tur mengalikan tarif per orang dengan seluruh peserta; contoh menginap memakai tarif per unit × malam × unit. Tidak ada penambahan biaya tersembunyi.
- Validasi, perhitungan loading lokal, hasil kosong tanpa fallback tidak relevan, filter kategori/anggaran, dan urutan harga tersedia. Detail, Island Bag, checkout, dan unduhan ringkasan JSON adalah simulasi tanpa API, reservasi atau pembayaran.
- Pada lebar ≤900px dua dek bertumpuk; pada ≤600px counter berubah menjadi baris berlabel, strip pulau tetap dua kolom, hero dan cerita menjadi satu kolom. Header memakai nama pendek Nusa Tide dan menu seluler; tidak ada navigasi teknis.
- `index.html` hanya etalase pelanggan. Isi dokumentasi asli dipindah ke sibling `guidelines.html`, `search-board.html`, dan `figcraft.html`, dengan tautan relatif biasa; tidak ada hidden documentation DOM atau view router. Footer etalase hanya menautkan panduan merek secara tenang.
- Implementasi memakai token aksesibel terdaftar dalam `brand-dna.json`: `muted`, `secondaryText`, `fieldBorder`, `cta`/`onCta`, `focus` serta permukaan seafoam; tidak mengganti fondasi merek. Dials: variance 7, motion 2, density 4. Focus keyboard terlihat, dialog native menjaga fokus, dan reduced-motion menonaktifkan animasi.

## Homepage Composition

Recommended fixed homepage sequence:

1. Header and navigation.
2. Coastal hero with search panel.
3. Island and beach destination collections.
4. Featured beachfront or coastal stays.
5. Sea and island activities, if enabled.
6. Curated coastal escapes or itinerary inspiration.
7. Agency service information.
8. Contact CTA and footer.

Search should remain available in the first viewport. The imagery creates the mood; the booking interface converts intent into action.

## Imagery & Content Direction

Use high-quality coastal photography: clear coastlines, island landscapes, beaches, boats, resort architecture, and authentic seaside activities. Favor natural light, realistic water color, and balanced saturation. Avoid overprocessed turquoise water, fake drone perspectives, and generic tropical stock imagery.

Use 16:9 or wider hero crops and 4:3 destination/property cards. Ensure focal points survive mobile crops. Provide a neutral fallback.

Do not claim private beach access, beachfront location, direct ocean views, marine conservation impact, water-sport safety credentials, or guaranteed weather unless verified. Sample offers and properties must be illustrative.

## Interaction & Responsive Behavior

- Desktop: use a wide search panel with horizontal controls when space allows.
- Tablet: wrap controls and reduce card columns.
- Mobile: stack fields, use full-width CTA, and keep destination cards easy to browse.
- Avoid parallax and auto-playing video that may impair performance.
- Respect reduced motion and maintain keyboard focus.
- Minimum touch target 44px.
- Preserve shared Ortasys booking and payment behavior.

## Do’s and Don’ts

- Do use authentic coastal photography.
- Do keep search and property facts easy to scan.
- Do use teal as the primary interaction color.
- Do distinguish beachfront, near-beach, and ocean-view claims accurately.
- Don't rely on generic beach gradients or palm-tree silhouettes.
- Don't invent private access, ocean views, or activity availability.
- Don't make every section a full-bleed photograph.
- Don't hide search below lifestyle content.
- Don't expose supplier net rates or agent-only data.

## Ortasys Shared Invariants

Preserve common search fields, date and occupancy logic, customer-facing price rules, payment flow, confirmation behavior, and accessibility. Coastal imagery and copy do not imply specific inventory or activities. Supplier net rates, internal wallet balances, settlement data, and agent margins remain private.
