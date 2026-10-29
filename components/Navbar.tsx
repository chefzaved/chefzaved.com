"use client";

import React, { useState, useEffect } from "react";
import { UtensilsCrossed, Calendar, Menu, X, Phone, ShieldCheck, ShoppingBag } from "lucide-react";

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
    { label: "Services", href: "#services" },
    { label: "Menu & Portfolio", href: "#menu" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#061a14]/92 backdrop-blur-md border-b border-[#d4af37]/25 shadow-2xl py-3"
            : "bg-gradient-to-b from-[#061a14]/95 via-[#061a14]/75 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              className="group flex items-center gap-3 focus:outline-none"
              aria-label="Chef Zaved Homepage"
            >
              <div className="relative flex items-center justify-center w-12 h-12 rounded-full border border-[#d4af37]/50 bg-[#0a231b] p-1.5 shadow-inner group-hover:border-[#d4af37] transition-all duration-300 group-hover:scale-105">
                <img
                  src="/images/logo.png"
                  alt="Chef Zaved Signature Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_1px_6px_rgba(212,175,55,0.4)]"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wider text-white group-hover:text-[#d4af37] transition-colors">
                  Chef Zaved
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#d4af37]/80 font-sans -mt-1 font-medium">
                  Haute Gastronomie
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium tracking-wide text-neutral-300 hover:text-[#d4af37] transition-colors relative py-1 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#d4af37] to-amber-200 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Requested Dishes Badge if any selected */}
              {requestedDishesCount > 0 && (
                <a
                  href="#booking"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-[#d4af37]/40 text-xs text-[#d4af37] hover:bg-amber-500/20 transition-all"
                  title="View your requested dishes in the booking form"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span className="font-medium">{requestedDishesCount} Dish{requestedDishesCount > 1 ? "es" : ""} Selected</span>
                </a>
              )}

              {/* Direct Concierge link */}
              <button
                onClick={onOpenConciergePortal}
                className="hidden xl:flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white px-2.5 py-1.5 rounded border border-[#144234] hover:border-[#d4af37]/50 bg-[#09241c]/50 transition-all"
                title="View concierge reservations portal"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Concierge Desk</span>
              </button>

              {/* Main "Book a Chef" CTA */}
              <button
                onClick={onOpenBooking}
                className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa7c11] rounded-full group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)]" />
                <span className="relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#061a14] group-hover:bg-[#0e3025] transition-colors text-xs font-semibold uppercase tracking-wider text-[#d4af37] group-hover:text-amber-200">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book a Chef</span>
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onOpenBooking}
                className="px-3 py-1.5 rounded-full bg-[#d4af37] text-black font-semibold text-xs tracking-wider uppercase"
              >
                Book
              </button>
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
          <nav className="flex flex-col gap-5 text-center mt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-xl text-neutral-200 hover:text-[#d4af37] py-2 border-b border-[#0d2f25] transition-colors"
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

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa7c11] text-black font-semibold tracking-wider uppercase text-sm shadow-lg shadow-amber-500/20"
            >
              Book a Chef
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConciergePortal();
              }}
              className="w-full py-2.5 rounded-lg border border-[#144234] bg-[#09241c] text-neutral-300 hover:text-white text-xs flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              <span>Concierge Desk & Reservations</span>
            </button>

            <div className="mt-4 pt-4 border-t border-[#0d2f25] text-center text-xs text-neutral-400">
              <p>Direct Inquiries:</p>
              <a href="tel:+18007942433" className="text-[#d4af37] font-medium flex items-center justify-center gap-1.5 mt-1">
                <Phone className="w-3.5 h-3.5" /> +1 (800) 794-CHEF
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
