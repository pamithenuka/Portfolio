import { projects } from "@/data/projects";
import type { Project, ProjectCategory } from "@/types";

export function getPublishedProjects(): Project[] {
  return projects
    .filter((p) => p.published)
    .sort((a, b) => a.order - b.order);
}

export function getFeaturedProjects(): Project[] {
  return getPublishedProjects().filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug && p.published);
}

export function getAllProjectCategories(): { id: ProjectCategory | "all"; label: string }[] {
  const published = getPublishedProjects();
  const allCategories: { id: ProjectCategory; label: string }[] = [
    { id: "web", label: "Web Applications" },
    { id: "mobile", label: "Mobile Applications" },
    { id: "ai-ml", label: "AI / ML" }
  ];

  // Only return categories that actually have published projects
  const activeCategories = allCategories.filter((cat) =>
    published.some((p) => p.categories.includes(cat.id))
  );

  return [{ id: "all", label: "All Projects" }, ...activeCategories];
}
