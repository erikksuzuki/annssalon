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

import SwipePng from '@/assets/swipe.png'
import Image from 'next/image'

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
    <section className="relative">
      <Carousel
        ssr={true}
        responsive={responsive}
        infinite={true}
        arrows={isAboveMd ? true : false}
        partialVisible={isAboveMd ? false : true}
        centerMode={isAboveMd ? true : false}
      >
        <ServiceCard
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
          Expert stylists provide a personalized haircut designed to enhance
          natural features and hair texture. Includes a thorough consultation,
          precision cutting, and styling, resulting in a flattering and
          manageable look that reflects your style.
        </ServiceCard>
        <ServiceCard
          imgSrc={ServiceHighlightColor.src}
          subHeading="Starting at $90"
          heading="Hair Highlighting"
          dialogContent={[
            { name: 'Long Hair', price: 160 },
            { name: 'Medium Hair', price: 120 },
            { name: 'Short Hair', price: 90 },
          ]}
        >
          Enhance your hair's dimension with customized highlights or balayage.
          This service adds depth and light, with subtle or bold effects, using
          techniques that blend seamlessly with your natural hair for a
          sun-kissed, modern finish.
        </ServiceCard>
        <ServiceCard
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
          Transform your look with professional hair coloring services. Whether
          covering grays or achieving a bold new hue, our colorists use
          top-quality products to ensure vibrant, long-lasting results tailored
          to your skin tone and style.
        </ServiceCard>

        <ServiceCard
          imgSrc={ServiceMensHairCutPhoto.src}
          subHeading="Starting at $23"
          heading="Men's Hair Cut"
          dialogContent={[
            { name: "Men's Hair Cut", price: 23 },
            { name: 'Hair Cut & Shampoo', price: 30 },
            { name: 'Hair Cut & Color', price: 65 },
          ]}
        >
          A precise and stylish cut tailored to each client’s preferences,
          considering hair type and lifestyle. The service includes
          consultation, cut, and finish, ensuring a polished look that suits
          individual tastes.
        </ServiceCard>
        <ServiceCard
          imgSrc={ServicePerm.src}
          subHeading="Starting at $70"
          heading="Hair Perming"
          dialogContent={[
            { name: 'Long Hair', price: 110 },
            { name: 'Short Hair', price: 70 },
          ]}
        >
          Add volume and texture with professional perming services. Our
          stylists use gentle techniques to create natural-looking curls or
          waves, tailored to your hair type, for a bouncy, resilient style that
          lasts.
        </ServiceCard>
        <ServiceCard
          imgSrc={ServiceNails.src}
          subHeading="Starting at $20"
          heading="Pedicures and Manicures"
          dialogContent={[
            { name: 'Manicure', price: 20 },
            { name: 'Gel Manicure', price: 35 },
            { name: 'Pedicure', price: 30 },
          ]}
        >
          Pamper your hands and feet with our manicure and pedicure services.
          Enjoy meticulous nail shaping, cuticle care, and polish application in
          a relaxing environment, leaving your nails looking polished and
          perfectly groomed.
        </ServiceCard>
        <ServiceCard
          imgSrc={EyelashExtensions.src}
          subHeading="Starting at $70"
          heading="Eyelash Extensions"
          dialogContent={[
            { name: 'Full set', price: 120 },
            { name: 'Retouch', price: 70 },
          ]}
        >
          Enhance your eyes with expertly applied eyelash extensions. Our
          technicians customize length, curl, and volume to create a natural or
          dramatic look, using high-quality lashes that are lightweight,
          comfortable, and long-lasting for a beautiful finish.
        </ServiceCard>
      </Carousel>
      <div className="text-center opacity-[0.4] block md:hidden absolute bottom-[0px] w-full z-[-100]">
        <Image
          className="inline-block"
          src={SwipePng.src}
          width={200}
          height={200}
          alt={'swipe'}
        />
      </div>
    </section>
  )
}

export default ServiceCarousel
