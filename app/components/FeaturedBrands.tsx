"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const brands = [
  {
    name: "Hapusa",
    tagline: "Himalayan Dry Gin",
    origin: "India",
    logo: "/home/hapusalogo.png",
    bottle: "/home/hapusa.png",
    bg: "#EDE9E2",
  },
  {
    name: "Greater Than",
    tagline: "London Dry Gin",
    origin: "India",
    logo: "/home/greaterthanlogo.png",
    bottle: "/home/greaterthan.png",
    bg: "#E9EDE7",
  },
  {
    name: "Luxardo",
    tagline: "Italian Liqueurs",
    origin: "Italy",
    logo: "/home/Luxardologo.png",
    bottle: "/sula/luxardo_maraschino_originale.png",
    bg: "#EDE8E2",
  },
  {
    name: "Sula",
    tagline: "Fine Indian Wines",
    origin: "India",
    logo: "/home/sulalogo.png",
    bottle: "/sula/shirazCabernet.png",
    bg: "#EAE2ED",
  },
  {
    name: "The Whistler",
    tagline: "Irish Whiskey",
    origin: "Ireland",
    logo: "/home/logo.png",
    bottle: "/sula/whistlerbottle.png",
    bg: "#EDE9E2",
  },
];

export default function FeaturedBrands() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const totalWidth = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalWidth + 200}`,
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#FAF8F5]">
      {/* Header (visible while pinned, positioned in top-left) */}
      <div className="relative z-10 px-6 md:px-14 pt-20 pb-10 pointer-events-none">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#6B0F1A] text-[11px] tracking-[0.4em] uppercase mb-3"
        >
          Our Partners
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif italic text-[#1A1409] leading-none"
          style={{ fontSize: "clamp(36px, 5.5vw, 80px)" }}
        >
          Featured <em className="text-[#6B0F1A]">Brands</em>
        </motion.h2>
      </div>

      {/* Horizontal track */}
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-4 px-6 md:px-14 pb-20 pt-2"
          style={{ width: "max-content" }}
        >
          {brands.map((brand, i) => (
            <BrandCard key={brand.name} brand={brand} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandCard({ brand, index }: { brand: (typeof brands)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex-shrink-0 w-[260px] md:w-[340px] h-[480px] overflow-hidden border border-[#1A1409]/6"
      style={{ backgroundColor: brand.bg }}
    >
      {/* Origin tag */}
      <div className="absolute top-5 right-5 z-10">
        <span className="text-[#7A7068] text-[9px] tracking-[0.3em] uppercase border border-[#1A1409]/10 bg-white/50 px-3 py-1">
          {brand.origin}
        </span>
      </div>

      {/* Bottle */}
      <div className="absolute inset-0 flex items-end justify-center pb-[100px]">
        <motion.div
          whileHover={{ scale: 1.04, y: -8 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[280px] w-[100px]"
        >
          <Image
            src={brand.bottle}
            alt={brand.name}
            fill
            className="object-contain"
            style={{ filter: "drop-shadow(0 16px 32px rgba(107,15,26,0.15))" }}
          />
        </motion.div>
      </div>

      {/* Content bar at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/70 backdrop-blur-sm p-5 border-t border-[#1A1409]/6">
        <div className="relative w-20 h-6 mb-2 opacity-60">
          <Image
            src={brand.logo}
            alt={`${brand.name} logo`}
            fill
            className="object-contain object-left"
          />
        </div>
        <h3 className="font-serif italic text-[#1A1409] text-xl mb-0.5">{brand.name}</h3>
        <p className="text-[#7A7068] text-[10px] tracking-[0.2em] uppercase">{brand.tagline}</p>

        {/* Hover CTA */}
        <div className="overflow-hidden h-0 group-hover:h-7 transition-all duration-400 mt-1">
          <a href="/products" className="text-[#6B0F1A] text-[11px] tracking-[0.2em] uppercase flex items-center gap-2">
            Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>

      {/* Wine border hover */}
      <div className="absolute inset-0 border border-[#6B0F1A]/0 group-hover:border-[#6B0F1A]/25 transition-all duration-400 pointer-events-none" />
    </motion.div>
  );
}
