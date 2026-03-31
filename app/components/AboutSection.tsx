"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (quoteRef.current) {
        const words = quoteRef.current.querySelectorAll("span");
        gsap.fromTo(
          words,
          { opacity: 0.15 },
          {
            opacity: 1,
            stagger: 0.04,
            ease: "none",
            scrollTrigger: {
              trigger: quoteRef.current,
              start: "top 80%",
              end: "bottom 60%",
              scrub: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const quoteWords =
    "Nepal's first curated spirits destination — where every bottle tells a story worth celebrating.".split(
      " "
    );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-[#F0EDE8] py-28 px-6 md:px-14 overflow-hidden"
    >
      <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center mb-24">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-6 h-[1px] bg-[#6B0F1A]" />
            <p className="text-[#6B0F1A] text-[11px] tracking-[0.4em] uppercase">
              Our Story
            </p>
          </motion.div>

          <div className="overflow-hidden mb-8">
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif italic text-[#1A1409] leading-none"
              style={{ fontSize: "clamp(32px, 4.5vw, 64px)" }}
            >
              Curated with
              <br />
              <em className="text-[#6B0F1A]">Passion</em>
              <br />
              &amp; Precision
            </motion.h2>
          </div>

          <div className="space-y-4 text-[#7A7068] text-sm md:text-[15px] leading-relaxed max-w-md">
            {[
              "Drinkit was born from a singular belief — that Nepal deserves access to the world's finest spirits, presented with the reverence they deserve.",
              "We partner directly with heritage distilleries and craft producers, bringing their stories to Kathmandu's most discerning tables.",
              "Every bottle has been personally selected, tasted, and approved — a promise of quality we will never compromise.",
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
              >
                {text}
              </motion.p>
            ))}
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-10 pt-8 border-t border-[#1A1409]/8">
            {[
              { value: "5+", label: "Partner Brands" },
              { value: "50+", label: "Premium Spirits" },
              { value: "2020", label: "Est. Kathmandu" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif italic text-[#6B0F1A] text-3xl md:text-4xl mb-1">
                  {stat.value}
                </p>
                <p className="text-[#7A7068] text-[10px] tracking-[0.25em] uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/home/about.jpg"
              alt="Premium spirits selection"
              fill
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#F0EDE8]/20 to-transparent" />
          </div>

          {/* Accent card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-6 -left-6 bg-white border border-[#6B0F1A]/12 p-5 max-w-[180px] shadow-sm"
          >
            <p className="text-[#7A7068] text-[9px] tracking-[0.3em] uppercase mb-2">
              Our Promise
            </p>
            <p className="font-serif italic text-[#1A1409] text-sm leading-snug">
              "Quality, authenticity, excellence."
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll-animated quote */}
      <div className="max-w-4xl mx-auto text-center py-8">
        <p className="text-[#6B0F1A] font-serif text-3xl mb-3">"</p>
        <p
          ref={quoteRef}
          className="font-serif italic text-[#1A1409] leading-snug"
          style={{ fontSize: "clamp(22px, 3.5vw, 52px)" }}
        >
          {quoteWords.map((word, i) => (
            <span key={i} className="inline-block mr-[0.25em]">
              {word}
            </span>
          ))}
        </p>
        <p className="text-[#6B0F1A] font-serif text-3xl mt-3">"</p>

        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="h-[1px] w-12 bg-[#6B0F1A]/30" />
          <p className="text-[#7A7068] text-[10px] tracking-[0.3em] uppercase">
            Drinkit · Kathmandu, Nepal
          </p>
          <div className="h-[1px] w-12 bg-[#6B0F1A]/30" />
        </div>
      </div>
    </section>
  );
}
