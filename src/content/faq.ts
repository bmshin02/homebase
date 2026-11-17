/*
 * FAQ copy, shared by /faq and /host.
 *
 * Answers marked DRAFT depend on open decisions in plan.md section 9
 * (pricing, liability, banned items, launch campus). Update them when the
 * team decides.
 */

export type FaqItem = { id: string; question: string; answer: string[] };
export type FaqGroup = { id: string; title: string; items: FaqItem[] };

export const FAQ_GROUPS: FaqGroup[] = [
  {
    id: "about",
    title: "About HomeBase",
    items: [
      {
        id: "what-is-homebase",
        question: "What is HomeBase?",
        answer: [
          "HomeBase connects college students who need somewhere to keep their things over the summer with people nearby who have spare space: a garage, a basement, a spare room or a closet.",
          "Think Airbnb, but for storage. Students pay only for the time they need, and hosts earn money from space they already have.",
        ],
      },
      {
        id: "why",
        question: "Why not just rent a storage unit?",
        answer: [
          "Storage units are often expensive, far from campus, and mean renting a truck during the most stressful week of the semester. A HomeBase host is usually a short walk or drive away, and you only pay for the space you actually need.",
        ],
      },
      {
        id: "where",
        question: "Where is HomeBase available?",
        answer: [
          "We're starting with one campus and recruiting hosts near it first, then expanding to more schools.",
        ],
      },
    ],
  },
  {
    id: "students",
    title: "For students",
    items: [
      {
        id: "how-much-space",
        question: "How do I know how much space I need?",
        answer: [
          "Type or paste a list of what you're storing, like \"2 suitcases, mini fridge, 6 boxes, bike\". Our AI space estimator turns it into a size (Small closet, Half room, Full room or Garage bay), the approximate floor space, and a suggested box count, then shows you spaces that fit.",
        ],
      },
      {
        id: "cost",
        question: "How much does it cost?",
        answer: [
          "Each host sets their own monthly price. At checkout you see the host's price plus a HomeBase service fee as its own line, so there are no surprises.",
        ],
      },
      {
        id: "address",
        question: "When do I get the exact address?",
        answer: [
          "Listings show only an approximate area. You get the exact address once your booking is confirmed, which keeps hosts' homes private.",
        ],
      },
      {
        id: "drop-off",
        question: "How do drop-off and pick-up work?",
        answer: [
          "After your booking is confirmed, you message your host to pick drop-off and pick-up times within their access hours. Bring your things packed and labeled, and you're done.",
        ],
      },
      {
        id: "not-allowed",
        question: "What can't I store?",
        answer: [
          "No food or anything perishable, nothing flammable or hazardous, and nothing illegal. Hosts can add their own rules, which you'll see on the listing and in the storage agreement.",
        ],
      },
      {
        id: "who-can-book",
        question: "Who can book?",
        answer: [
          "Students sign up with their school (.edu) email and complete a quick ID check before booking.",
        ],
      },
    ],
  },
  {
    id: "hosts",
    title: "For hosts",
    items: [
      {
        id: "what-space",
        question: "What kind of space can I list?",
        answer: [
          "Any dry, secure space you won't need over the summer: a closet, part of a spare room, a basement corner, an attic or a garage bay. Students mostly store boxes, suitcases, mini fridges and bikes.",
        ],
      },
      {
        id: "host-control",
        question: "What do I control as a host?",
        answer: [
          "Everything about your listing: the price, the dates it's available, your access hours, and your rules. You accept or decline each booking request.",
        ],
      },
      {
        id: "host-cost",
        question: "Does it cost anything to list?",
        answer: [
          "Listing is free. HomeBase's service fee is charged to the student at checkout.",
        ],
      },
      {
        id: "host-paid",
        question: "How do I get paid?",
        answer: [
          "Students pay online when they book, and payouts to hosts go through Stripe. You never have to handle cash.",
        ],
      },
      {
        id: "host-trust",
        question: "Who will be storing things at my place?",
        answer: [
          "Verified college students. Every student signs up with a school email and completes an ID check, and you can read reviews from their past bookings before you accept.",
        ],
      },
    ],
  },
  {
    id: "safety",
    title: "Safety & payments",
    items: [
      {
        id: "agreement",
        question: "What's in the storage agreement?",
        answer: [
          "Both the student and host accept a storage agreement when a booking is made. It spells out the dates, the items being stored, the price, access hours and who is responsible for what.",
        ],
      },
      {
        id: "damage",
        question: "What if something gets damaged or lost?",
        answer: [
          "The storage agreement sets out responsibility for loss and damage, and we're working on a protection plan. Until then, we recommend keeping irreplaceable valuables, cash and important documents with you.",
        ],
      },
      {
        id: "reviews",
        question: "How do reviews work?",
        answer: [
          "When a booking ends, the student and host review each other. Reviews show on profiles, so good hosts and good students stand out.",
        ],
      },
      {
        id: "payments-safe",
        question: "Is paying online safe?",
        answer: [
          "Payments are processed by Stripe; HomeBase never sees your card number. During our pilot, payments run in test mode.",
        ],
      },
    ],
  },
];

export const HOST_FAQ_IDS = ["what-space", "host-control", "host-cost", "host-paid", "host-trust"];
