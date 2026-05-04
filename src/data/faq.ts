export type { SanityFaqItem as FaqItem } from "@/sanity/types";
export { getAllFaqItems } from "@/sanity/queries";

export type FaqCategory = "skilsmassa" | "vardnad" | "ekonomi" | "process" | "kostnader";

export const faqCategories: { id: FaqCategory | "alla"; label: string }[] = [
  { id: "alla", label: "Alla frågor" },
  { id: "skilsmassa", label: "Skilsmässa" },
  { id: "vardnad", label: "Vårdnad" },
  { id: "ekonomi", label: "Ekonomi & arv" },
  { id: "kostnader", label: "Kostnader" },
  { id: "process", label: "Processen" },
];
