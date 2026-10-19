import { GraduationCap, Trophy, BookOpen, Calendar, MapPin, ExternalLink } from "lucide-react";
import { educationData } from "@/data/education";
import { achievements } from "@/data/achievements";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

export function Education() {
  return (
    <section id="education" className="py-20 md:py-28 border-t border-border/60">
      <div className="container-page">
        <SectionHeading
          number="05"
          eyebrow="education"
          title="Education & Honors"
          description="Academic qualifications, curriculum foundations at SLIIT, and verified technical competition achievements."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Education Card */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8 shadow-xs relative overflow-hidden">
                <div
                  aria-hidden="true"
                  className="absolute top-0 right-0 size-48 bg-accent/5 rounded-full blur-2xl pointer-events-none"
                />

                <div className="flex items-start justify-between gap-4 pb-6 border-b border-border">
                  <div className="flex items-start gap-4">
                    <div className="size-12 rounded-2xl bg-accent-soft border border-accent/20 flex items-center justify-center text-accent shrink-0 mt-0.5">
                      <GraduationCap className="size-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                        {educationData.institution}
                      </h3>
                      <p className="text-base text-accent font-medium mt-1">
                        {educationData.degree}
                      </p>
                      <p className="text-sm font-mono text-muted mt-0.5">
                        {educationData.specialization}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-muted">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border bg-surface-muted">
                    <Calendar className="size-3.5 text-accent" />
                    <span>{educationData.currentStanding}</span>
                  </div>
                  {educationData.location && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border bg-surface-muted">
                      <MapPin className="size-3.5 text-accent" />
                      <span>{educationData.location}</span>
                    </div>
                  )}
                  {educationData.gpa && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent/30 bg-accent-soft text-accent font-bold">
                      <span>GPA: {educationData.gpa}</span>
                    </div>
                  )}
                </div>

                {/* Coursework */}
                {educationData.coursework && educationData.coursework.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-border">
                    <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground mb-4 flex items-center gap-2">
                      <BookOpen className="size-3.5 text-accent" />
                      <span>Key Curriculum & Coursework</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {educationData.coursework.map((course) => (
                        <Badge key={course} variant="neutral">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          </div>

          {/* Right Column: Achievements & Awards */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0.2}>
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="size-4 text-accent" />
                  <h3 className="font-mono text-xs uppercase tracking-wider text-foreground font-semibold">
                    Recognitions & Awards
                  </h3>
                </div>

                {achievements.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-border bg-surface p-6 shadow-xs hover:border-accent/40 transition-colors relative"
                  >
                    <div className="flex items-center gap-2 text-[11px] font-mono text-amber-500 font-semibold uppercase tracking-wider mb-2">
                      <Trophy className="size-3.5" />
                      <span>{item.type}</span>
                    </div>

                    <h4 className="text-lg font-bold text-foreground tracking-tight">
                      {item.title}
                    </h4>

                    {item.organization && (
                      <p className="text-xs font-mono text-muted mt-1">
                        {item.organization}
                      </p>
                    )}

                    {item.description && (
                      <p className="text-sm text-muted mt-3 leading-relaxed">
                        {item.description}
                      </p>
                    )}

                    {item.certificateUrl && (
                      <div className="mt-4 pt-3 border-t border-border">
                        <a
                          href={item.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-accent font-medium hover:underline"
                        >
                          <span>View Certificate</span>
                          <ExternalLink className="size-3" />
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
