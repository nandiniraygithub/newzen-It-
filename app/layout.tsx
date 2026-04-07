import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import { organizationStructuredData, websiteStructuredData } from './seo/structured-data'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Newzen IT - Sales & Purchase of Apple, Lenovo, Acer, Logitech, VU Products',
  description: 'Newzen IT offers wholesale and corporate bulk orders for top IT brands including Apple, Lenovo, Acer, Logitech, VU, Zebronics. Trusted IT products supplier since 2017 with genuine products and reliable service.',
  keywords: 'IT products sales, Apple dealer, Lenovo supplier, Acer reseller, Logitech distributor, VU displays, wholesale IT, corporate bulk orders, Newzen IT, computer hardware, laptop sales, monitor sales',
  authors: [{ name: 'Niranjan Ray' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Newzen IT - Premium IT Products Sales & Purchase',
    description: 'Your trusted partner for IT products - Apple, Lenovo, Acer, Logitech, VU and more. Wholesale and corporate solutions available.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Newzen IT - IT Products Sales & Purchase',
    description: 'Premium IT products from Apple, Lenovo, Acer, Logitech, VU. Wholesale and corporate orders.',
  },
  generator: 'Newzen IT',
  manifest: '/manifest.json',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  other: {
    'theme-color': '#004d43',
    'msapplication-TileColor': '#004d43',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData)
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
