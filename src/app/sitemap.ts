import type { MetadataRoute } from "next";

import { seo } from "@/config/seo";
import { routing } from "@/i18n/routing";

function localizedPath(locale: string, path: string) {
  return locale === routing.defaultLocale ? path : `/${locale}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths = [
    { path: "/", changeFrequency: "monthly" as const, priority: 1 },
    { path: "/resume", changeFrequency: "yearly" as const, priority: 0.5 },
  ];

  return paths.map(({ path, changeFrequency, priority }) => ({
    url: `${seo.siteUrl}${localizedPath(routing.defaultLocale, path)}`,
    lastModified,
    changeFrequency,
    priority,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [locale, `${seo.siteUrl}${localizedPath(locale, path)}`])
      ),
    },
  }));
}
