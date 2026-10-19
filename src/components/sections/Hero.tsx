import { ArrowRight, Download, Mail } from "lucide-react";
import { personalData } from "@/data/personal";
import { siteConfig } from "@/data/site";
import { socialLinks } from "@/data/socialLinks";
import { Button } from "@/components/ui/Button";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons/BrandIcons";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center py-20 overflow-hidden"
    >
      {/* Background Subtle Ambient Glow & Dot Grid */}
      <div
        aria-hidden="true"
        className="bg-dot-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)] opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-accent/5 blur-[120px]"
      />

      <div className="container-page relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          {/* Status Badge */}
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-surface/80 backdrop-blur-xs text-xs font-mono text-muted mb-6 shadow-xs">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{personalData.status}</span>
            </div>
          </Reveal>

          {/* Main H1 */}
          <Reveal delay={0.2}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground text-balance">
              {personalData.name}
            </h1>
          </Reveal>

          {/* Subtitle / Role */}
          <Reveal delay={0.3}>
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl font-medium text-muted text-balance">
              Software Engineering Undergraduate{" "}
              <span className="hidden sm:inline text-border-strong">|</span>{" "}
              <span className="text-gradient font-semibold block sm:inline mt-1 sm:mt-0">
                Aspiring Full-Stack Developer
              </span>
            </p>
          </Reveal>

          {/* Introduction paragraph */}
          <Reveal delay={0.4}>
            <p className="mt-6 text-base sm:text-lg text-muted max-w-2xl leading-relaxed text-pretty">
              {personalData.heroIntro}
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={0.5}>
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="size-4" />}
                iconPosition="right"
              >
                View My Projects
              </Button>

              {siteConfig.resumePath && (
                <Button
                  href={siteConfig.resumePath}
                  variant="secondary"
                  size="lg"
                  icon={<Download className="size-4" />}
                  download="Pamith-Enuka-Kaluarachchi-CV.pdf"
                >
                  Download CV
                </Button>
              )}
            </div>
          </Reveal>

          {/* Quick Social & Contact Links */}
          <Reveal delay={0.6}>
            <div className="mt-8 sm:mt-10 pt-8 border-t border-border/80 flex items-center justify-center gap-4 sm:gap-6">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-xs font-mono text-muted hover:text-foreground transition-colors p-2 rounded-lg hover:bg-surface-muted"
                  aria-label={item.label}
                >
                  {item.icon === "github" && <GitHubIcon className="size-4 text-foreground" />}
                  {item.icon === "linkedin" && <LinkedInIcon className="size-4 text-foreground" />}
                  {item.icon === "mail" && <Mail className="size-4 text-foreground" />}
                  <span className="hidden sm:inline">{item.label}</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
