"use client";

import { motion } from "framer-motion";
import { TbQuote, TbStarFilled } from "react-icons/tb";

import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/config/testimonials";
import { defaultTransition, fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

function initialsOf(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative scroll-mt-28 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients say about working with me"
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={fadeInUp} transition={defaultTransition}>
              <GlassCard className="flex h-full flex-col gap-5 p-7">
                <TbQuote className="text-accent-purple-light/60" size={28} />

                <p className="flex-1 text-sm leading-relaxed text-foreground/90">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center gap-1 text-accent-blue-light">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <TbStarFilled key={i} size={14} />
                  ))}
                </div>

                <div className="flex items-center gap-3 border-t border-border pt-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue to-accent-purple text-xs font-semibold text-white">
                    {initialsOf(testimonial.name)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
