# PRD: Ortasys

| | |
|---|---|
| **Status** | Draft 0.1, berbasis riset publik. Belum divalidasi tim Ortasys |
| **Tanggal riset** | 4 November 2026 |
| **Tujuan dokumen** | Menjadi satu sumber acuan tentang apa itu Ortasys, supaya keputusan desain UI tidak berubah-ubah |
| **Cara membaca** | Setiap pernyataan diberi label bukti (lihat bagian 1) |

---

## 1. Label bukti

| Label | Arti |
|---|---|
| **[F]** | Fakta. Terlihat langsung di sumber publik yang disebut di bagian 11 |
| **[A]** | Asumsi kerja. Kesimpulan wajar dari fakta, tapi belum dikonfirmasi |
| **[?]** | Belum diketahui. Harus ditanyakan ke tim Ortasys sebelum desain dikunci |

Aturan: **hanya [F] yang boleh dipakai sebagai konten atau klaim di desain.** [A] boleh membentuk struktur desain, tapi harus diganti begitu terkonfirmasi. [?] tidak boleh muncul sebagai klaim.

---

## 2. Ringkasan

Ortasys adalah **platform distribusi perjalanan B2B yang menyediakan sistemnya kepada agen perjalanan** [A, disimpulkan dari tiga sumber]. Agen mendapat akses ke inventori hotel dari banyak supplier, dan setiap agen dapat memiliki **situs toko online sendiri** di atas sistem yang sama [F: ada storefront demo; A: bahwa tiap agen akan berbeda].

Implikasi paling penting untuk desain: **Ortasys bukan satu website, melainkan sistem dengan beberapa permukaan UI, dan salah satunya harus bisa tampil berbeda untuk setiap agen.**

---

## 3. Latar belakang dan evolusi produk

Ada dua generasi produk yang terlihat dari sumber publik.

| | Generasi 1 (situs lama) | Generasi 2 (situs sekarang) |
|---|---|---|
| Alamat | ortasys.mousmedia.com [F] | ortasys.com/en [F] |
| Posisi | Marketplace perjalanan online untuk agen ritel, mencakup hotel, kapal, dan operator tur [F] | Platform untuk agen dan hotel, "Empowering Your Travel Business Globally" [F] |
| Sumber tarif | Tarif di-upload oleh Ortasys setelah hotel mengirim data ke admin [F] | Multi-supplier: RateHawk/ETG, MyAllocator, Cloudbeds, GuestPro (tertulis "coming soon") [F] |
| Konfirmasi | Allotment minimal 1 kamar dijamin, booking terkonfirmasi otomatis [F] | Tarif dan ketersediaan real-time [F] |
| Pembayaran | E-wallet, verifikasi top-up bisa sampai 3 jam [F] | DOKU dan SNAP BI [F] |
| Biaya | Registrasi gratis, komisi hotel 2,5% per booking terealisasi [F] | Tidak disebut [?] |
| Skala | 53 hotel, 751 agen [F] | Tidak disebut [?] |
| Pengelola | ViBES Hospitality / ViBES Management, Kuta Mandalika, Lombok [F] | Tidak disebut di teks yang diperiksa [?] |
| Akses | Daftar agen dan login | "Request Access" |

Status situs lama (masih aktif atau tidak) [?].

Kesimpulan [A]: Ortasys berevolusi dari marketplace hotel regional yang dikelola manual menjadi mesin distribusi terhubung API dengan fasilitas toko online untuk agen.

---

## 4. Definisi produk

### 4.1 Apa itu Ortasys

Satu sistem dengan tiga lapisan:

1. **Lapisan supplier.** Mengagregasi inventori hotel dari supplier eksternal (RateHawk/ETG, MyAllocator, Cloudbeds, GuestPro nanti) dan inventori yang dikelola langsung [F untuk daftar supplier; A untuk istilah "lapisan"].
2. **Lapisan agen (B2B).** Portal tempat agen mencari, memesan, dan menggabungkan paket multi-supplier, dengan harga real-time, dompet, dan settlement [F: dari teks "For Travel Agents"].
3. **Lapisan storefront (B2C).** Situs toko online per agen yang memakai mesin Ortasys. Contoh: Bagus Travel di `bagustravel.demostorefront.ortasys.com` [F]. Bahwa ini produk yang dijual ke banyak agen [A].

Ditambah **permukaan hotel** ("For Hotels": satu saluran distribusi ke jaringan agen, dengan allotment dan sisanya [F, teks terpotong]).

### 4.2 Apa yang BUKAN Ortasys

- Bukan situs untuk wisatawan umum dengan merek "Ortasys" [A]. Wisatawan bertemu merek agen, bukan Ortasys.
- Bukan hanya website marketing. Landing page ortasys.com hanyalah satu permukaan.
- Bukan OTA seperti Traveloka atau Booking.com. Ortasys menjual ke agen, dan agen menjual ke wisatawan [A].

### 4.3 Posisi pasar [A]

Gabungan dari: bedbank/agregator inventori hotel, platform toko online berlabel putih (white-label) untuk agen, dan dompet serta settlement untuk agen. Fokus pasar awal: Indonesia (pembayaran DOKU/SNAP BI, pengelola di Lombok).

---

## 5. Pengguna

| Persona | Siapa | Kebutuhan utama | Permukaan | Bukti |
|---|---|---|---|---|
| **Agen** | Pemilik atau staf agen perjalanan ritel | Akses tarif banyak supplier tanpa menghubungi hotel satu per satu, voucher, pembayaran | Portal agen | [F] |
| **Pemilik storefront** | Agen yang memakai toko online sendiri | Toko dengan merek sendiri, tanpa membangun sistem | Pengaturan storefront | [A] |
| **Wisatawan** | Pelanggan akhir agen | Mencari, membandingkan, memesan, bantuan | Storefront | [F: ada form pencarian dan kontak] |
| **Hotel** | Pengelola properti | Menjangkau jaringan agen lewat satu saluran | Extranet hotel | [F: "For Hotels"] |
| **Admin Ortasys** | Tim internal | Onboarding hotel dan agen, kelola tarif, verifikasi top-up | Back-office | [F pada generasi 1; A pada generasi 2] |

Persona wisatawan dan pemilik storefront inilah yang membedakan generasi 2 dari generasi 1.

---

## 6. Permukaan UI

| # | Permukaan | Merek yang tampil | Pengguna | Perlu bisa berbeda per agen? | Status bukti |
|---|---|---|---|---|---|
| S1 | **Situs Ortasys** (ortasys.com) | Ortasys | Calon agen dan hotel | Tidak | [F] |
| S2 | **Portal agen** (di balik login) | Ortasys | Agen | Tidak, atau terbatas | [F ada, isi belum terlihat] |
| S3 | **Extranet hotel** | Ortasys | Hotel | Tidak | [F ada, isi belum terlihat] |
| S4 | **Storefront agen** | **Merek agen** | Wisatawan | **Ya, inti persyaratan** | [F contoh demo] |
| S5 | **Back-office admin** | Ortasys | Internal | Tidak | [A] |

### 6.1 Bukti struktur storefront (dari demo Bagus Travel) [F]

- **Navigasi:** Home, Tours, Things to do, Hotels, Build your trip.
- **Beranda:** judul bermerek agen ("Private journeys by Bagus Travel"), tagline, gambar hero, form pencarian.
- **Form pencarian:** pilihan Hotels atau Activities. Tujuan atau hotel, check-in, check-out, jumlah kamar (1 sampai 9), dewasa per kamar (1 sampai 20), anak per kamar (0 sampai 20). Semua kamar dianggap berisi tamu yang sama. Maksimal 30 malam; harga muncul setelah tanggal diisi.
- **Blok keunggulan:** "Why travel with us", tiga poin (pengetahuan lokal, harga live, bantuan).
- **Footer:** About us, Contact, FAQ.
- **Janji produk:** "Every price is checked live when you ask for it".
- Gambar hero masih berupa placeholder (`placeholders/luxury-travel/hero.svg`), tanda bahwa konten visual diganti per agen.

---

## 7. Persyaratan desain

### 7.1 Prinsip

1. **Dua tingkat desain.** Ada *Ortasys UI* (merek tetap, S1, S2, S3, S5) dan *Storefront UI* (kerangka tetap, kulit berganti, S4).
2. **Storefront dirancang sebagai template yang bisa diberi tema**, bukan sebagai satu situs. Satu desain, banyak tampilan.
3. **Ortasys tidak tampil di storefront** kecuali jika diputuskan lain [?]. Wisatawan melihat merek agen.
4. **Harga net tidak boleh bocor ke storefront.** Wisatawan hanya melihat harga jual agen. Portal agen yang boleh melihat harga net [A, mengikuti model B2B2C].
5. **Kepercayaan lewat kejujuran.** Hanya klaim berlabel [F] yang boleh tampil.

### 7.2 Yang tetap vs yang bisa diubah di storefront [A]

| Tetap (diatur sistem) | Bisa diubah agen |
|---|---|
| Alur pencarian dan struktur hasil | Logo dan nama merek |
| Alur pemesanan dan pembayaran | Palet warna (primer, sekunder, aksen) |
| Komponen penting: form, kalender, pemilih tamu | Pasangan font dari daftar yang disetujui |
| Aksesibilitas (kontras, fokus, label) | Gambar hero dan galeri |
| Tampilan harga dan kebijakan | Tagline, judul, teks beranda |
| Responsif (ponsel dan desktop) | Label menu dan modul yang aktif (Tours, Activities, Build your trip) |
| | Konten About, FAQ, dan kontak |

Daftar ini harus dikonfirmasi (lihat pertanyaan terbuka).

### 7.3 Persyaratan sistem desain

- **Token berlapis.** Token inti (jarak, radius, tipografi dasar, semantik status) tetap. Token merek (warna, font, logo) diganti per agen. Komponen hanya membaca token, tidak pernah memakai warna keras.
- **Aturan kontras otomatis.** Jika agen memilih warna primer yang kontrasnya buruk, sistem menyesuaikan atau menolak. Target WCAG AA.
- **Mode terang dan gelap** tidak wajib untuk storefront; wajib dievaluasi untuk portal [?].
- **Konten dinamis.** Semua teks harus bisa lebih panjang atau pendek, tanpa merusak tata letak. Gambar agen harus punya rasio dan fallback yang jelas.
- **Bahasa.** Minimal Inggris dan Indonesia [A]. Situs resmi memakai `/en`, jadi i18n sudah direncanakan [F].
- **Mata uang.** Mendukung IDR, USD, EUR sebagai asumsi awal [?].

---

## 8. Persyaratan fungsional tingkat tinggi

Hanya yang terlihat atau disebut di sumber. Detail menunggu konfirmasi.

| ID | Persyaratan | Permukaan | Bukti |
|---|---|---|---|
| FR-1 | Pencarian hotel dengan tujuan, tanggal, kamar, dewasa, anak | S2, S4 | [F] |
| FR-2 | Harga dicek live saat diminta | S2, S4 | [F] |
| FR-3 | Pencarian dan pemesanan aktivitas dan tur | S4 | [F: menu ada; detail belum terlihat] |
| FR-4 | "Build your trip": merangkai paket multi-supplier | S2, S4 | [F: nama menu; cara kerja belum terlihat] |
| FR-5 | Dompet agen dan settlement | S2 | [F: "wallet and settlement"] |
| FR-6 | Pembayaran via DOKU dan SNAP BI | S2, S4 | [F] |
| FR-7 | Konfirmasi dan voucher bermerek (logo agen dan hotel) | S2 | [F pada generasi 1] |
| FR-8 | Pengelolaan allotment dan tarif hotel | S3 | [F: "allotment" disebut] |
| FR-9 | Konfigurasi storefront oleh agen | S4 | [A] |
| FR-10 | Permintaan akses / onboarding agen dan hotel | S1 | [F: "Request Access"] |

---

## 9. Klaim konten

### 9.1 Boleh dipakai di desain [F]

- Tagline: "Empowering Your Travel Business Globally".
- Empat poin: Global (jaringan hotel via RateHawk dan ETG), Real-Time (tarif dan ketersediaan), Multi-Supplier (RateHawk, MyAllocator, Cloudbeds), Secure (pembayaran via DOKU dan SNAP BI).
- Mitra pada strip logo: RateHawk, Cloudbeds, MyAllocator, AITTA, DOKU, SNAP BI. **GuestPro harus berlabel "Coming soon".**
- Dua kelompok manfaat: untuk agen perjalanan dan untuk hotel.
- Tombol utama: "Request Access".

### 9.2 Tidak boleh dipakai sampai diverifikasi [?]

Klaim ini muncul di prompt desain awal dan **tidak ada di sumber yang diperiksa**:

- "1.000.000+ hotel", "190+ negara", "50+ supply partners"
- "99,98% API uptime SLA"
- Kepatuhan PCI-DSS
- Kantor di Jakarta dan Bali, serta alamat spesifiknya
- "Margin agen +12%" dan harga contoh Uluwatu Cliff Resort (ini data ilustrasi, bukan data nyata)
- "0,42 dtk sinkron API"
- Status "All Systems Operational"

Contoh data pada mockup harus ditandai jelas sebagai ilustrasi.

---

## 10. Pertanyaan terbuka

Prioritas tinggi (menentukan arsitektur desain):

1. Apakah setiap agen benar-benar mendapat storefront sendiri sebagai produk resmi, atau Bagus Travel hanya demo internal?
2. Apa saja yang boleh diubah agen (lihat tabel 7.2)? Apakah ada pembuat halaman atau hanya pengaturan tema?
3. Apakah merek Ortasys tampil di storefront (misalnya "Powered by Ortasys"), atau sepenuhnya white-label?
4. Apakah satu agen bisa punya banyak storefront atau domain sendiri?
5. Bagaimana harga jual ditentukan: agen mengatur margin per produk, per klien, atau global?

Prioritas menengah:

6. Siapa pelanggan target saat ini: agen kecil di Indonesia saja, atau regional?
7. Model biaya platform: langganan, komisi, atau selisih harga?
8. Apakah situs lama (mousmedia.com) masih dipakai, dan bagaimana migrasinya?
9. Dari mana pasokan tur dan aktivitas?
10. Apa isi lengkap "For Hotels" dan footer ortasys.com (teks yang diperiksa terpotong)?
11. Apa peran AITTA (mitra, asosiasi, atau sertifikasi)?
12. Apakah ada branding Ortasys yang sudah ada (logo, warna, font) yang harus dipertahankan? Situs lama punya logo; belum diperiksa.

Prioritas rendah:

13. Bahasa dan mata uang yang didukung.
14. Kebutuhan mode gelap.
15. Target aksesibilitas formal.

---

## 11. Sumber

| # | Sumber | Cara diperoleh | Catatan |
|---|---|---|---|
| 1 | https://ortasys.mousmedia.com/ | Dibaca langsung | Situs generasi 1. Berisi model distribusi, komisi 2,5%, hitungan 53 hotel dan 751 agen, pengelola ViBES |
| 2 | https://ortasys.com/en | **Teks ditempel oleh pemilik proyek** | Halaman dimuat lewat JavaScript, sehingga tidak terbaca otomatis. Teksnya terpotong di bagian "For Hotels" |
| 3 | https://bagustravel.demostorefront.ortasys.com/ | Dibaca langsung | Storefront demo. Menu, form pencarian, blok "Why travel with us" |

Pencarian web umum untuk "Ortasys" tidak menemukan liputan media, profil perusahaan, atau pihak ketiga. Semua fakta di dokumen ini berasal dari situs Ortasys sendiri.

---

## 12. Langkah berikutnya

1. Pemilik proyek menjawab pertanyaan prioritas tinggi (bagian 10, nomor 1 sampai 5), idealnya bersama tim Ortasys.
2. Memperbarui label [A] dan [?] di dokumen ini menjadi [F] atau menghapusnya.
3. Menetapkan matriks "tetap vs bisa diubah" final (bagian 7.2).
4. Setelah itu, memulai desain dalam urutan: **sistem token dan komponen, lalu storefront (S4), lalu situs Ortasys (S1), lalu portal agen dan extranet (S2, S3).** Alasannya, S4 menentukan seberapa fleksibel sistem desain harus dibuat.

---

## 13. Catatan perubahan

| Versi | Tanggal | Perubahan |
|---|---|---|
| 0.1 | 4 Nov 2026 | Draft awal dari tiga sumber publik |
