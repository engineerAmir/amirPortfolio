import type { MetadataRoute } from "next";

import { personal } from "@/config/personal";
import { seo } from "@/config/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: seo.name,
    short_name: personal.firstName,
    description: seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#05060a",
    theme_color: "#05060a",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
