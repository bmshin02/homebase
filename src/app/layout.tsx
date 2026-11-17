import type { Metadata } from "next";
import { Fredoka, Nunito, Patrick_Hand } from "next/font/google";
import "./globals.css";

// Fonts from DESIGN.md: Fredoka for headings, Nunito for everything else,
// Patrick Hand only for small decorative annotations.
const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const patrickHand = Patrick_Hand({
  variable: "--font-patrick-hand",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "HomeBase · Summer storage near campus",
    template: "%s · HomeBase",
  },
  description:
    "Student-to-household storage. Store your things in a local host's spare space, close to campus.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${nunito.variable} ${patrickHand.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
