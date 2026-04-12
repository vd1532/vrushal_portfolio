import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "muted" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-all duration-200",
        variant === "default" && "bg-primary/10 text-primary hover:bg-primary/20",
        variant === "primary" && "bg-primary text-white",
        variant === "muted" && "bg-muted text-muted-foreground",
        variant === "outline" && "border border-border text-muted-foreground hover:border-primary hover:text-primary",
        className
      )}
    >
      {children}
    </span>
  );
}
