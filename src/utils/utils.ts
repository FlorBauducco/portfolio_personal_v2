import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// "2024 – 2026", "2026" (same year) or "2026 – Present" (end = null)
export function formatPeriod(start: number, end: number | null) {
  if (end === null) return `${start} – Present`;
  if (end === start) return `${start}`;
  return `${start} – ${end}`;
}
