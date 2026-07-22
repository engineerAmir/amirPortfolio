import type { Locale } from "@/i18n/routing";
import type { Project } from "@/types";

interface ProjectTranslation {
  category: string;
  description: string;
}

/**
 * Update freely — every project card on the site is generated from this list.
 * Thumbnails are auto-captured from the live `url` (see lib/utils.ts), or use
 * a manually placed screenshot from public/assets/projects/<id>.(jpg|jpeg|png|webp).
 * Titles and technology names stay in English in both locales (brand/tech names).
 */
const base = [
  {
    id: "gazal-home",
    title: "Gazal Home",
    url: "https://gazalhome.com/",
    technologies: ["WordPress", "WooCommerce", "PHP", "MySQL"],
    featured: true,
  },
  {
    id: "velvista",
    title: "Velvista",
    url: "https://velvista-eg.com/",
    technologies: ["WordPress", "WooCommerce", "PHP", "MySQL"],
    featured: true,
  },
  {
    id: "sarushka",
    title: "Sarushka",
    url: "https://sarushka.online/",
    technologies: ["WordPress", "WooCommerce", "PHP", "MySQL"],
  },
  {
    id: "vilora-beauty",
    title: "Vilora Beauty",
    url: "https://vilorabeauty.com/",
    technologies: ["WordPress", "WooCommerce", "PHP", "MySQL"],
  },
  {
    id: "al-usus",
    title: "Al Usus",
    url: "https://al-usus.com/",
    technologies: ["WordPress", "Elementor", "PHP"],
  },
  {
    id: "echo-new",
    title: "Echo New",
    url: "https://echonew.etriplesoft.com/",
    technologies: ["Laravel", "MySQL", "JavaScript", "TailwindCSS"],
    featured: true,
  },
  {
    id: "learn",
    title: "Learn",
    url: "https://learn.etriplesoft.com/",
    technologies: ["Laravel", "MySQL", "JavaScript"],
  },
  {
    id: "micronet",
    title: "Micronet",
    url: "https://micronet.etriplesoft.com/",
    technologies: ["Laravel", "MySQL", "REST APIs"],
  },
  {
    id: "echo",
    title: "Echo",
    url: "https://echo.etriplesoft.com/",
    technologies: ["Laravel", "MySQL", "JavaScript"],
  },
  {
    id: "etriplesoft",
    title: "eTripleSoft",
    url: "https://etriplesoft.com/",
    technologies: ["Laravel", "JavaScript", "TailwindCSS"],
    featured: true,
  },
  {
    id: "hadeer",
    title: "Hadeer",
    url: "https://hadeer.topup.business/",
    technologies: ["Laravel", "MySQL", "REST APIs"],
  },
  {
    id: "jobzfind",
    title: "JobzFind",
    url: "https://jobzfind.com/",
    technologies: ["Laravel", "MySQL", "JavaScript"],
    featured: true,
  },
  {
    id: "red-circle",
    title: "Red Circle",
    url: "https://redcircle-eg.com/",
    technologies: ["WordPress", "Elementor", "PHP"],
  },
  {
    id: "noses",
    title: "Noses",
    url: "https://noses.me/",
    technologies: ["WordPress", "WooCommerce", "PHP"],
  },
  {
    id: "ghitha",
    title: "Ghitha",
    url: "https://www.ghitha.net/",
    technologies: ["WordPress", "WooCommerce", "PHP"],
  },
] as const satisfies { id: string; title: string; url: string; technologies: string[]; featured?: boolean }[];

const translations: Record<Locale, Record<string, ProjectTranslation>> = {
  en: {
    "gazal-home": {
      category: "eCommerce",
      description:
        "A custom home & living storefront built on WooCommerce, with a tailored catalog, checkout, and admin workflow.",
    },
    velvista: {
      category: "eCommerce",
      description:
        "A conversion-focused eCommerce storefront with a custom theme, optimized product pages, and streamlined checkout.",
    },
    sarushka: {
      category: "eCommerce",
      description:
        "An online store built for fast browsing and mobile-first shopping, with custom WooCommerce integrations.",
    },
    "vilora-beauty": {
      category: "eCommerce",
      description:
        "A beauty & cosmetics storefront with a custom catalog structure, SEO-tuned pages, and a polished checkout flow.",
    },
    "al-usus": {
      category: "Business Website",
      description:
        "A professional business website focused on clear service presentation, lead generation, and fast load times.",
    },
    "echo-new": {
      category: "Enterprise Web App",
      description:
        "The next-generation build of the Echo platform, developed at eTripleSoft with a modernized UI and workflow.",
    },
    learn: {
      category: "Learning Platform",
      description:
        "An eLearning platform built for structured course delivery, progress tracking, and a smooth student experience.",
    },
    micronet: {
      category: "Enterprise Web App",
      description:
        "A business management system built at eTripleSoft to streamline internal operations and reporting.",
    },
    echo: {
      category: "Enterprise Web App",
      description:
        "A core enterprise platform delivered at eTripleSoft, focused on reliability and day-to-day usability.",
    },
    etriplesoft: {
      category: "Corporate Website",
      description:
        "The corporate website for eTripleSoft, presenting the company's services, portfolio, and enterprise capabilities.",
    },
    hadeer: {
      category: "Business Web App",
      description:
        "A digital top-up / business platform built with a focus on transaction reliability and a clean user flow.",
    },
    jobzfind: {
      category: "Job Platform",
      description:
        "A job listing and hiring platform connecting employers and candidates through a searchable, structured portal.",
    },
    "red-circle": {
      category: "Business Website",
      description:
        "A brand-focused business website built for clarity, performance, and a strong first impression.",
    },
    noses: {
      category: "eCommerce",
      description:
        "A fragrance & lifestyle storefront with a custom WooCommerce catalog and a refined shopping experience.",
    },
    ghitha: {
      category: "Business Website",
      description:
        "A business platform built with a focus on clear content structure, performance, and search visibility.",
    },
  },
  ar: {
    "gazal-home": {
      category: "تجارة إلكترونية",
      description:
        "متجر إلكتروني مخصّص للأثاث والمستلزمات المنزلية مبني على ووكومرس، بكتالوج مخصّص وتجربة دفع وإدارة متكاملة.",
    },
    velvista: {
      category: "تجارة إلكترونية",
      description:
        "متجر إلكتروني يركّز على زيادة معدل التحويل، بتصميم مخصّص وصفحات منتجات محسّنة وتجربة دفع سلسة.",
    },
    sarushka: {
      category: "تجارة إلكترونية",
      description:
        "متجر إلكتروني مصمم للتصفح السريع والتسوق من الجوال أولًا، مع تكاملات مخصّصة على ووكومرس.",
    },
    "vilora-beauty": {
      category: "تجارة إلكترونية",
      description:
        "متجر إلكتروني لمنتجات التجميل بهيكلة كتالوج مخصّصة، وصفحات محسّنة لمحركات البحث، وتجربة دفع أنيقة.",
    },
    "al-usus": {
      category: "موقع أعمال",
      description:
        "موقع أعمال احترافي يركّز على عرض الخدمات بوضوح، وتوليد العملاء المحتملين، وسرعة التحميل.",
    },
    "echo-new": {
      category: "تطبيق ويب مؤسسي",
      description:
        "النسخة الجديدة من منصة Echo، طُوّرت في eTripleSoft بواجهة استخدام وسير عمل محدّثين.",
    },
    learn: {
      category: "منصة تعليمية",
      description:
        "منصة تعليم إلكتروني مصممة لتقديم الدورات بشكل منظم، وتتبع التقدّم، وتجربة سلسة للطلاب.",
    },
    micronet: {
      category: "تطبيق ويب مؤسسي",
      description: "نظام إدارة أعمال طُوّر في eTripleSoft لتبسيط العمليات الداخلية والتقارير.",
    },
    echo: {
      category: "تطبيق ويب مؤسسي",
      description:
        "منصة مؤسسية أساسية تم تسليمها في eTripleSoft، تركّز على الموثوقية وسهولة الاستخدام اليومي.",
    },
    etriplesoft: {
      category: "موقع شركة",
      description:
        "الموقع الرسمي لشركة eTripleSoft، يعرض خدمات الشركة وأعمالها وإمكانياتها المؤسسية.",
    },
    hadeer: {
      category: "تطبيق ويب للأعمال",
      description:
        "منصة رقمية للشحن والأعمال، مبنية مع التركيز على موثوقية المعاملات وتجربة استخدام واضحة.",
    },
    jobzfind: {
      category: "منصة توظيف",
      description:
        "منصة لعرض الوظائف والتوظيف تربط بين أصحاب العمل والمتقدمين عبر بوابة منظمة وقابلة للبحث.",
    },
    "red-circle": {
      category: "موقع أعمال",
      description: "موقع أعمال يركّز على الهوية التجارية، مبني من أجل الوضوح والأداء وانطباع أول قوي.",
    },
    noses: {
      category: "تجارة إلكترونية",
      description:
        "متجر إلكتروني للعطور ومنتجات نمط الحياة بكتالوج مخصّص على ووكومرس وتجربة تسوق راقية.",
    },
    ghitha: {
      category: "موقع أعمال",
      description:
        "منصة أعمال مبنية مع التركيز على هيكلة محتوى واضحة، والأداء، والظهور في نتائج البحث.",
    },
  },
};

export function getProjects(locale: Locale): Project[] {
  const t = translations[locale];
  return base.map((project) => ({ ...project, ...t[project.id] }));
}
