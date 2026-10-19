import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { SkillLevel } from "@/types";

export type BadgeVariant = "neutral" | "accent" | "outline" | "success" | "warning";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  neutral: "bg-surface-muted text-foreground border border-border",
  accent: "bg-accent-soft text-accent border border-accent/20 font-medium",
  outline: "border border-border text-muted bg-transparent",
  success: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20",
  warning: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
};

export function Badge({ children, variant = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono transition-colors",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

const levelLabels: Record<SkillLevel, { text: string; variant: BadgeVariant }> = {
  comfortable: { text: "Comfortable", variant: "success" },
  familiar: { text: "Familiar", variant: "neutral" },
  learning: { text: "Learning", variant: "accent" }
};

export function SkillLevelBadge({ level }: { level: SkillLevel }) {
  const meta = levelLabels[level];
  return (
    <span
      className={cn(
        "text-[10px] font-mono px-1.5 py-0.5 rounded border uppercase tracking-wider",
        level === "comfortable" && "text-emerald-500 border-emerald-500/20 bg-emerald-500/5",
        level === "familiar" && "text-muted border-border bg-surface-muted",
        level === "learning" && "text-accent border-accent/30 bg-accent-soft"
      )}
    >
      {meta.text}
    </span>
  );
}
