import Link from "next/link";
import { ArrowUpRight, Users, User, ArrowRight } from "lucide-react";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { GitHubIcon } from "@/components/ui/icons/BrandIcons";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const githubLink = project.links.find((l) => l.kind === "github");
  const demoLink = project.links.find((l) => l.kind === "demo");

  return (
    <article className="group h-full flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 sm:p-7 hover:border-accent/50 hover:shadow-lg transition-all duration-300">
      <div>
        {/* Card Header: Context, Status, and Team */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[11px] text-accent uppercase tracking-wider font-medium">
              {project.context === "academic" ? "Academic Project" : "Personal Project"}
            </span>
            <span className="text-border">•</span>
            <span className="font-mono text-[11px] text-muted capitalize flex items-center gap-1">
              {project.team === "group" ? (
                <>
                  <Users className="size-3" /> Group
                </>
              ) : (
                <>
                  <User className="size-3" /> Solo
                </>
              )}
            </span>
          </div>

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

        {/* Title */}
        <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
          <Link href={`/projects/${project.slug}`} className="focus-visible:outline-accent">
            {project.title}
          </Link>
        </h3>

        {/* Tagline */}
        <p className="mt-3 text-sm text-muted leading-relaxed line-clamp-3">
          {project.tagline}
        </p>

        {/* My Role Callout */}
        <div className="mt-4 p-3 rounded-xl bg-surface-muted/60 border border-border/80">
          <span className="block font-mono text-[10px] text-muted uppercase tracking-wider font-semibold mb-0.5">
            My Responsibility
          </span>
          <p className="text-xs font-medium text-foreground">
            {project.role}
          </p>
        </div>

        {/* Technology Badges */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <Badge key={tech.name} variant="neutral">
              {tech.name}
            </Badge>
          ))}
          {project.technologies.length > 5 && (
            <Badge variant="outline">+{project.technologies.length - 5} more</Badge>
          )}
        </div>
      </div>

      {/* Card Footer: Links and Details CTA */}
      <div className="mt-6 pt-5 border-t border-border flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {githubLink && (
            <a
              href={githubLink.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="size-8 inline-flex items-center justify-center rounded-lg border border-border text-muted hover:text-foreground hover:bg-surface-muted transition-colors"
            >
              <GitHubIcon className="size-4" />
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${project.title}`}
              className="size-8 inline-flex items-center justify-center rounded-lg border border-border text-muted hover:text-foreground hover:bg-surface-muted transition-colors"
            >
              <ArrowUpRight className="size-4" />
            </a>
          )}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:underline group-hover:translate-x-0.5 transition-transform"
        >
          <span>View Details</span>
          <ArrowRight className="size-3.5" />
        </Link>
      </div>
    </article>
  );
}
