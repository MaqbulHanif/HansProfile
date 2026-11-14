import { useCallback, useEffect, useRef } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import SmartImage from './SmartImage'
import { useLockBodyScroll } from '../hooks/useScrollState'

/**
 * Lightbox galeri: navigasi keyboard (←, →, Esc), fokus terkunci
 * di dalam dialog, dan fokus dikembalikan ke elemen pemicu saat ditutup.
 */
export default function Lightbox({ items, index, onClose, onNavigate }) {
  const open = index !== null
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const item = open ? items[index] : null

  useLockBodyScroll(open)

  const go = useCallback(
    (step) => onNavigate((index + step + items.length) % items.length),
    [index, items.length, onNavigate],
  )

  useEffect(() => {
    if (!open) return undefined
    const previouslyFocused = document.activeElement
    closeRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') go(1)
      else if (e.key === 'ArrowLeft') go(-1)
      else if (e.key === 'Tab') {
        const focusables = dialogRef.current?.querySelectorAll('button')
        if (!focusables?.length) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      previouslyFocused?.focus?.()
    }
  }, [open, go, onClose])

  const iconButton =
    'flex h-12 w-12 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream/10'

  return (
    <AnimatePresence>
      {open && (
        <m.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`Galeri foto: ${item.title}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] flex flex-col bg-forest-ink/95 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <div className="container-page flex h-[4.5rem] shrink-0 items-center justify-between">
            <p className="text-sm tabular-nums text-cream/70">
              {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
            </p>
            <button ref={closeRef} type="button" onClick={onClose} className={iconButton} aria-label="Tutup galeri">
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>

          <div
            className="relative flex min-h-0 flex-1 items-center justify-center px-4 md:px-24"
            onClick={(e) => e.target === e.currentTarget && onClose()}
          >
            <m.figure
              key={item.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full max-h-full w-full max-w-6xl flex-col items-center justify-center"
            >
              <div className="relative min-h-0 w-full flex-1 overflow-hidden rounded-sm">
                <SmartImage
                  image={item.image}
                  alt={item.alt}
                  priority
                  sizes="90vw"
                  imgClassName="object-contain!"
                  className="bg-transparent!"
                />
              </div>
              <figcaption className="py-5 text-center">
                <span className="font-serif text-2xl text-cream">{item.title}</span>
                <span className="mt-1 block text-sm text-cream/65">{item.caption}</span>
              </figcaption>
            </m.figure>

            <button
              type="button"
              onClick={() => go(-1)}
              className={`${iconButton} absolute left-4 top-1/2 hidden -translate-y-1/2 md:flex`}
              aria-label="Foto sebelumnya"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className={`${iconButton} absolute right-4 top-1/2 hidden -translate-y-1/2 md:flex`}
              aria-label="Foto berikutnya"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex shrink-0 justify-center gap-4 pb-8 md:hidden">
            <button type="button" onClick={() => go(-1)} className={iconButton} aria-label="Foto sebelumnya">
              <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <button type="button" onClick={() => go(1)} className={iconButton} aria-label="Foto berikutnya">
              <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  )
}
