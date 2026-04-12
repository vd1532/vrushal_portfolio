import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border p-6 transition-all duration-300",
        "bg-card border-border",
        hover && "hover:-translate-y-1 hover:shadow-lg hover:border-primary/30",
        className
      )}
    >
      {children}
    </div>
  );
}
