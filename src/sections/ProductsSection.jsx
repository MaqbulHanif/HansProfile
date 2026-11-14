import { MessageCircle } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import ProductCard from '../components/ProductCard'
import PrimaryButton from '../components/PrimaryButton'
import Reveal from '../components/Reveal'
import { products } from '../data/productData'
import { buildWhatsAppLink } from '../utils/contact'

export default function ProductsSection() {
  return (
    <section id="products" aria-labelledby="products-title" className="section-space bg-cream">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            id="products-title"
            eyebrow="Our Harvest"
            title="Nature's Potential, Our Harvest."
            description="Discover the agricultural and livestock products developed through our farming activities."
          />
          <Reveal delay={0.15} className="lg:pb-2">
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              Informasi ketersediaan dan spesifikasi produk dapat ditanyakan langsung kepada tim kami.
            </p>
            <PrimaryButton
              href={buildWhatsAppLink(
                'Halo Hans Sustainable Farming, saya ingin menanyakan informasi produk yang tersedia.',
              )}
              external
              variant="outline"
              size="sm"
              icon={MessageCircle}
              iconPosition="left"
              className="mt-4"
            >
              Ask About Products
            </PrimaryButton>
          </Reveal>
        </div>

        {/* Mobile: horizontal scroll — Tablet/Desktop: grid */}
        <ul
          className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:mt-14 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 xl:grid-cols-5"
          aria-label="Daftar kategori produk"
        >
          {products.map((product, index) => (
            <Reveal
              as="li"
              key={product.id}
              delay={0.06 * index}
              className="w-[78%] shrink-0 snap-start sm:w-[45%] md:w-auto"
            >
              <ProductCard product={product} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
