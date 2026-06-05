"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);
  const text = "marcone._.bass";

  useEffect(() => {
    let charIndex = 0;
    intervalRef.current = setInterval(() => {
      if (charIndex <= text.length) {
        setCurrentText(text.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(intervalRef.current);
      }
    }, 100);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setIsLoading(false), 400);
          return 100;
        }
        return prev + Math.random() * 8;
      });
    }, 150);

    return () => {
      clearInterval(intervalRef.current);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-white">
              {currentText}
              <span className="text-[#ff2d2d]">_</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 200, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative mt-10 h-[2px] overflow-hidden rounded-full bg-white/10"
          >
            <motion.div
              className="h-full rounded-full bg-[#ff2d2d]"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-3 font-mono text-xs text-[#ff2d2d] tracking-widest"
          >
            {Math.floor(Math.min(progress, 100))}%
          </motion.p>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff2d2d]/30 to-transparent" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
