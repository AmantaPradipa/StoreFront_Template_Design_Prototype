# DESIGN.md — Slicing Blueprint & UI Architecture: Bloosm Travel

> **Dokumen Spesifikasi Slicing UI & Design System**
>
> **Target:** Landing Page "Bloosm" (Modern Nature & Experiential Travel Booking Platform)
>
> **Teknologi Implementasi:** HTML5 + Tailwind CSS v4 CDN (`@tailwindcss/browser@4`) + Google Fonts + Inline SVG
>
> **Status:** Audited & Ready for Precision Slicing

## 1. Executive Summary & Brand Identity

* **Nama Brand:** **Bloosm** (Typography sans-serif geometris bersih dengan emblem kelopak/bunga minimalis pada huruf "oo").

* **Karakter & Desain DNA:**

  * **Experiential Nature-Focused Luxury:** Berfokus pada destinasi alam luar biasa (pantai surga, puncak Alpen bersalju, air terjun tropis, danau kaldera) dengan sentuhan editorial modern.

  * **Layout Style:** Clean, high whitespace, airy, sans-serif geometris, aksen warna **Cerulean Blue** (`#1C86D4`), kartu foto rounded-3xl (`24px–32px`), badge bendera negara, dan pola tipografi khas **Two-tone Headings** (Baris 1: Hitam Pekat `#18181B`, Baris 2: Abu-abu Muted `#94A3B8`).

  * **Target Audience:** Traveler internasional dan domestik yang mencari liburan alam terkurasi, petualangan ramah anggaran (*"creative and budget-friendly travel solutions"*), serta kemudahan booking multi-layanan (Flight, Hotel, Transport).

## 2. Kalibrasi Skala & Koordinat Layout

| Parameter | Dimensi Screenshot | Target Viewport Desktop | Rasio Skala Normalisasi | 
| ----- | ----- | ----- | ----- | 
| **Lebar (Width)** | 305 px | **1440 px** (Max-width container: 1240 px / `max-w-7xl`) | \~4.72x scaling | 
| **Tinggi (Height)** | 1024 px | Konten mengalir alami (*content-driven scroll*, \~4600–5000 px) | Natural Flow | 
| **Grid Sistem** | 1 Kolom Vertikal | **12-Column Grid** dengan *gap* 20px–32px | Standard 8pt Grid | 
| **Container Padding** | \~14 px pada raster | `px-6 sm:px-10 lg:px-16` (Padding horizontal simetris) | Responsive Gutters | 

## 3. Design Tokens & Visual Architecture

### 3.1 Palet Warna Semantik (Color Tokens)

| Token Name | Hex Code | RGB | Tailwind v4 Utility | Penerapan & Peran | 
| ----- | ----- | ----- | ----- | ----- | 
| **Brand Primary Blue** | `#1C86D4` | `rgb(28, 134, 212)` | `bg-[#1C86D4] text-[#1C86D4]` | Tombol `Register`, tombol `Search`, border fokus input, aksen interaktif | 
| **Primary Blue Hover** | `#1672B5` | `rgb(22, 114, 181)` | `hover:bg-[#1672B5]` | State hover tombol primer | 
| **Text Primary (Dark)** | `#18181B` | `rgb(24, 24, 27)` | `text-zinc-900` | Baris 1 judul seksi, judul kartu, pertanyaan FAQ aktif, teks footer | 
| **Text Secondary (Muted)** | `#94A3B8` | `rgb(148, 163, 184)` | `text-slate-400` | Baris 2 judul seksi (*Two-tone heading*), sub-deskripsi, label form | 
| **Text Inverted** | `#FFFFFF` | `rgb(255, 255, 255)` | `text-white` | Teks di atas hero image, teks banner CTA, overlay kartu | 
| **Surface Pure White** | `#FFFFFF` | `rgb(255, 255, 255)` | `bg-white` | Latar belakang seksi 2, 3, 4, 6, dan kartu pencarian | 
| **Surface Frosted Glass** | `rgba(255, 255, 255, 0.9)` | — | `bg-white/90 backdrop-blur-md` | Tombol `Explore More →`, badge bendera negara, kartu search | 
| **Border Subtle** | `#E2E8F0` | `rgb(226, 232, 240)` | `border-slate-200` | Garis pembatas horizontal FAQ, divider metrik statistik, border kartu | 
| **Border Active / Divider** | `#CBD5E1` | `rgb(203, 213, 225)` | `border-slate-300` | Border form search, garis pemisah navigasi footer | 

### 3.2 Tipografi & Two-Tone Heading Pattern

Sistem tipografi menggunakan sans-serif geometris modern dengan legibilitas superior:

1. **Font Family:** `Plus Jakarta Sans` atau `Inter`

   * Google Fonts: `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap`

2. **Pola Khas "Two-Tone Heading":**

   Setiap judul seksi besar menggunakan kombinasi dua baris dengan warna berbeda:

   * **Baris 1 (Bold Black):** `font-extrabold text-zinc-900`

   * **Baris 2 (Medium Muted Gray):** `font-medium text-slate-400`

3. **Hierarchy Scale:**

   * **Hero Title (H1):** `text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight`

   * **Section Heading (H2):** `text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug`

   * **Card Title / Pricing:** `text-lg sm:text-xl font-bold text-zinc-900`

   * **Metrics Number:** `text-3xl sm:text-4xl font-extrabold text-zinc-900`

   * **Body & FAQ Answer:** `text-xs sm:text-sm text-slate-500 leading-relaxed`

   * **Badges & Meta:** `text-[11px] sm:text-xs font-semibold`

### 3.3 Geometri Sudut (Corner Radii) & Elevasi (Shadows)

* **Pill Elements:** `rounded-full` (Tombol `Register`, `Get in Touch`, `Explore More`, switch bahasa)

* **Search Card & Input Box:** `rounded-2xl` (16px) hingga `rounded-3xl` (24px)

* **Destination & Experience Cards:** `rounded-2xl` (16px) hingga `rounded-3xl` (24px) dengan `overflow-hidden`

* **Card Shadows:** `shadow-xl shadow-black/5` untuk floating search bar, `shadow-md` untuk kartu galeri

## 4. Section-by-Section Anatomy & Slicing Blueprint

```
┌────────────────────────────────────────────────────────────────────────┐
│ SECTION 1: HEADER & HERO (Alpine Mountain, Wordmark, Search Console)   │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 2: SOCIAL PROOF & METRICS (500+, 90.5%, 150+ & 3 Cards)        │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 3: DESTINATION GRID (1 Tall Feature + 2x2 Bento Matrix)        │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 4: FAQ ACCORDION ("Answer to Your Naturely Travel Questions")  │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 5: CALL TO ACTION BANNER (Crater Lake + "Get in Touch")        │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 6: CORPORATE FOOTER (Contact, Symmetric Nav & Copyright)       │
└────────────────────────────────────────────────────────────────────────┘

```

### 4.1 Section 1: Header & Hero Section (`#hero-section`)

* **Visual Surface:** Full-width panoramic background image berupa pegunungan salju Alpen berselimut pinus dengan pencahayaan matahari cerah.

* **Header Navigation (`h-20 flex items-center justify-between`):**

  * **Sisi Kiri (Navigasi):** `Destination` • `Package` • `Pricing` • `About Us` (`text-white/90 text-xs sm:text-sm font-semibold hover:text-white flex gap-6`).

  * **Sisi Tengah (Logo Wordmark bloosm):**
    * Ditulis sebagai tipografi teks biasa (*clean geometric plain text*): `bloosm` (`font-display font-extrabold text-2xl sm:text-3xl tracking-tight text-white`).
    * Tampilan bersih, minimalis, dan modern tanpa pemisahan elemen SVG atau spasi buatan.
  * **Sisi Kanan (Akun & Aksi):**

    * Switcher Bahasa/Negara: Pill capsule putih semi-transparan `US` / `EN` (`bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full text-xs text-white`).

    * Login Link: `Login` (`text-white text-xs sm:text-sm font-semibold hover:underline`).

    * Register Button: Tombol primer biru `Register` (`bg-[#1C86D4] hover:bg-[#1672B5] text-white px-4 py-2 rounded-lg text-xs font-bold shadow-md transition`).

* **Hero Center Copywriting:**

  * **Headline:**

    ```
    <h1 class="text-center font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-tight">
      Simplify Your Travel<br>
      Maximize Your Fun
    </h1>
    
    ```

  * **Subheadline:**
    *"Discover seamless travel solutions that cater to your every need and desire. Plan your dream vacation explore the uncharted wonders."* (`text-white/85 text-xs sm:text-base max-w-xl mx-auto text-center mt-4`).

* **Floating Search & Booking Console Card (High-Utility Search Engine):**

  * Wadah: `bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 max-w-5xl mx-auto mt-8 border border-white/50 text-zinc-900`.

  * **Tabs Segmented Control Adaptif:**
    * `Accommodation` (Tab aktif default: Destination, Date Range & Duration, Rooms & Guests Stepper, Budget Range).
    * `Flights` (Origin City/Airport, Destination Airport, Flight Date, Cabin Class).
    * `Cars` (Pick-up Station, Vehicle Category, Duration Pass).
    * `Tours` (Expedition Theme, Squad Capacity, Season).

  * **Fitur Utama Search Engine (Custom Dropdowns & Non-Clipping Architecture):**
    1. **Non-Clipping Hero View:** Properti `overflow-hidden` dilepas dari `#hero-section` dan dipindahkan khusus ke kontainer background image saja, sehingga seluruh dropdown popover melayang bebas tanpa terpotong batas layar (*no clipping/tertutup*).
    2. **Destination Popover (Image #1 Fix):** Popover kustom dengan tab kategori (*All, Beach & Reef, Alpine Lake, Rainforest*), badge negara monokrom/pill elegan (AU, CH, VE, GR, PA, GL, ID — tanpa artefak emoji sistem Windows yang rusak), indikator kuota slot live, dan fungsi pembersih input (`✕`).
    3. **Custom Bloosm Date Range Picker (Image #2 Fix):** Menggantikan `<input type="date">` bawaan OS yang kaku dengan kalender interaktif bertema Bloosm. Dilengkapi tombol navigasi bulan (`November 2026`), penanda rentang tanggal berwarna Cerulean Blue (`#1C86D4`), chip preset instan (*Weekend 3D2N, 1 Week 7N, 2 Weeks 14N*), serta kalkulasi malam otomatis (*e.g. 7 Nights*).
    4. **Guests & Rooms Stepper Popover (Image #3 Fix):** Popover leluasa (*fully visible*) untuk pengaturan kamar (1-9), dewasa (1-20), dan anak (0-10) dengan tombol steper `+`/`−` beraksen Cerulean Blue, preset cepat (*Solo, Couple, Family*), serta tombol konfirmasi *Apply Selection*.
    5. **Custom Bloosm Budget Dropdown (Image #4 Fix):** Menggantikan `<select>` native OS yang kaku dengan menu dropdown kustom bersudut membulat (*rounded-3xl*), chevron rotasi halus, deskripsi sub-teks, dan centang aktif (`✓`) pada opsi yang dipilih (*All Budgets, < $2,200, $2,200 - $2,600, > $2,600*).
    6. **Action Button:** Tombol primer Cerulean Blue (`#1C86D4`) dengan animasi loading `Searching...` (simulasi query multi-supplier API), eksekusi live filter pada katalog Section 2 & Section 3, strip umpan balik pencarian live, serta status empty-state ramah pengguna.
### 4.2 Section 2: Social Proof & Top Experiences (`#experiences-section`)

* **Visual Surface:** Latar belakang putih bersih (`#FFFFFF`).

* **Centered Two-Tone Heading:**

  ```
  <div class="text-center max-w-2xl mx-auto mb-8">
    <h2 class="font-extrabold text-2xl sm:text-4xl text-zinc-900 leading-snug">
      Bloosm offers creative and budget-friendly travel<br>
      <span class="text-slate-400 font-medium">solutions that are highly valued by our customers.</span>
    </h2>
  </div>
  
  ```

* **Statistik Metrik (3 Kolom dengan Divider Vertikal):**

  * **Kolom 1:** `500+` $\rightarrow$ `Destinations Around` / `Satisfied Clients` (`font-extrabold text-2xl sm:text-3xl text-zinc-900`).

  * **Kolom 2:** `90.5%` $\rightarrow$ `Satisfaction Rate` (`font-extrabold text-2xl sm:text-3xl text-zinc-900`).

  * **Kolom 3:** `150+` $\rightarrow$ `Luxury Partners` / `Tour Guides` (`font-extrabold text-2xl sm:text-3xl text-zinc-900`).

* **3 Kartu Pengalaman Wisata (1x3 Grid):**

  * **Card 1: Sunset Cruise in Whitehaven Beach**

    * Rasio 3:4 portrait, foto perahu layar di pantai Whitehaven Australia.

    * Badge Kanan Atas: `🇦🇺 Australia` (`bg-white/90 backdrop-blur-xs text-zinc-900 font-bold px-3 py-1 rounded-full text-xs shadow-xs`).

    * Overlay Teks Bawah: Judul tebal putih + tombol pill putih frosted `Explore More →` (`bg-white/90 hover:bg-white text-zinc-900 px-4 py-2 rounded-full font-bold text-xs shadow-md`).

  * **Card 2: Picnic on Lake Lucerne Swiss**

    * Foto pegunungan dan Danau Lucerne Swiss dengan cahaya keemasan.

    * Badge Kanan Atas: `🇨🇭 Switzerland`.

    * Tombol Bawah: `Explore More →`.

  * **Card 3: Tour the Angel Falls Waterfall**

    * Foto air terjun spektakuler Angel Falls Venezuela dari ketinggian tebing.

    * Badge Kanan Atas: `🇻🇪 Venezuela`.

    * Tombol Bawah: `Explore More →`.

### 4.3 Section 3: Destination Showcase Grid (`#destinations-section`)

* **Visual Surface:** Latar belakang putih bersih (`#FFFFFF`).

* **Centered Two-Tone Heading:**

  ```
  <div class="text-center max-w-2xl mx-auto mb-10">
    <h2 class="font-extrabold text-2xl sm:text-4xl text-zinc-900 leading-snug">
      Uncover the marvels that await you at<br>
      <span class="text-slate-400 font-medium">your carefully chosen destinations.</span>
    </h2>
  </div>
  
  ```

* **Asymmetric Bento Layout (1 Tall Feature + 2x2 Matrix):**

  * **Kolom Kiri (Kartu Vertikal Penuh, \~42% Width):**

    * Foto udara laguna toska dengan pulau pasir melengkung (*sandbar*).

    * Overlay Teks Besar:

      `Enjoy the stunning natural beauty.` (`text-2xl sm:text-4xl font-extrabold text-white leading-tight max-w-xs`).

    * Floating Switcher Capsule (Bawah): Pill container putih berisi 5 thumbnail bundar/oval untuk memilih sudut pandang destinasi.

  * **Kolom Kanan (2x2 Grid Kartu Destinasi, \~58% Width):**

    * **Item 1 (Top-Left): Slaying Sands Beach**

      * Badge: `🇬🇷 Greece`

      * Thumbnail 16:9 tebing pantai toska.

      * Info: Judul `Slaying Sands Beach` & Harga `$2,500` (bold, rata kanan).

      * Sub-detail: `7 Days & 6 Nights • Flight + Hotel` (`text-slate-400 text-xs`).

    * **Item 2 (Top-Right): Oceanland Beach**

      * Badge: `🇵🇦 Panama`

      * Thumbnail pantai tropis berbukit.

      * Info: `Oceanland Beach` & Harga `$2,100`.

      * Sub-detail: `5 Days & 4 Nights • All Inclusive`.

    * **Item 3 (Bottom-Left): Alta Mountain**

      * Badge: `🇬🇱 Greenland`

      * Thumbnail pondok kayu berselimut salju kutub.

      * Info: `Alta Mountain` & Harga `$2,870`.

      * Sub-detail: `6 Days & 5 Nights • Winter Trek`.

    * **Item 4 (Bottom-Right): Nusa Penida**

      * Badge: `🇮🇩 Indonesia`

      * Thumbnail tanjung bukit hijau dan perahu nelayan di air bening Nusa Penida.

      * Info: `Nusa Penida` & Harga `$2,150`.

      * Sub-detail: `4 Days & 3 Nights • Island Escape`.

### 4.4 Section 4: Naturely FAQ Accordion (`#faq-section`)

* **Visual Surface:** Latar belakang putih bersih (`#FFFFFF`).

* **Centered Two-Tone Heading:**

  ```
  <div class="text-center max-w-2xl mx-auto mb-10">
    <h2 class="font-extrabold text-2xl sm:text-4xl text-zinc-900 leading-snug">
      Answer to Your Naturely<br>
      <span class="text-slate-400 font-medium">Travel Questions</span>
    </h2>
  </div>
  
  ```

* **Accordion Container (`max-w-4xl mx-auto divide-y divide-slate-200`):**

  1. **Item 1 (State Terbuka / Active):**

     * Pertanyaan: `What services are available on this website?` (`font-bold text-sm sm:text-base text-zinc-900 flex justify-between items-center py-4 cursor-pointer`).

     * Ikon: Tanda minus (`−`).

     * Jawaban: *"We offer flight bookings, hotel reservations, car rentals, tour packages and customizable itineraries for international and domestic travel."* (`text-slate-500 text-xs sm:text-sm pb-4 leading-relaxed`).

  2. **Item 2 (State Tertutup):**

     * Pertanyaan: `How can I book a trip through this website?`

     * Ikon: Tanda plus (`+`).

  3. **Item 3 (State Tertutup):**

     * Pertanyaan: `Can I cancel or reschedule my trip?`

     * Ikon: Tanda plus (`+`).

  4. **Item 4 (State Tertutup):**

     * Pertanyaan: `Do you offer discounts for group bookings?`

     * Ikon: Tanda plus (`+`).

  5. **Item 5 (State Tertutup):**

     * Pertanyaan: `What should I do if I encounter issues during my trip?`

     * Ikon: Tanda plus (`+`).

### 4.5 Section 5: Call to Action Banner (`#cta-section`)

* **Visual Surface:** Full-width panoramic banner berupa danau kaldera hijau zamrud dengan tebing pegunungan dramatis dan awan lembut.

* **Komponen & Layout:**

  * Kontainer tinggi: `h-80 sm:h-96 rounded-3xl overflow-hidden relative mx-4 sm:mx-10 lg:mx-16 my-10 flex flex-col items-center justify-center text-center px-4`.

  * Vignette Overlay: `bg-black/30 absolute inset-0`.

  * **Headline:**

    ```
    <h2 class="relative font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight max-w-xl">
      Start your thrilling journey<br>
      into nature today.
    </h2>
    
    ```

  * **Action Button:**

    ```
    <button class="relative mt-6 bg-white hover:bg-slate-100 active:scale-95 text-zinc-900 font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full shadow-2xl transition duration-200">
      Get in Touch
    </button>
    
    ```

### 4.6 Section 6: Corporate Footer (`#footer-section`)

* **Visual Surface:** Putih bersih dengan border atas tipis `border-t border-slate-200 pt-12 pb-8 px-6 sm:px-12 lg:px-20`.

* **3-Level Anatomy:**

  1. **Top Row (Brand Promise & Contact Info):**

     * **Sisi Kiri:**

       ```
       <div class="max-w-md">
         <h3 class="font-extrabold text-xl sm:text-2xl text-zinc-900">
           Easy booking and personalized<br>
           <span class="text-slate-400 font-medium">services for unforgettable trips</span>
         </h3>
       </div>
       
       ```

     * **Sisi Kanan (Kontak Resmi):**

       * Email: `bloosm@travel.id`

       * Telepon: `(021) 812-3456-789`

       * Alamat: `Jakarta 123, Indonesia`

       * Style: Rata kanan (`text-xs sm:text-sm text-slate-500 space-y-1 text-right`).

  2. **Middle Navigation Row (Tautan Simetris & Center Logo):**

     * **Kiri:** `Destination` • `Tour Package` • `Our Story` (`flex gap-6 text-xs font-semibold text-slate-600`).

     * **Tengah:** Wordmark `Bloosm` (`font-extrabold text-lg tracking-tight text-zinc-900`).

     * **Kanan:** `Account` • `Pricing` • `Term` (`flex gap-6 text-xs font-semibold text-slate-600 justify-end`).

  3. **Bottom Legal Baseline:**

     * **Kiri:** `© 2024 Bloosm. All rights reserved.` (`text-xs text-slate-400`).

     * **Kanan:** `Terms & Conditions • Privacy Policy` (`text-xs text-slate-400 flex gap-4`).

## 5. Component Style Library & Tailwind v4 Utility Mapping

### 5.1 Primary Cerulean Action Button

```
<button class="bg-[#1C86D4] hover:bg-[#1672B5] active:scale-95 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow-md transition duration-200">
  Search
</button>

```

### 5.2 Floating Frosted Country Badge

```
<div class="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-xs border border-white/60 text-zinc-900 px-3 py-1 rounded-full text-xs font-bold shadow-xs">
  <span>🇦🇺</span>
  <span>Australia</span>
</div>

```

### 5.3 Frosted Action Pill ("Explore More →")

```
<button class="inline-flex items-center gap-2 bg-white/90 hover:bg-white text-zinc-900 font-bold text-xs px-4 py-2 rounded-full shadow-md backdrop-blur-xs transition">
  <span>Explore More</span>
  <span>→</span>
</button>

```

### 5.4 Search Console Input Group

```
<div class="px-4 py-2 border-r border-slate-200 last:border-r-0">
  <span class="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Destination</span>
  <div class="flex items-center gap-2 mt-1">
    <svg class="w-4 h-4 text-[#1C86D4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
    </svg>
    <input type="text" placeholder="Select Destination" class="w-full text-xs sm:text-sm font-bold text-zinc-900 bg-transparent focus:outline-none" />
  </div>
</div>

```

### 5.5 Destination Card Anatomy (2x2 Grid)

```
<article class="bg-white rounded-3xl p-3 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
  <div class="relative h-44 rounded-2xl overflow-hidden mb-3">
    <img src="..." alt="..." class="w-full h-full object-cover" />
    <span class="absolute top-2.5 right-2.5 bg-white/90 text-zinc-900 font-bold text-[10px] px-2.5 py-1 rounded-full shadow-xs">
      🇬🇷 Greece
    </span>
  </div>
  <div class="flex justify-between items-baseline px-1">
    <h3 class="font-bold text-sm text-zinc-900">Slaying Sands Beach</h3>
    <span class="font-extrabold text-sm text-zinc-900">$2,500</span>
  </div>
  <p class="text-[11px] text-slate-400 px-1 mt-0.5">7 Days &amp; 6 Nights • Flight + Hotel</p>
</article>

```

## 6. Checklist Verifikasi Slicing

* \[x\] **Hierarki Visual 6 Seksi Terpetakan Penuh** (Hero dengan Alpine Panorama, Social Proof & Metrics, Asymmetric Destination Grid, Naturely FAQ Accordion, Crater Lake CTA Banner, dan Corporate Footer).

* \[x\] **Pola Tipografi Two-Tone Headings Terdokumentasi** (Baris 1 Dark `#18181B` + Baris 2 Muted Gray `#94A3B8`).

* \[x\] **Palet Warna & Token Semantik Lengkap** (Cerulean Blue `#1C86D4`, Zinc Dark `#18181B`, Muted Gray `#94A3B8`, White `#FFFFFF`).

* \[x\] **Komponen Interaktif Siap Slicing** (Search bar 4-kolom, segmented tabs, FAQ accordion dengan state `+`/`−`, carousel switchers, badge bendera).

* \[x\] **Siap Diimplementasikan ke `index.html`** dengan Tailwind CSS v4 CDN tanpa dependensi CSS eksternal berat.