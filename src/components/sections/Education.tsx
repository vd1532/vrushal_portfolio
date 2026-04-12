import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { education } from "@/data/education";
import { GraduationCap, Calendar } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 max-w-5xl mx-auto px-4 sm:px-6">
      <SectionHeading title="Education" />

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border hidden sm:block" />
        <div className="space-y-6">
          {education.map((edu, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="sm:pl-12 relative">
                <div className="absolute left-3.5 top-6 w-2 h-2 rounded-full bg-primary ring-4 ring-background hidden sm:block" />
                <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/30 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <GraduationCap size={16} className="text-primary flex-shrink-0" />
                        <h3 className="text-base font-semibold text-foreground">
                          {edu.degree} — {edu.field}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{edu.institution}</p>
                      {edu.courses && (
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {edu.courses.map((c) => (
                            <span
                              key={c}
                              className="px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                      <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                        <Calendar size={11} />
                        {edu.period}
                      </span>
                      <span className="text-sm font-semibold font-mono text-primary">{edu.gpa}</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
