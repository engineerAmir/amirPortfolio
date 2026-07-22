"use client";

import { useTranslations } from "next-intl";
import { TbPrinter } from "react-icons/tb";

import { Button } from "@/components/ui/Button";

export function PrintButton() {
  const t = useTranslations("resume");

  return (
    <Button
      type="button"
      variant="primary"
      size="md"
      icon={<TbPrinter />}
      onClick={() => window.print()}
      className="print:hidden"
    >
      {t("printButton")}
    </Button>
  );
}
