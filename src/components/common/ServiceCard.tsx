import * as AspectRatio from '@radix-ui/react-aspect-ratio'
import clsx from 'clsx'
import SubHeading from './SubHeading'
import Heading from './Heading'
import Button from './Button'
import { ReactNode } from 'react'
import ShopPhoto from '@/assets/photos/shop.jpg'

import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'

type Service = {
  name: string
  price: number
}

interface ServiceCardProps {
  className?: string
  imgSrc?: string
  subHeading?: string
  heading?: string
  children?: ReactNode
  dialogContent?: Service[]
}

const ServiceCard = ({
  className,
  imgSrc = ShopPhoto.src,
  subHeading = 'Prices',
  heading = 'Service Name',
  children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  dialogContent = [{ name: 'Service', price: 30 }],
}: ServiceCardProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
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
              <SubHeading className="mb-1 opacity-[0.7]">
                {subHeading}
              </SubHeading>
              <Heading className="mb-3">{heading}</Heading>
              <p className="mb-3 opacity-[0.7]">{children}</p>
              <Button
                className="group-hover:bg-[#EA0C9E] group-hover:text-[#fff]"
                size="md"
                secondaryColor
              >
                View Services
              </Button>
            </article>
          </div>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent bg-white rounded-md fixed left-[50%] top-[50%] w-[90vw] max-w-[450px] max-h-[85vh] p-[25px]">
          <Dialog.Title className="m-0 font-medium text-theme-heading-xs text-black font-sedan">
            {heading}
          </Dialog.Title>
          <Dialog.DialogContent className="text-black">
            <ul className="mt-2">
              {dialogContent.map((service: Service, index: number) => {
                const lastItem = index === dialogContent.length - 1
                return (
                  <li
                    key={service.name + index}
                    className={clsx('flex flex-row justify-between pt-2', {
                      'border-b border-[#ccc] pb-2': !lastItem,
                    })}
                  >
                    <p>{service.name}</p>
                    <p>${service.price}</p>
                  </li>
                )
              })}
            </ul>
          </Dialog.DialogContent>
          <Dialog.Close className="text-black" asChild>
            <button className="IconButton" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default ServiceCard
