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
 * Three-tier thumbnail: a manually placed local screenshot
 * (public/assets/projects/<id>.(jpg|jpeg|png|webp)) takes priority — drop
 * one in and it's picked up automatically, no code change needed. If it's
 * missing, this falls back to an auto-generated live screenshot (WordPress
 * mshots), and if that's unavailable too, a branded placeholder with the
 * project title.
 *
 * mshots renders asynchronously: until the real capture is ready it serves
 * a fixed 400x300 placeholder (HTTP 200, no error event), so we detect that
 * size on load and poll a few times before giving up.
 */
const LOCAL_EXTENSIONS = ["jpg", "jpeg", "png", "webp"];
const PLACEHOLDER_WIDTH = 400;
const PLACEHOLDER_HEIGHT = 300;
const MAX_RETRIES = 6;
const RETRY_DELAY_MS = 4000;

export function ProjectThumbnail({ project }: ProjectThumbnailProps) {
  const [source, setSource] = useState<"local" | "remote">("local");
  const [localExtIndex, setLocalExtIndex] = useState(0);
  const [status, setStatus] = useState<"loading" | "ready" | "unavailable">("loading");
  const [attempt, setAttempt] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  const localSrc = `/assets/projects/${project.id}.${LOCAL_EXTENSIONS[localExtIndex]}`;
  const remoteBaseUrl = getSiteScreenshotUrl(project.url);
  const remoteSrc = attempt > 0 ? `${remoteBaseUrl}&retry=${attempt}` : remoteBaseUrl;
  const src = source === "local" ? localSrc : remoteSrc;

  return (
    <>
      {status !== "ready" && (
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-primary/15 via-background-elevated to-primary-dark/15 text-muted-foreground ${
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
          unoptimized={source === "remote"}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={`object-cover object-top transition-opacity duration-500 group-hover:scale-105 ${
            status === "ready" ? "opacity-100" : "opacity-0"
          }`}
          onLoad={(event) => {
            if (source === "local") {
              setStatus("ready");
              return;
            }

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
          onError={() => {
            if (source === "local") {
              if (localExtIndex < LOCAL_EXTENSIONS.length - 1) {
                setLocalExtIndex((i) => i + 1);
              } else {
                setSource("remote");
              }
              return;
            }
            setStatus("unavailable");
          }}
        />
      )}
    </>
  );
}
