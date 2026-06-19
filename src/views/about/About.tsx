import { motion } from "framer-motion";
import {
  CustomSection,
  CustomSectionHeading,
} from "../../components/custom/CustomSection";
import { aboutCards } from "../../data/about.data";
import { cn } from "../../utils/utils";
import { accentIcon, accentRing } from "./lib/Index";

export const About = () => {
  return (
    <>
      <CustomSection id="about">
        <CustomSectionHeading
          eyebrow="About"
          title="A bit about me"
          description="I care about the craft, the people I build with, and shipping things that feel considered. Here's the short version."
        />

        <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aboutCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(
                  "group relative flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 transition-colors",
                  accentRing[card.accent],
                  card.span,
                )}
              >
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-xl",
                    accentIcon[card.accent],
                  )}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {card.title}
                </h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  {card.body}
                </p>
              </motion.article>
            );
          })}
        </div>
      </CustomSection>
    </>
  );
};
