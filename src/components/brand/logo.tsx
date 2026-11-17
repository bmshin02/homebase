import { cn } from "@/lib/utils";

/**
 * HomeBase logo mark: a yellow house with a heart pin, sitting in an open
 * blue box (logo concept 3, docs/brand/logo-concept-3.png).
 * Simplified vector redraw; replace with final artwork when it exists.
 */
export function LogoMark({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("size-10 shrink-0", className)}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <rect x="41" y="13" width="6" height="11" rx="1" fill="#FFD100" stroke="#0064A4" strokeWidth="2.5" />
      <path d="M12 31 L32 12 L52 31 L52 46 L12 46 Z" fill="#FFD100" stroke="#0064A4" strokeWidth="2.5" strokeLinejoin="round" />
      <path
        d="M32 19 C27.6 19 24.5 22.2 24.5 26.3 C24.5 31.5 32 38 32 38 C32 38 39.5 31.5 39.5 26.3 C39.5 22.2 36.4 19 32 19 Z"
        fill="#FDF8F0"
        stroke="#0064A4"
        strokeWidth="2"
      />
      <path d="M32 31 L29 28 A1.9 1.9 0 0 1 32 25.4 A1.9 1.9 0 0 1 35 28 Z" fill="#FFD100" />
      <path d="M11 40 H53 L50.5 58 H13.5 Z" fill="#0064A4" stroke="#0064A4" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M11 40 L3 49 H16 L22 40 Z" fill="#FDF8F0" stroke="#0064A4" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M53 40 L61 49 H48 L42 40 Z" fill="#FDF8F0" stroke="#0064A4" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M32 41 V57" stroke="#FDF8F0" strokeWidth="2" />
    </svg>
  );
}

/** Horizontal lockup: mark + lowercase "home base" wordmark. */
export function Logo({
  className,
  showTagline = false,
}: {
  className?: string;
  showTagline?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="flex flex-col" aria-hidden="true">
        <span className="font-heading text-2xl leading-none font-semibold text-primary">
          home base
        </span>
        {showTagline && (
          <span className="mt-1 text-xs font-bold text-muted-foreground">
            student-to-household storage
          </span>
        )}
      </span>
      <span className="sr-only">HomeBase</span>
    </span>
  );
}
