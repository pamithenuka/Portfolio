import { ImageResponse } from "next/og";
import { getProjectBySlug, getPublishedProjects } from "@/lib/projects";
import { siteConfig } from "@/data/site";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export async function generateStaticParams() {
  const published = getPublishedProjects();
  return published.map((p) => ({
    slug: p.slug,
  }));
}

interface ProjectOGProps {
  params: Promise<{ slug: string }>;
}

export default async function Image({ params }: ProjectOGProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  const title = project?.title || "Project Case Study";
  const tagline = project?.tagline || "";
  const category = project?.categories?.[0] ? project.categories[0].toUpperCase() : "CASE STUDY";
  const role = project?.role || "Software Engineer";
  const techNames = project?.technologies?.slice(0, 5).map((t) => t.name).join(" • ") || "";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          backgroundColor: "#0a0b0f",
          color: "#ecedf1",
          fontFamily: "sans-serif",
          border: "2px solid #262a35",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontSize: 20,
              fontFamily: "monospace",
              color: "#5eead4",
              border: "1px solid #262a35",
              borderRadius: "9999px",
              padding: "6px 18px",
              backgroundColor: "#12141a",
            }}
          >
            <span>{`// project · ${category}`}</span>
          </div>
          <div
            style={{
              fontSize: 18,
              color: "#9097a6",
              fontFamily: "monospace",
            }}
          >
            {siteConfig.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: 52,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              lineHeight: 1.15,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#5eead4",
              fontWeight: 500,
              maxWidth: "960px",
              lineHeight: 1.4,
            }}
          >
            {tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "24px",
            borderTop: "1px solid #262a35",
            fontSize: 18,
            color: "#9097a6",
          }}
        >
          <div style={{ display: "flex", gap: "8px" }}>
            <span style={{ color: "#ecedf1", fontWeight: 600 }}>Role:</span>
            <span>{role}</span>
          </div>
          <div style={{ fontFamily: "monospace", color: "#818cf8" }}>
            {techNames}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
