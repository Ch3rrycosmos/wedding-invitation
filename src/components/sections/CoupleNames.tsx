"use client";

import { SectionWrapper } from "@/components/SectionWrapper";
import { ScrollReveal, LetterReveal } from "@/components/ScrollReveal";
import { GoldDivider } from "@/components/decorative/GoldDivider";
import { Monogram } from "@/components/decorative/Monogram";
import { weddingConfig } from "@/lib/weddingConfig";

export function CoupleNames() {
  return (
    <SectionWrapper id="couple" tone="cream" className="min-h-[80vh]">
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <ScrollReveal>
          <Monogram text={weddingConfig.coupleMonogram} size={96} />
        </ScrollReveal>

        <div className="flex flex-col items-center gap-2">
          <h1 className="font-playfair text-4xl font-semibold tracking-wide text-emerald sm:text-6xl md:text-7xl lg:text-8xl">
            <LetterReveal text={weddingConfig.bride} />
          </h1>
          <ScrollReveal delay={0.5}>
            <span className="font-great-vibes text-3xl text-gold sm:text-4xl md:text-5xl">&amp;</span>
          </ScrollReveal>
          <h1 className="font-playfair text-4xl font-semibold tracking-wide text-emerald sm:text-6xl md:text-7xl lg:text-8xl">
            <LetterReveal text={weddingConfig.groom} delay={0.7} />
          </h1>
        </div>

        <ScrollReveal delay={1.3}>
          <GoldDivider />
        </ScrollReveal>

        <ScrollReveal delay={1.45} className="font-cormorant text-xl tracking-[0.15em] text-ink/70 sm:text-2xl">
          {weddingConfig.weddingDayDisplay}, {weddingConfig.weddingDateDisplay}
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
