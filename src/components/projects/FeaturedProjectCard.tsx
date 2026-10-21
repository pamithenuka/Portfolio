import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Code2, Layers, CheckCircle2 } from "lucide-react";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GitHubIcon } from "@/components/ui/icons/BrandIcons";

interface FeaturedProjectCardProps {
  project: Project;
  reverse?: boolean;
}

export function FeaturedProjectCard({ project, reverse = false }: FeaturedProjectCardProps) {
  const githubLink = project.links.find((l) => l.kind === "github");
  const demoLink = project.links.find((l) => l.kind === "demo");

  return (
    <article className="rounded-3xl border border-border bg-surface p-6 sm:p-8 lg:p-10 shadow-xs hover:border-border-strong transition-all overflow-hidden relative">
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 size-64 bg-accent/5 rounded-full blur-3xl pointer-events-none"
      />

      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Visual Showcase Panel */}
        <div className={`lg:col-span-5 ${reverse ? "lg:order-2" : "lg:order-1"}`}>
          <Link
            href={`/projects/${project.slug}`}
            className="group block rounded-2xl border border-border bg-surface-muted/60 p-5 sm:p-6 flex flex-col justify-between min-h-[260px] relative overflow-hidden transition-all duration-300 hover:border-accent/40 hover:bg-surface-muted/80 focus-visible:outline-accent"
          >
            {/* Top info */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
                {project.context === "academic" ? "Academic Project" : "Personal Project"}
              </span>
              <span
                className={`inline-flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                  project.status === "completed"
                    ? "text-emerald-500 border-emerald-500/20 bg-emerald-500/5"
                    : "text-amber-500 border-amber-500/20 bg-amber-500/5"
                }`}
              >
                <span
                  className={`size-1.5 rounded-full ${
                    project.status === "completed" ? "bg-emerald-500" : "bg-amber-500 animate-pulse"
                  }`}
                />
                {project.status === "completed" ? "Completed" : "In Development"}
              </span>
            </div>

            {/* Center Visual: Real project thumbnail if available, or schematic */}
            {project.thumbnail ? (
              <div className="my-2 relative overflow-hidden rounded-xl border border-border/80 bg-surface shadow-xs aspect-[16/10]">
                <Image
                  src={project.thumbnail.src}
                  alt={project.thumbnail.alt || project.title}
                  width={project.thumbnail.width || 1242}
                  height={project.thumbnail.height || 587}
                  className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            ) : (
              <div className="my-6 py-4 flex flex-col items-center justify-center text-center">
                <div className="size-14 rounded-2xl bg-surface border border-border flex items-center justify-center text-accent mb-3 shadow-xs">
                  <Code2 className="size-7" />
                </div>
                <span className="font-mono text-xs text-foreground font-semibold">
                  {project.shortTitle || project.title}
                </span>
                <span className="font-mono text-[11px] text-muted mt-1">
                  {project.categories.map((c) => c.toUpperCase()).join(" • ")}
                </span>
              </div>
            )}

            {/* Bottom concepts pill */}
            {project.conceptsHighlighted && project.conceptsHighlighted.length > 0 && (
              <div className="mt-2 pt-3 border-t border-border/80 flex items-center gap-2 text-[11px] font-mono text-muted">
                <Layers className="size-3 text-accent shrink-0" />
                <span className="truncate">
                  {project.conceptsHighlighted.slice(0, 3).join(", ")}
                </span>
              </div>
            )}
          </Link>
        </div>

        {/* Details & Contribution Column */}
        <div className={`lg:col-span-7 ${reverse ? "lg:order-1" : "lg:order-2"} flex flex-col justify-between`}>
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-xs text-muted">
              <span>Featured Project</span>
              <span>•</span>
              <span className="text-foreground">{project.period || "Software Engineering"}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              <Link href={`/projects/${project.slug}`} className="hover:text-accent transition-colors">
                {project.title}
              </Link>
            </h3>

            <p className="mt-3 text-base text-muted leading-relaxed">
              {project.tagline}
            </p>

            {/* Verified Individual Contribution Callout Panel */}
            {project.contribution && (
              <div className="mt-5 p-4 rounded-xl bg-accent-soft/40 border border-accent/20">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-accent uppercase tracking-wider mb-1.5">
                  <CheckCircle2 className="size-3.5" />
                  <span>My Individual Contribution</span>
                </div>
                <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                  {project.contribution.summary}
                </p>
                <div className="mt-2 text-xs text-muted font-medium">
                  Role: <span className="text-foreground">{project.role}</span>
                </div>
              </div>
            )}

            {/* Technologies */}
            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.slice(0, 6).map((tech) => (
                <Badge key={tech.name} variant="neutral">
                  {tech.name}
                </Badge>
              ))}
              {project.technologies.length > 6 && (
                <Badge variant="outline">+{project.technologies.length - 6} more</Badge>
              )}
            </div>
          </div>

          {/* Action Links */}
          <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center gap-4">
            <Button
              href={`/projects/${project.slug}`}
              variant="primary"
              size="md"
              icon={<ArrowRight className="size-4" />}
              iconPosition="right"
            >
              Case Study & Architecture
            </Button>

            {githubLink && (
              <Button
                href={githubLink.href}
                variant="outline"
                size="md"
                icon={<GitHubIcon className="size-4" />}
              >
                GitHub Repository
              </Button>
            )}

            {demoLink && (
              <Button
                href={demoLink.href}
                variant="ghost"
                size="md"
                icon={<ExternalLink className="size-4" />}
              >
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
