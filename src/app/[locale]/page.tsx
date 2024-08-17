import { useMessages, useTranslations } from 'next-intl'

import WorkDescription from '@/components/common/WorkDescription'
import SocialLinks from '@/components/common/SocialLinks'
import { socialLinkData } from '../socialLinkData'
import LanguagePicker from '@/components/common/LanguageSwitcher'

import AsciiPortrait from '@/components/Header/AsciiPortrait'
import Button from '@/components/common/Button'
import SubHeading from '@/components/common/SubHeading'
import Heading from '@/components/common/Heading'
import GiantQuote from '@/components/Landing/GiantQuote'
import PhotoQuote from '@/components/Landing/PhotoQuote'

export default function Home() {
  const t = useTranslations('header')
  const messages = useMessages() as any
  const paragraphsArray = Object.values(
    messages.header.introduction.paragraphs ?? {}
  )
  const technologiesArray: string[] = [
    'React',
    'Next.js 14',
    'Tailwind CSS',
    'Supabase',
    'Vercel',
    'Contentful',
    'Gsap',
    'Framer Motion',
    'Mantine UI',
    'Radix UI',
    'Zustand',
    'Tauri',
  ]

  return (
    <div>
      <main className="bg-black">
        <section className="text-left py-24 px-4 md:px-8 w-full mx-auto max-w-[1280px] relative">
          <div className="absolute top-4 md:top-24 right-4">
            <LanguagePicker />
          </div>
          <h1 className="text-theme-heading-lg font-sedan">
            Raising Your Standard for
            <br />
            Hair Salons in Las Vegas
          </h1>
          <Button size="md" shadow />

          <div className="mt-10">
            <SubHeading>Too many choices</SubHeading>
            <Heading>Find your forever salon</Heading>
          </div>
        </section>
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
