"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
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
    name: "Grand Royal Bengali Bhoj",
    imageUrl: "/images/dishes/bengali-bhoj.jpg",
  },
  {
    id: "dish-2",
    name: "Pistachio-Crusted Herb Rack of Lamb",
    imageUrl: "/images/dishes/rack-of-lamb.jpg",
  },
  {
    id: "dish-3",
    name: "Classic Shorshe Ilish in Clay Handi",
    imageUrl: "/images/dishes/shorshe-ilish.jpg",
  },
  {
    id: "dish-4",
    name: "Pan-Seared Seabass on Potato Rosti",
    imageUrl: "/images/dishes/seabass-rosti.jpg",
  },
  {
    id: "dish-5",
    name: "Gold Daab Chingri Malai Curry",
    imageUrl: "/images/dishes/chingri-malai-curry.jpg",
  },
  {
    id: "dish-6",
    name: "Pan-Seared Duck Breast with Cherry Reduction",
    imageUrl: "/images/dishes/duck-breast.jpg",
  },
  {
    id: "dish-7",
    name: "Kolkata Kosha Mangsho",
    imageUrl: "/images/dishes/kosha-mangsho.jpg",
  },
  {
    id: "dish-8",
    name: "Scottish Salmon with Asparagus & Baby Potatoes",
    imageUrl: "/images/dishes/salmon-asparagus.jpg",
  },
  {
    id: "dish-9",
    name: "Artisanal Truffle & Sesame Fusion Sushi",
    imageUrl: "/images/dishes/fusion-sushi.jpg",
  },
  {
    id: "dish-10",
    name: "Steamed Beetroot & Edamame Crystal Dim Sum",
    imageUrl: "/images/dishes/dimsum-beetroot.jpg",
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
        {/* Fullscreen Background Dish Photography with Ambient Fill & Fitted Center Showcase */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {HERO_DISHES.map((dish, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={dish.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? "opacity-100 z-1" : "opacity-0 -z-10 pointer-events-none"
                }`}
              >
                {/* 1. Ambient Blurred Fill (eliminates empty borders and bathes screen in dish mood) */}
                <img
                  src={dish.imageUrl}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover filter blur-3xl scale-125 opacity-30 brightness-[0.55] contrast-[1.15] pointer-events-none"
                />
                <div className="absolute inset-0 bg-[#061a14]/40 pointer-events-none" />

                {/* 2. Main High-Definition Dish - 100% visible, fully fitted, never cropped */}
                <div className="relative w-full h-full flex items-center justify-center px-4 sm:px-12 lg:px-20 pt-24 sm:pt-28 pb-20 sm:pb-24">
                  <img
                    src={dish.imageUrl}
                    alt={dish.name}
                    className={`max-h-[68vh] sm:max-h-[74vh] max-w-[92vw] lg:max-w-[78vw] w-auto h-auto object-contain rounded-2xl shadow-[0_20px_70px_rgba(0,0,0,0.85)] border border-[#d4af37]/25 filter brightness-[0.98] contrast-[1.04] transition-all duration-700 ease-out ${
                      isActive ? "scale-100 opacity-100" : "scale-95 opacity-0"
                    }`}
                  />
                </div>
              </div>
            );
          })}

          {/* Minimal soft gradient vignettes at top and bottom */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#061a14]/90 via-[#061a14]/35 to-transparent pointer-events-none z-2" />
          <div className="absolute inset-x-0 bottom-0 h-36 sm:h-44 bg-gradient-to-t from-[#061a14]/95 via-[#061a14]/50 to-transparent pointer-events-none z-2" />
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
          {/* Left/Center: 10 Minimalist Progress Indicator Dots */}
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
