import { GraduationCap, BookOpen, Code, Trophy, Briefcase } from "lucide-react";
import { journeyTimeline } from "@/data/journey";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { JourneyEntryType } from "@/types";

const typeIcons: Record<JourneyEntryType, typeof GraduationCap> = {
  education: GraduationCap,
  learning: BookOpen,
  project: Code,
  achievement: Trophy,
  career: Briefcase
};

const typeLabels: Record<JourneyEntryType, string> = {
  education: "Education",
  learning: "Foundations",
  project: "Project Work",
  achievement: "Achievement",
  career: "Career Focus"
};

export function Journey() {
  return (
    <section id="journey" className="py-20 md:py-28 border-t border-border/60 bg-surface/30">
      <div className="container-page">
        <SectionHeading
          number="04"
          eyebrow="journey"
          title="Learning Path & Milestones"
          description="Chronological milestones representing my academic progress, technical explorations, and software engineering growth."
        />

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto mt-12">
          {/* Vertical Track */}
          <div
            aria-hidden="true"
            className="absolute left-4 sm:left-6 top-3 bottom-3 w-px bg-border"
          />

          <div className="space-y-10">
            {journeyTimeline.map((item, idx) => {
              const Icon = typeIcons[item.type] || Code;
              const typeLabel = typeLabels[item.type];

              return (
                <Reveal key={idx} delay={0.06 * idx} y={15}>
                  <div className="relative flex items-start gap-4 sm:gap-6 group">
                    {/* Milestone Node */}
                    <div className="relative z-10 size-8 sm:size-12 rounded-xl sm:rounded-2xl border border-border bg-surface flex items-center justify-center text-accent shrink-0 group-hover:border-accent transition-colors shadow-xs">
                      <Icon className="size-4 sm:size-5" />
                    </div>

                    {/* Content Box */}
                    <div className="flex-1 rounded-2xl border border-border bg-surface p-5 sm:p-6 group-hover:border-border-strong transition-all">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-[11px] text-accent font-semibold uppercase tracking-wider">
                          {typeLabel}
                        </span>
                        {item.date && (
                          <span className="font-mono text-xs text-muted">
                            {item.date}
                          </span>
                        )}
                      </div>

                      <h3 className="text-base sm:text-lg font-semibold text-foreground tracking-tight">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm text-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
