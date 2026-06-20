import type { ComponentType, SVGProps } from "react";
import { Mail, Download, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { CustomSection } from "../../components/custom/CustomSection";
import { CustomReveal } from "../../components/custom/CustomReveal";
import { LinkedinIcon } from "../../components/icons/LinkedinIcon";
import { GithubIcon } from "../../components/icons/GithubIcon";

type Social = {
  label: string;
  handle: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const socials: Social[] = [
  {
    label: "LinkedIn",
    handle: "in/florencia-bauducco",
    href: "https://www.linkedin.com/in/florencia-bauducco/",
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    handle: "@Flor.bauducco",
    href: "https://github.com/FlorBauducco",
    icon: GithubIcon,
  },
  {
    label: "Email",
    handle: "florazul.fb@gmail.com",
    href: "florazul.fb@gmail.com",
    icon: Mail,
  },
];

export function Contact() {
  return (
    <CustomSection id="contact" className="pb-32">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 text-center sm:p-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.62_0.2_290/0.18),transparent_60%)]" />
        <div className="relative">
          <CustomReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-violet/30 bg-violet/10 px-4 py-1.5 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to Work
            </span>
          </CustomReveal>

          <CustomReveal index={1}>
            <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to Build and Learn
            </h2>
          </CustomReveal>

          <CustomReveal index={2}>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              I&apos;m looking for my next role as a Junior Fullstack Developer.
              If you think I&apos;d be a good fit, I&apos;d love to hear from
              you.
            </p>
          </CustomReveal>

          <CustomReveal index={3}>
            <a
              href="/cv-florencia-bauducco.pdf"
              download
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] glow-violet"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </CustomReveal>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {socials.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-secondary/40 p-4 text-left transition-all hover:-translate-y-0.5 hover:border-violet/40 hover:bg-secondary"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet/10 text-violet">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-sm font-semibold">{s.label}</span>
                      <span className="text-xs text-muted-foreground">
                        {s.handle}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-muted-foreground">
        Designed &amp; built by Florencia Bauducco · ©{" "}
        {new Date().getFullYear()}
      </p>
    </CustomSection>
  );
}
