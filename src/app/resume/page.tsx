import type { Metadata } from "next";

import { Container } from "@/components/ui/Container";
import { education } from "@/config/education";
import { careerJourney } from "@/config/experience";
import { personal } from "@/config/personal";
import { skillCategories } from "@/config/skills";

import { PrintButton } from "./PrintButton";

export const metadata: Metadata = {
  title: "Resume",
  description: `Résumé for ${personal.name} — ${personal.title} & ${personal.subtitle}.`,
};

const workStages = careerJourney.filter((stage) => stage.type !== "education");

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background py-16 print:bg-white print:py-0">
      <Container className="max-w-4xl">
        <div className="mb-8 flex justify-end print:hidden">
          <PrintButton />
        </div>

        <div className="rounded-3xl border border-border bg-background-elevated p-8 text-foreground shadow-2xl print:rounded-none print:border-none print:bg-white print:p-0 print:text-black print:shadow-none sm:p-12">
          <header className="flex flex-col gap-2 border-b border-border pb-6 print:border-black/20">
            <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {personal.name}
            </h1>
            <p className="text-lg font-medium text-accent-blue-light print:text-black">
              {personal.title} &middot; {personal.subtitle}
            </p>
            <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted print:text-black/70">
              <span>{personal.email}</span>
              <span>{personal.phone}</span>
              <span>{personal.location}</span>
            </div>
          </header>

          <section className="py-6">
            <p className="text-sm leading-relaxed text-muted print:text-black/80">
              {personal.aboutDescription}
            </p>
          </section>

          <section className="border-t border-border py-6 print:border-black/20">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground print:text-black">
              Experience
            </h2>
            <div className="flex flex-col gap-6">
              {workStages.map((stage) => (
                <div key={stage.id}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-sm font-semibold">{stage.title}</h3>
                    {stage.duration && (
                      <span className="text-xs text-muted-foreground print:text-black/60">
                        {stage.duration}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-accent-blue-light print:text-black/70">
                    {stage.organization}
                    {stage.location ? ` — ${stage.location}` : ""}
                  </p>
                  {stage.description && (
                    <p className="mt-1.5 text-sm text-muted print:text-black/80">
                      {stage.description}
                    </p>
                  )}
                  {(stage.bullets ?? stage.tags) && (
                    <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted print:text-black/70">
                      {(stage.bullets ?? stage.tags)?.map((item) => (
                        <li key={item}>&bull; {item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="border-t border-border py-6 print:border-black/20">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground print:text-black">
              Education
            </h2>
            {education.map((entry) => (
              <div key={entry.id}>
                <h3 className="text-sm font-semibold">{entry.degree}</h3>
                <p className="text-sm text-accent-blue-light print:text-black/70">
                  {entry.institution}
                </p>
                <p className="mt-1.5 text-sm text-muted print:text-black/80">
                  {entry.description}
                </p>
              </div>
            ))}
          </section>

          <section className="border-t border-border pt-6 print:border-black/20">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground print:text-black">
              Skills
            </h2>
            <div className="flex flex-col gap-3">
              {skillCategories.map((category) => (
                <div key={category.id} className="flex flex-wrap gap-x-2 text-sm">
                  <span className="font-semibold">{category.label}:</span>
                  <span className="text-muted print:text-black/80">
                    {category.skills.map((skill) => skill.name).join(", ")}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
