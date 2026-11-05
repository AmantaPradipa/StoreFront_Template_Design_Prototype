# DESIGN.md — Slicing Blueprint & UI Architecture: Zelatan (Overseas Holiday Solutions)

> **Dokumen Spesifikasi Slicing UI & Design System**
>
> **Brand Name:** **Zelatan** (*Overseas Holiday Solutions*)
>
> **Target Scope:** Antarmuka Layar Penuh Desktop (*Target Viewport: 1440px Desktop Canvas*)
>
> **Teknologi Implementasi:** HTML5 + Tailwind CSS v4 CDN (`@tailwindcss/browser@4`) + Google Fonts + Inline SVG
>
> **Status:** Audited & Ready for Precision Slicing

## 1. Executive Summary & Brand Identity

* **Nama Brand:** **Zelatan** (dengan sub-brand / headline positioning: *"Overseas Holiday Solutions"*).

* **Karakter & Desain DNA:**

  * **Alpine & Eco-Adventure Luxury:** Mengusung estetika alam terbuka kelas atas (*nature luxury exploration*) yang memadukan foto lanskap pegunungan berkabut, arung jeram hutan tropis, air terjun tersembunyi, dan pondok kayu pedesaan (*alpine chalets*).

  * **Layout Style:** Clean, high-whitespace editorial, palet alam bernuansa **Deep Olive Green** (`#273303`) dipadukan dengan **Off-White Canvas** (`#F9FAF6`), kartu bersudut lengkung ramah (`rounded-2xl` & `rounded-3xl`), serta tombol berbentuk kapsul lonjong (*pill geometry* `rounded-full`).

  * **Target Audience:** Wisatawan petualang internasional (*overseas travelers*), keluarga, dan pelancong grup yang menginginkan liburan alam eksotis terkurasi dengan proses reservasi tiket yang mudah dan transparan (*"Ticket ordering process"*).

## 2. Kalibrasi Skala & Koordinat Layout Desktop

| Parameter | Dimensi Screenshot Raster | Target Viewport Desktop | Rasio Skala Normalisasi | 
| ----- | ----- | ----- | ----- | 
| **Lebar Screenshot Asli** | 237 px (termasuk outer canvas) | — | — | 
| **Lebar Crop Bersih Website** | 207 px (X=15 s/d X=221) | **1440 px** (Max-width container: 1240 px / `max-w-7xl`) | \~6.95x scaling | 
| **Tinggi Konten (Height)** | 992 px (Y=17 s/d Y=1009) | Konten mengalir alami (*content-driven scroll*, \~4800–5200 px) | Natural Flow | 
| **Grid Sistem Desktop** | Standar 12-Column Grid | `grid-cols-12` dengan *gap* 20px–32px | Standard 8pt Grid | 
| **Gutter / Container Padding** | \~12 px pada raster | `px-6 sm:px-12 lg:px-20` (Margin simetris di sisi kiri dan kanan) | Symmetrical Gutters | 
| **Canvas Framing Rule** | Border abu-abu luar `#EFEFF1` diabaikan sesuai panduan *precision slicing*. |  |  | 

## 3. Design Tokens & Visual Architecture

### 3.1 Palet Warna Semantik (Color Tokens)

| Token Name | Hex Code | RGB | Tailwind v4 Utility | Penerapan & Peran | 
| ----- | ----- | ----- | ----- | ----- | 
| **Brand Deep Olive Green** | `#273303` | `rgb(39, 51, 3)` | `bg-[#273303] text-[#273303]` | Latar belakang footer, tombol CTA utama, badge seksi, ikon langkah aktif | 
| **Deep Olive Green Hover** | `#344405` | `rgb(52, 68, 5)` | `hover:bg-[#344405]` | State hover tombol primer | 
| **Surface Off-White Canvas** | `#F9FAF6` | `rgb(249, 250, 246)` | `bg-[#F9FAF6]` | Latar belakang seluruh halaman (*canvas body*) | 
| **Surface Pure White** | `#FFFFFF` | `rgb(255, 255, 255)` | `bg-white text-white` | Kartu tur, kartu proses tiket, tombol pill putih, kartu bento | 
| **Text Primary (Obsidian)** | `#18181B` | `rgb(24, 24, 27)` | `text-zinc-900` | Judul seksi utama, nama tur, judul langkah, harga paket | 
| **Text Secondary (Muted)** | `#64748B` | `rgb(100, 116, 139)` | `text-slate-500` | Paragraf deskriptif, subtitle, label lokasi, metadata rating | 
| **Text Inverted** | `#FFFFFF` | `rgb(255, 255, 255)` | `text-white` | Teks di atas hero image, teks footer, teks tombol primer | 
| **Rating Star Gold** | `#F59E0B` | `rgb(245, 158, 11)` | `text-amber-500` | Bintang rating review tur (`⭐ 4.8`) | 
| **Border Subtle** | `#E2E8F0` | `rgb(226, 232, 240)` | `border-slate-200` | Garis pembatas kartu, batas input form, garis horizontal | 

### 3.2 Tipografi & Font Pairing

Sistem tipografi menggunakan perpaduan sans-serif geometris modern dengan legibilitas superior:

1. **Heading & Brand Font:** `Plus Jakarta Sans` (Weight 700 / 800)

   Menghadirkan kesan modern, tegas, dengan lengkungan circular yang ramah pada huruf 'o', 'e', 'a'.

2. **Body & Micro-Copy:** `Inter` (Weight 400 / 500 / 600)

   Optimal untuk deskripsi badan, angka harga tabular, dan label tombol.

3. **Hierarchy Scale:**

   * **Hero Title (H1):** `text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[1.05]`

   * **Section Heading (H2):** `text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight leading-snug`

   * **Card Title / Tour Name (H3):** `text-base sm:text-lg font-bold text-zinc-900`

   * **Tour Price:** `text-sm sm:text-base font-extrabold text-zinc-900 tabular-nums`

   * **Body & Descriptions:** `text-xs sm:text-sm text-slate-500 leading-relaxed`

   * **Badges & Overlaid Labels:** `text-[11px] sm:text-xs font-bold uppercase tracking-wider`

**Google Fonts Integration:**

```
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet">

```

### 3.3 Geometri Sudut (Corner Radii) & Elevasi (Shadows)

* **Pill Elements (Buttons, Switchers, Badges):** `rounded-full`

* **Landscape Bento Cards (Section 3):** `rounded-3xl` (24px) dengan `overflow-hidden`

* **Vertical Experience & Tour Cards (Section 2 & 4):** `rounded-2xl` (16px) hingga `rounded-3xl` (24px)

* **Ticket Process Container:** `rounded-2xl` (16px)

* **Elevation / Shadows:**

  * Floating Badges & Search Bars: `shadow-xl shadow-black/8 border border-white/60`

  * Tour Cards: `shadow-xs hover:shadow-lg transition-all duration-300`

## 4. Section-by-Section Anatomy & Slicing Blueprint

```
┌────────────────────────────────────────────────────────────────────────┐
│ SECTION 1: HEADER & HERO (Misty Alpine Forest, Chalet, Wordmark)       │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 1.1: FLOATING ORTASYS SEARCH CONSOLE (Activities & Chalets)   │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 2: BEAUTIFUL PLACES (Header Row + Trio Cards: Jeep, Raft, Fall)│
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 3: TAILORED DESTINATIONS (2x2 Curated Bento Grid)              │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 4: POPULAR TOURS (4-Column Pricing & Rating Matrix + CTA)      │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 5: TICKET ORDERING PROCESS (Cliff Explorer + 4 Steps Stack)    │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 6: CTA BANNER & SEARCH CONSOLE (Lush Valley Panorama)          │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 7: DEEP FOREST OLIVE FOOTER (4-Column Layout, Flags, Socials)  │
└────────────────────────────────────────────────────────────────────────┘

```

### 4.1 Section 1: Header & Hero Section (`#hero-section`)

* **Visual Surface:** Foto udara panorama hutan pinus Alpen lebat berkabut (*Misty Alpine Conifer Forest*) dengan padang rumput hijau cerah dan pondok kayu pedesaan (*wooden chalet*) di tengah lembah pegunungan. Dilengkapi *subtle top & bottom vignette overlay* (`bg-gradient-to-b from-black/40 via-transparent to-black/60`).

* **Header Navigation (`h-20 flex items-center justify-between px-6 sm:px-12 lg:px-20`):**

  * **Sisi Kiri (Logo Brand):** Wordmark putih tebal `ZELATAN` (`font-extrabold text-xl tracking-wider text-white`).

  * **Sisi Tengah (Navigasi):** `Home` • `Destinations` • `About` • `Pricing` (`text-white/90 text-sm font-semibold flex gap-8 hover:text-white transition`).

  * **Sisi Kanan (Aksi Masuk):** Tombol pill putih `Register Now` (`bg-white hover:bg-slate-100 text-zinc-900 px-5 py-2 rounded-full text-xs font-bold shadow-md transition`).

* **Hero Left-Aligned Copywriting:**

  * **Headline:**

    ```
    <h1 class="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[1.05]">
      Overseas<br>
      Holiday<br>
      Solutions.
    </h1>
    
    ```

  * **CTA Button:**

    ```
    <div class="mt-6">
      <button class="bg-white hover:bg-slate-100 active:scale-95 text-zinc-900 font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-lg transition">
        Explore Now
      </button>
    </div>
    
    ```

* **Hero Bottom Floating Widgets:**

  * **Kiri Bawah:** Social proof pill badge berisi tumpukan foto avatar pengguna + rating:

    `⭐ 4.9 | 10k+ Travelers Satisfied` (`bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs px-4 py-2 rounded-full flex items-center gap-2`).

  * **Kanan Bawah:** Kapsul filter kategori wisata alam:

    `🌲 Nature` • `🏔️ Forest` • `🏕️ Safari` (`bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs px-4 py-2 rounded-full flex gap-3 font-semibold`).
* **Floating Ortasys Storefront Search Console (Brand Guidelines Compliant):**
  * Wadah: Kapsul melayang di perbatasan hero (`bg-white/98 backdrop-blur-xl rounded-3xl p-5 sm:p-6 shadow-2xl border border-white/60 text-zinc-900 max-w-6xl mx-auto -mt-12 sm:-mt-16 relative z-30`).
  * **Segmented Mode Switcher (Ortasys PRD §6.1):**
    * `🏕️ Activities & Expeditions` (Mode aktif default).
    * `🏡 Alpine Chalets & Lodges` (Mode akomodasi/pondok).
  * **4 Kolom Input Interaktif Kustom + Tombol Aksi:**
    1. **Destination:** Kolom input dengan **Quick-Pick Popover** berisi 6 eko-sanctuary terkurasi (*Cameron Highlands, Jungle Rapids, Emerald Canyon, French Alps, Komodo & Flores, Lake Lucerne*) lengkap dengan ketersediaan kuota slot live dan tombol pembersih (`✕`).
    2. **Dates & Duration (Check-In & Check-Out):** Custom Zelatan Date Range Calendar (tanpa datepicker bawaan OS) dengan navigasi bulan, penanda rentang tanggal beraksen Deep Olive Green (`#273303`), durasi malam otomatis (*e.g. 7 Nights*), dan preset cepat (*Weekend 3D2N, 1 Week 7N, 2 Weeks 14N*).
    3. **Travelers & Rooms Stepper:** Popover steper untuk Kamar (1-9), Dewasa (1-20), dan Anak (0-20) sesuai spesifikasi Ortasys PRD §6.1 dengan preset instan (*Solo, Couple, Family*).
    4. **Budget Tier Selector:** Menu popover kustom dengan opsi tier harga (*All Tiers, < $180, $180-$220, > $220*) dan indikator centang aktif (`✓`).
    5. **Action Button:** Tombol pill Deep Olive Green `Search Tours` (`bg-[#273303] hover:bg-[#344405] text-white px-7 py-3.5 rounded-full font-bold shadow-lg`) dengan animasi loading live rate check, filter langsung pada kartu Section 2, 3, dan 4, serta banner feedback hasil pencarian.
  * **Strip Jaminan Tarif Live Multi-Supplier (Ortasys PRD §6.1 & 9.1):**
    `"Every price is checked live when you ask for it"` didukung jaringan terhubung: *RateHawk, ETG, MyAllocator, Cloudbeds, GuestPro (Coming soon), DOKU & SNAP BI*.

### 4.2 Section 2: Beautiful Places Showcase (`#beautiful-places-section`)

* **Visual Surface:** Latar belakang off-white alami (`#F9FAF6`).

* **Header Seksi (Dua Kolom Horisontal):**

  * **Kiri:** Judul seksi:

    ```
    <h2 class="text-2xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-snug max-w-md">
      Come here and explore the<br>
      beautiful places here.
    </h2>
    
    ```

  * **Kanan:** Tombol aksi deep olive green:

    ```
    <button class="bg-[#273303] hover:bg-[#344405] text-white px-5 py-2.5 rounded-full font-bold text-xs flex items-center gap-2 shadow-xs transition">
      <span>Explore more</span>
      <span>→</span>
    </button>
    
    ```

* **Trio Kartu Wisata Vertikal (1x3 Grid Kolom):**

  * **Card 1: Off-Road Safari Jeep**

    * Rasio 3:4 portrait, foto mobil 4x4 kuning melintasi lereng perkebunan teh/perbukitan hijau.

    * Info Bawah: Judul `Off-Road Safari` • Lokasi `Tea Plantation` • Rating `⭐ 4.8`.

  * **Card 2: White Water Rafting**

    * Foto perahu karet arung jeram merah menerjang jeram sungai jernih diapit ngarai tebing hutan lebat.

    * Info Bawah: Judul `River Rafting` • Lokasi `Jungle Rapids` • Rating `⭐ 4.9`.

  * **Card 3: Majestic Canyon Waterfall**

    * Foto air terjun raksasa vertikal spektakuler yang mengalir dari dinding tebing berselimut kabut.

    * Info Bawah: Judul `Secret Waterfall` • Lokasi `Emerald Canyon` • Rating `⭐ 4.9`.

### 4.3 Section 3: Curated Bento Grid (`#tailored-destinations-section`)

* **Visual Surface:** Latar belakang off-white alami (`#F9FAF6`).

* **Header Seksi (Dua Kolom):**

  * **Kiri:**

    * Eyebrow: `SERVICES` (`text-xs font-bold uppercase tracking-wider text-[#273303]`).

    * Judul: `Our tailored destinations just for you` (`text-2xl sm:text-4xl font-extrabold text-zinc-900 mt-1`).

  * **Kanan:**

    * Deskripsi: *"We have curated different destinations for you to explore and find unforgettable moments."* (`text-slate-500 text-xs sm:text-sm max-w-sm`).

* **2x2 Grid Kartu Lanskap (4 Kartu `rounded-3xl` dengan Overlay):**

  * **Card 1 (Top-Left): Tropical Jungle Waterfall**

    * Foto air terjun tersembunyi dengan kolam batu ngarai gelap.

    * Kiri Bawah: Label teks `Waterfall` (`font-bold text-white text-sm sm:text-base`).

    * Kanan Bawah: Tombol pill putih `Explore` (`bg-white/90 hover:bg-white text-zinc-900 font-bold text-xs px-4 py-1.5 rounded-full shadow-xs`).

  * **Card 2 (Top-Right): Secret Beach Cove**

    * Foto teluk gua laut berair toska bening dan pantai pasir putih.

    * Kiri Bawah: Label `Beach`.

    * Kanan Bawah: Tombol pill putih `Explore`.

  * **Card 3 (Bottom-Left): Ancient Moss Temple**

    * Foto gapura candi batu kuno di tengah hutan lumut tropis.

    * Kiri Bawah: Label `Temple` / `Forest`.

    * Kanan Bawah: Tombol pill putih `Explore`.

  * **Card 4 (Bottom-Right): Misty Mountain Fjord**

    * Foto lembah danau pegunungan hijau berselimut kabut pagi.

    * Kiri Bawah: Label `Mountain`.

    * Kanan Bawah: Tombol pill putih `Explore`.

### 4.4 Section 4: Popular Tours Catalog (`#popular-tours-section`)

* **Visual Surface:** Latar belakang off-white alami (`#F9FAF6`).

* **Header Terpusat:**

  * Eyebrow: `DESTINATION` (`text-xs font-bold tracking-widest text-[#273303] uppercase text-center block`).

  * Judul: `Discover our most popular tours!` (`text-3xl sm:text-5xl font-extrabold text-zinc-900 text-center mt-2`).

  * Subtitle: *"Recommended tours, carefully curated for an unforgettable holiday experience."* (`text-slate-500 text-xs sm:text-sm text-center max-w-md mx-auto mt-2`).

* **4-Card Tour Grid (1 Baris × 4 Kolom):**
  Setiap kartu memiliki thumbnail foto 4:3 `rounded-2xl`, baris judul & rating bintang, serta harga di bagian bawah:

  * **Card 1: Green Earth**

    * Foto perbukitan hijau dan jalan aspal berliku.

    * Rating: `⭐ 4.8 (120 reviews)`.

    * Harga: `$180 / pax` (`font-extrabold text-sm text-zinc-900`).

  * **Card 2: Mountain View**

    * Foto puncak pegunungan alpine berselimut awan.

    * Rating: `⭐ 4.9 (240 reviews)`.

    * Harga: `$220 / pax`.

  * **Card 3: Island Beach**

    * Foto laguna toska kepulauan karst tropis.

    * Rating: `⭐ 4.9 (185 reviews)`.

    * Harga: `$250 / pax`.

  * **Card 4: Giant Waterfall**

    * Foto air terjun raksasa megah.

    * Rating: `⭐ 4.7 (95 reviews)`.

    * Harga: `$150 / pax`.

* **Bottom Action CTA:**

  * Tombol pill terpusat: `See all tours →` (`bg-[#273303] hover:bg-[#344405] text-white px-7 py-3 rounded-full font-bold text-xs shadow-md transition mx-auto block mt-8`).

### 4.5 Section 5: Ticket Ordering Process (`#ticket-process-section`)

* **Visual Surface:** Latar belakang off-white alami (`#F9FAF6`).

* **Struktur Grid 2 Kolom:**

  * **Kolom Kiri (Foto Eksplorasi):**

    * Foto portrait besar `rounded-3xl shadow-md overflow-hidden relative h-[480px]`:

    * Subjek: Pendaki gunung berdiri di tepi tebing batu dramatis menghadap lautan awan dan lembah hijau berkabut tebal.

  * **Kolom Kanan (Stack 4 Langkah Pemesanan):**

    * Eyebrow: `HOW IT WORKS` (`text-xs font-bold uppercase tracking-wider text-[#273303]`).

    * Judul: `Ticket ordering process` (`text-2xl sm:text-4xl font-extrabold text-zinc-900 mt-1 mb-6`).

    * **Wadah 4 Kartu Langkah Berurutan:**

      1. **Step 1: Select your destination (Highlighted)**

         * Ikon: Kompas / Pin Lokasi dalam lingkaran abu-abu/hijau lembut.

         * Judul: **Select your destination** (`font-bold text-sm text-zinc-900`).

         * Deskripsi: *"Browse our curated packages and select the destination that matches your travel dreams."*

      2. **Step 2: Book tickets**

         * Ikon: Tiket / Kalender.

         * Judul: **Book tickets**.

         * Deskripsi: *"Choose your departure dates, number of travelers, and accommodation preferences."*

      3. **Step 3: Make payment**

         * Ikon: Kartu Kredit / Dompet Digital.

         * Judul: **Make payment**.

         * Deskripsi: *"Pay safely through our integrated payment gateways with multiple currency options."*

      4. **Step 4: Pack your bags & enjoy**

         * Ikon: Koper / Checkmark Sukses.

         * Judul: **Pack your bags & enjoy**.

         * Deskripsi: *"Receive your electronic ticket and itinerary, and get ready for an extraordinary journey."*

### 4.6 Section 6: Scenic CTA Banner & Booking Console (`#cta-banner-section`)

* **Header Terpusat:**

  * Eyebrow: `GET STARTED` (`text-xs font-bold uppercase tracking-widest text-[#273303] block text-center`).

  * Judul: `Explore your favorite places and book your tickets now` (`text-3xl sm:text-5xl font-extrabold text-zinc-900 text-center max-w-2xl mx-auto mt-2`).

  * Subtitle: *"Start planning your ideal vacation today with exclusive perks."*

* **Floating Capsule Search Bar:**

  * Kapsul putih melayang di tengah:

    ```
    <div class="max-w-md mx-auto mt-6 bg-white rounded-full p-2 pl-5 shadow-xl border border-slate-200 flex items-center justify-between">
      <input type="text" placeholder="Search destination..." class="w-full text-xs font-semibold text-zinc-900 bg-transparent focus:outline-none" />
      <button class="w-9 h-9 rounded-full bg-[#273303] text-white flex items-center justify-center font-bold shrink-0 hover:bg-[#344405] transition">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
      </button>
    </div>
    
    ```

* **Scenic Mountain Horizon:**

  * Lanskap lembah hijau pegunungan alpine yang megah dengan puncak salju di kejauhan, bertransisi mulus ke seksi footer gelap di bawahnya.

### 4.7 Section 7: Deep Forest Olive Footer (`#footer-section`)

* **Visual Surface:** Latar belakang solid Deep Olive Green (`#273303` / `rgb(39, 51, 3)`), teks putih bersih.

* **Struktur 4 Kolom Navigasi:**

  * **Kolom 1 (Brand Profile):**

    * Wordmark: `ZELATAN` (`font-extrabold text-xl tracking-wider text-white`).

    * Deskripsi: *"Your premier destination for breathtaking overseas adventures and curated nature holidays across the globe."* (`text-white/70 text-xs leading-relaxed mt-2 max-w-xs`).

    * Kontak Resmi:

      * Email: `hello@zelatan.travel`

      * Telepon: `+62 812 3456 7890`

  * **Kolom 2 (Menu):**

    * Judul: `Menu` (`font-bold text-xs uppercase tracking-wider text-white mb-3 block`).

    * Tautan: `Home`, `Destinations`, `About Us`, `Tours`, `Pricing`.

  * **Kolom 3 (Support):**

    * Judul: `Support` (`font-bold text-xs uppercase tracking-wider text-white mb-3 block`).

    * Tautan: `Help Center`, `FAQ`, `Terms of Service`, `Privacy Policy`.

  * **Kolom 4 (Featured Locations & Socials):**

    * Judul: `Locations` (`font-bold text-xs uppercase tracking-wider text-white mb-3 block`).

    * Badges Bendera:

      * `🇫🇷 French Alps`

      * `🇮🇩 Indonesia Safari`

    * Ikon Sosial Media (Lingkaran putih kecil): Instagram, Facebook, X (Twitter), YouTube.

* **Bottom Legal Bar (`pt-8 mt-8 border-t border-white/10 flex justify-between items-center text-xs text-white/50`):**

  * Kiri: `© 2024 Zelatan. All rights reserved.`

  * Kanan: `Terms & Conditions • Privacy Policy`.

## 5. Component Style Library & Tailwind v4 Utility Mapping

### 5.1 Primary Deep Olive Pill Button

```
<button class="bg-[#273303] hover:bg-[#344405] active:scale-95 text-white font-sans font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-md transition duration-200 flex items-center justify-center gap-2">
  <span>Explore more</span>
  <span>→</span>
</button>

```

### 5.2 White Frosted Pill Button

```
<button class="bg-white hover:bg-slate-100 active:scale-95 text-zinc-900 font-sans font-bold text-xs sm:text-sm px-5 py-2 rounded-full shadow-md transition duration-200">
  Register Now
</button>

```

### 5.3 Bento Destination Card (Overlay Pill)

```
<div class="relative h-56 rounded-3xl overflow-hidden group shadow-sm">
  <img src="..." alt="Waterfall" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
  <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-between p-4">
    <span class="text-white font-extrabold text-sm sm:text-base">Waterfall</span>
    <button class="bg-white/90 hover:bg-white text-zinc-900 font-bold text-xs px-4 py-1.5 rounded-full shadow-xs transition">
      Explore
    </button>
  </div>
</div>

```

### 5.4 Popular Tour Card

```
<article class="bg-white rounded-2xl p-3 border border-slate-100 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
  <div class="relative h-44 rounded-xl overflow-hidden mb-3">
    <img src="..." alt="Green Earth" class="w-full h-full object-cover" />
  </div>
  <div class="px-1">
    <div class="flex justify-between items-center">
      <h3 class="font-bold text-sm text-zinc-900">Green Earth</h3>
      <span class="text-amber-500 text-xs font-semibold flex items-center gap-1">
        ⭐ 4.8
      </span>
    </div>
    <div class="mt-3 flex justify-between items-baseline pt-2 border-t border-slate-100">
      <span class="text-[11px] text-slate-400">Price</span>
      <span class="font-extrabold text-sm text-zinc-900 tabular-nums">$180 / pax</span>
    </div>
  </div>
</article>

```

### 5.5 Step Item Container

```
<div class="bg-white rounded-2xl p-4 border border-slate-100 shadow-xs flex items-start gap-3">
  <div class="w-8 h-8 rounded-full bg-[#273303] text-white flex items-center justify-center shrink-0 font-bold text-xs">
    1
  </div>
  <div>
    <h4 class="font-bold text-sm text-zinc-900">Select your destination</h4>
    <p class="text-xs text-slate-500 mt-1 leading-relaxed">Browse our curated packages and select the destination that matches your travel dreams.</p>
  </div>
</div>

```

## 6. Implementation Checklist & Code Contract

* \[x\] **Border Kanvas Presentasi `#EFEFF1` Dibuang Bersih** (Sesuai *precision slicing rule*, crop murni dimulai dari X=15 s/d X=221 dan Y=17 s/d Y=1009).

* \[x\] **Skala Normalisasi Desktop 1440px Terhitung Akurat** (\~6.95x scaling dari screenshot asli).

* \[x\] **Seluruh 7 Seksi Lengkap Terdokumentasi** (Hero Hutan Pinus Alpen, Trio Kartu Jeep & Rafting, 2x2 Bento Grid, Katalog Tur Populer, 4-Step Ticket Process, CTA Banner Lembah Hijau, dan Footer Deep Olive Green).

* \[x\] **Palet Warna Asli Terdokumentasi** (Deep Olive `#273303`, Off-White Canvas `#F9FAF6`, Pure White `#FFFFFF`, Obsidian Text `#18181B`).

* \[x\] **Geometri Sudut & Komponen Sesuai** (`rounded-full` untuk pills, `rounded-3xl` untuk bento cards, `rounded-2xl` untuk tour cards).

* \[x\] **Siap Diimplementasikan ke `index.html`** dengan Tailwind CSS v4 CDN tanpa custom CSS atau framework eksternal berat.