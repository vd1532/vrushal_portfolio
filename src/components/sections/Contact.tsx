"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { personal } from "@/data/personal";
import { useForm as useRHF } from "react-hook-form";
import { Mail, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/Icons";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkokwkea";

const directLinks = [
  { label: personal.email, href: `mailto:${personal.email}`, icon: Mail },
  { label: "LinkedIn", href: personal.linkedin, icon: LinkedInIcon, external: true },
  { label: personal.phone, href: `tel:+17163039437`, icon: Phone },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useRHF<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 max-w-5xl mx-auto px-4 sm:px-6">
      <SectionHeading title="Contact" subtitle="Let's connect" />

      <div className="grid md:grid-cols-2 gap-10">
        {/* Form */}
        <ScrollReveal>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                Name
              </label>
              <input
                id="name"
                type="text"
                {...register("name", { required: "Name is required" })}
                name="name"
                placeholder="Your name"
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-200"
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
                })}
                name="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-200"
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                {...register("subject")}
                name="subject"
                placeholder="How can I help?"
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-200"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                name="message"
                rows={5}
                placeholder="Tell me about your opportunity or project..."
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-200 resize-none"
              />
              {errors.message && (
                <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium text-sm hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={15} />
                  Send Message
                </>
              )}
            </button>

            {status === "success" && (
              <div className="flex items-center gap-2 text-emerald-500 text-sm bg-emerald-500/10 rounded-lg px-4 py-3">
                <CheckCircle size={16} />
                Message sent! I'll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 text-red-500 text-sm bg-red-500/10 rounded-lg px-4 py-3">
                <AlertCircle size={16} />
                Something went wrong. Please email directly.
              </div>
            )}
          </form>
        </ScrollReveal>

        {/* Direct contact info */}
        <ScrollReveal delay={0.15} direction="left">
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Get in touch directly</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I'm open to discussing formulation scientist, drug product development, and CMC roles, as well as research collaborations.
              </p>
            </div>

            <div className="space-y-3">
              {directLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <link.icon size={16} className="text-primary" />
                  </div>
                  <span className="text-sm text-foreground group-hover:text-primary transition-colors duration-200 break-all">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
