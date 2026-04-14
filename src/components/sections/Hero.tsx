"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Download, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { personal } from "@/data/personal";

import type { Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const pillLinks = [
  { label: "Email", href: `mailto:${personal.email}`, icon: Mail, external: false },
  { label: "LinkedIn", href: personal.linkedin, icon: LinkedInIcon, external: true },
  { label: "GitHub", href: personal.github, icon: GithubIcon, external: true },
  { label: personal.phone, href: `tel:+17163039437`, icon: Phone, external: false },
  { label: "Resume", href: "/vrushal_portfolio/resume.pdf", icon: Download, external: false, download: true },
];

export function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 pt-20"
    >
      {/* Subtle background gradient mesh */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-3xl w-full text-center"
      >
        {/* Badge */}
        <motion.div variants={item} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Open to roles in biologics product development & formulation Science
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight"
          style={{ fontFamily: "var(--font-dm-serif, Georgia, serif)" }}
        >
          {personal.shortName}
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={item}
          className="text-xl sm:text-2xl text-primary font-medium mb-6"
        >
          {personal.title}
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10"
        >
          {personal.tagline}
        </motion.p>

        {/* Pill links */}
        <motion.div variants={item} className="flex flex-wrap gap-3 justify-center">
          {pillLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              download={link.download}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium border border-border text-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-200"
            >
              <link.icon size={15} />
              {link.label}
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
