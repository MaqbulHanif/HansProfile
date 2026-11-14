import { Bird, Fish, Trees, Sprout, ShieldCheck, Award, TrendingUp, ClipboardList, Gem, Droplets, RefreshCw } from 'lucide-react'

/** Bidang usaha — Section "Our Business" */
export const businessCategories = [
  {
    id: 'livestock',
    title: 'Livestock Farming',
    icon: Bird,
    image: 'livestock',
    imageAlt: 'Ayam dipelihara di area peternakan terbuka',
    description:
      'Pengembangan peternakan unggas dan hewan ternak lainnya, dengan fokus pada pemeliharaan dan pengelolaan yang terencana.',
    categories: ['Chickens', 'Ducks', 'Other Livestock'],
  },
  {
    id: 'aquaculture',
    title: 'Aquaculture',
    icon: Fish,
    image: 'aquaculture',
    imageAlt: 'Kolam budidaya ikan air tawar',
    description:
      'Kegiatan budidaya ikan dengan memperhatikan pengelolaan lingkungan dan kualitas pemeliharaan.',
    categories: ['Freshwater Fish Farming', 'Aquaculture'],
  },
  {
    id: 'plantation',
    title: 'Plantation',
    icon: Trees,
    image: 'plantation',
    imageAlt: 'Area perkebunan tanaman buah tropis',
    description:
      'Pengembangan perkebunan dan pemanfaatan lahan untuk menghasilkan komoditas pertanian.',
    categories: ['Fruit Plantation', 'Tropical Crops'],
  },
  {
    id: 'agriculture',
    title: 'Agriculture',
    icon: Sprout,
    image: 'agriculture',
    imageAlt: 'Lahan budidaya sayuran',
    description:
      'Budidaya sayuran dan berbagai tanaman pangan untuk mendukung produktivitas pertanian.',
    categories: ['Vegetables', 'Food Crops', 'Horticulture'],
  },
]

/** Nilai inti — Section "About Us" */
export const coreValues = [
  {
    title: 'Sustainability',
    icon: ShieldCheck,
    description: 'Pengembangan usaha dengan memperhatikan keberlanjutan.',
  },
  {
    title: 'Quality',
    icon: Award,
    description: 'Mengutamakan kualitas dalam pengelolaan dan hasil produksi.',
  },
  {
    title: 'Growth',
    icon: TrendingUp,
    description: 'Mengembangkan potensi usaha secara berkelanjutan.',
  },
]

/** Prinsip kerja — Section "Our Approach" */
export const farmingPrinciples = [
  {
    title: 'Responsible Management',
    icon: ClipboardList,
    description: 'Pengelolaan peternakan dan pertanian secara terencana.',
  },
  {
    title: 'Quality Focus',
    icon: Gem,
    description: 'Memperhatikan kualitas proses pemeliharaan dan hasil produksi.',
  },
  {
    title: 'Resource Efficiency',
    icon: Droplets,
    description: 'Mengoptimalkan pemanfaatan lahan, air, dan sumber daya.',
  },
  {
    title: 'Continuous Improvement',
    icon: RefreshCw,
    description: 'Terus mengembangkan metode dan pengelolaan usaha.',
  },
]
