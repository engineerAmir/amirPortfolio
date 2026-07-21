"use client";

import { motion } from "framer-motion";

import { projects } from "@/config/projects";
import { staggerContainer, viewportOnce } from "@/lib/motion";

import { ProjectCard } from "./ProjectCard";

export function ProjectsGrid() {
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
