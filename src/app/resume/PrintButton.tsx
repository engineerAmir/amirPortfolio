"use client";

import { TbPrinter } from "react-icons/tb";

import { Button } from "@/components/ui/Button";

export function PrintButton() {
  return (
    <Button
      type="button"
      variant="primary"
      size="md"
      icon={<TbPrinter />}
      onClick={() => window.print()}
      className="print:hidden"
    >
      Print / Save as PDF
    </Button>
  );
}
