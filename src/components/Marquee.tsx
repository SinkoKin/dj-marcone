"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const items = [
  "HARD GROOVE",
  "•",
  "BASS MUSIC",
  "•",
  "MARCONE._.BASS",
  "•",
  "BURGOS GROOVE EP01",
  "•",
  "BURGOS GROOVE EP02",
  "•",
  "DIMA KOKAB",
  "•",
  "WAREHOUSE 42",
  "•",
  "BURGOS",
  "•",
  "MADRID",
  "•",
  "BARCELONA",
  "•",
  "BILBAO",
  "•",
  "HEAVY LOW-END",
  "•",
  "RELENTLESS RHYTHM",
  "•",
];

export default function Marquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Speed up marquee based on scroll speed
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden py-6 border-y border-[#ff2d2d]/10"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] z-10 pointer-events-none" />
      <motion.div
        className="flex whitespace-nowrap"
        style={{ x }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`mx-5 font-heading text-sm md:text-base tracking-[0.3em] ${
              item === "•" ? "text-[#ff2d2d]/40" : "text-[#a1a1aa]"
            }`}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
