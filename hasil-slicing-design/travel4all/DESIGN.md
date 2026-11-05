# DESIGN.md — Slicing Blueprint & UI Architecture: Travel4All (Desktop UI)

> **Dokumen Spesifikasi Slicing UI & Design System**  
> **Brand Name:** **Travel4All** (Ditugaskan oleh pengguna menggantikan nama mockup asli)  
> **Target Scope:** Antarmuka Layar Penuh Desktop (*Desktop UI — Left Canvas View*)  
> **Teknologi Implementasi:** HTML5 + Tailwind CSS v4 CDN (`@tailwindcss/browser@4`) + Google Fonts + Inline SVG  
> **Status:** Audited & Ready for Precision Slicing  

---

## 1. Executive Summary & Brand Identity

* **Nama Brand:** **Travel4All**  
* **Karakter & Desain DNA:**  
  * **Modern Editorial & Curated Discovery:** Menampilkan perpaduan elegan antara tipografi **Grotesque Sans-Serif** yang bersih, modern, dan fungsional dengan sentuhan **Serif / Italicized Display Callout** pada kata-kata kunci (*"World"*, *"Journeys"*, *"Experiences"*, *"Dream Tour"*, *"Travelers"*, *"Questions"*, *"Adventure?"*, *"Insights"*).
  * **Layout Style:** Editorial travel magazine modern, clean whitespace lapang, palet latar belakang *light off-white* lembut (`#F8FAFC` / `#F7F7F7`), kartu terkurasi bersudut lengkung sedang (`rounded-2xl` / 16px), aksen warna **Cerulean / Cyan Blue** (`#0284C7` / `#0EA5E9`), serta form booking terapung horizontal (*floating horizontal search bar*).
  * **Pola Tipografi Khusus (The Hybrid Italic Serif Pattern):**  
    Setiap *headline* utama menggunakan kombinasi kata sans-serif tebal yang disisipi satu kata bergaya *serif italic* (seperti *Playfair Display Italic* atau *Instrument Serif* / *Cormorant Garamond*) untuk menciptakan kontras mewah berkelas majalah gaya hidup (*luxury travel editorial*).
  * **Target Audience:** Wisatawan modern, pencari liburan terkurasi (*tailored experiences*), keluarga, dan pelancong grup yang menginginkan reservasi tanpa hambatan (*"Easy Steps Secure Dream Tour"*).

---

## 2. Kalibrasi Skala & Koordinat Layout Desktop

| Parameter | Dimensi Screenshot Raster | Target Viewport Desktop | Rasio Skala Normalisasi |
| :--- | :--- | :--- | :--- |
| **Lebar Konten Desktop (Width)** | ~219 px (area desktop crop) | **1440 px** (Max container: 1240 px / `max-w-7xl`) | ~5.76x scaling |
| **Tinggi Konten (Height)** | 1023 px | Konten mengalir alami (*content-driven scroll*, ~4800–5200 px) | Natural Flow |
| **Grid Sistem Desktop** | Standar 12-Column Grid | `grid-cols-12` dengan *gap* 20px–32px | Standard 8pt Grid |
| **Gutter / Container Padding**| ~12 px pada raster | `px-6 sm:px-12 lg:px-20` (Margin simetris di sisi kiri dan kanan) | Symmetrical Gutters |

---

## 3. Design Tokens & Visual Architecture

### 3.1 Palet Warna Semantik (Color Tokens)

| Token Name | Hex Code | RGB | Tailwind v4 Utility | Penerapan & Peran |
| :--- | :--- | :--- | :--- | :--- |
| **Brand Primary Cyan/Blue** | `#0284C7` / `#0EA5E9` | `rgb(2, 132, 199)` | `bg-sky-600 hover:bg-sky-500 text-sky-600` | Tombol CTA `Explore Destination` / `Sign In`, lingkaran nomor langkah (*Step badges*), teks harga paket wisata, link teks aktif |
| **Brand Light Blue Tint** | `#E0F2FE` | `rgb(224, 242, 254)` | `bg-sky-100 text-sky-800` | Background chip kategori FAQ aktif, lingkaran hover |
| **Text Primary (Dark Obsidian)** | `#0F172A` | `rgb(15, 23, 42)` | `text-slate-900` | Judul seksi utama, nama destinasi, pertanyaan FAQ, teks footer |
| **Text Secondary (Slate Muted)** | `#64748B` | `rgb(100, 116, 139)` | `text-slate-500` | Paragraf deskriptif, label input pencarian, metadata durasi tur |
| **Surface Pure White** | `#FFFFFF` | `rgb(255, 255, 255)` | `bg-white text-white` | Kartu paket wisata, kartu testimoni, kartu bar pencarian hero |
| **Surface Off-White (Canvas)** | `#F8FAFC` | `rgb(248, 250, 252)` | `bg-slate-50` | Latar belakang seluruh halaman (*overall page canvas*) |
| **Border Subtle** | `#E2E8F0` | `rgb(226, 232, 240)` | `border-slate-200` | Garis pembatas kartu, batas input form, garis horizontal FAQ |
| **Rating Star Gold** | `#F59E0B` | `rgb(245, 158, 11)` | `text-amber-500` | Bintang ulasan pada kartu testimoni traveler |

### 3.2 Tipografi & Hybrid Serif Pairing

Sistem tipografi menggunakan perpaduan unik dua font keluarga:

1. **Heading Sans-Serif:** `Plus Jakarta Sans` atau `Inter` (Weight 700 / 800)  
   Digunakan untuk teks utama judul dan navigasi.
2. **Accent Editorial Serif:** `Playfair Display` atau `Cormorant Garamond` (Style: *Italic*, Weight: 600 / 700)  
   Digunakan secara selektif untuk memberikan penekanan artistik berkelas editorial (*"World"*, *"Journeys"*, *"Experiences"*, *"Dream Tour"*, *"Travelers"*, *"Questions"*, *"Adventure?"*, *"Insights"*).
3. **Body Text:** `Inter` (Weight 400 / 500, Leading relaxed)  
   Menghadirkan keterbacaan optimal pada ukuran kecil.

**Google Fonts Integration:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,600;1,700&family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet">
```

### 3.3 Geometri Sudut (Corner Radii) & Elevasi (Shadows)

* **Form Input & Button Geometry:** `rounded-lg` (8px) hingga `rounded-xl` (12px)
* **Floating Search Card:** `rounded-2xl` (16px) dengan `shadow-xl shadow-slate-900/10 border border-slate-100`
* **Tour & Destination Cards:** `rounded-2xl` (16px) dengan `overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow`
* **Testimonial Cards:** `rounded-2xl` (16px) `bg-white p-5 border border-slate-200 shadow-xs`
* **FAQ Containers:** `rounded-xl` (12px) dengan border tipis dan efek expand mulus

---

## 4. Section-by-Section Anatomy & Slicing Blueprint (Desktop View)

```
┌────────────────────────────────────────────────────────────────────────┐
│ SECTION 1: HEADER & HERO (Wing Plane in Cloud, Headline, Search Bar)   │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 2: TAILORED TRAVEL EXPERIENCES (Intro Copy + 8-Card Grid)      │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 3: EASY STEPS SECURE DREAM TOUR (Left Pitch + 3 Numbered Steps)│
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 4: WHAT OUR TRAVELERS SAY (Horizontal Carousel Testimonial)    │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 5: FREQUENTLY ASKED QUESTIONS (Pill Filter + 5-Row Accordion)  │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 6: READY TO START ADVENTURE BANNER (Boat Wooden Bow Landscape) │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 7: TRAVEL INSIGHTS & TIPS (3 Editorial Articles Grid)          │
├────────────────────────────────────────────────────────────────────────┤
│ SECTION 8: COMPREHENSIVE FOOTER & SOCIALS (Links & Copyright)          │
└────────────────────────────────────────────────────────────────────────┘
```

---

### 4.1 Section 1: Header & Hero Section (`#hero-section`)

* **Visual Surface:** Gambar hero panorama layar penuh menampilkan sayap pesawat komersial terbang di atas hamparan awan putih lembut dan langit biru cerah.
* **Top Navigation Bar (`h-20 flex items-center justify-between px-6 sm:px-12 lg:px-20`):**
  * **Sisi Kiri (Logo Brand Text-Based):** Tipografi teks merek murni `Travel` (`font-display-hero font-extrabold text-2xl text-on-surface`) + `4All` (`font-headline-accent italic text-primary`), dilengkapi ikon avatar monogram gradien `T` tanpa aset gambar eksternal yang rentan patah/rusak (*no broken external images*).
  * **Sisi Tengah (Navigasi):** `Home` • `Destinations` • `Tours` • `Reviews` • `FAQ` • `Insights` (`text-on-surface-variant font-medium text-sm flex gap-6 hover:text-primary transition`).
  * **Sisi Kanan (Akun & Sesi):** Tombol primer `Sign In` yang memicu modal autentikasi interaktif dan berganti menjadi lencana profil anggota aktif (`Marcus Vance ▾`) lengkap dengan menu dropdown sesi.
* **Hero Editorial Headline (Rata Kiri):**
  ```html
  <div class="max-w-xl pt-12 pb-24">
    <h1 class="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
      Explore the <span class="font-serif italic font-bold">World</span><br>
      with Unforgettable<br>
      <span class="font-serif italic font-bold">Journeys</span>
    </h1>
    <p class="text-slate-600 text-sm sm:text-base mt-4 max-w-md leading-relaxed">
      Discover personalized trips tailored to your desires. Explore breathtaking destinations and create memories that last forever.
    </p>
  </div>
  ```
* **Floating Horizontal Search Console Card (High-Utility Engine):**
  * Kontainer: Terapung di batas bawah hero (`bg-surface rounded-2xl shadow-xl border border-border-subtle p-5 lg:p-6 max-w-7xl mx-auto -mt-16 relative z-30`).
  * **Struktur 3 Kolom Input Interaktif + 1 Tombol Aksi:**
    1. **Destination:** Input dengan **Quick-Pick Popover** berisi 8 destinasi terkurasi (*Positano, Grossglockner, Cinque Terre, Mykonos, Raja Ampat, Isle of Skye, Santorini, South Tyrol*) dengan tombol hapus cepat (`✕`).
    2. **Departure Date:** **Custom Bloosm/Travel4All Calendar Popover** (bukan datepicker bawaan browser) dengan navigasi bulan, penanda rentang tanggal, durasi malam otomatis (*7 Nights*), dan chip preset cepat (*Weekend 3N, 1 Week 7N, 2 Weeks 14N*).
    3. **Travelers & Rooms:** Popover steper dinamis untuk Kamar (1-9), Dewasa (1-20), dan Anak (0-10) dengan tombol `+`/`−`.
    4. **Action CTA:** Tombol `Explore Destination` dengan animasi loading, eksekusi live filter pada grid 8 kartu destinasi, strip umpan balik pencarian live, serta status empty-state.
---

### 4.2 Section 2: Tailored Travel Experiences (`#experiences-section`)

* **Visual Surface:** Latar belakang off-white halus (`#F8FAFC`).
* **Header Seksi (Dua Kolom Fleksibel):**
  * **Kiri:** Judul seksi dengan aksen serif:
    ```html
    <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
      Tailored Travel<br>
      <span class="font-serif italic font-bold">Experiences</span>
    </h2>
    ```
  * **Kanan:** Paragraf pengantar dan tautan interaktif:  
    *"Discover our curated selection of top-rated destinations and packages tailored to fulfill your wanderlust."* $\rightarrow$ Tautan `Explore All →` (`text-sky-600 font-bold text-xs hover:underline mt-2 inline-block`).
* **8-Card Destination Grid (2 Baris × 4 Kolom):**
  Setiap kartu memiliki rasio portrait 4:5 (`rounded-2xl bg-white border border-slate-100 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300`):
  * **Baris 1 (4 Kartu):**
    1. **Positano Coastline, Italy:** Foto tebing warna-warni tepi laut • Tag: `7 Days / 6 Nights` • Judul: `Positano Coastal Escape` • Harga: `Rp 24.500.000` / pax.
    2. **Scenic Highway Valley:** Foto jalan aspal membelah pegunungan • Tag: `5 Days / 4 Nights` • Judul: `Alpine Road Explorer` • Harga: `Rp 18.200.000` / pax.
    3. **Cinque Terre Cliffside:** Foto desa pesisir berbukit • Tag: `7 Days / 6 Nights` • Judul: `Mediterranean Sunset Charm` • Harga: `Rp 26.000.000` / pax.
    4. **Mykonos White Alley, Greece:** Foto lorong putih bermandikan bunga bugenvil • Tag: `6 Days / 5 Nights` • Judul: `Aegean Island Dream` • Harga: `Rp 22.800.000` / pax.
  * **Baris 2 (4 Kartu):**
    5. **Tropical Emerald Lagoon:** Foto berenang di laguna jernih • Tag: `4 Days / 3 Nights` • Judul: `Secret Island Sanctuary` • Harga: `Rp 14.500.000` / pax.
    6. **Mist Mountain Valley:** Foto lembah kabut hijau pegunungan • Tag: `5 Days / 4 Nights` • Judul: `Highland Wilderness Trek` • Harga: `Rp 16.800.000` / pax.
    7. **Santorini Caldera View:** Foto kubah putih menghadap laut biru • Tag: `6 Days / 5 Nights` • Judul: `Santorini Golden Romance` • Harga: `Rp 25.400.000` / pax.
    8. **Lake Boat Explorer:** Foto perahu kayu di danau tenang berlatar tebing kapur • Tag: `5 Days / 4 Nights` • Judul: `Alpine Glacial Journey` • Harga: `Rp 19.500.000` / pax.

---

### 4.3 Section 3: Easy Steps Secure Dream Tour (`#steps-section`)

* **Visual Surface:** Latar belakang putih dengan padding lapang (`py-16 sm:py-24`).
* **Layout Grid 2 Kolom:**
  * **Kolom Kiri (Value Pitch):**
    * Judul:
      ```html
      <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
        Easy Steps Secure<br>
        <span class="font-serif italic font-bold">Dream Tour</span>
      </h2>
      ```
    * Deskripsi: *"Booking your dream vacation has never been easier. Follow our straightforward three-step process to plan, customize, and embark on your journey."*
    * Tautan Aksi: `Learn More →` (`text-sky-600 font-bold text-xs hover:underline mt-4 inline-block`).
  * **Kolom Kanan (3 Langkah Terstruktur Berurutan):**
    * **Langkah 1:**
      * Lingkaran Angka: `1` (`w-10 h-10 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center shrink-0`).
      * Konten: Judul **Select Your Desired Destination** • Subteks *"Browse our rich selection of destinations and curated tour packages."*
    * **Langkah 2:**
      * Lingkaran Angka: `2` (`w-10 h-10 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center shrink-0`).
      * Konten: Judul **Customize & Schedule Details** • Subteks *"Choose dates, accommodation style, and personalized activities."*
    * **Langkah 3:**
      * Lingkaran Angka: `3` (`w-10 h-10 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center shrink-0`).
      * Konten: Judul **Complete Booking & Start Packing** • Subteks *"Secure your spot with instant confirmation and transparent payment."*

---

### 4.4 Section 4: What Our Travelers Say (`#testimonials-section`)

* **Visual Surface:** Latar belakang off-white (`#F8FAFC`).
* **Header Seksi:**
  * Judul:
    ```html
    <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
      What Our <span class="font-serif italic font-bold">Travelers</span><br>
      Say
    </h2>
    ```
  * Sub-deskripsi Kanan: *"Read honest stories and experiences from travelers who explored the world with us."*
* **Horizontal Carousel Card Grid (3 Kartu Testimoni Berdampingan):**
  Setiap kartu: `bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between`.
  * **Kutipan Ulasan (Quote Body):**
    `"Booking with Travel4All was the best decision we made for our anniversary trip to Italy. Every single detail from transport to local guides was flawless."`
  * **Profil Wisatawan (Bottom Row):**
    * Avatar Foto Bundar: Foto wajah traveler (`w-10 h-10 rounded-full object-cover`).
    * Nama & Asal: **Sarah Jenkins** • *London, UK* (`font-bold text-xs text-slate-900`).
    * Bintang Rating: `★★★★★` (`text-amber-500 text-xs flex gap-0.5`).

---

### 4.5 Section 5: Frequently Asked Questions (`#faq-section`)

* **Visual Surface:** Latar belakang putih bersih (`#FFFFFF`).
* **Header Seksi:**
  * Judul:
    ```html
    <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
      Frequently Asked<br>
      <span class="font-serif italic font-bold">Questions</span>
    </h2>
    ```
* **Kategori Pill Filter Bar:**
  Pill buttons horisontal:
  * `1` atau `All Questions` (Active: `bg-sky-600 text-white px-4 py-1.5 rounded-full text-xs font-bold`).
  * `Destinations` (`bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-xs font-semibold`).
  * `Tour Packages` (`bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-xs font-semibold`).
  * `Customization` (`bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-xs font-semibold`).
  * `Travel Insurance` (`bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-xs font-semibold`).
  * `Visa & Guidelines` (`bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-xs font-semibold`).
* **Accordion List (5 Baris dengan Garis Pembatas):**
  1. **Item 1 (Open State):**
     * Pertanyaan: `What is your refund policy on cancelled trips?`
     * Ikon: Panah atas / chevron up (`▲`).
     * Jawaban: *"We provide full refunds for cancellations made at least 14 days prior to departure. Custom tour fees may vary depending on local supplier terms."*
  2. **Item 2 (Closed State):**
     * Pertanyaan: `How early should I book my vacation package?` $\rightarrow$ Ikon chevron down (`▼`).
  3. **Item 3 (Closed State):**
     * Pertanyaan: `Can I customize an existing itinerary?` $\rightarrow$ Ikon chevron down (`▼`).
  4. **Item 4 (Closed State):**
     * Pertanyaan: `Is travel insurance included in the package?` $\rightarrow$ Ikon chevron down (`▼`).
  5. **Item 5 (Closed State):**
     * Pertanyaan: `What type of accommodation can I expect?` $\rightarrow$ Ikon chevron down (`▼`).

---

### 4.6 Section 6: Ready to Start Adventure Banner (`#cta-banner-section`)

* **Visual Surface:** Foto dramatis sudut pandang haluan perahu kayu (*wooden boat bow*) melintasi danau alpine berair hijau zamrud yang dikelilingi tebing pegunungan berkabut (seperti Danau Braies / Dolomites).
* **Overlay Teks Tengah:**
  ```html
  <div class="relative z-10 text-center max-w-xl mx-auto px-4 py-20">
    <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
      Ready to Start Your<br>
      <span class="font-serif italic font-bold">Adventure?</span>
    </h2>
    <p class="text-white/85 text-xs sm:text-sm mt-3 max-w-md mx-auto">
      Contact our travel experts today and let us craft your dream vacation down to the smallest detail.
    </p>
    <div class="mt-6 flex justify-center gap-3">
      <button class="bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg transition">
        Book Destination Now
      </button>
    </div>
  </div>
  ```

---

### 4.7 Section 7: Travel Insights & Tips (`#blog-section`)

* **Visual Surface:** Latar belakang off-white halus (`#F8FAFC`).
* **Header Seksi:**
  * Judul:
    ```html
    <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
      Travel <span class="font-serif italic font-bold">Insights</span> &amp; Tips
    </h2>
    ```
  * Sub-deskripsi Kanan: *"Stay inspired with travel advice, packing guides, and hidden gem recommendations from our global scouts."*
* **3 Artikel Grid Kolom:**
  1. **Artikel 1:** Foto pemandangan awan matahari terbit • Judul: `10 Secret Spots in the Alps You Never Knew Existed` • Tanggal: `October 12, 2024`.
  2. **Artikel 2:** Foto mobil camper van di jalan gurun lembah batu merah • Judul: `The Ultimate Road Trip Checklist for Solo Explorers` • Tanggal: `October 08, 2024`.
  3. **Artikel 3:** Foto balon udara terbang di atas lembah Cappadocia • Judul: `How to Choose the Perfect Hot Air Balloon Tour` • Tanggal: `September 29, 2024`.

---

### 4.8 Section 8: Comprehensive Footer (`#footer-section`)

* **Visual Surface:** Latar belakang bersih `#FFFFFF` dengan batas atas lembut `border-t border-slate-200 pt-12 pb-8 px-6 sm:px-12 lg:px-20`.
* **Struktur 4 Kolom Navigasi:**
  * **Kolom 1 (Brand Profile):**
    * Logo: **Travel4All**
    * Deskripsi Perusahaan: *"Travel4All is your premier digital travel concierge, curating bespoke tours and unscripted adventures worldwide."*
    * Social Media Icons: Instagram, Facebook, X (Twitter), LinkedIn, YouTube.
  * **Kolom 2 (Company):** `About Us`, `Careers`, `Blog & Press`, `Partners`.
  * **Kolom 3 (Destinations):** `Europe Tours`, `Asia Pacific`, `Americas`, `Middle East`.
  * **Kolom 4 (Legal & Support):** `Privacy Policy`, `Terms of Service`, `Cookie Policy`, `Help Center`.
* **Bottom Baseline:**
  * Kiri: `© 2024 Travel4All. All rights reserved.`
  * Kanan: Tautan legal ringkas.

---

## 5. Component Style Library & Tailwind v4 Utility Mapping

### 5.1 Primary Cyan/Blue Action Button
```html
<button class="bg-sky-600 hover:bg-sky-500 active:scale-95 text-white font-sans font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition duration-200 flex items-center justify-center gap-2">
  Explore Destination
</button>
```

### 5.2 Numbered Step Circle Badge
```html
<div class="w-10 h-10 rounded-full bg-sky-600 text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-xs">
  1
</div>
```

### 5.3 Horizontal Search Bar Input Item
```html
<div class="px-4 py-2 border-r border-slate-200 last:border-r-0 flex-1">
  <span class="block text-[11px] font-bold uppercase tracking-wider text-slate-400">Location</span>
  <div class="flex items-center gap-2 mt-1">
    <svg class="w-4 h-4 text-sky-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
    </svg>
    <input type="text" placeholder="Where are you going?" class="w-full text-xs sm:text-sm font-semibold text-slate-900 bg-transparent focus:outline-none" />
  </div>
</div>
```

### 5.4 Tailored Destination Card
```html
<article class="bg-white rounded-2xl border border-slate-100 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between">
  <div class="relative h-48 overflow-hidden">
    <img src="..." alt="..." class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
    <span class="absolute bottom-2.5 left-2.5 bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold px-2.5 py-1 rounded-md">
      7 Days / 6 Nights
    </span>
  </div>
  <div class="p-4">
    <h3 class="font-bold text-sm text-slate-900">Positano Coastal Escape</h3>
    <div class="mt-3 flex justify-between items-baseline pt-2 border-t border-slate-100">
      <span class="text-[11px] text-slate-400">Starts from</span>
      <span class="font-extrabold text-sm text-sky-600 tabular-nums">Rp 24.500.000</span>
    </div>
  </div>
</article>
```

---

## 6. Implementation Checklist & Code Contract

- [x] **Brand Travel4All Diterapkan Menyeluruh** (Header, hero, konten narasi, dan footer).
- [x] **Fokus Khusus Slicing Desktop UI** (Memisahkan area desktop dari versi mobile screenshot).
- [x] **Pola Hybrid Italic Serif Terdokumentasi** (*"World"*, *"Journeys"*, *"Experiences"*, *"Dream Tour"*, *"Travelers"*, *"Questions"*, *"Adventure?"*, *"Insights"*).
- [x] **8 Seksi Lengkap Terarsitektur** (Hero, 8-Card Experiences Grid, 3-Step Process, Testimonials, FAQ Accordion dengan Filter, Boat Bow Adventure Banner, Blog Articles, dan Comprehensive Footer).
- [x] **Format Semantik Tailwind v4 Ready** (`@tailwindcss/browser@4` + Inter & Cormorant Garamond / Playfair Display).