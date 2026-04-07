"use client"

import { useEffect } from "react"
import Lenis from "lenis"

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Handle anchor links
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          lenis.scrollTo(targetElement, {
            offset: -80, // Account for fixed navbar height
            duration: 1.2,
          })
        }
      }
    }

    // Add click listeners to all anchor links
    document.addEventListener('click', handleAnchorClick)

    return () => {
      lenis.destroy()
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])

  return null
}
