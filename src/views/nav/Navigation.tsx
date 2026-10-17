import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import { navigationData } from "../../data/navigation.data";
import { useScroll } from "../../hooks/useScroll";
import { useHideOnScroll } from "../../hooks/useHideOnScroll";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { scrollToSection } from "../../utils/utils";
import { CustomLanguageSwitcher } from "../../components/custom/CustomLanguageSwitcher";

const ids = navigationData.map((n) => n.id);

export const Navigation = () => {
  const active = useScroll(ids);
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  // Keep the nav visible while the mobile menu is open
  const hidden = useHideOnScroll() && !open;

  const go = (id: string) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 md:top-4 left-0 right-0 z-50 bg-black/40 backdrop-blur-md md:bg-transparent md:backdrop-blur-none"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: hidden ? "-150%" : 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between md:justify-center h-16 md:h-20">
          <div className="hidden md:flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-3">
            {navigationData.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.id;

              return (
                <motion.button
                  key={item.id}
                  onClick={() => go(item.id)}
                  className={`relative p-2 rounded-lg transition-colors flex justify-center items-center gap-1 cursor-pointer ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={t(`nav.${item.id}`)}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-linear-to-r from-indigo-500/20 to-purple-500/20 rounded-lg"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <Icon width={20} height={20} className="relative z-10" />
                  <span className="text-xs ">{t(`nav.${item.id}`)}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Desktop language switcher: next to the pill on md, pinned to the right edge from lg */}
          <CustomLanguageSwitcher className="hidden md:block md:ml-3 lg:absolute lg:right-8 lg:top-1/2 lg:ml-0 lg:-translate-y-1/2 rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm" />

          {/* Mobile: menu button on the left, language switcher on the right */}
          <motion.button
            className="text-white md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
            whileTap={{ scale: 0.95 }}
          >
            <Menu size={24} />
          </motion.button>
          <CustomLanguageSwitcher className="md:hidden" />
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/10 bg-black/40 backdrop-blur-sm"
            >
              <div className="px-4 py-4 space-y-2">
                {navigationData.map((item) => {
                  const Icon = item.icon;
                  const isActive = active === item.id;

                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => go(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        isActive
                          ? "bg-linear-to-r from-indigo-500/20 to-purple-500/20 text-white"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon width={18} height={18} />
                      {t(`nav.${item.id}`)}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
