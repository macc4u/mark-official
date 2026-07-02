import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LoadingScreen from "@/components/LoadingScreen";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mark Larga Official Website | Photographer & Digital Artist",
  description: "Premium photography portfolio, creative content, and digital art by Mark Larga. Explore stunning visuals and follow the journey.",
  keywords: "photography, portfolio, digital artist, content creator, Mark Larga",
  openGraph: {
    title: "Mark Larga Official Website",
    description: "World-class photography and creative work",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
