import { motion } from "framer-motion";
import {
  CustomSection,
  CustomSectionHeading,
} from "../../components/custom/CustomSection";
import { experience } from "../../data/experience.data";

export function Experience() {
  return (
    <CustomSection id="experience">
      <CustomSectionHeading
        eyebrow="Experience"
        title="Building the Foundations"
        description="My path into tech hasn't been linear, but every step has helped me grow. From technical support to customer-facing roles and software development, I've built the resilience, collaboration, and analytical mindset that drive me as a developer."
      />

      <ol className="relative ml-3 border-l border-border">
        {experience.map((item, i) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.55,
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mb-8 pl-8 last:mb-0"
          >
            <span className="absolute -left-1.75 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-background bg-violet glow-violet" />
            <div className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-violet/30">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold tracking-tight">
                  {item.role}
                </h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {item.period}
                </span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-violet">
                {item.company}
              </p>
              <ul className="mt-3 space-y-1.5">
                {item.achievements.map((a) => (
                  <li
                    key={a}
                    className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                    {a}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {item.tech?.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-secondary/50 px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </CustomSection>
  );
}
