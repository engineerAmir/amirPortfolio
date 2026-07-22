import type { Locale } from "@/i18n/routing";
import type { Testimonial } from "@/types";

interface TestimonialTranslation {
  role: string;
  company: string;
  quote: string;
}

/** Placeholder data — replace with real client testimonials as they come in. */
const base = [
  { id: "t1", name: "Sarah Mitchell", rating: 5 },
  { id: "t2", name: "David Chen", rating: 5 },
  { id: "t3", name: "Layla Haddad", rating: 5 },
  { id: "t4", name: "James Anderson", rating: 5 },
] as const;

const translations: Record<Locale, Record<string, TestimonialTranslation>> = {
  en: {
    t1: {
      role: "Founder",
      company: "Retail Startup",
      quote:
        "Amir took our outdated store and turned it into a fast, modern platform. Communication was clear from day one and the final result exceeded what we asked for.",
    },
    t2: {
      role: "Product Manager",
      company: "SaaS Company",
      quote:
        "Reliable, detail-oriented, and genuinely invested in getting the architecture right. Our Next.js migration shipped on time with zero downtime.",
    },
    t3: {
      role: "Marketing Director",
      company: "eCommerce Brand",
      quote:
        "Our WooCommerce store's performance and SEO improved massively after Amir's optimization pass. Conversion rate noticeably went up within weeks.",
    },
    t4: {
      role: "CTO",
      company: "Enterprise Client",
      quote:
        "One of the few developers who thinks about maintainability, not just shipping fast. Clean code, clear documentation, and solid communication throughout.",
    },
  },
  ar: {
    t1: {
      role: "المؤسِّسة",
      company: "شركة تجزئة ناشئة",
      quote:
        "حوّل أمير متجرنا القديم إلى منصة سريعة وحديثة. كان التواصل واضحًا منذ اليوم الأول، والنتيجة النهائية فاقت ما طلبناه.",
    },
    t2: {
      role: "مدير منتج",
      company: "شركة SaaS",
      quote:
        "موثوق ودقيق ومهتم فعليًا ببناء بنية تقنية صحيحة. انتقالنا إلى Next.js تم في الموعد المحدد وبدون أي توقف في الخدمة.",
    },
    t3: {
      role: "مديرة تسويق",
      company: "علامة تجارة إلكترونية",
      quote:
        "تحسّن أداء متجرنا على ووكومرس وظهوره في محركات البحث بشكل كبير بعد تحسينات أمير. ارتفع معدل التحويل بوضوح خلال أسابيع.",
    },
    t4: {
      role: "مدير تقني",
      company: "عميل مؤسسي",
      quote:
        "من المطورين القلائل الذين يفكرون في قابلية الصيانة وليس فقط سرعة التسليم. كود نظيف، وتوثيق واضح، وتواصل ممتاز طوال المشروع.",
    },
  },
};

export function getTestimonials(locale: Locale): Testimonial[] {
  const t = translations[locale];
  return base.map((item) => ({ ...item, ...t[item.id] }));
}
