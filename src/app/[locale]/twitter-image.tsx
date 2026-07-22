import { ImageResponse } from "next/og";

import { personal } from "@/config/personal";
import { routing } from "@/i18n/routing";
import { OgImageMarkup, ogImageContentType, ogImageSize } from "@/lib/og-image";

export const alt = `${personal.name} — Software Engineer & Senior Web Developer`;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function TwitterImage() {
  return new ImageResponse(<OgImageMarkup />, size);
}
