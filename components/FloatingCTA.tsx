"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Calendar, ShoppingBag } from "lucide-react";

interface FloatingCTAProps {
  requestedDishesCount: number;
  onOpenBooking: () => void;
}

export default function FloatingCTA({
  requestedDishesCount,
  onOpenBooking,
}: FloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 animate-fadeIn">
      {/* Floating Inquiry CTA if dishes requested */}
      {requestedDishesCount > 0 && (
        <a
          href="#contact"
          className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa7c11] text-[#061a14] text-xs font-semibold uppercase tracking-wider shadow-2xl shadow-amber-500/30 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          <ShoppingBag className="w-4 h-4 text-[#061a14]" />
          <span>Inquire Dishes ({requestedDishesCount})</span>
        </a>
      )}

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top of page"
        className="w-11 h-11 rounded-full bg-[#0b2b22] border border-[#1d5c4b] hover:border-[#d4af37] text-neutral-200 hover:text-[#d4af37] shadow-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
}
