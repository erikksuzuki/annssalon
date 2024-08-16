'use client'

import WorkSection from '@/components/common/WorkSection'

import PrimeDIcon from '@/assets/link-icons/PrimeD.png'
import LinkedInIcon from '@/assets/link-icons/linkedin.png'

import GeminiBackground from '@/assets/backgrounds/gemini-bitria.jpg'
import { runGeminiAnimations } from '@/components/WorkGemini/animations'
import SlideShowGeminiLogo from '@/components/WorkGemini/SlideShowLogo'
import SlideShowOnboarding from '@/components/WorkGemini/SlideShowOnboarding'

const PrimeDeviationSection = ({
  columnsReversed = false,
}: {
  columnsReversed?: boolean
}) => {
  return (
    <WorkSection
      translationKey={'prime-d'}
      columnsReversed={columnsReversed}
      linkArray={[
        {
          label: 'Website',
          href: 'https://primedeviation.com',
          iconSrc: PrimeDIcon.src,
        },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/company/primedeviation/about/',
          iconSrc: LinkedInIcon.src,
        },
      ]}
      technologiesArray={[
        'React',
        'Next.JS',
        'ChatGPT',
        'Tailwind',
        'Supabase',
        'Vercel',
      ]}
      illustrationBgSrc={GeminiBackground.src}
      animationFunction={null}
      illustrationSlides={[]}
    />
  )
}

export default PrimeDeviationSection
