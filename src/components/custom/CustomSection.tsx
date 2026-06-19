import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { CustomReveal } from "./CustomReveal";
import { cn } from "../../utils/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

export function CustomSectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 max-w-2xl", className)}>
      <CustomReveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-violet" />
          {eyebrow}
        </span>
      </CustomReveal>
      <CustomReveal index={1}>
        <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </CustomReveal>
      {description ? (
        <CustomReveal index={2}>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        </CustomReveal>
      ) : null}
    </div>
  );
}

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function CustomSection({ id, children, className }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={cn(
        "mx-auto w-full max-w-6xl scroll-mt-28 px-4 py-20 sm:px-6 sm:py-28",
        className,
      )}
    >
      {children}
    </motion.section>
  );
}
