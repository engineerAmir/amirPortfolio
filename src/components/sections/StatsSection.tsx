"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import type { IconType } from "react-icons";
import { TbBriefcase2, TbCode, TbStack2, TbUsers } from "react-icons/tb";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { getStats } from "@/config/stats";
import type { Locale } from "@/i18n/routing";
import { defaultTransition, fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

const STAT_ICONS: Record<string, IconType> = {
  years: TbBriefcase2,
  projects: TbCode,
  technologies: TbStack2,
  clients: TbUsers,
};

export function StatsSection() {
  const locale = useLocale() as Locale;
  const stats = getStats(locale);

  return (
    <section className="relative py-16 sm:py-20">
      <Container>
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6"
        >
          {stats.map((stat) => {
            const Icon = STAT_ICONS[stat.id] ?? TbCode;
            return (
              <motion.div key={stat.id} variants={fadeInUp} transition={defaultTransition}>
                <GlassCard className="flex flex-col items-center gap-3 px-4 py-8 text-center sm:py-10">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary-dark/20 text-primary">
                    <Icon size={20} />
                  </span>
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="font-display text-3xl font-bold text-foreground sm:text-4xl"
                  />
                  <span className="text-xs font-medium text-muted-foreground sm:text-sm">
                    {stat.label}
                  </span>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
