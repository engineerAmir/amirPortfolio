import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

const buttonStyles = cva(
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-accent-blue to-accent-purple text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)] hover:shadow-[0_0_30px_-5px_var(--accent-purple)] hover:brightness-110 active:brightness-95",
        secondary:
          "border border-border-strong bg-surface text-foreground hover:border-accent-blue-light/50 hover:bg-surface-hover",
        ghost: "text-muted hover:text-foreground hover:bg-surface",
        outline:
          "border border-white/15 text-foreground hover:border-accent-purple-light/60 hover:bg-white/5",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-[3.25rem] px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type CommonProps = VariantProps<typeof buttonStyles> & {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
    external?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const { variant, size, children, className, icon, iconPosition = "left", ...rest } = props;

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="shrink-0 text-[1.1em]">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="shrink-0 text-[1.1em] transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  const classes = cn(buttonStyles({ variant, size }), className);

  if ("href" in props && props.href) {
    const { href, external, ...anchorRest } = rest as Omit<
      ButtonAsLink,
      "variant" | "size" | "children" | "className" | "icon" | "iconPosition"
    >;

    if (external || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return (
        <a
          href={href}
          className={classes}
          target={external ?? href.startsWith("http") ? "_blank" : undefined}
          rel={external ?? href.startsWith("http") ? "noopener noreferrer" : undefined}
          {...anchorRest}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...anchorRest}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
