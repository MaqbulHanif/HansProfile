import SmartImage from './SmartImage'

export default function BusinessCard({ business, index }) {
  const { title, description, categories, image, imageAlt, icon: Icon } = business

  return (
    <article className="group flex h-full flex-col">
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
        <SmartImage
          image={image}
          alt={imageAlt}
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
          imgClassName="transition-transform duration-[1200ms] ease-organic group-hover:scale-[1.06]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-forest-ink/70 via-transparent to-forest-ink/35"
        />
        <span className="absolute left-5 top-5 font-serif text-lg text-cream/90">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="absolute bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-full bg-cream/95 text-forest transition-colors duration-500 group-hover:bg-forest group-hover:text-cream">
          <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
        </span>
      </div>

      <div className="flex flex-1 flex-col pt-6">
        <h3 className="font-serif text-[1.75rem] leading-tight text-forest">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
        <ul className="mt-auto flex flex-wrap gap-x-4 gap-y-1.5 pt-5" aria-label={`Kategori ${title}`}>
          {categories.map((category) => (
            <li
              key={category}
              className="flex items-center gap-2 text-xs font-medium tracking-wide text-charcoal/80"
            >
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-sage" />
              {category}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
