"use client";

import { motion } from "framer-motion";

export function Monogram({
  text,
  size = 120,
  className = "",
  textColor = "var(--color-emerald)",
}: {
  text: string;
  size?: number;
  className?: string;
  textColor?: string;
}) {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <circle
        cx="100"
        cy="100"
        r="92"
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="1"
      />
      <circle
        cx="100"
        cy="100"
        r="80"
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="0.6"
        opacity="0.6"
      />
      {/* laurel left */}
      <g stroke="var(--color-gold)" strokeWidth="1" fill="none">
        <path d="M40 130 C 20 115, 18 85, 34 62" strokeLinecap="round" />
        <path d="M32 70 C 26 72, 22 68, 22 62" strokeLinecap="round" />
        <path d="M28 84 C 22 85, 18 81, 18 75" strokeLinecap="round" />
        <path d="M28 99 C 22 100, 18 96, 18 90" strokeLinecap="round" />
        <path d="M32 114 C 26 116, 22 112, 22 106" strokeLinecap="round" />
        <path d="M38 126 C 32 129, 27 126, 26 120" strokeLinecap="round" />
      </g>
      {/* laurel right */}
      <g stroke="var(--color-gold)" strokeWidth="1" fill="none">
        <path d="M160 130 C 180 115, 182 85, 166 62" strokeLinecap="round" />
        <path d="M168 70 C 174 72, 178 68, 178 62" strokeLinecap="round" />
        <path d="M172 84 C 178 85, 182 81, 182 75" strokeLinecap="round" />
        <path d="M172 99 C 178 100, 182 96, 182 90" strokeLinecap="round" />
        <path d="M168 114 C 174 116, 178 112, 178 106" strokeLinecap="round" />
        <path d="M162 126 C 168 129, 173 126, 174 120" strokeLinecap="round" />
      </g>
      <text
        x="100"
        y="112"
        textAnchor="middle"
        fontFamily="var(--font-cinzel)"
        fontSize="42"
        letterSpacing="2"
        fill={textColor}
      >
        {text}
      </text>
    </motion.svg>
  );
}
