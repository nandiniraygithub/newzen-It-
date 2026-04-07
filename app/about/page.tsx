"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import LoadingScreen from "@/components/loading-screen"
import { useState, useEffect } from "react"

export default function AboutOchi() {
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
    <section className="text-black px-6 md:px-20 py-20">
      
      {/* TOP BIG TEXT */}
      <div className="mb-16">
        <h1 className="text-[12vw] leading-none font-extrabold tracking-tight uppercase">
          We Are <br /> Newzen
        </h1>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-black/20 my-10"></div>

      {/* CONTENT GRID */}
      <div className="grid md:grid-cols-2 gap-10">
        
        {/* LEFT SMALL LABEL */}
        <div>
          <p className="text-sm text-black/60">About us:</p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-black/80">
            Newzen is more than just a company — it represents trust,
            quality, and long-term relationships. Since 2017, we have
            been delivering reliable IT products to businesses across
            various industries.
          </p>

          <p className="text-lg leading-relaxed text-black/80">
            We specialize in wholesale and corporate bulk orders,
            dealing with top brands like Apple, Lenovo, Acer,
            Logitech, and Zebronics. Our goal is to simplify
            technology procurement with genuine products and
            consistent service.
          </p>

          <p className="text-lg leading-relaxed text-black/80">
            Led by Niranjan Ray, Newzen is built on dedication,
            experience, and a strong commitment to customer
            satisfaction.
          </p>

          {/* BUTTON */}
          <div className="pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 border border-black px-6 py-3 rounded-full text-sm uppercase tracking-wider hover:bg-black hover:text-white transition"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="text-lg" />
              back
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}