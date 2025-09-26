import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "EaseMyCancer - Your Healing Ally | Holistic Cancer Support",
  description: "Complete support system for cancer patients and caregivers. Onco yoga, nutrition, emotional wellbeing, and psychological support. Evidence-based holistic care built by those who understand.",
  keywords: "cancer support, onco yoga, cancer nutrition, emotional wellbeing, cancer care, holistic healing, cancer rehabilitation",
  authors: [{ name: "EaseMyCancer Team" }],
  creator: "EaseMyCancer",
  publisher: "Easevia Integrative Solutions Pvt. Ltd.",
  robots: "index, follow",
  openGraph: {
    title: "EaseMyCancer - Your Healing Ally",
    description: "Complete support system for cancer patients and caregivers. Holistic care built by those who understand.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "EaseMyCancer - Your Healing Ally",
    description: "Complete support system for cancer patients and caregivers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
