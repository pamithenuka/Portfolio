import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeaturedProjectCard } from "@/components/projects/FeaturedProjectCard";
import { ProjectExplorer } from "@/components/projects/ProjectExplorer";
import { getFeaturedProjects, getPublishedProjects, getAllProjectCategories } from "@/lib/projects";
import { GitHubIcon } from "@/components/ui/icons/BrandIcons";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Projects() {
  const featuredProjects = getFeaturedProjects();
  const allProjects = getPublishedProjects();
  const categories = getAllProjectCategories();

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-border/60">
      <div className="container-page">
        <SectionHeading
          number="03"
          eyebrow="projects"
          title="Featured Projects & Systems"
          description="A selection of academic and personal software engineering projects showcasing full-stack development, modular architectures, and verifiable contributions."
        />

        {/* Featured Projects Highlight Stack */}
        <div className="space-y-10 md:space-y-12 mb-20">
          {featuredProjects.map((project, idx) => (
            <Reveal key={project.slug} delay={0.1 * idx}>
              <FeaturedProjectCard project={project} reverse={idx % 2 !== 0} />
            </Reveal>
          ))}
        </div>

        {/* Catalog Subheading */}
        <div className="pt-12 border-t border-border/70 mb-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
                Complete Catalog
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-foreground mt-1">
                Explore All Projects
              </h3>
            </div>
            <p className="text-xs font-mono text-muted">
              Showing {allProjects.length} verified projects
            </p>
          </div>

          {/* Interactive Filtering Grid */}
          <ProjectExplorer projects={allProjects} categories={categories} />
        </div>

        {/* GitHub Integration Strip */}
        <div className="mt-16 rounded-2xl border border-border bg-surface p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-xl bg-surface-muted border border-border flex items-center justify-center text-foreground shrink-0">
              <GitHubIcon className="size-6" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground text-sm sm:text-base">
                Explore Source Code on GitHub
              </h4>
              <p className="text-xs sm:text-sm text-muted mt-0.5">
                Browse repositories, commits, and implementation details at{" "}
                <span className="font-mono text-foreground font-medium">@pamithenuka</span>
              </p>
            </div>
          </div>

          <Button
            href="https://github.com/pamithenuka"
            variant="secondary"
            size="md"
            icon={<GitHubIcon className="size-4" />}
          >
            Visit GitHub Profile
          </Button>
        </div>
      </div>
    </section>
  );
}
