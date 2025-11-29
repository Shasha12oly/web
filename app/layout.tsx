import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { AuthProvider } from '@/context/auth-context'
import './globals.css'

export const metadata: Metadata = {
  title: 'KodeHost - Premium VPS & Minecraft Server Hosting',
  description: 'Experience next-level VPS and Minecraft servers designed for speed, stability, and reliability. Fast. Secure. Scalable. KodeHost delivers zero lag, instant setup, and 24/7 expert support.',
  applicationName: 'KodeHost',
  authors: [{ name: 'KodeHost' }],
  keywords: 'minecraft hosting,VPS hosting,game server hosting,discord bot hosting,VPS servers,cloud servers,gaming servers,KodeHost,low latency hosting,DDoS protection,24/7 support,custom server hosting,modded game hosting,server rental',
  referrer: 'origin-when-cross-origin',
  creator: 'Anthony',
  publisher: 'Hostzy',
  robots: 'index, follow',
  openGraph: {
    title: 'KodeHost - Premium VPS & Minecraft Server Hosting',
    description: 'Experience next-level VPS and Minecraft servers designed for speed, stability, and reliability. Fast. Secure. Scalable.',
    url: 'https://kodehost.com',
    siteName: 'KodeHost - Premium Hosting',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://hostzy.in/meta/Banner.png',
        width: 1200,
        height: 630,
        alt: 'Hostzy - Game Hosting, VPS & Bot Servers',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KodeHost - Premium VPS & Minecraft Server Hosting',
    description: 'Experience next-level VPS and Minecraft servers designed for speed, stability, and reliability. Fast. Secure. Scalable.',
    images: ['https://kodehost.com/meta/Banner.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/Logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/Logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: { url: '/Logo.png', sizes: '180x180', type: 'image/png' },
  },
  manifest: '/manifest.json',
  formatDetection: {
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Hostzy',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'crawl-delay': '10',
    'revisit-after': '7 days',
    'google-site-verification': 'vzsKvhNUgAPlCbf1annB0Sl-bttSFos87mhOyQSU2aY',
    'msapplication-TileColor': '#1e40af',
    'msapplication-config': '/browserconfig.xml',
    'terms-of-service': 'https://hostzy.in/terms-of-services',
    'privacy-policy': 'https://hostzy.in/privacy-policy',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Hostzy',
              url: 'https://hostzy.in',
              logo: 'https://hostzy.in/Logo.png',
              description: 'Premium game hosting, VPS, and Bot server solutions for gaming communities and developers',
              serviceType: ['Game Server Hosting', 'VPS Hosting', 'Bot Hosting', 'Cloud Infrastructure'],
              areaServed: 'Worldwide',
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Gaming & Server Solutions',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Game Server Hosting',
                      description: 'High-performance game servers with DDoS protection',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'VPS Hosting',
                      description: 'Virtual private servers with full root access',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Bot Hosting',
                      description: 'Bot Hosting Servers for maximum performance',
                    },
                  },
                ],
              },
              sameAs: ['https://discord.gg/eCvmucyNnf'],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                availableLanguage: 'English',
                serviceType: 'Technical Support',
                url: 'https://discord.gg/eCvmucyNnf',
              },
              founder: {
                '@type': 'Person',
                name: 'Manit',
              },
              termsOfService: 'https://hostzy.in/terms-of-services',
              privacyPolicy: 'https://hostzy.in/privacy-policy',
            }),
          }}
        />
      </head>
      <body className="antialiased min-h-screen bg-gray-950 text-white transition-colors duration-300">
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
