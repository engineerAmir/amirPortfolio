import type { Locale } from "@/i18n/routing";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://amirabdulhamid.dev").replace(
  /\/$/,
  ""
);

const translations = {
  en: {
    title: "Amir Abdulhamid — Software Engineer & Senior Web Developer",
    titleTemplate: "%s | Amir Abdulhamid",
    description:
      "Amir Abdulhamid is a Software Engineer and Senior Web Developer building scalable web applications, enterprise solutions, and eCommerce platforms with React, Next.js, and Laravel.",
    keywords: [
      "Amir Abdulhamid",
      "Software Engineer",
      "Senior Web Developer",
      "Full Stack Developer",
      "React Developer",
      "Next.js Developer",
      "Laravel Developer",
      "WordPress Developer",
      "WooCommerce Developer",
      "Freelance Web Developer Egypt",
      "AI Automation",
    ],
    ogLocale: "en_US",
  },
  ar: {
    title: "أمير عبدالحميد — مهندس برمجيات ومطوّر ويب أول",
    titleTemplate: "%s | أمير عبدالحميد",
    description:
      "أمير عبدالحميد مهندس برمجيات ومطوّر ويب أول، يبني تطبيقات ويب قابلة للتوسّع وحلولًا مؤسسية ومنصات تجارة إلكترونية باستخدام React وNext.js وLaravel.",
    keywords: [
      "أمير عبدالحميد",
      "مهندس برمجيات",
      "مطور ويب أول",
      "مطور فل ستاك",
      "مطور React",
      "مطور Next.js",
      "مطور Laravel",
      "مطور ووردبريس",
      "مطور ووكومرس",
      "مطور ويب مستقل مصر",
      "أتمتة الذكاء الاصطناعي",
    ],
    ogLocale: "ar_EG",
  },
} as const;

export const seo = {
  siteUrl,
  name: "Amir Abdulhamid",
  getContent(locale: Locale) {
    return translations[locale];
  },
} as const;
