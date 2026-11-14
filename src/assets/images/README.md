# Folder Foto Website

Folder ini **sengaja dikosongkan**. Selama foto belum ada, website menampilkan
placeholder hijau-krem berlogo daun di setiap posisi gambar.

## Cara menambahkan foto

Simpan foto di folder ini dengan **nama file sesuai kunci** di tabel bawah.
Format yang didukung: `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`.

```
hero.jpg            ← satu ukuran saja, sudah cukup
hero-800w.webp      ← (opsional) beberapa ukuran: akhiran -<lebar>w
hero-1600w.webp        browser memilih ukuran paling efisien
```

Jangan simpan dua versi (mis. `hero.jpg` dan `hero-800w.webp`) sekaligus untuk satu kunci,
karena file tanpa akhiran ukuran akan diutamakan.

Setelah menambah/mengganti foto, jalankan ulang `npm run dev` bila foto belum muncul.

## Daftar foto yang dibutuhkan

| Kunci (nama file) | Dipakai di | Proporsi tampil | Saran isi foto |
|---|---|---|---|
| `hero` | Hero (layar penuh) | lanskap lebar, ±16:9 | Hamparan lahan pertanian / peternakan. Sisi kiri sebaiknya tidak terlalu ramai (tempat teks) |
| `about` | About Us | potret 4:5 | Suasana lahan / kegiatan usaha |
| `livestock` | Kartu Livestock Farming | potret 4:5 | Peternakan ayam / bebek |
| `aquaculture` | Kartu Aquaculture | potret 4:5 | Kolam budidaya ikan |
| `plantation` | Kartu Plantation | potret 4:5 | Kebun buah / tanaman tropis |
| `agriculture` | Kartu Agriculture | potret 4:5 | Lahan sayuran |
| `product-poultry` | Produk: Poultry Products | lanskap 4:3 | Produk unggas |
| `product-duck` | Produk: Duck Products | lanskap 4:3 | Produk bebek |
| `product-fish` | Produk: Freshwater Fish | lanskap 4:3 | Ikan hasil budidaya |
| `product-plantation` | Produk: Plantation Products | lanskap 4:3 | Hasil kebun |
| `product-vegetables` | Produk: Fresh Vegetables | lanskap 4:3 | Sayuran hasil panen |
| `approach` | Our Approach | lanskap 4:3 | Kegiatan perawatan / pengelolaan |
| `gallery-chicken` | Galeri (kotak tinggi) | potret | Kegiatan peternakan ayam |
| `gallery-plantation` | Galeri (kotak lebar) | lanskap lebar | Area perkebunan |
| `gallery-duck` | Galeri | lanskap | Kegiatan peternakan bebek |
| `gallery-fish` | Galeri | lanskap | Kolam ikan |
| `gallery-vegetables` | Galeri (kotak tinggi) | potret | Budidaya sayuran |
| `gallery-harvest` | Galeri (kotak besar) | lanskap | Kegiatan panen |

Foto otomatis dipotong (crop tengah) mengikuti proporsi di atas, jadi letakkan objek utama di tengah foto.

## Rekomendasi teknis

- Lebar 1600–2000 px untuk `hero`; 1200–1600 px untuk foto lain.
- Ukuran file usahakan < 400 KB per foto (kompres dengan squoosh.app atau tinypng.com).
- Gunakan foto milik sendiri atau foto yang lisensinya jelas.
- Gambar untuk share link (Open Graph) disimpan terpisah di `public/og-image.jpg` (1200×630 px).
