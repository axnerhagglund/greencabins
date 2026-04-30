import type { NextConfig } from "next";
import { cabins } from "./app/data/mockupdata/cabins";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
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
