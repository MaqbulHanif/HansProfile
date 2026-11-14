import { Mail, MapPin, MessageCircle, ArrowUpRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import ContactForm from '../components/ContactForm'
import PrimaryButton from '../components/PrimaryButton'
import SocialIcon from '../components/SocialIcon'
import Reveal from '../components/Reveal'
import { siteConfig } from '../data/siteConfig'
import { buildWhatsAppLink } from '../utils/contact'

function ContactItem({ icon: Icon, label, children }) {
  return (
    <li className="flex gap-4 border-t border-line py-5">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/5 text-forest">
        {Icon}
      </span>
      <div className="min-w-0">
        <p className="eyebrow text-[0.625rem] text-sage">{label}</p>
        <div className="mt-1 text-[0.9375rem] text-charcoal">{children}</div>
      </div>
    </li>
  )
}

const linkClass =
  'inline-flex items-center gap-1 break-words border-b border-transparent transition-colors hover:border-forest hover:text-forest'

export default function ContactSection() {
  const { whatsapp, email, location, social } = siteConfig.contact
  const iconCls = 'h-[1.125rem] w-[1.125rem]'

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-space bg-cream">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            id="contact-title"
            eyebrow="Contact & Partnership"
            title="Let's Build a Sustainable Future Together."
          />
          <Reveal delay={0.1} className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Kami terbuka untuk menjalin hubungan dan peluang kerja sama dengan berbagai pihak yang memiliki
              visi untuk mengembangkan sektor pertanian dan peternakan.
            </p>
            <p className="text-charcoal">Mari terhubung dengan Hans Sustainable Farming.</p>
          </Reveal>

          <Reveal delay={0.15}>
            <PrimaryButton
              href={buildWhatsAppLink()}
              external
              icon={MessageCircle}
              iconPosition="left"
              className="mt-8"
            >
              Chat via WhatsApp
            </PrimaryButton>

            <ul className="mt-10 border-b border-line">
              <ContactItem icon={<MessageCircle className={iconCls} strokeWidth={1.5} aria-hidden="true" />} label="WhatsApp">
                <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {whatsapp.display}
                </a>
              </ContactItem>
              <ContactItem icon={<Mail className={iconCls} strokeWidth={1.5} aria-hidden="true" />} label="Business Email">
                <a href={`mailto:${email}`} className={linkClass}>
                  {email}
                </a>
              </ContactItem>
              <ContactItem icon={<MapPin className={iconCls} strokeWidth={1.5} aria-hidden="true" />} label="Business Location">
                <address className="not-italic">
                  {location.address}
                  <br />
                  <span className="text-muted">{location.region}</span>
                </address>
                <a
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-forest hover:underline"
                >
                  Open in Google Maps
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </ContactItem>
              {social.length > 0 && (
                <ContactItem icon={<SocialIcon platform={social[0].platform} className={iconCls} />} label="Social Media">
                  <ul className="flex flex-wrap gap-x-5 gap-y-1">
                    {social.map((item) => (
                      <li key={item.platform}>
                        <a href={item.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                          {item.handle || item.platform}
                        </a>
                      </li>
                    ))}
                  </ul>
                </ContactItem>
              )}
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>

          {location.mapsEmbedUrl && (
            <Reveal delay={0.15} className="mt-6 aspect-[16/9] overflow-hidden rounded-sm ring-1 ring-line">
              <iframe
                src={location.mapsEmbedUrl}
                title={`Lokasi ${siteConfig.name} di Google Maps`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
                allowFullScreen
              />
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}
