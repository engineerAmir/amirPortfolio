"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getServices } from "@/config/services";
import type { Locale } from "@/i18n/routing";
import { defaultTransition, fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function ServicesSection() {
  const locale = useLocale() as Locale;
  const t = useTranslations("services");
  const services = getServices(locale);

  return (
    <section id="services" className="relative scroll-mt-28 py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />

        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={fadeInUp} transition={defaultTransition}>
              <GlassCard className="group relative flex h-full flex-col gap-4 overflow-hidden p-7">
                {service.comingSoon && (
                  <Badge variant="accent" className="absolute end-5 top-5">
                    {t("comingSoon")}
                  </Badge>
                )}

                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 text-accent-blue-light transition-transform duration-300 group-hover:scale-110">
                  <service.icon size={22} />
                </span>

                <h3 className="font-display text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{service.description}</p>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-accent-blue to-accent-purple transition-transform duration-300 group-hover:scale-x-100" />
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
