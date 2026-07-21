import type { IconType } from "react-icons";

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: IconType;
  /** Show in primary/high-visibility placements like the hero and footer top row */
  primary?: boolean;
}

export interface ContactMethod {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: IconType;
  description?: string;
}

export type TimelineStageType = "education" | "work" | "freelance" | "current";

export interface TimelineStage {
  id: string;
  type: TimelineStageType;
  title: string;
  organization: string;
  location?: string;
  duration?: string;
  description?: string;
  bullets?: string[];
  tags?: string[];
  icon: IconType;
}

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  description: string;
  duration?: string;
}

export interface Project {
  id: string;
  title: string;
  url: string;
  category: string;
  technologies: string[];
  description: string;
  featured?: boolean;
}

export type SkillCategoryId = "frontend" | "backend" | "cms" | "tools" | "ai";

export interface Skill {
  name: string;
  icon: IconType;
}

export interface SkillCategory {
  id: SkillCategoryId;
  label: string;
  skills: Skill[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  comingSoon?: boolean;
}

export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}
