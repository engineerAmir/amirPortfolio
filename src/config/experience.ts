import {
  TbBriefcase2,
  TbBuildingSkyscraper,
  TbDeviceMobile,
  TbSchool,
  TbSparkles,
} from "react-icons/tb";

import type { Locale } from "@/i18n/routing";
import type { TimelineStage } from "@/types";

interface StageTranslation {
  title: string;
  organization: string;
  location?: string;
  duration?: string;
  description?: string;
  bullets?: string[];
  tags?: string[];
}

const base = [
  { id: "education", type: "education", icon: TbSchool },
  { id: "flutter-developer", type: "work", icon: TbDeviceMobile },
  { id: "freelance", type: "freelance", icon: TbBriefcase2 },
  { id: "etriplesoft", type: "work", icon: TbBuildingSkyscraper },
  { id: "current", type: "current", icon: TbSparkles },
] as const satisfies { id: string; type: TimelineStage["type"]; icon: TimelineStage["icon"] }[];

const translations: Record<Locale, Record<string, StageTranslation>> = {
  en: {
    education: {
      title: "Bachelor of Information Technology",
      organization: "Canadian International College",
      description:
        "Built a foundation in software engineering, systems design, and business technology.",
    },
    "flutter-developer": {
      title: "Flutter Developer",
      organization: "Remote",
      location: "Remote",
      duration: "1 Year",
      bullets: [
        "Learned the complete mobile application lifecycle",
        "Shipped production deployments",
        "Integrated REST APIs",
        "Implemented authentication flows",
        "Applied state management patterns",
        "Practiced clean architecture",
        "Optimized app performance",
        "Worked with local storage",
        "Built responsive UI",
        "Followed Git workflow",
        "Debugged production issues",
      ],
    },
    freelance: {
      title: "Freelance Software Engineer",
      organization: "Self-employed",
      description: "Worked across major CMS and eCommerce platforms:",
      tags: ["WordPress", "WooCommerce", "Shopify", "Salla", "6Valley", "EasyOrder"],
      bullets: [
        "Built complete websites end-to-end",
        "Customized CMS systems",
        "Integrated third-party APIs",
        "Improved SEO",
        "Improved performance",
        "Worked directly with clients",
        "Delivered production-ready systems",
      ],
    },
    etriplesoft: {
      title: "Senior Web Developer",
      organization: "eTripleSoft",
      location: "On-site",
      description: "Grew into a senior, on-site role focused on enterprise delivery.",
      bullets: [
        "Leadership",
        "Communication",
        "Team collaboration",
        "AI-assisted development",
        "Reducing development time",
        "Working on enterprise projects",
      ],
    },
    current: {
      title: "Currently Learning",
      organization: "AI Automation & Agents",
      description: "Expanding into intelligent, autonomous business systems:",
      tags: ["AI Automation", "AI Agents", "LLMs", "Business Automation", "Workflow Automation"],
    },
  },
  ar: {
    education: {
      title: "بكالوريوس تكنولوجيا المعلومات",
      organization: "الكلية الكندية الدولية",
      description: "أسّست قاعدة معرفية في هندسة البرمجيات، وتصميم الأنظمة، وتكنولوجيا الأعمال.",
    },
    "flutter-developer": {
      title: "مطوّر Flutter",
      organization: "عن بُعد",
      location: "عن بُعد",
      duration: "سنة واحدة",
      bullets: [
        "تعلّمت دورة حياة تطبيقات الموبايل بالكامل",
        "أطلقت تطبيقات في بيئة الإنتاج",
        "دمجت واجهات REST API",
        "طبّقت أنظمة المصادقة",
        "طبّقت أنماط إدارة الحالة (State Management)",
        "طبّقت مبادئ البنية النظيفة (Clean Architecture)",
        "حسّنت أداء التطبيقات",
        "عملت مع التخزين المحلي",
        "بنيت واجهات مستخدم متجاوبة",
        "اتبعت منهجية العمل بـ Git",
        "عالجت مشاكل بيئة الإنتاج",
      ],
    },
    freelance: {
      title: "مهندس برمجيات مستقل",
      organization: "عمل حر",
      description: "عملت على أهم أنظمة إدارة المحتوى ومنصات التجارة الإلكترونية:",
      tags: ["WordPress", "WooCommerce", "Shopify", "Salla", "6Valley", "EasyOrder"],
      bullets: [
        "بنيت مواقع كاملة من الألف إلى الياء",
        "خصّصت أنظمة إدارة المحتوى",
        "دمجت واجهات برمجية خارجية",
        "حسّنت تهيئة محركات البحث (SEO)",
        "حسّنت الأداء",
        "تعاملت مباشرة مع العملاء",
        "سلّمت أنظمة جاهزة للإنتاج",
      ],
    },
    etriplesoft: {
      title: "مطوّر ويب أول",
      organization: "eTripleSoft",
      location: "حضوريًا",
      description: "تطوّرت إلى دور أول حضوري يركّز على تسليم مشاريع المؤسسات.",
      bullets: [
        "القيادة",
        "التواصل",
        "العمل الجماعي",
        "التطوير بمساعدة الذكاء الاصطناعي",
        "تقليل وقت التطوير",
        "العمل على مشاريع مؤسسية",
      ],
    },
    current: {
      title: "أتعلّم حاليًا",
      organization: "أتمتة الذكاء الاصطناعي والوكلاء الذكية",
      description: "أتوسّع نحو أنظمة أعمال ذكية ومستقلة:",
      tags: [
        "الأتمتة بالذكاء الاصطناعي",
        "الوكلاء الذكية",
        "نماذج اللغة الكبيرة (LLMs)",
        "أتمتة الأعمال",
        "أتمتة سير العمل",
      ],
    },
  },
};

export function getCareerJourney(locale: Locale): TimelineStage[] {
  const t = translations[locale];
  return base.map((stage) => ({ ...stage, ...t[stage.id] }));
}
