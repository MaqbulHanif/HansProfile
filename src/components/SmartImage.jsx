import { useState } from 'react'
import { Leaf } from 'lucide-react'
import { getImage } from '../data/images'

/**
 * Gambar dengan lazy-loading, srcset otomatis, dan placeholder brand
 * bila file tidak tersedia / gagal dimuat.
 *
 * Wrapper parent sebaiknya menentukan ukuran (mis. aspect-ratio)
 * agar tidak terjadi layout shift.
 */
export default function SmartImage({
  image,
  alt,
  sizes = '100vw',
  priority = false,
  className = '',
  imgClassName = '',
}) {
  const source = getImage(image)
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)

  if (!source || failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-sage-light/70 to-beige/60 ${className}`}
      >
        <Leaf className="h-10 w-10 text-forest/40" strokeWidth={1.25} aria-hidden="true" />
      </div>
    )
  }

  return (
    <div className={`h-full w-full bg-sage-light/40 ${className}`}>
      <img
        src={source.src}
        srcSet={source.srcSet}
        sizes={source.srcSet ? sizes : undefined}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover transition-opacity duration-700 ${
          loaded || priority ? 'opacity-100' : 'opacity-0'
        } ${imgClassName}`}
      />
    </div>
  )
}
