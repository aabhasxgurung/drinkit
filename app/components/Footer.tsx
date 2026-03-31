"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { links, footerLinks } from "@/constants/navLinks";

export default function Footer() {
  return (
    <footer className="relative bg-[#1A1409] overflow-hidden">
      {/* Wine accent line at top */}
      <div className="h-[2px] bg-[#6B0F1A]" />

      <div className="px-6 md:px-14 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group w-fit">
              <div className="relative w-8 h-8">
                <Image
                  src="/home/logo.png"
                  alt="Drinkit"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <span className="font-serif italic text-[#FAF8F5] text-xl tracking-wide group-hover:text-[#6B0F1A] transition-colors">
                Drinkit
              </span>
            </Link>

            <p className="text-[#7A7068] text-sm leading-relaxed max-w-sm mb-7">
              Nepal's premier curated spirits destination. Bringing the world's
              finest distilleries to Kathmandu's most discerning tables.
            </p>

            {/* Social */}
            {footerLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-[#7A7068] hover:text-[#FAF8F5] transition-colors"
              >
                <span className="text-[11px] tracking-[0.2em] uppercase">{link.title}</span>
                <span className="text-[#6B0F1A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  ↗
                </span>
              </a>
            ))}

            {/* Brand logos */}
            <div className="flex flex-wrap gap-5 items-center mt-8">
              {[
                { src: "/home/hapusalogo.png", alt: "Hapusa" },
                { src: "/home/greaterthanlogo.png", alt: "Greater Than" },
                { src: "/home/Luxardologo.png", alt: "Luxardo" },
                { src: "/home/sulalogo.png", alt: "Sula" },
              ].map((logo) => (
                <div
                  key={logo.alt}
                  className="relative w-12 h-6 opacity-25 hover:opacity-50 transition-opacity"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[#7A7068] text-[9px] tracking-[0.4em] uppercase mb-5">
              Navigate
            </p>
            <nav className="flex flex-col gap-3.5">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#FAF8F5]/50 hover:text-[#FAF8F5] text-sm transition-colors duration-300 hover:pl-1.5"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[#7A7068] text-[9px] tracking-[0.4em] uppercase mb-5">
              Find Us
            </p>
            <div className="space-y-2.5 text-[#FAF8F5]/50 text-sm">
              <p>Kathmandu, Nepal</p>
              <a
                href="https://www.instagram.com/drinkit.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#FAF8F5] transition-colors"
              >
                @drinkit.np
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/8 pt-7 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#7A7068] text-[10px] tracking-[0.3em] uppercase">
            © {new Date().getFullYear()} Drinkit. All rights reserved.
          </p>

          <motion.p
            className="text-[#6B0F1A] text-[10px] tracking-[0.45em] uppercase"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Drink Responsibly
          </motion.p>

          <p className="text-[#7A7068]/40 text-[10px] tracking-wider">
            Must be 21+ to purchase alcohol.
          </p>
        </div>
      </div>
    </footer>
  );
}
