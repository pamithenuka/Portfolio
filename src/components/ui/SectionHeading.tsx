import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  align = "left",
  className
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-3xl",
        className
      )}
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="font-mono text-xs font-medium text-accent tracking-wide uppercase">
          {number ? `// ${number} — ${eyebrow}` : `// ${eyebrow}`}
        </span>
        <div className="h-px bg-border flex-1 max-w-[80px]" aria-hidden="true" />
      </div>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-muted leading-relaxed text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
