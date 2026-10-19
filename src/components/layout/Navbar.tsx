"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { navItems, siteConfig } from "@/data/site";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Scrollspy using IntersectionObserver
    const sectionElements = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by highest intersection ratio or viewport position
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "bg-surface/85 backdrop-blur-md border-b border-border shadow-xs py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container-page flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/#home"
            className="group flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-accent rounded-lg"
            aria-label={`${siteConfig.name} - Home`}
          >
            <span className="flex size-9 items-center justify-center rounded-xl bg-surface border border-border font-mono text-sm font-bold text-accent transition-transform group-hover:scale-105 shadow-xs">
              {siteConfig.initials}
            </span>
            <span className="hidden sm:inline-block font-semibold tracking-tight text-foreground text-sm group-hover:text-accent transition-colors">
              {siteConfig.shortName}
              <span className="font-normal text-muted ml-1">Kaluarachchi</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 bg-surface/60 border border-border/80 px-2.5 py-1.5 rounded-full backdrop-blur-md shadow-xs"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  href={`/#${item.id}`}
                  className={cn(
                    "px-3.5 py-1.5 text-xs font-medium rounded-full transition-all select-none relative",
                    isActive
                      ? "text-accent font-semibold bg-accent-soft"
                      : "text-muted hover:text-foreground hover:bg-surface-muted"
                  )}
                  aria-current={isActive ? "true" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />
            <Button href="#contact" variant="primary" size="sm">
              Contact Me
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              className="size-9 inline-flex items-center justify-center rounded-lg border border-border bg-surface text-foreground hover:bg-surface-muted transition-colors cursor-pointer"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
}
