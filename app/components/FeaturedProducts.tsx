"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FeaturedProduct } from "@/constants/product";

export default function FeaturedProducts() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="featured" className="bg-[#FAF8F5] py-24 px-6 md:px-14">
      {/* Header */}
      <div className="flex items-end justify-between mb-14">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#6B0F1A] text-[11px] tracking-[0.4em] uppercase mb-3"
          >
            Handpicked Selections
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif italic text-[#1A1409] leading-none"
            style={{ fontSize: "clamp(34px, 5vw, 72px)" }}
          >
            Featured <em className="text-[#6B0F1A]">Picks</em>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="hidden md:block"
        >
          <Link
            href="/products"
            className="flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-[#6B0F1A] border-b border-[#6B0F1A] pb-0.5 hover:gap-4 transition-all duration-300"
          >
            View All <span>→</span>
          </Link>
        </motion.div>
      </div>

      {/* Grid — 3 cols on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
        {FeaturedProduct.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            onHoverStart={() => setHovered(product.id)}
            onHoverEnd={() => setHovered(null)}
            className="group relative bg-[#F0EDE8] overflow-hidden"
            style={{
              outline:
                hovered === product.id
                  ? "1px solid rgba(107,15,26,0.4)"
                  : "1px solid transparent",
            }}
          >
            <Link href={`/products/${product.slug}`} data-cursor="View" className="block">
              {/* Image container */}
              <div className="relative h-[220px] md:h-[280px] flex items-end justify-center px-8 pt-8">
                {/* Glow on hover */}
                <AnimatePresence>
                  {hovered === product.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-20 bg-[#6B0F1A]/8 blur-3xl rounded-full"
                    />
                  )}
                </AnimatePresence>

                <motion.div
                  animate={{
                    y: hovered === product.id ? -10 : 0,
                    scale: hovered === product.id ? 1.04 : 1,
                  }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="object-contain object-bottom"
                    style={{
                      filter:
                        hovered === product.id
                          ? "drop-shadow(0 16px 24px rgba(107,15,26,0.2))"
                          : "drop-shadow(0 8px 16px rgba(0,0,0,0.12))",
                    }}
                  />
                </motion.div>
              </div>

              {/* Info */}
              <div className="p-4 md:p-5 bg-white border-t border-[#1A1409]/6">
                <p className="text-[#6B0F1A] text-[9px] tracking-[0.3em] uppercase mb-1">
                  {product.category}
                </p>
                <h3 className="font-serif text-[#1A1409] text-sm md:text-base leading-snug mb-3 line-clamp-2">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between">
                  <span className="text-[#7A7068] text-[10px] tracking-wider">
                    Explore
                  </span>
                  <motion.span
                    animate={{ x: hovered === product.id ? 4 : 0 }}
                    className="text-[#6B0F1A] text-sm"
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Mobile CTA */}
      <div className="mt-10 flex justify-center md:hidden">
        <Link
          href="/products"
          className="px-8 py-3 border border-[#6B0F1A] text-[#6B0F1A] text-[11px] tracking-[0.25em] uppercase hover:bg-[#6B0F1A] hover:text-white transition-all duration-300"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
}
