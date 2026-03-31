"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cocktailsData } from "@/constants/cocktail";

const featured = cocktailsData.slice(0, 3);

export default function CocktailSection() {
  return (
    <section className="bg-[#FAF8F5] py-24 px-6 md:px-14">
      {/* Header */}
      <div className="flex items-end justify-between mb-14">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-3"
          >
            <div className="w-6 h-[1px] bg-[#6B0F1A]" />
            <p className="text-[#6B0F1A] text-[11px] tracking-[0.4em] uppercase">
              Craft Cocktails
            </p>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif italic text-[#1A1409] leading-none"
            style={{ fontSize: "clamp(34px, 5vw, 72px)" }}
          >
            Mix &amp; <em className="text-[#6B0F1A]">Discover</em>
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="hidden md:block"
        >
          <Link
            href="/cocktails"
            className="flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-[#6B0F1A] border-b border-[#6B0F1A] pb-0.5 hover:gap-4 transition-all duration-300"
          >
            All Cocktails <span>→</span>
          </Link>
        </motion.div>
      </div>

      {/* Cards — 3 col */}
      <div className="grid md:grid-cols-3 gap-5">
        {featured.map((cocktail, i) => (
          <motion.div
            key={cocktail.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group bg-[#F0EDE8] overflow-hidden border border-[#1A1409]/5 hover:border-[#6B0F1A]/25 transition-all duration-400"
          >
            <Link href="/cocktails" data-cursor="Recipe" className="block">
              {/* Image */}
              <div className="relative h-[220px] overflow-hidden">
                <Image
                  src={cocktail.imageUrl.trim()}
                  alt={cocktail.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F0EDE8]/60 to-transparent" />

                {/* Difficulty badge */}
                <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm px-2.5 py-1">
                  <span className="text-[#7A7068] text-[9px] tracking-[0.2em] uppercase">
                    {cocktail.difficulty}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-[#6B0F1A] text-[9px] tracking-[0.3em] uppercase mb-1.5">
                  {cocktail.base}
                </p>
                <h3 className="font-serif italic text-[#1A1409] text-xl mb-2">
                  {cocktail.title}
                </h3>
                <p className="text-[#7A7068] text-xs leading-relaxed line-clamp-2 mb-4">
                  {cocktail.description}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-[#1A1409]/6">
                  <span className="text-[#7A7068] text-[10px] tracking-[0.2em] uppercase">
                    {cocktail.method}
                  </span>
                  <span className="text-[#6B0F1A] text-sm group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Mobile CTA */}
      <div className="mt-8 flex justify-center md:hidden">
        <Link
          href="/cocktails"
          className="px-8 py-3 border border-[#6B0F1A] text-[#6B0F1A] text-[11px] tracking-[0.25em] uppercase hover:bg-[#6B0F1A] hover:text-white transition-all duration-300"
        >
          View All Cocktails
        </Link>
      </div>
    </section>
  );
}
