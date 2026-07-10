"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AmbientGlow } from "@/components/decorative/AmbientGlow";
import { FloatingPetals } from "@/components/decorative/FloatingPetals";
import { FloralCorner } from "@/components/decorative/FloralCorner";
import { WaxSeal } from "@/components/decorative/WaxSeal";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { weddingConfig } from "@/lib/weddingConfig";

type Phase = "closed" | "flap" | "card" | "zoom" | "entered";

// Phase timings are driven by fixed timers (not animation-completion events),
// since chaining state off onAnimationComplete across 3D-transformed elements
// is unreliable on some mobile WebKit builds and can leave the envelope stuck.
const FLAP_MS = 1000;
const CARD_MS = 1100 + 550;
const ZOOM_MS = 900;

export function Envelope({ onEntered }: { onEntered: () => void }) {
  const [phase, setPhase] = useState<Phase>("closed");
  const reducedMotion = useReducedMotion();
  const timeouts = useRef<number[]>([]);

  useEffect(() => {
    document.body.style.overflow = phase === "entered" ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  useEffect(() => {
    const pending = timeouts.current;
    return () => {
      pending.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  function handleOpen() {
    if (phase !== "closed") return;
    if (reducedMotion) {
      setPhase("zoom");
      timeouts.current.push(window.setTimeout(() => setPhase("entered"), 500));
      return;
    }
    setPhase("flap");
    timeouts.current.push(
      window.setTimeout(() => setPhase("card"), FLAP_MS),
      window.setTimeout(() => setPhase("zoom"), FLAP_MS + CARD_MS),
      window.setTimeout(() => setPhase("entered"), FLAP_MS + CARD_MS + ZOOM_MS),
    );
  }

  return (
    <AnimatePresence
      onExitComplete={() => {
        onEntered();
      }}
    >
      {phase !== "entered" && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#0e3d2f] via-[#123f30] to-[#0a2a20]"
          initial={{ opacity: 1 }}
          animate={
            phase === "zoom"
              ? { opacity: 0, scale: 1.5 }
              : { opacity: 1, scale: 1 }
          }
          transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
        >
          <AmbientGlow />
          <FloatingPetals count={16} />

          <div className="relative flex w-full max-w-[560px] flex-col items-center px-6">
            <FloralCorner
              corner="tl"
              className="absolute -left-2 -top-6 text-champagne sm:-left-6"
              color="var(--color-champagne)"
              size={64}
            />
            <FloralCorner
              corner="tr"
              className="absolute -right-2 -top-6 text-champagne sm:-right-6"
              color="var(--color-champagne)"
              size={64}
            />

            <motion.p
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: phase === "closed" ? 1 : 0, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mb-8 text-center font-cormorant text-lg italic tracking-[0.2em] text-champagne/90 sm:text-xl"
            >
              {weddingConfig.invitationLine}
            </motion.p>

            {/* Envelope scene */}
            <div
              className="relative w-full max-w-[380px]"
              style={{ perspective: 1600 }}
            >
              <div className="relative aspect-[3/2] w-full">
                {/* card sliding out */}
                <motion.div
                  className="absolute left-1/2 top-1/2 z-40 w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-sm border border-gold/40 bg-ivory shadow-[0_10px_50px_rgba(0,0,0,0.45)]"
                  style={{ aspectRatio: "3 / 4" }}
                  initial={{ y: 20, opacity: 0, scale: 0.92 }}
                  animate={
                    phase === "card" || phase === "zoom"
                      ? { y: "-38%", opacity: 1, scale: 1.05 }
                      : phase === "flap"
                        ? { y: 20, opacity: 1, scale: 0.92 }
                        : { y: 20, opacity: 0, scale: 0.92 }
                  }
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
                    <span className="font-cinzel text-[10px] tracking-[0.35em] text-gold-deep">
                      INVITATION
                    </span>
                    <span className="font-great-vibes text-3xl text-emerald sm:text-4xl">
                      {weddingConfig.bride} &amp; {weddingConfig.groom}
                    </span>
                    <span className="h-px w-10 bg-gold" />
                    <span className="font-cormorant text-xs tracking-[0.15em] text-ink/70">
                      {weddingConfig.weddingDateDisplay}
                    </span>
                  </div>
                </motion.div>

                {/* envelope back panel */}
                <div className="absolute inset-0 rounded-sm border border-gold/50 bg-gradient-to-b from-cream to-beige shadow-2xl">
                  <div className="absolute inset-0 paper-texture rounded-sm" />
                </div>

                {/* envelope front pocket (bottom triangle) */}
                <div
                  className="absolute inset-0 z-20 rounded-sm border border-gold/50 bg-gradient-to-b from-beige to-champagne/70"
                  style={{
                    clipPath:
                      "polygon(0% 100%, 50% 40%, 100% 100%, 100% 100%, 0% 100%)",
                  }}
                />

                {/* flap */}
                <motion.div
                  className="absolute inset-x-0 top-0 z-30 h-1/2 origin-top border border-gold/50 bg-gradient-to-b from-champagne to-beige"
                  style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                  initial={{ rotateX: 0 }}
                  animate={{
                    rotateX:
                      phase === "flap" ||
                      phase === "card" ||
                      phase === "zoom"
                        ? -178
                        : 0,
                  }}
                  transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
                >
                  <div className="absolute inset-0 paper-texture" />
                </motion.div>

                {/* wax seal on flap seam */}
                <motion.div
                  className="absolute left-1/2 top-[46%] z-40 -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    opacity: phase === "closed" ? 1 : 0,
                    scale: phase === "closed" ? 1 : 0.6,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <WaxSeal initial={weddingConfig.coupleMonogram[0]} size={64} />
                </motion.div>
              </div>
            </div>

            <motion.button
              type="button"
              onClick={handleOpen}
              animate={{ opacity: phase === "closed" ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="group relative mt-12 inline-flex items-center gap-3 rounded-full border border-gold/60 px-8 py-3 font-cinzel text-xs tracking-[0.3em] text-champagne transition-colors hover:bg-gold/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold disabled:pointer-events-none"
              disabled={phase !== "closed"}
              aria-label="Tap to open the invitation"
            >
              <span className="animate-shimmer bg-gradient-to-r from-champagne via-gold-light to-champagne bg-[length:200%_auto] bg-clip-text text-transparent">
                TAP TO OPEN
              </span>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
