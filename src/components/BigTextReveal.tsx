"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BigTextReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !textRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1.5,
      },
    });

    tl.fromTo(
      textRef.current,
      {
        clipPath: "inset(0 100% 0 0)",
        opacity: 0,
      },
      {
        clipPath: "inset(0 0% 0 0)",
        opacity: 1,
        ease: "none",
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-48 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,45,45,0.04)_0%,transparent_60%)]" />

      <div className="container mx-auto px-4">
        <div
          ref={textRef}
          className="text-center"
        >
          <h2 className="font-heading text-[clamp(2.5rem,10vw,8rem)] font-bold leading-[0.9] tracking-[-0.04em] text-white">
            <span className="block">FEEL THE</span>
            <span className="block text-gradient-fire">BASS</span>
          </h2>
          <p className="mt-8 font-body text-base md:text-lg text-[#a1a1aa] max-w-2xl mx-auto leading-relaxed">
            Heavy low-end meets relentless rhythm. This is the sound of the underground.
          </p>
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff2d2d]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff2d2d]/20 to-transparent" />
    </section>
  );
}
