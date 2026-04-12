import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { experiences } from "@/data/experience";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 max-w-5xl mx-auto px-4 sm:px-6">
      <SectionHeading title="Experience" />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border hidden sm:block" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="sm:pl-12 relative">
                {/* Timeline dot */}
                <div className="absolute left-3.5 top-6 w-2 h-2 rounded-full bg-primary ring-4 ring-background hidden sm:block" />

                <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/30 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <Briefcase size={16} className="text-primary flex-shrink-0" />
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium mt-0.5">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1 font-mono">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((point, j) => (
                      <li key={j} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                        <span className="text-primary mt-1.5 flex-shrink-0">▪</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
