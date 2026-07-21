"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { defaultTransition, fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={defaultTransition}
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <motion.span
          variants={fadeInUp}
          transition={defaultTransition}
          className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent-blue-light"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeInUp}
        transition={defaultTransition}
        className="text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeInUp}
          transition={defaultTransition}
          className={cn(
            "text-balance text-base leading-relaxed text-muted sm:text-lg",
            align === "center" ? "max-w-2xl" : "max-w-2xl"
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
