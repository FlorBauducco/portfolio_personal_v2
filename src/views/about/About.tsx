import { motion } from "framer-motion";
import {
  CustomSection,
  CustomSectionHeading,
} from "../../components/custom/CustomSection";
import { aboutCards } from "../../data/about.data";
import { cn } from "../../utils/utils";
import { accentIcon, accentRing } from "../../utils/lib/Index";

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

                {card.id === "who" && (
                  <div className="relative mt-auto overflow-hidden rounded-xl min-h-80">
                    <img
                      src="/image/mundi.png"
                      alt="Madrid map"
                      className="absolute inset-0 h-full w-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

                    <div className="absolute left-1/2 top-0 h-75 w-px bg-violet-500/40" />

                    <div className="absolute bottom-5 left-5 z-10">
                      <p className="text-xs font-medium uppercase tracking-widest text-violet-400">
                        Based in
                      </p>
                      <h4 className="text-lg font-bold tracking-tight text-white">
                        Madrid, Spain
                      </h4>
                      <p className="text-xs text-white/60">
                        40.4168° N · 3.7038° W · UTC+2
                      </p>
                    </div>
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </CustomSection>
    </>
  );
};
