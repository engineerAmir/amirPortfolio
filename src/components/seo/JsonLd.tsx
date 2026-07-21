import { personal } from "@/config/personal";
import { seo } from "@/config/seo";
import { socialLinks } from "@/config/social";

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.name,
    jobTitle: personal.title,
    description: seo.description,
    url: seo.siteUrl,
    email: `mailto:${personal.email}`,
    address: {
      "@type": "PostalAddress",
      addressCountry: personal.location,
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
    description: seo.description,
    inLanguage: "en",
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
