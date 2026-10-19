import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn, isExternalUrl } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-background font-semibold hover:opacity-90 shadow-sm active:translate-y-[1px]",
  secondary:
    "bg-surface-muted text-foreground border border-border hover:border-border-strong hover:bg-surface active:translate-y-[1px]",
  outline:
    "border border-border text-foreground bg-transparent hover:border-accent hover:text-accent active:translate-y-[1px]",
  ghost:
    "text-muted hover:text-foreground hover:bg-surface-muted active:translate-y-[1px]"
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-xs px-3 py-1.5 rounded-lg gap-1.5",
  md: "text-sm px-4 py-2.5 rounded-xl gap-2",
  lg: "text-base px-5 py-3 rounded-xl gap-2.5 font-medium"
};

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  children?: ReactNode;
}

export type ButtonProps = BaseButtonProps &
  (
    | ({ href: string } & Omit<ComponentPropsWithoutRef<"a">, "href">)
    | ({ href?: never } & ComponentPropsWithoutRef<"button">)
  );

export function Button({
  variant = "primary",
  size = "md",
  className,
  icon,
  iconPosition = "left",
  children,
  href,
  ...rest
}: ButtonProps) {
  const combinedClasses = cn(
    "inline-flex items-center justify-center transition-all select-none focus-visible:outline-2 focus-visible:outline-accent disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      {children && <span>{children}</span>}
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    if (isExternalUrl(href) || href.startsWith("mailto:") || href.endsWith(".pdf")) {
      return (
        <a
          href={href}
          className={combinedClasses}
          target={isExternalUrl(href) ? "_blank" : undefined}
          rel={isExternalUrl(href) ? "noopener noreferrer" : undefined}
          {...(rest as ComponentPropsWithoutRef<"a">)}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses} {...(rest as ComponentPropsWithoutRef<"a">)}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={(rest as ComponentPropsWithoutRef<"button">).type ?? "button"}
      className={combinedClasses}
      {...(rest as ComponentPropsWithoutRef<"button">)}
    >
      {content}
    </button>
  );
}
