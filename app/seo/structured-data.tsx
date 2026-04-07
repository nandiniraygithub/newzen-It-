export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Newzen IT",
  "description": "Premium IT products supplier offering sales and purchase of Apple, Lenovo, Acer, Logitech, VU products with wholesale and corporate solutions.",
  "url": "https://newzen-it.com",
  "logo": "https://newzen-it.com/icon.svg",
  "foundingDate": "2017",
  "founder": {
    "@type": "Person",
    "name": "Niranjan Ray"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-XXXXXXXXXX",
    "contactType": "customer service",
    "email": "newzen.it18@gmail.com",
    "availableLanguage": ["English", "Hindi"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://www.linkedin.com/company/newzen-it"
  ],
  "knowsAbout": [
    "IT Products",
    "Apple Products",
    "Lenovo Computers",
    "Acer Laptops",
    "Logitech Accessories",
    "VU Displays",
    "Computer Hardware",
    "Wholesale IT",
    "Corporate Solutions"
  ],
  "offers": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Apple Products",
        "category": "Computers & Electronics"
      },
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer", 
      "itemOffered": {
        "@type": "Product",
        "name": "Lenovo Computers",
        "category": "Computers & Electronics"
      },
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product", 
        "name": "Acer Laptops",
        "category": "Computers & Electronics"
      },
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Logitech Accessories", 
        "category": "Computer Accessories"
      },
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "VU Displays",
        "category": "Computer Monitors"
      },
      "availability": "https://schema.org/InStock"
    }
  ]
}

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Newzen IT",
  "url": "https://newzen-it.com",
  "description": "Premium IT products supplier - Apple, Lenovo, Acer, Logitech, VU. Wholesale and corporate solutions available.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://newzen-it.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Newzen IT",
    "url": "https://newzen-it.com"
  }
}

export const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Newzen IT",
  "description": "IT products sales and purchase specialist offering wholesale and corporate solutions for Apple, Lenovo, Acer, Logitech, VU products.",
  "url": "https://newzen-it.com",
  "telephone": "+91-XXXXXXXXXX",
  "email": "newzen.it18@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "20.5937",
    "longitude": "78.9629"
  },
  "openingHours": "Mo-Fr 09:00-18:00",
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
  "currenciesAccepted": "INR"
}
