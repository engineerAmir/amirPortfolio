import type { Project } from "@/types";

/**
 * Update freely — every project card on the site is generated from this list.
 * Thumbnails are auto-captured from the live `url` (see lib/utils.ts).
 */
export const projects: Project[] = [
  {
    id: "gazal-home",
    title: "Gazal Home",
    url: "https://gazalhome.com/",
    category: "eCommerce",
    technologies: ["WordPress", "WooCommerce", "PHP", "MySQL"],
    description:
      "A custom home & living storefront built on WooCommerce, with a tailored catalog, checkout, and admin workflow.",
    featured: true,
  },
  {
    id: "velvista",
    title: "Velvista",
    url: "https://velvista-eg.com/",
    category: "eCommerce",
    technologies: ["WordPress", "WooCommerce", "PHP", "MySQL"],
    description:
      "A conversion-focused eCommerce storefront with a custom theme, optimized product pages, and streamlined checkout.",
    featured: true,
  },
  {
    id: "sarushka",
    title: "Sarushka",
    url: "https://sarushka.online/",
    category: "eCommerce",
    technologies: ["WordPress", "WooCommerce", "PHP", "MySQL"],
    description:
      "An online store built for fast browsing and mobile-first shopping, with custom WooCommerce integrations.",
  },
  {
    id: "vilora-beauty",
    title: "Vilora Beauty",
    url: "https://vilorabeauty.com/",
    category: "eCommerce",
    technologies: ["WordPress", "WooCommerce", "PHP", "MySQL"],
    description:
      "A beauty & cosmetics storefront with a custom catalog structure, SEO-tuned pages, and a polished checkout flow.",
  },
  {
    id: "al-usus",
    title: "Al Usus",
    url: "https://al-usus.com/",
    category: "Business Website",
    technologies: ["WordPress", "Elementor", "PHP"],
    description:
      "A professional business website focused on clear service presentation, lead generation, and fast load times.",
  },
  {
    id: "echo-new",
    title: "Echo New",
    url: "https://echonew.etriplesoft.com/",
    category: "Enterprise Web App",
    technologies: ["Laravel", "MySQL", "JavaScript", "TailwindCSS"],
    description:
      "The next-generation build of the Echo platform, developed at eTripleSoft with a modernized UI and workflow.",
    featured: true,
  },
  {
    id: "learn",
    title: "Learn",
    url: "https://learn.etriplesoft.com/",
    category: "Learning Platform",
    technologies: ["Laravel", "MySQL", "JavaScript"],
    description:
      "An eLearning platform built for structured course delivery, progress tracking, and a smooth student experience.",
  },
  {
    id: "micronet",
    title: "Micronet",
    url: "https://micronet.etriplesoft.com/",
    category: "Enterprise Web App",
    technologies: ["Laravel", "MySQL", "REST APIs"],
    description:
      "A business management system built at eTripleSoft to streamline internal operations and reporting.",
  },
  {
    id: "echo",
    title: "Echo",
    url: "https://echo.etriplesoft.com/",
    category: "Enterprise Web App",
    technologies: ["Laravel", "MySQL", "JavaScript"],
    description:
      "A core enterprise platform delivered at eTripleSoft, focused on reliability and day-to-day usability.",
  },
  {
    id: "etriplesoft",
    title: "eTripleSoft",
    url: "https://etriplesoft.com/",
    category: "Corporate Website",
    technologies: ["Laravel", "JavaScript", "TailwindCSS"],
    description:
      "The corporate website for eTripleSoft, presenting the company's services, portfolio, and enterprise capabilities.",
    featured: true,
  },
  {
    id: "hadeer",
    title: "Hadeer",
    url: "https://hadeer.topup.business/",
    category: "Business Web App",
    technologies: ["Laravel", "MySQL", "REST APIs"],
    description:
      "A digital top-up / business platform built with a focus on transaction reliability and a clean user flow.",
  },
  {
    id: "jobzfind",
    title: "JobzFind",
    url: "https://jobzfind.com/",
    category: "Job Platform",
    technologies: ["Laravel", "MySQL", "JavaScript"],
    description:
      "A job listing and hiring platform connecting employers and candidates through a searchable, structured portal.",
    featured: true,
  },
  {
    id: "red-circle",
    title: "Red Circle",
    url: "https://redcircle-eg.com/",
    category: "Business Website",
    technologies: ["WordPress", "Elementor", "PHP"],
    description:
      "A brand-focused business website built for clarity, performance, and a strong first impression.",
  },
  {
    id: "noses",
    title: "Noses",
    url: "https://noses.me/",
    category: "eCommerce",
    technologies: ["WordPress", "WooCommerce", "PHP"],
    description:
      "A fragrance & lifestyle storefront with a custom WooCommerce catalog and a refined shopping experience.",
  },
  {
    id: "ghitha",
    title: "Ghitha",
    url: "https://www.ghitha.net/",
    category: "Business Website",
    technologies: ["WordPress", "WooCommerce", "PHP"],
    description:
      "A business platform built with a focus on clear content structure, performance, and search visibility.",
  },
];
