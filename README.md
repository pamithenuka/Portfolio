# Pamith Enuka Kaluarachchi — Developer Portfolio

A modern, high-performance, accessible personal software engineering portfolio built from scratch with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Motion for React**.

Designed to showcase academic systems, personal projects, individual module responsibilities, and technical competencies for Software Engineering and Full-Stack Developer internship applications.

---

## 🚀 Live Demo & Repository

- **Repository**: [https://github.com/pamithenuka/Portfolio](https://github.com/pamithenuka/Portfolio)
- **Developer**: Pamith Enuka Kaluarachchi
- **Degree**: BSc (Hons) in Information Technology — Software Engineering, SLIIT (Year 3, Semester 1)
- **Target Role**: Full-Stack Developer / Software Engineering Intern

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router with Turbopack) |
| **Language** | TypeScript (Strict Mode) |
| **Styling** | Tailwind CSS v4 & Vanilla CSS Variables |
| **Animations** | Motion for React (`motion/react` with `LazyMotion` & `reducedMotion="user"`) |
| **Icons** | Lucide React & accessible inline Brand SVGs |
| **Architecture** | React Server Components (RSC) + Selective Client Islands |
| **Deployment** | Vercel |

---

## ✨ Key Features & Architectural Highlights

1. **Recruiter-Focused Hierarchy**:
   - Quick 30-second overview in the Hero: academic standing, verified contacts, and featured projects.
   - Distinct **"My Individual Contribution"** panels on project cards and detail case studies to clearly separate personal work from overall group deliverables.
   - Transparent skill categorization with honest proficiency markers (`Comfortable`, `Familiar`, `Learning`) — no arbitrary percentages or fake meters.

2. **Zero-Flash Theme System (Dark & Light)**:
   - Driven by `<meta name="color-scheme">` and CSS `light-dark()` tokens.
   - Synchronous inline head script applies stored overrides before the browser paints, preventing theme flashes (FOUC) while respecting `prefers-color-scheme`.

3. **Dynamic Statically Generated Project Pages**:
   - Statically prerendered dynamic route: `/projects/[slug]` (`/projects/rentease`, `/projects/findr`, `/projects/carepulse`, etc.).
   - Full case studies with system architecture breakdowns, problem/solution comparisons, client breakdowns, and key takeaways.

4. **Accessible Navigation & Scrollspy**:
   - Sticky navbar with scroll detection, automatic section highlighting via `IntersectionObserver`, accessible mobile slide-out drawer with focus trapping, and a "Skip to content" link.

5. **Spam-Protected Contact Handling**:
   - Secure Next.js Server Action with invisible honeypot trap and minimum fill-time heuristics.
   - Built-in integration with the Resend API with honest fallbacks: if an API key is unconfigured, it clearly directs visitors to your verified email (`pamithenuka15@gmail.com`) rather than showing false success states.

---

## 📂 Project Structure

```text
Portfolio/
├── public/
│   ├── images/
│   │   ├── projects/          # Project thumbnails and mockups
│   │   └── profile/           # Profile photo (optional)
│   └── resume/
│       └── Pamith-Enuka-Kaluarachchi-CV.pdf  # Downloadable resume
├── src/
│   ├── app/
│   │   ├── actions/
│   │   │   └── contact.ts     # Secure Server Action for contact messages
│   │   ├── projects/
│   │   │   └── [slug]/
│   │   │       └── page.tsx   # Statically generated case study pages
│   │   ├── globals.css        # Tailwind v4 tokens & light-dark() CSS variables
│   │   ├── layout.tsx         # Root layout with Geist fonts & theme script
│   │   ├── not-found.tsx      # Branded 404 page
│   │   ├── page.tsx           # Home page assembling all sections
│   │   ├── robots.ts          # Search engine crawlers configuration
│   │   └── sitemap.ts         # Dynamic XML sitemap generator
│   ├── components/
│   │   ├── layout/            # Navbar, MobileMenu, Footer, ThemeToggle
│   │   ├── projects/          # ProjectCard, FeaturedProjectCard, ProjectExplorer
│   │   ├── sections/          # Hero, About, Skills, Projects, Journey, Education, Contact
│   │   └── ui/                # Button, Badge, SectionHeading, Reveal, BrandIcons
│   ├── data/                  # Centralized content files (easy to edit!)
│   │   ├── achievements.ts    # Honors & awards (e.g. CodeNight Linux win)
│   │   ├── education.ts       # SLIIT degree details & coursework
│   │   ├── journey.ts         # Chronological milestones timeline
│   │   ├── personal.ts        # Name, bio, status, quick facts
│   │   ├── projects.ts        # All project metadata & case studies
│   │   ├── site.ts            # Site URL, navigation config, CV path
│   │   ├── skills.ts          # Categorized technical competencies
│   │   └── socialLinks.ts     # GitHub, LinkedIn, email endpoints
│   ├── lib/                   # Utility helpers, theme logic, validation
│   └── types/                 # Strict TypeScript data models
├── .env.example
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## 💻 Getting Started Locally

### Prerequisites
- **Node.js**: v20 or higher (v24 recommended)
- **npm**: v10 or higher

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pamithenuka/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Run TypeScript check & linter:**
   ```bash
   npx tsc --noEmit
   npm run lint
   ```

5. **Build for production:**
   ```bash
   npm run build
   npm run start
   ```

---

## 📝 Easy Content Management Guide

The portfolio is structured so you never need to touch complex UI components to update your information. All content lives inside `src/data/`:

### 1. How to Add or Edit a Project
Open `src/data/projects.ts` and add a new object to the `projects` array:
```ts
{
  slug: "my-new-project",
  title: "Project Name",
  shortTitle: "Short Name",
  tagline: "One line summary for cards",
  summary: "Detailed overview for the case study page",
  categories: ["web"],          // "web" | "mobile" | "ai-ml"
  context: "personal",          // "academic" | "personal"
  status: "completed",          // "completed" | "in-development"
  team: "individual",           // "individual" | "group"
  role: "Lead Full-Stack Developer",
  featured: true,               // true = highlights on homepage
  published: true,              // false = keeps as draft
  order: 1,
  technologies: [
    { name: "React", note: "Frontend interface" },
    { name: "Node.js", note: "REST API service" }
  ],
  features: ["Feature 1", "Feature 2"],
  contribution: {
    summary: "What you specifically designed and built...",
    responsibilities: ["Task 1", "Task 2"]
  },
  links: [
    { label: "GitHub", href: "https://github.com/...", kind: "github" }
  ]
}
```
The homepage filter and dynamic case study route (`/projects/my-new-project`) will automatically be generated at build time!

### 2. How to Update Personal Information or About Text
Open `src/data/personal.ts`:
- Update `aboutParagraphs` with new academic or career details.
- Update `status` when seeking new roles or progressing to Year 3 Semester 2.
- Update `interests` or `quickFacts`.

### 3. How to Update or Add Skills
Open `src/data/skills.ts`:
- Add new skills under their respective domain.
- Set proficiency label: `"comfortable"` | `"familiar"` | `"learning"`.

### 4. How to Update the CV / Resume
1. Place your new PDF inside `public/resume/` (e.g. `public/resume/Pamith-Enuka-Kaluarachchi-CV.pdf`).
2. If the filename is different, update `resumePath` in `src/data/site.ts`.
3. If you want to temporarily hide the button, set `resumePath: null` in `src/data/site.ts`.

---

## 🚢 Deploying to Vercel

The portfolio is fully optimized for zero-configuration deployment on [Vercel](https://vercel.com/):

1. Push your latest code to your `main` branch on GitHub:
   ```bash
   git push origin main
   ```
2. Log in to [Vercel](https://vercel.com/) and click **"Add New" → "Project"**.
3. Import your `Portfolio` repository.
4. Leave the Framework Preset as **Next.js**.
5. *(Optional)* Add environment variables from `.env.example`:
   - `NEXT_PUBLIC_SITE_URL`: Your production domain (e.g., `https://pamith.vercel.app`)
   - `RESEND_API_KEY`: API key from [Resend](https://resend.com) for sending emails
   - `CONTACT_TO_EMAIL`: `pamithenuka15@gmail.com`
6. Click **Deploy**. Vercel will build and publish your static portfolio globally.

---

## 📄 License

This repository is maintained for personal and academic portfolio purposes by **Pamith Enuka Kaluarachchi**.
Code structure and components are released under the [MIT License](LICENSE).