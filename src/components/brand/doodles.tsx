import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/*
 * Hand-drawn style spot icons (DESIGN.md section 7): loose blue line work
 * with flat yellow fills. Decorative only, so they are hidden from screen
 * readers; the text next to them carries the meaning.
 */

type DoodleProps = Omit<ComponentProps<"svg">, "children">;

function Doodle({ className, children, ...props }: ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      stroke="var(--color-primary)"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("size-14 shrink-0", className)}
      {...props}
    >
      {children}
    </svg>
  );
}

const SUN = "var(--color-sun)";
const SUN_TINT = "var(--color-sun-tint)";
const CANVAS = "var(--color-background)";
const BLUE = "var(--color-primary)";

export function ListDoodle(props: DoodleProps) {
  return (
    <Doodle {...props}>
      <rect x="12" y="8" width="32" height="42" rx="4" fill={SUN_TINT} />
      <rect x="21" y="5" width="14" height="7" rx="2" fill={SUN} />
      <path d="M19 22h18M19 30h18M19 38h11" />
    </Doodle>
  );
}

export function PinDoodle(props: DoodleProps) {
  return (
    <Doodle {...props}>
      <path d="M28 6c-8 0-14 6-14 14 0 10 14 28 14 28s14-18 14-28c0-8-6-14-14-14z" fill={SUN} />
      <path d="M28 25l-4.5-4.4a2.8 2.8 0 0 1 4.5-3.4 2.8 2.8 0 0 1 4.5 3.4z" fill={CANVAS} />
      <path d="M8 50h40" />
    </Doodle>
  );
}

export function BoxDoodle(props: DoodleProps) {
  return (
    <Doodle {...props}>
      <path d="M10 22h36v26H10z" fill={BLUE} />
      <path d="M10 22l-6 8h14l6-8M46 22l6 8H38l-6-8" fill={CANVAS} />
      <path d="M28 22v26" stroke={CANVAS} />
      <path d="M22 10l2 5M34 10l-2 5M28 6v6" stroke={SUN} strokeWidth={2.6} />
    </Doodle>
  );
}

export function BoxesDoodle(props: DoodleProps) {
  return (
    <Doodle {...props}>
      <rect x="8" y="30" width="20" height="16" rx="2" fill={SUN} />
      <rect x="28" y="30" width="20" height="16" rx="2" fill="#fff" />
      <rect x="16" y="14" width="22" height="16" rx="2" fill="#fff" />
      <path d="M8 38h20M28 38h20M16 22h22" />
    </Doodle>
  );
}

export function HouseDoodle(props: DoodleProps) {
  return (
    <Doodle {...props}>
      <path d="M8 26L28 8l20 18v22H8z" fill={SUN} />
      <path d="M23 48V34h10v14" fill={CANVAS} />
      <path d="M38 12v8" />
    </Doodle>
  );
}

export function CalendarDoodle(props: DoodleProps) {
  return (
    <Doodle {...props}>
      <rect x="8" y="12" width="40" height="36" rx="5" fill="#fff" />
      <path d="M8 22h40" />
      <path d="M18 7v9M38 7v9" />
      <rect x="16" y="29" width="8" height="7" rx="1.5" fill={SUN} stroke="none" />
      <path d="M30 32h10M16 41h24" />
    </Doodle>
  );
}

export function ShieldDoodle(props: DoodleProps) {
  return (
    <Doodle {...props}>
      <path d="M28 6l18 7v13c0 11-8 19-18 24-10-5-18-13-18-24V13z" fill={SUN_TINT} />
      <path d="M20 28l6 6 11-12" strokeWidth={2.8} />
    </Doodle>
  );
}

export function AgreementDoodle(props: DoodleProps) {
  return (
    <Doodle {...props}>
      <path d="M14 6h22l8 8v36H14z" fill="#fff" />
      <path d="M36 6v8h8" />
      <path d="M20 22h18M20 29h18M20 36h9" />
      <path d="M30 44c3-5 5 2 8-2s3 1 5-1" stroke={SUN} strokeWidth={2.6} />
    </Doodle>
  );
}

export function StarDoodle(props: DoodleProps) {
  return (
    <Doodle {...props}>
      <path
        d="M28 7l6 13 14 2-10 10 2.5 14L28 39l-12.5 7L18 32 8 22l14-2z"
        fill={SUN}
      />
      <path d="M44 6l2-3M50 12l3-1" stroke={SUN} strokeWidth={2.6} />
    </Doodle>
  );
}

export function LockDoodle(props: DoodleProps) {
  return (
    <Doodle {...props}>
      <rect x="12" y="24" width="32" height="24" rx="5" fill={SUN} />
      <path d="M19 24v-6a9 9 0 0 1 18 0v6" />
      <path d="M28 33v6" />
    </Doodle>
  );
}

export function CoinsDoodle(props: DoodleProps) {
  return (
    <Doodle {...props}>
      <ellipse cx="22" cy="38" rx="13" ry="6" fill={SUN} />
      <path d="M9 38v6c0 3.3 5.8 6 13 6s13-2.7 13-6v-6" fill={SUN} />
      <ellipse cx="34" cy="20" rx="13" ry="6" fill="#fff" />
      <path d="M21 20v8c0 3.3 5.8 6 13 6s13-2.7 13-6v-8" />
    </Doodle>
  );
}

export function KeyDoodle(props: DoodleProps) {
  return (
    <Doodle {...props}>
      <circle cx="18" cy="28" r="9" fill={SUN} />
      <circle cx="18" cy="28" r="3" fill={CANVAS} />
      <path d="M27 28h21M42 28v7M48 28v5" />
    </Doodle>
  );
}
