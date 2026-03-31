"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cocktailsData } from "@/constants/cocktail";

// Unique bases for filter
const bases = [
  "All",
  ...Array.from(new Set(cocktailsData.map((c) => c.base))),
];

export default function CocktailsPage() {
  const [query, setQuery] = useState("");
  const [activeBase, setActiveBase] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return cocktailsData.filter((c) => {
      const matchBase = activeBase === "All" || c.base === activeBase;
      const matchQuery =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.base.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.ingredients.some((ing) => ing.toLowerCase().includes(q));
      return matchBase && matchQuery;
    });
  }, [query, activeBase]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-24">
      {/* Header */}
      <div className="px-6 md:px-14 py-14 border-b border-[#1A1409]/6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-[1px] bg-[#6B0F1A]" />
          <p className="text-[#6B0F1A] text-[11px] tracking-[0.4em] uppercase">
            Craft Cocktails
          </p>
        </div>
        <h1
          className="font-serif italic text-[#1A1409] leading-none"
          style={{ fontSize: "clamp(40px, 7vw, 100px)" }}
        >
          Mix &amp; <em className="text-[#6B0F1A]">Discover</em>
        </h1>
        <p className="text-[#7A7068] text-sm mt-4 max-w-md">
          Explore our curated cocktail recipes crafted around the finest spirits in our collection.
        </p>
      </div>

      {/* Search + filter */}
      <div className="sticky top-[64px] z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#1A1409]/6 px-6 md:px-14 py-4">
        <div className="flex flex-col md:flex-row gap-4 md:items-center">
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
              placeholder="Search cocktails, spirits, ingredients..."
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

          {/* Base spirit filter — scrollable on mobile */}
          <div className="flex gap-1.5 flex-nowrap overflow-x-auto pb-1 md:pb-0 md:flex-wrap">
            {bases.map((base) => (
              <button
                key={base}
                onClick={() => setActiveBase(base)}
                className="relative flex-shrink-0 text-[10px] tracking-[0.18em] uppercase px-3.5 py-2 transition-all duration-250"
              >
                <span
                  className={
                    activeBase === base
                      ? "text-[#FAF8F5]"
                      : "text-[#7A7068] hover:text-[#1A1409]"
                  }
                >
                  {base}
                </span>
                {activeBase === base && (
                  <motion.div
                    layoutId="base-pill"
                    className="absolute inset-0 bg-[#6B0F1A]"
                    style={{ zIndex: -1 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </button>
            ))}
          </div>

          <p className="text-[#7A7068] text-xs tracking-wider whitespace-nowrap shrink-0 ml-auto">
            {filtered.length} recipes
          </p>
        </div>
      </div>

      {/* Cocktail grid */}
      <div className="px-6 md:px-14 py-12">
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={`${activeBase}-${query}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map((cocktail, i) => (
                <CocktailCard
                  key={cocktail.id}
                  cocktail={cocktail}
                  index={i}
                  expanded={expanded === cocktail.id}
                  onToggle={() =>
                    setExpanded(expanded === cocktail.id ? null : cocktail.id)
                  }
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center py-28 text-center"
            >
              <p className="font-serif italic text-[#1A1409] text-3xl mb-3">No recipes found</p>
              <p className="text-[#7A7068] text-sm mb-6">Try a different search or filter.</p>
              <button
                onClick={() => { setQuery(""); setActiveBase("All"); }}
                className="text-[#6B0F1A] text-[11px] tracking-[0.25em] uppercase border-b border-[#6B0F1A] pb-0.5"
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

function CocktailCard({
  cocktail,
  index,
  expanded,
  onToggle,
}: {
  cocktail: (typeof cocktailsData)[0];
  index: number;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: (index % 6) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-[#F0EDE8] overflow-hidden border border-[#1A1409]/5 hover:border-[#6B0F1A]/25 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-[200px] overflow-hidden">
        <Image
          src={cocktail.imageUrl.trim()}
          alt={cocktail.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-600"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F0EDE8]/50 to-transparent" />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex gap-1.5">
          <span className="bg-[#6B0F1A] text-[#FAF8F5] text-[9px] tracking-[0.2em] uppercase px-2.5 py-1">
            {cocktail.difficulty}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-[#6B0F1A] text-[9px] tracking-[0.3em] uppercase mb-1.5">
          {cocktail.base}
        </p>
        <h3 className="font-serif italic text-[#1A1409] text-xl mb-2">{cocktail.title}</h3>
        <p className="text-[#7A7068] text-xs leading-relaxed line-clamp-2 mb-4">
          {cocktail.description}
        </p>

        {/* Toggle recipe */}
        <button
          onClick={onToggle}
          className="flex items-center justify-between w-full pt-3 border-t border-[#1A1409]/6 group/btn"
          data-cursor={expanded ? "Close" : "Recipe"}
        >
          <span className="text-[#1A1409] text-[11px] tracking-[0.2em] uppercase">
            {expanded ? "Hide Recipe" : "View Recipe"}
          </span>
          <motion.span
            animate={{ rotate: expanded ? 45 : 0 }}
            className="text-[#6B0F1A] text-lg leading-none"
          >
            +
          </motion.span>
        </button>

        {/* Expanded recipe */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-4 space-y-4">
                {/* Ingredients */}
                <div>
                  <p className="text-[#7A7068] text-[9px] tracking-[0.3em] uppercase mb-2">
                    Ingredients
                  </p>
                  <ul className="space-y-1">
                    {cocktail.ingredients.map((ing) => (
                      <li
                        key={ing}
                        className="flex items-start gap-2 text-[#1A1409] text-xs"
                      >
                        <span className="text-[#6B0F1A] mt-0.5 shrink-0">—</span>
                        {ing}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Method */}
                <div>
                  <p className="text-[#7A7068] text-[9px] tracking-[0.3em] uppercase mb-1">
                    Method
                  </p>
                  <p className="text-[#1A1409] text-xs leading-relaxed">{cocktail.method}</p>
                </div>

                {cocktail.garnish && (
                  <div>
                    <p className="text-[#7A7068] text-[9px] tracking-[0.3em] uppercase mb-1">
                      Garnish
                    </p>
                    <p className="text-[#1A1409] text-xs">{cocktail.garnish}</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
