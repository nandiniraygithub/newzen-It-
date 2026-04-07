'use client'

import { useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

export function ScrollEffects() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isLoading) return

    // Refresh and kill old triggers
    ScrollTrigger.getAll().forEach(t => t.kill())

    const sections = gsap.utils.toArray<HTMLElement>(".stack-section")

    // All sections have a smooth entrance
    sections.forEach((section, i) => {
      if (i > 0) {
        gsap.from(section, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        })
      }
    })

    // Overlay effect for sections
    const overlaySections = gsap.utils.toArray<HTMLElement>(".overlay-section")
    
    overlaySections.forEach((section) => {
      // Create overlay element
      const overlay = document.createElement('div')
      overlay.className = 'scroll-overlay'
      overlay.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.3), transparent);
        pointer-events: none;
        z-index: 10;
      `
      section.appendChild(overlay)

      // Animate overlay based on scroll
      gsap.to(overlay, {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "bottom 40%",
          scrub: 1,
          toggleActions: "play none none reverse"
        }
      })
    })

    // Parallax effect for hero elements
    const heroElements = gsap.utils.toArray<HTMLElement>(".hero-parallax")
    
    heroElements.forEach((element) => {
      gsap.to(element, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      })
    })

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [isLoading])

  return null
}
