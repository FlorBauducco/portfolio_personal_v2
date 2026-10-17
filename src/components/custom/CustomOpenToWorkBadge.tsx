import { useTranslation } from "react-i18next";
import { cn } from "../../utils/utils";

interface OpenToWorkBadgeProps {
  className?: string;
}

export function CustomOpenToWorkBadge({ className }: OpenToWorkBadgeProps) {
  const { t } = useTranslation();

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-violet/30 bg-violet/10 px-4 py-1.5 text-sm font-medium text-foreground",
        className,
      )}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>
      {t("common.openToWork")}
    </span>
  );
}
