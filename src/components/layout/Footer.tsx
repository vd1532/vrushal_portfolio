import { personal } from "@/data/personal";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {personal.shortName}. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Mail size={18} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <GithubIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
