"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/data/site";
import { Camera } from "lucide-react";

const socials = [
  { icon: Camera, href: siteConfig.links.instagram, label: "Instagram" },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.4], [50, 0]);

  return (
    <footer ref={footerRef} className="relative border-t border-[#ff2d2d]/10">
      <motion.div
        style={{ opacity, y }}
        className="container mx-auto px-4 py-16 md:py-20"
      >
        <div className="grid lg:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="font-heading text-xl font-bold tracking-tight text-white mb-4">
              marcone._.bass
            </h3>
            <p className="font-body text-sm text-[#52525b] max-w-xs leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.2em] text-[#ff2d2d] uppercase mb-4">
              Navigation
            </h4>
            <nav className="space-y-2">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block font-body text-sm text-[#52525b] transition-colors hover:text-[#ff2d2d]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.2em] text-[#ff2d2d] uppercase mb-4">
              Connect
            </h4>
            <div className="flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ff2d2d]/10 text-[#52525b] transition-all hover:border-[#ff2d2d]/30 hover:text-[#ff2d2d]"
                  aria-label={s.label}
                >
                  <s.icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[#ff2d2d]/10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-xs text-[#52525b]/50"
          >
            &copy; {new Date().getFullYear()} marcone._.bass. All rights reserved.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-xs text-[#ff2d2d]/40"
          >
            Hard groove never stops
          </motion.p>
        </div>
      </motion.div>
    </footer>
  );
}
