import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { siteConfig } from "@/data/site";

// Temporary foundation page — replaced by the real sections in Phase 3.
export default function Home() {
  return (
    <main id="main-content" className="relative flex flex-1 items-center">
      <div aria-hidden="true" className="bg-dot-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="container-page relative py-24">
        <p className="font-mono text-sm text-accent">{"// design system ready"}</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-7xl">{siteConfig.name}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Software Engineering Undergraduate | <span className="text-gradient font-medium">Aspiring Full-Stack Developer</span>
        </p>
        <div className="mt-10 flex items-center gap-4 rounded-2xl border border-border bg-surface p-4 sm:w-fit">
          <ThemeToggle />
          <span className="font-mono text-sm text-muted">Toggle theme</span>
        </div>
      </div>
    </main>
  );
}
