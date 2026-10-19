"use client";

import { ReactNode } from "react";
import { LazyMotion, domAnimation, m, MotionConfig, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.5,
  y = 20
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        <m.div
          initial={{ opacity: 0, y }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
          className={cn(className)}
        >
          {children}
        </m.div>
      </MotionConfig>
    </LazyMotion>
  );
}
