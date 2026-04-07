'use client'

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    no: "01",
    title: "Authorized Lenovo Partner",
    desc: "Direct access to Lenovo's premium portfolio with full manufacturer backing.",
  },
  {
    no: "02",
    title: "100% Genuine Products",
    desc: "We guarantee authenticity on every piece of hardware we sell.",
  },
  {
    no: "03",
    title: "Corporate & Dealer Sales",
    desc: "Tailored procurement strategies for bulk orders and reseller networks.",
  },
  {
    no: "04",
    title: "Competitive Pricing",
    desc: "Best-in-market rates without compromising on quality or service.",
  },
  {
    no: "05",
    title: "Fast Delivery",
    desc: "Reliable logistics with nationwide delivery and installation support.",
  },
  {
    no: "06",
    title: "24/7 Support",
    desc: "Round-the-clock technical assistance and warranty management.",
  },
]

export function WhyChooseUs() {
  const ref = useRef(null)

  useEffect(() => {
    gsap.to(ref.current, {
      y: -150,
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "top top",
        scrub: true,
      }
    })
  }, [])

  return (
    <section id="why-choose-us" ref={ref} className="relative bg-black text-[#f1f1f1] min-h-screen">
      
      {/* Heading */}
      <div className="text-center py-20 px-4 border-b border-white/10">
        <h2 className="text-4xl md:text-6xl font-semibold text-[#f1f1f1]" style={{ fontFamily: 'NeueMontreal-Regular, system-ui, sans-serif' }}>
          Why Partner with <span className="text-primary ">Newzen IT?</span>
        </h2>
        <p className="mt-4 text-white/60 max-w-2xl mx-auto">
          Discover the advantages that make us the preferred IT solutions provider.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-white/10">
        {features.map((item, i) => (
          <div
            key={i}
            className="relative p-10 min-h-[260px] border-r border-b border-white/10 group"
          >
            {/* Big Number */}
            <span className="absolute top-6 right-6 text-5xl font-bold text-white/10 group-hover:text-white/20 transition">
              {item.no}
            </span>

            {/* Title */}
            <h3 className="text-xl text-[#f1f1f1] font-semibold mb-4">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              {item.desc}
            </p>

            {/* Hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}