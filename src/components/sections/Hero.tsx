"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbArrowRight, TbDownload, TbSparkles } from "react-icons/tb";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { personal } from "@/config/personal";
import { stats } from "@/config/stats";
import { defaultTransition, fadeInUp, staggerContainer } from "@/lib/motion";
import { buildWhatsAppLink } from "@/lib/utils";

const ORBIT_ICONS = [
  { Icon: SiReact, className: "left-[-14%] top-[12%]", color: "#61DAFB" },
  { Icon: SiNextdotjs, className: "right-[-10%] top-[6%]", color: "#ffffff" },
  { Icon: SiTypescript, className: "left-[-8%] bottom-[14%]", color: "#3178C6" },
  { Icon: SiTailwindcss, className: "right-[-14%] bottom-[8%]", color: "#38BDF8" },
];

function RotatingRole() {
  const [index, setIndex] = useState(0);
  const longestRole = personal.roles.reduce((a, b) => (b.length > a.length ? b : a), "");

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % personal.roles.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block h-[1.3em] overflow-hidden align-bottom">
      {/* In-flow, invisible spacer sized to the longest role so the absolutely
          positioned animated text below always has enough width to render without clipping. */}
      <span className="invisible whitespace-nowrap" aria-hidden>
        {longestRole}
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={personal.roles[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="gradient-text absolute inset-0 whitespace-nowrap"
        >
          {personal.roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  const whatsappHref = buildWhatsAppLink(
    personal.whatsappNumber,
    "Hi Amir, I found your portfolio and I'd like to talk about a project."
  );

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] scroll-mt-28 items-center overflow-hidden pt-32 pb-20"
    >
      <div className="pointer-events-none absolute inset-0 grid-fade-mask">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>
      <div className="pointer-events-none absolute left-1/2 top-[-10%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent-blue/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-10%] bottom-[-10%] h-[28rem] w-[28rem] rounded-full bg-accent-purple/20 blur-[120px]" />

      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-6"
        >
          {personal.availableForWork && (
            <motion.div
              variants={fadeInUp}
              transition={defaultTransition}
              className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-4 py-1.5 text-xs font-medium text-muted"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for new projects
            </motion.div>
          )}

          <motion.h1
            variants={fadeInUp}
            transition={defaultTransition}
            className="text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m {personal.name}
            <br />
            <RotatingRole />
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            transition={defaultTransition}
            className="max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg"
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            transition={defaultTransition}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <Button href="#contact" size="lg" icon={<TbArrowRight />} iconPosition="right">
              Hire Me
            </Button>
            <Button href="#projects" variant="secondary" size="lg">
              View Projects
            </Button>
            <Button
              href={personal.resumeUrl}
              variant="outline"
              size="lg"
              icon={<TbDownload />}
            >
              Download CV
            </Button>
            <Button
              href={whatsappHref}
              external
              variant="ghost"
              size="lg"
              icon={<FaWhatsapp className="text-[#25D366]" />}
            >
              WhatsApp
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            transition={defaultTransition}
            className="grid w-full grid-cols-2 gap-4 pt-8 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col gap-1">
                <span className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                  {stat.value}
                  {stat.suffix}
                </span>
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative mx-auto flex h-[22rem] w-[22rem] items-center justify-center sm:h-[26rem] sm:w-[26rem]"
        >
          <div className="absolute inset-6 animate-blob rounded-full bg-gradient-to-br from-accent-blue/30 to-accent-purple/30 blur-2xl" />

          <div className="glass-panel glow-shadow relative flex h-[17rem] w-[17rem] items-center justify-center rounded-[2.5rem] sm:h-[20rem] sm:w-[20rem]">
            <div className="flex h-full w-full items-center justify-center rounded-[2.5rem] bg-gradient-to-br from-accent-blue/15 via-transparent to-accent-purple/15">
              <span className="font-display text-7xl font-bold tracking-tight text-foreground/90 sm:text-8xl">
                {personal.initials}
              </span>
            </div>

            <motion.span
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="glass-panel absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-foreground shadow-lg"
            >
              <TbSparkles className="text-accent-purple-light" />
              AI-Assisted Development
            </motion.span>
          </div>

          {ORBIT_ICONS.map(({ Icon, className, color }, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
              className={`glass-panel absolute flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg ${className}`}
            >
              <Icon size={26} color={color} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
