# HomeBase

**Store smarter. Travel lighter.**

HomeBase is a peer-to-peer marketplace that connects college students who need temporary storage with local homeowners who have unused space. Think Airbnb, but for storage.

## The problem

Every summer, students move out of their dorms with nowhere nearby to leave their things. Taking everything home is impractical, especially for international and out-of-state students. Storage units are expensive, often far from campus, and add one more trip to an already stressful move.

## How it works

**For students**
1. List what you need to store. HomeBase's AI estimates how much space it takes.
2. Compare nearby listings by location, price, space, and dates, with AI recommendations that fit your stuff.
3. Book for exactly the dates you need, accept the storage agreement, and pay online.

**For hosts**
1. List a spare garage, basement, room, or closet.
2. Set your price and available dates.
3. Accept bookings and earn income from space you already have.

**Trust built in:** identity verification, clear storage agreements, and reviews in both directions.

## Tech stack (planned)

- [Next.js](https://nextjs.org/) (App Router) + TypeScript
- Tailwind CSS + shadcn/ui
- Supabase (Postgres, Auth, Storage)
- Stripe Connect (test mode) for booking payments and the platform fee
- Claude API for the space estimator and listing recommendations
- Mapbox or Leaflet for map search
- Deployed on Vercel

## Project status

Planning. No app code yet. See [`plan.md`](./plan.md) for features, the data model, build phases, and open decisions.

## Getting started

Setup instructions will be added once the app is scaffolded (Phase 0 in `plan.md`).
