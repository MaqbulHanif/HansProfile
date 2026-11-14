# Hans Sustainable Farming — Company Profile Website

Website company profile satu halaman (single-page) untuk **Hans Sustainable Farming**,
bisnis keluarga di bidang peternakan, perikanan, perkebunan, dan pertanian.

> _Growing Today, Sustaining Tomorrow._

Website ini **bukan toko online**: tidak ada keranjang belanja, checkout, backend, atau database.
Seluruh tombol pertanyaan/pemesanan diarahkan ke WhatsApp.

---

## Teknologi

| Kebutuhan | Paket |
|---|---|
| Framework | React 19 + Vite 8 |
| Styling | Tailwind CSS 4 (`@tailwindcss/vite`) |
| Ikon | lucide-react |
| Animasi | framer-motion (`LazyMotion` + `domAnimation`, otomatis nonaktif bila pengguna memilih *reduced motion*) |
| Font | DM Serif Display & Inter (di-host sendiri via `@fontsource`, tanpa request ke Google) |

Bahasa: JavaScript (JSX). Tidak memakai React Router karena hanya satu halaman.

## Instalasi & Perintah

Prasyarat: Node.js 20+ dan npm.

```bash
npm install        # pasang dependency (sekali saja)
npm run dev        # server development → http://localhost:5173
npm run build      # build produksi → folder dist/
npm run preview    # cek hasil build → http://localhost:4173
```

Folder `dist/` hasil `npm run build` adalah website statis yang siap diunggah ke hosting
apa pun (Vercel, Netlify, Cloudflare Pages, cPanel/public_html, dll.).

## Struktur Project

```
├── index.html                 ← judul halaman, meta SEO, Open Graph
├── public/
│   └── favicon.svg            ← favicon (placeholder)
└── src/
    ├── assets/images/         ← FOTO WEBSITE (saat ini kosong, lihat README di dalamnya)
    ├── components/            ← komponen UI yang dipakai ulang
    │   ├── Navbar.jsx           navigasi sticky + menu mobile
    │   ├── Footer.jsx
    │   ├── Logo.jsx             logo teks sementara
    │   ├── SectionHeading.jsx   eyebrow + judul + deskripsi section
    │   ├── PrimaryButton.jsx    tombol/link CTA
    │   ├── BusinessCard.jsx
    │   ├── ProductCard.jsx
    │   ├── GalleryGrid.jsx      grid galeri
    │   ├── Lightbox.jsx         tampilan foto layar penuh
    │   ├── ContactForm.jsx      form kemitraan + validasi
    │   ├── SmartImage.jsx       gambar lazy-load + placeholder otomatis
    │   ├── SocialIcon.jsx
    │   └── Reveal.jsx           animasi muncul saat scroll
    ├── sections/              ← satu file per section halaman
    │   ├── HeroSection.jsx  AboutSection.jsx  BusinessSection.jsx  ProductsSection.jsx
    │   └── ApproachSection.jsx  GallerySection.jsx  ContactSection.jsx
    ├── data/                  ← SEMUA KONTEN YANG BISA DIEDIT
    │   ├── siteConfig.js        nama, kontak, WhatsApp, alamat, media sosial, menu
    │   ├── businessData.js      bidang usaha, nilai inti, prinsip kerja
    │   ├── productData.js       daftar produk (placeholder)
    │   ├── galleryData.js       daftar foto galeri
    │   └── images.js            registri gambar (tidak perlu diedit)
    ├── hooks/useScrollState.js  ← deteksi scroll, section aktif, kunci scroll
    ├── utils/contact.js         ← pembuat link WhatsApp / email, smooth scroll
    ├── index.css                ← design tokens (warna, font) & utilitas
    ├── App.jsx
    └── main.jsx
```

## Mengedit Informasi Perusahaan & Kontak

Buka **`src/data/siteConfig.js`**. Semua nilai bertanda `PLACEHOLDER` wajib diganti:

| Field | Keterangan |
|---|---|
| `contact.whatsapp.number` | Nomor WA format internasional tanpa `+`/spasi, mis. `6281234567890` |
| `contact.whatsapp.display` | Nomor yang ditampilkan, mis. `+62 812-3456-7890` |
| `contact.whatsapp.defaultMessage` | Pesan pembuka otomatis saat tombol WA ditekan |
| `contact.email` | Email bisnis |
| `contact.location.address` / `region` | Alamat & kota/provinsi |
| `contact.location.mapsUrl` | Link Google Maps (Share → Copy link) |
| `contact.location.mapsEmbedUrl` | Opsional: isi `src` dari kode embed Google Maps untuk menampilkan peta |
| `contact.social` | Daftar akun media sosial (`Instagram`, `Facebook`, `TikTok`, `YouTube` punya ikon khusus) |
| `siteUrl` | Domain resmi website |

Konten lain:
- **Bidang usaha, nilai inti, prinsip** → `src/data/businessData.js`
- **Produk** → `src/data/productData.js` (isi `name`, `description`, `availability`;
  ubah `isPlaceholder` menjadi `false` bila sudah final)
- **Galeri** → `src/data/galleryData.js`
- **Teks paragraf section** (Hero, About, Contact) → file terkait di `src/sections/`
- **Warna & font brand** → blok `@theme` di `src/index.css`

## Menambahkan / Mengganti Foto

Foto **sengaja dikosongkan**. Selama belum ada, setiap posisi gambar menampilkan placeholder
bergaya brand, sehingga layout tetap rapi.

1. Simpan foto di `src/assets/images/` dengan nama sesuai **kunci** gambar, mis. `hero.jpg`,
   `livestock.jpg`, `gallery-harvest.jpg`.
2. Foto langsung terpakai, tidak perlu mengubah kode.

Daftar lengkap kunci, posisi, proporsi, dan saran isi foto ada di
**`src/assets/images/README.md`**.

Menambah foto galeri: simpan file baru, lalu tambahkan satu objek di `src/data/galleryData.js`
(`layout`: `normal` / `tall` / `wide` / `large`).

## Form Kemitraan

Website tidak memiliki backend, sehingga form **tidak menyimpan atau mengirim data** sendiri.
Setelah validasi lolos, isi form disusun menjadi pesan dan dibuka di **WhatsApp** (tab baru).
Pesan baru terkirim setelah pengunjung menekan tombol kirim di WhatsApp. Tersedia juga
alternatif **email** (`mailto:`). Form menyertakan kotak persetujuan penggunaan data.

Bila nanti ingin form terkirim langsung, dapat diintegrasikan dengan layanan seperti
Formspree / EmailJS / backend sendiri di `src/components/ContactForm.jsx` (`handleSubmit`).

## SEO

Sudah tersedia di `index.html`: title, meta description, Open Graph, Twitter card, `lang="id"`,
favicon, serta hierarki heading semantik (satu `h1`, `h2` per section).

Yang perlu dilengkapi sebelum publikasi:
- Ganti `https://example.com` di `index.html` dengan domain resmi.
- Simpan gambar share 1200×630 px di `public/og-image.jpg`.
- Structured data `LocalBusiness` (JSON-LD) **sengaja belum dipasang** karena data usaha resmi
  belum tersedia. Tambahkan di `<head>` setelah alamat, telepon, dan informasi usaha final.

## Placeholder yang Masih Perlu Diisi

- [ ] Nomor WhatsApp, email, alamat, link Maps, akun media sosial (`siteConfig.js`)
- [ ] 18 foto (lihat `src/assets/images/README.md`)
- [ ] Data produk asli (`productData.js`)
- [ ] Logo resmi (`src/components/Logo.jsx`) & favicon (`public/favicon.svg`)
- [ ] Gambar Open Graph (`public/og-image.jpg`) dan domain di `index.html`
