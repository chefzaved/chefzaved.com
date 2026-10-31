"use client";

import React from "react";
import {
  UtensilsCrossed,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
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
  return (
    <footer className="bg-[#061a14] border-t border-[#144234] text-neutral-300 relative overflow-hidden">
      {/* Decorative top gold hairline */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Col 1: Brand & Bio (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3.5 sm:gap-5">
              <a
                href="/"
                onClick={(e) => {
                  if (window.location.pathname === "/") {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    if (window.location.hash) {
                      history.replaceState(null, "", "/");
                    }
                  }
                }}
                className="inline-block group focus:outline-none"
                aria-label="Chef Zaved"
              >
                <img
                  src="/images/logo.png"
                  alt="Chef Zaved"
                  className="h-10 sm:h-11 md:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)]"
                />
              </a>

              {/* Subtle Gold Divider Line */}
              <div
                className="w-px bg-gradient-to-b from-transparent via-[#d4af37]/45 to-transparent shrink-0"
                style={{ height: "2.4cm" }}
              />

              {/* Signature Logo Beside it - exactly 3cm as requested */}
              <div className="flex items-center">
                <img
                  src="/images/signature.png"
                  alt="Chef Zaved Signature Logo"
                  style={{ height: "3cm", width: "auto" }}
                  className="h-[3cm] w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(212,175,55,0.55)] transition-all duration-300 hover:scale-105"
                />
              </div>
            </div>

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
                href="https://www.linkedin.com/in/chef-zaved-islam-sekh-a20b33146/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chef Zaved on LinkedIn"
                className="w-9 h-9 rounded-full bg-[#08241c] border border-[#144234] hover:border-[#d4af37] hover:text-[#d4af37] text-neutral-200 flex items-center justify-center transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="/"
                  onClick={(e) => {
                    if (window.location.pathname === "/") {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      if (window.location.hash) {
                        history.replaceState(null, "", "/");
                      }
                    }
                  }}
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-[#d4af37] transition-colors">
                  About Chef Zaved
                </a>
              </li>
              <li>
                <a href="/#culinary-journey" className="hover:text-[#d4af37] transition-colors">
                  My Culinary Journey
                </a>
              </li>
              <li>
                <a href="/#menu" className="hover:text-[#d4af37] transition-colors">
                  Signature Repertoire
                </a>
              </li>
              <li>
                <a href="/#testimonials" className="hover:text-[#d4af37] transition-colors">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#d4af37] text-left transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Location (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
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
                <span>Contact Us & Reservation Desk</span>
              </button>
            </div>
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
