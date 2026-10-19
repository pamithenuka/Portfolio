"use client";

import { useState } from "react";
import type { Project, ProjectCategory } from "@/types";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { cn } from "@/lib/utils";

interface ProjectExplorerProps {
  projects: Project[];
  categories: { id: ProjectCategory | "all"; label: string }[];
}

export function ProjectExplorer({ projects, categories }: ProjectExplorerProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | "all">("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.categories.includes(selectedCategory));

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex items-center justify-start sm:justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
        <div
          role="tablist"
          aria-label="Filter projects by category"
          className="inline-flex items-center gap-1.5 p-1 rounded-2xl border border-border bg-surface shadow-xs"
        >
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                type="button"
                id={`tab-${cat.id}`}
                aria-selected={isSelected}
                aria-controls="projects-grid"
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all select-none whitespace-nowrap cursor-pointer",
                  isSelected
                    ? "bg-accent text-background font-semibold shadow-xs"
                    : "text-muted hover:text-foreground hover:bg-surface-muted"
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      <div
        id="projects-grid"
        role="tabpanel"
        aria-labelledby={`tab-${selectedCategory}`}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 border border-dashed border-border rounded-2xl">
          <p className="text-muted text-sm font-mono">No projects found in this category.</p>
        </div>
      )}
    </div>
  );
}
