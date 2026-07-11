"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AmbientGlow } from "@/components/decorative/AmbientGlow";
import { FloatingPetals } from "@/components/decorative/FloatingPetals";
import { FloralCorner } from "@/components/decorative/FloralCorner";
import { WaxSeal } from "@/components/decorative/WaxSeal";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { weddingConfig } from "@/lib/weddingConfig";

type Phase = "closed" | "flap" | "rise" | "hold" | "zoom" | "entered";

const FLAP_MS = 700;
const RISE_MS = 1000;
const HOLD_MS = 600;
const ZOOM_MS = 900;

export function Envelope({
  onEntered,
  onOpen,
}: {
  onEntered: () => void;
  onOpen?: () => void;
}) {
  const [phase, setPhase] = useState<Phase>("closed");
  const reducedMotion = useReducedMotion();
  const timeouts = useRef<number[]>([]);
  // Ref so the effect below always calls the latest onEntered without
  // re-running on every render (avoids stale-closure + dep-array issues).
  const onEnteredRef = useRef(onEntered);
  onEnteredRef.current = onEntered;

  useEffect(() => {
    document.body.style.overflow = phase === "entered" ? "" : "hidden";
    // Call onEntered directly here instead of via AnimatePresence.onExitComplete,
    // which does not fire reliably on mobile WebKit and leaves the site hidden.
    if (phase === "entered") {
      onEnteredRef.current();
    }
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
    onOpen?.();
    if (reducedMotion) {
      setPhase("zoom");
      timeouts.current.push(window.setTimeout(() => setPhase("entered"), 500));
      return;
    }
    setPhase("flap");
    timeouts.current.push(
      window.setTimeout(() => setPhase("rise"), FLAP_MS),
      window.setTimeout(() => setPhase("hold"), FLAP_MS + RISE_MS),
      window.setTimeout(
        () => setPhase("zoom"),
        FLAP_MS + RISE_MS + HOLD_MS,
      ),
      window.setTimeout(
        () => setPhase("entered"),
        FLAP_MS + RISE_MS + HOLD_MS + ZOOM_MS,
      ),
    );
  }

  const isOpen = phase !== "closed" && phase !== "entered";
  const isRisen = phase === "rise" || phase === "hold" || phase === "zoom";

  // By the time phase reaches "entered" the overlay is already at opacity 0
  // (faded out during "zoom"), so removing it from the DOM is seamless.
  if (phase === "entered") return null;

  return (
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

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: phase === "closed" ? 1 : 0, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mb-8 text-center font-cormorant text-lg italic tracking-[0.2em] text-champagne/90 sm:text-xl"
            >
              {weddingConfig.invitationLine}
            </motion.p>

            {/* ===== ENVELOPE SCENE ===== */}
            <div className="relative w-full max-w-[380px]">
              <div
                className="relative mx-auto w-full overflow-visible"
                style={{ aspectRatio: "3 / 2" }}
              >
                {/* Layer 1 — Back panel (slides down) */}
                <motion.div
                  className="absolute inset-0 z-0 rounded-sm border border-gold/50 bg-gradient-to-b from-cream to-beige shadow-2xl"
                  initial={{ y: 0 }}
                  animate={isOpen ? { y: "150%" } : { y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.05,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                >
                  <div className="absolute inset-0 rounded-sm paper-texture" />
                </motion.div>

                {/* Layer 2 — Invitation card */}
                {/* Card is always at opacity:1. The envelope body
                    (z-20) physically covers it when closed. When the
                    envelope slides down, the card is naturally revealed
                    from behind — no opacity fade needed. */}
                <motion.div
                  className="absolute inset-0 z-10 flex items-center justify-center"
                  animate={
                    isRisen
                      ? { clipPath: "polygon(0% -50%, 100% -50%, 100% 150%, 0% 150%)" }
                      : { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }
                  }
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <motion.div
                    className="w-[86%] rounded-sm border border-gold/40 bg-ivory shadow-[0_10px_50px_rgba(0,0,0,0.45)]"
                    style={{ aspectRatio: "3 / 4" }}
                    initial={{ y: 40, scale: 0.94 }}
                    animate={
                      isRisen
                        ? { y: 0, scale: 1 }
                        : { y: 40, scale: 0.94 }
                    }
                    transition={{
                      duration: 1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
                      <span className="font-cinzel text-[10px] tracking-[0.35em] text-gold-deep">
                        {weddingConfig.cardLabel}
                      </span>
                      <span className="font-great-vibes text-3xl text-emerald sm:text-4xl">
                        {weddingConfig.groom} &amp; {weddingConfig.bride}
                      </span>
                      <span className="h-px w-10 bg-gold" />
                      <span className="font-cormorant text-xs tracking-[0.15em] text-ink/70">
                        {weddingConfig.weddingDateDisplay}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Layer 3 — Decorative bottom pocket strip */}
                <div
                  className="absolute bottom-0 left-0 right-0 z-5 bg-gradient-to-t from-champagne/60 to-transparent"
                  style={{
                    height: "20%",
                    clipPath: "polygon(0% 100%, 50% 40%, 100% 100%)",
                  }}
                />

                {/* Layer 4 — Envelope body (FULL rectangle, fully opaque) */}
                {/* Slides 150% to fully clear the card (card is 1.72x container height) */}
                <motion.div
                  className="absolute inset-0 z-20 rounded-sm border border-gold/50 bg-gradient-to-b from-beige to-champagne"
                  initial={{ y: 0 }}
                  animate={isOpen ? { y: "150%" } : { y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.05,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                >
                  <div className="absolute inset-0 rounded-sm paper-texture" />
                </motion.div>

                {/* Layer 5 — Flap */}
                <motion.div
                  className="absolute inset-x-0 top-0 z-30 h-1/2 origin-top"
                  style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                  initial={{ rotateX: 0 }}
                  animate={isOpen ? { rotateX: -180 } : { rotateX: 0 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                >
                  <div className="absolute inset-0 border border-gold/50 bg-gradient-to-b from-champagne to-beige">
                    <div className="absolute inset-0 paper-texture" />
                  </div>
                </motion.div>

                {/* Layer 6 — Wax seal */}
                <motion.div
                  className="absolute left-1/2 top-[46%] z-40 -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    opacity: phase === "closed" ? 1 : 0,
                    scale: phase === "closed" ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.35 }}
                >
                  <WaxSeal
                    initial={weddingConfig.coupleMonogram[0]}
                    size={64}
                  />
                </motion.div>
              </div>
            </div>

            {/* ===== TAP TO OPEN ===== */}
            <motion.button
              type="button"
              onClick={handleOpen}
              animate={{ opacity: phase === "closed" ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="relative z-50 mt-12 inline-flex cursor-pointer items-center gap-3 rounded-full border border-gold/60 px-8 py-3 font-cinzel text-xs tracking-[0.3em] text-champagne transition-colors hover:bg-gold/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold disabled:pointer-events-none"
              disabled={phase !== "closed"}
              aria-label="Tap to open the invitation"
            >
              <span className="animate-shimmer bg-gradient-to-r from-champagne via-gold-light to-champagne bg-[length:200%_auto] bg-clip-text text-transparent">
                {weddingConfig.tapToOpenText}
              </span>
            </motion.button>
          </div>
        </motion.div>
  );
}
