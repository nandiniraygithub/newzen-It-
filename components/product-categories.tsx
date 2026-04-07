"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
  { name: "Laptops", image: "/images/laptop.jpg", desc: "Premium business and consumer models" },
  { name: "Desktops", image: "/images/desktop.jpg", desc: "Powerful workstations for enterprise" },
  { name: "Monitors", image: "/images/tv.jpg", desc: "High-resolution professional displays" },
  { name: "TVs", image: "/images/tv.webp", desc: "Smart displays for corporate lounges" },
  { name: "Gaming", image: "/images/gaming.jpg", desc: "High-performance gaming rigs" },
  { name: "Cameras", image: "/images/camera.jpg", desc: "Surveillance and conferencing gear" },
];

export function ProductCategories() {
  const ref = useRef(null);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    gsap.to(ref.current, {
      y: -150,
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section id="products" ref={ref} className="relative z-20 -mt-32 min-h-screen bg-[#f8f8f8] rounded-t-3xl">
      <div className="container mx-auto px-4 py-24">

        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[52.79px] font-body leading-tight lg:leading-[52.79px]">
            Comprehensive <span className="text-primary">Hardware</span> Portfolio
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
            We distribute the latest technology from global leaders.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">

          {products.map((product, i) => (
            <div key={i} className="relative group">

              {/* IMAGE CARD */}
              <motion.div
                whileHover={{ scale: 0.96 }}
                className="relative h-[200px] sm:h-[230px] lg:h-[260px] rounded-2xl sm:rounded-3xl overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center p-4 sm:p-6 text-center">

                  <AnimatePresence mode="wait">
                    {hovered === i ? (
                      <motion.p
                        key="desc"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="text-white text-sm sm:text-base lg:text-lg font-semibold mb-4 sm:mb-6"
                      >
                        {product.desc}
                      </motion.p>
                    ) : (
                      <motion.h3
                        key="title"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-[#ceea69] text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6"
                      >
                        {product.name}
                      </motion.h3>
                    )}
                  </AnimatePresence>

                  {/* BUTTON */}
                  {/* <motion.button
                    whileHover={{ scale: 1.1 }}
                    onMouseEnter={() => {
                      console.log('Hovering product:', i);
                      setHovered(i);
                    }}
                    onMouseLeave={() => {
                      console.log('Unhovering product:', i);
                      setHovered(null);
                    }}
                    className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-black"
                  >
                    <ArrowUpRight size={20} />
                  </motion.button> */}
                </div>
              </motion.div>

              {/* BELOW TEXT (optional) */}
              <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-gray-800">
                {product.name}
              </h3>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}