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
  title: string;
  body: string;
  icon: LucideIcon;
  span: string;
  accent: "violet" | "blue" | "cyan";
  isLocation?: boolean;
}

export const aboutCards: AboutCard[] = [
  {
    id: "who",
    title: "Who I am",
    body: "I'm Florencia, a 27-year-old Junior Fullstack Developer based in Madrid. I made the leap into tech after discovering how much I love turning ideas into things people can actually use. Curious by nature, calm under pressure.",
    icon: Sparkles,
    span: "lg:col-span-2 lg:row-span-2",
    accent: "violet",
  },
  {
    id: "passion",
    title: "My passion for tech",
    body: "I genuinely enjoy the craft, clean code, thoughtful UX, and the small details that make a product feel right.",
    icon: Rocket,
    span: "lg:col-span-2",
    accent: "blue",
  },
  {
    id: "learning",
    title: "Currently learning",
    body: "Diving deeper into system design, testing, and how to build powerfull apps in the AI era. Always one tutorial ahead of comfortable.",
    icon: BookOpen,
    span: "",
    accent: "cyan",
  },
  {
    id: "goals",
    title: "Professional goals",
    body: "To join a team where I can grow into a well-rounded engineer and ship products that matter.",
    icon: Target,
    span: "",
    accent: "violet",
  },
  {
    id: "philosophy",
    title: "Work philosophy",
    body: "Communicate early, write code others can read, and treat feedback as a gift. Consistency beats intensity.",
    icon: Compass,
    span: "lg:col-span-2",
    accent: "blue",
  },
  {
    id: "fun",
    title: "Off the keyboard",
    body: "Bouldering, specialty argentinian mate, and far too many half-finished side projects.",
    icon: Coffee,
    span: "lg:col-span-2",
    accent: "cyan",
  },
];
