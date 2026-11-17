import type { ReactNode } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Centered page-width container with the standard side gutters. */
export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-10", className)}>{children}</div>;
}

/** Marketing section with 72–96px vertical rhythm (DESIGN.md section 5). */
export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("scroll-mt-6 py-16 sm:py-20", className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex max-w-2xl flex-col gap-3", className)}>
      {eyebrow && (
        <span className="text-[13px] font-extrabold tracking-wide text-muted-foreground uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-[32px] leading-tight font-semibold sm:text-[40px]">{title}</h2>
      {intro && <p className="text-lg leading-relaxed">{intro}</p>}
    </div>
  );
}

/** Hand-drawn yellow marker swipe behind a word or two of a headline. */
export function Highlight({ children }: { children: ReactNode }) {
  return (
    <span className="box-decoration-clone shadow-[inset_0_-0.36em_0_var(--color-sun)]">
      {children}
    </span>
  );
}

/** Small handwritten annotation (Patrick Hand). Decorative copy only. */
export function Annotation({ className, children }: { className?: string; children: ReactNode }) {
  return <p className={cn("font-hand text-xl text-primary", className)}>{children}</p>;
}

/** Numbered step card with the playful "sticker" shadow (marketing only). */
export function StepCard({
  step,
  icon,
  title,
  headingLevel = 3,
  children,
}: {
  step: number;
  icon: ReactNode;
  title: string;
  headingLevel?: 3 | 4;
  children: ReactNode;
}) {
  const Heading = headingLevel === 4 ? "h4" : "h3";
  return (
    <li className="flex flex-col gap-3 rounded-3xl border-2 border-primary bg-card p-7 shadow-sticker">
      {icon}
      <span className="text-[13px] font-extrabold text-muted-foreground">STEP {step}</span>
      <Heading className="text-[22px] font-semibold">{title}</Heading>
      <div className="text-base leading-relaxed">{children}</div>
    </li>
  );
}

/** Icon + title + text row used for trust and feature lists. */
export function Feature({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <li className="flex gap-4">
      {icon}
      <div className="flex flex-col gap-1.5">
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="text-base leading-relaxed">{children}</p>
      </div>
    </li>
  );
}

type CtaLink = { href: string; label: string };

/** Closing call-to-action band on a dark blue background. */
export function CtaBand({
  title,
  body,
  primary,
  secondary,
}: {
  title: ReactNode;
  body: ReactNode;
  primary: CtaLink;
  secondary?: CtaLink;
}) {
  return (
    <section className="pb-16 sm:pb-20">
      <Container>
        <div className="flex flex-col items-start gap-5 rounded-3xl bg-primary px-7 py-12 text-white sm:px-12">
          <h2 className="max-w-2xl text-[32px] leading-tight font-semibold text-white sm:text-[40px]">
            {title}
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-white/90">{body}</p>
          <div className="flex flex-wrap gap-3">
            <Link href={primary.href} className={buttonVariants({ variant: "sun" })}>
              {primary.label}
            </Link>
            {secondary && (
              <Link
                href={secondary.href}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "border-white bg-transparent text-white hover:bg-white/10",
                )}
              >
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
