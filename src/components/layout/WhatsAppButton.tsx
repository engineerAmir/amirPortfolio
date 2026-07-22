"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { FaWhatsapp } from "react-icons/fa6";

import { personal } from "@/config/personal";
import type { Locale } from "@/i18n/routing";
import { buildWhatsAppLink } from "@/lib/utils";

const whatsappMessage = {
  en: "Hi Amir, I found your portfolio and I'd like to talk about a project.",
  ar: "مرحبًا أمير، شاهدت موقعك الشخصي وأود التحدث معك بخصوص مشروع.",
} as const;

export function WhatsAppButton() {
  const locale = useLocale() as Locale;
  const t = useTranslations("common");
  const href = buildWhatsAppLink(personal.whatsappNumber, whatsappMessage[locale]);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("chatOnWhatsapp")}
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.65)] print:hidden sm:bottom-8 sm:right-8"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/50 [animation-duration:2.5s]" />
      <FaWhatsapp size={28} />
    </motion.a>
  );
}
