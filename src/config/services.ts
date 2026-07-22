import {
  TbApi,
  TbBrandWordpress,
  TbBrowserCheck,
  TbBuildingStore,
  TbCode,
  TbDatabase,
  TbLayoutGrid,
  TbMessageChatbot,
  TbRobot,
  TbRocket,
  TbSettingsAutomation,
  TbShoppingCart,
} from "react-icons/tb";

import type { Locale } from "@/i18n/routing";
import type { Service } from "@/types";

interface ServiceTranslation {
  title: string;
  description: string;
}

const base = [
  { id: "custom-web-development", icon: TbCode },
  { id: "react-development", icon: TbLayoutGrid },
  { id: "nextjs-applications", icon: TbRocket },
  { id: "wordpress-development", icon: TbBrandWordpress },
  { id: "woocommerce-stores", icon: TbShoppingCart },
  { id: "laravel-backend", icon: TbDatabase },
  { id: "nodejs-apis", icon: TbApi },
  { id: "firebase-applications", icon: TbBuildingStore },
  { id: "website-optimization", icon: TbBrowserCheck },
  { id: "website-redesign", icon: TbLayoutGrid },
  { id: "cms-development", icon: TbBrandWordpress },
  { id: "api-integration", icon: TbApi },
  { id: "ai-automation", icon: TbSettingsAutomation, comingSoon: true },
  { id: "ai-agents", icon: TbRobot, comingSoon: true },
  { id: "chatbots", icon: TbMessageChatbot, comingSoon: true },
] as const satisfies { id: string; icon: Service["icon"]; comingSoon?: boolean }[];

const translations: Record<Locale, Record<string, ServiceTranslation>> = {
  en: {
    "custom-web-development": {
      title: "Custom Website Development",
      description:
        "Bespoke, production-grade websites engineered for performance, scalability, and maintainability.",
    },
    "react-development": {
      title: "React Development",
      description:
        "Interactive, component-driven frontends built with React and modern state management patterns.",
    },
    "nextjs-applications": {
      title: "Next.js Applications",
      description:
        "Full-stack Next.js apps with server rendering, SEO, and fast, resilient performance out of the box.",
    },
    "wordpress-development": {
      title: "WordPress Development",
      description:
        "Custom WordPress builds and theme development tailored to your brand and content workflow.",
    },
    "woocommerce-stores": {
      title: "WooCommerce Stores",
      description:
        "Conversion-focused online stores with optimized catalogs, checkout, and payment integrations.",
    },
    "laravel-backend": {
      title: "Laravel Backend",
      description:
        "Robust, secure backend systems and APIs built on Laravel with clean, maintainable architecture.",
    },
    "nodejs-apis": {
      title: "Node.js APIs",
      description:
        "Fast, scalable REST APIs and services built with Node.js for modern web and mobile clients.",
    },
    "firebase-applications": {
      title: "Firebase Applications",
      description:
        "Realtime, serverless applications powered by Firebase — auth, database, and hosting included.",
    },
    "website-optimization": {
      title: "Website Optimization",
      description:
        "Performance audits and fixes that improve load time, Core Web Vitals, and Lighthouse scores.",
    },
    "website-redesign": {
      title: "Website Redesign",
      description:
        "Modernizing outdated sites into fast, premium experiences without losing what already works.",
    },
    "cms-development": {
      title: "CMS Development",
      description: "Flexible content systems that let your team manage content without touching code.",
    },
    "api-integration": {
      title: "API Integration",
      description:
        "Connecting third-party services, payment gateways, and internal systems into one reliable workflow.",
    },
    "ai-automation": {
      title: "AI Automation",
      description: "Automating repetitive business workflows with AI-driven pipelines and integrations.",
    },
    "ai-agents": {
      title: "AI Agents",
      description: "Custom autonomous agents that handle multi-step tasks across your tools and data.",
    },
    chatbots: {
      title: "Chatbots",
      description: "Conversational assistants for support, sales, and onboarding, built on modern LLMs.",
    },
  },
  ar: {
    "custom-web-development": {
      title: "تطوير مواقع مخصّصة",
      description: "مواقع مصممة خصيصًا وجاهزة للإنتاج، مبنية من أجل الأداء وقابلية التوسّع وسهولة الصيانة.",
    },
    "react-development": {
      title: "تطوير باستخدام React",
      description: "واجهات تفاعلية قائمة على المكوّنات، مبنية بـ React وأنماط إدارة حالة حديثة.",
    },
    "nextjs-applications": {
      title: "تطبيقات Next.js",
      description: "تطبيقات Next.js متكاملة بعرض من جهة الخادم، وتهيئة SEO، وأداء سريع وموثوق من الأساس.",
    },
    "wordpress-development": {
      title: "تطوير مواقع ووردبريس",
      description: "بناء مواقع ووردبريس مخصّصة وتطوير قوالب تتناسب مع هويتك التجارية وسير عملك.",
    },
    "woocommerce-stores": {
      title: "متاجر ووكومرس",
      description: "متاجر إلكترونية تركّز على زيادة التحويل، بكتالوجات محسّنة وتجربة دفع وربط دفع متكامل.",
    },
    "laravel-backend": {
      title: "أنظمة خلفية بـ Laravel",
      description: "أنظمة خلفية وواجهات برمجية آمنة وقوية مبنية على Laravel ببنية نظيفة وسهلة الصيانة.",
    },
    "nodejs-apis": {
      title: "واجهات برمجية بـ Node.js",
      description: "واجهات برمجية REST سريعة وقابلة للتوسّع مبنية بـ Node.js لعملاء الويب والموبايل الحديثة.",
    },
    "firebase-applications": {
      title: "تطبيقات Firebase",
      description: "تطبيقات لحظية بدون خادم مبنية على Firebase — مع المصادقة وقاعدة البيانات والاستضافة.",
    },
    "website-optimization": {
      title: "تحسين أداء المواقع",
      description: "تدقيق وتحسين الأداء لرفع سرعة التحميل، ومؤشرات Core Web Vitals، ونتائج Lighthouse.",
    },
    "website-redesign": {
      title: "إعادة تصميم المواقع",
      description: "تحويل المواقع القديمة إلى تجارب سريعة وراقية دون فقدان ما يعمل بشكل جيد بالفعل.",
    },
    "cms-development": {
      title: "تطوير أنظمة إدارة المحتوى",
      description: "أنظمة محتوى مرنة تتيح لفريقك إدارة المحتوى دون الحاجة للتعامل مع الأكواد.",
    },
    "api-integration": {
      title: "دمج الواجهات البرمجية",
      description: "ربط الخدمات الخارجية وبوابات الدفع والأنظمة الداخلية في مسار عمل واحد وموثوق.",
    },
    "ai-automation": {
      title: "الأتمتة بالذكاء الاصطناعي",
      description: "أتمتة مهام الأعمال المتكررة عبر مسارات عمل وتكاملات مدعومة بالذكاء الاصطناعي.",
    },
    "ai-agents": {
      title: "الوكلاء الذكية",
      description: "وكلاء ذكاء اصطناعي مستقلة ومخصّصة تنفّذ مهامًا متعددة الخطوات عبر أدواتك وبياناتك.",
    },
    chatbots: {
      title: "روبوتات الدردشة",
      description: "مساعدات محادثة للدعم والمبيعات والتهيئة، مبنية على نماذج لغوية حديثة.",
    },
  },
};

export function getServices(locale: Locale): Service[] {
  const t = translations[locale];
  return base.map((service) => ({ ...service, ...t[service.id] }));
}
