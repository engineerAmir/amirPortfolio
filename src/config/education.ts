import type { Locale } from "@/i18n/routing";
import type { EducationEntry } from "@/types";

const translations = {
  en: [
    {
      id: "cic",
      institution: "Canadian International College (CIC)",
      degree: "Bachelor of Information Technology (BIT)",
      description:
        "The School of Business Technology at CIC combines business fundamentals with modern technology, preparing students for today's digital world through practical learning and real-world solutions.",
    },
  ],
  ar: [
    {
      id: "cic",
      institution: "الكلية الكندية الدولية (CIC)",
      degree: "بكالوريوس تكنولوجيا المعلومات",
      description:
        "تجمع كلية إدارة الأعمال والتكنولوجيا في CIC بين أساسيات إدارة الأعمال والتكنولوجيا الحديثة، وتُعِدّ الطلاب لعالم اليوم الرقمي من خلال التعلّم العملي وحلول واقعية.",
    },
  ],
} as const satisfies Record<Locale, EducationEntry[]>;

export function getEducation(locale: Locale): EducationEntry[] {
  return translations[locale];
}
