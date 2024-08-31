import type { Metadata } from 'next'
import '@/styles/globals.css'
import clsx from 'clsx'
import { Noto_Emoji, Lato, Sedan, Permanent_Marker } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { type Locale } from 'src/locales'
import SocialLinks from '@/components/common/SocialLinks'
import { socialLinkData } from '../socialLinkData'
import Analytics from './Analytics'

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'landing' })
  return {
    title: "Ann's Salon",
    description:
      "Ann's Salon is a cherished gem in Chinatown Las Vegas, beloved for its warm, accommodating atmosphere and excellent service. The staff are known for their expertise, particularly in handling diverse hair types, including Asian hair. Many customers, some loyal for over 15 years, praise the salon for consistently delivering stylish cuts, colors, and relaxing experiences. The salon's commitment to customer satisfaction has earned it strong recommendations and a dedicated clientele.",
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
      url: 'https://annssalon.vercel.app',
      siteName: "Ann's Salon",
      images: [
        {
          url: 'https://annssalon.vercel.app',
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

const permanentMarker = Permanent_Marker({
  subsets: [],
  display: 'swap',
  variable: '--font-marker',
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
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <meta http-equiv="ScreenOrientation" content="autoRotate:disabled" />
        <Analytics />
      </head>
      <body
        className={clsx(
          'bg-[#E6E6E6] text-white',
          lato.variable,
          sedan.variable,
          permanentMarker.variable,
          'font-lato'
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <header className="bg-[#111] py-4">
            <nav className="mx-auto max-w-[1280px] px-8 justify-between hidden md:flex">
              <h1 className="font-marker text-[40px]">Ann&apos;s Salon</h1>
              <div className="text-right text-base flex flex-col justify-center items-end">
                <div>5700 W. Spring Mountain Rd</div>
                <div>(702)-367-3117</div>
              </div>
            </nav>

            <nav className="mx-auto max-w-[1280px] px-8 justify-between md:hidden flex">
              <h1 className="font-marker text-theme-heading-xs">
                Ann&apos;s Salon
              </h1>
            </nav>
          </header>
          <main
            className={clsx(
              { 'font-exo': locale === 'en' },
              { 'font-noto-jp': locale === 'jp' }
            )}
          >
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default RootLayout
