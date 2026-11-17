import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  AgreementDoodle,
  CalendarDoodle,
  CoinsDoodle,
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
} from "@/components/site/marketing";
import { FaqList } from "@/components/site/faq-list";
import { FAQ_GROUPS, HOST_FAQ_IDS } from "@/content/faq";
import mark from "@/assets/illustrations/mark.png";

export const metadata: Metadata = {
  title: "Become a host",
  description:
    "Earn money from your spare garage, basement, room or closet by storing college students' things over the summer.",
};

const SPACES = [
  { name: "Closet", size: "Small closet", fits: "A few boxes and a suitcase" },
  { name: "Spare room corner", size: "Half room", fits: "Boxes, suitcases and a mini fridge" },
  { name: "Basement or attic", size: "Full room", fits: "Several students' worth of boxes" },
  { name: "Garage bay", size: "Garage bay", fits: "Bikes, furniture and lots of boxes" },
];

const CONTROLS = [
  "Your monthly price",
  "The dates you're available",
  "Your access hours for drop-off and pick-up",
  "Your rules, like no perishables",
  "Which booking requests to accept",
];

const hostFaqs = FAQ_GROUPS.flatMap((group) => group.items).filter((item) =>
  HOST_FAQ_IDS.includes(item.id),
);

export default function HostPage() {
  return (
    <>
      <Container className="flex flex-wrap items-center gap-x-12 gap-y-8 pt-12 pb-16 sm:pt-16">
        <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-6">
          <Annotation>space you already have ↓</Annotation>
          <h1 className="text-[40px] leading-[1.05] font-semibold sm:text-[56px]">
            Your empty garage can <Highlight>pay for summer</Highlight>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed">
            Every May, students near you need somewhere to keep their things until fall. List a
            closet, spare room, basement or garage bay, set your price, and get paid. Listing is
            free.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex h-12 items-center rounded-full bg-primary-tint px-6 font-extrabold text-primary-pressed">
              Host sign-up opens soon
            </span>
            <Link href="/how-it-works#hosts" className={buttonVariants({ variant: "outline" })}>
              How hosting works
            </Link>
          </div>
        </div>
        <div className="flex min-w-0 flex-[1_1_300px] justify-center">
          <Image
            src={mark}
            alt="A yellow house with a heart, sitting in an open storage box"
            priority
            sizes="(min-width: 1024px) 340px, 70vw"
            className="h-auto w-full max-w-[340px]"
          />
        </div>
      </Container>

      <Section className="bg-card">
        <SectionHeading
          eyebrow="What works"
          title="Almost any dry, secure space"
          intro="Students mostly store boxes, suitcases, mini fridges and bikes. If it's dry and you won't need it this summer, it probably works."
        />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SPACES.map((space) => (
            <li key={space.name} className="flex flex-col gap-2 rounded-3xl bg-background p-6">
              <span className="inline-flex self-start rounded-full bg-sun px-2.5 py-1 text-xs font-extrabold text-ink">
                {space.size}
              </span>
              <h3 className="text-xl font-medium">{space.name}</h3>
              <p className="text-muted-foreground">{space.fits}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <SectionHeading eyebrow="You're in control" title="Your space, your terms" />
            <ul className="flex flex-col gap-3 text-lg">
              {CONTROLS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary">
                    <CheckIcon className="size-4 text-white" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <ul className="flex flex-col gap-8">
            <Feature icon={<ShieldDoodle />} title="Verified students">
              Every student signs up with a school email and completes an ID check.
            </Feature>
            <Feature icon={<AgreementDoodle />} title="A signed storage agreement">
              Dates, items, price, access and responsibilities, accepted by both of you.
            </Feature>
            <Feature icon={<StarDoodle />} title="Reviews before you accept">
              See how a student treated past hosts before you say yes.
            </Feature>
            <Feature icon={<CoinsDoodle />} title="Paid online">
              Students pay when they book and payouts go through Stripe. No cash, no chasing.
            </Feature>
            <Feature icon={<CalendarDoodle />} title="Only when it suits you">
              List for the summer, or just the weeks you choose.
            </Feature>
          </ul>
        </div>
      </Section>

      <Section id="host-faq" className="pt-0 sm:pt-0">
        <SectionHeading eyebrow="Questions" title="Hosting FAQ" className="mb-8" />
        <FaqList items={hostFaqs} />
      </Section>

      <CtaBand
        title="Ready when your neighbors move out"
        body="Host sign-up opens soon. In the meantime, see exactly how hosting works."
        primary={{ href: "/how-it-works#hosts", label: "How hosting works" }}
        secondary={{ href: "/faq", label: "All questions" }}
      />
    </>
  );
}
