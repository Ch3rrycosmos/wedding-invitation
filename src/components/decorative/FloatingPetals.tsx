"use client";

import { useMemo } from "react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

type Petal = {
  left: number;
  size: number;
  duration: number;
  delay: number;
  hue: "gold" | "burgundy" | "emerald";
};

function PetalShape({ hue }: { hue: Petal["hue"] }) {
  const fill =
    hue === "gold"
      ? "var(--color-champagne)"
      : hue === "burgundy"
        ? "var(--color-rose-gold)"
        : "var(--color-emerald-light)";
  return (
    <svg viewBox="0 0 20 20" width="100%" height="100%">
      <path
        d="M10 1 C 15 1, 19 6, 19 10 C 19 15, 14 19, 10 19 C 6 19, 1 15, 1 10 C 1 6, 5 1, 10 1 Z"
        fill={fill}
        opacity="0.75"
      />
    </svg>
  );
}

export function FloatingPetals({
  count = 18,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();

  const petals = useMemo<Petal[]>(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        left: (i * 137.5) % 100,
        size: 8 + ((i * 17) % 14),
        duration: 12 + ((i * 7) % 10),
        delay: (i * 1.3) % 12,
        hue: (["gold", "burgundy", "emerald"] as const)[i % 3],
      })),
    [count],
  );

  if (reducedMotion) return null;

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {petals.map((p, i) => (
        <span
          key={i}
          className="absolute top-0"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animation: `drift ${p.duration}s linear ${p.delay}s infinite`,
          }}
        >
          <PetalShape hue={p.hue} />
        </span>
      ))}
    </div>
  );
}
