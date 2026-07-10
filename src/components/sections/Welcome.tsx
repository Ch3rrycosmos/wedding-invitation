"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GoldDivider } from "@/components/decorative/GoldDivider";
import { FloralCorner } from "@/components/decorative/FloralCorner";
import { weddingConfig } from "@/lib/weddingConfig";

export function Welcome() {
  return (
    <SectionWrapper id="welcome" tone="ivory" className="min-h-[70vh]">
      <FloralCorner corner="tl" className="absolute left-2 top-2 sm:left-8 sm:top-8" />
      <FloralCorner corner="tr" className="absolute right-2 top-2 sm:right-8 sm:top-8" />

      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <ScrollReveal direction="down" className="font-cinzel text-xs tracking-[0.4em] text-gold-deep">
          WITH JOYFUL HEARTS
        </ScrollReveal>

        <ScrollReveal delay={0.15} duration={1.1}>
          <p className="max-w-2xl font-great-vibes text-4xl leading-relaxed text-emerald sm:text-5xl">
            &ldquo;{weddingConfig.welcomeQuote}&rdquo;
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <GoldDivider width={180} />
        </ScrollReveal>

        <ScrollReveal delay={0.5} className="max-w-xl font-cormorant text-lg leading-relaxed text-ink/80 sm:text-xl">
          <p>
            Together with our families, we joyfully invite you to witness the
            beginning of our forever — an evening of love, laughter, and
            timeless celebration.
          </p>
        </ScrollReveal>
      </div>

      <FloralCorner corner="bl" className="absolute bottom-2 left-2 sm:bottom-8 sm:left-8" />
      <FloralCorner corner="br" className="absolute bottom-2 right-2 sm:bottom-8 sm:right-8" />
    </SectionWrapper>
  );
}
