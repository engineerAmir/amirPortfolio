import { ImageResponse } from "next/og";

import { personal } from "@/config/personal";
import { OgImageMarkup, ogImageContentType, ogImageSize } from "@/lib/og-image";

export const alt = `${personal.name} — ${personal.title} & ${personal.subtitle}`;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function TwitterImage() {
  return new ImageResponse(<OgImageMarkup />, size);
}
