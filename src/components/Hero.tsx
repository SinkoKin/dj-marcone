"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const words = ["Hard", "Groove", "Never", "Stops"];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const desktopImageRef = useRef<HTMLDivElement>(null);
  const mobileImageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const heroBlur = useTransform(scrollYProgress, [0, 0.8], [0, 10]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.8]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [0, -3]);
  const heroBlurFilter = useTransform(heroBlur, (v) => `blur(${v}px)`);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 2.4 });

    tl.fromTo(
      ".hero-line",
      { y: 100, opacity: 0, rotateX: 25 },
      { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.12, ease: "power4.out" }
    );

    tl.fromTo(
      ".hero-image-desktop",
      { opacity: 0, scale: 0.85, clipPath: "inset(0 0 100% 0)" },
      { opacity: 1, scale: 1, clipPath: "inset(0 0 0% 0)", duration: 1.6, ease: "power4.out" },
      "-=1.0"
    );

    tl.fromTo(
      ".hero-image-mobile",
      { opacity: 0, y: 40, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power4.out" },
      "-=0.6"
    );

    tl.fromTo(
      ".hero-desc",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    );

    tl.fromTo(
      ".hero-cta",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
      "-=0.3"
    );
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#050505]" />

      <motion.div
        ref={glowRef}
        style={{ scale: glowScale, opacity: glowOpacity }}
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[800px] md:w-[800px] md:h-[1000px] pointer-events-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,45,45,0.10)_0%,transparent_60%)]" />
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,45,45,0.03)_0%,transparent_60%)]" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff2d2d]/30 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 pt-20 md:pt-32 w-full">
        {/* Mobile layout */}
        <div className="flex flex-col lg:hidden min-h-[75vh] justify-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="font-body text-[10px] tracking-[0.3em] uppercase text-[#ff2d2d] mb-4"
          >
            marcone._.bass
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 0.6 }}
            className="font-body text-[9px] tracking-[0.25em] uppercase text-[#52525b] mb-4"
          >
            Rak London
          </motion.p>

          <div ref={textRef} className="overflow-hidden perspective-[1000px] mb-4">
            <h1 className="font-heading text-[clamp(2rem,10vw,3.5rem)] font-bold leading-[0.92] tracking-[-0.04em]">
              {words.map((word, i) => (
                <span key={i} className="block overflow-hidden">
                  <span className="hero-line inline-block">
                    {word}
                    {i < words.length - 1 && <br />}
                  </span>
                </span>
              ))}
            </h1>
          </div>

          <motion.div
            ref={mobileImageRef}
            style={{ y: imageY, scale: imageScale, rotate: imageRotate }}
            className="hero-image-mobile relative w-full rounded-xl border border-[#ff2d2d]/20 shadow-[0_0_30px_rgba(255,45,45,0.08)] mb-5"
          >
            <img
              src="/images/hero.jpg"
              alt="marcone._.bass"
              className="w-full h-auto rounded-xl"
              loading="eager"
            />
          </motion.div>

          <motion.div style={{ y: heroY, opacity: heroOpacity }}>
            <motion.p className="hero-desc max-w-lg font-body text-sm text-[#a1a1aa] leading-relaxed mb-8">
              Hard groove bass DJ. Heavy low-end meets
              relentless rhythm. This is the sound of the underground.
            </motion.p>

            <div ref={ctaRef} className="hero-cta flex flex-wrap gap-3">
              <a
                href="#music"
                className="inline-flex items-center gap-2 rounded-full bg-[#ff2d2d] px-6 py-3 font-body text-xs font-semibold tracking-wider text-white uppercase transition-all hover:bg-[#cc0000] hover:shadow-[0_0_25px_rgba(255,45,45,0.3)]"
              >
                <Play size={12} fill="white" />
                Listen Now
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#ff2d2d]/20 px-6 py-3 font-body text-xs font-medium tracking-wider text-white uppercase transition-all hover:border-[#ff2d2d]/50"
              >
                Book Me
              </a>
            </div>
          </motion.div>
        </div>

        {/* Desktop layout */}
        <motion.div
          style={{
            y: heroY,
            opacity: heroOpacity,
            scale: heroScale,
            filter: heroBlurFilter,
          }}
          className="hidden lg:grid lg:grid-cols-12 lg:gap-16 items-center min-h-[70vh]"
        >
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="lg:col-span-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
              className="font-body text-xs tracking-[0.3em] uppercase text-[#ff2d2d] mb-6"
            >
              marcone._.bass
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1, duration: 0.6 }}
              className="font-body text-[10px] tracking-[0.25em] uppercase text-[#52525b] mb-6"
            >
              Rak London
            </motion.p>
            <div ref={textRef} className="overflow-hidden mb-6 perspective-[1000px]">
              <h1 className="heading-xl text-balance">
                {words.map((word, i) => (
                  <span key={i} className="block overflow-hidden">
                    <span className="hero-line inline-block">
                      {word}
                      {i < words.length - 1 && <br />}
                    </span>
                  </span>
                ))}
              </h1>
            </div>

            <motion.p className="hero-desc max-w-xl font-body text-base md:text-lg text-[#a1a1aa] leading-relaxed mb-10">
              Hard groove bass DJ. Heavy low-end meets
              relentless rhythm. This is the sound of the underground.
            </motion.p>

            <div ref={ctaRef} className="hero-cta flex flex-wrap gap-4">
              <a
                href="#music"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#ff2d2d] px-8 py-3.5 font-body text-sm font-semibold tracking-wider text-white uppercase transition-all hover:bg-[#cc0000] hover:shadow-[0_0_30px_rgba(255,45,45,0.3)]"
              >
                <Play size={14} fill="white" />
                Listen Now
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 rounded-full border border-[#ff2d2d]/20 px-8 py-3.5 font-body text-sm font-medium tracking-wider text-white uppercase transition-all hover:border-[#ff2d2d]/50 hover:bg-[#ff2d2d]/5"
              >
                Book Me
              </a>
            </div>
          </motion.div>

          <motion.div
            style={{ y: imageY, scale: imageScale, rotate: imageRotate }}
            className="lg:col-span-6 relative w-full h-full flex items-center justify-center"
          >
            <div
              ref={desktopImageRef}
              className="hero-image-desktop relative w-full max-w-[500px] aspect-[4/5]"
            >
              <div className="absolute inset-0 rounded-2xl overflow-hidden border border-[#ff2d2d]/20 shadow-[0_0_40px_rgba(255,45,45,0.08)]">
                <img
                  src="/images/hero.jpg"
                  alt="marcone._.bass"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-[#ff2d2d]/10 -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl border border-[#ff2d2d]/10 -z-10" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-[#ff2d2d]/50" />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff2d2d]/20 to-transparent" />
    </section>
  );
}
