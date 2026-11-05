# DESIGN.md — Slicing Blueprint & UI Architecture: Melali Travel

> **Dokumen Spesifikasi Slicing UI & Design System**  
> **Target:** Landing Page "Melali Travel" (Modern Indonesian Eco-Luxury & Open Trip Platform)  
> **Teknologi Implementasi:** HTML5 + Tailwind CSS v4 CDN (`@tailwindcss/browser@4`) + Google Fonts + Inline SVG  
> **Status:** Audited & Ready for Precision Slicing  

---

## 1. Executive Summary & Brand Identity

* **Nama Brand:** **melali travel** (ditulis dengan huruf kecil / lowercase geometris).  
  *Etimologi:* "Melali" berasal dari bahasa Bali yang bermakna *jalan-jalan*, *bepergian*, atau *menjelajah santai*.
* **Karakter & Desain DNA:**  
  * **Modern Indonesian Travel Aesthetic:** Menggabungkan eksotisme lanskap kepulauan Indonesia (pantai pasir putih, terasering sawah, candi, pulau karst) dengan tipografi sans-serif geometris kelas editorial internasional.
  * **Layout Style:** Clean, spacious, high-contrast, editorial minimalist dengan sudut melengkung besar (*large pill & rounded-3xl geometry*), floating frosted-glass chips, dan tombol aksi serba hitam (*solid black pill buttons*).
  * **Target Audience:** Milenial dan Gen Z traveler, digital nomad, serta petualang grup *open trip* yang mencari perjalanan otentik (*"honest trips with friends and curated hidden gems"*), bukan sekadar agen tur konvensional (*"Not Your Boring Travel Agent"*).

---

## 2. Kalibrasi Skala & Koordinat Layout

| Parameter | Dimensi Screenshot | Target Viewport Desktop | Rasio Skala Normalisasi |
| :--- | :--- | :--- | :--- |
| **Lebar (Width)** | 274 px | **1440 px** (Max-width container: 1280 px / `max-w-7xl`) | ~5.25x scaling |
| **Tinggi (Height)** | 1024 px | Konten mengalir alami (*content-driven scroll*, ~4800–5200 px) | Natural Flow |
| **Grid Sistem** | 1 Kolom Vertikal | **12-Column Grid** dengan *gap* 24px–32px | Standard 8pt Grid |
| **Margin Container** | ~12 px pada raster | `px-6 sm:px-12 lg:px-20` (Padding horizontal responsif) | Symmetrical Gutters |

---

## 3. Design Tokens & Visual Architecture

### 3.1 Palet Warna Semantik (Color Tokens)

| Token Name | Hex Code | RGB | Tailwind v4 Utility | Penerapan & Peran |
| :--- | :--- | :--- | :--- | :--- |
| **Surface Dark (Hero/Text)** | `#000000` | `rgb(0, 0, 0)` | `bg-black text-black` | Tombol CTA utama, judul seksi besar, ikon aktif, footer baseline |
| **Surface Pure White** | `#FFFFFF` | `rgb(255, 255, 255)` | `bg-white text-white` | Kartu konten, filter search bar, teks pada hero |
| **Surface Off-White** | `#FAFAFA` | `rgb(250, 250, 250)` | `bg-neutral-50` | Latar belakang utama seksi 2, 3, dan 4 |
| **Surface Contrast Slate** | `#E7E7E7` | `rgb(231, 231, 231)` | `bg-neutral-200` | Latar belakang seksi 5 ("Plan a Trip") |
| **Pastel Cyan Highlight** | `#E4F1FB` | `rgb(228, 241, 251)` | `bg-sky-100/80` | Highlight badge rounded di belakang kata *"Melali"* |
| **Brand Accent Blue** | `#0284C7` | `rgb(2, 132, 199)` | `text-sky-600 bg-sky-500` | Titik aksen crosshair/kompas, ikon target, indikator aktif |
| **Muted Text / Paragraph** | `#64748B` | `rgb(100, 116, 139)` | `text-slate-500` | Deskripsi badan paragraf, label subteks, metadata |
| **Rating Accent (Gold)** | `#F59E0B` | `rgb(245, 158, 11)` | `text-amber-500` | Ikon bintang rating review (`★ 4.8`) |
| **Border Subtle** | `#E2E8F0` | `rgb(226, 232, 240)` | `border-slate-200` | Garis batas tipis 1px pada kartu dan filter bar |
| **Glass Overlay** | `rgba(255, 255, 255, 0.2)` | — | `bg-white/20 backdrop-blur-md` | Floating pills di atas foto hero |

### 3.2 Tipografi & Font Pairing

Sistem tipografi menggunakan kombinasi modern sans-serif geometris:

1. **Display & Headings:** `Plus Jakarta Sans` atau `Outfit`  
   * Karakter: Geometris, sudut lengkung ramah, circular 'o' dan 'e', ketebalan *ExtraBold* (800) dan *Bold* (700).  
   * Google Fonts URL: `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap`
2. **Body & Micro-Copy:** `Inter`  
   * Karakter: Netral, sangat terbaca pada ukuran teks kecil (11px–14px), angka berjarak tabular (*tabular numbers*).
3. **Hierarchy Scale:**
   * **Hero Brand Display:** `text-6xl sm:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-none`
   * **Section Heading (H2):** `text-3xl sm:text-5xl font-extrabold tracking-tight text-black`
   * **Sub-Heading / Card Title (H3):** `text-xl sm:text-2xl font-bold text-black`
   * **Body Paragraph:** `text-sm sm:text-base font-normal text-slate-500 leading-relaxed`
   * **Badges / Micro-labels:** `text-[11px] sm:text-xs font-bold uppercase tracking-wider`

### 3.3 Geometri Sudut (Corner Radii) & Elevasi (Shadows)

* **Pill Elements (Buttons, Tags, Nav Items):** `rounded-full` (1000px)
* **Search Console Bar:** `rounded-full` (pada desktop) atau `rounded-2xl` (pada mobile)
* **Tour & Destination Cards:** `rounded-3xl` (24px–32px) dengan `overflow-hidden`
* **Card Inner Thumbnail:** `rounded-2xl` (16px)
* **Elevation / Shadows:**
  * Floating Badges: `shadow-md shadow-black/5`
  * Hero Search Console: `shadow-xl shadow-black/8 border border-slate-100`
  * Tour Cards: `shadow-sm hover:shadow-xl transition-shadow duration-300`

---

## 4. Section-by-Section Anatomy & Slicing Blueprint

```
┌────────────────────────────────────────────────────────────────────────┐
│ SECTION 1: HERO (Aerial Island Image + Nav + Giant Brand Display)       │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 2: VALUE PROPOSITION ("Melali means Going Places" + Collage)   │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 3: CATALOG & SEARCH CONSOLE ("Pick the Place" + 3 Tour Cards)  │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 4: DESTINATION CAROUSEL ("Explore Destination" + 5 Cards)      │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 5: TRIP PLANNER & UPCOMING TOUR ("Plan a Trip" + Dual Cards)   │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 6: FOOTER & COPYRIGHT BASELINE                                 │
└────────────────────────────────────────────────────────────────────────┘
```

---

### 4.1 Section 1: Hero Section (`#hero-section`)

* **Visual Surface:** Full-viewport background image menampilkan pulau tropis dengan laguna toska dan pantai pasir putih lengkung dari sudut pandang aerial. Dilengkapi *subtle top & bottom vignette gradient* (`bg-gradient-to-b from-black/40 via-transparent to-black/60`).
* **Komponen & Layout:**
  1. **Top Floating Navigation Bar & Centered Mode Controller:**
     * **Baris 1 (Top Header Nav):** 
       * Sisi Kiri: Tombol Pill Frosted `Menu` dengan ikon 3 garis (`bg-white text-black px-3.5 py-1.5 rounded-full font-bold text-xs shadow-sm`), didampingi dropdown navigasi `Open Trip ▾` dan `Private Trip ▾`.
       * Sisi Kanan: Capsule bahasa/profil `ID • EN` dan tombol jelajah cepat.
     * **Baris 2 (Floating Center Segmented Pill — Dead-Center Viewport):**
       * Tepat di tengah horizontal layar (`flex justify-center w-full mt-8 sm:mt-10`), mengambang di atas foto perairan toska dan di atas kata "melali":
       * Segmented Control Pill: `🛏 Accommodation`, `✈ Flights`, `🏨 Hotels` (`bg-black/55 backdrop-blur-md border border-white/25 text-white px-4 py-2 rounded-full text-xs font-medium flex items-center gap-2 shadow-2xl`).
     * **Ikon Simbol (Image #2):** Simbol lingkaran target crosshair putih bersih (`white circular target crosshair with 4 extended ticks and center dot`) tepat di atas huruf 'l' pada kata "melali".
     * Teks Raksasa (Strict Lowercase per Brand Identity):
       ```html
       <h1 class="text-center font-display font-extrabold text-7xl sm:text-9xl text-white tracking-tighter leading-[0.82] lowercase">
         melali<br>
         <span class="tracking-tight">travel</span>
       </h1>
       ```
  3. **Hero Bottom Utility & Social Proof:**
     * **Kiri Bawah:** Sub-headline presisi Image #2:  
       `Melali offers open trips in Indonesia.`<br>
       `Strangers Today, Travel Buddies Tomorrow.` (`text-white/95 text-sm sm:text-[15px] max-w-md leading-relaxed`).
     * **Kanan Bawah:** Floating Social Proof Pill presisi Image #2:  
       `★ 5K+ People Satisfied | Unforgettable accommodations for any budget.` (`bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs px-4 py-2 rounded-full flex items-center gap-3`).
     * **Bottom Links Bar:** `Special Vacation →` • `Reputable Guide →` • `Contact Us →` (`text-white/85 text-xs font-medium flex justify-between pt-4 border-t border-white/20`).

### 4.2 Section 2: Value Proposition & Storytelling (`#value-prop-section`)

* **Visual Surface:** Background `#FAFAFA` (Off-white bersih).
* **Komponen & Layout:**
  1. **Top Indicator Tags:**
     * Indikator Kiri: `We are Melali` (ikon komunitas biru) dan `★ 5K+ People Satisfied` (`text-slate-700 text-xs font-bold`).
     * Indikator Kanan: Dua avatar lingkaran bertumpuk + pill badge `+5`.
  2. **Main Headline dengan Dynamic Accent & Compass Rings:**
     * Headline:
       ```html
       <h2 class="text-4xl sm:text-6xl font-extrabold text-black tracking-tight leading-tight">
         <span class="bg-[#E4F1FB] px-4 py-1 rounded-2xl inline-block text-black">Melali</span> means<br>
         Going Places
       </h2>
       ```
     * Cincin Kompas Samar di belakang kata *"Places"*.
     * Dotted Progress Line: Garis putus-putus horizontal berujung lingkaran target crosshair biru toska di sisi kanan.
  3. **Struktur 2 Kolom:**
     * **Kolom Kiri (Brand Narrative):**
       * Eyebrow Tag: `● 01 Our Value` (`border border-slate-300 text-slate-500 font-mono text-[11px] px-2.5 py-0.5 rounded-full`).
       * Judul: `Not Your Boring Travel Agent` (`text-2xl sm:text-3xl font-extrabold text-black mt-2`).
       * Paragraf (Image #2): *"We plan chill, curated trips with good vibes and better people."*
       * CTA Button: `Book a Seat` (`bg-black hover:bg-neutral-800 text-white font-bold text-xs px-6 py-3 rounded-full shadow-md`).
     * **Kolom Kanan (Staggered Photo Collage):**
       * Tiga kartu foto portrait bersudut bulat:
         - Kartu 1 (Kiri/Paling Tinggi): `Bangli, East Bali` dengan deskripsi *"Cultural walk with local guides"* dan badge foto `Panglipuran`.
         - Kartu 2 (Tengah): Foto pura air danau dengan badge `Uluwatu`.
         - Kartu 3 (Kanan): Foto pura senja dengan badge `Trunyan Lakeside`.
       * Kontrol Slider Kanan Bawah: Tombol pill `← Prev` dan `Next →`.
---

### 4.3 Section 3: Interactive Search & Tour Catalog (`#catalog-section`)

* **Visual Surface:** Background `#FAFAFA`.
* **Header Seksi:**
  * Eyebrow: `● Popular Destination 2026` (Tahun dinamis terkini)
  * Judul Kiri: `Pick the Place` (`text-4xl sm:text-5xl font-extrabold text-black`)
  * Deskripsi Kanan: *"We have great options for everyone and cozy spots for your squad to enjoy together!"*
* **Search Filter Console (Floating Capsule Bar Berstandar Industri):**
  * Bentuk: Kapsul panjang putih melayang (`bg-white rounded-2xl md:rounded-full p-2.5 sm:p-3 shadow-xl border border-slate-200 flex flex-col md:flex-row items-center justify-between divide-y md:divide-y-0 md:divide-x divide-slate-200 max-w-5xl mx-auto`).
  * Field 1: **Destination** $\rightarrow$ Label `Destination` dengan input `Find a spot ...` dan interactive quick-pick popover untuk memilih destinasi utama (*Uluwatu, Toba Lake, Sumba, Labuan Bajo*).
  * Field 2: **Category** $\rightarrow$ Label `Category` dengan selector `Select type ▾` (*Open Trip, Private Trip*).
  * Field 3: **Price** $\rightarrow$ Label `Price` dengan selector `Select range budget ▾` (*< Rp 3.000.000, Rp 3.000.000 - Rp 4.500.000, > Rp 4.500.000*).
  * Field 4: **Date** $\rightarrow$ Label `Date` dengan input kalender terintegrasi `Select date range ▾`.
  * Action: **Tombol Discover** $\rightarrow$ Tombol solid black pill bertuliskan `Discover` (`bg-black hover:bg-neutral-800 text-white px-6 py-3 rounded-full font-bold text-xs shadow-md active:scale-95 flex items-center gap-1.5`) dengan visual feedback state pencarian live.
  * **Live Assurance Status Strip:** Strip verifikasi live di bawah bar pencarian: `● Every price is checked live when you ask for it` dengan kalkulasi jumlah paket terverifikasi.
  * **Card 1: Uluwatu**
    * Lokasi: `Badung Regency, Bali` | Badge: `★ 4 Slot left`.
    * Foto pantai tebing dengan floating info bar: `⏱ 3D3N` • `Open Trip` • `📅 12-14 August`.
    * Tombol: Lingkaran expand diagonal `⤢`.
  * **Card 2: Toba Lake**
    * Lokasi: `Sumatra` | Badge: `★ 5 Slot left` | Inset Badge: `Open Trip`.
    * Info bar bawah foto: `⏱ 4D3N` • `Private` • `Request closed`.
    * Spesifikasi 3 Kolom: `Accommodation: 2N at Lakeside Villa`, `Transport: Private driver`, `Meals: Full board`.
    * Tombol: Tombol expand `⤢` di kiri dan tombol hitam solid `Plan a Trip` di kanan.
  * **Card 3: Sumba Adventure**
    * Lokasi: `West Sumba` | Badge: `★ 2 Slot left` | Inset Badge: `Open Trip`.
    * Info bar bawah foto: `⏱ 5D3N` • `Open Trip` • `📅 12-14 August`.
    * Tombol: Lingkaran expand diagonal `⤢`.
* **Kontrol Seksi Bawah:** Tombol navigasi `← Prev` dan `Next →` di sisi kanan bawah seksi.
---

### 4.4 Section 4: Destination Carousel Gallery (`#destination-section`)

* **Visual Surface:** Background `#FAFBFA`.
* **Header Terpusat:**
  * Tag Atas: `● Client Experiences` (`border border-slate-300 text-slate-500 font-mono text-[11px] px-3 py-0.5 rounded-full`).
  * Judul: `Explore Destination` (`text-4xl sm:text-5xl font-extrabold text-black mt-2 text-center`).
* **Horizontal Carousel Strip (5 Kartu Destinasi):**
  * Kartu portrait vertikal `rounded-2xl overflow-hidden relative shadow-sm hover:shadow-md`:
    - Kartu 1: `Borobudur` (Label nama di kanan bawah foto).
    - Kartu 2: `Raja Ampat` (Label nama di kanan bawah foto).
    - Kartu 3: `Wakatobi` (Label nama di kanan bawah foto).
    - Kartu 4: `Rinjani` (Label nama di kanan bawah foto).
    - Kartu 5: `Pink Beach` (Label nama di kanan bawah foto).
* **Carousel Navigation & Closing Statement:**
  * Tombol navigasi terpusat: `← Prev` dan `Next →`.
  * Statement (Image #2): *"Explore the enchanting stories of wanderers who have collected unforgettable memories and delightful experiences."*
  * CTA Utama: `Book a Seat` (`bg-black hover:bg-neutral-800 text-white font-bold text-xs px-6 py-2.5 rounded-full shadow-sm`).
---

### 4.5 Section 5: Trip Planner & Featured Upcoming Tour (`#planner-section`)

* **Visual Surface:** Background `#E7E7E7` (Abu-abu semen/slate kontras yang membingkai 2 kartu putih besar).
* **Header Seksi:**
  * Tag Atas: `● Dont waste time !!` (`border border-slate-400 text-slate-600 font-mono text-[11px] px-3 py-0.5 rounded-full`).
  * Judul Kiri: `Plan a Trip` (`text-4xl sm:text-5xl font-extrabold text-black`)
  * Deskripsi Kanan: *"We have great options for everyone and cozy spots for your squad to enjoy together!"*
* **Dua Kartu Kontainer Putih Besar (`rounded-3xl bg-white p-6 sm:p-8 shadow-md`):**
  1. **Kartu Kiri (8 Kolom):**
     * Header Kartu: Logo `melali travel` di kiri dan tombol `Back to top` (`rounded-full border border-slate-300 text-[11px]`) di kanan.
     * Galeri Tiga Thumbnail Mini: Foto air terjun (*Tumpak Sewu*), penyu laut (*Derawan*), dan lanskap hutan hijau.
     * Tiga Kolom Informasi Bawah:
       * **Melali Travel:** `Mountain`, `Beach and Island`, `Adventure Trip`.
       * **Contact Us:** `CS 01 + +62 888 9999 0000`, `CS 02 + +62 777 4444 0000`.
       * **Social Media:** `Instagram + @melalitravel`, `TikTok + Melali Travel`.
  2. **Kartu Kanan (4 Kolom - Upcoming Trip):**
     * Header Kartu: `Upcoming Trip / Special Independence Day` di kiri dan badge `● Late August` di kanan.
     * Foto Utama: Foto Pink Beach dengan label `Pink Beach` di kanan bawah.
     * Tiga Spesifikasi Cepat: `Accommodation: Luxeway Villa`, `Transport: Private cars`, `Meals: Full board`.
     * Tombol Aksi: `Join Waiting List` (`w-full bg-black hover:bg-neutral-800 text-white py-3 rounded-full font-bold text-xs text-center`).

---

### 4.6 Section 6: Footer Baseline (`#footer-section`)

* Format teks bersih rata kiri sesuai Image #2 dengan tahun berjalan terkini (2026):  
  `Copyright 2026 Melali all rights reserved` (`text-xs text-slate-500 font-sans py-8`).
---

## 5. Component Style Library & Tailwind v4 Utility Mapping

### 5.1 Tombol Utama (Primary Action Pill)
```html
<button class="bg-black hover:bg-neutral-800 active:scale-95 text-white font-sans font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md transition-all duration-200">
  Book a trip
</button>
```

### 5.2 Floating Frosted Badge
```html
<div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 text-white px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs">
  <span class="text-amber-400">★ 4.8</span>
  <span>People Satisfied</span>
</div>
```

### 5.3 Filter Console Input Group
```html
<div class="flex-1 px-4 py-2 border-r border-slate-200 last:border-r-0">
  <span class="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Destination</span>
  <select class="w-full bg-transparent font-bold text-xs text-black focus:outline-none cursor-pointer">
    <option>Labuan Bajo, NTT</option>
    <option>Raja Ampat, Papua</option>
    <option>Uluwatu, Bali</option>
  </select>
</div>
```

### 5.4 Tour Card Anatomy
```html
<div class="bg-white rounded-3xl p-4 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
  <div class="relative h-48 rounded-2xl overflow-hidden mb-4">
    <img src="..." alt="..." class="w-full h-full object-cover" />
    <span class="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-black font-bold text-[10px] px-2.5 py-1 rounded-full">
      Open Trip
    </span>
  </div>
  <div class="space-y-2">
    <div class="flex justify-between items-center text-xs">
      <span class="font-bold text-black text-sm">Uluwatu Scenic Cliff</span>
      <span class="text-amber-500 font-bold">★ 4.8</span>
    </div>
    <p class="text-[11px] text-slate-500">3 Days 2 Nights • All-inclusive</p>
  </div>
  <div class="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center">
    <span class="font-extrabold text-sm text-black">Rp 2.450.000</span>
    <button class="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center font-bold">↗</button>
  </div>
</div>
```

---

## 6. Checklist Verifikasi Slicing

- [x] **Hierarki Visual 5 Seksi Terpetakan Penuh** (Hero, Value Prop, Catalog, Destination, Planner).
- [x] **Semua Teks Kunci Terekstraksi Tepat** (*"Melali means Going Places"*, *"Not Your Boring Travel Agent"*, *"Pick the Place"*, *"Explore Destination"*, *"Plan a Trip"*).
- [x] **Palet Warna Asli Terdokumentasi** (Black `#000000`, Off-White `#FAFAFA`, Grey `#E7E7E7`, Cyan Accent `#E4F1FB`).
- [x] **Geometri Pill & Rounded Sesuai** (`rounded-full` untuk button/filter, `rounded-3xl` untuk card/container).
- [x] **Siap Diimplementasikan ke `index.html`** dengan Tailwind CSS v4 CDN tanpa custom CSS atau framework rumit.
