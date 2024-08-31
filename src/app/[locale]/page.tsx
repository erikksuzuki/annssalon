import { useMessages, useTranslations } from 'next-intl'

import GiantQuote from '@/components/Landing/GiantQuote'
import PhotoQuote from '@/components/Landing/PhotoQuote'

import 'react-multi-carousel/lib/styles.css'
import ServiceCarousel from '@/components/Landing/ServiceCarousel'
import HeroSection from '@/components/Landing/HeroSection'
import TestimonialCarousel from '@/components/Landing/TestimonialCarousel'
import SubHeading from '@/components/common/SubHeading'

export default function Home() {
  const t = useTranslations('header')
  const messages = useMessages() as any

  return (
    <div>
      <HeroSection />
      <PhotoQuote />
      <section id="services">
        <header className="md:px-4 text-black font-sedan text-theme-heading-md mb-3">
          <h1 className="text-center text-black font-sedan text-theme-heading-md">
            Our Services
          </h1>
          <SubHeading
            size="sm"
            className="font-lato mt-2 opacity-[0.5] text-black text-center"
          >
            Professional hair, nails and skin care
          </SubHeading>
        </header>
        <ServiceCarousel />
      </section>

      <section className="mt-12">
        <GiantQuote />
      </section>
      <section id="services" className="mt-14">
        <header className="md:px-4 text-black font-sedan text-theme-heading-md mb-3">
          <h1 className="text-center text-black font-sedan text-theme-heading-md">
            More Testimonials
          </h1>
          <SubHeading
            size="sm"
            className="font-lato mt-2 opacity-[0.5] text-black text-center"
          >
            Fantastic Reviews from Loyal Customers
          </SubHeading>
        </header>
        <TestimonialCarousel />
      </section>

      <div className="py-24 px-4 md:px-8 w-full mx-auto max-w-[1024px]"></div>
    </div>
  )
}
