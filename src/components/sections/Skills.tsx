import {
  Code,
  Layout,
  Server,
  Database,
  Smartphone,
  Wrench,
  Boxes
} from "lucide-react";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillLevelBadge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import type { SkillCategoryIcon } from "@/types";

const categoryIcons: Record<SkillCategoryIcon, typeof Code> = {
  code: Code,
  layout: Layout,
  server: Server,
  database: Database,
  smartphone: Smartphone,
  wrench: Wrench,
  blocks: Boxes
};

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 border-t border-border/60 bg-surface/30">
      <div className="container-page">
        <SectionHeading
          number="02"
          eyebrow="skills"
          title="Technical Competencies"
          description="Technologies, frameworks, and software engineering principles practiced through academic coursework and hands-on projects."
        />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = categoryIcons[category.icon] || Code;
            const isWide = category.id === "concepts";

            return (
              <Reveal
                key={category.id}
                delay={0.08 * idx}
                className={isWide ? "md:col-span-2 lg:col-span-3" : undefined}
              >
                <div className="h-full rounded-2xl border border-border bg-surface p-6 hover:border-border-strong transition-all flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border/70">
                      <div className="size-8 rounded-lg bg-surface-muted border border-border flex items-center justify-center text-accent">
                        <Icon className="size-4" />
                      </div>
                      <h3 className="font-semibold text-foreground text-sm tracking-tight">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-surface-muted/60 text-xs font-mono text-foreground hover:border-accent/40 transition-colors"
                        >
                          <span>{skill.name}</span>
                          {skill.level && <SkillLevelBadge level={skill.level} />}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted font-mono pt-4 border-t border-border/60">
          <span className="text-foreground font-semibold">Proficiency Labels:</span>
          <div className="flex items-center gap-2">
            <SkillLevelBadge level="comfortable" />
            <span>Used regularly in academic and personal projects</span>
          </div>
          <div className="flex items-center gap-2">
            <SkillLevelBadge level="familiar" />
            <span>Hands-on coursework & project experience</span>
          </div>
          <div className="flex items-center gap-2">
            <SkillLevelBadge level="learning" />
            <span>Actively expanding practical mastery</span>
          </div>
        </div>
      </div>
    </section>
  );
}
