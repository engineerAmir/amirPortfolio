import type { MetadataRoute } from "next";

import { seo } from "@/config/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: seo.siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${seo.siteUrl}/resume`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
