"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, XIcon } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/host", label: "Become a host" },
  { href: "/faq", label: "FAQ" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-6 px-4 sm:px-10">
        <Link href="/" aria-label="HomeBase home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-4 py-2.5 text-[15px] font-bold text-ink transition-colors hover:bg-primary-tint hover:text-primary-pressed",
                  active && "bg-primary-tint text-primary-pressed",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className={cn(buttonVariants({ variant: "ghost", size: "icon-sm" }), "md:hidden")}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <XIcon className="size-6" /> : <MenuIcon className="size-6" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="border-t border-border px-4 pt-2 pb-4 md:hidden"
        >
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center rounded-xl px-3 text-base font-bold text-ink hover:bg-primary-tint aria-[current=page]:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
