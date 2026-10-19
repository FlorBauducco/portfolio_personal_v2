import { FolderGit2, Mail, MapPin, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";
import { CustomOpenToWorkBadge } from "../../components/custom/CustomOpenToWorkBadge";
import { scrollToSection } from "../../utils/utils";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen w-full max-w-6xl scroll-mt-28 flex-col items-center justify-center px-4 pt-24 pb-32 text-center sm:px-6 sm:py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative mb-8"
      >
        <div className="relative h-28 w-28 overflow-hidden rounded-full border border-border glow-violet sm:h-42 sm:w-42 ">
          <img
            src="/avatar5.png"
            alt={t("hero.avatarAlt")}
            className="object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <CustomOpenToWorkBadge />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.18 }}
        className="mt-6 font-mono text-sm uppercase tracking-[0.25em] text-muted-foreground"
      >
        {t("hero.greeting")}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.24 }}
        className="mt-2 text-balance text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl"
      >
        <span className="text-gradient">Florencia Bauducco</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl"
      >
        <Trans
          i18nKey="hero.tagline"
          components={{
            highlight: <span className="font-semibold text-foreground" />,
          }}
        />
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.36 }}
        className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
      >
        <button
          type="button"
          onClick={() => scrollToSection("projects")}
          className="cursor-pointer group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] glow-violet"
        >
          <FolderGit2 className="h-4 w-4" />
          {t("hero.viewProjects")}
        </button>
        <button
          type="button"
          onClick={() => scrollToSection("contact")}
          className="cursor-pointer inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
        >
          <Mail className="h-4 w-4" />
          {t("hero.contactMe")}
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-8 flex items-center gap-1.5 text-sm text-muted-foreground"
      >
        <MapPin className="h-4 w-4" />
        {t("common.location")}
      </motion.div>

      <motion.button
        type="button"
        onClick={() => scrollToSection("about")}
        aria-label={t("hero.scrollToAbout")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 0.8, duration: 0.5 },
          y: { delay: 1, duration: 1.8, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-8 text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.button>
    </section>
  );
};
