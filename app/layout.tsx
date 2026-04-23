import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Chatbot from "./components/Chatbot";
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
  title: "GreenCabins — Swedish Forest Retreats",
  description: "Handpicked cabin retreats in the Swedish wilderness. Silence, stars, and running water.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${display.variable} ${body.variable}`}
        style={{ fontFamily: "var(--font-body), sans-serif" }}
      >
        <DataProvider>
          <Header />
          {children}
          <Chatbot />
        </DataProvider>
      </body>
    </html>
  );
}
