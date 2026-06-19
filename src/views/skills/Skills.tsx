import { motion } from "framer-motion";
import {
  CustomSection,
  CustomSectionHeading,
} from "../../components/custom/CustomSection";
import { cn } from "../../utils/utils";
import { skillCategories } from "../../data/skills.data";
import { accentIcon } from "../../utils/lib/Index";

export function Skills() {
  return (
    <CustomSection id="skills">
      <CustomSectionHeading
        eyebrow="Skills"
        title="Tools & technologies"
        description="The stack I reach for, the environment I work in, and the apps that keep my days running."
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {skillCategories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                "rounded-2xl border border-border bg-card p-5 sm:p-6 w-full",
                cat.id === "stack" && "lg:col-span-2",
              )}
            >
              <div className="mb-5 flex items-center gap-3">
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-xl",
                    accentIcon[cat.accent],
                  )}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {cat.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => {
                  const SkillIcon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-2 rounded-xl border border-border bg-secondary/40 px-3 py-2 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-violet/40 hover:bg-secondary"
                    >
                      <SkillIcon
                        className="h-4.5 w-4.5 shrink-0 transition-transform group-hover:scale-110"
                        style={{ color: skill.color }}
                        aria-hidden="true"
                      />
                      <span className="text-muted-foreground transition-colors group-hover:text-foreground">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </CustomSection>
  );
}
