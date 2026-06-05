"use client";

import { useEffect, useRef } from "react";
import { motion, useSpring } from "framer-motion";

export default function CursorFollower() {
  const isDesktop = useRef(false);

  useEffect(() => {
    isDesktop.current = window.matchMedia("(pointer: fine)").matches;
  }, []);

  const springConfig = { stiffness: 200, damping: 20, mass: 0.5 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    if (!isDesktop.current) return;

    const handleMouse = (e: MouseEvent) => {
      x.set(e.clientX - 16);
      y.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [x, y]);

  if (typeof window !== "undefined" && !isDesktop.current) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#ff2d2d]/30 pointer-events-none z-[100] mix-blend-difference hidden lg:block"
      style={{ x, y }}
    />
  );
}
