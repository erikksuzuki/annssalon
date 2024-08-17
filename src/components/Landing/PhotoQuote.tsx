import Image from 'next/image'
import JakePortrait from 'src/assets/photos/jakedavenport.jpg'
import Heading from '../common/Heading'
import SubHeading from '../common/SubHeading'
import IconStar from '@/assets/icons/common/IconStar'

const PhotoQuote = () => {
  return (
    <section className="mx-auto max-w-[1280px] px-4 py-14">
      <div className="grid grid-cols-1 shadow-lg card lg:grid-cols-2 bg-white m-4 rounded-xl border-2 border-white overflow-hidden">
        <article className="flex items-start justify-center flex-col text-black px-16 font-bold">
          <div className="flex gap-x-1 mb-5 text-[#ffaa00]">
            {[...Array(5)].map((index: number) => (
              <IconStar className="w-[18px] h-[18px]" key={index} />
            ))}
          </div>

          <Heading className="opacity-[0.9] mb-12" capitalized={false}>
            Kim is the best. I have lived in Las Vegas for 12 years and have
            only missed a haircut from her once. I&apos;ll keep going until I
            move away. When I go back to vacation in Vegas, I&apos;ll drop in
            for a haircut. It&apos;s quite rejuvenating.
          </Heading>

          <SubHeading>Jake D. | Google</SubHeading>
        </article>
        <article className="w-full h-full">
          <Image
            src={JakePortrait.src}
            alt="Jake Davenport"
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
