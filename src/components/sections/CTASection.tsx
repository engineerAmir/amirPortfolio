import { getLocale, getTranslations } from "next-intl/server";
import { FaWhatsapp } from "react-icons/fa6";
import { TbArrowRight, TbMail } from "react-icons/tb";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { personal } from "@/config/personal";
import type { Locale } from "@/i18n/routing";
import { scaleIn } from "@/lib/motion";
import { buildMailtoLink, buildWhatsAppLink } from "@/lib/utils";

const whatsappMessage = {
  en: "Hi Amir, I found your portfolio and I'd like to talk about a project.",
  ar: "مرحبًا أمير، شاهدت موقعك الشخصي وأود التحدث معك بخصوص مشروع.",
} as const;

export async function CTASection() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations({ locale, namespace: "cta" });
  const tCommon = await getTranslations({ locale, namespace: "common" });
  const whatsappHref = buildWhatsAppLink(personal.whatsappNumber, whatsappMessage[locale]);

  return (
    <section className="relative py-24 sm:py-28">
      <Container>
        <RevealOnScroll variants={scaleIn}>
          <div className="relative overflow-hidden rounded-[2rem] border border-border-strong bg-gradient-to-br from-accent-blue/15 via-background-elevated to-accent-purple/15 px-6 py-16 text-center sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-purple/30 blur-[100px]" />

            <h2 className="relative text-balance font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {t("titlePrefix")} <span className="gradient-text">{t("titleHighlight")}</span>
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg">
              {t("description")}
            </p>

            <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button
                href="#contact"
                size="lg"
                icon={<TbArrowRight className="rtl:rotate-180" />}
                iconPosition="right"
              >
                {tCommon("hireMe")}
              </Button>
              <Button
                href={whatsappHref}
                external
                variant="secondary"
                size="lg"
                icon={<FaWhatsapp className="text-[#25D366]" />}
              >
                {tCommon("chatOnWhatsapp")}
              </Button>
              <Button
                href={buildMailtoLink(personal.email, "Project inquiry")}
                variant="outline"
                size="lg"
                icon={<TbMail />}
              >
                {tCommon("emailMe")}
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
