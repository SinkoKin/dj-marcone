"use client";

import { useRef, type ReactNode } from "react";
import { motion, type SpringOptions } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  spring?: SpringOptions;
  onClick?: () => void;
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  function handleMouse(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  }

  function handleReset() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleReset}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium transition-colors ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
