import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "accent" | "outline";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variant === "default" && "border border-border bg-surface text-muted",
        variant === "accent" &&
          "border border-accent-purple/30 bg-accent-purple/10 text-accent-purple-light",
        variant === "outline" && "border border-border-strong text-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
