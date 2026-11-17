import type { Metadata } from "next";
import Link from "next/link";
import { Annotation, Container, CtaBand, Highlight, Section } from "@/components/site/marketing";
import { FaqList } from "@/components/site/faq-list";
import { FAQ_GROUPS } from "@/content/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about HomeBase: how student storage works, costs, safety, the storage agreement and hosting.",
};

export default function FaqPage() {
  return (
    <>
      <Container className="flex flex-col gap-5 pt-12 pb-4 sm:pt-16">
        <Annotation>good questions ↓</Annotation>
        <h1 className="text-[40px] leading-[1.05] font-semibold sm:text-[56px]">
          Questions, <Highlight>answered</Highlight>
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed">
          Everything about storing with HomeBase and hosting. Can&apos;t find your answer? Check{" "}
          <Link href="/how-it-works" className="font-bold text-primary underline underline-offset-4">
            how it works
          </Link>
          .
        </p>
        <nav aria-label="FAQ sections" className="flex flex-wrap gap-2 pt-2">
          {FAQ_GROUPS.map((group) => (
            <a
              key={group.id}
              href={`#${group.id}`}
              className="inline-flex min-h-10 items-center rounded-full border border-input bg-card px-4 text-sm font-bold text-ink hover:border-primary hover:bg-primary-tint hover:text-primary-pressed"
            >
              {group.title}
            </a>
          ))}
        </nav>
      </Container>

      {FAQ_GROUPS.map((group) => (
        <Section key={group.id} id={group.id} className="py-10 sm:py-12">
          <h2 className="mb-6 text-[28px] font-semibold sm:text-[32px]">{group.title}</h2>
          <FaqList items={group.items} />
        </Section>
      ))}

      <div className="pt-8" />
      <CtaBand
        title="Got a spare garage or closet?"
        body="Help a student out this summer and earn from space you already have."
        primary={{ href: "/host", label: "Become a host" }}
        secondary={{ href: "/how-it-works", label: "How it works" }}
      />
    </>
  );
}
