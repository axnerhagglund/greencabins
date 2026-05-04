import type { Metadata } from "next";
import { cabins } from "@/data/mockupdata/cabins";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cabin = cabins.find((c) => c.slug === slug);

  if (!cabin) {
    return {
      title: { absolute: "Cabin not found · GreenCabins" },
      robots: { index: false, follow: false },
    };
  }

  const priceLabel = cabin.pricePerNight.toLocaleString("sv");
  const title = `${cabin.name} — Swedish Forest Retreat | GreenCabins`;
  const description = `${cabin.bedrooms}-bedroom cabin, sleeps ${cabin.maxGuests}. Handpicked by GreenCabins — from ${priceLabel} kr / night. ${cabin.available ? "Available now." : "Currently unavailable."}`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `/cabins/${cabin.slug}` },
    openGraph: {
      title,
      description,
      url: `/cabins/${cabin.slug}`,
      type: "website",
      images: [{ url: cabin.imageUrl, alt: cabin.name }],
    },
  };
}

export default function CabinLayout({ children }: { children: React.ReactNode }) {
  return children;
}
