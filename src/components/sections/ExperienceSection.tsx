"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { TbBriefcase2, TbLayoutGrid } from "react-icons/tb";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TabList, Tabs, TabTrigger, TabPanel } from "@/components/ui/Tabs";

import { CareerJourneyTimeline } from "./experience/CareerJourneyTimeline";
import { ProjectsGrid } from "./projects/ProjectsGrid";

type ExperienceTab = "journey" | "projects";

export function ExperienceSection() {
  const t = useTranslations("experience");
  const [activeTab, setActiveTab] = useState<ExperienceTab>("journey");

  useEffect(() => {
    const syncFromHash = () => {
      if (window.location.hash === "#projects") {
        setActiveTab("projects");
      }
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  return (
    <section id="experience" className="relative scroll-mt-28 py-24 sm:py-32">
      <span id="projects" className="absolute top-0 scroll-mt-28" aria-hidden />

      <Container>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <Tabs
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as ExperienceTab)}
          className="mt-12 flex flex-col items-center gap-10"
        >
          <TabList label={t("tabsAriaLabel")}>
            <TabTrigger id="journey">
              <span className="flex items-center gap-2">
                <TbBriefcase2 size={16} />
                {t("tabJourney")}
              </span>
            </TabTrigger>
            <TabTrigger id="projects">
              <span className="flex items-center gap-2">
                <TbLayoutGrid size={16} />
                {t("tabProjects")}
              </span>
            </TabTrigger>
          </TabList>

          <div className="w-full">
            <TabPanel id="journey">
              <div className="mx-auto max-w-3xl">
                <CareerJourneyTimeline />
              </div>
            </TabPanel>
            <TabPanel id="projects">
              <ProjectsGrid />
            </TabPanel>
          </div>
        </Tabs>
      </Container>
    </section>
  );
}
