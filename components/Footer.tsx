"use client";

import React, { useState } from "react";
import {
  UtensilsCrossed,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import { CHEF_INFO } from "@/data/chefData";

interface FooterProps {
  onOpenConciergePortal: () => void;
  onOpenBooking: () => void;
}

// Crisp inline SVGs for social media icons
function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer({
  onOpenConciergePortal,
  onOpenBooking,
}: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      return;
    }

    setIsSubscribing(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail }),
      });
      if (res.ok) {
        setNewsletterSuccess(true);
        setNewsletterEmail("");
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="bg-[#04120e] border-t border-[#144234] text-neutral-300 relative overflow-hidden">
      {/* Decorative top gold hairline */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Col 1: Brand & Bio (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#hero" className="inline-block group focus:outline-none" aria-label="Chef Zaved">
              <img
                src="/images/logo.png"
                alt="Chef Zaved"
                className="h-[2.5cm] sm:h-[3cm] w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_14px_rgba(212,175,55,0.45)]"
              />
            </a>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-sm">
              Dedicated to crafting culinary masterpieces, bespoke private dinners, and fine dining spectacles in prestigious residences across the globe.
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com/chef_zaved/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chef Zaved on Instagram"
                className="w-9 h-9 rounded-full bg-[#08241c] border border-[#144234] hover:border-[#d4af37] hover:text-[#d4af37] text-neutral-200 flex items-center justify-center transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/ChefZavedIslam"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chef Zaved on Facebook"
                className="w-9 h-9 rounded-full bg-[#08241c] border border-[#144234] hover:border-[#d4af37] hover:text-[#d4af37] text-neutral-200 flex items-center justify-center transition-all"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chef Zaved on YouTube"
                className="w-9 h-9 rounded-full bg-[#08241c] border border-[#144234] hover:border-[#d4af37] hover:text-[#d4af37] text-neutral-200 flex items-center justify-center transition-all"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chef Zaved on LinkedIn"
                className="w-9 h-9 rounded-full bg-[#08241c] border border-[#144234] hover:border-[#d4af37] hover:text-[#d4af37] text-neutral-200 flex items-center justify-center transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="hover:text-[#d4af37] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#d4af37] transition-colors">
                  About Chef Zaved
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d4af37] transition-colors">
                  Services Offered
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#d4af37] transition-colors">
                  Signature Repertoire
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#d4af37] transition-colors">
                  Client Reviews
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="hover:text-[#d4af37] text-left transition-colors"
                >
                  Book a Chef
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Global Presence (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-white">
              Private Concierge
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-neutral-200">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${CHEF_INFO.contact.email}`}
                  className="hover:text-[#d4af37] transition-colors"
                >
                  {CHEF_INFO.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <a
                  href={`tel:${CHEF_INFO.contact.phone.replace(/\D/g, "")}`}
                  className="hover:text-[#d4af37] transition-colors"
                >
                  {CHEF_INFO.contact.phone}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>{CHEF_INFO.contact.locations}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConciergePortal}
                className="inline-flex items-center gap-1.5 text-xs text-[#d4af37] hover:text-amber-200 transition-colors underline underline-offset-4"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Internal Concierge Reservation Portal</span>
              </button>
            </div>
          </div>

          {/* Col 4: Private Circle Newsletter (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-white">
              The Private Salon
            </h4>
            <p className="text-xs text-neutral-300">
              Receive confidential invitations to seasonal menu previews, rare truffle harvests, and private masterclasses.
            </p>

            {newsletterSuccess ? (
              <div className="p-3 rounded-xl bg-amber-500/10 border border-[#d4af37]/40 text-xs text-amber-200 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#d4af37]" />
                <span>Welcome to Chef Zaved&apos;s culinary circle.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter private email..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#061a14] border border-[#144234] focus:border-[#d4af37] text-white text-xs placeholder-neutral-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={isSubscribing}
                    className="absolute right-1 top-1 bottom-1 px-3 rounded-md bg-[#d4af37] text-black hover:bg-amber-300 transition-colors flex items-center justify-center text-xs"
                    title="Subscribe"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-neutral-400 block">
                  Discreet. Strictly zero spam.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Culinary Disclaimer */}
        <div className="mt-16 pt-8 border-t border-[#0d2f25] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>
            © 2026 Chef Zaved. All rights reserved. Registered domain at{" "}
            <span className="text-[#d4af37]">chefzaved.com</span>.
          </p>
          <div className="flex items-center gap-6">
            <span>Bespoke Fine Dining</span>
            <span>Private Aviation &amp; Yacht Charters</span>
            <span>Michelin Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
