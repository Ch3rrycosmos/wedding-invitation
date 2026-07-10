"use client";

import { motion } from "framer-motion";

export function WaxSeal({
  initial = "A",
  size = 88,
  className = "",
  delay = 0,
}: {
  initial?: string;
  size?: number;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`relative select-none ${className}`}
      style={{ width: size, height: size }}
      initial={{ opacity: 0, scale: 0.3, rotate: -25 }}
      whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "backOut" }}
    >
      <svg viewBox="0 0 100 100" width={size} height={size}>
        <defs>
          <radialGradient id="sealGrad" cx="35%" cy="30%" r="75%">
            <stop offset="0%" stopColor="var(--color-burgundy-light)" />
            <stop offset="60%" stopColor="var(--color-burgundy)" />
            <stop offset="100%" stopColor="#3a0f1a" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="46" fill="url(#sealGrad)" />
        <circle
          cx="50"
          cy="50"
          r="38"
          fill="none"
          stroke="var(--color-gold-light)"
          strokeWidth="0.75"
          opacity="0.7"
        />
        <text
          x="50"
          y="63"
          textAnchor="middle"
          fontFamily="var(--font-cinzel)"
          fontSize="34"
          fill="var(--color-gold-light)"
        >
          {initial}
        </text>
      </svg>
    </motion.div>
  );
}
