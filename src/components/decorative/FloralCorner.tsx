"use client";

import { motion } from "framer-motion";

type Corner = "tl" | "tr" | "bl" | "br";

const rotations: Record<Corner, string> = {
  tl: "rotate-0",
  tr: "rotate-90 scale-x-[-1]",
  bl: "rotate-0 scale-y-[-1]",
  br: "rotate-180",
};

export function FloralCorner({
  corner = "tl",
  className = "",
  color = "var(--color-gold)",
  size = 96,
  delay = 0,
}: {
  corner?: Corner;
  className?: string;
  color?: string;
  size?: number;
  delay?: number;
}) {
  return (
    <motion.svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      fill="none"
      className={`${rotations[corner]} ${className}`}
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <path
        d="M4 4 C 4 40, 4 70, 4 116"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M4 4 C 40 4, 70 4, 116 4"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M4 4 C 26 6, 44 24, 46 46"
        stroke={color}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M4 4 C 6 26, 24 44, 46 46"
        stroke={color}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <circle cx="46" cy="46" r="4.5" stroke={color} strokeWidth="1" />
      <circle cx="46" cy="46" r="1.4" fill={color} />
      <path
        d="M18 10 C 24 14, 26 20, 22 26 C 16 22, 14 16, 18 10 Z"
        stroke={color}
        strokeWidth="0.9"
      />
      <path
        d="M10 18 C 14 24, 20 26, 26 22 C 22 16, 16 14, 10 18 Z"
        stroke={color}
        strokeWidth="0.9"
      />
      <path
        d="M30 30 C 34 34, 36 40, 32 44"
        stroke={color}
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <circle cx="32" cy="18" r="2.2" stroke={color} strokeWidth="0.8" />
      <circle cx="18" cy="32" r="2.2" stroke={color} strokeWidth="0.8" />
    </motion.svg>
  );
}
