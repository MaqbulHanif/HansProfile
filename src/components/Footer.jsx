import { Mail, MapPin, MessageCircle } from 'lucide-react'
import Logo from './Logo'
import SocialIcon from './SocialIcon'
import { navigationLinks, siteConfig } from '../data/siteConfig'
import { businessCategories } from '../data/businessData'
import { buildWhatsAppLink, scrollToSection } from '../utils/contact'

function FooterHeading({ children }) {
  return <h2 className="eyebrow text-[0.6875rem] text-beige">{children}</h2>
}

export default function Footer() {
  const { whatsapp, email, location, social } = siteConfig.contact
  const year = new Date().getFullYear()

  const navigate = (id) => (e) => {
    e.preventDefault()
    scrollToSection(id)
  }

  const link = 'text-sm text-cream/70 transition-colors hover:text-cream'

  return (
    <footer className="bg-forest-ink text-cream">
      <div className="container-page pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/65">{siteConfig.shortDescription}</p>
            {social.length > 0 && (
              <ul className="mt-6 flex gap-3">
                {social.map((item) => (
                  <li key={item.platform}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${siteConfig.name} di ${item.platform}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-beige hover:bg-beige hover:text-forest-ink"
                    >
                      <SocialIcon platform={item.platform} className="h-[1.125rem] w-[1.125rem]" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <nav aria-label="Navigasi footer" className="lg:col-span-2">
            <FooterHeading>Navigation</FooterHeading>
            <ul className="mt-5 space-y-3">
              {navigationLinks.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} onClick={navigate(item.id)} className={link}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <FooterHeading>Our Business</FooterHeading>
            <ul className="mt-5 space-y-3">
              {businessCategories.map((item) => (
                <li key={item.id}>
                  <a href="#business" onClick={navigate('business')} className={link}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <FooterHeading>Contact</FooterHeading>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" className={`${link} flex gap-3`}>
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-beige" strokeWidth={1.5} aria-hidden="true" />
                  {whatsapp.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${email}`} className={`${link} flex gap-3 break-all`}>
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-beige" strokeWidth={1.5} aria-hidden="true" />
                  {email}
                </a>
              </li>
              <li>
                <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer" className={`${link} flex gap-3`}>
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-beige" strokeWidth={1.5} aria-hidden="true" />
                  <span>
                    {location.address}, {location.region}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-cream/10 pt-8 text-xs text-cream/50 md:flex-row md:items-center md:justify-between">
          <p>
            <span className="font-serif text-sm text-cream/80">{siteConfig.name}</span> — {siteConfig.tagline}
          </p>
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
