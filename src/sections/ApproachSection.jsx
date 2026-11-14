import SmartImage from '../components/SmartImage'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { farmingPrinciples } from '../data/businessData'

export default function ApproachSection() {
  return (
    <section
      id="approach"
      aria-labelledby="approach-title"
      className="section-space relative overflow-hidden bg-forest text-cream"
    >
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              id="approach-title"
              tone="dark"
              eyebrow="Our Commitment"
              title="Responsible Farming, Better Future."
              description="We believe that sustainable business growth starts with responsible management, quality practices, and continuous improvement."
            />
            <Reveal delay={0.15} className="mt-10 aspect-[4/3] overflow-hidden rounded-sm">
              <SmartImage
                image="approach"
                alt="Petani merawat tanaman di lahan pertanian"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </Reveal>
          </div>
        </div>

        <ol className="lg:col-span-7 lg:pt-4">
          {farmingPrinciples.map(({ title, description, icon: Icon }, index) => (
            <Reveal
              as="li"
              key={title}
              delay={0.05 * index}
              className="group grid grid-cols-[auto_1fr] gap-x-6 border-t border-cream/15 py-9 last:border-b md:grid-cols-[5rem_1fr_auto] md:gap-x-8 md:py-11"
            >
              <span className="font-serif text-4xl leading-none text-beige md:text-5xl">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-serif text-2xl leading-tight text-cream md:text-[2rem]">{title}</h3>
                <p className="mt-3 max-w-md text-[0.9375rem] leading-relaxed text-cream/70">{description}</p>
              </div>
              <span className="col-start-2 mt-5 flex h-12 w-12 items-center justify-center rounded-full border border-cream/20 text-beige transition-colors duration-500 group-hover:border-beige group-hover:bg-beige group-hover:text-forest md:col-start-3 md:mt-0">
                <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              </span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
