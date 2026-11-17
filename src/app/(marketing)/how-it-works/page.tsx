import type { Metadata } from "next";
import Image from "next/image";
import {
  AgreementDoodle,
  BoxDoodle,
  CalendarDoodle,
  CoinsDoodle,
  HouseDoodle,
  KeyDoodle,
  ListDoodle,
  PinDoodle,
} from "@/components/brand/doodles";
import {
  Annotation,
  Container,
  CtaBand,
  Highlight,
  Section,
  SectionHeading,
  StepCard,
} from "@/components/site/marketing";
import students from "@/assets/illustrations/students.png";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "How students book nearby summer storage on HomeBase, and how hosts earn from their spare space.",
};

export default function HowItWorksPage() {
  return (
    <>
      <Container className="flex flex-wrap items-end justify-between gap-8 pt-12 pb-4 sm:pt-16">
        <div className="flex max-w-2xl flex-col gap-5">
          <Annotation>no truck, no storage unit ↓</Annotation>
          <h1 className="text-[40px] leading-[1.05] font-semibold sm:text-[56px]">
            How <Highlight>HomeBase</Highlight> works
          </h1>
          <p className="text-lg leading-relaxed">
            Students book storage for exactly the weeks they&apos;re away. Hosts rent out space they
            already have. HomeBase handles matching, the agreement and payments.
          </p>
        </div>
        <Image src={students} alt="" className="h-auto w-48" />
      </Container>

      <Section id="students">
        <SectionHeading eyebrow="For students" title="From dorm room to stored, in four steps" />
        <ol className="mt-10 grid gap-6 md:grid-cols-2">
          <StepCard step={1} icon={<ListDoodle />} title="Tell us what you're storing">
            List your things, like &quot;2 suitcases, mini fridge, 6 boxes, bike&quot;. The AI space
            estimator gives you a size (Small closet, Half room, Full room or Garage bay), the floor
            space, and how many boxes to pack.
          </StepCard>
          <StepCard step={2} icon={<PinDoodle />} title="Find a space nearby">
            Search by campus and dates, then filter by price, size, space type and distance. We
            recommend the spaces that fit your stuff and tell you why.
          </StepCard>
          <StepCard step={3} icon={<AgreementDoodle />} title="Request to book and pay">
            Send a request. When the host accepts, you both accept the storage agreement and you
            pay online. The HomeBase service fee is its own line at checkout.
          </StepCard>
          <StepCard step={4} icon={<BoxDoodle />} title="Drop off, then pick up">
            You get the exact address once you&apos;re confirmed. Message your host to set drop-off
            and pick-up times within their access hours.
          </StepCard>
        </ol>
      </Section>

      <Section id="hosts" className="bg-card">
        <SectionHeading eyebrow="For hosts" title="Turn spare space into summer income" />
        <ol className="mt-10 grid gap-6 md:grid-cols-2">
          <StepCard step={1} icon={<HouseDoodle />} title="List your space">
            Add photos, the space type and size, and a short description. Your exact address stays
            private; students see only the general area.
          </StepCard>
          <StepCard step={2} icon={<CalendarDoodle />} title="Set your price and rules">
            Choose a monthly price, the dates you&apos;re available, your access hours and any
            rules, like no perishables.
          </StepCard>
          <StepCard step={3} icon={<KeyDoodle />} title="Accept the requests you like">
            See each student&apos;s verified profile and reviews, then accept or decline. Both of
            you accept the storage agreement.
          </StepCard>
          <StepCard step={4} icon={<CoinsDoodle />} title="Get paid">
            Students pay online when they book, and payouts go through Stripe. Listing is free.
          </StepCard>
        </ol>
      </Section>

      <Section>
        <SectionHeading eyebrow="Pricing" title="What it costs" />
        <dl className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="flex flex-col gap-2 rounded-3xl border border-border bg-card p-7">
            <dt className="font-heading text-xl font-medium text-primary">Hosts set the price</dt>
            <dd className="leading-relaxed">
              Each listing has a monthly price chosen by the host, so you can compare options side
              by side.
            </dd>
          </div>
          <div className="flex flex-col gap-2 rounded-3xl border border-border bg-card p-7">
            <dt className="font-heading text-xl font-medium text-primary">One service fee</dt>
            <dd className="leading-relaxed">
              Students pay a HomeBase service fee, shown as its own line at checkout before you pay.
            </dd>
          </div>
          <div className="flex flex-col gap-2 rounded-3xl border border-border bg-card p-7">
            <dt className="font-heading text-xl font-medium text-primary">Free to list</dt>
            <dd className="leading-relaxed">Hosts pay nothing to list a space.</dd>
          </div>
        </dl>
      </Section>

      <CtaBand
        title="Have a garage or spare room near campus?"
        body="List it for the summer and get paid by students who need it."
        primary={{ href: "/host", label: "Become a host" }}
        secondary={{ href: "/faq", label: "Read the FAQ" }}
      />
    </>
  );
}
