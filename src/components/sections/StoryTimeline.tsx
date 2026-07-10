"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Heart } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GoldDivider } from "@/components/decorative/GoldDivider";
import { weddingConfig } from "@/lib/weddingConfig";

export function StoryTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const lineScale = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.5,
  });

  return (
    <SectionWrapper id="story" tone="ivory">
      <div className="text-center">
        <ScrollReveal className="font-cinzel text-xs tracking-[0.4em] text-gold-deep">
          OUR STORY
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <h2 className="mt-3 font-playfair text-4xl text-emerald sm:text-5xl">
            A Love That Grew
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <GoldDivider className="mt-6" />
        </ScrollReveal>
      </div>

      <div ref={containerRef} className="relative mt-20">
        <div className="absolute left-[18px] top-0 h-full w-px bg-ink/10 sm:left-1/2 sm:-translate-x-1/2" />
        <motion.div
          className="absolute left-[18px] top-0 w-px origin-top bg-gradient-to-b from-gold via-gold-light to-champagne sm:left-1/2 sm:-translate-x-1/2"
          style={{ scaleY: lineScale, height: "100%" }}
        />

        <div className="flex flex-col gap-16">
          {weddingConfig.story.map((milestone, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={milestone.year}
                className="relative flex items-start gap-6 sm:grid sm:grid-cols-2 sm:gap-12"
              >
                <div
                  className={
                    isEven
                      ? "pl-14 sm:order-1 sm:pl-0 sm:pr-12 sm:text-right"
                      : "pl-14 sm:order-2 sm:pl-12 sm:text-left"
                  }
                >
                  <ScrollReveal direction={isEven ? "right" : "left"} amount={0.4}>
                    <span className="font-cinzel text-sm tracking-[0.3em] text-gold-deep">
                      {milestone.year}
                    </span>
                    <h3 className="mt-2 font-playfair text-2xl text-emerald sm:text-3xl">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 font-cormorant text-lg leading-relaxed text-ink/75">
                      {milestone.description}
                    </p>
                  </ScrollReveal>
                </div>
                <div className={isEven ? "sm:order-2" : "sm:order-1"} />

                <motion.div
                  className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full border border-gold bg-ivory shadow-md sm:left-1/2 sm:-translate-x-1/2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  <Heart size={14} className="text-burgundy" fill="currentColor" />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
