/**
 * ============================================================
 *  KONFIGURASI UTAMA WEBSITE — Hans Sustainable Farming
 * ============================================================
 *  Semua informasi perusahaan & kontak diatur dari file ini.
 *  Nilai bertanda `PLACEHOLDER` WAJIB diganti dengan data asli
 *  sebelum website dipublikasikan.
 * ============================================================
 */

export const siteConfig = {
  name: 'Hans Sustainable Farming',
  shortName: 'HANS',
  subName: 'SUSTAINABLE FARMING',
  tagline: 'Growing Today, Sustaining Tomorrow.',

  // Deskripsi singkat untuk footer
  shortDescription:
    'Bisnis keluarga yang bergerak di bidang peternakan, perikanan, perkebunan, dan pertanian dengan komitmen pada pengelolaan yang bertanggung jawab dan berkelanjutan.',

  // PLACEHOLDER — domain resmi website (dipakai untuk SEO / share link)
  siteUrl: 'https://example.com',

  contact: {
    whatsapp: {
      // PLACEHOLDER — format internasional tanpa "+" / spasi, contoh: 6281234567890
      number: '628118073448',
      // PLACEHOLDER — format yang ditampilkan di website
      display: '+62 811-8073-448',
      // Pesan pembuka default saat pengunjung menekan tombol WhatsApp
      defaultMessage:
        'Halo Hans Sustainable Farming, saya ingin mendapatkan informasi lebih lanjut mengenai usaha Anda.',
    },

    // PLACEHOLDER — email bisnis
    email: 'Suhanda.k@gmail.com',

    location: {
      // PLACEHOLDER — alamat lengkap lokasi usaha
      address: 'Sukaasih, Sukatani, Bekasi Regency, West Java 17630',
      // PLACEHOLDER — kota / kabupaten, provinsi
      region: 'Indonesia',
      // PLACEHOLDER — link Google Maps (Share → Copy link)
      mapsUrl: 'https://www.google.com/maps/place/Hans+Sustainable+Farming/@-6.2125411,107.1329863,17z/data=!4m6!3m5!1s0x2e6985001ac61979:0x7442901054d25236!8m2!3d-6.2125464!4d107.1355612!16s%2Fg%2F11yx843ctk!13s106754306741175742414?entry=ttu&g_ep=EgoyMDI2MTExMC4wIKXMDSoASAFQAw%3D%3D',
      // OPSIONAL — link embed Google Maps (Share → Embed a map → salin isi src="...").
      // Biarkan kosong ('') untuk menyembunyikan peta.
      mapsEmbedUrl: '',
    },

    // PLACEHOLDER — akun media sosial. Hapus baris yang tidak digunakan.
    social: [
      // { platform: 'Instagram', handle: '@hanssustainablefarming', url: 'https://instagram.com/' },
    ],
  },
}

export const navigationLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'business', label: 'Our Business' },
  { id: 'products', label: 'Our Products' },
  { id: 'approach', label: 'Our Approach' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
]
