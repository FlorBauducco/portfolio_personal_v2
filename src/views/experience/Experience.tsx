import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  CustomSection,
  CustomSectionHeading,
} from "../../components/custom/CustomSection";
import { experience } from "../../data/experience.data";
import { CustomTechChip } from "../../components/custom/CustomTechChip";
import { formatPeriod } from "../../utils/utils";

export function Experience() {
  const { t } = useTranslation();

  return (
    <CustomSection id="experience">
      <CustomSectionHeading
        eyebrow={t("experience.eyebrow")}
        title={t("experience.title")}
        description={t("experience.description")}
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
                  {t(`experience.items.${item.id}.role`)}
                </h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {formatPeriod(item.start, item.end, t("common.present"))}
                </span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-violet">
                {item.company}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t(`experience.items.${item.id}.description`)}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {item.tech?.map((tech) => (
                  <CustomTechChip key={tech} name={tech} />
                ))}
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </CustomSection>
  );
}
