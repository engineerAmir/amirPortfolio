import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Builds a wa.me deep link with an optional pre-filled message.
 */
export function buildWhatsAppLink(phone: string, message?: string) {
  const digits = phone.replace(/[^\d]/g, "");
  const base = `https://wa.me/${digits}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function buildMailtoLink(email: string, subject?: string) {
  return subject
    ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${email}`;
}

/**
 * Free, keyless screenshot service (WordPress mshots) used to auto-generate
 * project thumbnails from a live URL. Falls back gracefully in <ProjectThumbnail />
 * if the image never resolves.
 */
export function getSiteScreenshotUrl(url: string, width = 1280, height = 900) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=${width}&h=${height}`;
}
