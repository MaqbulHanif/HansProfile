import SectionHeading from '../components/SectionHeading'
import GalleryGrid from '../components/GalleryGrid'
import { galleryItems } from '../data/galleryData'

export default function GallerySection() {
  return (
    <section id="gallery" aria-labelledby="gallery-title" className="section-space bg-white">
      <div className="container-page">
        <SectionHeading
          id="gallery-title"
          eyebrow="Our Activities"
          title="A Glimpse of Our Journey."
          description="Discover the activities, environments, and daily operations behind Hans Sustainable Farming."
          align="center"
        />
        <div className="mt-14 md:mt-16">
          <GalleryGrid items={galleryItems} />
        </div>
      </div>
    </section>
  )
}
