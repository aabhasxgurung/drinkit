"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorLabel, setCursorLabel] = useState("");

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const x = useSpring(rawX, { damping: 25, stiffness: 300, mass: 0.5 });
  const y = useSpring(rawY, { damping: 25, stiffness: 300, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      rawX.set(e.clientX - 20);
      rawY.set(e.clientY - 20);
    };
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "a, button, [data-cursor], input, textarea, [role='button']"
      ) as HTMLElement | null;
      if (interactive) {
        setIsHovering(true);
        setCursorLabel(interactive.dataset.cursor ?? "");
      } else {
        setIsHovering(false);
        setCursorLabel("");
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleOver);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleOver);
    };
  }, [rawX, rawY]);

  const size = isHovering ? 60 : isClicking ? 26 : 38;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full"
      style={{ x, y }}
      animate={{
        width: size,
        height: size,
        borderColor: isHovering ? "#6B0F1A" : "rgba(26,20,9,0.35)",
        backgroundColor: isHovering ? "rgba(107,15,26,0.08)" : "transparent",
        border: "1px solid",
      }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      {cursorLabel && (
        <span className="text-[9px] text-[#6B0F1A] tracking-[0.2em] uppercase whitespace-nowrap font-medium">
          {cursorLabel}
        </span>
      )}
    </motion.div>
  );
}
