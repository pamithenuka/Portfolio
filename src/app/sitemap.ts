import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { getPublishedProjects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const publishedProjects = getPublishedProjects();
  const buildDate = new Date("2026-10-19T00:00:00Z");

  const projectRoutes: MetadataRoute.Sitemap = publishedProjects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified: buildDate,
    changeFrequency: "monthly",
    priority: 0.8
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 1.0
    },
    ...projectRoutes
  ];
}
