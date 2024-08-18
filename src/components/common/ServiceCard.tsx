import * as AspectRatio from '@radix-ui/react-aspect-ratio'
import clsx from 'clsx'
import SubHeading from './SubHeading'
import Heading from './Heading'
import Button from './Button'
import { ReactNode } from 'react'
import ShopPhoto from '@/assets/photos/shop.jpg'
import Link from 'next/link'

interface ServiceCardProps {
  className?: string
  imgSrc?: string
  subHeading?: string
  heading?: string
  children?: ReactNode
  buttonLink?: string
}

const ServiceCard = ({
  className,
  imgSrc = ShopPhoto.src,
  subHeading = 'Prices',
  heading = 'Service Name',
  children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  buttonLink = '/',
}: ServiceCardProps) => {
  return (
    <Link href={buttonLink}>
      <div className="px-1 py-10">
        <div
          style={{
            transitionProperty: 'all',
            transitionDuration: '150ms',
            transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          }}
          className={clsx(
            'flex flex-col w-full shadow-lg hover:shadow-xl card bg-white relative top-0 hover:top-[-8px]',
            'm-4 rounded-xl border-2 border-white overflow-hidden pb-8 group cursor-pointer',
            className
          )}
        >
          <AspectRatio.Root ratio={9 / 6}>
            <div
              style={{
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className="w-full h-full"
            />
          </AspectRatio.Root>
          <article className="text-black w-full text-center mt-8 px-8">
            <SubHeading className="mb-1 opacity-[0.7]">{subHeading}</SubHeading>
            <Heading className="mb-3">{heading}</Heading>
            <p className="mb-3 opacity-[0.7]">{children}</p>
            <Button
              className="group-hover:bg-[#EA0C9E] group-hover:text-[#fff]"
              size="md"
              secondaryColor
            >
              Learn More
            </Button>
          </article>
        </div>
      </div>
    </Link>
  )
}

export default ServiceCard
