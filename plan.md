# HomeBase — Project Plan

> **HomeBase — Store smarter. Travel lighter.**
> A peer-to-peer marketplace that connects college students who need temporary storage with local homeowners who have unused space. Think Airbnb, but for storage.

---

## 1. Pitch

> Every summer, thousands of college students, both domestic and international, face the same problem: **where do we leave our belongings?**
>
> Traditional storage facilities are expensive, often far away, and inconvenient. Students shouldn't have to deal with these unnecessary financial and logistical burdens on top of their academic responsibilities.
>
> That's why we created **HomeBase**, a platform that connects students looking for affordable storage with local homeowners who have extra space and want to earn additional income.
>
> **Think of it as Airbnb, but for storage!** Through our peer-to-peer marketplace, students can find nearby storage options and pay only for the time they need.
>
> With HomeBase, you no longer have to worry about spending hundreds of dollars on summer storage. Whether you're traveling to Hawaii, heading home, or starting an internship, we've got your belongings covered.

> Imagine finishing your last final exam, packing your dorm room, and realizing you have nowhere to leave your belongings for the summer. Taking everything home may be impractical, and renting a storage unit adds another expense and another trip during an already stressful move.
>
> We chose this problem because students should be able to focus on finishing the semester and planning their next steps without scrambling to find a place for their things.

---

## 2. Problem

- At the end of each spring semester, students have to move out of dorms with nowhere nearby to keep their things.
- Shipping or carrying everything home is impractical, especially for international and out-of-state students.
- Storage units are expensive, often far from campus, and mean one more trip during an already stressful move-out.

## 3. Solution

A two-sided marketplace:

- **Students (renters)** search nearby listings, compare them, book storage for exactly the dates they need, and pay online.
- **Homeowners (hosts)** list unused space (garage, basement, spare room, closet), set a price and available dates, and earn income from space they already have.
- **HomeBase** takes a fee on each booking.

**Trust and safety:** identity verification, clear storage agreements, and two-way reviews.

**Launch strategy:** start with one campus, recruit hosts near it, then expand.

## 4. Target Market

- **Primary customer:** international and out-of-state college students who leave campus over the summer and need somewhere nearby to keep their belongings.
- **Secondary:** any student who is traveling, interning elsewhere, or between housing leases.
- **Supply side:** local homeowners and renters near campus with spare garage, basement, attic, or room space who want extra income.

---

## 5. Website Features

### 5.1 MVP (must have for the demo)

**Public / marketing**
- Landing page: hero with tagline, the problem, how it works (for students and for hosts), trust features, call to action.
- "Become a host" page.
- About / FAQ.

**Accounts**
- Sign up / log in with email (a `.edu` email check for students).
- Role choice: Student, Host, or both.
- Profile page with photo, school, and a "verified" badge.

**Listings (host side)**
- Create/edit a listing: title, description, photos, address (only an approximate location is shown publicly), space type (closet / room / garage / basement), size (sq ft and/or "fits ~N boxes"), price per month, available date range, rules (climate-controlled, access hours, no perishables, etc.).
- Host dashboard: my listings, incoming booking requests, earnings.

**Search & compare (student side)**
- Search by campus/location and dates.
- Filters: price, space size, space type, distance from campus, date availability.
- Results as a list plus a map view.
- Listing detail page: photos, details, host profile, reviews, price breakdown.

**AI features** (see §6)
- Space estimator: student enters a list of belongings, AI estimates the space they need.
- Recommendations: listings ranked by fit with that estimate, plus price, dates, and distance.

**Booking**
- Request to book → host accepts/declines.
- Storage agreement shown and accepted by both sides at booking (dates, items, price, access, liability terms).
- Payment at checkout with HomeBase's fee itemized (test mode for the demo).
- Student dashboard: upcoming/active/past bookings.

**Trust**
- Identity verification step (mocked for the demo; real provider later).
- Reviews and ratings after a booking ends, both directions.
- Basic messaging between student and host for a booking.

### 5.2 Later (post-MVP)
- Real ID verification (e.g. Stripe Identity).
- Photo check-in/check-out of stored items.
- Pickup/drop-off add-on (moving help).
- Item insurance / protection plan.
- Multi-campus expansion and campus ambassador program.
- AI listing helper for hosts (writes a description and suggests a price from photos and location).

---

## 6. How HomeBase Uses AI

1. **Space estimator.** The student types or pastes a list of belongings ("2 suitcases, mini fridge, 6 boxes, bike, desk chair"). An LLM returns a structured estimate: approximate cubic feet / sq ft, a size category (Small closet / Half room / Full room / Garage bay), and a suggested box count. Optional: estimate from photos.
2. **Listing recommendations.** Listings that fit the estimated space and the student's dates are ranked by fit, price, and distance, and the AI writes a short reason for each pick ("Fits your 6 boxes + bike, 0.8 mi from campus, under budget").
3. **(Later) Host listing assistant.** Writes the listing description and suggests a competitive price.
4. **(Later) Support/FAQ assistant.** Answers common questions about agreements, access, and policies.

Implementation: call the Claude API (`claude-sonnet-5-5` for estimation and recommendations) from a server route, with a fixed JSON output schema so the estimate can feed the filters directly. Never call it from the browser.

---

## 7. Tech Stack (proposed)

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js (App Router) + TypeScript** | One codebase for pages and API routes; easy to deploy |
| Styling | **Tailwind CSS** + shadcn/ui | Fast to build a clean, consistent UI |
| Auth + DB + file storage | **Supabase** (Postgres, Auth, Storage) | Free tier; email auth, row-level security, image uploads |
| Maps | **Mapbox** or Leaflet + OpenStreetMap | Map search view, distance from campus |
| Payments | **Stripe Connect** (test mode) | Marketplace payouts to hosts with a platform fee |
| AI | **Claude API** (Anthropic SDK) | Space estimator and recommendations |
| Hosting | **Vercel** | Free, zero-config Next.js deploys |

## 8. Data Model (first pass)

- **users**: id, name, email, role (student/host/both), school, avatar_url, verified (bool), created_at
- **listings**: id, host_id → users, title, description, space_type, size_sqft, capacity_boxes, price_per_month, address, lat, lng, available_from, available_to, rules, photos[], is_active
- **bookings**: id, listing_id, student_id, start_date, end_date, items_description, estimated_size, status (requested/accepted/declined/active/completed/cancelled), subtotal, platform_fee, total, agreement_accepted_at
- **reviews**: id, booking_id, author_id, target_id, rating (1–5), comment
- **messages**: id, booking_id, sender_id, body, created_at
- **space_estimates**: id, user_id, items_input, result_json, created_at

**Revenue model:** platform fee on each booking (start at ~10–15%, charged to the student, shown as its own line at checkout). Exact rate TBD.

## 9. Open Items / Decisions Needed

- **Launch campus:** which school do we demo with? (Affects map center, seed data, `.edu` domain.)
- **Pricing:** price per month vs. a flat summer price; exact platform fee %.
- **Liability:** what the storage agreement says about damage/loss; banned items list.
- **Demo vs. real:** confirm the website is a working prototype with seeded data and test payments, not a live business.

## 10. Build Phases

**Phase 0: Setup**
- Init Next.js + TypeScript + Tailwind, Supabase project, env vars, deploy an empty app to Vercel.
- Brand basics: name, tagline, colors, logo, fonts.

**Phase 1: Landing page**
- Landing, How it works, Become a host, FAQ. This alone is enough for the pitch presentation.

**Phase 2: Accounts & listings**
- Auth, profiles, roles.
- Host listing create/edit with photo upload.
- Seed ~15–20 realistic fake listings around the launch campus.

**Phase 3: Search & listing pages**
- Search with filters, list + map view, listing detail page.

**Phase 4: AI**
- Space estimator page/modal → structured result.
- Recommendations ranked by the estimate, with reasons.

**Phase 5: Booking & payments**
- Request/accept flow, storage agreement, Stripe Connect test checkout with the platform fee, dashboards.

**Phase 6: Trust**
- Mock ID verification + badge, reviews, booking messages.

**Phase 7: Polish & demo**
- Mobile responsiveness, empty/loading/error states, accessibility pass.
- A scripted demo path: student estimates space → gets recommendations → books → host accepts → review.

## 11. Success Criteria for the Demo

- A visitor understands the problem and the product from the landing page in under 30 seconds.
- A student can go from "list of my stuff" to a confirmed (test) booking in under 3 minutes.
- A host can create a listing with photos in under 5 minutes.
- The AI estimate gives a reasonable size for a typical dorm move-out list.
