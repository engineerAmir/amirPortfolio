import type { Locale } from "@/i18n/routing";
import type { NavItem } from "@/types";

const base = [
  { href: "#home" },
  { href: "#about" },
  { href: "#experience" },
  { href: "#projects" },
  { href: "#skills" },
  { href: "#services" },
  { href: "#testimonials" },
  { href: "#contact" },
] as const;

const labels: Record<Locale, string[]> = {
  en: ["Home", "About", "Experience", "Projects", "Skills", "Services", "Testimonials", "Contact"],
  ar: [
    "الرئيسية",
    "من أنا",
    "الخبرة",
    "المشاريع",
    "المهارات",
    "الخدمات",
    "آراء العملاء",
    "تواصل معي",
  ],
};

export function getNavItems(locale: Locale): NavItem[] {
  return base.map((item, i) => ({ ...item, label: labels[locale][i] }));
}
