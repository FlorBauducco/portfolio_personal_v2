import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowUpRight, Code2 } from "lucide-react";
import {
  CustomSection,
  CustomSectionHeading,
} from "../../components/custom/CustomSection";
import { accentBar, accentGlow } from "../../utils/lib/Index";
import { cn } from "../../utils/utils";
import { projects, type Project } from "../../data/project.data";
import { ProjectModal } from "./ProjectModal";
import { CustomTechChip } from "../../components/custom/CustomTechChip";

export function Projects() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <CustomSection id="projects">
      <CustomSectionHeading
        eyebrow={t("projects.eyebrow")}
        title={t("projects.title")}
        description={t("projects.description")}
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.button
            key={project.id}
            type="button"
            onClick={() => setSelected(project)}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.55,
              delay: i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -6, scale: 1.01 }}
            className={cn(
              "group relative overflow-hidden rounded-2xl border border-border bg-card text-left transition-shadow cursor-pointer",
              accentGlow[project.accent],
            )}
            aria-label={t("projects.openDetails", { title: project.title })}
          >
            <span
              className={cn(
                "absolute inset-x-0 top-0 z-10 h-1",
                accentBar[project.accent],
              )}
            />
            <div className="relative aspect-16/10 w-full overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={t("projects.previewAlt", { title: project.title })}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent" />
            </div>

            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {project.year}
                </span>
              </div>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                {t(`projects.items.${project.id}.summary`)}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.slice(0, 4).map((tech) => (
                  <CustomTechChip key={tech} name={tech} />
                ))}
              </div>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1 font-medium text-foreground transition-colors group-hover:text-violet">
                  {t("projects.viewDetails")}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                {project.codeUrl && (
                  <Code2 className="h-4 w-4" aria-hidden="true" />
                )}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </CustomSection>
  );
}
