import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "@/styles/globals.css";
import { client } from "@/config/client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import DataProvider from "@/components/ui/DataProvider";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
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
    <html lang="en" className="h-full">
      <body
        className={`min-h-full flex flex-col ${display.variable} ${body.variable}`}
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
