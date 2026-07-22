"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getContactMethods } from "@/config/contact";
import { getSocialLinks } from "@/config/social";
import type { Locale } from "@/i18n/routing";
import { defaultTransition, fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function ContactSection() {
  const locale = useLocale() as Locale;
  const t = useTranslations("contact");
  const contactMethods = getContactMethods(locale);
  const socialLinks = getSocialLinks(locale);

  return (
    <section id="contact" className="relative scroll-mt-28 py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3"
        >
          {contactMethods.map((method) => (
            <motion.a
              key={method.id}
              href={method.href}
              target={method.id === "whatsapp" ? "_blank" : undefined}
              rel={method.id === "whatsapp" ? "noopener noreferrer" : undefined}
              variants={fadeInUp}
              transition={defaultTransition}
            >
              <GlassCard className="group flex h-full flex-col gap-4 p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 text-accent-blue-light transition-transform duration-300 group-hover:scale-110">
                  <method.icon size={22} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{method.label}</p>
                  <p className="mt-1 text-sm text-muted">
                    {method.id === "whatsapp" ? method.value : <bdi dir="ltr">{method.value}</bdi>}
                  </p>
                </div>
                {method.description && (
                  <p className="mt-auto text-xs text-muted-foreground">{method.description}</p>
                )}
              </GlassCard>
            </motion.a>
          ))}
        </motion.div>

        <div className="mt-10 flex items-center justify-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-purple-light/50 hover:text-foreground"
            >
              <social.icon size={17} />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
