"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { TbCircleCheck } from "react-icons/tb";

import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";
import { getCareerJourney } from "@/config/experience";
import type { Locale } from "@/i18n/routing";
import { defaultTransition, fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function CareerJourneyTimeline() {
  const locale = useLocale() as Locale;
  const careerJourney = getCareerJourney(locale);

  return (
    <motion.ol
      variants={staggerContainer(0.15)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="relative flex flex-col gap-10"
    >
      <div
        aria-hidden
        className="absolute start-[1.35rem] top-2 bottom-2 hidden w-px bg-gradient-to-b from-primary via-primary-dark to-transparent sm:block"
      />

      {careerJourney.map((stage) => (
        <motion.li
          key={stage.id}
          variants={fadeInUp}
          transition={defaultTransition}
          className="relative flex flex-col gap-4 sm:flex-row sm:gap-6"
        >
          <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-[0_0_0_4px_var(--background)]">
            <stage.icon size={20} />
          </div>

          <GlassCard className="flex-1 p-6 sm:p-7">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {stage.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {stage.organization}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {stage.duration && <Badge>{stage.duration}</Badge>}
                {stage.location && <Badge variant="outline">{stage.location}</Badge>}
              </div>
            </div>

            {stage.description && (
              <p className="mt-4 text-sm leading-relaxed text-muted">{stage.description}</p>
            )}

            {stage.tags && (
              <div className="mt-4 flex flex-wrap gap-2">
                {stage.tags.map((tag) => (
                  <Badge key={tag} variant="accent">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {stage.bullets && (
              <ul className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                {stage.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm text-muted">
                    <TbCircleCheck className="mt-0.5 shrink-0 text-primary-light" size={16} />
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </GlassCard>
        </motion.li>
      ))}
    </motion.ol>
  );
}
