"use client";

import { Navigation } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GoldDivider } from "@/components/decorative/GoldDivider";
import { weddingConfig } from "@/lib/weddingConfig";

export function Venue() {
  return (
    <SectionWrapper id="venue" tone="cream">
      <div className="text-center">
        <ScrollReveal className="font-cinzel text-xs tracking-[0.4em] text-gold-deep">
          FIND US
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <h2 className="mt-3 font-playfair text-4xl text-emerald sm:text-5xl">
            The Venue
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <GoldDivider className="mt-6" />
        </ScrollReveal>
      </div>

      <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <ScrollReveal direction="right">
          <div className="overflow-hidden rounded-lg border border-gold/30 shadow-xl">
            <iframe
              title="Venue location map"
              src={weddingConfig.venue.mapsEmbedSrc}
              width="100%"
              height="360"
              loading="lazy"
              style={{ border: 0, filter: "sepia(15%) saturate(85%)" }}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left" className="flex flex-col items-start gap-5 text-left">
          <h3 className="font-playfair text-2xl text-emerald sm:text-3xl">
            {weddingConfig.venue.name}
          </h3>
          <p className="font-cormorant text-lg leading-relaxed text-ink/75">
            {weddingConfig.venue.address}
          </p>
          <p className="font-cormorant text-lg leading-relaxed text-ink/75">
            Set among manicured emerald gardens and candlelit pathways, our
            venue offers an intimate, elegant backdrop for celebrating the
            beginning of our forever.
          </p>
          <a
            href={weddingConfig.venue.mapsDirectionsUrl}
            target="_blank"
            rel="noreferrer"
            className="group mt-2 inline-flex items-center gap-2 rounded-full border border-gold bg-emerald px-6 py-3 font-cinzel text-xs tracking-[0.25em] text-cream transition-transform hover:scale-105"
          >
            <Navigation size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            GET DIRECTIONS
          </a>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
