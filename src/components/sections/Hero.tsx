import Image from "next/image";
import { ArrowRight, Download, Mail } from "lucide-react";
import { personalData } from "@/data/personal";
import { siteConfig } from "@/data/site";
import { socialLinks } from "@/data/socialLinks";
import { Button } from "@/components/ui/Button";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons/BrandIcons";
import { Reveal } from "@/components/ui/Reveal";
import { TypewriterText } from "@/components/ui/TypewriterText";

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center py-16 sm:py-20 overflow-hidden"
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

      <div className="container-page relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-14 items-center">
          {/* Left Column: Introduction & Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Status Badge */}
            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-surface/80 backdrop-blur-xs text-xs font-mono text-muted mb-6 shadow-xs">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{personalData.status}</span>
              </div>
            </Reveal>

            {/* Main H1 with real-time live typing effect on "Kaluarachchi" */}
            <Reveal delay={0.2}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-foreground">
                <span className="sr-only">{personalData.name}</span>
                <span aria-hidden="true" className="block">
                  Pamith Enuka
                </span>
                <span aria-hidden="true" className="block text-gradient">
                  <TypewriterText text="Kaluarachchi" />
                </span>
              </h1>
            </Reveal>

            {/* Subtitle / Role */}
            <Reveal delay={0.3}>
              <p className="mt-4 sm:mt-5 text-lg sm:text-xl font-medium text-muted text-balance">
                Software Engineering Undergraduate{" "}
                <span className="hidden sm:inline text-border-strong">|</span>{" "}
                <span className="text-gradient font-semibold block sm:inline mt-1 sm:mt-0">
                  Aspiring Full-Stack Developer
                </span>
              </p>
            </Reveal>

            {/* Introduction paragraph */}
            <Reveal delay={0.4}>
              <p className="mt-5 text-base sm:text-lg text-muted max-w-xl leading-relaxed text-pretty">
                {personalData.heroIntro}
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.5}>
              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
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
            <Reveal delay={0.6} className="w-full">
              <div className="mt-8 pt-6 border-t border-border/80 flex items-center justify-center lg:justify-start gap-3 sm:gap-5">
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

          {/* Right Column: Editorial Photo Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Reveal delay={0.3} className="w-full flex justify-center lg:justify-end">
              <div className="relative group max-w-[320px] sm:max-w-[360px] lg:max-w-[380px] w-full">
                {/* Ambient glow behind card */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-accent/25 via-indigo-500/20 to-transparent blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                />

                {/* Card Frame */}
                <div className="relative rounded-3xl border border-border/90 bg-surface/80 backdrop-blur-md p-3 sm:p-3.5 shadow-2xl transition-all duration-300 group-hover:border-accent/40">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-surface-muted">
                    <Image
                      src={personalData.profileImage}
                      alt={personalData.name}
                      width={680}
                      height={850}
                      priority
                      sizes="(max-width: 640px) 320px, (max-width: 1024px) 360px, 380px"
                      className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
