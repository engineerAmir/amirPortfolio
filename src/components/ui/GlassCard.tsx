import type { ElementType, HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  hover?: boolean;
}

export function GlassCard({
  children,
  className,
  as: Tag = "div",
  hover = true,
  ...rest
}: GlassCardProps) {
  return (
    <Tag
      className={cn(
        "glass-panel rounded-2xl",
        hover &&
          "transition-all duration-300 hover:border-border-strong hover:bg-surface-hover",
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
