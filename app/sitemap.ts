import type { MetadataRoute } from "next";
import { cabins } from "./data/mockupdata/cabins";

const SITE_URL = "https://greencabins.se";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ];

  const cabinRoutes: MetadataRoute.Sitemap = cabins.map((c) => ({
    url: `${SITE_URL}/cabins/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...cabinRoutes];
}
