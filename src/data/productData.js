/**
 * ============================================================
 *  DATA PRODUK — PLACEHOLDER
 * ============================================================
 *  Nama produk, deskripsi, dan ketersediaan yang sebenarnya
 *  BELUM tersedia. Seluruh isi di bawah adalah contoh kategori
 *  yang perlu diperbarui oleh pemilik usaha.
 *
 *  Field:
 *    name          — nama produk
 *    category      — kategori produk
 *    description   — deskripsi singkat
 *    image         — kunci gambar (lihat src/data/images.js)
 *    imageAlt      — deskripsi gambar untuk aksesibilitas
 *    availability  — OPSIONAL: 'available' | 'seasonal' | 'preorder' | null
 *                    (null = label tidak ditampilkan)
 *    isPlaceholder — true selama data belum diperbarui
 *
 *  Catatan: website ini bukan toko online. Tombol pada setiap
 *  produk membuka WhatsApp untuk pertanyaan / pemesanan.
 * ============================================================
 */

export const productCategories = [
  'Poultry Products',
  'Duck Products',
  'Freshwater Fish',
  'Plantation Products',
  'Fresh Vegetables',
]

export const availabilityLabels = {
  available: 'Tersedia',
  seasonal: 'Musiman',
  preorder: 'Pre-order',
}

export const products = [
  {
    id: 'poultry',
    name: 'Poultry Products',
    category: 'Livestock',
    description: 'Hasil peternakan unggas kami. Detail jenis dan spesifikasi produk akan segera diperbarui.',
    image: 'product-poultry',
    imageAlt: 'Ayam di area peternakan',
    availability: null,
    isPlaceholder: true,
  },
  {
    id: 'duck',
    name: 'Duck Products',
    category: 'Livestock',
    description: 'Hasil peternakan bebek kami. Detail jenis dan spesifikasi produk akan segera diperbarui.',
    image: 'product-duck',
    imageAlt: 'Kawanan bebek ternak',
    availability: null,
    isPlaceholder: true,
  },
  {
    id: 'fish',
    name: 'Freshwater Fish',
    category: 'Aquaculture',
    description: 'Hasil budidaya ikan air tawar kami. Detail jenis dan spesifikasi produk akan segera diperbarui.',
    image: 'product-fish',
    imageAlt: 'Ikan air tawar hasil budidaya',
    availability: null,
    isPlaceholder: true,
  },
  {
    id: 'plantation',
    name: 'Plantation Products',
    category: 'Plantation',
    description: 'Hasil perkebunan kami. Detail jenis komoditas dan spesifikasi produk akan segera diperbarui.',
    image: 'product-plantation',
    imageAlt: 'Buah tropis hasil perkebunan',
    availability: null,
    isPlaceholder: true,
  },
  {
    id: 'vegetables',
    name: 'Fresh Vegetables',
    category: 'Agriculture',
    description: 'Hasil budidaya sayuran kami. Detail jenis dan spesifikasi produk akan segera diperbarui.',
    image: 'product-vegetables',
    imageAlt: 'Sayuran segar hasil panen',
    availability: null,
    isPlaceholder: true,
  },
]
