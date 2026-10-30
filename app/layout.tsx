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
  title: "Chef Zaved",
  description:
    "Experience bespoke fine dining, private in-home chef services, luxury event catering, and masterclasses by Chef Zaved. Crafting culinary masterpieces, one plate at a time.",
  keywords: [
    "Chef Zaved",
    "Private Chef",
    "Event Catering",
    "Fine Dining In Home",
    "Gourmet Masterclasses",
    "Bespoke Menus",
  ],
  authors: [{ name: "Chef Zaved" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Chef Zaved",
    description: "Crafting Culinary Masterpieces, One Plate at a Time.",
    url: "https://chefzaved.com",
    siteName: "Chef Zaved",
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
      <body className="bg-[#061a14] text-[#ededed] font-sans antialiased min-h-screen selection:bg-[#d4af37] selection:text-[#061a14]">
        {children}
      </body>
    </html>
  );
}
