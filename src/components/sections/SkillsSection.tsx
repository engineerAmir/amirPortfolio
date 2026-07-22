"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getSkillCategories } from "@/config/skills";
import type { Locale } from "@/i18n/routing";
import { defaultTransition, fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function SkillsSection() {
  const locale = useLocale() as Locale;
  const t = useTranslations("skills");
  const skillCategories = getSkillCategories(locale);

  return (
    <section id="skills" className="relative scroll-mt-28 py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />

        <div className="mt-16 flex flex-col gap-12">
          {skillCategories.map((category) => (
            <div key={category.id}>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {category.label}
              </h3>
              <motion.div
                variants={staggerContainer(0.05)}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={fadeInUp}
                    transition={defaultTransition}
                    whileHover={{ y: -3 }}
                    className="glass-panel flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm font-medium text-foreground/90 transition-colors duration-300 hover:border-border-strong hover:bg-surface-hover"
                  >
                    <skill.icon className="shrink-0 text-primary" size={18} />
                    {skill.name}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
