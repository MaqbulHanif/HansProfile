/**
 * ============================================================
 *  DATA GALERI
 * ============================================================
 *  Foto belum tersedia — website menampilkan placeholder sampai
 *  file foto disimpan di src/assets/images/ dengan nama sesuai
 *  `image` di bawah (lihat src/assets/images/README.md).
 *
 *  Menambah foto: simpan file di src/assets/images/ lalu
 *  tambahkan satu objek baru pada array di bawah.
 *
 *  layout: ukuran kotak foto di grid galeri (desktop/tablet)
 *    'normal' — 1 kolom x 1 baris
 *    'tall'   — 1 kolom x 2 baris (cocok untuk foto potret)
 *    'wide'   — 2 kolom x 1 baris (cocok untuk foto lanskap)
 *    'large'  — 2 kolom x 2 baris (foto unggulan)
 *  Grid otomatis mengisi celah kosong bila urutan/ukuran diubah.
 * ============================================================
 */

export const galleryItems = [
  {
    id: 'chicken',
    image: 'gallery-chicken',
    title: 'Chicken Farming',
    caption: 'Kegiatan peternakan ayam',
    alt: 'Ayam kampung di area peternakan',
    layout: 'tall',
  },
  {
    id: 'plantation',
    image: 'gallery-plantation',
    title: 'Plantation',
    caption: 'Aktivitas di area perkebunan',
    alt: 'Hamparan lahan perkebunan tropis',
    layout: 'wide',
  },
  {
    id: 'duck',
    image: 'gallery-duck',
    title: 'Duck Farming',
    caption: 'Kegiatan peternakan bebek',
    alt: 'Kawanan bebek digiring di area terbuka',
    layout: 'normal',
  },
  {
    id: 'fish',
    image: 'gallery-fish',
    title: 'Fish Farming',
    caption: 'Kolam budidaya ikan air tawar',
    alt: 'Kolam budidaya ikan air tawar',
    layout: 'normal',
  },
  {
    id: 'vegetables',
    image: 'gallery-vegetables',
    title: 'Vegetable Farming',
    caption: 'Budidaya sayuran',
    alt: 'Petani merawat lahan sayuran',
    layout: 'tall',
  },
  {
    id: 'harvest',
    image: 'gallery-harvest',
    title: 'Harvesting',
    caption: 'Kegiatan panen',
    alt: 'Petani sedang memanen hasil kebun',
    layout: 'large',
  },
]
