/**
 * Content types for the portfolio.
 *
 * Rule: every optional field hides its UI block when empty — missing data is
 * never rendered as a placeholder claim.
 */

/* ----------------------------------------------------------------------------
 * Projects
 * ------------------------------------------------------------------------- */

export type ProjectCategory = "web" | "mobile" | "ai-ml";
export type ProjectContext = "academic" | "personal";
export type ProjectStatus = "completed" | "in-development";
export type TeamType = "individual" | "group";
export type ContributionArea = "frontend" | "backend" | "mobile" | "database" | "ml" | "testing";

export interface Technology {
  name: string;
  /** Optional short note describing how the technology was used. */
  note?: string;
}

export type LinkKind = "github" | "demo" | "other";

export interface ProjectLink {
  label: string;
  href: string;
  kind: LinkKind;
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

/** A separate implementation of the same project, e.g. RentEase Web vs Mobile. */
export interface ProjectVariant {
  name: string;
  description: string;
  technologies: string[];
  features?: string[];
  links?: ProjectLink[];
}

/** Only add metrics with verified values. */
export interface ProjectMetric {
  label: string;
  value: string;
  note?: string;
}

export interface ProjectContribution {
  summary: string;
  responsibilities: string[];
  areas?: ContributionArea[];
}

export interface ProjectArchitecture {
  description: string;
  components?: { name: string; description: string }[];
  diagram?: ProjectImage;
}

export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

export interface Project {
  slug: string;
  title: string;
  /** Optional short name used in compact UI (e.g. "RentEase"). */
  shortTitle?: string;
  /** One-line description for cards. */
  tagline: string;
  /** Overview paragraph(s) for the detail page. */
  summary: string;
  categories: ProjectCategory[];
  context: ProjectContext;
  status: ProjectStatus;
  team?: TeamType;
  /** Your role in the project. */
  role: string;
  featured: boolean;
  /** Set to false to hide a project until its details are verified. */
  published: boolean;
  /** Lower numbers appear first. */
  order: number;
  /** Free-form period (e.g. "2025"). Only add when known. */
  period?: string;
  thumbnail?: ProjectImage;
  technologies: Technology[];
  conceptsHighlighted?: string[];
  problem?: string;
  solution?: string;
  /** Features of the overall project (including teammates' work). */
  features: string[];
  /** What you personally implemented. */
  contribution?: ProjectContribution;
  architecture?: ProjectArchitecture;
  variants?: ProjectVariant[];
  challenges?: ProjectChallenge[];
  learnings?: string[];
  metrics?: ProjectMetric[];
  screenshots?: ProjectImage[];
  links: ProjectLink[];
}

/* ----------------------------------------------------------------------------
 * Skills
 * ------------------------------------------------------------------------- */

export type SkillLevel = "learning" | "familiar" | "comfortable";

export interface Skill {
  name: string;
  level?: SkillLevel;
}

export type SkillCategoryIcon =
  | "code"
  | "layout"
  | "server"
  | "database"
  | "smartphone"
  | "wrench"
  | "blocks";

export interface SkillCategory {
  id: string;
  title: string;
  icon: SkillCategoryIcon;
  skills: Skill[];
}

/* ----------------------------------------------------------------------------
 * Education, achievements, journey
 * ------------------------------------------------------------------------- */

export interface Education {
  institution: string;
  shortName?: string;
  degree: string;
  specialization?: string;
  /** e.g. "Year 3, Semester 1" */
  currentStanding?: string;
  /** Only add dates that are verified. */
  period?: { start?: string; end?: string };
  location?: string;
  gpa?: string;
  coursework?: string[];
  achievements?: string[];
  website?: string;
}

export type AchievementType =
  | "certification"
  | "course"
  | "competition"
  | "hackathon"
  | "workshop"
  | "award";

export interface Achievement {
  title: string;
  type: AchievementType;
  organization?: string;
  /** Free-form date string (e.g. "2024" or "March 2025"). */
  date?: string;
  description?: string;
  certificateUrl?: string;
  image?: ProjectImage;
}

export type JourneyEntryType = "education" | "project" | "achievement" | "learning" | "career";

export interface JourneyEntry {
  title: string;
  type: JourneyEntryType;
  description: string;
  date?: string;
  link?: { label: string; href: string };
}

/* ----------------------------------------------------------------------------
 * Personal & social
 * ------------------------------------------------------------------------- */

export type SocialIcon = "github" | "linkedin" | "mail";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
  /** Visible handle, e.g. "@pamithenuka". */
  handle?: string;
}

export interface NavItem {
  label: string;
  /** Section id on the home page, without the leading "#". */
  id: string;
}
