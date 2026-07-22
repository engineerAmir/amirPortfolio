import { TbBrandWhatsapp, TbMail, TbPhone } from "react-icons/tb";

import type { Locale } from "@/i18n/routing";
import { buildMailtoLink, buildWhatsAppLink } from "@/lib/utils";
import type { ContactMethod } from "@/types";

import { personal } from "./personal";

const whatsappMessage = {
  en: "Hi Amir, I found your portfolio and I'd like to talk about a project.",
  ar: "مرحبًا أمير، شاهدت موقعك الشخصي وأود التحدث معك بخصوص مشروع.",
} as const;

const translations = {
  en: {
    email: { label: "Email", description: "Best for detailed project briefs" },
    phone: { label: "Phone", description: "Available for calls during business hours" },
    whatsapp: { label: "WhatsApp", value: "Chat instantly", description: "Fastest way to reach me" },
  },
  ar: {
    email: { label: "البريد الإلكتروني", description: "الأنسب لتفاصيل المشروع الكاملة" },
    phone: { label: "الهاتف", description: "متاح للاتصال خلال ساعات العمل" },
    whatsapp: { label: "واتساب", value: "تواصل فوري", description: "أسرع طريقة للتواصل معي" },
  },
} as const;

export function getContactMethods(locale: Locale): ContactMethod[] {
  const t = translations[locale];

  return [
    {
      id: "email",
      label: t.email.label,
      value: personal.email,
      href: buildMailtoLink(personal.email, "Project inquiry"),
      icon: TbMail,
      description: t.email.description,
    },
    {
      id: "phone",
      label: t.phone.label,
      value: personal.phone,
      href: `tel:${personal.phone.replace(/\s+/g, "")}`,
      icon: TbPhone,
      description: t.phone.description,
    },
    {
      id: "whatsapp",
      label: t.whatsapp.label,
      value: t.whatsapp.value,
      href: buildWhatsAppLink(personal.whatsappNumber, whatsappMessage[locale]),
      icon: TbBrandWhatsapp,
      description: t.whatsapp.description,
    },
  ];
}
