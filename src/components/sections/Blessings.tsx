"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GoldDivider } from "@/components/decorative/GoldDivider";
import { FloralCorner } from "@/components/decorative/FloralCorner";
import { FloatingPetals } from "@/components/decorative/FloatingPetals";
import { Monogram } from "@/components/decorative/Monogram";
import { weddingConfig } from "@/lib/weddingConfig";

export function Blessings() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rotateX = useTransform(scrollYProgress, [0.6, 1], [0, 6]);
  const scale = useTransform(scrollYProgress, [0.6, 1], [1, 0.97]);

  return (
    <SectionWrapper id="blessings" tone="emerald" className="min-h-[80vh]">
      <FloatingPetals count={12} className="opacity-60" />
      <FloralCorner
        corner="tl"
        color="var(--color-champagne)"
        className="absolute left-2 top-2 sm:left-8 sm:top-8"
      />
      <FloralCorner
        corner="tr"
        color="var(--color-champagne)"
        className="absolute right-2 top-2 sm:right-8 sm:top-8"
      />

      <motion.div
        ref={ref}
        style={{ rotateX, scale, transformPerspective: 1200 }}
        className="flex flex-col items-center gap-7 text-center"
      >
        <ScrollReveal>
          <Monogram
            text={weddingConfig.coupleMonogram}
            size={100}
            textColor="var(--color-champagne)"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <h2 className="font-playfair text-3xl text-cream sm:text-5xl">
            {weddingConfig.blessing.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <GoldDivider width={160} />
        </ScrollReveal>

        <ScrollReveal delay={0.4} className="max-w-xl font-cormorant text-xl leading-relaxed text-cream/85">
          {weddingConfig.blessing.message}
        </ScrollReveal>

        <ScrollReveal delay={0.55}>
          <p className="mt-4 font-great-vibes text-4xl text-champagne sm:text-5xl">
            {weddingConfig.blessing.signature}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.7} className="mt-6 font-cormorant text-sm tracking-[0.3em] text-cream/50">
          WITH LOVE, {weddingConfig.weddingDateDisplay.toUpperCase()}
        </ScrollReveal>
      </motion.div>

      <FloralCorner
        corner="bl"
        color="var(--color-champagne)"
        className="absolute bottom-2 left-2 sm:bottom-8 sm:left-8"
      />
      <FloralCorner
        corner="br"
        color="var(--color-champagne)"
        className="absolute bottom-2 right-2 sm:bottom-8 sm:right-8"
      />
    </SectionWrapper>
  );
}
