"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      const sections = siteConfig.navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[#050505]/90 backdrop-blur-xl border-b border-[#ff2d2d]/10"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto flex h-16 md:h-20 items-center justify-between">
          <a
            href="#hero"
            className="group flex items-center gap-2"
          >
            <motion.div
              animate={{
                scale: [1, 1.04, 1],
                boxShadow: [
                  "0 0 0px rgba(255,45,45,0.3)",
                  "0 0 15px rgba(255,45,45,0.4)",
                  "0 0 0px rgba(255,45,45,0.3)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-lg bg-[#ff2d2d]"
            >
              <span className="font-heading text-sm md:text-base font-bold tracking-tight text-white">
                MB
              </span>
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-lg bg-[#ff2d2d] blur-md"
              />
            </motion.div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {siteConfig.navLinks.slice(1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "font-body text-xs tracking-[0.2em] uppercase transition-colors duration-300",
                  activeSection === link.href.slice(1)
                    ? "text-[#ff2d2d]"
                    : "text-[#52525b] hover:text-white"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-50 p-2 text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#050505] lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {siteConfig.navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "font-heading text-4xl font-bold tracking-tight transition-colors",
                    activeSection === link.href.slice(1)
                      ? "text-[#ff2d2d]"
                      : "text-white hover:text-[#52525b]"
                  )}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
