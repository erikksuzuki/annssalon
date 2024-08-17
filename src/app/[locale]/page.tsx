import { useMessages, useTranslations } from 'next-intl'

import SocialLinks from '@/components/common/SocialLinks'
import { socialLinkData } from '../socialLinkData'
import LanguagePicker from '@/components/common/LanguageSwitcher'

import Button from '@/components/common/Button'
import GiantQuote from '@/components/Landing/GiantQuote'
import PhotoQuote from '@/components/Landing/PhotoQuote'

import ShopPhoto from '@/assets/photos/shop.jpg'
import SubHeading from '@/components/common/SubHeading'

export default function Home() {
  const t = useTranslations('header')
  const messages = useMessages() as any

  return (
    <div>
      <main
        className="bg-black"
        style={{
          backgroundImage: `url(${ShopPhoto.src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div
          className="w-full h-full"
          style={{
            backdropFilter: 'brightness(0.46) contrast(83%)',
          }}
        >
          <section className="text-left py-[180px] px-4 md:px-8 w-full mx-auto max-w-[1280px] relative">
            <div className="absolute top-4 md:top-24 right-4">
              <LanguagePicker />
            </div>
            <h1 className="text-theme-heading-lg font-sedan">
              Your One-Stop Shop For All Your
              <br />
              Beauty Needs in Las Vegas
            </h1>
            <SubHeading className="mt-4">
              Professional hair, nails and skin care
            </SubHeading>
            <Button shadow className="mt-12" size="lg">
              Book Now
            </Button>
          </section>
        </div>
        {/* 
        <section className="text-left mb-8">
          <h1 className="text-theme-heading-xs font-poppins mb-3">
            Recent Blog Articles
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-md border border-white">some content</div>
            <div className="p-4 rounded-md border border-white">some content</div>
            <div className="p-4 rounded-md border border-white">some content</div>
          </div>
        </section>
      */}
      </main>
      <PhotoQuote />
      <GiantQuote />
      <div className="py-24 px-4 md:px-8 w-full mx-auto max-w-[1024px]"></div>
    </div>
  )
}
