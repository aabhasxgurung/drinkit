"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Bottles } from "@/constants/product";

const CATEGORIES = ["All", "gin", "whiskey", "wines", "liqueur", "bitter"];
const CATEGORY_LABELS: Record<string, string> = {
  All: "All",
  gin: "Gin",
  whiskey: "Whiskey",
  wines: "Wine",
  liqueur: "Liqueur",
  bitter: "Bitters",
};

export default function ProductsPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return Bottles.filter((b) => {
      const matchCat = activeCategory === "All" || b.category === activeCategory;
      const matchQuery =
        !q ||
        b.name.toLowerCase().includes(q) ||
        b.description?.toLowerCase().includes(q) ||
        b.category?.toLowerCase().includes(q) ||
        b.country?.toLowerCase().includes(q) ||
        b.flavors?.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [query, activeCategory]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-24">
      {/* Page header */}
      <div className="px-6 md:px-14 py-14 border-b border-[#1A1409]/6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-[1px] bg-[#6B0F1A]" />
          <p className="text-[#6B0F1A] text-[11px] tracking-[0.4em] uppercase">
            The Collection
          </p>
        </div>
        <h1
          className="font-serif italic text-[#1A1409] leading-none"
          style={{ fontSize: "clamp(40px, 7vw, 100px)" }}
        >
          Our <em className="text-[#6B0F1A]">Spirits</em>
        </h1>
      </div>

      {/* Search + Filter bar */}
      <div className="sticky top-[64px] z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#1A1409]/6 px-6 md:px-14 py-4">
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          {/* Search */}
          <div className="relative max-w-sm w-full">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A7068]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
              />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search spirits, brands, flavors..."
              className="w-full bg-[#F0EDE8] border border-[#1A1409]/8 pl-9 pr-4 py-2.5 text-sm text-[#1A1409] placeholder:text-[#7A7068]/60 focus:outline-none focus:border-[#6B0F1A]/40 transition-colors"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7A7068] hover:text-[#1A1409] text-lg leading-none"
              >
                ×
              </button>
            )}
          </div>

          {/* Category filters */}
          <div className="flex gap-1 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="relative text-[11px] tracking-[0.18em] uppercase px-4 py-2 transition-all duration-250"
              >
                <span
                  className={
                    activeCategory === cat
                      ? "text-[#FAF8F5]"
                      : "text-[#7A7068] hover:text-[#1A1409]"
                  }
                >
                  {CATEGORY_LABELS[cat] || cat}
                </span>
                {activeCategory === cat && (
                  <motion.div
                    layoutId="cat-pill"
                    className="absolute inset-0 bg-[#6B0F1A]"
                    style={{ zIndex: -1 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Count */}
          <p className="text-[#7A7068] text-xs tracking-wider whitespace-nowrap shrink-0">
            {filtered.length} {filtered.length === 1 ? "product" : "products"}
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="px-6 md:px-14 py-12">
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={`${activeCategory}-${query}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
            >
              {filtered.map((bottle, i) => (
                <ProductCard key={`${bottle.slug}-${i}`} bottle={bottle} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-28 text-center"
            >
              <p className="font-serif italic text-[#1A1409] text-3xl mb-3">No results found</p>
              <p className="text-[#7A7068] text-sm mb-6">
                Try adjusting your search or filter.
              </p>
              <button
                onClick={() => { setQuery(""); setActiveCategory("All"); }}
                className="text-[#6B0F1A] text-[11px] tracking-[0.25em] uppercase border-b border-[#6B0F1A] pb-0.5 hover:opacity-70 transition-opacity"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function ProductCard({ bottle, index }: { bottle: (typeof Bottles)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: (index % 8) * 0.05, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group bg-[#F0EDE8] overflow-hidden transition-all duration-300"
      style={{
        outline: hovered ? "1px solid rgba(107,15,26,0.4)" : "1px solid transparent",
      }}
    >
      <Link href={`/products/${bottle.slug}`} data-cursor="View" className="block">
        {/* Image */}
        <div className="relative h-[200px] md:h-[250px] flex items-end justify-center px-6 pt-6">
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-16 bg-[#6B0F1A]/8 blur-3xl rounded-full"
              />
            )}
          </AnimatePresence>
          <motion.div
            animate={{ y: hovered ? -8 : 0, scale: hovered ? 1.04 : 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full"
          >
            <Image
              src={bottle.img}
              alt={bottle.name}
              fill
              className="object-contain object-bottom"
              style={{
                filter: hovered
                  ? "drop-shadow(0 12px 20px rgba(107,15,26,0.18))"
                  : "drop-shadow(0 6px 12px rgba(0,0,0,0.1))",
              }}
            />
          </motion.div>
        </div>

        {/* Info */}
        <div className="p-4 bg-white border-t border-[#1A1409]/6">
          <p className="text-[#6B0F1A] text-[9px] tracking-[0.3em] uppercase mb-1">
            {bottle.category}
            {bottle.country ? ` · ${bottle.country}` : ""}
          </p>
          <h3 className="font-serif text-[#1A1409] text-sm leading-snug line-clamp-2 mb-2">
            {bottle.name}
          </h3>
          {bottle.volume && (
            <p className="text-[#7A7068] text-[10px] tracking-wide">{bottle.volume}</p>
          )}
          <div className="flex items-center justify-between mt-3">
            <span className="text-[#7A7068] text-[10px] tracking-[0.2em] uppercase">Explore</span>
            <motion.span
              animate={{ x: hovered ? 4 : 0 }}
              className="text-[#6B0F1A] text-sm"
            >
              →
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
