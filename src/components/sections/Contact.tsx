import { Mail, MapPin } from "lucide-react";
import { personalData } from "@/data/personal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons/BrandIcons";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 border-t border-border/60 bg-surface/30">
      <div className="container-page">
        <SectionHeading
          number="06"
          eyebrow="contact"
          title="Connect & Opportunities"
          description="Looking for an internship or want to discuss a software project? Feel free to reach out directly through email, LinkedIn, or the message form."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct channels */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8 shadow-xs">
                <h3 className="text-xl font-bold tracking-tight text-foreground mb-4">
                  Direct Contact
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-6">
                  I actively monitor email and LinkedIn for internship opportunities, technical discussions, and professional networking.
                </p>

                <div className="space-y-4">
                  {/* Email */}
                  <a
                    href={`mailto:${personalData.email}`}
                    className="flex items-center gap-4 p-3.5 rounded-2xl border border-border bg-surface-muted/50 hover:border-accent/40 hover:bg-surface transition-all group"
                  >
                    <div className="size-11 rounded-xl bg-accent-soft border border-accent/20 flex items-center justify-center text-accent shrink-0 group-hover:scale-105 transition-transform">
                      <Mail className="size-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="block font-mono text-[10px] text-muted uppercase tracking-wider font-semibold">
                        Email Address
                      </span>
                      <span className="text-sm font-medium text-foreground truncate block group-hover:text-accent transition-colors">
                        {personalData.email}
                      </span>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/pamith-kaluarachchi-3595b83a5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3.5 rounded-2xl border border-border bg-surface-muted/50 hover:border-accent/40 hover:bg-surface transition-all group"
                  >
                    <div className="size-11 rounded-xl bg-accent-soft border border-accent/20 flex items-center justify-center text-accent shrink-0 group-hover:scale-105 transition-transform">
                      <LinkedInIcon className="size-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="block font-mono text-[10px] text-muted uppercase tracking-wider font-semibold">
                        LinkedIn Profile
                      </span>
                      <span className="text-sm font-medium text-foreground truncate block group-hover:text-accent transition-colors">
                        pamith-kaluarachchi
                      </span>
                    </div>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/pamithenuka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3.5 rounded-2xl border border-border bg-surface-muted/50 hover:border-accent/40 hover:bg-surface transition-all group"
                  >
                    <div className="size-11 rounded-xl bg-accent-soft border border-accent/20 flex items-center justify-center text-accent shrink-0 group-hover:scale-105 transition-transform">
                      <GitHubIcon className="size-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="block font-mono text-[10px] text-muted uppercase tracking-wider font-semibold">
                        GitHub Profile
                      </span>
                      <span className="text-sm font-medium text-foreground truncate block group-hover:text-accent transition-colors">
                        @pamithenuka
                      </span>
                    </div>
                  </a>
                </div>

                {/* Location & Standing */}
                <div className="mt-6 pt-6 border-t border-border flex items-center justify-between text-xs font-mono text-muted">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="size-3.5 text-accent" />
                    <span>Sri Lanka (UTC +5:30)</span>
                  </div>
                  <span className="text-emerald-500 font-semibold">• Open to Relocation / Remote</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
