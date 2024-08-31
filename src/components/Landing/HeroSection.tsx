'use client'

import { useMessages, useTranslations } from 'next-intl'

import { Link } from 'react-scroll'

import Button from '@/components/common/Button'
import ShopPhoto from '@/assets/photos/shop.jpg'
import SubHeading from '@/components/common/SubHeading'
import Heading from '../common/Heading'

import { useResponsive } from '@/hooks/useResponsive'

const HeroSection = () => {
  const { isAboveMd } = useResponsive('md')
  return (
    <section>
      <article
        id="desktop-content"
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
            backdropFilter: isAboveMd
              ? 'brightness(0.46) contrast(83%)'
              : 'brightness(0.86) contrast(83%)',
          }}
        >
          <div className="text-left py-[180px] px-4 md:px-8 w-full mx-auto max-w-[1280px] relative">
            <div className="hidden md:block">
              <Heading size="xl">
                Your One-Stop Shop For All Your
                <br />
                Beauty Needs in Las Vegas
              </Heading>
              <SubHeading className="mt-4">
                Professional hair, nails and skin care
              </SubHeading>

              <Link to="contactsection" duration={1000}>
                <Button shadow className="mt-12" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>
      <article className="bg-[#111] text-center py-12 px-4 md:hidden block">
        <h1 className="text-[20px] font-sedan">
          Your One-Stop Shop For All Your
          <br />
          Beauty Needs in Las Vegas
        </h1>
        <SubHeading className="mt-4" size="sm">
          Professional hair, nails and skin care
        </SubHeading>
        <Button shadow className="mt-6" size="md">
          Book Now
        </Button>
      </article>
    </section>
  )
}

export default HeroSection
