import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-16rem)] flex items-center justify-center py-24">
      <div className="container-page max-w-lg text-center">
        <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
          Error 404
        </span>
        <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
          Page Not Found
        </h1>
        <p className="mt-4 text-base text-muted leading-relaxed text-pretty">
          The project, resource, or page you were looking for doesn&apos;t exist or has been relocated.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/" variant="primary" size="md" icon={<Home className="size-4" />}>
            Return Home
          </Button>
          <Button
            href="/#projects"
            variant="secondary"
            size="md"
            icon={<ArrowLeft className="size-4" />}
          >
            Browse Projects
          </Button>
        </div>
      </div>
    </div>
  );
}
