import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { GraduationCap, Award, BookOpen, Code2 } from "lucide-react";
import {
  CustomSection,
  CustomSectionHeading,
} from "../../components/custom/CustomSection";
import { education, type EducationItem } from "../../data/education.data";
import { formatPeriod } from "../../utils/utils";

const typeIcon: Record<EducationItem["type"], typeof GraduationCap> = {
  degree: GraduationCap,
  bootcamp: Code2,
  course: BookOpen,
  certification: Award,
};

export function Education() {
  const { t } = useTranslation();

  return (
    <CustomSection id="education">
      <CustomSectionHeading
        eyebrow={t("education.eyebrow")}
        title={t("education.title")}
        description={t("education.description")}
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
                      {t(`education.types.${item.type}`)}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {formatPeriod(item.start, item.end, t("common.present"))}
                    </span>
                  </div>

                  <h3 className="mt-2 text-base font-semibold tracking-tight">
                    {t(`education.items.${item.id}.title`)}
                  </h3>
                  <p className="text-sm font-medium text-blue">{item.org}</p>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {t(`education.items.${item.id}.description`)}
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
