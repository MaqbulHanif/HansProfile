import SmartImage from '../components/SmartImage'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { coreValues } from '../data/businessData'

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-space bg-cream">
      <div className="container-page grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        {/* Image column */}
        <Reveal className="relative lg:col-span-5">
          <div
            aria-hidden="true"
            className="absolute -bottom-5 -left-5 hidden h-2/3 w-2/3 bg-beige/50 md:block"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <SmartImage
              image="about"
              alt="Lahan pertanian dan perkebunan tropis di pedesaan"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
          <p className="relative mt-4 text-xs tracking-wide text-muted md:ml-auto md:w-max">
            Family-owned · Livestock · Aquaculture · Agriculture
          </p>
        </Reveal>

        {/* Text column */}
        <div className="lg:col-span-7">
          <SectionHeading
            id="about-title"
            eyebrow="Who We Are"
            title="Growing with Nature, Building for the Future."
          />

          <Reveal delay={0.1} className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-muted md:text-[1.0625rem]">
            <p>
              Hans Sustainable Farming merupakan usaha keluarga yang bergerak dalam pengembangan sektor
              peternakan, perikanan, dan pertanian.
            </p>
            <p>
              Berangkat dari semangat untuk mengembangkan potensi alam dan sumber daya yang dimiliki, kami
              berkomitmen membangun usaha agrikultur yang produktif, bertanggung jawab, dan berorientasi
              pada keberlanjutan.
            </p>
            <p>
              Melalui pengelolaan yang terus dikembangkan, kami ingin menghadirkan nilai positif bagi
              lingkungan, masyarakat, dan generasi mendatang.
            </p>
          </Reveal>

          <ul className="mt-12 grid gap-8 border-t border-line pt-10 sm:grid-cols-3 sm:gap-6">
            {coreValues.map(({ title, description, icon: Icon }, index) => (
              <Reveal as="li" key={title} delay={0.1 * index}>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest text-cream">
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-serif text-2xl text-forest">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
