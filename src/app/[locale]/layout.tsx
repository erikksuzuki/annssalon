import type { Metadata } from 'next'
import '@/styles/globals.css'
import clsx from 'clsx'
import {
  Noto_Sans_Thai,
  Noto_Sans_JP,
  Sawarabi_Mincho,
  Ibarra_Real_Nova,
  Poppins,
  Space_Grotesk,
  Exo,
  Noto_Emoji,
  Roboto,
  Open_Sans,
  Fira_Code,
  Lato,
  Sedan,
} from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { type Locale } from 'src/locales'
import SocialLinks from '@/components/common/SocialLinks'
import { socialLinkData } from '../socialLinkData'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'landing' })
  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      title: "Ann's Salon",
      url: 'https://emptyblueprints.art',
      siteName: "Ann's Salon",
      images: [
        {
          url: 'https://emptyblueprints.art/opengraph-image.jpg',
          width: 1200,
          height: 630,
        },
      ],
      type: 'website',
    },
  }
}

export const viewport = {
  initialScale: 1.0,
  userScalable: false,
  width: 'device-width',
  height: 'device-height',
}

const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
  weight: ['100', '300', '400', '700', '900'],
})

const sedan = Sedan({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sedan',
  weight: ['400'],
})

const emoji = Noto_Emoji({
  subsets: [],
  display: 'swap',
  variable: '--font-emoji',
  weight: ['400'],
})

const RootLayout = async ({
  params: { locale },
  children,
}: Readonly<{
  children: React.ReactNode
  params: { locale: Locale }
}>) => {
  const messages = await getMessages()
  return (
    <html lang="en">
      <body
        className={clsx(
          'bg-[#0A2B3E] text-white',
          lato.variable,
          sedan.variable,
          'font-lato'
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <main
            className={clsx(
              { 'font-exo': locale === 'en' },
              { 'font-noto-jp': locale === 'jp' }
            )}
          >
            {children}
          </main>
          <footer className="bg-black">
            <main className="py-8 px-4 md:px-8 w-full mx-auto max-w-[1024px]">
              <SocialLinks
                data={socialLinkData}
                className="mt-4"
                label="Contact me at:"
              />
            </main>
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default RootLayout
