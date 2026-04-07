"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, ArrowUp, X } from "lucide-react"
import { useEffect, useState } from "react"

export function Navbar() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  const navItems = [
  { id: "about", label: "About Us" },
  { id: "products", label: " Products" },
  { id: "why-choose-us", label: "Why Choose Us" },
  { id: "authorization", label: "Authorization" }
]

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full backdrop-blur-2xl border-blue-100 bg-[#f1f1f1]">
        <div className="container mx-auto flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img 
              src="/newzel-logo.png" 
              alt="Newzen IT" 
              className="h-8 w-auto sm:h-10"
            />
            <span className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-gray-900" style={{ fontFamily: 'NeueMontreal, system-ui, sans-serif' }}>
              Newzen IT
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 uppercase">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className="relative text-xs sm:text-sm font-medium text-gray-700 hover:text-blue-600 transition group" style={{ fontFamily: 'NeueMontreal, system-ui, sans-serif' }}
              >
                {item.label}

                {/* underline animation */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}

            {/* CTA */}
            <button 
              onClick={() => {
                window.open(
                  "https://wa.me/918882455888?text=Hello%20I%20want%20to%20connect",
                  "_blank"
                )
              }}
              className="ml-2 lg:ml-4 bg-blue-600 text-white px-3 py-1.5 lg:px-5 lg:py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-lg" style={{ fontFamily: 'NeueMontreal, system-ui, sans-serif' }}
            >
              <span className="hidden sm:inline">Contact us</span>
              <span className="sm:hidden">Contact</span>
            </button>
          </div>

          {/* Mobile Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>

        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-14 sm:top-16 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-blue-100 z-40">
          <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
            <div className="flex flex-col gap-3 sm:gap-5">

              {navItems.map((item) => (
                <Link 
                  key={item.id}
                  href={`#${item.id}`} 
                  className="text-gray-700 text-base sm:text-lg font-medium hover:text-blue-600 transition py-2" style={{ fontFamily: 'NeueMontreal, system-ui, sans-serif' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* CTA */}
              <button 
                className="mt-2 sm:mt-4 bg-blue-600 text-white py-2.5 sm:py-3 rounded-full font-medium hover:bg-blue-700 transition" style={{ fontFamily: 'NeueMontreal, system-ui, sans-serif' }}
                onClick={() => {
                  setIsMenuOpen(false)
                  window.open(
                    "https://wa.me/888255888?text=Hello%20I%20want%20to%20connect",
                    "_blank"
                  )
                }}
              >
                Contact us
              </button>

            </div>
          </div>
        </div>
      )}

      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-16 sm:bottom-20 right-4 sm:right-6 z-50 bg-blue-600 text-white p-2 sm:p-2.5 rounded-full shadow-lg hover:bg-blue-700 hover:scale-110 transition-all duration-300"
        >
          <ArrowUp size={8} className="sm:size-12" />
        </button>
      )}
    </>
  )
}