import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UberRide - Go Anywhere, Anytime",
  description: "Your reliable ride is just a tap away. Book rides, deliveries, and more with UberRide - the world's leading ride-sharing platform.",
  keywords: "ride sharing, taxi, transportation, delivery, uber, rideshare",
  authors: [{ name: "UberRide" }],
  openGraph: {
    title: "UberRide - Go Anywhere, Anytime",
    description: "Your reliable ride is just a tap away. Book rides, deliveries, and more with UberRide.",
    type: "website",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}