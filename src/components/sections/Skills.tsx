"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { skillCategories } from "@/data/skills";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <section id="skills" className="py-20 max-w-5xl mx-auto px-4 sm:px-6">
      <SectionHeading title="Skills" />

      <div className="grid sm:grid-cols-2 gap-6">
        {skillCategories.map((category, i) => (
          <ScrollReveal key={category.name} delay={i * 0.1}>
            <div className="rounded-xl border border-border bg-card p-6 h-full">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 + j * 0.04, duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
