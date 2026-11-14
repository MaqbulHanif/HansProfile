import { m } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'
import SmartImage from '../components/SmartImage'
import PrimaryButton from '../components/PrimaryButton'
import { businessCategories } from '../data/businessData'
import { scrollToSection } from '../utils/contact'

const ease = [0.22, 1, 0.36, 1]
const rise = (delay) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease },
})

export default function HeroSection() {
  const go = (id) => (e) => {
    e.preventDefault()
    scrollToSection(id)
  }

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[640px] items-end overflow-hidden bg-forest-ink h-[100svh] max-h-[1000px]"
    >
      {/* Background image */}
      <m.div
        className="absolute inset-0 -z-20"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease }}
      >
        <SmartImage
          image="hero"
          alt="Hamparan lahan pertanian tropis yang hijau"
          priority
          sizes="100vw"
        />
      </m.div>

      {/* Readability overlays */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-forest-ink/45 md:bg-transparent md:bg-gradient-to-r md:from-forest-ink/85 md:via-forest-ink/50 md:to-forest-ink/10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-forest-ink/80 to-transparent"
      />

      <div className="container-page w-full pb-14 pt-32 md:pb-20">
        <div className="max-w-3xl">
          <m.p {...rise(0.15)} className="eyebrow flex items-center gap-3 text-beige">
            <span aria-hidden="true" className="h-px w-10 bg-beige/70" />
            Family-Owned Agricultural Business
          </m.p>

          <m.h1
            id="hero-title"
            {...rise(0.3)}
            className="mt-6 font-serif text-[2.75rem] leading-[1.02] text-cream sm:text-6xl md:text-7xl lg:text-[5.25rem]"
          >
            Growing Today,
            <br />
            <span className="text-beige">Sustaining Tomorrow.</span>
          </m.h1>

          <m.p {...rise(0.45)} className="mt-7 max-w-xl text-base leading-relaxed text-cream/85 md:text-lg">
            Hans Sustainable Farming merupakan bisnis keluarga yang bergerak di bidang peternakan,
            perikanan, dan pertanian dengan komitmen mengembangkan potensi alam secara produktif dan
            berkelanjutan.
          </m.p>

          <m.div {...rise(0.6)} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <PrimaryButton href="#business" onClick={go('business')} variant="light" icon={ArrowRight}>
              Discover Our Business
            </PrimaryButton>
            <PrimaryButton href="#contact" onClick={go('contact')} variant="ghost-light">
              Contact Us
            </PrimaryButton>
          </m.div>
        </div>

        {/* Business lines strip */}
        <m.div
          {...rise(0.8)}
          className="mt-14 flex items-end justify-between gap-6 border-t border-cream/20 pt-6 md:mt-20"
        >
          <ul className="grid flex-1 grid-cols-2 gap-x-6 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-10">
            {businessCategories.map(({ id, title, icon: Icon }) => (
              <li key={id} className="flex items-center gap-2.5 text-[0.8125rem] font-medium text-cream/80">
                <Icon className="h-4 w-4 shrink-0 text-beige" strokeWidth={1.5} aria-hidden="true" />
                {title}
              </li>
            ))}
          </ul>
          <a
            href="#about"
            onClick={go('about')}
            className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:bg-cream/10 md:flex"
            aria-label="Gulir ke bagian About Us"
          >
            <ArrowDown className="h-5 w-5 motion-safe:animate-bounce" strokeWidth={1.5} />
          </a>
        </m.div>
      </div>
    </section>
  )
}
