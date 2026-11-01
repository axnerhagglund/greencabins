import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "@/styles/globals.css";
import { client } from "@/config/client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import DataProvider from "@/components/ui/DataProvider";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://greencabins.se"),
  title: {
    default: client.seo.title,
    template: "%s · GreenCabins",
  },
  description: client.seo.description,
  keywords: [...client.seo.keywords],
  icons: { icon: client.favicon },
  alternates: { canonical: "/" },
  openGraph: {
    title: client.seo.title,
    description: client.seo.description,
    url: "/",
    siteName: "GreenCabins",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: client.seo.title,
    description: client.seo.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${outfit.variable}`}>
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-body), sans-serif" }}
      >
        <DataProvider>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <CookieBanner />
        </DataProvider>
      </body>
    </html>
  );
}
