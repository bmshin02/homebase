import { Logo } from "@/components/brand/logo";

// Phase 0 placeholder. The real landing page is Phase 1 (see plan.md).
export default function Home() {
  return (
    <>
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center px-4 py-4 sm:px-10">
          <Logo />
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center gap-6 px-4 py-16 sm:px-10">
        <p className="font-hand text-xl text-primary">moving out for the summer? ↓</p>
        <h1 className="max-w-3xl text-5xl leading-[1.05] font-semibold sm:text-6xl">
          Summer storage,{" "}
          <span className="shadow-[inset_0_-0.36em_0_var(--color-sun)]">
            five minutes
          </span>{" "}
          from campus
        </h1>
        <p className="max-w-xl text-lg leading-relaxed">
          Store your boxes, bike and mini fridge in a local host&apos;s garage
          or spare room. Cheaper than a storage unit, and close enough to walk
          to.
        </p>
        <p>
          <span className="inline-flex rounded-full bg-sun px-3 py-1 text-xs font-extrabold text-ink">
            Coming soon
          </span>
        </p>
      </main>

      <footer className="bg-primary-deep text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-8 text-sm sm:px-10">
          <span className="font-heading text-xl font-semibold text-sun">home base</span>
          <span>Student-to-household storage.</span>
        </div>
      </footer>
    </>
  );
}
