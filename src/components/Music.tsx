"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Headphones } from "lucide-react";
import { soundcloudProfile, soundcloudEmbedUrl } from "@/data/site";

export default function Music() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [0, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.95]);

  return (
    <section ref={sectionRef} id="music" className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(255,45,45,0.03)_0%,transparent_50%)]" />

      <motion.div style={{ opacity, scale }} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className=""
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <span className="section-label">Listen</span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="heading-lg mb-8"
          >
            Full{" "}
            <span className="text-gradient-fire">SoundCloud</span>
          </motion.h3>

          <motion.div
            style={{ y }}
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="card p-4 md:p-6 overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ff2d2d]/10">
                <Headphones size={18} className="text-[#ff2d2d]" />
              </div>
              <div>
                <p className="font-heading text-sm font-bold text-white">
                  abdel marcone
                </p>
                <a
                  href={soundcloudProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-xs text-[#ff2d2d] hover:underline"
                >
                  soundcloud.com/abdel-marcone
                </a>
              </div>
            </div>
            <div className="w-full rounded-xl overflow-hidden bg-[#050505]">
              <iframe
                width="100%"
                height="450"
                scrolling="no"
                frameBorder="no"
                allow="autoplay; encrypted-media"
                src={soundcloudEmbedUrl}
                title="abdel marcone SoundCloud player"
                className="w-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
