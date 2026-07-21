import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

import { buildWhatsAppLink } from "@/lib/utils";
import type { SocialLink } from "@/types";

import { personal } from "./personal";

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/engineerAmir",
    icon: FaGithub,
    primary: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/amir-abdulhamid-7406b6183/",
    icon: FaLinkedinIn,
    primary: true,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: buildWhatsAppLink(
      personal.whatsappNumber,
      "Hi Amir, I found your portfolio and I'd like to talk about a project."
    ),
    icon: FaWhatsapp,
    primary: true,
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61579286091453",
    icon: FaFacebookF,
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/amir__quest/",
    icon: FaInstagram,
  },
];
