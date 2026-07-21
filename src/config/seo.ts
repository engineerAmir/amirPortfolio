const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://amirabdulhamid.dev").replace(
  /\/$/,
  ""
);

export const seo = {
  siteUrl,
  name: "Amir Abdulhamid",
  title: "Amir Abdulhamid — Software Engineer & Senior Web Developer",
  titleTemplate: "%s | Amir Abdulhamid",
  description:
    "Amir Abdulhamid is a Software Engineer and Senior Web Developer building scalable web applications, enterprise solutions, and eCommerce platforms with React, Next.js, and Laravel.",
  keywords: [
    "Amir Abdulhamid",
    "Software Engineer",
    "Senior Web Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Laravel Developer",
    "WordPress Developer",
    "WooCommerce Developer",
    "Freelance Web Developer Egypt",
    "AI Automation",
  ],
  ogImage: "/og-image.png",
  locale: "en_US",
} as const;
