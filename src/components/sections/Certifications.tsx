import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { certifications, type CertificationType } from "@/data/certifications";
import { Award, BookOpen, Presentation, BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const typeConfig: Record<
  CertificationType,
  { label: string; icon: React.ElementType; color: string; badge: string }
> = {
  certification: {
    label: "Certifications",
    icon: Award,
    color: "text-amber-500",
    badge: "bg-amber-500/10 text-amber-600 dark:text-amber-300",
  },
  coursework: {
    label: "Advanced Coursework",
    icon: BookOpen,
    color: "text-blue-500",
    badge: "bg-blue-500/10 text-blue-600 dark:text-blue-300",
  },
  poster: {
    label: "Poster Presentations",
    icon: Presentation,
    color: "text-emerald-500",
    badge: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300",
  },
  license: {
    label: "Licenses",
    icon: BadgeCheck,
    color: "text-violet-500",
    badge: "bg-violet-500/10 text-violet-600 dark:text-violet-300",
  },
};

const groupOrder: CertificationType[] = ["certification", "coursework", "poster", "license"];

export function Certifications() {
  const grouped = groupOrder.reduce<Record<CertificationType, typeof certifications>>(
    (acc, type) => {
      acc[type] = certifications.filter((c) => c.type === type);
      return acc;
    },
    { certification: [], coursework: [], poster: [], license: [] }
  );

  return (
    <section id="certifications" className="py-20 max-w-5xl mx-auto px-4 sm:px-6">
      <SectionHeading title="Certifications & Recognition" />

      <div className="grid sm:grid-cols-2 gap-6">
        {groupOrder.map((type, i) => {
          const items = grouped[type];
          if (!items.length) return null;
          const config = typeConfig[type];
          const Icon = config.icon;

          return (
            <ScrollReveal key={type} delay={i * 0.1}>
              <div className="rounded-xl border border-border bg-card p-6 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <Icon size={16} className={cn(config.color)} />
                  <h3 className="text-sm font-semibold text-foreground">{config.label}</h3>
                </div>
                <ul className="space-y-3">
                  {items.map((cert, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className={cn("flex-shrink-0 text-xs mt-0.5", config.color)}>▪</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-foreground leading-snug">{cert.name}</p>
                        {cert.year && (
                          <span className="text-xs font-mono text-muted-foreground">{cert.year}</span>
                        )}
                        {type === "license" && (
                          <span
                            className={cn(
                              "ml-2 inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full",
                              config.badge
                            )}
                          >
                            <BadgeCheck size={10} />
                            Verified
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
