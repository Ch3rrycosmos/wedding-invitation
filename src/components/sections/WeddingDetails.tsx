"use client";

import { Calendar, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GoldDivider } from "@/components/decorative/GoldDivider";
import { weddingConfig } from "@/lib/weddingConfig";

function DetailCard({
  icon,
  title,
  lines,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
  delay: number;
}) {
  return (
    <ScrollReveal delay={delay} className="h-full">
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="flex h-full flex-col items-center gap-3 rounded-lg border border-gold/30 bg-ivory/80 px-4 py-8 text-center shadow-[0_8px_30px_rgba(14,61,47,0.08)] backdrop-blur-sm sm:px-6 sm:py-10"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 text-gold">
          {icon}
        </div>
        <h3 className="font-cinzel text-sm tracking-[0.25em] text-emerald">
          {title}
        </h3>
        <div className="mt-1 flex flex-col gap-1 font-cormorant text-base text-ink/75 sm:text-lg">
          {lines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

export function WeddingDetails() {
  return (
    <SectionWrapper id="details" tone="cream">
      <div className="text-center">
        <ScrollReveal className="font-cinzel text-xs tracking-[0.4em] text-gold-deep">
          {weddingConfig.detailsSectionLabel}
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <h2 className="mt-3 font-playfair text-4xl text-emerald sm:text-5xl">
            {weddingConfig.detailsSectionTitle}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <GoldDivider className="mt-6" />
        </ScrollReveal>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <DetailCard
          icon={<Calendar size={20} />}
          title={weddingConfig.detailsDateLabel}
          lines={[weddingConfig.weddingDateDisplay, weddingConfig.weddingDayDisplay]}
          delay={0}
        />
        <DetailCard
          icon={<Clock size={20} />}
          title={weddingConfig.eventLabel}
          lines={[weddingConfig.weddingTimeDisplay]}
          delay={0.1}
        />
        <DetailCard
          icon={<MapPin size={20} />}
          title={weddingConfig.detailsVenueLabel}
          lines={[weddingConfig.venue.name, weddingConfig.venue.address]}
          delay={0.2}
        />
      </div>
    </SectionWrapper>
  );
}
