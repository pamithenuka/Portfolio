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
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Mouse coordinate motion values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for the trailing ring
  const ringX = useSpring(mouseX, { damping: 28, stiffness: 280, mass: 0.5 });
  const ringY = useSpring(mouseY, { damping: 28, stiffness: 280, mass: 0.5 });

  // Slower, softer spring physics for the ambient spotlight
  const glowX = useSpring(mouseX, { damping: 45, stiffness: 140, mass: 1 });
  const glowY = useSpring(mouseY, { damping: 45, stiffness: 140, mass: 1 });

  useEffect(() => {
    if (!hasFinePointer) return;

    const handlePointerMove = (e: PointerEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    const handlePointerDown = () => setIsClicking(true);
    const handlePointerUp = () => setIsClicking(false);

    const handlePointerLeave = () => setIsVisible(false);
    const handlePointerEnter = () => setIsVisible(true);

    // Detect when hovering interactive elements
    const handlePointerOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, label, [data-interactive="true"]'
      );
      setIsHovering(Boolean(interactive));
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    document.addEventListener("pointerleave", handlePointerLeave);
    document.addEventListener("pointerenter", handlePointerEnter);
    document.addEventListener("mouseover", handlePointerOver, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      document.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("pointerenter", handlePointerEnter);
      document.removeEventListener("mouseover", handlePointerOver);
    };
  }, [hasFinePointer, mouseX, mouseY]);

  // Don't render on touch screens, reduced-motion preferences, or during SSR
  if (!hasFinePointer || shouldReduceMotion) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* 1. Ambient Cursor Spotlight (Soft luminous radial glow in background) */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed top-0 left-0 -z-10 size-[520px] rounded-full blur-2xl pointer-events-none transition-transform duration-200"
      >
        <div
          className="size-full rounded-full opacity-60 dark:opacity-40"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--accent) 14%, transparent) 0%, color-mix(in srgb, var(--accent-2) 6%, transparent) 40%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* 2. Sleek Trailing Interactive Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.75 : isHovering ? 1.6 : 1,
          opacity: isVisible ? (isHovering ? 0.9 : 0.6) : 0,
        }}
        transition={{
          scale: { type: "spring", stiffness: 400, damping: 25 },
          opacity: { duration: 0.15 },
        }}
        className="fixed top-0 left-0 pointer-events-none rounded-full flex items-center justify-center size-8 border border-accent/40 bg-accent/5 backdrop-blur-[1px] shadow-[0_0_12px_rgba(94,234,212,0.15)] dark:shadow-[0_0_15px_rgba(94,234,212,0.25)]"
      >
        {/* Center dot that contracts when hovering interactive targets */}
        <motion.div
          animate={{
            scale: isHovering ? 0 : 1,
            opacity: isHovering ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
          className="size-1.5 rounded-full bg-accent"
        />
      </motion.div>
    </div>
  );
}
