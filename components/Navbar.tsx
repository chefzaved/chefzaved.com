"use client";

import React, { useState, useEffect } from "react";
import { UtensilsCrossed, Calendar, Menu, X, Phone, ShieldCheck, ShoppingBag } from "lucide-react";
import { CHEF_INFO } from "@/data/chefData";

interface NavbarProps {
  requestedDishesCount: number;
  onOpenBooking: () => void;
  onOpenConciergePortal: () => void;
}

export default function Navbar({
  requestedDishesCount,
  onOpenBooking,
  onOpenConciergePortal,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About Chef", href: "#about" },
    { label: "My Journey", href: "#culinary-journey" },
    { label: "Signature Menu", href: "#menu" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#061a14]/94 backdrop-blur-md border-b border-[#d4af37]/25 shadow-2xl py-1.5 sm:py-2"
            : "bg-gradient-to-b from-[#061a14]/95 via-[#061a14]/80 to-transparent py-2 sm:py-3"
        }`}
      >
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              className="group flex items-center focus:outline-none"
              aria-label="Chef Zaved"
            >
              <img
                src="/images/logo.png"
                alt="Chef Zaved"
                className="h-[2.4cm] sm:h-[3cm] w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_14px_rgba(212,175,55,0.45)]"
              />
            </a>

            {/* Desktop Navigation Links - Premium Light Glass Button Style */}
            <nav className="hidden lg:flex items-center gap-2 xl:gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 xl:px-4.5 py-1.5 xl:py-2 rounded-full text-sm xl:text-[15px] font-medium tracking-wide text-[#FFFDF5] bg-[#D4AF37]/10 backdrop-blur-md border border-[#D4AF37]/70 shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:bg-[#D4AF37] hover:text-[#061a14] hover:border-[#D4AF37] hover:shadow-[0_0_18px_rgba(212,175,55,0.55)] hover:-translate-y-0.5 transition-all duration-300 ease-out font-sans"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Requested Dishes Badge if any selected */}
              {requestedDishesCount > 0 && (
                <a
                  href="#contact"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-[#d4af37]/40 text-xs text-[#d4af37] hover:bg-amber-500/20 transition-all"
                  title="View your requested dishes and contact chef"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span className="font-medium">{requestedDishesCount} Dish{requestedDishesCount > 1 ? "es" : ""} Selected</span>
                </a>
              )}

              {/* Direct Contact Us button */}
              <a
                href="#contact"
                className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#061a14] hover:text-[#061a14] px-5 py-2.5 rounded-full bg-gradient-to-r from-[#f5df93] via-[#d4af37] to-[#ba8d28] hover:from-amber-200 hover:to-[#d4af37] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
                title="Contact Chef Zaved"
              >
                <Phone className="w-3.5 h-3.5 text-[#061a14]" />
                <span>Contact Us</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href="#contact"
                className="px-3.5 py-1.5 rounded-full bg-[#d4af37] text-[#061a14] font-semibold text-xs tracking-wider uppercase inline-flex items-center gap-1"
              >
                <Phone className="w-3 h-3 text-[#061a14]" />
                <span>Contact</span>
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-[#0e3025] focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#061a14]/98 backdrop-blur-xl flex flex-col pt-24 px-6 pb-8 sm:hidden">
          <nav className="flex flex-col gap-3.5 text-center mt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-5 rounded-full text-base font-medium tracking-wide text-[#FFFDF5] bg-[#D4AF37]/12 border-[1.5px] border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#061a14] transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-8 flex flex-col gap-4">
            {requestedDishesCount > 0 && (
              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-amber-500/10 border border-[#d4af37]/40 text-sm text-[#d4af37]"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{requestedDishesCount} Dish{requestedDishesCount > 1 ? "es" : ""} Selected in Inquiry</span>
              </a>
            )}

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa7c11] text-[#061a14] font-semibold tracking-wider uppercase text-sm shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#061a14]" />
              <span>Contact Us</span>
            </a>

            <div className="mt-4 pt-4 border-t border-[#0d2f25] text-center text-xs text-neutral-400">
              <p>Direct Inquiries:</p>
              <a href={`tel:${CHEF_INFO.contact.phone.replace(/\D/g, "")}`} className="text-[#d4af37] font-medium flex items-center justify-center gap-1.5 mt-1">
                <Phone className="w-3.5 h-3.5" /> {CHEF_INFO.contact.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
