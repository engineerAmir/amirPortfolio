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

import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "custom-web-development",
    title: "Custom Website Development",
    description:
      "Bespoke, production-grade websites engineered for performance, scalability, and maintainability.",
    icon: TbCode,
  },
  {
    id: "react-development",
    title: "React Development",
    description:
      "Interactive, component-driven frontends built with React and modern state management patterns.",
    icon: TbLayoutGrid,
  },
  {
    id: "nextjs-applications",
    title: "Next.js Applications",
    description:
      "Full-stack Next.js apps with server rendering, SEO, and fast, resilient performance out of the box.",
    icon: TbRocket,
  },
  {
    id: "wordpress-development",
    title: "WordPress Development",
    description:
      "Custom WordPress builds and theme development tailored to your brand and content workflow.",
    icon: TbBrandWordpress,
  },
  {
    id: "woocommerce-stores",
    title: "WooCommerce Stores",
    description:
      "Conversion-focused online stores with optimized catalogs, checkout, and payment integrations.",
    icon: TbShoppingCart,
  },
  {
    id: "laravel-backend",
    title: "Laravel Backend",
    description:
      "Robust, secure backend systems and APIs built on Laravel with clean, maintainable architecture.",
    icon: TbDatabase,
  },
  {
    id: "nodejs-apis",
    title: "Node.js APIs",
    description:
      "Fast, scalable REST APIs and services built with Node.js for modern web and mobile clients.",
    icon: TbApi,
  },
  {
    id: "firebase-applications",
    title: "Firebase Applications",
    description:
      "Realtime, serverless applications powered by Firebase — auth, database, and hosting included.",
    icon: TbBuildingStore,
  },
  {
    id: "website-optimization",
    title: "Website Optimization",
    description:
      "Performance audits and fixes that improve load time, Core Web Vitals, and Lighthouse scores.",
    icon: TbBrowserCheck,
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    description:
      "Modernizing outdated sites into fast, premium experiences without losing what already works.",
    icon: TbLayoutGrid,
  },
  {
    id: "cms-development",
    title: "CMS Development",
    description:
      "Flexible content systems that let your team manage content without touching code.",
    icon: TbBrandWordpress,
  },
  {
    id: "api-integration",
    title: "API Integration",
    description:
      "Connecting third-party services, payment gateways, and internal systems into one reliable workflow.",
    icon: TbApi,
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    description:
      "Automating repetitive business workflows with AI-driven pipelines and integrations.",
    icon: TbSettingsAutomation,
    comingSoon: true,
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    description:
      "Custom autonomous agents that handle multi-step tasks across your tools and data.",
    icon: TbRobot,
    comingSoon: true,
  },
  {
    id: "chatbots",
    title: "Chatbots",
    description:
      "Conversational assistants for support, sales, and onboarding, built on modern LLMs.",
    icon: TbMessageChatbot,
    comingSoon: true,
  },
];
