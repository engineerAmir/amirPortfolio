import { TbMapPin, TbSchool, TbSparkles, TbTargetArrow } from "react-icons/tb";

import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/config/education";
import { personal } from "@/config/personal";
import { fadeInUp, scaleIn } from "@/lib/motion";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-28 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="About Me"
          title="Engineering thoughtful, production-ready software"
          description="A quick look at who I am, how I work, and what I'm building toward next."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-5">
          <RevealOnScroll variants={fadeInUp} className="lg:col-span-3">
            <GlassCard className="flex h-full flex-col gap-6 p-8 sm:p-10">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="accent">{personal.title}</Badge>
                <Badge variant="accent">{personal.subtitle}</Badge>
              </div>

              <p className="text-balance text-lg leading-relaxed text-foreground/90">
                {personal.aboutDescription}
              </p>

              <div className="flex items-center gap-2 text-sm text-muted">
                <TbMapPin className="text-accent-blue-light" size={18} />
                Based in {personal.location} — working with clients worldwide
              </div>

              <div className="mt-2 flex items-start gap-4 rounded-2xl border border-accent-purple/20 bg-accent-purple/5 p-5">
                <TbTargetArrow className="mt-0.5 shrink-0 text-accent-purple-light" size={22} />
                <div>
                  <p className="text-sm font-semibold text-foreground">Current goal</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {personal.currentGoal}
                  </p>
                </div>
              </div>
            </GlassCard>
          </RevealOnScroll>

          <RevealOnScroll variants={scaleIn} delay={0.1} className="lg:col-span-2">
            <GlassCard className="flex h-full flex-col gap-6 p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue to-accent-purple text-white">
                  <TbSchool size={20} />
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground">Education</h3>
              </div>

              <div className="flex flex-col gap-6">
                {education.map((entry) => (
                  <div key={entry.id} className="flex flex-col gap-2">
                    <p className="text-sm font-semibold text-foreground">{entry.institution}</p>
                    <p className="text-sm font-medium text-accent-blue-light">{entry.degree}</p>
                    <p className="text-sm leading-relaxed text-muted">{entry.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-2 border-t border-border pt-5 text-xs text-muted-foreground">
                <TbSparkles size={14} />
                Continuously learning — currently focused on AI automation
              </div>
            </GlassCard>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
