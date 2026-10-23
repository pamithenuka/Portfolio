import { GraduationCap, Sparkles } from "lucide-react";
import { personalData } from "@/data/personal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-border/60">
      <div className="container-page">
        <SectionHeading
          number="01"
          eyebrow="about"
          title="Engineering Foundations & Focus"
          description="A motivated undergraduate focused on understanding full-stack software architecture, writing dependable code, and delivering practical solutions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative paragraphs */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal delay={0.1}>
              <div className="space-y-5 text-base sm:text-lg text-muted leading-relaxed">
                {personalData.aboutParagraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            {/* Technical Interests Sub-section */}
            <Reveal delay={0.2}>
              <div className="pt-6 border-t border-border/80">
                <h3 className="font-mono text-xs uppercase tracking-wider text-foreground font-semibold flex items-center gap-2 mb-4">
                  <Sparkles className="size-4 text-accent" />
                  <span>Key Areas of Interest</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {personalData.interests.map((interest) => (
                    <Badge key={interest} variant="neutral">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Quick Facts Card */}
          <div className="lg:col-span-5">
            <Reveal delay={0.25}>
              <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-xs relative overflow-hidden">
                <div
                  aria-hidden="true"
                  className="absolute top-0 right-0 size-32 bg-accent/5 rounded-full blur-2xl pointer-events-none"
                />

                <div className="flex items-center gap-3 pb-6 border-b border-border">
                  <div className="size-10 rounded-xl bg-accent-soft border border-accent/20 flex items-center justify-center text-accent">
                    <GraduationCap className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">Academic Profile</h3>
                    <p className="text-xs text-muted font-mono">SLIIT Faculty of Computing</p>
                  </div>
                </div>

                <dl className="mt-6 space-y-4 text-sm">
                  {personalData.quickFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 py-2 border-b border-border/50 last:border-0"
                    >
                      <dt className="text-muted font-mono text-xs">{fact.label}</dt>
                      <dd className="font-medium text-foreground sm:text-right">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
