import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: '--font-geist' });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: '--font-geist-mono' });

export const metadata: Metadata = {
  title: 'Ritman Digital Marketing | Professional Social Media Solutions',
  description: 'Professional social media marketing solutions for businesses and creators. Strategic campaigns, audience growth, and brand awareness.',
  keywords: ['digital marketing', 'social media marketing', 'brand awareness', 'engagement optimization'],
  generator: 'Next.js',
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ritmandigital.com',
    title: 'Ritman Digital Marketing',
    description: 'Professional social media marketing solutions for businesses and creators',
    images: [
      {
        url: 'https://ritmandigital.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ritman Digital Marketing',
      }
    ]
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0f172a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
          :root {
            --font-geist: ${geist.variable};
            --font-geist-mono: ${geistMono.variable};
          }
        `}</style>
      </head>
      <body className={`${geist.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
