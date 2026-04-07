import Head from 'next/head'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogImage?: string
  structuredData?: any
}

export default function SEOHead({
  title = 'Newzen IT - Sales & Purchase of Apple, Lenovo, Acer, Logitech, VU Products',
  description = 'Newzen IT offers wholesale and corporate bulk orders for top IT brands including Apple, Lenovo, Acer, Logitech, VU, Zebronics. Trusted IT products supplier since 2017 with genuine products and reliable service.',
  keywords = 'IT products sales, Apple dealer, Lenovo supplier, Acer reseller, Logitech distributor, VU displays, wholesale IT, corporate bulk orders, Newzen IT, computer hardware, laptop sales, monitor sales',
  canonical = 'https://newzen-it.com',
  ogImage = '/og-image.jpg',
  structuredData
}: SEOHeadProps) {
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Niranjan Ray" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Newzen IT" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@newzenit" />
      
      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#004d43" />
      <meta name="msapplication-TileColor" content="#004d43" />
      <meta name="application-name" content="Newzen IT" />
      <meta name="apple-mobile-web-app-title" content="Newzen IT" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icon-light-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icon-light-32x32.png" />
      <link rel="apple-touch-icon" href="/apple-icon.png" />
      
      {/* Manifest */}
      <link rel="manifest" href="/manifest.json" />
      
      {/* DNS Prefetch for Performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
    </Head>
  )
}
