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
  metadataBase: new URL("https://chefzaved.com"),
  title: {
    default: "Chef Zaved | Haute Gastronomy & Bespoke Private Chef",
    template: "%s | Chef Zaved",
  },
  description:
    "Official website of Chef Zaved. 18+ years across Taj Group of Hotels, international boutique cruise fleets, and modern gastronomy. Bespoke private dining, exclusive supper clubs, and luxury culinary experiences in Kolkata, across India & internationally.",
  keywords: [
    "Chef Zaved",
    "Chef Zaved Kolkata",
    "Chef Zaved website",
    "chefzaved.com",
    "Private Chef Kolkata",
    "Luxury Private Chef",
    "Bespoke Dining Experiences",
    "Modern Gastronomy Chef",
    "Supper Club Kolkata",
    "Executive Chef Zaved",
    "Taj Group Chef Zaved",
    "Gourmet In-Home Dining",
    "Event Catering Kolkata",
  ],
  authors: [{ name: "Chef Zaved", url: "https://chefzaved.com" }],
  creator: "Chef Zaved",
  publisher: "Chef Zaved",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "Y6XAIdm4OUDf-UwnaAjXTqWm00FRg0bNAl53iPOEALQ",
  },
  openGraph: {
    title: "Chef Zaved | Haute Gastronomy & Bespoke Private Chef",
    description:
      "Bridging 18+ years across Taj Group of Hotels, luxury river cruises, and modern gastronomy. Exclusive private chef & bespoke dining experiences.",
    url: "https://chefzaved.com",
    siteName: "Chef Zaved",
    images: [
      {
        url: "/images/chef-about.jpg",
        width: 1200,
        height: 630,
        alt: "Chef Zaved - Master of Modern Gastronomy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chef Zaved | Haute Gastronomy & Bespoke Private Chef",
    description:
      "Bridging 18+ years across Taj Group of Hotels, luxury river cruises, and modern gastronomy.",
    images: ["/images/chef-about.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://chefzaved.com/#person",
      name: "Chef Zaved",
      jobTitle: "Executive Chef & Private Dining Specialist",
      url: "https://chefzaved.com",
      image: "https://chefzaved.com/images/chef-about.jpg",
      description:
        "Accomplished culinary professional with over 18 years of experience across luxury hospitality (Taj Group of Hotels, Araiya Hotels, Polo Towers) and international boutique river cruises (Uniworld, Avalon Waterways, Edelweiss).",
      sameAs: [
        "https://instagram.com/chefzaved",
        "https://facebook.com/chefzaved",
        "https://youtube.com/@chefzaved",
        "https://linkedin.com/in/chefzaved",
      ],
      knowsAbout: [
        "Haute Gastronomy",
        "Modern European Cuisine",
        "Royal Bengali Heritage Cuisine",
        "Awadhi Dum Pukht",
        "Bespoke Supper Clubs",
        "Private In-Home Dining",
        "Luxury Catering",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://chefzaved.com/#website",
      url: "https://chefzaved.com",
      name: "Chef Zaved",
      publisher: { "@id": "https://chefzaved.com/#person" },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://chefzaved.com/#business",
      name: "Chef Zaved - Haute Gastronomy & Private Dining",
      url: "https://chefzaved.com",
      logo: "https://chefzaved.com/images/logo.png",
      image: "https://chefzaved.com/images/chef-about.jpg",
      telephone: "+91 84200 08483",
      email: "enquire@chefzaved.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kolkata",
        addressRegion: "West Bengal",
        addressCountry: "IN",
      },
      priceRange: "$$$$",
    },
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#061a14] text-[#ededed] font-sans antialiased min-h-screen selection:bg-[#d4af37] selection:text-[#061a14]">
        {children}
      </body>
    </html>
  );
}
