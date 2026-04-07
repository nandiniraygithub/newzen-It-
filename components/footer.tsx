'use client'

import Link from "next/link"
import { Monitor, Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function Footer() {
  const ref = useRef(null)

  useEffect(() => {
    gsap.to(ref.current, {
      y: -300,
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "top top",
        scrub: true,
      }
    })
  }, [])

  return (
    <footer ref={ref} className="relative z-50 bg-[#f1f1f1] -mt-32 rounded-t-3xl">
        <div className="container mx-auto px-4">
          {/* Large Text Section */}
          <div className="py-16 text-center">
            <h2 className="text-6xl md:text-8xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'NeueMontreal, system-ui, sans-serif' }}>
              NEWZEN <span className="text-primary">IT</span>
            </h2>
            <p className="text-5xl md:text-7xl font-bold text-gray-600" style={{ fontFamily: 'NeueMontreal, system-ui, sans-serif' }}>
              SOLUTIONS
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid gap-8 pb-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <div className="space-y-6 sm:col-span-2 lg:col-span-1">
              <Link href="/" className="flex items-center gap-2">
                <img 
                  src="/newzel-logo.png" 
                  alt="Newzen IT" 
                  className="h-12 w-auto"
                />
                <span className="text-xl font-bold tracking-tight" style={{ fontFamily: 'NeueMontreal, system-ui, sans-serif' }}>
                  NEWZEN <span className="text-primary">IT</span>
                </span>
              </Link>
              <p className="text-sm leading-relaxed text-foreground">
                Established in 2017, Newzen IT is a trusted technology solutions provider specializing in corporate
                procurement and dealer distribution of premium IT hardware.
              </p>
              {/* <div className="flex gap-4">
                <Link href="#" className="text-foreground transition-colors hover:text-primary">
                  <Linkedin size={20} />
                </Link>
                <Link href="#" className="text-foreground transition-colors hover:text-primary">
                  <Facebook size={20} />
                </Link>
                <Link href="#" className="text-foreground transition-colors hover:text-primary">
                  <Twitter size={20} />
                </Link>
              </div> */}
            </div>

            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-foreground" style={{ fontFamily: 'NeueMontreal, system-ui, sans-serif' }}>Quick Links</h3>
              <ul className="space-y-3 text-sm text-foreground">
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="hover:text-primary transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="#solutions" className="hover:text-primary transition-colors">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link href="https://wa.me/888255888?text=Hello%20I%20want%20to%20become%20a%20dealer" target="_blank" className="hover:text-primary transition-colors">
                    Become a Dealer
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-foreground" style={{ fontFamily: 'NeueMontreal, system-ui, sans-serif' }}>Product Range</h3>
              <ul className="space-y-3 text-sm text-foreground">
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Lenovo ThinkPads
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Enterprise Servers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Storage Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Gaming Laptops
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Corporate Monitors
                  </Link>
                </li>
              </ul>
            </div>

            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-foreground" style={{ fontFamily: 'NeueMontreal, system-ui, sans-serif' }}>Contact Info</h3>
              <ul className="space-y-3 text-sm text-foreground">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 text-primary flex-shrink-0" size={18} />
                  <span>
                    D-22 , Santgarh near sunil dairy , tilak nagar 
                    <br />
                    New Delhi, India
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-primary flex-shrink-0" size={18} />
                  <span>882455888</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-primary flex-shrink-0" size={18} />
                  <span>sales@newzenit.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="py-6 flex flex-col gap-4 text-center text-xs text-foreground md:flex-row md:justify-between md:items-center md:gap-4">
            <p>© 2026 Newzen IT Solutions. All rights reserved.</p>
            <div className="flex flex-col gap-2 md:flex-row md:gap-8">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
          {/* 🔥 BIG FADED TEXT */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[-300px] w-full flex justify-center pointer-events-none select-none overflow-hidden uppercase">
            <h1 className="text-[90px] sm:text-[90px] md:text-[160px] lg:text-[180px] xl:text-[250px] font-bold text-gray-300 opacity-20 leading-none whitespace-nowrap">
              NewzenIT
            </h1>
          </div>
        </div>
      </footer>
  )
}