import { FaCss3Alt } from "react-icons/fa6";
import {
  SiClaude,
  SiElementor,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGithubcopilot,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiShopify,
  SiTailwindcss,
  SiTypescript,
  SiWoocommerce,
  SiWordpress,
} from "react-icons/si";
import {
  TbApi,
  TbBrandOpenai,
  TbBrandVscode,
  TbBuildingStore,
  TbCloud,
  TbDatabase,
  TbShieldLock,
  TbSparkles,
} from "react-icons/tb";

import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "Flutter", icon: SiFlutter },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Laravel", icon: SiLaravel },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Firebase", icon: SiFirebase },
      { name: "REST APIs", icon: TbApi },
      { name: "Authentication", icon: TbShieldLock },
      { name: "Databases", icon: TbDatabase },
      { name: "MySQL", icon: SiMysql },
      { name: "SQL & NoSQL", icon: TbDatabase },
    ],
  },
  {
    id: "cms",
    label: "CMS & eCommerce",
    skills: [
      { name: "WordPress", icon: SiWordpress },
      { name: "WooCommerce", icon: SiWoocommerce },
      { name: "Shopify", icon: SiShopify },
      { name: "Salla", icon: TbBuildingStore },
      { name: "6Valley", icon: TbBuildingStore },
      { name: "EasyOrder", icon: TbBuildingStore },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "VS Code", icon: TbBrandVscode },
      { name: "Figma", icon: SiFigma },
      { name: "Elementor", icon: SiElementor },
      { name: "Cloud Hosting", icon: TbCloud },
    ],
  },
  {
    id: "ai",
    label: "AI",
    skills: [
      { name: "Prompt Engineering", icon: TbSparkles },
      { name: "Cursor", icon: TbBrandVscode },
      { name: "Claude", icon: SiClaude },
      { name: "ChatGPT", icon: TbBrandOpenai },
      { name: "GitHub Copilot", icon: SiGithubcopilot },
    ],
  },
];
