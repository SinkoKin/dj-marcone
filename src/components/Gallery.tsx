"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { galleryImages } from "@/data/site";

function GalleryCard({ item, index }: { item: typeof galleryImages[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.8, 1, 1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.3], [15, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 0.3], [index % 2 === 0 ? -10 : 10, 0]);

  useEffect(() => {
    if (item.type === "video" && videoRef.current) {
      if (isHovered) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isHovered, item.type]);

  const openLightbox = () => {
    const event = new CustomEvent("open-lightbox", { detail: index });
    window.dispatchEvent(event);
  };

  return (
    <motion.div
      ref={cardRef}
      style={{ y, scale, opacity, rotateX, rotateY }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-xl break-inside-avoid cursor-pointer card-border"
      onClick={openLightbox}
    >
      <div className="relative bg-[#0a0a0a]">
        <div
          className="w-full"
          style={{ aspectRatio: `${item.width}/${item.height}` }}
        >
          {item.type === "video" ? (
            <video
              ref={videoRef}
              src={item.src}
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
        </div>

        {item.type === "video" && (
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-[#ff2d2d]/80 font-mono text-[9px] tracking-widest text-white uppercase">
              <Play size={8} fill="white" />
              Video
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="font-body text-sm text-white/80">{item.alt}</p>
            <p className="font-mono text-[10px] tracking-wider text-[#ff2d2d]/60 mt-1">
              {String(index + 1).padStart(2, "0")}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handler = (e: CustomEvent) => setSelectedIndex(e.detail);
    window.addEventListener("open-lightbox", handler as EventListener);
    return () => window.removeEventListener("open-lightbox", handler as EventListener);
  }, []);

  const selectedItem = selectedIndex !== null ? galleryImages[selectedIndex] : null;

  return (
    <section id="gallery" className="relative py-28 md:py-40 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <span className="section-label">Visuals</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="heading-lg mb-12"
        >
          Photo &{" "}
          <span className="text-gradient-fire">Video</span>
        </motion.h2>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((item, i) => (
            <GalleryCard key={`${item.type}-${i}`} item={item} index={i} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-[#050505]/95 backdrop-blur-2xl"
          >
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 z-10 p-2 text-white/40 hover:text-[#ff2d2d] transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <button
              onClick={() =>
                setSelectedIndex(
                  (prev) =>
                    prev !== null
                      ? (prev - 1 + galleryImages.length) % galleryImages.length
                      : null
                )
              }
              className="absolute left-6 z-10 p-2 text-white/40 hover:text-[#ff2d2d] transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={() =>
                setSelectedIndex(
                  (prev) =>
                    prev !== null ? (prev + 1) % galleryImages.length : null
                )
              }
              className="absolute right-16 z-10 p-2 text-white/40 hover:text-[#ff2d2d] transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={28} />
            </button>

            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.9, opacity: 0, rotateX: 10 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.9, opacity: 0, rotateX: 10 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-4xl max-h-[85vh] w-full mx-4"
            >
              <div
                className="w-full rounded-xl bg-[#0a0a0a] border border-[#ff2d2d]/10 overflow-hidden"
                style={{
                  aspectRatio: `${selectedItem.width}/${selectedItem.height}`,
                  maxHeight: "85vh",
                }}
              >
                {selectedItem.type === "video" ? (
                  <video
                    src={selectedItem.src}
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img
                    src={selectedItem.src}
                    alt={selectedItem.alt}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
              <div className="flex items-center justify-between mt-3">
                <p className="font-body text-sm text-[#a1a1aa]">
                  {selectedItem.alt}
                </p>
                <div className="flex items-center gap-3">
                  {selectedItem.type === "video" && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#ff2d2d]/20 font-mono text-[9px] tracking-widest text-[#ff2d2d] uppercase">
                      <Play size={8} fill="#ff2d2d" />
                      Video
                    </span>
                  )}
                  <p className="font-mono text-xs tracking-wider text-[#ff2d2d]/60">
                    {selectedIndex + 1} / {galleryImages.length}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
