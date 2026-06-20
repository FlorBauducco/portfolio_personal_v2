import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Code2 } from "lucide-react";
import {
  CustomSection,
  CustomSectionHeading,
} from "../../components/custom/CustomSection";
import { education, type EducationItem } from "../../data/education.data";

const typeIcon: Record<EducationItem["type"], typeof GraduationCap> = {
  Degree: GraduationCap,
  Bootcamp: Code2,
  Course: BookOpen,
  Certification: Award,
};

export function Education() {
  return (
    <CustomSection id="education">
      <CustomSectionHeading
        eyebrow="Education"
        title="Learning never stops"
        description="Formal studies in software development combined with continuous learning in modern web technologies."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {education.map((item, i) => {
          const Icon = typeIcon[item.type];
          return (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group rounded-2xl border border-border bg-card p-5 transition-colors hover:border-blue/30"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue/10 text-blue">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-border bg-secondary/50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                      {item.type}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="mt-2 text-base font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-blue">{item.org}</p>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </CustomSection>
  );
}
