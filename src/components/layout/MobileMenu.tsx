"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import { navItems, siteConfig } from "@/data/site";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export function MobileMenu({ isOpen, onClose, activeSection }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 lg:hidden"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={menuRef}
        className="fixed inset-y-0 right-0 w-full max-w-xs bg-surface border-l border-border p-6 shadow-2xl flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-border">
            <span className="font-mono text-xs text-accent uppercase tracking-wider">
              Navigation
            </span>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="size-9 inline-flex items-center justify-center rounded-lg border border-border text-muted hover:text-foreground hover:bg-surface-muted transition-colors cursor-pointer"
              >
                <X className="size-5" />
              </button>
            </div>
          </div>

          <nav className="mt-8 flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  href={`/#${item.id}`}
                  onClick={onClose}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? "bg-accent-soft text-accent font-semibold"
                      : "text-foreground hover:bg-surface-muted"
                  }`}
                  aria-current={isActive ? "true" : undefined}
                >
                  <span>{item.label}</span>
                  <ArrowRight className="size-4 opacity-50" />
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-border flex flex-col gap-3">
          <Button
            href="#projects"
            variant="primary"
            size="md"
            className="w-full"
            onClick={onClose}
          >
            View Projects
          </Button>
          <p className="text-center text-xs text-muted font-mono mt-2">
            {siteConfig.shortName} • {siteConfig.year}
          </p>
        </div>
      </div>
    </div>
  );
}
