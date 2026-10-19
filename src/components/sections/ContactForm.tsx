"use client";

import { useActionState, useEffect, useRef } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { sendContactMessage, type ContactActionState } from "@/app/actions/contact";
import { Button } from "@/components/ui/Button";

const initialState: ContactActionState = {
  success: false
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactMessage, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formRef.current) {
      const input = formRef.current.querySelector<HTMLInputElement>('input[name="form_load_time"]');
      if (input) input.value = String(Date.now());
    }
  }, []);

  return (
    <form
      ref={formRef}
      action={formAction}
      noValidate
      className="rounded-3xl border border-border bg-surface p-6 sm:p-8 shadow-xs"
    >
      <h3 className="text-xl font-bold tracking-tight text-foreground mb-2">
        Send a Direct Message
      </h3>
      <p className="text-xs sm:text-sm text-muted mb-6">
        Have an internship opportunity, project inquiry, or question? Feel free to reach out.
      </p>

      {/* Global Form Feedback */}
      {state.success && (
        <div
          role="status"
          aria-live="polite"
          className="mb-6 p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm flex items-start gap-3"
        >
          <CheckCircle2 className="size-5 shrink-0 mt-0.5" />
          <p>{state.message || "Thank you! Your message was sent successfully."}</p>
        </div>
      )}

      {state.errors?.form && (
        <div
          role="alert"
          aria-live="assertive"
          className="mb-6 p-4 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-sm flex items-start gap-3"
        >
          <AlertCircle className="size-5 shrink-0 mt-0.5" />
          <p>{state.errors.form}</p>
        </div>
      )}

      {/* Hidden spam traps */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website_url">Leave this field empty</label>
        <input
          type="text"
          id="website_url"
          name="website_url"
          tabIndex={-1}
          autoComplete="off"
        />
        <input type="hidden" name="form_load_time" defaultValue="0" />
      </div>

      <div className="space-y-4">
        {/* Name Field */}
        <div>
          <label
            htmlFor="contact-name"
            className="block font-mono text-xs font-semibold text-foreground uppercase tracking-wider mb-2"
          >
            Your Name <span className="text-accent">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            aria-invalid={!!state.errors?.name}
            aria-describedby={state.errors?.name ? "name-error" : undefined}
            placeholder="e.g. Jane Doe"
            className="w-full px-4 py-3 rounded-xl border border-border bg-surface-muted/60 text-foreground placeholder:text-muted/60 text-sm focus-visible:outline-2 focus-visible:outline-accent transition-colors"
          />
          {state.errors?.name && (
            <p id="name-error" className="mt-1.5 text-xs text-rose-500 font-mono">
              {state.errors.name}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="contact-email"
            className="block font-mono text-xs font-semibold text-foreground uppercase tracking-wider mb-2"
          >
            Email Address <span className="text-accent">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            aria-invalid={!!state.errors?.email}
            aria-describedby={state.errors?.email ? "email-error" : undefined}
            placeholder="e.g. jane@company.com"
            className="w-full px-4 py-3 rounded-xl border border-border bg-surface-muted/60 text-foreground placeholder:text-muted/60 text-sm focus-visible:outline-2 focus-visible:outline-accent transition-colors"
          />
          {state.errors?.email && (
            <p id="email-error" className="mt-1.5 text-xs text-rose-500 font-mono">
              {state.errors.email}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="contact-message"
            className="block font-mono text-xs font-semibold text-foreground uppercase tracking-wider mb-2"
          >
            Message <span className="text-accent">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            aria-invalid={!!state.errors?.message}
            aria-describedby={state.errors?.message ? "message-error" : undefined}
            placeholder="Write your message here..."
            className="w-full px-4 py-3 rounded-xl border border-border bg-surface-muted/60 text-foreground placeholder:text-muted/60 text-sm focus-visible:outline-2 focus-visible:outline-accent transition-colors resize-y min-h-[120px]"
          />
          {state.errors?.message && (
            <p id="message-error" className="mt-1.5 text-xs text-rose-500 font-mono">
              {state.errors.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isPending}
          variant="primary"
          size="lg"
          className="w-full mt-2"
          icon={
            isPending ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <Send className="size-4" />
            )
          }
          iconPosition="right"
        >
          {isPending ? "Sending Message..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
}
