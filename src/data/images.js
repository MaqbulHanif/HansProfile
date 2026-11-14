/**
 * ============================================================
 *  REGISTRI GAMBAR TERPUSAT
 * ============================================================
 *  Semua foto disimpan di `src/assets/images/` dan dipanggil
 *  dengan "kunci" (nama file tanpa ekstensi), misalnya `hero`.
 *
 *  Cara mengganti foto:
 *    1. Siapkan foto baru (disarankan .webp / .jpg, lebar ±1600px).
 *    2. Hapus file lama dengan kunci yang sama, contoh:
 *         hero-800w.webp, hero-1600w.webp
 *    3. Simpan foto baru dengan nama kunci tsb, contoh: hero.jpg
 *       (opsional: sediakan beberapa ukuran dengan akhiran -800w, -1600w
 *        agar browser memilih ukuran yang paling efisien)
 *
 *  Bila foto tidak ditemukan / gagal dimuat, komponen <SmartImage>
 *  otomatis menampilkan placeholder bergaya brand.
 * ============================================================
 */

const modules = import.meta.glob('../assets/images/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
})

const FILE_PATTERN = /([^/]+?)(?:-(\d+)w)?\.(jpe?g|png|webp|avif)$/i

/** @type {Record<string, { src: string, srcSet?: string }>} */
const registry = {}

const grouped = {}
for (const [path, url] of Object.entries(modules)) {
  const match = path.match(FILE_PATTERN)
  if (!match) continue
  const [, key, width] = match
  grouped[key] ??= []
  grouped[key].push({ url, width: width ? Number(width) : null })
}

for (const [key, variants] of Object.entries(grouped)) {
  const sized = variants.filter((v) => v.width).sort((a, b) => a.width - b.width)
  const plain = variants.find((v) => !v.width)
  if (plain) {
    registry[key] = { src: plain.url }
  } else {
    registry[key] = {
      src: sized[sized.length - 1].url,
      srcSet: sized.map((v) => `${v.url} ${v.width}w`).join(', '),
    }
  }
}

/**
 * Ambil gambar berdasarkan kunci, atau URL eksternal (http/https).
 * @param {string} keyOrUrl
 * @returns {{ src: string, srcSet?: string } | null}
 */
export function getImage(keyOrUrl) {
  if (!keyOrUrl) return null
  if (/^https?:\/\//.test(keyOrUrl)) return { src: keyOrUrl }
  return registry[keyOrUrl] ?? null
}
