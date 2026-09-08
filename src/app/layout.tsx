import type { Metadata } from "next";
import "./globals.css";
import MarketTicker from "@/components/layout/MarketTicker";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://tradersbphc.com"),
  title: "Traders @ BPHC | The Official Trading & Quant Finance Club",
  description:
    "Official website of Traders @ BPHC - Quantitative Finance, Algorithmic Trading, and Equity Valuation at BITS Pilani, Hyderabad Campus.",
  openGraph: {
    title: "Traders @ BPHC | The Official Trading & Quant Finance Club",
    description:
      "Official website of Traders @ BPHC - Quantitative Finance, Algorithmic Trading, and Equity Valuation at BITS Pilani, Hyderabad Campus.",
    url: "https://tradersbphc.com",
    siteName: "Traders @ BPHC",
    images: [
      {
        url: "/traders-logo.png",
        width: 800,
        height: 800,
        alt: "Traders @ BPHC Emblem",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/traders-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#0B0E14] text-zinc-100 min-h-screen flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-300 antialiased">
        <MarketTicker />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
