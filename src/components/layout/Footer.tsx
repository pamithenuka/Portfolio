import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import { siteConfig, navItems } from "@/data/site";
import { socialLinks } from "@/data/socialLinks";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons/BrandIcons";

export function Footer() {
  const currentYear = siteConfig.year;

  return (
    <footer className="border-t border-border bg-surface/40 mt-24">
      <div className="container-page py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Identity */}
          <div className="md:col-span-2">
            <Link
              href="/#home"
              className="inline-flex items-center gap-2 font-mono text-sm font-bold text-accent"
            >
              <span className="flex size-7 items-center justify-center rounded-lg bg-surface border border-border">
                {siteConfig.initials}
              </span>
              <span>{siteConfig.name}</span>
            </Link>
            <p className="mt-3 text-sm text-muted max-w-sm leading-relaxed">
              Software Engineering undergraduate at SLIIT. Passionate about building robust, accessible web and mobile applications with modern software architecture.
            </p>
            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={item.label}
                  className="size-9 inline-flex items-center justify-center rounded-lg border border-border bg-surface text-muted hover:text-foreground hover:border-border-strong transition-colors"
                >
                  {item.icon === "github" && <GitHubIcon className="size-4" />}
                  {item.icon === "linkedin" && <LinkedInIcon className="size-4" />}
                  {item.icon === "mail" && <Mail className="size-4" />}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/#${item.id}`}
                    className="text-muted hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Focus & Meta */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground mb-4">
              Academic Focus
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Sri Lanka Institute of Information Technology (SLIIT)
              <br />
              BSc (Hons) in Information Technology
              <br />
              <span className="text-foreground font-medium">Software Engineering</span>
            </p>
            <div className="mt-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for Internship
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted font-mono">
          <p>
            © {currentYear} {siteConfig.name}. Designed & Built with Next.js & Tailwind CSS.
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-1 text-muted hover:text-foreground transition-colors group"
          >
            <span>Back to top</span>
            <ArrowUp className="size-3.5 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
