import { FaWhatsapp } from "react-icons/fa6";
import { TbArrowRight, TbMail } from "react-icons/tb";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { personal } from "@/config/personal";
import { scaleIn } from "@/lib/motion";
import { buildMailtoLink, buildWhatsAppLink } from "@/lib/utils";

export function CTASection() {
  const whatsappHref = buildWhatsAppLink(
    personal.whatsappNumber,
    "Hi Amir, I found your portfolio and I'd like to talk about a project."
  );

  return (
    <section className="relative py-24 sm:py-28">
      <Container>
        <RevealOnScroll variants={scaleIn}>
          <div className="relative overflow-hidden rounded-[2rem] border border-border-strong bg-gradient-to-br from-accent-blue/15 via-background-elevated to-accent-purple/15 px-6 py-16 text-center sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-purple/30 blur-[100px]" />

            <h2 className="relative text-balance font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Amazing Together</span>
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg">
              Have a project in mind? Let&apos;s turn it into a fast, polished, production-ready
              product.
            </p>

            <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button href="#contact" size="lg" icon={<TbArrowRight />} iconPosition="right">
                Hire Me
              </Button>
              <Button
                href={whatsappHref}
                external
                variant="secondary"
                size="lg"
                icon={<FaWhatsapp className="text-[#25D366]" />}
              >
                Chat on WhatsApp
              </Button>
              <Button
                href={buildMailtoLink(personal.email, "Project inquiry")}
                variant="outline"
                size="lg"
                icon={<TbMail />}
              >
                Email Me
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
