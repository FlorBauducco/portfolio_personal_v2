import {
  Sparkles,
  Rocket,
  BookOpen,
  Target,
  Compass,
  Coffee,
  type LucideIcon,
} from "lucide-react";

export interface AboutCard {
  id: string;
  icon: LucideIcon;
  span: string;
  accent: "violet" | "blue" | "cyan";
}

export const aboutCards: AboutCard[] = [
  {
    id: "who",
    icon: Sparkles,
    span: "lg:col-span-2 lg:row-span-2",
    accent: "violet",
  },
  {
    id: "passion",
    icon: Rocket,
    span: "lg:col-span-2",
    accent: "blue",
  },
  {
    id: "learning",
    icon: BookOpen,
    span: "",
    accent: "cyan",
  },
  {
    id: "goals",
    icon: Target,
    span: "",
    accent: "violet",
  },
  {
    id: "philosophy",
    icon: Compass,
    span: "lg:col-span-2",
    accent: "blue",
  },
  {
    id: "fun",
    icon: Coffee,
    span: "lg:col-span-2",
    accent: "cyan",
  },
];
