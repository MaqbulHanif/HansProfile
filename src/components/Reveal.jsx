import { m } from 'framer-motion'

/**
 * Animasi muncul saat di-scroll (fade + geser halus).
 * Otomatis dinonaktifkan untuk pengguna dengan preferensi reduced-motion
 * melalui <MotionConfig reducedMotion="user"> di App.
 */
export default function Reveal({ as = 'div', delay = 0, y = 24, className = '', children, ...rest }) {
  const Component = m[as] ?? m.div
  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  )
}
