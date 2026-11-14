import { MessageCircle } from 'lucide-react'
import SmartImage from './SmartImage'
import { availabilityLabels } from '../data/productData'
import { buildProductInquiryLink } from '../utils/contact'

export default function ProductCard({ product }) {
  const { name, category, description, image, imageAlt, availability } = product
  const availabilityLabel = availability ? availabilityLabels[availability] : null

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-sm bg-white ring-1 ring-line transition-shadow duration-500 hover:shadow-[0_24px_48px_-28px_rgba(20,43,31,0.35)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <SmartImage
          image={image}
          alt={imageAlt}
          sizes="(min-width: 1280px) 20vw, (min-width: 768px) 33vw, 80vw"
          imgClassName="transition-transform duration-[1200ms] ease-organic group-hover:scale-[1.05]"
        />
        {availabilityLabel && (
          <span className="absolute right-3 top-3 rounded-full bg-cream/95 px-3 py-1 text-[0.6875rem] font-semibold text-forest">
            {availabilityLabel}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="eyebrow text-[0.625rem] text-sage">{category}</p>
        <h3 className="mt-2 font-serif text-2xl leading-tight text-forest">{name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>

        <a
          href={buildProductInquiryLink(name)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Tanyakan produk ${name} melalui WhatsApp`}
          className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-forest transition-colors hover:text-forest-deep"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
          <span className="border-b border-forest/30 pb-0.5 transition-colors group-hover:border-forest">
            Inquire Product
          </span>
        </a>
      </div>
    </article>
  )
}
