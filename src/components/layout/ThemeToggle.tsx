"use client";

import { useEffect, useLayoutEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { COLOR_SCHEME_STORAGE_KEY, COLOR_SCHEME_SYSTEM as SYSTEM_VALUE } from "@/lib/theme";

function getMeta(): HTMLMetaElement | null {
  return document.querySelector('meta[name="color-scheme"]');
}

function readStored(): "light" | "dark" | null {
  try {
    const value = localStorage.getItem(COLOR_SCHEME_STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

function applyScheme(value: "light" | "dark" | null) {
  const meta = getMeta();
  if (meta) meta.content = value ?? SYSTEM_VALUE;
}

/**
 * Two-state theme toggle (system ↔ opposite of system).
 * The icon/label shown is decided purely in CSS from the rendered scheme, so
 * it stays correct when the OS preference changes and needs no React state.
 */
export function ThemeToggle({ className }: { className?: string }) {
  // React can reset <head> attributes on the dev Strict Mode remount; re-apply.
  useLayoutEffect(() => {
    applyScheme(readStored());
  }, []);

  // Keep multiple tabs in sync.
  useEffect(() => {
    function onStorage(event: StorageEvent) {
      if (event.key === COLOR_SCHEME_STORAGE_KEY) applyScheme(readStored());
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  function toggle() {
    const systemIsDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const stored = readStored();
    const renderedIsDark = stored ? stored === "dark" : systemIsDark;
    const target = renderedIsDark ? "light" : "dark";
    const targetMatchesSystem = (target === "dark") === systemIsDark;

    try {
      if (targetMatchesSystem) localStorage.removeItem(COLOR_SCHEME_STORAGE_KEY);
      else localStorage.setItem(COLOR_SCHEME_STORAGE_KEY, target);
    } catch {
      // Storage unavailable: still apply the theme for this page view.
    }
    applyScheme(targetMatchesSystem ? null : target);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors hover:border-border-strong hover:text-foreground",
        className,
      )}
    >
      <span className="contents dark:hidden">
        <Moon aria-hidden="true" className="size-[18px]" />
        <span className="sr-only">Switch to dark theme</span>
      </span>
      <span className="hidden dark:contents">
        <Sun aria-hidden="true" className="size-[18px]" />
        <span className="sr-only">Switch to light theme</span>
      </span>
    </button>
  );
}
