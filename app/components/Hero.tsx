"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const words = ["Nepal's", "Finest", "Spirits"];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bottleY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex items-center overflow-hidden bg-[#FAF8F5]"
    >
      {/* Subtle warm tint top right */}
      <div className="absolute top-0 right-0 w-[55%] h-full bg-[#F0EDE8] pointer-events-none" />

      {/* Wine-red vertical accent line */}
      <div className="absolute left-[44%] top-0 bottom-0 w-[1px] bg-[#6B0F1A]/15 pointer-events-none" />

      {/* Large decorative text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none">
        <span
          className="font-serif italic text-[#6B0F1A]/[0.04] whitespace-nowrap leading-none block"
          style={{ fontSize: "clamp(90px, 20vw, 300px)" }}
        >
          Drinkit
        </span>
      </div>

      {/* Left — Text content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 pl-6 md:pl-14 lg:pl-20 pr-6 max-w-2xl pt-20"
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-8 h-[1px] bg-[#6B0F1A]" />
          <span className="text-[#6B0F1A] text-[11px] tracking-[0.4em] uppercase font-medium">
            Nepal's Premium Spirits
          </span>
        </motion.div>

        {/* Headline */}
        <div className="mb-6">
          {words.map((word, i) => (
            <div key={word} className="overflow-hidden">
              <motion.span
                className="block font-serif text-[#1A1409] leading-[0.95]"
                style={{ fontSize: "clamp(56px, 9.5vw, 138px)" }}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.35 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {i === 1 ? <em className="text-[#6B0F1A]">{word}</em> : word}
              </motion.span>
            </div>
          ))}
        </div>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.85 }}
          className="text-[#7A7068] text-sm md:text-base leading-relaxed max-w-sm mb-10"
        >
          Handpicked from the world's finest distilleries.
          <br />
          Curated for Nepal's discerning palate.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="flex flex-wrap gap-3"
        >
          <a
            href="/products"
            data-cursor="Explore"
            className="px-7 py-3.5 bg-[#6B0F1A] text-[#FAF8F5] text-[11px] tracking-[0.25em] uppercase hover:bg-[#8B1A2A] transition-colors duration-300"
          >
            Explore Collection
          </a>
          <a
            href="#featured"
            className="px-7 py-3.5 border border-[#1A1409]/15 text-[#1A1409] text-[11px] tracking-[0.25em] uppercase hover:border-[#6B0F1A] hover:text-[#6B0F1A] transition-all duration-300"
          >
            Featured Picks
          </a>
        </motion.div>
      </motion.div>

      {/* Right — Bottle */}
      <motion.div
        style={{ y: bottleY, opacity }}
        className="absolute right-[4%] md:right-[8%] bottom-0 w-[170px] md:w-[230px] lg:w-[300px] z-20 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [-0.5, 0.5, -0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/home/hapusa.png"
            alt="Hapusa Himalayan Dry Gin"
            width={300}
            height={700}
            className="w-full h-auto object-contain"
            style={{
              filter:
                "drop-shadow(0 30px 50px rgba(107,15,26,0.18)) drop-shadow(0 10px 20px rgba(0,0,0,0.1))",
            }}
            priority
          />
        </motion.div>
        {/* Shadow */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#6B0F1A]/10 blur-2xl rounded-full" />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-24 left-6 md:left-14 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-[#6B0F1A]/50 origin-top"
        />
        <span
          className="text-[#7A7068] text-[9px] tracking-[0.35em] uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
      </motion.div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-[#6B0F1A]/10 py-3 overflow-hidden bg-[#FAF8F5]/80">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="text-[#7A7068] text-[10px] tracking-[0.35em] uppercase mx-10">
              Nepal&apos;s Finest Spirits Collection
              <span className="text-[#6B0F1A] mx-5">✦</span>
              Premium Curated Liquors
              <span className="text-[#6B0F1A] mx-5">✦</span>
              Crafted for Excellence
              <span className="text-[#6B0F1A] mx-5">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
