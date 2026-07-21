"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TbPhotoOff } from "react-icons/tb";

import { getSiteScreenshotUrl } from "@/lib/utils";
import type { Project } from "@/types";

interface ProjectThumbnailProps {
  project: Project;
}

/**
 * WordPress mshots renders screenshots asynchronously. Until the real capture
 * is ready it serves a fixed 400x300 placeholder (HTTP 200, no error event),
 * so we detect that size on load and poll a few times before giving up.
 */
const PLACEHOLDER_WIDTH = 400;
const PLACEHOLDER_HEIGHT = 300;
const MAX_RETRIES = 6;
const RETRY_DELAY_MS = 4000;

export function ProjectThumbnail({ project }: ProjectThumbnailProps) {
  const [status, setStatus] = useState<"loading" | "ready" | "unavailable">("loading");
  const [attempt, setAttempt] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const baseUrl = getSiteScreenshotUrl(project.url);
  const src = attempt > 0 ? `${baseUrl}&retry=${attempt}` : baseUrl;

  return (
    <>
      {status !== "ready" && (
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-accent-blue/15 via-background-elevated to-accent-purple/15 text-muted-foreground ${
            status === "loading" ? "animate-pulse" : ""
          }`}
        >
          {status === "unavailable" && <TbPhotoOff size={28} />}
          <span className="font-display text-2xl font-bold text-foreground/70">
            {project.title}
          </span>
        </div>
      )}

      {status !== "unavailable" && (
        <Image
          key={src}
          src={src}
          alt={`Screenshot of the ${project.title} website`}
          fill
          unoptimized
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={`object-cover object-top transition-opacity duration-500 group-hover:scale-105 ${
            status === "ready" ? "opacity-100" : "opacity-0"
          }`}
          onLoad={(event) => {
            const img = event.currentTarget;
            const isPlaceholder =
              img.naturalWidth === PLACEHOLDER_WIDTH && img.naturalHeight === PLACEHOLDER_HEIGHT;

            if (isPlaceholder) {
              if (attempt < MAX_RETRIES) {
                timeoutRef.current = setTimeout(() => setAttempt((a) => a + 1), RETRY_DELAY_MS);
              } else {
                setStatus("unavailable");
              }
              return;
            }

            setStatus("ready");
          }}
          onError={() => setStatus("unavailable")}
        />
      )}
    </>
  );
}
