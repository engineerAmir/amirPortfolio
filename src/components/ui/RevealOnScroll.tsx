"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

import { defaultTransition, fadeInUp, viewportOnce } from "@/lib/motion";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
}

export function RevealOnScroll({
  children,
  className,
  variants = fadeInUp,
  delay = 0,
}: RevealOnScrollProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      transition={{ ...defaultTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
