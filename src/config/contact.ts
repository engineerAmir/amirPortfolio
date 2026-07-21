import { TbBrandWhatsapp, TbMail, TbPhone } from "react-icons/tb";

import { buildMailtoLink, buildWhatsAppLink } from "@/lib/utils";
import type { ContactMethod } from "@/types";

import { personal } from "./personal";

export const contactMethods: ContactMethod[] = [
  {
    id: "email",
    label: "Email",
    value: personal.email,
    href: buildMailtoLink(personal.email, "Project inquiry"),
    icon: TbMail,
    description: "Best for detailed project briefs",
  },
  {
    id: "phone",
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s+/g, "")}`,
    icon: TbPhone,
    description: "Available for calls during business hours",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "Chat instantly",
    href: buildWhatsAppLink(
      personal.whatsappNumber,
      "Hi Amir, I found your portfolio and I'd like to talk about a project."
    ),
    icon: TbBrandWhatsapp,
    description: "Fastest way to reach me",
  },
];
