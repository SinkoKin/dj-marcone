"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Headphones, ArrowUpRight, Clock } from "lucide-react";
import { mixes } from "@/data/site";

export default function Mixes() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.95, 1, 1, 0.98]);

  return (
    <section ref={sectionRef} id="mixes" className="relative py-28 md:py-40 overflow-hidden">
      <motion.div style={{ opacity, scale }} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <span className="section-label">Sets & Mixes</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="heading-lg mb-12"
        >
          Live{" "}
          <span className="text-gradient-fire">Mixes</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {mixes.map((mix, i) => (
            <motion.a
              key={mix.title}
              href={mix.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50, x: i % 2 === 0 ? -30 : 30, rotateY: i % 2 === 0 ? -10 : 10 }}
              whileInView={{ opacity: 1, y: 0, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group card card-hover p-6"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-[#ff2d2d]/10">
                  <Headphones size={20} className="text-[#ff2d2d]" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-heading text-base font-bold text-white group-hover:text-[#ff2d2d] transition-colors">
                      {mix.title}
                    </h3>
                    <ArrowUpRight
                      size={14}
                      className="shrink-0 text-[#ff2d2d] opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <p className="mt-1 font-body text-sm text-[#52525b] line-clamp-2">
                    {mix.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 mt-3">
                    <span className="inline-flex items-center gap-1 rounded-full border border-[#ff2d2d]/20 px-2.5 py-0.5 font-mono text-[10px] tracking-wider text-[#ff2d2d] uppercase">
                      {mix.platform}
                    </span>
                    <span className="inline-flex items-center gap-1 font-body text-xs text-[#52525b]">
                      <Clock size={11} />
                      {mix.duration}
                    </span>
                    <span className="font-mono text-[10px] text-[#52525b]/50">
                      {mix.date}
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
