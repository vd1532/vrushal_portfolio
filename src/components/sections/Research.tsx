import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/data/research";
import Link from "next/link";
import { ArrowRight, FlaskConical, Calendar } from "lucide-react";

export function Research() {
  return (
    <section id="research" className="py-20 max-w-5xl mx-auto px-4 sm:px-6">
      <SectionHeading
        title="Research"
        subtitle="Graduate & Undergraduate Research Projects"
      />

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ScrollReveal key={project.slug} delay={i * 0.1}>
            <div className="group h-full rounded-xl border border-border bg-card p-6 hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <FlaskConical size={16} className="text-primary flex-shrink-0 mt-0.5" />
                  <Badge variant="muted">{project.type}</Badge>
                </div>
                <span className="text-xs text-muted-foreground font-mono flex items-center gap-1 flex-shrink-0">
                  <Calendar size={11} />
                  {project.period}
                </span>
              </div>

              <h3 className="text-base font-semibold text-foreground mb-1 leading-snug">
                {project.title}
              </h3>
              <p className="text-xs text-primary font-medium mb-4">{project.institution}</p>

              <ul className="space-y-2 flex-1 mb-5">
                {project.highlights.slice(0, 2).map((h, j) => (
                  <li key={j} className="flex gap-2 text-xs text-muted-foreground leading-relaxed">
                    <span className="text-primary mt-1 flex-shrink-0">▪</span>
                    <span dangerouslySetInnerHTML={{ __html: h ?? '' }} />
                  </li>
                ))}
              </ul>

              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all duration-200 group-hover:underline"
              >
                View Details
                <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
