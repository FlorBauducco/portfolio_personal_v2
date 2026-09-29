import type { ComponentType, SVGProps } from "react";
import { Mail } from "lucide-react";
import { LinkedinIcon } from "../components/icons/LinkedinIcon";
import { GithubIcon } from "../components/icons/GithubIcon";

export interface Social {
  id: string;
  label: string;
  handle: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export const socials: Social[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "in/florencia-bauducco",
    href: "https://www.linkedin.com/in/florencia-bauducco/",
    icon: LinkedinIcon,
  },
  {
    id: "github",
    label: "GitHub",
    handle: "@Flor.bauducco",
    href: "https://github.com/FlorBauducco",
    icon: GithubIcon,
  },
  {
    id: "email",
    label: "Email",
    handle: "florazul.fb@gmail.com",
    href: "mailto:florazul.fb@gmail.com",
    icon: Mail,
  },
];
