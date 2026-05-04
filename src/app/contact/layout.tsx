import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Contact GreenCabins — Email, Phone, Post" },
  description:
    "Questions about a cabin or an unusual date range? Reach Elin & Ida directly by email, phone, or post. Replies within 24 hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact GreenCabins — Email, Phone, Post",
    description:
      "Reach Elin & Ida directly by email, phone, or post. Replies within 24 hours.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
