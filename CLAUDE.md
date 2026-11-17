# CLAUDE.md

## Project

HomeBase is a peer-to-peer storage marketplace ("Airbnb for storage"). College students book short-term storage in local homeowners' spare space, mainly over the summer. HomeBase takes a fee on each booking.

- `plan.md` is the source of truth for features, data model, build phases, and open decisions. Read it before starting new work and update it when scope changes.
- `README.md` is the public overview.
- `DESIGN.md` is the design system (colors, type, components, do's and don'ts). Follow it for all UI work. Brand reference art is in `docs/brand/`.

## Status

Phase 1 (marketing pages) built: landing, how it works, become a host, FAQ. Deployed on Vercel (https://homebase-students.vercel.app; merges to `main` auto-deploy). Still open from Phase 0: create the Supabase project and add its env vars locally and in Vercel. Next is Phase 2 (accounts & listings).

## Commands

```bash
npm install          # install dependencies
npm run dev          # dev server at http://localhost:3000
npm run build        # production build
npm run lint         # ESLint
npm run typecheck    # TypeScript, no emit
```

No test runner yet; add Vitest when the first real logic lands (e.g. the estimator schema). Before calling work done, run `lint`, `typecheck` and `build`.

## Code layout

- `src/app/`: routes (App Router). `globals.css` holds the design tokens from `DESIGN.md`; `layout.tsx` loads the fonts.
- `src/components/ui/`: shadcn/ui components (restyled to HomeBase; `button.tsx` has the `sun` variant). Add more with `npx shadcn@latest add <name>`.
- `src/app/(marketing)/`: public pages (`/`, `/how-it-works`, `/host`, `/faq`) sharing the site header and footer.
- `src/components/brand/`: logo and hand-drawn `doodles.tsx` spot icons. `src/assets/illustrations/`: doodles cut from the logo concept art (transparent PNGs).
- `src/components/site/`: header, footer, FAQ accordion, and marketing building blocks (`Section`, `StepCard`, `Feature`, `CtaBand`, `Highlight`, `Annotation`).
- `src/content/faq.ts`: FAQ copy, used by `/faq` and `/host`.
- `src/lib/supabase/`: `client.ts` (browser) and `server.ts` (server-only) Supabase clients.
- `.env.example`: every env var the app uses. Copy to `.env.local`.

## Stack

- Next.js 16 (App Router, Turbopack) + TypeScript. This version differs from older Next.js; read `node_modules/next/dist/docs/` before writing Next-specific code (see `AGENTS.md`). Middleware is now called a proxy.
- Tailwind CSS v4 + shadcn/ui (Base UI primitives). Use tokens like `bg-primary`, `bg-sun`, `text-ink`, `bg-primary-tint`, `font-heading`, `font-hand`, `shadow-float`, never raw hex in components.
- Supabase: Postgres, Auth, Storage
- Stripe Connect in test mode (booking payments + platform fee)
- Claude API for the space estimator and listing recommendations
- Mapbox or Leaflet for maps
- Vercel for hosting

## Conventions

- **Git:** never add `Co-Authored-By` trailers or any AI attribution to commit messages or PR descriptions. The user is the only author.
- Don't push straight to `main` unless asked; use a branch.
- **AI calls:** call the Claude API only from server routes, never from the browser. Keep the API key in env vars, never in code. Ask the model for a fixed JSON schema so estimates can feed search filters directly.
- **Privacy:** show only an approximate location for listings publicly; reveal the exact address only after a booking is confirmed.
- **Demo data:** payments stay in Stripe test mode and ID verification is mocked until the team decides otherwise.
