import IconQuote from '@/assets/icons/common/IconQuote'
import SubHeading from '../common/SubHeading'

const GiantQuote = () => {
  return (
    <section className="py-24 bg-[#1F7482]">
      <article className="max-w-[1280px] w-full mx-auto flex flex-col items-center justify-center text-center px-4 md:px-8">
        <div className="border-y-8 px-4 md:px-12 border-[rgba(255,255,255,0.2)] pt-20 relative">
          <div className="absolute h-[96px] w-[96px] left-[50%] top-[-54px] bg-[#1F7482] ml-[-48px] flex items-center justify-center">
            <IconQuote className="w-10 h-10 opacity-[0.7]" />
          </div>
          <p className="text-theme-heading-xs md:text-theme-heading-lg font-sedan">
            My hair looks amazing! I was referred here by a friend who has been
            coming here for years. Nikki cuts hair like a dream, and knows how
            to cut layers beautifully. I recommend this salon.
          </p>
          <SubHeading
            size="sm"
            className="md:text-base mt-12 md:mt-20 pb-20 opacity-[0.7]"
          >
            Charla G. | Google
          </SubHeading>
        </div>
      </article>
    </section>
  )
}

export default GiantQuote
