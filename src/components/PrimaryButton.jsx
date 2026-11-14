/**
 * Tombol / link CTA dengan beberapa varian.
 *  - primary   : hijau hutan (CTA utama)
 *  - light     : krem, untuk di atas foto / latar gelap
 *  - outline   : garis tepi gelap
 *  - ghost-light: garis tepi terang, untuk di atas foto
 *
 * Bila `href` diberikan, dirender sebagai <a>; selain itu <button>.
 */
const VARIANTS = {
  primary: 'bg-forest text-cream hover:bg-forest-deep focus-visible:outline-forest',
  light: 'bg-cream text-forest hover:bg-white',
  outline: 'border border-forest/30 text-forest hover:border-forest hover:bg-forest hover:text-cream',
  'ghost-light': 'border border-cream/50 text-cream hover:border-cream hover:bg-cream/10',
}

const SIZES = {
  md: 'h-12 px-6 text-sm',
  sm: 'h-10 px-5 text-[0.8125rem]',
}

export default function PrimaryButton({
  href,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  external = false,
  className = '',
  children,
  ...rest
}) {
  const classes = `group inline-flex items-center justify-center gap-2.5 rounded-full font-medium tracking-wide transition-all duration-300 ease-organic disabled:cursor-not-allowed disabled:opacity-60 ${VARIANTS[variant]} ${SIZES[size]} ${className}`

  const iconEl = Icon ? (
    <Icon
      aria-hidden="true"
      className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
        iconPosition === 'right' ? 'group-hover:translate-x-0.5' : ''
      }`}
      strokeWidth={1.75}
    />
  ) : null

  const content = (
    <>
      {iconPosition === 'left' && iconEl}
      <span>{children}</span>
      {iconPosition === 'right' && iconEl}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  )
}
