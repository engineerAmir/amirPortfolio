import { getLocale } from "next-intl/server";

import { getPersonalContent, personal } from "@/config/personal";
import { seo } from "@/config/seo";
import { getSocialLinks } from "@/config/social";
import type { Locale } from "@/i18n/routing";

export async function JsonLd() {
  const locale = (await getLocale()) as Locale;
  const content = seo.getContent(locale);
  const personalContent = getPersonalContent(locale);
  const socialLinks = getSocialLinks(locale);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.name,
    jobTitle: personalContent.title,
    description: content.description,
    url: seo.siteUrl,
    email: `mailto:${personal.email}`,
    address: {
      "@type": "PostalAddress",
      addressCountry: personalContent.location,
    },
    sameAs: socialLinks
      .filter((social) => social.id !== "whatsapp")
      .map((social) => social.href),
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Laravel",
      "WordPress",
      "WooCommerce",
      "AI Automation",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seo.name,
    url: seo.siteUrl,
    description: content.description,
    inLanguage: locale,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
