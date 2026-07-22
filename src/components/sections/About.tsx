import { getLocale, getTranslations } from "next-intl/server";
import { TbMapPin, TbSchool, TbSparkles, TbTargetArrow } from "react-icons/tb";

import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getEducation } from "@/config/education";
import { getPersonalContent } from "@/config/personal";
import type { Locale } from "@/i18n/routing";
import { fadeInUp, scaleIn } from "@/lib/motion";

export async function About() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations({ locale, namespace: "about" });
  const content = getPersonalContent(locale);
  const education = getEducation(locale);

  return (
    <section id="about" className="relative scroll-mt-28 py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />

        <div className="mt-16 grid gap-6 lg:grid-cols-5">
          <RevealOnScroll variants={fadeInUp} className="lg:col-span-3">
            <GlassCard className="flex h-full flex-col gap-6 p-8 sm:p-10">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="accent">{content.title}</Badge>
                <Badge variant="accent">{content.subtitle}</Badge>
              </div>

              <p className="text-balance text-lg leading-relaxed text-foreground/90">
                {content.aboutDescription}
              </p>

              <div className="flex items-center gap-2 text-sm text-muted">
                <TbMapPin className="text-accent-blue-light" size={18} />
                {t("locationLine", { location: content.location })}
              </div>

              <div className="mt-2 flex items-start gap-4 rounded-2xl border border-accent-purple/20 bg-accent-purple/5 p-5">
                <TbTargetArrow className="mt-0.5 shrink-0 text-accent-purple-light" size={22} />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t("currentGoalLabel")}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{content.currentGoal}</p>
                </div>
              </div>
            </GlassCard>
          </RevealOnScroll>

          <RevealOnScroll variants={scaleIn} delay={0.1} className="lg:col-span-2">
            <GlassCard className="flex h-full flex-col gap-6 p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue to-accent-purple text-white">
                  <TbSchool size={20} />
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {t("educationHeading")}
                </h3>
              </div>

              <div className="flex flex-col gap-6">
                {education.map((entry) => (
                  <div key={entry.id} className="flex flex-col gap-2">
                    <p className="text-sm font-semibold text-foreground">{entry.institution}</p>
                    <p className="text-sm font-medium text-accent-blue-light">{entry.degree}</p>
                    <p className="text-sm leading-relaxed text-muted">{entry.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-2 border-t border-border pt-5 text-xs text-muted-foreground">
                <TbSparkles size={14} />
                {t("educationFooter")}
              </div>
            </GlassCard>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
