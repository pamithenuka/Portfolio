"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

interface TypewriterTextProps {
  /** The text string to type out */
  text: string;
  /** Milliseconds per character when typing (default: 110ms) */
  typingSpeed?: number;
  /** Milliseconds per character when backspacing (default: 55ms) */
  deletingSpeed?: number;
  /** Milliseconds to pause when the full word is typed (default: 3500ms) */
  pauseDuration?: number;
  /** Additional classes applied to the text span */
  className?: string;
  /** Additional classes applied to the blinking cursor */
  cursorClassName?: string;
}

const emptySubscribe = () => () => {};

export function TypewriterText({
  text,
  typingSpeed = 110,
  deletingSpeed = 55,
  pauseDuration = 3500,
  className = "",
  cursorClassName = "",
}: TypewriterTextProps) {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isMounted) return;

    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedText === text) {
      // Completed typing: hold for pauseDuration before deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && displayedText === "") {
      // Completed deleting: short pause before retyping
      timer = setTimeout(() => {
        setIsDeleting(false);
      }, 500);
    } else {
      // Step-by-step typing or deleting
      const currentSpeed = isDeleting ? deletingSpeed : typingSpeed;
      timer = setTimeout(() => {
        setDisplayedText((prev) => {
          if (isDeleting) {
            return text.slice(0, prev.length - 1);
          } else {
            return text.slice(0, prev.length + 1);
          }
        });
      }, currentSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, isMounted, text, typingSpeed, deletingSpeed, pauseDuration]);

  // SSR fallback: render the full text so crawlers and non-JS clients see the complete name
  if (!isMounted) {
    return (
      <span className="inline-block">
        <span className={className}>{text}</span>
        <span
          aria-hidden="true"
          className={`inline-block font-mono font-normal ml-0.5 animate-pulse select-none text-accent ${cursorClassName}`}
          style={{ color: "var(--accent)" }}
        >
          |
        </span>
      </span>
    );
  }

  return (
    <span className="inline-block">
      {/* Zero-width space ensures line height stays stable when text is empty */}
      <span className={className}>{displayedText || "\u200B"}</span>
      <span
        aria-hidden="true"
        className={`inline-block font-mono font-normal ml-0.5 animate-pulse select-none text-accent ${cursorClassName}`}
        style={{ color: "var(--accent)" }}
      >
        |
      </span>
    </span>
  );
}
