"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import { upcomingGigs, pastPerformances } from "@/data/site";

function UpcomingRow({ gig, index }: { gig: typeof upcomingGigs[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ scale: 1.02, x: 10 }}
      className="group card card-hover p-5 md:p-6"
    >
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        <p className="font-heading text-xl md:text-2xl font-bold text-[#ff2d2d] shrink-0 w-24">
          {gig.date}
        </p>

        <div className="flex-1 min-w-0">
          <h3 className="font-heading text-base md:text-lg font-semibold text-white">
            {gig.event}
          </h3>
          <p className="flex items-center gap-1.5 font-body text-sm text-[#52525b] mt-0.5">
            <MapPin size={12} />
            {gig.venue}, {gig.location}
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span
            className={`font-mono text-[10px] tracking-widest uppercase ${
              gig.status === "on-sale"
                ? "text-[#ff2d2d]"
                : gig.status === "sold-out"
                ? "text-[#52525b]"
                : "text-[#52525b]"
            }`}
          >
            {gig.status === "on-sale"
              ? "On Sale"
              : gig.status === "sold-out"
              ? "Sold Out"
              : "Announced"}
          </span>
          {gig.ticketLink && (
            <a
              href={gig.ticketLink}
              className="flex items-center gap-1 rounded-full border border-[#ff2d2d]/20 px-4 py-2 font-body text-xs tracking-wider text-white uppercase transition-all hover:border-[#ff2d2d]/50 hover:bg-[#ff2d2d]/5 hover:text-[#ff2d2d]"
            >
              Tickets
              <ArrowUpRight size={12} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Gigs() {
  return (
    <section id="gigs" className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,45,45,0.02)_0%,transparent_50%)]" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <span className="section-label">Live</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="heading-lg mb-16"
        >
          Upcoming{" "}
          <span className="text-gradient-fire">Shows</span>
        </motion.h2>

        <div className="space-y-3 mb-24">
          {upcomingGigs.map((gig, i) => (
            <UpcomingRow key={`${gig.date}-${gig.venue}`} gig={gig} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <h3 className="font-heading text-2xl font-semibold tracking-tight mb-8">
            Past{" "}
            <span className="text-gradient-fire">Performances</span>
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pastPerformances.map((perf, i) => (
            <motion.div
              key={`${perf.venue}-${perf.year}`}
              initial={{ opacity: 0, y: 50, scale: 0.9, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="card p-5"
            >
              <p className="font-heading text-lg font-bold text-[#ff2d2d] mb-2">
                {perf.year}
              </p>
              <h4 className="font-heading text-base font-bold text-white">
                {perf.venue}
              </h4>
              <p className="font-body text-sm text-[#52525b]">{perf.location}</p>
              <p className="mt-1.5 font-body text-xs text-[#52525b]/60 italic">
                {perf.highlight}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
