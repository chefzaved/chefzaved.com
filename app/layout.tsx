import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chef Zaved | Ultra-Premium Private Chef & Bespoke Fine Dining",
  description:
    "Experience bespoke fine dining, private in-home chef services, luxury event catering, and masterclasses by Chef Zaved. Crafting culinary masterpieces, one plate at a time.",
  keywords: [
    "Chef Zaved",
    "Private Chef",
    "Luxury Event Catering",
    "Fine Dining In Home",
    "Gourmet Masterclasses",
    "Bespoke Menus",
    "Michelin Experience",
  ],
  authors: [{ name: "Chef Zaved" }],
  openGraph: {
    title: "Chef Zaved | Ultra-Premium Private Chef Services",
    description: "Crafting Culinary Masterpieces, One Plate at a Time.",
    url: "https://chefzaved.com",
    siteName: "Chef Zaved Gastronomy",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} scroll-smooth dark`}
    >
      <body className="bg-[#061a14] text-[#ededed] font-sans antialiased min-h-screen selection:bg-[#d4af37] selection:text-black">
        {children}
      </body>
    </html>
  );
}
