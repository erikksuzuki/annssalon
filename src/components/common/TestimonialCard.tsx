import clsx from 'clsx'
import SubHeading from './SubHeading'
import { ReactNode } from 'react'
import ShopPhoto from '@/assets/photos/shop.jpg'

import IconStar from '@/assets/icons/common/IconStar'
import IconExternalPage from '@/assets/icons/common/IconExternalPage'
import IconQuote from '@/assets/icons/common/IconQuote'
import Link from 'next/link'

interface TestimonialCardProps {
  className?: string
  imgSrc?: string
  subHeading?: string
  name?: string
  platform?: 'yelp' | 'google'
  href?: string
  children?: ReactNode
}

const TestimonialCard = ({
  className,
  imgSrc = ShopPhoto.src,
  name = 'John Doe',
  platform = 'google',
  href = 'https://google.com',
  children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
}: TestimonialCardProps) => {
  return (
    <div className="px-1 pb-[240px] md:pb-[40px] flex-grow h-full">
      <div
        style={{
          transitionProperty: 'all',
          transitionDuration: '150ms',
          transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
        }}
        className={clsx(
          'flex flex-col h-full w-full shadow-lg hover:shadow-xl card bg-[#1F7482] relative top-0 md:hover:top-[-8px]',
          'm-4 rounded-xl overflow-hidden pb-3 group px-4 cursor-move',
          className
        )}
      >
        <article className="w-full h-full text-center pt-[80px] mt-[76px] px-4 rounded-lg bg-[#fff] text-[#000] relative">
          <header>
            <div
              style={{
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className="rounded-full w-[100px] h-[100px] border-4 border-[#fff] absolute top-[-52px] ml-[-52px] left-[50%]"
            />
            <div className="text-[#bcd6da]">
              <IconQuote className="absolute top-[-16px] ml-[-120px] left-[50%] w-8 h-8 opacity-[0.7]" />
              <div
                style={{ transform: 'rotate(180deg)' }}
                className="absolute top-[-16px] ml-[84px] left-[50%]"
              >
                <IconQuote className=" w-8 h-8 opacity-[0.7]" />
              </div>
            </div>
            <SubHeading size="sm" className="mb-6 opacity-[0.9] text-black">
              {name}
            </SubHeading>
          </header>
          <div className="h-[calc(100%-54px)] flex justify-between flex-col">
            <div className="h-full flex flex-col justify-center">
              <p className="text-[#777] text-left">{children}</p>
            </div>
            <article className="pt-6 w-full text-left flex justify-between items-center">
              <SubHeading
                size="sm"
                className="mt-[2px] opacity-[0.6] text-black"
              >
                {platform}
              </SubHeading>
              <figure
                className={clsx(
                  'flex gap-x-1',
                  { 'text-[#FB433C]': platform === 'yelp' },
                  { 'text-[#fa0]': platform === 'google' }
                )}
              >
                {[...Array(5)].map((index: number) => (
                  <IconStar className="w-[16px] h-[16px]" key={index} />
                ))}
              </figure>
            </article>
          </div>
          <div
            id="quoteBubbleTriangle"
            className="bg-white w-[28px] h-[28px] absolute bottom-[-28px] left-[16px]"
            style={{ clipPath: 'polygon(0 0,100% 0,0 100%)' }}
          />
        </article>
        <div className="text-right mt-2">
          <Link href={href} target="_blank">
            <span className="text-theme-sm md:opacity-[0.5] group-hover:opacity-[1] inline-flex items-center gap-x-2">
              View Full Review <IconExternalPage className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
