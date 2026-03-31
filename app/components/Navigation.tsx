"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { links } from "@/constants/navLinks";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-[100] px-6 md:px-14 py-4 flex items-center justify-between"
        animate={{
          backgroundColor: scrolled
            ? "rgba(250,248,245,0.95)"
            : "rgba(250,248,245,0)",
          borderBottom: scrolled
            ? "1px solid rgba(107,15,26,0.12)"
            : "1px solid transparent",
        }}
        style={{ backdropFilter: scrolled ? "blur(20px)" : "none" }}
        transition={{ duration: 0.3 }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-7 h-7">
            <Image
              src="/home/logo.png"
              alt="Drinkit"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-serif italic text-[#1A1409] text-xl tracking-wide group-hover:text-[#6B0F1A] transition-colors duration-300">
            Drinkit
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-[11px] tracking-[0.22em] uppercase transition-colors duration-300 group"
              >
                <span
                  className={
                    isActive ? "text-[#6B0F1A]" : "text-[#7A7068] hover:text-[#1A1409]"
                  }
                >
                  {link.title}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-[#6B0F1A]"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/products"
            data-cursor="Shop"
            className="text-[11px] tracking-[0.22em] uppercase text-[#FAF8F5] bg-[#6B0F1A] px-5 py-2.5 hover:bg-[#8B1A2A] transition-colors duration-300"
          >
            Shop Now
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="block w-5 h-[1.5px] bg-[#1A1409] origin-center"
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6.5 : 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-3.5 h-[1.5px] bg-[#1A1409]"
            animate={{ opacity: menuOpen ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-5 h-[1.5px] bg-[#1A1409] origin-center"
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6.5 : 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        className="fixed inset-0 z-[99] bg-[#FAF8F5] flex flex-col items-center justify-center md:hidden"
        initial={false}
        animate={{
          opacity: menuOpen ? 1 : 0,
          clipPath: menuOpen ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
        }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        style={{ pointerEvents: menuOpen ? "auto" : "none" }}
      >
        {/* Wine line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#6B0F1A]" />

        <nav className="flex flex-col items-center gap-6">
          {links.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : 20 }}
              transition={{ delay: menuOpen ? i * 0.07 + 0.15 : 0, duration: 0.4 }}
            >
              <Link
                href={link.href}
                className="font-serif italic text-[#1A1409] text-4xl hover:text-[#6B0F1A] transition-colors"
              >
                {link.title}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: menuOpen ? 1 : 0 }}
            transition={{ delay: 0.4 }}
            className="mt-4"
          >
            <Link
              href="/products"
              className="text-[#FAF8F5] bg-[#6B0F1A] px-8 py-3 text-xs tracking-[0.25em] uppercase"
            >
              Shop Now
            </Link>
          </motion.div>
        </nav>
      </motion.div>
    </>
  );
}
