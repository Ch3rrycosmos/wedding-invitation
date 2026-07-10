"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GoldDivider } from "@/components/decorative/GoldDivider";
import { weddingConfig } from "@/lib/weddingConfig";

function getTimeLeft() {
  const target = new Date(weddingConfig.weddingDateISO).getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative flex h-20 w-20 items-center justify-center rounded-md border border-gold/40 bg-white/5 sm:h-24 sm:w-24">
        <motion.span
          key={value}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="font-cinzel text-3xl text-champagne sm:text-4xl"
        >
          {String(value).padStart(2, "0")}
        </motion.span>
      </div>
      <span className="font-cormorant text-xs tracking-[0.3em] text-cream/70">
        {label.toUpperCase()}
      </span>
    </div>
  );
}

export function Countdown() {
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    const update = () => setTime(getTimeLeft());
    const kickoff = setTimeout(update, 0);
    const interval = setInterval(update, 1000);
    return () => {
      clearTimeout(kickoff);
      clearInterval(interval);
    };
  }, []);

  return (
    <SectionWrapper id="countdown" tone="emerald">
      <div className="text-center">
        <ScrollReveal className="font-cinzel text-xs tracking-[0.4em] text-champagne">
          {weddingConfig.countdownSectionLabel}
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <h2 className="mt-3 font-playfair text-4xl text-cream sm:text-5xl">
            {weddingConfig.countdownSectionTitle}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <GoldDivider className="mt-6" />
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.4} className="mt-14 flex justify-center gap-4 sm:gap-8">
        <Unit value={time?.days ?? 0} label={weddingConfig.countdownLabelDays} />
        <Unit value={time?.hours ?? 0} label={weddingConfig.countdownLabelHours} />
        <Unit value={time?.minutes ?? 0} label={weddingConfig.countdownLabelMinutes} />
        <Unit value={time?.seconds ?? 0} label={weddingConfig.countdownLabelSeconds} />
      </ScrollReveal>
    </SectionWrapper>
  );
}
