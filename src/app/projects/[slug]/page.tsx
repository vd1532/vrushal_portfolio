import { projects } from "@/data/research";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Building2, FlaskConical, CheckCircle, Wrench, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Vrushal Dalvi`,
    description: project.overview ?? project.highlights[0],
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const relatedProjects = projects.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        {/* Back button + breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 hover:text-primary transition-colors duration-200"
          >
            <ArrowLeft size={14} />
            Back to Portfolio
          </Link>
          <span>/</span>
          <span className="text-foreground truncate max-w-xs">{project.type}</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
              <FlaskConical size={12} />
              {project.type}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
              <Calendar size={12} />
              {project.period}
            </span>
          </div>

          <h1
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight"
            style={{ fontFamily: "var(--font-dm-serif, Georgia, serif)" }}
          >
            {project.title}
          </h1>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Building2 size={14} className="text-primary" />
            {project.institution}
          </div>
        </header>

        {/* Divider */}
        <div className="h-px bg-border mb-10" />

        {/* Overview */}
        {project.overview && (
          <section className="mb-10">
            <h2
              className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2"
              style={{ fontFamily: "var(--font-dm-serif, Georgia, serif)" }}
            >
              <span className="w-1 h-5 rounded-full bg-primary flex-shrink-0" />
              Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
          </section>
        )}

        {/* Key Highlights */}
        <section className="mb-10">
          <h2
            className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2"
            style={{ fontFamily: "var(--font-dm-serif, Georgia, serif)" }}
          >
            <span className="w-1 h-5 rounded-full bg-primary flex-shrink-0" />
            Key Highlights
          </h2>
          <ul className="space-y-3">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                <span className="text-primary mt-1 flex-shrink-0">▪</span>
                <span dangerouslySetInnerHTML={{ __html: h ?? '' }} />
              </li>
            ))}
          </ul>
        </section>

        {/* Methods */}
        {project.methods && project.methods.length > 0 && (
          <section className="mb-10">
            <h2
              className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2"
              style={{ fontFamily: "var(--font-dm-serif, Georgia, serif)" }}
            >
              <span className="w-1 h-5 rounded-full bg-primary flex-shrink-0" />
              Methods & Techniques
            </h2>
            <div className="grid sm:grid-cols-2 gap-2">
              {project.methods.map((method, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-3 rounded-lg border border-border bg-card text-sm text-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: method }} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Outcomes */}
        {project.outcomes && project.outcomes.length > 0 && (
          <section className="mb-10">
            <h2
              className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2"
              style={{ fontFamily: "var(--font-dm-serif, Georgia, serif)" }}
            >
              <span className="w-1 h-5 rounded-full bg-primary flex-shrink-0" />
              Key Outcomes
            </h2>
            <ul className="space-y-2">
              {project.outcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle size={15} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  {outcome}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Tools */}
        {project.tools && project.tools.length > 0 && (
          <section className="mb-12">
            <h2
              className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2"
              style={{ fontFamily: "var(--font-dm-serif, Georgia, serif)" }}
            >
              <span className="w-1 h-5 rounded-full bg-primary flex-shrink-0" />
              <Wrench size={16} className="text-primary" />
              Tools Used
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-muted text-muted-foreground border border-border"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Related projects */}
        {relatedProjects.length > 0 && (
          <>
            <div className="h-px bg-border mb-10" />
            <section>
              <h2
                className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2"
                style={{ fontFamily: "var(--font-dm-serif, Georgia, serif)" }}
              >
                <span className="w-1 h-5 rounded-full bg-primary flex-shrink-0" />
                Other Research
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {relatedProjects.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    className="group p-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="text-xs text-primary font-medium mb-1">{p.type}</div>
                    <div className="text-sm font-medium text-foreground leading-snug group-hover:text-primary transition-colors duration-200 mb-2">
                      {p.title}
                    </div>
                    <div className="inline-flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                      View Details <ArrowRight size={11} />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
}
