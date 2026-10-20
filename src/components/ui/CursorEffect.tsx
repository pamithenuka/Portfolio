"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

function subscribePointerFine(callback: () => void) {
  const mql = window.matchMedia("(pointer: fine)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getPointerFineSnapshot() {
  return window.matchMedia("(pointer: fine)").matches;
}

function getServerPointerSnapshot() {
  return false;
}

export function CursorEffect() {
  const shouldReduceMotion = useReducedMotion();
  const hasFinePointer = useSyncExternalStore(
    subscribePointerFine,
    getPointerFineSnapshot,
    getServerPointerSnapshot
  );

  const [isVisible, setIsVisible] = useState(false);

  // Mouse coordinate motion values
  const mouseX = useMotionValue(-600);
  const mouseY = useMotionValue(-600);

  // Smooth, fluid spring physics for the background blurred spotlight
  const glowX = useSpring(mouseX, { damping: 32, stiffness: 220, mass: 0.6 });
  const glowY = useSpring(mouseY, { damping: 32, stiffness: 220, mass: 0.6 });

  useEffect(() => {
    if (!hasFinePointer) return;

    const handlePointerMove = (e: PointerEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    const handlePointerLeave = () => setIsVisible(false);
    const handlePointerEnter = () => setIsVisible(true);

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerleave", handlePointerLeave);
    document.addEventListener("pointerenter", handlePointerEnter);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("pointerenter", handlePointerEnter);
    };
  }, [hasFinePointer, mouseX, mouseY]);

  // Don't render on touch screens, reduced-motion preferences, or during SSR
  if (!hasFinePointer || shouldReduceMotion) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-0 overflow-hidden transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Blurred background cursor glow (strictly behind all text, buttons, and images) */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed top-0 left-0 size-[320px] sm:size-[380px] rounded-full blur-[60px] sm:blur-[75px] pointer-events-none"
      >
        <div
          className="size-full rounded-full opacity-85 dark:opacity-75"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--accent) 38%, transparent) 0%, color-mix(in srgb, var(--accent-2) 20%, transparent) 45%, transparent 72%)",
          }}
        />
      </motion.div>
    </div>
  );
}
