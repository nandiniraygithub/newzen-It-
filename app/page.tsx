"use client"

import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { ProductCategories } from "@/components/product-categories"
// import { FeaturedProjects } from "@/components/featured-projects"
import { AboutSection } from "@/components/about-section"
import { MarqueeSection } from "@/components/marquee-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { BrandAuthorization } from "@/components/brand-authorization"
import { Footer } from "@/components/footer"
import LoadingScreen from "@/components/loading-screen"
import { useState, useEffect } from "react"
import SmoothScroll from "@/lib/smooth-scroll"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <main className="min-h-screen overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      <SmoothScroll />
      <Hero />
      <MarqueeSection />
      {/* <Stats /> */}
      <AboutSection  />
      <ProductCategories />
      {/* <FeaturedProjects /> */}
      <WhyChooseUs />
      <BrandAuthorization />
      <Footer />
    </main>
  )
}
