import type { Locale } from "@/i18n/routing";
import type { Stat } from "@/types";

const base = [
  { id: "years", value: 4, suffix: "+" },
  { id: "projects", value: 15, suffix: "+" },
  { id: "technologies", value: 20, suffix: "+" },
  { id: "clients", value: 25, suffix: "+" },
] as const;

const labels: Record<Locale, Record<string, string>> = {
  en: {
    years: "Years of Experience",
    projects: "Projects Delivered",
    technologies: "Technologies",
    clients: "Satisfied Clients",
  },
  ar: {
    years: "سنوات الخبرة",
    projects: "مشروعًا منجزًا",
    technologies: "تقنية",
    clients: "عميلًا راضيًا",
  },
};

export function getStats(locale: Locale): Stat[] {
  return base.map((stat) => ({ ...stat, label: labels[locale][stat.id] }));
}
