'use client'

import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function DownloadButton() {
  const handleDownload = () => {
    window.open('/lenovo-certification.pdf', '_blank')
  }

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-lg font-semibold text-black transition-all hover:bg-white/90 hover:scale-105 active:scale-95"
    >
      Verify Certification
    </button>
  )
}

export function BrandAuthorization() {
  const ref = useRef(null)

  useEffect(() => {
    gsap.to(ref.current, {
      y: -250,
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "top top",
        scrub: true,
      }
    })
  }, [])

  return (
    <section id="authorization" ref={ref} className="relative z-40 -mt-32 min-h-screen bg-[#f8f8f8] rounded-t-3xl">
      <div className="container mx-auto px-4 py-24">
        <div className="rounded-3xl bg-gradient-to-br from-primary/20 via-card to-background p-8 md:p-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-block rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-black">
                Authorized Partner
              </div>
              <h2>
                Lenovo Authorized <br />
                <span className="text-primary">Partnership.</span>
              </h2>
              <p className="text-lg text-foreground">
                Our strategic alliance with Lenovo ensures that our clients receive 100% genuine products, official
                warranties, and prioritized technical support. From ThinkPads to powerful server arrays, we are your
                certified gateway to Lenovo excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <DownloadButton />
                {/* <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/20 bg-transparent text-primary hover:bg-primary/5"
                >
                  View All Certifications
                </Button> */}
              </div>
            </div>

            <div className="relative h-full w-full">
  <img
    src="/images/lenovo-logo.png"
    alt="Lenovo Partnership"
    className="h-full w-full object-cover rounded-2xl"
  />
</div>

          </div>
        </div>
      </div>
    </section>
  )
}
