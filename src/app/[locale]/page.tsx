import { useMessages, useTranslations } from 'next-intl'

import GiantQuote from '@/components/Landing/GiantQuote'
import PhotoQuote from '@/components/Landing/PhotoQuote'

import 'react-multi-carousel/lib/styles.css'
import ServiceCarousel from '@/components/Landing/ServiceCarousel'
import HeroSection from '@/components/Landing/HeroSection'

export default function Home() {
  const t = useTranslations('header')
  const messages = useMessages() as any

  return (
    <div>
      <HeroSection />
      <ServiceCarousel />
      <PhotoQuote />
      <GiantQuote />
      <div className="py-24 px-4 md:px-8 w-full mx-auto max-w-[1024px]"></div>
    </div>
  )
}
