import Image from 'next/image'
import ShopSquare from 'src/assets/photos/shopphotosquare.jpg'
import Heading from '../common/Heading'
import SubHeading from '../common/SubHeading'
import IconStar from '@/assets/icons/common/IconStar'

const PhotoQuote = () => {
  return (
    <section className="mx-auto max-w-[1280px] md:px-4 py-14">
      <div className="grid grid-cols-1 shadow-lg card lg:grid-cols-2 bg-white m-4 rounded-xl border-2 border-white overflow-hidden">
        <article className="flex items-start justify-center flex-col text-black md:px-16 px-4 font-bold md:order-1 order-2 py-8">
          <SubHeading className="mb-6 text-[#1F7482]" size="md">
            A Decade of Loyal Customers
          </SubHeading>

          <Heading
            className="opacity-[0.8] mb-12"
            size="sm"
            capitalized={false}
          >
            Ann&apos;s Salon is a cherished gem in Chinatown, beloved for its
            warm, accommodating atmosphere and excellent service. The staff are
            known for their expertise, particularly in handling diverse hair
            types, including Asian hair. Many customers, some loyal for over 15
            years, praise the salon for consistently delivering stylish cuts,
            colors, and relaxing experiences. The salon&apos;s commitment to
            customer satisfaction has earned it strong recommendations and a
            dedicated clientele.
          </Heading>
        </article>
        <article className="w-full h-full md:order-2 order-1">
          <Image
            src={ShopSquare.src}
            alt="Shop Photo"
            width="800"
            height="800"
            className="w-full"
          />
        </article>
      </div>
    </section>
  )
}

export default PhotoQuote
