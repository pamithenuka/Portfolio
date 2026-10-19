import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Users,
  User,
  Layers
} from "lucide-react";
import { getProjectBySlug, getPublishedProjects } from "@/lib/projects";
import { siteConfig } from "@/data/site";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GitHubIcon } from "@/components/ui/icons/BrandIcons";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const published = getPublishedProjects();
  return published.map((p) => ({
    slug: p.slug
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found"
    };
  }

  const title = `${project.title} | ${siteConfig.shortName}`;
  const description = project.tagline;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `/projects/${project.slug}`
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const allPublished = getPublishedProjects();
  const currentIndex = allPublished.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? allPublished[currentIndex - 1] : null;
  const nextProject =
    currentIndex < allPublished.length - 1 ? allPublished[currentIndex + 1] : null;

  const githubLink = project.links.find((l) => l.kind === "github");
  const demoLink = project.links.find((l) => l.kind === "demo");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": project.categories.includes("ai-ml") ? "CreativeWork" : "SoftwareSourceCode",
    name: project.title,
    headline: project.tagline,
    description: project.summary,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    programmingLanguage: project.technologies.map((t) => t.name),
    codeRepository: githubLink?.href,
    url: `${siteConfig.url}/projects/${project.slug}`,
  };

  return (
    <article className="py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-page max-w-6xl">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-muted hover:text-accent transition-colors group"
          >
            <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to all projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <header className="pb-10 border-b border-border">
          <div className="flex flex-wrap items-center gap-2.5 mb-4 font-mono text-xs">
            <span className="text-accent font-semibold uppercase tracking-wider">
              {project.context === "academic" ? "Academic Project" : "Personal Project"}
            </span>
            <span className="text-border">•</span>
            <span className="text-muted flex items-center gap-1">
              {project.team === "group" ? (
                <>
                  <Users className="size-3" /> Group Team
                </>
              ) : (
                <>
                  <User className="size-3" /> Individual Project
                </>
              )}
            </span>
            <span className="text-border">•</span>
            <span
              className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border ${
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

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground text-balance">
            {project.title}
          </h1>

          <p className="mt-4 text-base sm:text-xl text-muted leading-relaxed max-w-3xl text-pretty">
            {project.tagline}
          </p>

          {/* Quick Action Links */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {githubLink && (
              <Button
                href={githubLink.href}
                variant="primary"
                size="md"
                icon={<GitHubIcon className="size-4" />}
              >
                View on GitHub
              </Button>
            )}
            {demoLink && (
              <Button
                href={demoLink.href}
                variant="secondary"
                size="md"
                icon={<ExternalLink className="size-4" />}
              >
                Launch Demo
              </Button>
            )}
          </div>
        </header>

        {/* Content Layout: 8 cols main, 4 cols sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <section aria-labelledby="overview-heading">
              <h2
                id="overview-heading"
                className="font-mono text-xs font-semibold text-accent uppercase tracking-wider mb-3 flex items-center gap-2"
              >
                <span>{"// 01"}</span>
                <span>Project Overview</span>
              </h2>
              <div className="text-base sm:text-lg text-foreground/90 leading-relaxed space-y-4">
                <p>{project.summary}</p>
              </div>
            </section>

            {/* Problem & Solution */}
            {(project.problem || project.solution) && (
              <section
                aria-labelledby="problem-solution-heading"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {project.problem && (
                  <div className="rounded-2xl border border-border bg-surface p-6">
                    <h3 className="font-mono text-xs font-semibold text-rose-500 dark:text-rose-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <AlertCircle className="size-4" />
                      <span>The Problem</span>
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">{project.problem}</p>
                  </div>
                )}
                {project.solution && (
                  <div className="rounded-2xl border border-accent/30 bg-accent-soft/30 p-6">
                    <h3 className="font-mono text-xs font-semibold text-accent uppercase tracking-wider mb-2 flex items-center gap-2">
                      <CheckCircle2 className="size-4" />
                      <span>The Solution</span>
                    </h3>
                    <p className="text-sm text-foreground/90 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                )}
              </section>
            )}

            {/* ★ MY VERIFIED INDIVIDUAL CONTRIBUTION PANEL */}
            {project.contribution && (
              <section
                aria-labelledby="contribution-heading"
                className="rounded-3xl border-2 border-accent/40 bg-surface p-6 sm:p-8 shadow-sm relative overflow-hidden"
              >
                <div
                  aria-hidden="true"
                  className="absolute top-0 right-0 size-48 bg-accent/10 rounded-full blur-2xl pointer-events-none"
                />

                <div className="flex items-center gap-2.5 mb-4 text-accent">
                  <CheckCircle2 className="size-5" />
                  <h2
                    id="contribution-heading"
                    className="font-mono text-sm font-bold uppercase tracking-wider"
                  >
                    My Individual Contribution
                  </h2>
                </div>

                <p className="text-base text-foreground font-medium leading-relaxed">
                  {project.contribution.summary}
                </p>

                <div className="mt-6 pt-6 border-t border-border">
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted mb-4">
                    Key Features & Technical Responsibilities I Implemented:
                  </h3>
                  <ul className="space-y-3">
                    {project.contribution.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-foreground/90 leading-relaxed">
                        <span className="size-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {/* Overall System Features */}
            {project.features && project.features.length > 0 && (
              <section aria-labelledby="features-heading">
                <h2
                  id="features-heading"
                  className="font-mono text-xs font-semibold text-accent uppercase tracking-wider mb-4 flex items-center gap-2"
                >
                  <span>{"// 02"}</span>
                  <span>System Capabilities & Features</span>
                </h2>
                <div className="rounded-2xl border border-border bg-surface p-6">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-muted">
                        <CheckCircle2 className="size-4 text-accent shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {/* Project Variants (e.g., RentEase Web vs Mobile) */}
            {project.variants && project.variants.length > 0 && (
              <section aria-labelledby="variants-heading">
                <h2
                  id="variants-heading"
                  className="font-mono text-xs font-semibold text-accent uppercase tracking-wider mb-4 flex items-center gap-2"
                >
                  <span>{"// 03"}</span>
                  <span>System Client Architectures</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.variants.map((variant) => (
                    <div
                      key={variant.name}
                      className="rounded-2xl border border-border bg-surface p-6 flex flex-col justify-between"
                    >
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">
                          {variant.name}
                        </h3>
                        <p className="text-sm text-muted leading-relaxed">
                          {variant.description}
                        </p>
                      </div>
                      <div className="mt-5 pt-4 border-t border-border flex flex-wrap gap-1.5">
                        {variant.technologies.map((tech) => (
                          <Badge key={tech} variant="neutral">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Challenges and Solutions */}
            {project.challenges && project.challenges.length > 0 && (
              <section aria-labelledby="challenges-heading">
                <h2
                  id="challenges-heading"
                  className="font-mono text-xs font-semibold text-accent uppercase tracking-wider mb-4 flex items-center gap-2"
                >
                  <span>{"// 04"}</span>
                  <span>Engineering Challenges & Solutions</span>
                </h2>
                <div className="space-y-4">
                  {project.challenges.map((c, idx) => (
                    <div key={idx} className="rounded-2xl border border-border bg-surface p-6">
                      <h3 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-2">
                        <AlertCircle className="size-4 text-amber-500 shrink-0" />
                        <span>Challenge: {c.challenge}</span>
                      </h3>
                      <p className="text-sm text-muted leading-relaxed pl-6">
                        <strong className="text-accent font-medium">Solution: </strong>
                        {c.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* What I Learned */}
            {project.learnings && project.learnings.length > 0 && (
              <section aria-labelledby="learnings-heading">
                <h2
                  id="learnings-heading"
                  className="font-mono text-xs font-semibold text-accent uppercase tracking-wider mb-4 flex items-center gap-2"
                >
                  <Lightbulb className="size-4 text-accent" />
                  <span>Key Engineering Takeaways</span>
                </h2>
                <div className="rounded-2xl border border-border bg-surface p-6">
                  <ul className="space-y-3">
                    {project.learnings.map((learning, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
                        <span className="size-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-xs space-y-6">
              <div>
                <span className="block font-mono text-[10px] text-muted uppercase tracking-wider font-semibold mb-1">
                  My Assigned Role
                </span>
                <p className="text-sm font-bold text-foreground">{project.role}</p>
              </div>

              {project.period && (
                <div className="pt-4 border-t border-border">
                  <span className="block font-mono text-[10px] text-muted uppercase tracking-wider font-semibold mb-1">
                    Academic Period
                  </span>
                  <p className="text-sm text-muted font-mono">{project.period}</p>
                </div>
              )}

              {/* Technologies */}
              <div className="pt-4 border-t border-border">
                <span className="block font-mono text-[10px] text-muted uppercase tracking-wider font-semibold mb-3">
                  Technologies Used
                </span>
                <div className="space-y-2">
                  {project.technologies.map((t) => (
                    <div
                      key={t.name}
                      className="p-2.5 rounded-xl border border-border bg-surface-muted/60 flex flex-col gap-0.5 text-xs"
                    >
                      <span className="font-mono font-semibold text-foreground">
                        {t.name}
                      </span>
                      {t.note && (
                        <span className="text-[11px] text-muted">{t.note}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Concepts Highlighted */}
              {project.conceptsHighlighted && project.conceptsHighlighted.length > 0 && (
                <div className="pt-4 border-t border-border">
                  <span className="block font-mono text-[10px] text-muted uppercase tracking-wider font-semibold mb-3 flex items-center gap-1.5">
                    <Layers className="size-3.5 text-accent" />
                    <span>Concepts Demonstrated</span>
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.conceptsHighlighted.map((concept) => (
                      <Badge key={concept} variant="neutral">
                        {concept}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Project External Links */}
              {project.links.length > 0 && (
                <div className="pt-4 border-t border-border space-y-2">
                  {project.links.map((link) => (
                    <Button
                      key={link.href}
                      href={link.href}
                      variant="outline"
                      size="sm"
                      className="w-full justify-between"
                      icon={<ExternalLink className="size-3.5" />}
                      iconPosition="right"
                    >
                      {link.label}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </aside>
        </div>

        {/* Bottom Pagination Links */}
        <nav
          aria-label="Other projects"
          className="mt-16 pt-8 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="p-4 rounded-2xl border border-border bg-surface hover:border-accent/40 transition-colors group flex items-center gap-4"
            >
              <ArrowLeft className="size-4 text-muted group-hover:text-accent transition-colors" />
              <div className="min-w-0">
                <span className="block font-mono text-[10px] text-muted uppercase tracking-wider">
                  Previous Project
                </span>
                <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors truncate block">
                  {prevProject.title}
                </span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextProject && (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="p-4 rounded-2xl border border-border bg-surface hover:border-accent/40 transition-colors group flex items-center justify-between text-right gap-4"
            >
              <div className="min-w-0 flex-1">
                <span className="block font-mono text-[10px] text-muted uppercase tracking-wider">
                  Next Project
                </span>
                <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors truncate block">
                  {nextProject.title}
                </span>
              </div>
              <ArrowRight className="size-4 text-muted group-hover:text-accent transition-colors" />
            </Link>
          )}
        </nav>
      </div>
    </article>
  );
}
