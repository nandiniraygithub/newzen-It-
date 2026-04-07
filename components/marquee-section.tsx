"use client";

import { motion } from "framer-motion";
import React from "react";

export function MarqueeSection() {
  return (
    <div className="w-full rounded-tr-3xl rounded-tl-3xl overflow-hidden bg-[#212121] py-8 sm:py-12 md:py-20">

      <div className="border-t border-b border-[#f1f1f1] flex whitespace-nowrap overflow-hidden">

        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[30vw] md:text-[24vw] leading-none font-bold uppercase pr-20 text-white"
        >
          Sales Purchase
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[30vw] md:text-[24vw] leading-none font-bold uppercase pr-20 text-white"
        >
          Sales Purchase
        </motion.h1>

      </div>
    </div>
  );
}
