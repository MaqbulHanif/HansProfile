import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import BusinessSection from './sections/BusinessSection'
import ProductsSection from './sections/ProductsSection'
import ApproachSection from './sections/ApproachSection'
import GallerySection from './sections/GallerySection'
import ContactSection from './sections/ContactSection'

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:text-sm focus:text-cream"
        >
          Lewati ke konten utama
        </a>
        <Navbar />
        <main id="main">
          <HeroSection />
          <AboutSection />
          <BusinessSection />
          <ProductsSection />
          <ApproachSection />
          <GallerySection />
          <ContactSection />
        </main>
        <Footer />
      </MotionConfig>
    </LazyMotion>
  )
}
