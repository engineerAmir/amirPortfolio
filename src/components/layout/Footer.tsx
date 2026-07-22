import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import { TbArrowUp } from "react-icons/tb";

import { Container } from "@/components/ui/Container";
import { getContactMethods } from "@/config/contact";
import { getNavItems } from "@/config/nav";
import { getPersonalContent, personal } from "@/config/personal";
import { getSocialLinks } from "@/config/social";
import type { Locale } from "@/i18n/routing";

export async function Footer() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("footer");
  const year = new Date().getFullYear();
  const navItems = getNavItems(locale);
  const socialLinks = getSocialLinks(locale);
  const contactMethods = getContactMethods(locale);
  const personalContent = getPersonalContent(locale);

  return (
    <footer className="relative border-t border-border bg-background-elevated print:hidden">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Link
              href="#home"
              className="flex w-fit items-center gap-2.5 text-sm font-semibold tracking-tight text-foreground"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark font-display text-sm font-bold text-white">
                {personal.initials}
              </span>
              {personal.name}
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              {personalContent.tagline}
            </p>
            <div className="flex items-center gap-2 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-light/50 hover:text-foreground"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">{t("navigationHeading")}</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">{t("contactHeading")}</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {contactMethods.map((method) => (
                <li key={method.id}>
                  <a
                    href={method.href}
                    target={method.id === "whatsapp" ? "_blank" : undefined}
                    rel={method.id === "whatsapp" ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {method.id === "whatsapp" ? method.value : <bdi dir="ltr">{method.value}</bdi>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            {t("rights", { year, name: personal.name })}
          </p>
          <a
            href="#home"
            className="flex items-center gap-1.5 text-xs font-medium text-muted transition-colors hover:text-foreground"
          >
            {t("backToTop")}
            <TbArrowUp size={14} />
          </a>
        </div>
      </Container>
    </footer>
  );
}
