import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { personal } from "@/data/personal";
import { MapPin } from "lucide-react";

export function About() {
  return (
    <section id="about-bio" className="py-20 max-w-5xl mx-auto px-4 sm:px-6">
      <SectionHeading title="About" />
      <ScrollReveal>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-foreground/90 leading-relaxed text-base sm:text-lg">
              {personal.bio}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                <MapPin size={14} className="text-primary" />
                {personal.location}
              </div>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-muted-foreground">Status:</span>{" "}
                  <span className="text-primary font-medium">MS Candidate @ SUNY Buffalo</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Focus:</span>{" "}
                  <span className="text-foreground">LNP Formulation · PK/PD Modeling</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
