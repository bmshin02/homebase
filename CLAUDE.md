# CLAUDE.md

## Project

HomeBase is a peer-to-peer storage marketplace ("Airbnb for storage"). College students book short-term storage in local homeowners' spare space, mainly over the summer. HomeBase takes a fee on each booking.

- `plan.md` is the source of truth for features, data model, build phases, and open decisions. Read it before starting new work and update it when scope changes.
- `README.md` is the public overview.

## Status

Planning only. No app code yet. The next step is Phase 0 in `plan.md` (scaffold the app). Once it is scaffolded, add the real dev/build/test/lint commands to this file.

## Stack (planned)

- Next.js (App Router) + TypeScript
- Tailwind CSS + shadcn/ui
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
