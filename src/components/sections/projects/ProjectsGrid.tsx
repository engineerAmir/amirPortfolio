"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";

import { getProjects } from "@/config/projects";
import type { Locale } from "@/i18n/routing";
import { staggerContainer, viewportOnce } from "@/lib/motion";

import { ProjectCard } from "./ProjectCard";

export function ProjectsGrid() {
  const locale = useLocale() as Locale;
  const projects = getProjects(locale);

  return (
    <motion.div
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </motion.div>
  );
}
