import { useTranslation } from "react-i18next";
import { cn } from "../../utils/utils";

interface LanguageSwitcherProps {
  className?: string;
}

export function CustomLanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { t, i18n } = useTranslation();
  const isSpanish = i18n.resolvedLanguage === "es";

  return (
    <button
      type="button"
      onClick={() => i18n.changeLanguage(isSpanish ? "en" : "es")}
      aria-label={t("language.switch")}
      className={cn(
        "cursor-pointer rounded-lg px-2 py-1 font-mono text-xs text-gray-400 transition-colors hover:text-white",
        className,
      )}
    >
      <span className={cn(isSpanish && "font-bold text-white")}>ES</span>
      {" / "}
      <span className={cn(!isSpanish && "font-bold text-white")}>EN</span>
    </button>
  );
}
