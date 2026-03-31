"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AgeVerification() {
  const [show, setShow] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("age-verified")) setShow(true);
  }, []);

  const confirm = () => {
    sessionStorage.setItem("age-verified", "true");
    setShow(false);
    setTimeout(() => setGone(true), 700);
  };

  const deny = () => {
    window.location.href = "https://www.google.com";
  };

  if (gone) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="age-gate"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#FAF8F5]"
        >
          {/* Wine top line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#6B0F1A]" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-7 px-8 text-center max-w-sm"
          >
            {/* Brand mark */}
            <p className="font-serif italic text-[#6B0F1A] text-sm tracking-[0.35em] uppercase">
              Drinkit
            </p>

            {/* Divider */}
            <div className="w-8 h-[1px] bg-[#6B0F1A]/40" />

            <div>
              <h1
                className="font-serif italic text-[#1A1409] leading-tight mb-3"
                style={{ fontSize: "clamp(34px, 6vw, 52px)" }}
              >
                Are you of legal
                <br />
                drinking age?
              </h1>
              <p className="text-[#7A7068] text-xs tracking-[0.3em] uppercase">
                You must be 21 or older to enter
              </p>
            </div>

            <div className="flex gap-3 mt-2 w-full max-w-xs">
              <button
                onClick={confirm}
                className="flex-1 py-3 bg-[#6B0F1A] text-[#FAF8F5] text-[11px] tracking-[0.25em] uppercase hover:bg-[#8B1A2A] transition-colors duration-300"
              >
                Yes, Enter
              </button>
              <button
                onClick={deny}
                className="flex-1 py-3 border border-[#1A1409]/15 text-[#7A7068] text-[11px] tracking-[0.25em] uppercase hover:border-[#1A1409]/35 transition-colors duration-300"
              >
                No, Leave
              </button>
            </div>

            <p className="text-[#7A7068]/60 text-[10px] tracking-wide">
              Please drink responsibly. By entering you accept our terms.
            </p>
          </motion.div>

          {/* Bottom line */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#6B0F1A]/20" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
