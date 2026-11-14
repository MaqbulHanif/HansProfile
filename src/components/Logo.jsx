import { siteConfig } from '../data/siteConfig'

/**
 * Logo sementara (wordmark + ikon daun).
 * PLACEHOLDER — ganti dengan file logo resmi bila sudah tersedia.
 * tone: 'dark' (teks hijau) | 'light' (teks krem)
 */
export default function Logo({ tone = 'dark', className = '' }) {
  const light = tone === 'light'
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
        <circle cx="20" cy="20" r="19" fill="none" stroke="currentColor" strokeOpacity="0.35" className={light ? 'text-cream' : 'text-forest'} />
        <path d="M20 31V16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className={light ? 'text-cream' : 'text-forest'} />
        <path d="M20 21c0-6 4-10 10-10 0 6-4 10-10 10Z" fill="#D8C8A8" />
        <path d="M20 25c0-5-3.5-8.5-8.5-8.5 0 5 3.5 8.5 8.5 8.5Z" fill="#829B78" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`font-serif text-2xl tracking-[0.06em] ${light ? 'text-cream' : 'text-forest'}`}>
          {siteConfig.shortName}
        </span>
        <span
          className={`mt-1 text-[0.5625rem] font-semibold tracking-[0.28em] ${light ? 'text-cream/70' : 'text-sage'}`}
        >
          {siteConfig.subName}
        </span>
      </span>
    </span>
  )
}
