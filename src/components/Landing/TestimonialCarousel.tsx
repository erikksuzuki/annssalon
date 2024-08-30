'use client'

import GraceS from '@/assets/photos/testimonials/henry-customer.jpg'
import StellaS from '@/assets/photos/testimonials/sean-customer.jpg'
import SunAh from '@/assets/photos/testimonials/jessica-customer.jpg'
import ChrissyM from '@/assets/photos/testimonials/nikki-customer.jpg'
import MarvicC from '@/assets/photos/testimonials/hanna-customer.jpg'
import JakePortrait from '@/assets/photos/jakedavenport.jpg'
import MariaR from '@/assets/photos/testimonials/ann-customer.jpg'
import WendyW from '@/assets/photos/testimonials/travis-customer.jpg'
import RatalieR from '@/assets/photos/testimonials/alex-customer.jpg'

import { useResponsive } from '@/hooks/useResponsive'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import TestimonialCard from '../common/TestimonialCard'

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

const TestimonialCarousel = () => {
  const { isAboveMd } = useResponsive('md')
  return (
    <Carousel
      ssr={true}
      responsive={responsive}
      infinite={true}
      partialVisible={isAboveMd ? false : true}
      centerMode={isAboveMd ? true : false}
    >
      <TestimonialCard
        className="mb-0"
        imgSrc={WendyW.src}
        name="Wendy W."
        platform="yelp"
        href="https://www.yelp.com/biz/anns-salon-las-vegas?hrid=CxRGNosme8NyMZy5hGXq7A&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"
      >
        <b className="text-black">Travis</b> is the man! Not everyone
        understands Asian hair. I wanted a chic and edgy look, so I went to
        Travis because it seemed like he understood my hair! I ended up getting
        a balayage too! Everyone speaks Vietnamese and decent English. Everyone
        was super sweet. On top of everything wonderful and amazing about{' '}
        <b className="text-black">Travis</b> and this place -- the price was
        such a good deal. AMAZING!!
      </TestimonialCard>
      <TestimonialCard
        className="mb-0"
        imgSrc={RatalieR.src}
        name="Ratalie R."
        platform="google"
        href="https://g.co/kgs/ZW61UNS"
      >
        Go see <b className="text-black">Alex</b>. Went there spontaneously to
        refresh my bob I am and super happy with the result. Super friendly,
        fast and good work. Stylist: Alex is super friendly and does great work.
        Highly recommend
      </TestimonialCard>
      <TestimonialCard
        className="mb-0"
        imgSrc={ChrissyM.src}
        name="Chrissy M."
        platform="yelp"
        href="https://www.yelp.com/biz/anns-salon-las-vegas?hrid=GD_A2OtXBOmG7iaTYNyLKQ&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"
      >
        I had really long hair that just needed to go.{' '}
        <b className="text-black">Nikki</b> gave me a recommendation for what
        she thought would look good on me, which incidentally happened to be
        exactly what I was going to ask for! It was like she read my mind! I
        also was able to get an appointment on the same day.{' '}
        <b className="text-black">Nikki</b> and everyone else at the salon were
        super friendly. Overall, great experience, ask for{' '}
        <b className="text-black">Nikki</b>!
      </TestimonialCard>
      <TestimonialCard
        className="mb-0"
        imgSrc={MariaR.src}
        name="Maria Lilibeth R."
        platform="yelp"
        href="https://www.yelp.com/biz/anns-salon-las-vegas?hrid=HDa_toqP7yW5rvPA3XevHw&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"
      >
        I have been going to Ann's Salon for 15+ years and my family has
        continually gone to the salon for all our haircuts, coloring & nails. We
        are very lucky to have <b className="text-black">Ann</b>, the
        owner/operator, as our main hairstylist. She has tons of loyal clients
        but she always finds a way to fit you in her schedule. I highly suggest
        you consider your next hair or nail appointment at Ann's Salon! You
        won't be disappointed. It's time to look your new you!
      </TestimonialCard>
      <TestimonialCard
        className="mb-0"
        imgSrc={StellaS.src}
        name="Stella S."
        platform="yelp"
        href="https://www.yelp.com/biz/anns-salon-las-vegas?hrid=6WWCXdDTUmyMFstuLIPQXA&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"
      >
        It&apos;s a hidden gem in Chinatown. After working long hours for days
        on end. I tried to find a place that can do a quick shampoo and style.{' '}
        <b className="text-black">Sean</b> shampooed my hair, and I have to say,
        it felt like I was in Asia again, getting the ultimate relaxing hair
        wash at such a reasonable price. 100% satisfied. I will definitely come
        back. Very friendly staff. Wonderful experience. Ask for{' '}
        <b className="text-black">Sean!</b>
      </TestimonialCard>
      <TestimonialCard
        className="mb-0"
        imgSrc={JakePortrait.src}
        name="Jake D."
        platform="google"
        href="https://g.co/kgs/654UZR6"
      >
        <b className="text-black">Kim</b> is the best. I have lived in Las Vegas
        for 12 years and have only missed a haircut from her once. I'll keep
        going until I move away. When I go back to vacation in Vegas, I'll drop
        in for a haircut. It's quite rejuvenating.
      </TestimonialCard>
      <TestimonialCard
        className="mb-0"
        imgSrc={GraceS.src}
        name="Grace S."
        platform="yelp"
        href="https://www.yelp.com/biz/anns-salon-las-vegas?hrid=Ptfepp7tA6OOpbFdrGcJOw&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"
      >
        I&apos;ve been coming here for 2 years now and they&apos;ve always done
        my hair perfect. <b className="text-black">Jenney</b> is the one who
        normally does it but I&apos;ve <b className="text-black">Henry</b> and{' '}
        <b className="text-black">Nina</b> have do mine in the past and they
        also did a fantastic job! I&apos;ve gotten highlights/color many times
        and will continue coming back and recommend it, everyone who works here
        is very friendly.
      </TestimonialCard>
      <TestimonialCard
        className="mb-0"
        imgSrc={SunAh.src}
        name="Sun Ah P."
        platform="yelp"
        href="https://www.yelp.com/biz/anns-salon-las-vegas?hrid=3aR94i8yFbIUh6V9kfJNJQ&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"
      >
        I highly recommend <b className="text-black">Jessica!</b> She was able
        to give me the blonde balayage of my dreams!!! I had came in with black
        virgin hair and she was able to turn me blonde in one session. She also
        gave me the Olaplex hair treatment. I left the salon with blonde,
        healthy hair! And it didn&apos;t smell like it&apos;s been bleached or
        dyed. I&apos;ve been receiving a lot of compliments! Very happy with my
        results!
      </TestimonialCard>
      <TestimonialCard
        className="mb-0"
        imgSrc={MarvicC.src}
        name="Marvic C."
        platform="google"
        href="https://g.co/kgs/oUHdE1g"
      >
        First time having a haircut here in Vegas and I highly recommend
        Ann&apos;s salon specially <b className="text-black">Hanna</b> she did a
        great job in my bangs I love it so much, I&apos;ll come back to this
        place. Great price as well.
      </TestimonialCard>
    </Carousel>
  )
}

export default TestimonialCarousel
