import type { NextConfig } from "next";
import { cabins } from "./src/data/mockupdata/cabins";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return cabins.map((c) => ({
      source: `/cabins/${c.id}`,
      destination: `/cabins/${c.slug}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
