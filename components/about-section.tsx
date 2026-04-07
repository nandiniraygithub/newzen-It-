'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function AboutSection({ className }: { className?: string }) {
  const ref = useRef(null)

  useEffect(() => {
    gsap.to(ref.current, {
      y: -100,
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "top top",
        scrub: true,
      }
    })
  }, [])

  return (
    <section id="about" ref={ref} className="relative z-10 min-h-screen bg-white rounded-t-3xl">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
         <div className="space-y-8">
            <div className="space-y-4">
              <h2>
                Expertise in <span className="text-primary">Corporate IT</span> Procurement.
              </h2>
              <p className="text-lg leading-relaxed text-foreground">
                Established in 2017, Newzen IT has grown into a leading technology solutions provider. We specialize in
                serving corporate clients and dealers with high-quality IT infrastructure that drives innovation and
                efficiency.
              </p>
              
            </div>

            <ul className="space-y-4">
              {[
                "Authorized Lenovo Partner with genuine warranties",
                "Specialized in bulk corporate orders and procurement",
                "Strong dealer partnerships across the country",
                "End-to-end technical support and after-sales service",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="text-primary" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link href="/about">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <img
              src="/macbook-air-m4.avif"
              alt="Newzen IT Corporate Environment"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
