import type { NavItem } from "@/types";

/**
 * Site-wide configuration. Update `NEXT_PUBLIC_SITE_URL` on Vercel once the
 * production domain is known; it is used for canonical URLs and the sitemap.
 */
export const siteConfig = {
  name: "Pamith Enuka Kaluarachchi",
  shortName: "Pamith",
  initials: "PEK",
  title: "Pamith Enuka Kaluarachchi | Software Engineering Undergraduate",
  description:
    "Software Engineering undergraduate at SLIIT interested in Full-Stack Development, modern web technologies, and building practical software solutions. Explore my projects and technical skills.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, ""),
  locale: "en_US",
  repository: "https://github.com/pamithenuka/Portfolio",
  /**
   * Path of the CV inside /public. Set to `null` to hide the Download CV
   * button. The button is also hidden automatically if the file is missing.
   */
  resumePath: "/resume/Pamith-Enuka-Kaluarachchi-CV.pdf" as string | null,
} as const;

export const navItems: NavItem[] = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Journey", id: "journey" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];
