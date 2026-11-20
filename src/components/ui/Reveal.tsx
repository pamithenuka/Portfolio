"use client";

import { ReactNode, useSyncExternalStore } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}

const emptySubscribe = () => () => {};

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.4,
  y = 15,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  // SSR fallback: render fully visible content so elements never start invisible
  // if client-side hydration or dev HMR is blocked or delayed.
  if (!isMounted || shouldReduceMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
