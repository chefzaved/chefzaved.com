"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

const HERO_DISHES = [
  {
    id: "dish-1",
    name: "Miyazaki Wagyu A5 Striploin",
    imageUrl: "/images/hero/hero-1.jpg",
  },
  {
    id: "dish-2",
    name: "Butter-Poached Maine Lobster Tail",
    imageUrl: "/images/hero/hero-2.jpg",
  },
  {
    id: "dish-3",
    name: "Wild Brittany Turbot en Papillote",
    imageUrl: "/images/hero/hero-3.jpg",
  },
  {
    id: "dish-4",
    name: "Pan-Seared Hokkaido Scallops",
    imageUrl: "/images/hero/hero-4.jpg",
  },
  {
    id: "dish-5",
    name: "Charred Tandoori Tiger Prawns",
    imageUrl: "/images/hero/hero-5.jpg",
  },
  {
    id: "dish-6",
    name: "Deconstructed Valrhona Gold Dome",
    imageUrl: "/images/hero/hero-6.jpg",
  },
  {
    id: "dish-7",
    name: "Binchotan Grilled Prime Ribeye",
    imageUrl: "/images/hero/hero-7.jpg",
  },
  {
    id: "dish-8",
    name: "Truffle Saffron Risotto & Tagliolini",
    imageUrl: "/images/hero/hero-8.jpg",
  },
  {
    id: "dish-9",
    name: "Artisanal Hamachi & Otoro Crudo",
    imageUrl: "/images/hero/hero-9.jpg",
  },
  {
    id: "dish-10",
    name: "Royal Chef's Table Degustation",
    imageUrl: "/images/hero/hero-10.jpg",
  },
];

export default function Hero({ onOpenBooking }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_DISHES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + HERO_DISHES.length) % HERO_DISHES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const currentDish = HERO_DISHES[currentIndex];

  return (
    <>
      {/* 100vh Full-Bleed Edge-to-Edge Hero */}
      <section
        id="hero"
        className="relative h-screen min-h-[600px] max-h-[1080px] w-full flex flex-col justify-end overflow-hidden bg-[#061a14]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Fullscreen Background Dish Photography - VIBRANT & HIGH-DEFINITION */}
        <div className="absolute inset-0 z-0">
          {HERO_DISHES.map((dish, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={dish.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? "opacity-100 z-1" : "opacity-0 -z-10 pointer-events-none"
                }`}
              >
                <img
                  src={dish.imageUrl}
                  alt={dish.name}
                  className={`w-full h-full object-cover object-center filter brightness-[0.94] contrast-[1.04] ${
                    isActive ? "scale-105 transition-transform duration-[7000ms] ease-out" : "scale-100"
                  }`}
                />
              </div>
            );
          })}

          {/* Minimal soft gradient vignettes at top and bottom */}
          <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#061a14]/90 via-[#061a14]/35 to-transparent pointer-events-none z-2" />
          <div className="absolute inset-x-0 bottom-0 h-44 sm:h-52 bg-gradient-to-t from-[#061a14]/95 via-[#061a14]/50 to-transparent pointer-events-none z-2" />
        </div>

        {/* Floating Side Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous dish"
          className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#061a14]/70 hover:bg-[#d4af37] text-white hover:text-[#061a14] border border-[#d4af37]/40 hover:border-[#d4af37] items-center justify-center backdrop-blur-md shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next dish"
          className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#061a14]/70 hover:bg-[#d4af37] text-white hover:text-[#061a14] border border-[#d4af37]/40 hover:border-[#d4af37] items-center justify-center backdrop-blur-md shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Clean Hero Bottom Bar */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-7 sm:pb-9 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Left/Center: Booking CTA button & indicator dots */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full md:w-auto">
            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center">
              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-2.5 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-wider text-[#061a14] bg-gradient-to-r from-[#f5df93] via-[#d4af37] to-[#ba8d28] hover:from-amber-200 hover:to-[#d4af37] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5 text-[#061a14]" />
                <span>Book Private Dining</span>
              </button>
            </div>

            {/* 10 Minimalist Progress Indicator Dots */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {HERO_DISHES.map((dish, idx) => (
                <button
                  key={dish.id}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`View dish ${idx + 1}: ${dish.name}`}
                  className={`transition-all duration-300 rounded-full focus:outline-none cursor-pointer ${
                    idx === currentIndex
                      ? "w-6 sm:w-8 h-1.5 bg-gradient-to-r from-[#d4af37] to-[#fae8b4] shadow-[0_0_10px_rgba(212,175,55,0.9)]"
                      : "w-1.5 h-1.5 bg-white/40 hover:bg-[#d4af37]/90"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Side: JUST Dish Name (Small, sleek ~3cm luxury pill) */}
          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#061a14]/90 backdrop-blur-md border border-[#d4af37]/50 shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
              <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse shrink-0" />
              <span className="font-serif text-xs sm:text-sm lg:text-base font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#FFFDF5] via-[#fae8b4] to-[#d4af37]">
                {currentDish.name}
              </span>
            </div>
          </div>
        </div>

        {/* Down Chevron indicator pointing to rest of site */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-1.5 z-10 pointer-events-auto">
          <a
            href="#about"
            aria-label="Scroll down to explore Chef Zaved"
            className="inline-flex flex-col items-center text-[10px] tracking-widest uppercase text-neutral-400 hover:text-[#d4af37] transition-colors"
          >
            <ChevronDown className="w-4 h-4 animate-bounce text-[#d4af37]" />
          </a>
        </div>
      </section>
    </>
  );
}
