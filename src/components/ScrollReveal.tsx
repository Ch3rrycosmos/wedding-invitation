"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 48 },
  down: { y: -48 },
  left: { x: 48 },
  right: { x: -48 },
  none: {},
};

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.9,
  className = "",
  once = true,
  amount = 0.3,
  as = "div",
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
  as?: "div" | "span" | "li";
}) {
  const variants: Variants = {
    hidden: { opacity: 0, ...offsets[direction] },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}

export function LetterReveal({
  text,
  className = "",
  delay = 0,
  stagger = 0.045,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const letters = Array.from(text);

  return (
    <motion.span
      className={`inline-block ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      aria-label={text}
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: 24, rotateZ: 4 },
            visible: {
              opacity: 1,
              y: 0,
              rotateZ: 0,
              transition: {
                duration: 0.6,
                delay: delay + i * stagger,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          aria-hidden="true"
        >
          {letter === " " ? " " : letter}
        </motion.span>
      ))}
    </motion.span>
  );
}
