import Image from "next/image";
import Link from "next/link";
import { CheckIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  AgreementDoodle,
  BoxDoodle,
  BoxesDoodle,
  CalendarDoodle,
  CoinsDoodle,
  HouseDoodle,
  ListDoodle,
  LockDoodle,
  PinDoodle,
  ShieldDoodle,
  StarDoodle,
} from "@/components/brand/doodles";
import {
  Annotation,
  Container,
  CtaBand,
  Feature,
  Highlight,
  Section,
  SectionHeading,
  StepCard,
} from "@/components/site/marketing";
import handoff from "@/assets/illustrations/handoff.png";
import travel from "@/assets/illustrations/travel.png";

const TRUST_POINTS = [
  "ID-verified students and hosts",
  "Exact address only after booking",
  "Pay online, never in cash",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Container className="flex flex-wrap items-center gap-x-12 gap-y-8 pt-12 pb-16 sm:pt-16">
        <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-6">
          <Annotation>store smarter. travel lighter. ↓</Annotation>
          <h1 className="text-[40px] leading-[1.05] font-semibold sm:text-[56px]">
            Summer storage, <Highlight>five minutes</Highlight> from campus
          </h1>
          <p className="max-w-xl text-lg leading-relaxed">
            HomeBase connects students with neighbors who have a spare garage, basement or closet.
            Store your boxes, bike and mini fridge close by, and pay only for the weeks you&apos;re
            gone.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/how-it-works" className={buttonVariants()}>
              See how it works
            </Link>
            <Link href="/host" className={buttonVariants({ variant: "outline" })}>
              Become a host
            </Link>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-muted-foreground">
            {TRUST_POINTS.map((point) => (
              <li key={point} className="flex items-center gap-1.5">
                <CheckIcon className="size-4 text-primary" strokeWidth={3} aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex min-w-0 flex-[1_1_380px] justify-center">
          <Image
            src={handoff}
            alt="A student with a backpack hands a box to a smiling host"
            priority
            sizes="(min-width: 1024px) 460px, 90vw"
            className="h-auto w-full max-w-[460px]"
          />
        </div>
      </Container>

      {/* Problem */}
      <Section className="bg-card">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="The problem"
            title="Move-out shouldn't be your hardest final"
            intro="Finals end, the dorm closes, and suddenly you need somewhere to put a year of stuff."
          />
          <Image src={travel} alt="" className="hidden h-auto w-40 sm:block" />
        </div>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          <Feature icon={<CoinsDoodle />} title="Storage units are pricey">
            You pay for a whole unit, plus a truck to get your things there.
          </Feature>
          <Feature icon={<PinDoodle />} title="And far from campus">
            One more long trip, during the most stressful week of the semester.
          </Feature>
          <Feature icon={<BoxDoodle />} title="Shipping home isn't realistic">
            Especially for international and out-of-state students flying out.
          </Feature>
        </ul>
      </Section>

      {/* How it works */}
      <Section id="how">
        <SectionHeading
          eyebrow="How it works"
          title="Three steps, both sides"
          intro="Students find a space nearby. Hosts earn from space they already have."
        />
        <h3 className="mt-10 mb-5 text-2xl font-semibold">For students</h3>
        <ol className="grid gap-6 md:grid-cols-3">
          <StepCard headingLevel={4} step={1} icon={<ListDoodle />} title="List your stuff">
            Type what you&apos;re storing. Our AI estimates how much space you need.
          </StepCard>
          <StepCard headingLevel={4} step={2} icon={<PinDoodle />} title="Pick a space nearby">
            Compare hosts by distance, price and dates, and request to book.
          </StepCard>
          <StepCard headingLevel={4} step={3} icon={<BoxDoodle />} title="Drop it off">
            Get the address once you&apos;re confirmed. Pick everything up in the fall.
          </StepCard>
        </ol>
        <h3 className="mt-12 mb-5 text-2xl font-semibold">For hosts</h3>
        <ol className="grid gap-6 md:grid-cols-3">
          <StepCard headingLevel={4} step={1} icon={<HouseDoodle />} title="List your space">
            A closet, spare room, basement or garage bay. Listing is free.
          </StepCard>
          <StepCard headingLevel={4} step={2} icon={<CalendarDoodle />} title="Set your terms">
            You choose the price, the dates, your access hours and your rules.
          </StepCard>
          <StepCard headingLevel={4} step={3} icon={<CoinsDoodle />} title="Get paid">
            Accept the requests you like. Students pay online when they book.
          </StepCard>
        </ol>
        <Link
          href="/how-it-works"
          className={buttonVariants({ variant: "ghost", className: "mt-8 -ml-4" })}
        >
          The full walkthrough →
        </Link>
      </Section>

      {/* AI estimator teaser */}
      <Section className="pt-0 sm:pt-0">
        <div className="grid items-center gap-10 rounded-3xl bg-sun-tint p-7 sm:p-12 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <span className="text-[13px] font-extrabold tracking-wide text-ink uppercase">
              AI space estimator
            </span>
            <h2 className="text-[32px] leading-tight font-semibold sm:text-[40px]">
              Not sure how much space you need?
            </h2>
            <p className="text-lg leading-relaxed">
              Just list your things. HomeBase estimates the space, suggests how many boxes to pack,
              and shows you the spaces that fit.
            </p>
          </div>
          <figure className="flex flex-col gap-4 rounded-3xl bg-card p-6 shadow-float">
            <figcaption className="text-[13px] font-extrabold text-muted-foreground">EXAMPLE</figcaption>
            <p className="rounded-xl border border-input px-4 py-3 text-base">
              2 suitcases, mini fridge, 6 boxes, bike, desk chair
            </p>
            <div className="flex items-center gap-4">
              <BoxesDoodle className="size-16" />
              <div>
                <p className="text-[13px] font-extrabold">YOU NEED ABOUT A</p>
                <p className="font-heading text-[32px] leading-tight font-semibold text-primary">
                  Half room
                </p>
              </div>
            </div>
            <dl className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-background p-4">
                <dt className="text-sm text-muted-foreground">Floor space</dt>
                <dd className="font-heading text-2xl font-semibold text-primary">~60 sq ft</dd>
              </div>
              <div className="rounded-2xl bg-background p-4">
                <dt className="text-sm text-muted-foreground">Suggested boxes</dt>
                <dd className="font-heading text-2xl font-semibold text-primary">8</dd>
              </div>
            </dl>
          </figure>
        </div>
      </Section>

      {/* Trust */}
      <Section className="pt-0 sm:pt-0">
        <SectionHeading
          eyebrow="Trust built in"
          title="Safe for your stuff, and for their home"
        />
        <ul className="mt-10 grid gap-8 md:grid-cols-2">
          <Feature icon={<ShieldDoodle />} title="Verified on both sides">
            Students sign up with a school email, and everyone completes an ID check before a
            booking.
          </Feature>
          <Feature icon={<AgreementDoodle />} title="A clear storage agreement">
            Dates, items, price, access hours and responsibilities, accepted by both sides at
            booking.
          </Feature>
          <Feature icon={<StarDoodle />} title="Reviews in both directions">
            Students review hosts and hosts review students after every booking.
          </Feature>
          <Feature icon={<LockDoodle />} title="Privacy first">
            Listings show an approximate area. The exact address appears only after a booking is
            confirmed.
          </Feature>
        </ul>
      </Section>

      <CtaBand
        title="Flying home, interning away, or between leases?"
        body="Leave your things five minutes from campus, or turn your spare space into summer income."
        primary={{ href: "/host", label: "List your space" }}
        secondary={{ href: "/faq", label: "Read the FAQ" }}
      />
    </>
  );
}
