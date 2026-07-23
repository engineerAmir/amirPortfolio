"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface RotatingTextProps {
  words: readonly string[];
  intervalMs?: number;
  className?: string;
}

export function RotatingText({ words, intervalMs = 2600, className }: RotatingTextProps) {
  const [index, setIndex] = useState(0);
  const longestWord = words.reduce((a, b) => (b.length > a.length ? b : a), "");

  useEffect(() => {
    setIndex(0);
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [words, intervalMs]);

  return (
    <span className="relative inline-block h-[1.3em] overflow-hidden align-bottom">
      {/* In-flow, invisible spacer sized to the longest word so the absolutely
          positioned animated text below always has enough width to render without clipping. */}
      <span className="invisible whitespace-nowrap" aria-hidden>
        {longestWord}
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={cn("absolute inset-0 whitespace-nowrap", className)}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
