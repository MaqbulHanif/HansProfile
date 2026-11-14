import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react'
import Logo from './Logo'
import PrimaryButton from './PrimaryButton'
import { navigationLinks, siteConfig } from '../data/siteConfig'
import { useActiveSection, useLockBodyScroll, useScrolled } from '../hooks/useScrollState'
import { buildWhatsAppLink, scrollToSection } from '../utils/contact'

const SECTION_IDS = navigationLinks.map((link) => link.id)

export default function Navbar() {
  const scrolled = useScrolled(40)
  const active = useActiveSection(SECTION_IDS)
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)
  const firstLinkRef = useRef(null)

  useLockBodyScroll(open)

  // Tutup menu dengan tombol Escape & kembalikan fokus
  useEffect(() => {
    if (!open) return undefined
    firstLinkRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // Tutup menu bila layar dilebarkan ke ukuran desktop
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = (e) => e.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const handleNavigate = (event, id) => {
    event.preventDefault()
    setOpen(false)
    // Tunggu menu tertutup agar scroll lock dilepas lebih dulu
    requestAnimationFrame(() => scrollToSection(id))
  }

  const solid = scrolled || open

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500 ease-organic ${
        solid
          ? 'border-b border-line/80 bg-cream/90 shadow-[0_1px_24px_-12px_rgba(20,43,31,0.25)] backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav aria-label="Navigasi utama" className="container-page flex h-[4.5rem] items-center justify-between gap-6">
        <a
          href="#home"
          onClick={(e) => handleNavigate(e, 'home')}
          aria-label={`${siteConfig.name} — kembali ke atas`}
          className="relative z-10 rounded-sm"
        >
          <Logo tone={solid ? 'dark' : 'light'} />
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7">
            {navigationLinks
              .filter((link) => link.id !== 'contact')
              .map((link) => {
                const isActive = active === link.id
                return (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleNavigate(e, link.id)}
                      aria-current={isActive ? 'true' : undefined}
                      className={`relative py-2 text-[0.8125rem] font-medium tracking-wide transition-colors duration-300 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:transition-transform after:duration-500 after:ease-organic ${
                        solid
                          ? `after:bg-forest ${isActive ? 'text-forest' : 'text-charcoal/75 hover:text-forest'}`
                          : `after:bg-cream ${isActive ? 'text-cream' : 'text-cream/80 hover:text-cream'}`
                      } ${isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}`}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
          </ul>
          <PrimaryButton
            href="#contact"
            onClick={(e) => handleNavigate(e, 'contact')}
            variant={solid ? 'primary' : 'light'}
            size="sm"
            icon={ArrowRight}
          >
            Contact Us
          </PrimaryButton>
        </div>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          className={`relative z-10 -mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden ${
            solid ? 'text-forest hover:bg-forest/5' : 'text-cream hover:bg-cream/10'
          }`}
        >
          {open ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
        </button>
      </nav>
    </header>

      {/* Mobile menu — di luar <header> karena backdrop-blur pada header
          membuat elemen fixed di dalamnya ikut terkunci di area header */}
      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-[4.5rem] bottom-0 z-40 overflow-y-auto bg-cream lg:hidden"
          >
            <div className="container-page flex min-h-full flex-col pt-6 pb-10">
              <ul className="divide-y divide-line border-y border-line">
                {navigationLinks.map((link, index) => (
                  <li key={link.id}>
                    <a
                      ref={index === 0 ? firstLinkRef : undefined}
                      href={`#${link.id}`}
                      onClick={(e) => handleNavigate(e, link.id)}
                      aria-current={active === link.id ? 'true' : undefined}
                      className="flex items-center justify-between py-4 font-serif text-[1.75rem] leading-tight text-forest"
                    >
                      {link.label}
                      <span className="text-xs font-sans tabular-nums text-sage">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-10">
                <p className="text-sm text-muted">{siteConfig.tagline}</p>
                <PrimaryButton
                  href={buildWhatsAppLink()}
                  external
                  icon={MessageCircle}
                  iconPosition="left"
                  className="mt-4 w-full"
                >
                  Chat via WhatsApp
                </PrimaryButton>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  )
}
