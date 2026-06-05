"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "p";
  glitchOnScroll?: boolean;
}

export default function GlitchText({
  text,
  className = "",
  as: Tag = "h1",
  glitchOnScroll = false,
}: GlitchTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (glitchOnScroll) {
      ScrollTrigger.create({
        trigger: el,
        start: "top 80%",
        onEnter: () => {
          el.classList.add("animate-glitch-1");
          setTimeout(() => {
            el.classList.remove("animate-glitch-1");
          }, 600);
        },
      });
    }

    const handleMouseEnter = () => {
      el.classList.add("animate-glitch-1");
      setTimeout(() => {
        el.classList.remove("animate-glitch-1");
      }, 300);
    };

    el.addEventListener("mouseenter", handleMouseEnter);
    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [glitchOnScroll]);

  return (
    <div ref={containerRef} className="relative inline-block">
      <Tag className={className}>{text}</Tag>
      <Tag
        className={`${className} absolute inset-0 text-[#a1a1aa] opacity-0 -translate-x-[2px]`}
        aria-hidden
      >
        {text}
      </Tag>
      <Tag
        className={`${className} absolute inset-0 text-[#737373] opacity-0 translate-x-[2px]`}
        aria-hidden
      >
        {text}
      </Tag>
    </div>
  );
}
