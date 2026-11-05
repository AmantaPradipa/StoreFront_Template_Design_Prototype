# Ortasys StoreFront — Template & Design Prototypes

> **White-Label Travel Agent Storefront Design System & Interactive Prototypes**  
> Repository: [AmantaPradipa/StoreFront_Template_Design_Prototype](https://github.com/AmantaPradipa/StoreFront_Template_Design_Prototype)

Koleksi lengkap prototipe desain dan antarmuka web interaktif (*white-label storefront*) untuk platform distribusi perjalanan B2B **Ortasys**. Seluruh prototipe dirancang *self-contained* menggunakan **HTML5 semantik, Tailwind CSS, dan Vanilla JavaScript** tanpa ketergantungan build-step kompleks.

---

## 🧭 Ikhtisar Arsitektur Produk

Sesuai spesifikasi [PRD Ortasys](PRD.md), sistem Ortasys beroperasi dalam model **B2B2C**:
1. **Lapisan Supplier:** Mengagregasi inventori hotel dan operator tur multi-supplier secara real-time.
2. **Lapisan Agen (B2B):** Portal pemesanan, manajemen allotment, deposit, dan settlement agen.
3. **Lapisan Storefront (B2C):** Situs toko online publik berlabel putih (*white-label*) untuk masing-masing agen perjalanan dengan tema, palet warna, tipografi, dan modul yang dapat disesuaikan.

### Aturan & Kepatuhan Bisnis Utama (FR-1 s/d FR-10)
- **Harga Jual Wisatawan (B2C Only):** Seluruh tarif yang tampil di storefront adalah harga jual ritel final. Harga net wholesale dan margin agen tersembunyi sepenuhnya di sisi server.
- **Jaminan Harga Live:** Menampilkan janji transparansi resmi: *"Every price is checked live when you ask for it"*.
- **Batasan Durasi:** Pencarian dibatasi maksimal **30 malam** perjalanan sesuai arsitektur mesin Ortasys.
- **Konfigurasi Kamar & Tamu:** Mendukung 1–9 kamar, 1–20 dewasa/kamar, dan 0–20 anak/kamar dengan aturan okupansi kapasitas seragam per kamar.
- **Drawer "Build Your Trip":** Fitur keranjang dinamis untuk merangkai paket akomodasi dan tur multi-supplier dengan kalkulasi subtotal instan.
- **Kanal Pembayaran Terverifikasi:** Simulasi checkout terintegrasi standar perbankan Indonesia (**DOKU Payment** & **SNAP BI**).

---

## 📂 Struktur Direktori Repositori

```text
StoreFront_Template_Design_Prototype/
│
├── .gitignore                             # Aturan ignore (zip, agent skills, OS cache)
├── README.md                              # Dokumentasi resmi repositori
├── PRD.md                                 # Product Requirements Document (PRD Ortasys)
│
├── assets/                                # Aset fotografi asli beresolusi tinggi
│   ├── bagus_travel/                      # Bali, Borobudur, Danau Toba, Nusa Penida
│   ├── khatulistiwa_explorer/             # Bromo, Kawah Ijen, Rinjani, Komodo, Raja Ampat
│   ├── mandalika_escape/                  # Palm Bay, Gili Boat, Sade Village, Pantai Selatan
│   ├── nusantara_executive/               # Sudirman Jakarta, MRT, JCC Senayan, Nusa Dua
│   └── serenity_umrah_privilege/          # Istiqlal, Prambanan, Kraton, Jam Gadang, Baiturrahman
│
├── design/                                # Dokumen spesifikasi desain prototipe awal
│   ├── bagus_travel_design.md
│   ├── khatulistiwa_explorer_design.md
│   ├── mandalika_escape_design.md
│   ├── nusantara_executive_design.md
│   └── serenity_umrah_privilege_design.md
│
├── ortasys-storefront-design-guidelines/  # 10 Preset Sistem Storefront Resmi
│   ├── README.md                          # Panduan implementasi 10 preset
│   ├── 01-local-destination/              # Jelajah Lombok (DM Serif Display + Manrope)
│   ├── 02-luxury-bespoke/                 # Aurelia Private Journeys (Cormorant Garamond + DM Sans)
│   ├── 03-global-contemporary/            # Atlasway Travel (Plus Jakarta Sans + Inter)
│   ├── 04-culture-heritage/               # Akar Budaya Travel (Playfair Display + Source Sans 3)
│   ├── 05-adventure-nature/               # Rimba Trek Adventures (Barlow Condensed + Manrope)
│   ├── 06-family-group/                   # TemanTrip Holidays (Nunito Sans + Inter)
│   ├── 07-wellness-slow-living/           # Sela Retreats (Lora + DM Sans)
│   ├── 08-urban-business/                 # MetroLink Travel (IBM Plex Sans + Inter)
│   ├── 09-coastal-island/                 # Nusa Tide Escapes (Fraunces + Manrope)
│   └── 10-budget-backpacker/              # Jalan Hemat Travel (Space Grotesk + Inter)
│
├── hasil-slicing-design/                  # 3 Prototipe Kustom Agen Perjalanan
│   ├── bloosm/                            # Bloosm Travel (Desain Modern Kontemporer)
│   ├── melali_travel/                     # Melali Bali & Beyond (Wisata Budaya & Bahari)
│   └── travel4all/                        # Travel4All (Wisata Inklusif & Aksesibel)
│
├── bagus_travel.html                      # Prototipe Awal: Bagus Travel (Luxury Bespoke)
├── khatulistiwa_explorer.html             # Prototipe Awal: Khatulistiwa Explorer (Wilderness Adventure)
├── mandalika_escape.html                  # Prototipe Awal: Mandalika Escape (Regional Lombok Hub)
├── nusantara_executive.html               # Prototipe Awal: Nusantara Executive (Corporate & MICE)
└── serenity_umrah_privilege.html          # Prototipe Awal: Serenity Umrah & Heritage
```

---

## 🎨 Katalog 18 Template & Prototipe

### 1. 10 Preset Sistem (`ortasys-storefront-design-guidelines/`)

| No | Folder | Brand Karakter | Tipografi | Palet Warna Utama | Tautan Langsung |
|:---:|---|---|---|---|:---:|
| **01** | `01-local-destination` | **Jelajah Lombok** | *DM Serif Display* + *Manrope* | `#174C43`, `#D8B98C`, `#B56B24` | [Buka Demo](ortasys-storefront-design-guidelines/01-local-destination/index.html) |
| **02** | `02-luxury-bespoke` | **Aurelia Private Journeys** | *Cormorant Garamond* + *DM Sans* | `#24221F`, `#6B6257`, `#9E7A4A` | [Buka Demo](ortasys-storefront-design-guidelines/02-luxury-bespoke/index.html) |
| **03** | `03-global-contemporary` | **Atlasway Travel** | *Plus Jakarta Sans* + *Inter* | `#142C4E`, `#3978B9`, `#F07A38` | [Buka Demo](ortasys-storefront-design-guidelines/03-global-contemporary/index.html) |
| **04** | `04-culture-heritage` | **Akar Budaya Travel** | *Playfair Display* + *Source Sans 3* | `#803D32`, `#C77B55`, `#4E654C` | [Buka Demo](ortasys-storefront-design-guidelines/04-culture-heritage/index.html) |
| **05** | `05-adventure-nature` | **Rimba Trek Adventures** | *Barlow Condensed* + *Manrope* | `#183B32`, `#D97736`, `#E6C99C` | [Buka Demo](ortasys-storefront-design-guidelines/05-adventure-nature/index.html) |
| **06** | `06-family-group` | **TemanTrip Holidays** | *Nunito Sans* + *Inter* | `#315B46`, `#E58A55`, `#F0C98B` | [Buka Demo](ortasys-storefront-design-guidelines/06-family-group/index.html) |
| **07** | `07-wellness-slow-living` | **Sela Retreats** | *Lora* + *DM Sans* | `#53665A`, `#A7A88A`, `#D9C8AE` | [Buka Demo](ortasys-storefront-design-guidelines/07-wellness-slow-living/index.html) |
| **08** | `08-urban-business` | **MetroLink Travel** | *IBM Plex Sans* + *Inter* | `#23364D`, `#3D78A8`, `#B7C7D5` | [Buka Demo](ortasys-storefront-design-guidelines/08-urban-business/index.html) |
| **09** | `09-coastal-island` | **Nusa Tide Escapes** | *Fraunces* + *Manrope* | `#176B73`, `#E29A70`, `#B9D8D3` | [Buka Demo](ortasys-storefront-design-guidelines/09-coastal-island/index.html) |
| **10** | `10-budget-backpacker` | **Jalan Hemat Travel** | *Space Grotesk* + *Inter* | `#263C5A`, `#E56B45`, `#E9B94F` | [Buka Demo](ortasys-storefront-design-guidelines/10-budget-backpacker/index.html) |

### 2. 3 Prototipe Hasil Slicing Kustom (`hasil-slicing-design/`)

| Brand | Fokus & Karakteristik | File Desain & Prototipe |
|---|---|:---:|
| **Bloosm Travel** | Desain editorial premium kontemporer dengan tipografi ekspresif dan tata letak modular | [Lihat Prototipe](hasil-slicing-design/bloosm/index.html) &bull; [Spesifikasi](hasil-slicing-design/bloosm/DESIGN.md) |
| **Melali Travel** | Spesialis perjalanan autentik Pulau Dewata & Nusa Tenggara dengan sentuhan budaya lokal | [Lihat Prototipe](hasil-slicing-design/melali_travel/index.html) &bull; [Spesifikasi](hasil-slicing-design/melali_travel/DESIGN.md) |
| **Travel4All** | Perjalanan ramah keluarga, lansia, dan aksesibilitas ramah kursi roda | [Lihat Prototipe](hasil-slicing-design/travel4all/index.html) &bull; [Spesifikasi](hasil-slicing-design/travel4all/DESIGN.md) |

### 3. 5 Prototipe Pondasi Awal (Root Level)

| Brand | Posisi Pasar | Tautan Prototipe |
|---|---|:---:|
| **Bagus Travel** | Private journeys, kurasi vila mewah Bali & warisan candi Jawa | [Bagus Travel Demo](bagus_travel.html) |
| **Mandalika Escape** | Destinasi regional pantai Mandalika, bukit savana & Gili | [Mandalika Escape Demo](mandalika_escape.html) |
| **Khatulistiwa Explorer** | Petualangan rimba liar, pendakian gunung aktif & ekspedisi laut | [Khatulistiwa Explorer Demo](khatulistiwa_explorer.html) |
| **Nusantara Executive** | Akomodasi korporat Sudirman CBD, koridor MRT & konvensi MICE | [Nusantara Executive Demo](nusantara_executive.html) |
| **Serenity Umrah Privilege** | Paket perjalanan spiritual umrah eksklusif & warisan Islam nusantara | [Serenity Umrah Demo](serenity_umrah_privilege.html) |

---

## 🚀 Cara Menjalankan Prototipe

Seluruh file prototipe bersifat **zero-dependency** dan dapat langsung dibuka di browser web modern mana pun:

1. **Buka Langsung di Browser:**  
   Buka file HTML prototipe (misal `bagus_travel.html` atau file `index.html` di dalam subfolder preset) langsung di browser (Chrome, Firefox, Edge, Safari).
2. **Menggunakan Live Server (VS Code):**  
   Klik kanan pada file HTML prototipe pilihan &rarr; pilih **"Open with Live Server"**.
3. **Menggunakan CLI Lokal:**
   ```bash
   npx serve .
   # atau
   python -m http.server 8000
   ```
   Lalu buka `http://localhost:8000` pada peramban Anda.

---

## 🛡️ Kebijakan `.gitignore`

File [`.gitignore`](.gitignore) telah dikonfigurasi untuk memastikan hanya aset dan dokumen yang relevan yang masuk ke repositori GitHub:
- Mengabaikan direktori skill dan konfigurasi agent AI internal (`.agents/`, `.taste-skill/`, `skills-lock.json`).
- Mengabaikan file arsip (`*.zip`, `*.tar.gz`).
- Mengabaikan cache sistem operasi (`Thumbs.db`, `.DS_Store`) serta folder IDE (`.vscode/`, `.idea/`).

---

&copy; 2026 Ortasys White-Label Travel Distribution System &bull; Prototipe dan Desain Berlisensi Mitratama.

