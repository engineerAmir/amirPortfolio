"use client";

import { useLocale, useTranslations } from "next-intl";
import { TbLanguage } from "react-icons/tb";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("languageSwitcher");

  const nextLocale = routing.locales.find((l) => l !== locale) ?? routing.defaultLocale;
  const nextLocaleLabel = nextLocale === "ar" ? t("arabic") : t("english");

  return (
    <button
      type="button"
      onClick={() => router.replace(pathname, { locale: nextLocale })}
      aria-label={t("label")}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-sm font-medium text-muted transition-colors duration-200 hover:border-border-strong hover:text-foreground",
        className
      )}
    >
      <TbLanguage size={16} />
      {nextLocaleLabel}
    </button>
  );
}
