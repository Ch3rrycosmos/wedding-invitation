import type { ReactNode } from "react";
import { clsx } from "clsx";

type Tone = "ivory" | "cream" | "emerald" | "burgundy";

const toneClasses: Record<Tone, string> = {
  ivory: "bg-ivory text-ink",
  cream: "bg-cream text-ink",
  emerald: "bg-gradient-to-b from-emerald to-[#0a2a20] text-cream",
  burgundy: "bg-gradient-to-b from-burgundy to-[#3a0f1a] text-cream",
};

export function SectionWrapper({
  children,
  id,
  tone = "ivory",
  className = "",
}: {
  children: ReactNode;
  id?: string;
  tone?: Tone;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={clsx(
        "relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 md:py-32",
        toneClasses[tone],
        className,
      )}
    >
      <div className="paper-texture pointer-events-none absolute inset-0" />
      <div className="relative mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}
