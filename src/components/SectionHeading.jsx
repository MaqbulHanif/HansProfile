import Reveal from './Reveal'

/**
 * Judul section: eyebrow kecil + headline serif + deskripsi.
 * tone: 'light' (latar terang) | 'dark' (latar hijau)
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
  id,
  className = '',
}) {
  const centered = align === 'center'
  const dark = tone === 'dark'

  return (
    <Reveal className={`${centered ? 'mx-auto text-center' : ''} max-w-2xl ${className}`}>
      {eyebrow && (
        <p
          className={`eyebrow flex items-center gap-3 ${centered ? 'justify-center' : ''} ${
            dark ? 'text-beige' : 'text-sage'
          }`}
        >
          <span aria-hidden="true" className={`h-px w-8 ${dark ? 'bg-beige/60' : 'bg-sage'}`} />
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`mt-5 font-serif text-4xl leading-[1.08] md:text-5xl lg:text-[3.5rem] ${
          dark ? 'text-cream' : 'text-forest'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-relaxed md:text-lg ${dark ? 'text-cream/75' : 'text-muted'}`}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
