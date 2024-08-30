'use client'

import ServiceCard from '@/components/common/ServiceCard'

import { useResponsive } from '@/hooks/useResponsive'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import ServiceMensHairCutPhoto from '@/assets/photos/services/menshaircut.jpg'
import ServiceWomansHairCutPhoto from '@/assets/photos/services/womenshaircut.jpg'
import ServiceHairColor from '@/assets/photos/services/haircolorservices.jpg'
import ServiceHighlightColor from '@/assets/photos/services/hairhighlights.jpg'
import ServicePerm from '@/assets/photos/services/perm.jpg'
import ServiceNails from '@/assets/photos/services/nails.jpg'
import EyelashExtensions from '@/assets/photos/services/eyelashextensions.jpg'

const responsive = {
  '2xl': {
    breakpoint: { min: 2000, max: 4600 },
    items: 5,
  },
  xl: {
    breakpoint: { min: 1280, max: 2000 },
    items: 3,
  },
  lg: {
    breakpoint: { min: 1024, max: 1280 },
    items: 3,
  },
  md: {
    breakpoint: { min: 768, max: 1024 },
    items: 3,
  },
  sm: {
    breakpoint: { min: 0, max: 768 },
    items: 1,
    partialVisibilityGutter: 30,
  },
}

const ServiceCarousel = () => {
  const { isAboveMd } = useResponsive('md')
  return (
    <Carousel
      ssr={true}
      responsive={responsive}
      infinite={true}
      arrows={isAboveMd ? true : false}
      partialVisible={isAboveMd ? false : true}
      centerMode={isAboveMd ? true : false}
    >
      <ServiceCard
        className="mb-0"
        imgSrc={ServiceMensHairCutPhoto.src}
        subHeading="Starting at $23"
        heading="Men's Hair Cut"
        dialogContent={[
          { name: "Men's Hair Cut", price: 23 },
          { name: 'Hair Cut & Shampoo', price: 30 },
          { name: 'Hair Cut & Color', price: 65 },
        ]}
      >
        Two reasons you should find a stylist and stick with them, consistency
        and efficiency. As we get to know your hair better, your cut gets
        better, and we get faster. It&apos;s that simple.
      </ServiceCard>
      <ServiceCard
        className="mb-0"
        imgSrc={ServiceWomansHairCutPhoto.src}
        subHeading="Starting at $30"
        heading="Women's Haircut"
        dialogContent={[
          { name: 'Long Haircut & Layer', price: 40 },
          { name: 'Medium Haircut & Layer', price: 33 },
          { name: 'Short Haircut', price: 30 },
          { name: 'Shampoo for Long Hair', price: 30 },
          { name: 'Shampoo & Blowdry', price: 25 },
          { name: 'Hot oil treatment', price: 25 },
        ]}
      >
        Two reasons you should find a stylist and stick with them, consistency
        and efficiency. As we get to know your hair better, your cut gets
        better, and we get faster. It&apos;s that simple.
      </ServiceCard>
      <ServiceCard
        className="mb-0"
        imgSrc={ServiceHairColor.src}
        subHeading="Starting at $60"
        heading="Hair Highlighting"
        dialogContent={[
          { name: 'Long Hair', price: 100 },
          { name: 'Medium Hair', price: 80 },
          { name: 'Short Hair', price: 65 },
          { name: 'Root Touchup', price: 60 },
        ]}
      >
        Two reasons you should find a stylist and stick with them, consistency
        and efficiency. As we get to know your hair better, your cut gets
        better, and we get faster. It&apos;s that simple.
      </ServiceCard>
      <ServiceCard
        className="mb-0"
        imgSrc={ServiceHighlightColor.src}
        subHeading="Starting at $90"
        heading="Hair Highlighting"
        dialogContent={[
          { name: 'Long Hair', price: 160 },
          { name: 'Medium Hair', price: 120 },
          { name: 'Short Hair', price: 90 },
        ]}
      >
        Two reasons you should find a stylist and stick with them, consistency
        and efficiency. As we get to know your hair better, your cut gets
        better, and we get faster. It&apos;s that simple.
      </ServiceCard>
      <ServiceCard
        className="mb-0"
        imgSrc={ServicePerm.src}
        subHeading="Starting at $70"
        heading="Hair Perming"
        dialogContent={[
          { name: 'Long Hair', price: 110 },
          { name: 'Short Hair', price: 70 },
        ]}
      >
        Two reasons you should find a stylist and stick with them, consistency
        and efficiency. As we get to know your hair better, your cut gets
        better, and we get faster. It&apos;s that simple.
      </ServiceCard>
      <ServiceCard
        className="mb-0"
        imgSrc={ServiceNails.src}
        subHeading="Starting at $20"
        heading="Pedicures and Manicures"
        dialogContent={[
          { name: 'Manicure', price: 20 },
          { name: 'Gel Manicure', price: 35 },
          { name: 'Pedicure', price: 30 },
        ]}
      >
        Two reasons you should find a stylist and stick with them, consistency
        and efficiency. As we get to know your hair better, your cut gets
        better, and we get faster. It&apos;s that simple.
      </ServiceCard>
      <ServiceCard
        className="mb-0"
        imgSrc={EyelashExtensions.src}
        subHeading="Starting at $70"
        heading="Eyelash Extensions"
        dialogContent={[
          { name: 'Full set', price: 120 },
          { name: 'Retouch', price: 70 },
        ]}
      >
        Two reasons you should find a stylist and stick with them, consistency
        and efficiency. As we get to know your hair better, your cut gets
        better, and we get faster. It&apos;s that simple.
      </ServiceCard>
    </Carousel>
  )
}

export default ServiceCarousel
