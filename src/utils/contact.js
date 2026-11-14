import { siteConfig } from '../data/siteConfig'

/**
 * Buat link WhatsApp (wa.me) dengan pesan yang sudah terisi.
 * @param {string} [message]
 */
export function buildWhatsAppLink(message = siteConfig.contact.whatsapp.defaultMessage) {
  const number = siteConfig.contact.whatsapp.number.replace(/\D/g, '')
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

/** Link WhatsApp untuk pertanyaan produk tertentu. */
export function buildProductInquiryLink(productName) {
  return buildWhatsAppLink(
    `Halo Hans Sustainable Farming, saya ingin menanyakan informasi mengenai produk: ${productName}.`,
  )
}

/** Link mailto dengan subjek & isi pesan. */
export function buildMailtoLink(subject = '', body = '') {
  const params = new URLSearchParams()
  if (subject) params.set('subject', subject)
  if (body) params.set('body', body)
  const query = params.toString().replace(/\+/g, '%20')
  return `mailto:${siteConfig.contact.email}${query ? `?${query}` : ''}`
}

/** Susun isi form kemitraan menjadi pesan teks. */
export function formatInquiryMessage(values) {
  const lines = [
    'Halo Hans Sustainable Farming,',
    '',
    `Saya ingin menyampaikan pertanyaan / peluang kerja sama:`,
    '',
    `Nama: ${values.fullName}`,
    values.company ? `Perusahaan: ${values.company}` : null,
    `Email: ${values.email}`,
    `Telepon: ${values.phone}`,
    `Subjek: ${values.subject}`,
    '',
    values.message,
  ]
  return lines.filter((line) => line !== null).join('\n')
}

/** Scroll halus ke section berdasarkan id. */
export function scrollToSection(id) {
  const el = document.getElementById(id)
  if (!el) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
  history.replaceState(null, '', id === 'home' ? window.location.pathname : `#${id}`)
}
