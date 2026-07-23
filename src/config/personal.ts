import type { Locale } from "@/i18n/routing";

/** Identity/contact fields are language-independent. */
export const personal = {
  name: "Amir Abdulhamid",
  firstName: "Amir",
  initials: "AA",
  email: "amirabdulhamidd@gmail.com",
  phone: "+20 110 315 1146",
  whatsappNumber: "201103151146",
  availableForWork: true,
} as const;

const translations = {
  en: {
    name: "Amir Abdulhamid",
    title: "Software Engineer",
    subtitle: "Senior Web Developer",
    roles: ["Software Engineer", "Senior Web Developer", "Full Stack Engineer"],
    tagline:
      "I build modern websites, web applications, eCommerce platforms, and custom digital solutions with a focus on performance, scalability, and great user experiences.",
    aboutDescription:
      "Experienced in building scalable websites and web applications using modern technologies. Passionate about clean architecture, performance optimization, AI-assisted development, and creating digital products that solve real business problems.",
    currentGoal: "Learning AI Automation and AI Agents to build intelligent business systems.",
    location: "Egypt",
  },
  ar: {
    name: "امير عبد الحميد",
    title: "مهندس برمجيات",
    subtitle: "مطوّر ويب أول",
    roles: ["مطور ويب", "مهندس برمجيات"],
    tagline:
      "أصمّم مواقع وتطبيقات ويب حديثة، ومتاجر إلكترونية، وحلولًا رقمية مخصّصة، مع الحرص على الأداء وقابلية التوسّع وتجربة استخدام مميزة.",
    aboutDescription:
      "لديّ خبرة في بناء مواقع وتطبيقات ويب قابلة للتوسّع باستخدام أحدث التقنيات. شغوف بالبنية البرمجية النظيفة، وتحسين الأداء، والتطوير بمساعدة الذكاء الاصطناعي، وابتكار منتجات رقمية تحل مشكلات أعمال حقيقية.",
    currentGoal: "أتعلّم حاليًا الأتمتة بالذكاء الاصطناعي والوكلاء الذكية لبناء أنظمة أعمال ذكية.",
    location: "مصر",
  },
} as const;

export function getPersonalContent(locale: Locale) {
  return translations[locale];
}
