"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GoldDivider } from "@/components/decorative/GoldDivider";
import { weddingConfig } from "@/lib/weddingConfig";

const spans = ["row-span-2", "row-span-2", "row-span-1", "row-span-2", "row-span-1", "row-span-1"];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const items = weddingConfig.gallery;

  return (
    <SectionWrapper id="gallery" tone="ivory">
      <div className="text-center">
        <ScrollReveal className="font-cinzel text-xs tracking-[0.4em] text-gold-deep">
          MOMENTS
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <h2 className="mt-3 font-playfair text-4xl text-emerald sm:text-5xl">
            Our Gallery
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <GoldDivider className="mt-6" />
        </ScrollReveal>
      </div>

      <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-5 sm:auto-rows-[220px] sm:grid-cols-2">
        {items.map((item, i) => (
          <ScrollReveal
            key={item.caption}
            delay={i * 0.08}
            className={`h-72 sm:h-auto ${spans[i % spans.length]}`}
          >
            <motion.button
              type="button"
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.02, rotate: i % 2 === 0 ? -1 : 1 }}
              transition={{ type: "spring", stiffness: 240, damping: 18 }}
              className="group relative h-full w-full overflow-hidden rounded-md border border-gold/30 shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
              aria-label={`View ${item.caption}`}
            >
              <Image
                src={item.image}
                alt={item.caption}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/0 to-black/0 p-4">
                <span className="translate-y-1 font-cormorant text-base tracking-wide text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.caption}
                </span>
              </div>
              <div className="absolute inset-3 rounded border border-white/25" />
            </motion.button>
          </ScrollReveal>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-md border border-gold/40 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={items[active].image}
                alt={items[active].caption}
                fill
                sizes="90vw"
                className="object-cover"
              />
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white/90 hover:text-white"
                aria-label="Close"
              >
                <X size={20} />
              </button>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-center">
                <span className="font-great-vibes text-2xl text-white">
                  {items[active].caption}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
