import IconCalendly from '@/assets/icons/common/IconCalendly'
import IconCv from '@/assets/icons/common/IconCv'
import IconGithub from '@/assets/icons/common/IconGithub'
import IconInstagram from '@/assets/icons/common/IconInstagram'
import IconLinkedin from '@/assets/icons/common/IconLinkedin'
import IconTumblr from '@/assets/icons/common/IconTumblr'
import { ReactNode } from 'react'

export interface SocialLink {
  name: string
  href: string
  icon: ReactNode
}

export const socialLinkData: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/erikksuzuki/',
    icon: <IconGithub className="w-6 h-6 hover:text-[#DDDDDD]" />,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: <IconInstagram className="w-6 h-6 hover:text-[#FAA6A0]" />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: <IconLinkedin className="w-6 h-6 hover:text-[#4DA6F0]" />,
  },
  {
    name: 'Tumblr',
    href: 'https://tumblr.com',
    icon: <IconTumblr className="w-6 h-6 hover:text-[#4DCAE0]" />,
  },
]
