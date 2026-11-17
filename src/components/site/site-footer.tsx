import Link from "next/link";

const COLUMNS = [
  {
    title: "Students",
    links: [
      { href: "/how-it-works#students", label: "How it works" },
      { href: "/faq#students", label: "Student FAQ" },
    ],
  },
  {
    title: "Hosts",
    links: [
      { href: "/host", label: "Become a host" },
      { href: "/how-it-works#hosts", label: "Hosting, step by step" },
      { href: "/faq#hosts", label: "Host FAQ" },
    ],
  },
  {
    title: "HomeBase",
    links: [
      { href: "/faq#about", label: "About" },
      { href: "/faq#safety", label: "Safety & payments" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-primary-deep text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-10 px-4 py-12 sm:px-10">
        <div className="flex max-w-xs flex-col gap-2">
          <span className="font-heading text-3xl font-semibold text-sun">home base</span>
          <span className="text-[15px] leading-relaxed">
            Store smarter. Travel lighter. Student-to-household storage, close to campus.
          </span>
        </div>
        <div className="flex flex-wrap gap-x-14 gap-y-8 text-[15px]">
          {COLUMNS.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <span className="font-extrabold text-sun">{col.title}</span>
              {col.links.map((link) => (
                <Link key={link.href} href={link.href} className="text-white hover:underline">
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/15">
        <p className="mx-auto max-w-6xl px-4 py-5 text-sm text-white/80 sm:px-10">
          © HomeBase. A student project; payments run in test mode.
        </p>
      </div>
    </footer>
  );
}
