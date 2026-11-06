# DESIGN.md — Sistem Desain & Arsitektur UI Website Utama ORTASYS (Surface S1)

> **Dokumen Spesifikasi Brand Guideline, Arsitektur Sistem Desain Dua-Tingkat, & Blueprint Website Utama**  
> **Brand:** **ORTASYS** (*"Empowering Your Travel Business Globally"*)  
> **Target Surface:** **S1 — Situs Utama Ortasys (`ortasys.com/en`)** + Kerangka Sistem Token Berlapis untuk **S2–S5**  
> **Posisi Produk:** B2B2C Travel Distribution Engine, Multi-Supplier Aggregator, & White-Label Agent Storefront System  
> **Kepatuhan Konten:** 100% Patuh pada Aturan Bukti PRD (`[F]` Fakta Terverifikasi, `[A]` Struktur Asumsi Kerja, Tanpa Klaim Fiktif `[?]`)  
> **Stack Rekomendasi:** HTML5 / Next.js + Tailwind CSS v4 + CSS Custom Properties (Layered Tokens)  

---

## 1. Executive Summary & Filosofi Brand Ortasys

### 1.1 Identitas & Posisi Produk
Berdasarkan riset produk pada `PRD.md`, **Ortasys** bukanlah situs pemesanan wisata untuk wisatawan umum (bukan OTA ritel seperti Traveloka/Booking.com), melainkan **infrastruktur dan mesin distribusi perjalanan B2B** yang memberdayakan dua sisi ekosistem industri:
1. **Untuk Agen Perjalanan (*For Travel Agents*):** Portal B2B untuk mencari, memesan, dan merangkai paket perjalanan (*Build your trip*) dari banyak supplier global sekaligus, lengkap dengan tarif *real-time*, dompet digital (*wallet*), settlement, serta **fasilitas situs toko online bermerek agen sendiri (*White-Label Storefront*)**.
2. **Untuk Properti & Hotel (*For Hotels*):** Satu saluran distribusi terpadu (*single distribution channel*) untuk menjangkau jaringan agen ritel dengan pengelolaan *allotment* dan sinkronisasi ketersediaan.

### 1.2 Karakter Brand (Brand DNA): *"Architectural B2B Precision"*
Karena Ortasys memadukan agregasi API multi-supplier, settlement pembayaran perbankan (DOKU & SNAP BI), dan mesin toko online agen, arah visualnya harus memancarkan **kepercayaan institusional, kejelasan teknis, dan kecepatan sistem**:
* **Trustworthy & Institutional:** Menggunakan palet dasar **Obsidian Slate** dan **Ortasys Trust Cobalt** yang memberi kesan kokoh layaknya infrastruktur fintech dan enterprise SaaS modern (seperti Stripe, Linear, atau Duffel).
* **Dual-Tier Ready (Siap Dua-Tingkat):** Antarmuka Ortasys (S1, S2, S3, S5) memiliki identitas tegas yang konsisten, sementara komponen fungsionalnya dirancang dengan **Token Berlapis (*Layered Tokens*)** agar dapat berubah kulit menjadi merek agen apa pun di permukaan Storefront (S4).
* **Honest & Grounded (Kejujuran Data):** Seluruh narasi dan ilustrasi UI di website utama hanya mengangkat fakta terverifikasi (`[F]`). Setiap mockup antarmuka diberi penanda eksplisit sebagai *Simulasi / Ilustrasi Sistem* agar tidak mengecoh calon mitra.

---

## 2. Arsitektur Lima Permukaan UI & Sistem Token Berlapis

Sesuai **Prinsip 7.1 & 7.3 pada PRD**, Ortasys memiliki 5 permukaan UI yang dibagi menjadi **2 Tingkat Desain**:

| Tingkat Desain | Kode | Nama Permukaan | Merek Tampil | Target Pengguna | Sifat Tema & Token |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Tingkat 1: Ortasys Core UI** | **S1** | **Situs Utama (`ortasys.com`)** | **Ortasys** | Calon Agen & Hotel | **Tetap (Locked Brand)** — Memakai token brand Ortasys |
| **Tingkat 1: Ortasys Core UI** | **S2** | **Portal Agen (B2B Workspace)** | **Ortasys** | Staf & Pemilik Agen | **Tetap** — Menampilkan harga Net, margin, wallet, & settlement |
| **Tingkat 1: Ortasys Core UI** | **S3** | **Extranet Hotel** | **Ortasys** | Pengelola Hotel | **Tetap** — Mengelola allotment, tarif, dan koneksi channel |
| **Tingkat 1: Ortasys Core UI** | **S5** | **Back-Office Admin** | **Ortasys** | Tim Internal Ortasys | **Tetap** — Onboarding mitra, manajemen tarif, & verifikasi |
| **Tingkat 2: Themeable UI** | **S4** | **Storefront Agen (B2C)** | **Merek Agen** *(contoh: Bagus Travel)* | Wisatawan Akhir | **Dinamis per Agen** — Kerangka komponen tetap, kulit/warna/logo/font mengikuti token agen. **Harga Net dilarang tampil.** |

### 2.1 Arsitektur CSS Variables (Layered Design Tokens)
Untuk mendukung pemisahan di atas, seluruh komponen tidak boleh menggunakan *hardcoded hex color*, melainkan membaca variabel semantik:

```css
:root {
  /* ==========================================
   * LAYER 1: CORE TOKENS (Tetap di S1 - S5)
   * Mengatur jarak, radius struktural, status, & kontras
   * ========================================== */
  --radius-xs: 0.375rem;   /* 6px - Badge & pill kecil */
  --radius-sm: 0.5rem;     /* 8px - Input & tombol standar */
  --radius-md: 0.75rem;    /* 12px - Kartu data & panel */
  --radius-lg: 1rem;       /* 16px - Bento container & modal */
  --radius-xl: 1.5rem;     /* 24px - Showcase frame S1 */
  --radius-full: 9999px;   /* Pill tags */

  --status-success-bg: #ECFDF5;
  --status-success-text: #047857;
  --status-success-border: #A7F3D0;

  --status-warning-bg: #FFFBEB;
  --status-warning-text: #B45309;
  --status-warning-border: #FDE68A;

  --status-danger-bg: #FEF2F2;
  --status-danger-text: #B91C1C;
  --status-danger-border: #FECACA;

  /* ==========================================
   * LAYER 2: ORTASYS BRAND TOKENS (Aktif di S1, S2, S3, S5)
   * Di S4 (Storefront), blok ini di-override oleh JSON konfigurasi Agen
   * ========================================== */
  --brand-primary: #1D4ED8;        /* Ortasys Trust Cobalt */
  --brand-primary-hover: #1E40AF;  /* Deep Royal Cobalt */
  --brand-primary-subtle: #EFF6FF; /* Ice Cobalt Tint */
  --brand-secondary: #0F172A;      /* Obsidian Slate */
  --brand-accent: #0D9488;         /* Mandalika Horizon Teal */
  --brand-accent-subtle: #F0FDFA;  /* Mint Surface Tint */

  --surface-canvas: #F8FAFC;       /* Alabaster Cool White */
  --surface-card: #FFFFFF;         /* Pure White */
  --surface-elevated: #F1F5F9;     /* Slate 100 */
  --surface-dark: #090D16;         /* Deep Midnight Infrastructure */
  --surface-dark-card: #111827;    /* Dark Slate Card */

  --text-primary: #0F172A;         /* Slate 900 - Kontras 17.4:1 */
  --text-secondary: #475569;       /* Slate 600 - Kontras 7.5:1 */
  --text-muted: #64748B;           /* Slate 500 - Kontras 4.6:1 (Lulus WCAG AA) */
  --text-on-dark: #F8FAFC;         /* Putih bersih di atas surface gelap */
  --text-on-brand: #FFFFFF;        /* Putih di atas tombol primer */

  --border-subtle: #E2E8F0;        /* Slate 200 */
  --border-strong: #CBD5E1;        /* Slate 300 */
  --border-dark: #1E293B;          /* Slate 800 */

  --font-display: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

---

## 3. Brand Guidelines Ortasys (Logo, Warna, & Tipografi)

### 3.1 Sistem Logo & Wordmark OrtasYS
* **Konsep Simbol (*The Convergence Node*):** Tiga bilah geometris yang saling terhubung membentuk huruf **"O"** heksagonal dinamis—melambangkan tiga lapisan sistem Ortasys: **Lapisan Supplier (Hulu)**, **Lapisan Portal Agen (Inti B2B)**, dan **Lapisan Storefront (Hilir B2C)**.
* **Wordmark:** Ditulis dalam huruf kapital tegas **`ORTASYS`** menggunakan *Plus Jakarta Sans ExtraBold (800)* dengan *letter-spacing* `-0.03em`.
* **Variasi Penggunaan Logo:**
  * **Primary Light Mode:** Simbol biru `#1D4ED8` + aksen teal `#0D9488`, teks `ORTASYS` berwarna `#0F172A`.
  * **Primary Dark Mode:** Simbol biru terang `#3B82F6` + aksen `#14B8A6`, teks `ORTASYS` berwarna `#FFFFFF`.
  * **Monochrome Badge:** Digunakan pada watermark voucher atau dokumentasi teknis.
* **Aturan Ruang Bebas (*Clear Space*):** Minimal sebesar tinggi huruf **"O"** di keempat sisi logo.

### 3.2 Palet Warna Resmi (Color System & WCAG Contrast)

| Kategori | Nama Warna | Hex Code | Tailwind Class | Rasio Kontras & Peran UI |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Brand** | **Ortasys Trust Cobalt** | `#1D4ED8` | `bg-blue-700` / `text-blue-700` | **7.1:1** terhadap putih (Lulus WCAG AAA). Warna tombol utama `"Request Access"`, tautan aktif, dan fokus input. |
| **Primary Hover** | **Deep Royal Cobalt** | `#1E40AF` | `hover:bg-blue-800` | State hover dan active pada tombol CTA utama. |
| **Secondary Dark** | **Obsidian Midnight** | `#090D16` | `bg-[#090D16]` | Latar belakang blok arsitektur teknis, hero preview frame, dan footer utama. |
| **Brand Accent** | **Mandalika Horizon Teal** | `#0D9488` | `bg-teal-600` / `text-teal-600` | Aksen sekunder yang merefleksikan akar hospitality kepulauan & konektivitas live; digunakan untuk indikator *Real-Time* dan highlight fitur. |
| **Canvas Light** | **Alabaster Slate** | `#F8FAFC` | `bg-slate-50` | Latar belakang utama halaman S1 yang bersih dan tidak menyilaukan mata. |
| **Surface Card** | **Pure White** | `#FFFFFF` | `bg-white` | Permukaan kartu fitur, tabel perbandingan, dan form pencarian. |
| **Text Primary** | **Obsidian Ink** | `#0F172A` | `text-slate-900` | **17.4:1** terhadap putih. Untuk seluruh judul (H1–H4) dan label penting. |
| **Text Secondary** | **Slate Body** | `#475569` | `text-slate-600` | **7.5:1** terhadap putih. Untuk paragraf penjelasan dan deskripsi fitur. |
| **Status Coming Soon**| **Amber Warm Badge** | `#B45309` | `bg-amber-50 text-amber-700` | Khusus untuk pelabelan wajib **`Coming soon`** pada integrasi **GuestPro** sesuai aturan PRD. |

### 3.3 Tipografi & Skala Hirarki

Ortasys menggunakan kombinasi tiga keluarga huruf dari Google Fonts yang menyeimbangkan wibawa korporat B2B dan presisi teknis:

1. **Display & Heading (`Plus Jakarta Sans` — Weight 600, 700, 800):**
   Karakter geometris modern dengan bukaan huruf lebar, memberikan kesan teknologi finansial dan distribusi masa kini.
2. **Body & UI Controls (`Inter` — Weight 400, 500, 600):**
   Dirancang khusus untuk keterbacaan antarmuka padat, form pencarian kamar, dan tabel tarif. Wajib mengaktifkan `font-variant-numeric: tabular-nums` pada setiap tampilan harga, jumlah kamar, dan komisi.
3. **Technical & API Labels (`JetBrains Mono` — Weight 500):**
   Digunakan secara selektif untuk badge integrasi teknis (`SNAP BI`, `DOKU`, `Live Price Check`, `B2B / B2C Layer`).

**Skala Tipografi Desktop & Mobile (Fluid Scale):**
* **Hero Headline (H1):** `text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08]`
* **Section Headline (H2):** `text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15]`
* **Subsystem Title (H3):** `text-xl sm:text-2xl font-bold tracking-snug leading-[1.25]`
* **Card Title (H4):** `text-base sm:text-lg font-semibold leading-snug`
* **Body Large (Lead):** `text-base sm:text-lg text-slate-600 leading-relaxed`
* **Body Standard:** `text-sm sm:text-base text-slate-600 leading-relaxed`
* **Caption / Eyebrow Badge:** `text-xs font-bold uppercase tracking-widest`

**Snippet Integrasi Google Fonts:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet">
```

---

## 4. Aturan Ketat Kepatuhan Konten & Anti-Halusinasi (Berdasarkan PRD Bagian 9)

Desainer dan developer yang mengimplementasikan website utama Ortasys **WAJIB** mematuhi matriks di bawah ini:

| Status | Elemen / Klaim Konten | Aturan Implementasi di UI |
| :--- | :--- | :--- |
| **WAJIB / BOLEH DIPAKAI `[F]`** | Tagline Utama: *"Empowering Your Travel Business Globally"* | Gunakan verbatim sebagai pesan utama di Hero Section atau sub-headline utama. |
| **WAJIB / BOLEH DIPAKAI `[F]`** | 4 Pilar Nilai: **Global**, **Real-Time**, **Multi-Supplier**, **Secure** | Tampilkan sebagai 4 kartu pilar nilai dengan penjelasan sesuai sumber resmi. |
| **WAJIB / BOLEH DIPAKAI `[F]`** | Daftar Mitra & Integrasi: **RateHawk (ETG)**, **Cloudbeds**, **MyAllocator**, **AITTA**, **DOKU**, **SNAP BI** | Tampilkan pada *Partner & Integration Strip*. |
| **WAJIB BERLABEL KHUSUS `[F]`** | Integrasi **GuestPro** | **Wajib** menyertakan badge **`Coming soon`** tepat di sebelah nama/logo GuestPro. Dilarang menulisnya seolah sudah aktif penuh. |
| **WAJIB / BOLEH DIPAKAI `[F]`** | Dua Kelompok Manfaat: **For Travel Agents** & **For Hotels** | Buat seksi khusus dua jalur (*Dual Value Proposition*) untuk Agen dan Hotel. |
| **WAJIB / BOLEH DIPAKAI `[F]`** | Call-to-Action Utama: **`Request Access`** | Gunakan `"Request Access"` sebagai label tombol CTA primer di Navbar, Hero, dan Footer. |
| **BOLEH SEBAGAI DEMO `[F]`** | Contoh Storefront Agen: **Bagus Travel** (`bagustravel.demostorefront.ortasys.com`) | Gunakan struktur nyata Bagus Travel (menu *Home, Tours, Things to do, Hotels, Build your trip*, form *Hotels/Activities*, maks 30 malam, kamar 1–9, dewasa 1–20, anak 0–20, janji *"Every price is checked live when you ask for it"*) untuk mendemonstrasikan fitur Storefront Agen. |
| **DILARANG KERAS `[?]`** | Klaim angka tanpa bukti: *"1.000.000+ hotel"*, *"190+ negara"*, *"50+ supply partners"*, *"99,98% API uptime SLA"*, *"0,42 dtk sinkron API"*, *"PCI-DSS"*, *"All Systems Operational"*, atau alamat kantor fiktif di Jakarta/Bali | **JANGAN PERNAH** memasukkan klaim ini ke dalam teks, badge, maupun footer. Jika menampilkan kartu harga di ilustrasi UI, tambahkan watermark/label jelas: **`Data Ilustrasi Antarmuka`**. |

---

## 5. Struktur & Blueprint Slicing Website Utama Ortasys (`ortasys.com` — Surface S1)

Halaman utama dirancang untuk menjelaskan secara jernih bagaimana Ortasys menghubungkan **Supplier/Hotel**, **Agen Perjalanan**, dan **Storefront Wisatawan** dalam satu ekosistem.

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ SECTION 1: STICKY TOP NAVBAR (Logo, Nav Links, Language EN/ID, Request Access)│
├──────────────────────────────────────────────────────────────────────────────┤
│ SECTION 2: HERO SECTION ("Empowering Your Travel Business Globally" +        │
│            Interactive 3-Layer Architecture Visualizer: Supplier→Agent→Store)│
├──────────────────────────────────────────────────────────────────────────────┤
│ SECTION 3: VERIFIED INTEGRATION & PARTNER STRIP                              │
│            (RateHawk/ETG, Cloudbeds, MyAllocator, GuestPro [Coming soon],    │
│             DOKU, SNAP BI, AITTA)                                            │
├──────────────────────────────────────────────────────────────────────────────┤
│ SECTION 4: THE 4 CORE PILLARS BENTO GRID                                     │
│            (Global • Real-Time • Multi-Supplier • Secure)                    │
├──────────────────────────────────────────────────────────────────────────────┤
│ SECTION 5: DUAL AUDIENCE WORKSPACE ("For Travel Agents" & "For Hotels")      │
├──────────────────────────────────────────────────────────────────────────────┤
│ SECTION 6: WHITE-LABEL STOREFRONT ENGINE SHOWCASE (S4 Live Preview)          │
│            (Menampilkan kapabilitas toko online agen dengan studi kasus      │
│             nyata struktur demo "Bagus Travel" + Theme Token Switcher)       │
├──────────────────────────────────────────────────────────────────────────────┤
│ SECTION 7: ONBOARDING & "REQUEST ACCESS" CONVERSION SECTION                  │
│            (Form Permintaan Akses untuk Agen Perjalanan atau Hotel)          │
├──────────────────────────────────────────────────────────────────────────────┤
│ SECTION 8: INSTITUTIONAL FOOTER (Navigasi Ekosistem, Bahasa, Hak Cipta)      │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

### 5.1 Section 1: Sticky Top Navigation Bar (`#navbar`)
* **Tampilan Visual:** Tinggi `h-20`, latar belakang `bg-white/85 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-50`.
* **Susunan Elemen:**
  * **Kiri:** Logo simbol + Wordmark `ORTASYS` + pill tag kecil `B2B Travel Platform`.
  * **Tengah (Menu Navigasi Desktop):**
    * `Platform Pillars` (scroll ke 4 pilar)
    * `For Travel Agents` (scroll ke solusi agen)
    * `For Hotels` (scroll ke solusi hotel)
    * `Agent Storefront` (scroll ke demo storefront S4)
    * `Integrations` (scroll ke ekosistem mitra)
  * **Kanan (Kontrol & Aksi):**
    * Pemilih Bahasa (`EN` / `ID`) — mendukung fakta bahwa rute resmi memakai `/en`.
    * Tautan sekunder: `Partner Login` (`text-sm font-semibold text-slate-700 hover:text-blue-700`).
    * Tombol CTA Utama: **`Request Access`** (`bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow-xs transition`).

---

### 5.2 Section 2: Hero Section & 3-Layer System Visualizer (`#hero`)
* **Tujuan:** Menyampaikan dengan segera proposisi nilai utama Ortasys tanpa jargon kosong, sekaligus memperlihatkan perbedaan Ortasys sebagai sistem 3-lapisan.
* **Kolom Kiri (Copywriting & CTA):**
  * **Eyebrow Badge:** `B2B TRAVEL DISTRIBUTION & STOREFRONT SYSTEM` (`bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase`).
  * **Headline Utama (`[F]`):**
    ```html
    <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
      Empowering Your Travel Business <span class="text-blue-700">Globally.</span>
    </h1>
    ```
  * **Sub-headline (`[F]` + `[A]`):**
    *"Satu infrastruktur terpadu yang menghubungkan inventori hotel multi-supplier secara real-time, portal pemesanan & dompet agen B2B, hingga situs toko online (storefront) bermerek agen Anda sendiri."*
  * **Baris CTA:**
    * Tombol Primer: **`Request Access →`** (`bg-blue-700 hover:bg-blue-800 text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-md`).
    * Tombol Sekunder: **`Explore Agent Storefront Demo`** (`bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 px-6 py-3.5 rounded-xl font-semibold text-sm`).
* **Kolom Kanan / Bawah (Interactive 3-Layer System Diagram — Berlabel `Ilustrasi Arsitektur Sistem`):**
  * Visualisasi interaktif 3 kartu berlapis yang memperlihatkan alur kerja Ortasys:
    1. **Layer 1 — Multi-Supplier Aggregation:** Menampilkan kartu koneksi dari **RateHawk / ETG**, **Cloudbeds**, **MyAllocator**, dan **GuestPro (`Coming soon`)** + Direct Hotel Allotment.
    2. **Layer 2 — Ortasys Agent Portal (B2B):** Menampilkan antarmuka pencarian agen, penggabungan paket multi-supplier (*Build your trip*), dompet agen (*Wallet & Settlement*), dan pembayaran terintegrasi **DOKU** & **SNAP BI**.
    3. **Layer 3 — White-Label Agent Storefront (B2C):** Menampilkan pratinjau toko online milik agen (contoh nyata: *"Private journeys by Bagus Travel"*) tempat wisatawan memesan dengan harga jual agen.

---

### 5.3 Section 3: Verified Partner & Integration Strip (`#integrations`)
* **Latar Belakang:** `bg-white border-y border-slate-200 py-10`.
* **Judul Strip:** `INTEGRATED WITH GLOBAL INVENTORY SUPPLIERS, PAYMENT GATEWAYS & INDUSTRY PARTNERS` (`text-xs font-mono font-medium uppercase tracking-widest text-slate-500 text-center mb-6`).
* **Daftar Mitra Resmi (`[F]`):**
  Ditampilkan dalam grid logo/badge monokrom elegan yang berubah warna saat di-hover, dibagi menjadi 3 kelompok jelas:
  1. **Connectivity & Inventory Suppliers:**
     * **RateHawk** (Emerging Travel Group / ETG) — *Active*
     * **Cloudbeds** — *Active*
     * **MyAllocator** — *Active*
     * **GuestPro** — **Wajib dilengkapi pill badge:** `<span class="ml-1.5 bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full">Coming soon</span>`
  2. **Payment & Banking Infrastructure:**
     * **DOKU** — *Payment Gateway*
     * **SNAP BI** — *Standar Nasional Open API Pembayaran Bank Indonesia*
  3. **Ecosystem & Alliance:**
     * **AITTA** — *Industry Partner*

---

### 5.4 Section 4: The 4 Core Pillars Bento Grid (`#pillars`)
* **Header Seksi:**
  * Eyebrow: `CORE CAPABILITIES`
  * Judul: **Empat Pilar Distribusi Perjalanan Modern**
* **Susunan 4 Kartu Bento (100% Grounded pada 4 poin fakta `ortasys.com/en` `[F]`):**

| Kartu | Judul Pilar `[F]` | Deskripsi & Bukti Fungsional `[F]` | Aksen Visual Komponen |
| :--- | :--- | :--- | :--- |
| **Pilar 1** | **Global** | Akses ke jaringan inventori hotel internasional melalui integrasi **RateHawk** dan **ETG (Emerging Travel Group)**, dipadukan dengan properti pilihan. | Ilustrasi node konektivitas global RateHawk & ETG ke katalog agen. |
| **Pilar 2** | **Real-Time** | Tarif dan ketersediaan kamar diperiksa secara langsung (*live rates & availability*) saat dicari—menghindari proses konfirmasi manual yang lambat. | Badge indikator `"Every price is checked live when you ask for it"` dengan animasi pulse hijau/teal. |
| **Pilar 3** | **Multi-Supplier** | Menggabungkan berbagai sumber pasokan (**RateHawk**, **MyAllocator**, **Cloudbeds**, dan **GuestPro** *[Coming soon]*) ke dalam satu layar pencarian dan pemesanan. | Diagram penggabungan beberapa sumber inventori menjadi satu hasil pencarian terpadu. |
| **Pilar 4** | **Secure** | Transaksi bisnis, pengisian dompet agen (*wallet*), dan settlement pembayaran diproses secara aman melalui integrasi **DOKU** dan standar **SNAP BI**. | Badge arsitektur pembayaran terverifikasi `DOKU` + `SNAP BI` & alur settlement otomatis. |

---

### 5.5 Section 5: Dual Value Proposition — "For Travel Agents" & "For Hotels" (`#solutions`)
* **Konsep Layout:** Dua panel berdampingan (*Split-Screen Architectural Cards*) atau *Interactive Tab Switcher* yang memberikan ruang seimbang bagi dua target pengguna utama di S1.

#### Panel A: For Travel Agents (`#for-agents`)
* **Badge:** `FOR TRAVEL AGENTS (B2B & B2B2C)`
* **Headline:** **Satu Portal untuk Mencari, Merangkai Paket, dan Menjual Lewat Merek Anda Sendiri**
* **Poin Manfaat Utama (`[F]`):**
  1. **Pencarian Multi-Supplier Tanpa Repot:** Akses tarif hotel dari berbagai supplier dalam satu layar tanpa perlu menghubungi properti satu per satu.
  2. **Merangkai Paket (*Build Your Trip*):** Gabungkan akomodasi, tur, dan aktivitas ke dalam satu rencana perjalanan terpadu untuk klien Anda.
  3. **Dompet Agen & Settlement Terintegrasi:** Kelola saldo transaksi, pembayaran instan via DOKU/SNAP BI, dan penerbitan voucher bermerek agen.
  4. **Situs Toko Online Bermerek Sendiri (*Agent Storefront*):** Miliki website pemesanan sendiri untuk pelanggan akhir (wisatawan) di atas mesin Ortasys.
* **CTA Panel A:** **`Request Agent Access →`**

#### Panel B: For Hotels (`#for-hotels`)
* **Badge:** `FOR HOTELS & PROPERTIES (SUPPLY SIDE)`
* **Headline:** **Jangkau Jaringan Agen Perjalanan Ritel Melalui Satu Saluran Distribusi**
* **Poin Manfaat Utama (`[F]`):**
  1. **Satu Pintu ke Jaringan Agen:** Distribusikan inventori kamar properti Anda langsung ke jaringan agen perjalanan yang terhubung di ekosistem Ortasys.
  2. **Pengelolaan Allotment & Ketersediaan:** Atur kuota kamar (*allotment*) dan ketersediaan secara terpusat dengan konfirmasi pemesanan otomatis.
  3. **Konektivitas Channel Manager:** Terhubung melalui ekosistem *channel manager* dan PMS mitra (Cloudbeds, MyAllocator, serta GuestPro *[Coming soon]*).
  4. **Settlement yang Transparan:** Kepastian pembayaran dan pencatatan reservasi B2B yang rapi.
* **CTA Panel B:** **`Partner Your Property →`**

---

### 5.6 Section 6: White-Label Storefront Showcase — "Satu Mesin, Banyak Merek Agen" (`#storefront-showcase`)
* **Mengapa Seksi Ini Krusial:** Sesuai PRD Bagian 2 & 6, pembeda utama Ortasys Generasi 2 adalah kemampuan menyediakan **Storefront Agen (S4)**. Seksi di S1 ini mendemonstrasikan bagaimana mesin Ortasys bekerja di balik layar toko online agen.
* **Komponen Interaktif di Halaman S1 (*Interactive Theme Switcher Preview*):**
  Pengunjung website `ortasys.com` dapat mengklik tombol pemilih tema di atas mockup untuk melihat bagaimana **kerangka UI yang sama** berubah tampilan untuk agen yang berbeda:
  * **Preset 1 (Contoh Fakta Demo `[F]`): Bagus Travel** — Menampilkan judul `"Private journeys by Bagus Travel"`, palet elegan hangat, menu `Home`, `Tours`, `Things to do`, `Hotels`, `Build your trip`.
  * **Preset 2 (Simulasi Tema Agen B): Nusantara Tropika Tours** — Palet Emerald Resort & tipografi serif modern.
  * **Preset 3 (Simulasi Tema Agen C): Metro Bisnis Travel** — Palet Corporate Navy & tata letak ringkas.
* **Spesifikasi Nyata Komponen Form Pencarian di dalam Pratinjau Storefront (`[F]`):**
  * **Tab Kategori:** `Hotels` | `Activities`
  * **Input Field 1:** Destination or Hotel Name
  * **Input Field 2:** Check-in & Check-out Dates *(Validasi sistem: maksimal **30 malam**; harga tampil live setelah tanggal dipilih)*
  * **Input Field 3:** Guests & Rooms Picker:
    * Rooms: `1` s/d `9` kamar
    * Adults per room: `1` s/d `20` dewasa
    * Children per room: `0` s/d `20` anak
    * *Catatan sistem:* Semua kamar diasumsikan memiliki komposisi tamu yang setara.
  * **Micro-Copy Janji Produk (`[F]`):**
    > *"Every price is checked live when you ask for it."*
  * **Blok Keunggulan Storefront (`Why travel with us` `[F]`):**
    1. *Local Expertise & Curated Selection* (Pengetahuan lokal)
    2. *Live Transparent Pricing* (Harga dicek langsung saat diminta)
    3. *Dedicated Travel Assistance* (Bantuan perjalanan)
* **Penjelasan Keamanan B2B2C (`[A]`):**
  Dilengkapi callout kecil di samping pratinjau: *"Proteksi Margin B2B2C: Harga Net di Portal Agen (S2) terisolasi penuh dan tidak pernah bocor ke tampilan Storefront Wisatawan (S4)."*

---

### 5.7 Section 7: Onboarding & "Request Access" Conversion Section (`#request-access`)
* **Latar Belakang:** Kartu gelap premium `bg-[#090D16] text-white rounded-3xl p-8 sm:p-14 border border-slate-800 shadow-2xl`.
* **Struktur 2 Kolom:**
  * **Kolom Kiri:**
    * Headline: **Siap Mengembangkan Bisnis Perjalanan Anda Bersama Ortasys?**
    * Sub-teks: Pilih peran bisnis Anda (Agen Perjalanan atau Hotel/Properti) untuk menjadwalkan onboarding dan mendapatkan akses ke platform.
    * Ringkasan 3 Langkah Onboarding:
      1. **Kirim Permintaan Akses** (*Request Access* sesuai profil bisnis).
      2. **Verifikasi & Konfigurasi Akun** (Pengaturan akun portal agen / storefront atau koneksi inventori hotel).
      3. **Mulai Transaksi Secara Live** (Akses tarif real-time dan pembayaran via DOKU / SNAP BI).
  * **Kolom Kanan (Form `Request Access`):**
    * **Pilihan Peran (Radio Pill):** `[ Saya Agen Perjalanan ]` | `[ Saya Pengelola Hotel ]`
    * **Field Input (dengan `<label>` eksplisit di atas input):**
      * Nama Lengkap (`Full Name`)
      * Nama Perusahaan / Agen / Properti (`Company or Property Name`)
      * Email Bisnis (`Work Email`)
      * Nomor WhatsApp / Telepon (`Phone / WhatsApp`)
      * Kebutuhan Utama (Dropdown: *Akses Portal B2B Agen*, *Pembuatan White-Label Storefront*, *Distribusi Inventori Hotel*, *Lainnya*)
    * **Tombol Submit:** **`Request Access`** (`w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition`)

---

### 5.8 Section 8: Institutional Footer (`#footer`)
* **Latar Belakang:** `bg-[#090D16] text-slate-400 border-t border-slate-800/80 py-16`.
* **4 Kolom Navigasi:**
  1. **Brand & Positioning:** Logo `ORTASYS`, tagline *"Empowering Your Travel Business Globally"*, indikator bahasa (`English` / `Bahasa Indonesia`).
  2. **Platform Surfaces:** `Agent Portal (B2B)`, `White-Label Storefront`, `Hotel Extranet`, `Build Your Trip`.
  3. **Connectivity & Partners:** `RateHawk / ETG`, `Cloudbeds`, `MyAllocator`, `GuestPro (Coming soon)`, `DOKU & SNAP BI`, `AITTA`.
  4. **Access & Support:** `Request Access`, `Partner Login`, `Contact Team`, `Privacy & Terms`.
* **Catatan Kepatuhan PRD:** Tidak mencantumkan alamat kantor fiktif (seperti Jakarta/Bali yang belum terverifikasi).

---

## 6. Spesifikasi Komponen Kunci & Guardrail Sistem Desain

### 6.1 Matriks Kustomisasi Storefront (Tetap vs Bisa Diubah Agen `[A]`)
Bagian ini menjadi panduan bagi engineer saat membangun komponen yang dipakai bersama antara S1/S2 dan S4:

| Komponen / Atribut | Dikunci oleh Sistem Ortasys (Fixed) | Dapat Diubah oleh Agen (Themeable via Token) |
| :--- | :--- | :--- |
| **Identitas Visual** | Struktur DOM header & footer, ukuran maksimum gambar logo | Logo agen, nama brand agen, favicon, gambar hero & galeri |
| **Warna & Kontras** | Algoritma auto-check kontras WCAG AA (`>= 4.5:1`), warna status error/sukses | Warna primer (`--brand-primary`), warna aksen (`--brand-accent`), permukaan latar |
| **Tipografi** | Ukuran font minimum (16px body), line-height, `tabular-nums` pada angka harga | Pasangan font dari daftar kurasi yang disetujui sistem |
| **Form Pencarian** | Logika batas: **1–9 kamar**, **1–20 dewasa/kamar**, **0–20 anak/kamar**, **maks 30 malam** | Urutan tab aktif (`Hotels`, `Activities`, `Tours`, `Build your trip`) |
| **Harga & Pembayaran** | Isolasi harga Net (hanya harga jual yang tampil di S4), gateway DOKU & SNAP BI | Mata uang tampilan (IDR / USD / EUR) & teks bantuan kontak agen |

### 6.2 Guardrail Kontras Otomatis (Auto-Contrast Rule)
Karena setiap agen di permukaan S4 dapat memilih warna brand sendiri, sistem CSS/JS Ortasys menerapkan aturan:
* Tombol primer selalu menghitung nilai *relative luminance* dari `--brand-primary`.
* Jika warna pilihan agen terlalu terang (rasio kontras terhadap teks putih `< 4.5:1`), sistem otomatis mengalihkan teks tombol menjadi `#0F172A` atau menggelapkan shade `--brand-primary` sebesar 15%–25% agar tetap memenuhi standar aksesibilitas **WCAG AA**.

### 6.3 Standar Interaksi, Sentuh, & Responsivitas
* **Target Sentuh Minimum:** Seluruh tombol, stepper jumlah tamu (`+` / `-`), dan pemilih tanggal memiliki tinggi/lebar minimum **`44px × 44px`** pada perangkat mobile.
* **Ketahanan Konten Dinamis (*Dynamic Content Resilience*):** Nama agen atau judul beranda bisa pendek (*"Bagus Travel"*) atau sangat panjang (*"PT Nusantara Wisata Internasional Mandiri"*). Gunakan `line-clamp-2`, `min-w-0`, dan `flex-wrap` agar tata letak tidak pernah pecah atau menimbulkan *horizontal scroll*.
* **Format Angka & Harga:** Semua komponen harga, komisi, dan kuota kamar wajib menggunakan kelas `tabular-nums` (`font-variant-numeric: tabular-nums`) agar digit sejajar vertikal.

---

## 7. Contoh Implementasi Kode Komponen (Tailwind CSS v4)

### 7.1 Partner Badge dengan Status "Coming soon" Wajib (GuestPro)
```html
<div class="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
  <span class="font-display font-bold text-sm text-slate-700">GuestPro</span>
  <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-amber-50 text-amber-700 border border-amber-200">
    Coming soon
  </span>
</div>
```

### 7.2 Live Search Widget (Sesuai Spesifikasi Fakta Demo Storefront `[F]`)
```html
<section aria-label="Travel Search Console" class="bg-white rounded-2xl p-6 shadow-xl border border-slate-200/90 max-w-5xl mx-auto">
  <!-- Category Tabs [F: Hotels or Activities] -->
  <div class="flex items-center justify-between flex-wrap gap-4 pb-5 mb-5 border-b border-slate-100">
    <div class="inline-flex p-1 rounded-xl bg-slate-100">
      <button type="button" class="px-4 py-2 rounded-lg text-xs font-bold bg-white text-slate-900 shadow-2xs">
        Hotels
      </button>
      <button type="button" class="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900">
        Activities
      </button>
    </div>
    <!-- Product Promise [F] -->
    <div class="inline-flex items-center gap-2 text-xs font-medium text-teal-700 bg-teal-50 px-3 py-1.5 rounded-full border border-teal-200">
      <span class="w-2 h-2 rounded-full bg-teal-600 animate-pulse"></span>
      <span>Every price is checked live when you ask for it</span>
    </div>
  </div>

  <!-- Search Fields Grid -->
  <form class="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
    <!-- Destination / Hotel -->
    <div class="md:col-span-4">
      <label for="destination-input" class="block text-xs font-semibold text-slate-700 mb-1.5">
        Destination or Hotel
      </label>
      <input
        id="destination-input"
        type="text"
        placeholder="Where are you going?"
        class="w-full h-11 px-3.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-2 focus:outline-blue-700"
      />
    </div>

    <!-- Check-in / Check-out (Max 30 nights) -->
    <div class="md:col-span-4">
      <div class="flex justify-between items-center mb-1.5">
        <label for="dates-input" class="text-xs font-semibold text-slate-700">Check-in — Check-out</label>
        <span class="text-[11px] font-mono text-slate-500">Max 30 nights</span>
      </div>
      <input
        id="dates-input"
        type="text"
         readonly
        value="14 Nov 2026 → 18 Nov 2026 (4 nights)"
        class="w-full h-11 px-3.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-slate-50/50 tabular-nums"
      />
    </div>

    <!-- Rooms & Guests (1-9 rooms, 1-20 adults, 0-20 children) -->
    <div class="md:col-span-2">
      <label for="guests-input" class="block text-xs font-semibold text-slate-700 mb-1.5">
        Rooms & Guests
      </label>
      <button
        id="guests-input"
        type="button"
        class="w-full h-11 px-3 rounded-lg border border-slate-300 text-left text-xs font-semibold text-slate-900 tabular-nums flex items-center justify-between"
      >
        <span>1 Rm, 2 Adt, 0 Chd</span>
        <span class="text-slate-400">▾</span>
      </button>
    </div>

    <!-- Submit Button -->
    <div class="md:col-span-2">
      <button
        type="submit"
        class="w-full h-11 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm rounded-lg shadow-xs transition cursor-pointer"
      >
        Check Live Rates
      </button>
    </div>
  </form>
</section>
```

---

## 8. Checklist Kesiapan Desain & Pengujian (Design QA Checklist)

- [x] **Kepatuhan PRD 100%:** Hanya klaim berlabel `[F]` yang digunakan sebagai klaim bisnis (Tagline *"Empowering Your Travel Business Globally"*, 4 pilar *Global, Real-Time, Multi-Supplier, Secure*, mitra *RateHawk/ETG, Cloudbeds, MyAllocator, AITTA, DOKU, SNAP BI*, dan **GuestPro** dengan label wajib `"Coming soon"`).
- [x] **Bebas Halusinasi `[?]`:** Seluruh angka tanpa sumber (*1 juta hotel, 190 negara, 99,98% SLA, PCI-DSS, kantor Jakarta/Bali, Uluwatu Cliff Resort*) telah diblokir dari spesifikasi desain.
- [x] **Arsitektur Dua-Tingkat Tercermin Jelas:** Membedakan secara tegas permukaan *Ortasys Core UI* (S1, S2, S3, S5) dan *White-Label Storefront UI* (S4).
- [x] **Isolasi Harga B2B2C:** Menjamin harga Net hanya berada di S2 (Portal Agen) dan tidak pernah muncul di S4 (Storefront Wisatawan).
- [x] **Aksesibilitas & Responsivitas:** Semua kombinasi warna teks memenuhi WCAG AA (`>= 4.5:1`), setiap input form memiliki `<label>` eksplisit, dan target sentuh berukuran minimal `44px × 44px`.