"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { TbExternalLink } from "react-icons/tb";

import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";
import { defaultTransition, fadeInUp } from "@/lib/motion";
import type { Project } from "@/types";

import { ProjectThumbnail } from "./ProjectThumbnail";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations("projects");

  return (
    <motion.div variants={fadeInUp} transition={defaultTransition} className="h-full">
      <GlassCard
        as="article"
        className="group flex h-full flex-col overflow-hidden p-0"
      >
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("openLiveSite", { title: project.title })}
          className="relative block aspect-[16/11] w-full overflow-hidden bg-background-elevated"
        >
          <ProjectThumbnail project={project} />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="absolute end-3 top-3 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full bg-background/80 text-foreground opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <TbExternalLink size={16} />
          </span>
        </a>

        <div className="flex flex-1 flex-col gap-3 p-6">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-display text-lg font-semibold text-foreground">
              {project.title}
            </h3>
            <Badge variant="accent" className="shrink-0">
              {project.category}
            </Badge>
          </div>

          <p className="line-clamp-3 text-sm leading-relaxed text-muted">
            {project.description}
          </p>

          <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
            {project.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center gap-1.5 text-sm font-medium text-accent-blue-light transition-colors hover:text-accent-purple-light"
          >
            {t("visitLiveSite")}
            <TbExternalLink size={14} />
          </a>
        </div>
      </GlassCard>
    </motion.div>
  );
}
