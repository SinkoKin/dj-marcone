"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Camera, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";

const socialLinks = [
  { icon: Camera, href: siteConfig.links.instagram, label: "Instagram" },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.95, 1, 1, 0.98]);

  return (
    <section ref={sectionRef} id="contact" className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,45,45,0.03)_0%,transparent_50%)]" />

      <motion.div style={{ opacity, scale }} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <span className="section-label">Connect</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="heading-lg mb-12"
        >
          Get In{" "}
          <span className="text-gradient-fire">Touch</span>
        </motion.h2>

        <div className="flex flex-col items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-[#ff2d2d]/10 px-6 py-3 font-body text-sm text-[#52525b] uppercase tracking-wider transition-all hover:border-[#ff2d2d]/30 hover:text-[#ff2d2d]"
              aria-label={link.label}
            >
              <link.icon size={14} />
              {link.label}
            </a>
          ))}
          <a
            href="mailto:Abdelmarcone23@gmail.com"
            className="group inline-flex items-center gap-2 rounded-full border border-[#ff2d2d]/10 px-6 py-3 font-body text-sm text-[#52525b] uppercase tracking-wider transition-all hover:border-[#ff2d2d]/30 hover:text-[#ff2d2d]"
          >
            <Mail size={14} />
            Email
          </a>
        </div>
      </motion.div>
    </section>
  );
}
