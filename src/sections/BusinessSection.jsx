import SectionHeading from '../components/SectionHeading'
import BusinessCard from '../components/BusinessCard'
import Reveal from '../components/Reveal'
import { businessCategories } from '../data/businessData'

export default function BusinessSection() {
  return (
    <section id="business" aria-labelledby="business-title" className="section-space bg-white">
      <div className="container-page">
        <SectionHeading
          id="business-title"
          eyebrow="What We Do"
          title="Our Business."
          description="Exploring the potential of agriculture, livestock, and aquaculture."
        />

        <ul className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 xl:grid-cols-4 md:mt-16">
          {businessCategories.map((business, index) => (
            <Reveal as="li" key={business.id} delay={0.08 * index}>
              <BusinessCard business={business} index={index} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
