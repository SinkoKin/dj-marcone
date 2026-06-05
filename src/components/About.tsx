"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { aboutBio } from "@/data/site";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-heading text-4xl md:text-5xl font-bold text-[#ff2d2d]">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.6, 1], [0, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.95]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-28 md:py-40 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(255,45,45,0.03)_0%,transparent_50%)]" />

      <motion.div style={{ opacity, scale }} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="section-label">About</span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="heading-lg mb-8"
            >
              DJ
              <br />
              <span className="text-gradient-fire">MARCONE ABDEL</span>
            </motion.h2>

            <div className="space-y-5 max-w-xl">
              {aboutBio.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + i * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="font-body text-[15px] md:text-base leading-relaxed text-[#a1a1aa]"
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-8">
            <motion.div style={{ y: y1 }} className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 50, rotateY: 15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="card card-hover p-6"
              >
                <AnimatedCounter value={1000} suffix="+" />
                <p className="font-body text-sm text-[#52525b] mt-1">
                  Streams on SoundCloud
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50, rotateY: 15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="card card-hover p-6"
              >
                <p className="font-heading text-2xl md:text-3xl font-bold text-[#ff2d2d]">
                  1 National / 3 International
                </p>
                <p className="font-body text-sm text-[#52525b] mt-1">
                  Shows
                </p>
              </motion.div>
            </motion.div>

            <motion.div style={{ y: y2 }} className="space-y-4 mt-4">
              <motion.div
                initial={{ opacity: 0, x: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="card card-hover p-6"
              >
                <p className="font-heading text-4xl font-bold text-white">
                  Independent
                </p>
                <p className="font-body text-sm text-[#52525b] mt-1">
                  Label
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="card card-hover p-6"
              >
                <p className="font-heading text-2xl font-bold text-white">
                  Hard Groove / Techno
                </p>
                <p className="font-body text-sm text-[#52525b] mt-1">
                  Genre
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
