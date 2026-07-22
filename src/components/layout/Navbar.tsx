"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TbMenu2, TbX } from "react-icons/tb";

import { Button } from "@/components/ui/Button";
import { getNavItems } from "@/config/nav";
import { personal } from "@/config/personal";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrolled } from "@/hooks/useScrolled";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar() {
  const locale = useLocale() as Locale;
  const t = useTranslations("common");
  const navItems = getNavItems(locale);
  const sectionIds = navItems.map((item) => item.href.replace("#", ""));

  const scrolled = useScrolled();
  const activeId = useActiveSection(sectionIds);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 print:hidden",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <nav
          className={cn(
            "flex w-full items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300",
            scrolled && "glass-panel glow-shadow"
          )}
        >
          <Link
            href="#home"
            className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-foreground"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark font-display text-sm font-bold text-white">
              {personal.initials}
            </span>
            <span className="hidden sm:inline">{personal.firstName}</span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                      isActive ? "text-foreground" : "text-muted hover:text-foreground"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="navbar-active-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-surface-hover"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher />
            <Button href="#contact" size="sm">
              {t("hireMe")}
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher className="px-3 py-1.5 text-xs" />
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="flex h-10 w-10 items-center justify-center rounded-full text-foreground"
            >
              {mobileOpen ? <TbX size={22} /> : <TbMenu2 size={22} />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mx-5 mt-2 rounded-2xl border border-border bg-background-elevated p-4 shadow-2xl lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => {
                const id = item.href.replace("#", "");
                const isActive = activeId === id;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-surface-hover text-foreground"
                          : "text-muted hover:bg-surface hover:text-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Button href="#contact" className="mt-3 w-full" onClick={() => setMobileOpen(false)}>
              {t("hireMe")}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
