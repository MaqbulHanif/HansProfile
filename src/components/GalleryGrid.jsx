import { useState } from 'react'
import { Maximize2 } from 'lucide-react'
import SmartImage from './SmartImage'
import Lightbox from './Lightbox'
import Reveal from './Reveal'

/**
 * Ukuran kotak per `layout`.
 *  - Mobile (1 kolom): semua foto 4:3
 *  - Tablet (2 kolom): 'wide' & 'large' melebar 2 kolom
 *  - Desktop (3 kolom): ukuran penuh sesuai layout
 */
const SPANS = {
  normal: '',
  tall: 'lg:row-span-2',
  wide: 'sm:col-span-2',
  large: 'sm:col-span-2 lg:row-span-2',
}

const SIZES = {
  normal: '(min-width: 640px) 33vw, 100vw',
  tall: '(min-width: 640px) 33vw, 100vw',
  wide: '(min-width: 640px) 66vw, 100vw',
  large: '(min-width: 640px) 66vw, 100vw',
}

/** Grid galeri editorial (bento) + lightbox. */
export default function GalleryGrid({ items }) {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <>
      <ul className="grid grid-flow-row-dense grid-cols-1 gap-4 sm:auto-rows-[15rem] sm:grid-cols-2 md:gap-5 lg:auto-rows-[17rem] lg:grid-cols-3">
        {items.map((item, index) => {
          const layout = SPANS[item.layout] !== undefined ? item.layout : 'normal'
          return (
            <Reveal
              as="li"
              key={item.id}
              delay={0.05 * (index % 3)}
              className={`aspect-[4/3] sm:aspect-auto ${SPANS[layout]}`}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Lihat foto: ${item.title}`}
                className="group relative block h-full w-full overflow-hidden rounded-sm text-left"
              >
                <SmartImage
                  image={item.image}
                  alt={item.alt}
                  sizes={SIZES[layout]}
                  imgClassName="transition-transform duration-[1200ms] ease-organic group-hover:scale-[1.05]"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-forest-ink/75 via-forest-ink/5 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                  <span>
                    <span className="block font-serif text-xl text-cream md:text-2xl">{item.title}</span>
                    <span className="mt-0.5 block text-xs text-cream/75">{item.caption}</span>
                  </span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream/15 text-cream backdrop-blur-sm transition-all duration-500 group-hover:bg-cream group-hover:text-forest">
                    <Maximize2 className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                </span>
              </button>
            </Reveal>
          )
        })}
      </ul>

      <Lightbox
        items={items}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </>
  )
}
