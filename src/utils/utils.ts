import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// "2024 – 2026", "2026" (same year) or "2026 – <presentLabel>" (end = null).
// presentLabel comes from the caller's t("common.present").
export function formatPeriod(
  start: number,
  end: number | null,
  presentLabel: string,
) {
  if (end === null) return `${start} – ${presentLabel}`;
  if (end === start) return `${start}`;
  return `${start} – ${end}`;
}
