import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { technicalProjects } from "@/data/technical-projects";
import { cn } from "@/lib/utils";
import { Terminal } from "lucide-react";

const toolAccentMap: Record<string, string> = {
  "ADAPT 5": "border-l-blue-500",
  "SimBiology": "border-l-emerald-500",
  "Phoenix WinNonlin": "border-l-violet-500",
};

const toolBadgeMap: Record<string, string> = {
  "ADAPT 5": "bg-blue-500/10 text-blue-400 dark:text-blue-300",
  "SimBiology": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300",
  "Phoenix WinNonlin": "bg-violet-500/10 text-violet-600 dark:text-violet-300",
};

export function TechnicalProjects() {
  return (
    <section id="technical-projects" className="py-20 max-w-5xl mx-auto px-4 sm:px-6">
      <SectionHeading
        title="Technical Projects"
        subtitle="PK/PD modeling & simulation work"
      />

      <div className="space-y-5">
        {technicalProjects.map((project, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div
              className={cn(
                "rounded-xl border border-border bg-card p-6 border-l-4 hover:border-r-primary/20 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300",
                toolAccentMap[project.tool] ?? "border-l-primary"
              )}
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <Terminal size={16} className="text-muted-foreground flex-shrink-0" />
                  <span
                    className={cn(
                      "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
                      toolBadgeMap[project.tool] ?? "bg-primary/10 text-primary"
                    )}
                  >
                    {project.tool}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">{project.year}</span>
                </div>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
