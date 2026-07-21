import type { Transition, Variants } from "framer-motion";

export const EASE_OUT: Transition["ease"] = [0.16, 1, 0.3, 1];

export const defaultTransition: Transition = {
  duration: 0.6,
  ease: EASE_OUT,
};

/**
 * These variants intentionally omit per-variant `transition` objects.
 * Framer Motion lets a variant's own `transition` override the `transition`
 * prop passed to the component — omitting it here means callers (e.g.
 * <RevealOnScroll delay />) can control timing/delay without it being
 * silently ignored.
 */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer = (
  stagger = 0.12,
  delayChildren = 0
): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

export const viewportOnce = { once: true, margin: "-80px" as const };
