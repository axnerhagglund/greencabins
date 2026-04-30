import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import DataProvider from "./components/DataProvider";

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
    default: "GreenCabins — Handpicked Forest Cabins in Sweden",
    template: "%s · GreenCabins",
  },
  description:
    "Rent independently-owned cabins in the Swedish wilderness. Silence, stars, and running water — each one visited in person before it goes online.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "GreenCabins — Handpicked Forest Cabins in Sweden",
    description:
      "Rent independently-owned cabins in the Swedish wilderness. Silence, stars, and running water.",
    url: "/",
    siteName: "GreenCabins",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GreenCabins — Handpicked Forest Cabins in Sweden",
    description:
      "Rent independently-owned cabins in the Swedish wilderness. Silence, stars, and running water.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable}`}
        style={{ fontFamily: "var(--font-body), sans-serif" }}
      >
        <DataProvider>
          <Header />
          {children}
        </DataProvider>
      </body>
    </html>
  );
}
