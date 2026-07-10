"use client";

import { motion } from "framer-motion";

export function GoldDivider({
  className = "",
  width = 220,
}: {
  className?: string;
  width?: number;
}) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <motion.span
        className="h-px bg-gradient-to-r from-transparent to-gold"
        style={{ width: width / 2 }}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <rect
          x="1"
          y="1"
          width="12"
          height="12"
          transform="rotate(45 7 7)"
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="1"
        />
      </motion.svg>
      <motion.span
        className="h-px bg-gradient-to-l from-transparent to-gold"
        style={{ width: width / 2 }}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
