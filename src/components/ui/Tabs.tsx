"use client";

import { AnimatePresence, motion } from "framer-motion";
import { createContext, useContext, useId, useMemo, type KeyboardEvent, type ReactNode } from "react";

import { cn } from "@/lib/utils";

interface TabsContextValue {
  activeTab: string;
  setActiveTab: (id: string) => void;
  baseId: string;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("Tabs components must be used within <Tabs>");
  return ctx;
}

interface TabsProps {
  value: string;
  onValueChange: (id: string) => void;
  children: ReactNode;
  className?: string;
}

export function Tabs({ value, onValueChange, children, className }: TabsProps) {
  const baseId = useId();

  const contextValue = useMemo<TabsContextValue>(
    () => ({ activeTab: value, setActiveTab: onValueChange, baseId }),
    [value, onValueChange, baseId]
  );

  return (
    <TabsContext.Provider value={contextValue}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

interface TabListProps {
  children: ReactNode;
  className?: string;
  label: string;
}

export function TabList({ children, className, label }: TabListProps) {
  return (
    <div
      role="tablist"
      aria-label={label}
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-border bg-surface p-1.5",
        className
      )}
    >
      {children}
    </div>
  );
}

interface TabTriggerProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function TabTrigger({ id, children, className }: TabTriggerProps) {
  const { activeTab, setActiveTab, baseId } = useTabsContext();
  const isActive = activeTab === id;

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const tablist = event.currentTarget.closest('[role="tablist"]');
    if (!tablist) return;

    const tabs = Array.from(tablist.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
    const currentIndex = tabs.indexOf(event.currentTarget);
    if (currentIndex === -1) return;

    let nextIndex: number | null = null;
    if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % tabs.length;
    if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabs.length - 1;

    if (nextIndex !== null) {
      event.preventDefault();
      tabs[nextIndex].focus();
      tabs[nextIndex].click();
    }
  };

  return (
    <button
      id={`${baseId}-tab-${id}`}
      role="tab"
      type="button"
      aria-selected={isActive}
      aria-controls={`${baseId}-panel-${id}`}
      tabIndex={isActive ? 0 : -1}
      onClick={() => setActiveTab(id)}
      onKeyDown={handleKeyDown}
      className={cn(
        "relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300 focus-visible:outline-none",
        isActive ? "text-white" : "text-muted hover:text-foreground",
        className
      )}
    >
      {isActive && (
        <motion.span
          layoutId={`${baseId}-tab-pill`}
          className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-primary to-primary-dark"
          transition={{ type: "spring", stiffness: 400, damping: 32 }}
        />
      )}
      {children}
    </button>
  );
}

interface TabPanelProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function TabPanel({ id, children, className }: TabPanelProps) {
  const { activeTab, baseId } = useTabsContext();
  const isActive = activeTab === id;

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          key={id}
          id={`${baseId}-panel-${id}`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${id}`}
          tabIndex={0}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
