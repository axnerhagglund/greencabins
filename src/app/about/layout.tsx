import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "About GreenCabins — Two Friends, Five Cabins" },
  description:
    "The story behind GreenCabins: why we keep the catalogue small, how we vet cabins in person, and what nature-first means for every stay we list.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About GreenCabins — Two Friends, Five Cabins",
    description:
      "Why we keep the catalogue small, how we vet cabins in person, and what nature-first means for every stay.",
    url: "/about",
    type: "website",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
