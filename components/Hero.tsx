"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Utensils,
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Star,
  Sparkles,
} from "lucide-react";
import { CHEF_INFO } from "@/data/chefData";

interface HeroProps {
  onOpenBooking: () => void;
}

const HERO_DISHES = [
  {
    id: "dish-1",
    name: "Miyazaki Wagyu A5 Striploin",
    category: "Ultra-Reserve Prime Cut",
    subtitle: "Binchotan Charcoal-Seared • Black Garlic Mousseline • 48h Bone Marrow Jus",
    badge: "Chef's Signature",
    imageUrl: "/images/hero/hero-1.jpg",
  },
  {
    id: "dish-2",
    name: "Butter-Poached Maine Lobster Tail",
    category: "Atlantic Grand Reserve",
    subtitle: "Slow-Poached Coldwater Tail • Imperial Saffron Bisque • Meyer Lemon Air",
    badge: "Ocean Harvest",
    imageUrl: "/images/hero/hero-2.jpg",
  },
  {
    id: "dish-3",
    name: "Wild Brittany Turbot en Papillote",
    category: "Coastal Haute Cuisine",
    subtitle: "Line-Caught Turbot • Sea Asparagus • Chanterelles • Champagne Beurre Blanc",
    badge: "Michelin Technique",
    imageUrl: "/images/hero/hero-3.jpg",
  },
  {
    id: "dish-4",
    name: "Pan-Seared Hokkaido Scallops",
    category: "Artisanal Seafood Delicacy",
    subtitle: "Caramelized Diver Scallops • Saffron Cauliflower Velouté • Crispy Pancetta Dust",
    badge: "Artisanal Selection",
    imageUrl: "/images/hero/hero-4.jpg",
  },
  {
    id: "dish-5",
    name: "Charred Tandoori Tiger Prawns",
    category: "Modern Indo-Continental Fusion",
    subtitle: "Jumbo Wild Tiger Prawns • Spiced Coconut Emulsion • Curry Leaf Tempering",
    badge: "Supper Club Exclusive",
    imageUrl: "/images/hero/hero-5.jpg",
  },
  {
    id: "dish-6",
    name: "Deconstructed Valrhona Gold Dome",
    category: "Theatrical Haute Pâtisserie",
    subtitle: "24K Edible Gold Leaf • Valrhona 70% Guanaja • Passionfruit Coulis • Hazelnut Praline",
    badge: "Theatrical Plating",
    imageUrl: "/images/hero/hero-6.jpg",
  },
  {
    id: "dish-7",
    name: "Binchotan Grilled Prime Ribeye",
    category: "Wood-Fired Epicurean Cut",
    subtitle: "45-Day Dry-Aged Beef • Black Truffle Butter • Confit Shallot • Smoked Sea Salt",
    badge: "Private Dining Choice",
    imageUrl: "/images/hero/hero-7.jpg",
  },
  {
    id: "dish-8",
    name: "Truffle Saffron Risotto & Tagliolini",
    category: "Modern Italian Gastronomy",
    subtitle: "Acquerello 7Y Carnaroli • Shaved Périgord Black Truffle • 36-Month Parmigiano",
    badge: "Heritage Fusion",
    imageUrl: "/images/hero/hero-8.jpg",
  },
  {
    id: "dish-9",
    name: "Artisanal Hamachi & Otoro Crudo",
    category: "Cold Larder Masterpiece",
    subtitle: "Sashimi-Grade Bluefin Otoro • Yuzu Kosho Vinaigrette • Finger Lime • Micro Shiso",
    badge: "Chef's Tasting Reserve",
    imageUrl: "/images/hero/hero-9.jpg",
  },
  {
    id: "dish-10",
    name: "Royal Chef's Table Degustation",
    category: "Multi-Course Tasting Spectacle",
    subtitle: "Curated Seasonal Journey • Bespoke Pairings • Interactive Live Culinary Artistry",
    badge: "Signature Experience",
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
      {/* 100vh Full-Bleed Edge-to-Edge Hero (Inspired by atulkochhar.com) */}
      <section
        id="hero"
        className="relative h-screen min-h-[640px] max-h-[1080px] w-full flex flex-col justify-end overflow-hidden bg-[#04120e]"
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
                  className={`w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05] ${
                    isActive ? "scale-105 transition-transform duration-[7000ms] ease-out" : "scale-100"
                  }`}
                />
              </div>
            );
          })}

          {/* Minimal, soft gradient overlays: top for navbar legibility, bottom for dish title */}
          <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#04120e]/85 via-[#04120e]/40 to-transparent pointer-events-none z-2" />
          <div className="absolute inset-x-0 bottom-0 h-[480px] sm:h-[420px] bg-gradient-to-t from-[#04120e] via-[#04120e]/75 to-transparent pointer-events-none z-2" />
        </div>

        {/* Floating Side Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous dish"
          className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#04120e]/60 hover:bg-[#d4af37] text-white hover:text-[#04120e] border border-[#d4af37]/40 hover:border-[#d4af37] items-center justify-center backdrop-blur-md shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next dish"
          className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#04120e]/60 hover:bg-[#d4af37] text-white hover:text-[#04120e] border border-[#d4af37]/40 hover:border-[#d4af37] items-center justify-center backdrop-blur-md shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Hero Bottom Content Overlay (Clean, Elegant, Uncluttered) */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-8 sm:pb-12">
          {/* Subtle Top Counter Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#04120e]/80 border border-[#d4af37]/50 shadow-lg mb-3 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Dish {String(currentIndex + 1).padStart(2, "0")} / 10 • {currentDish.badge}
            </span>
          </div>

          {/* Dish Category */}
          <div className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#fae8b4] font-medium block">
            {currentDish.category}
          </div>

          {/* Dish Name in Luxurious Playfair Serif Typography */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight mt-2 drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFDF5] via-[#fae8b4] to-[#d4af37]">
              {currentDish.name}
            </span>
          </h1>

          {/* Dish Subtitle / Key Luxury Ingredients */}
          <p className="mt-2 text-xs sm:text-sm md:text-base text-neutral-200 font-sans max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            {currentDish.subtitle}
          </p>

          {/* 10 Minimalist Progress Indicator Dots */}
          <div className="mt-5 flex items-center justify-center gap-1.5 sm:gap-2">
            {HERO_DISHES.map((dish, idx) => (
              <button
                key={dish.id}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`View dish ${idx + 1}: ${dish.name}`}
                className={`transition-all duration-300 rounded-full focus:outline-none cursor-pointer ${
                  idx === currentIndex
                    ? "w-7 sm:w-9 h-1.5 sm:h-2 bg-gradient-to-r from-[#d4af37] to-[#fae8b4] shadow-[0_0_12px_rgba(212,175,55,0.9)]"
                    : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/40 hover:bg-[#d4af37]/90"
                }`}
              />
            ))}
          </div>

          {/* Dual CTAs */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-wider text-[#04120e] bg-gradient-to-r from-[#f5df93] via-[#d4af37] to-[#ba8d28] hover:from-amber-200 hover:to-[#d4af37] transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#04120e]" />
              <span>Book Private Dining</span>
            </button>

            <a
              href="#menu"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 rounded-full font-medium text-xs sm:text-sm uppercase tracking-wider text-neutral-100 bg-[#04120e]/80 hover:bg-[#0b2b22] border border-[#d4af37]/60 hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-300 backdrop-blur-md transform hover:-translate-y-0.5"
            >
              <Utensils className="w-4 h-4 text-[#d4af37]" />
              <span>Explore Full Menu</span>
            </a>
          </div>

          {/* Down Chevron indicator pointing to rest of site */}
          <div className="mt-5">
            <a
              href="#credentials"
              aria-label="Scroll down to explore Chef Zaved"
              className="inline-flex flex-col items-center text-[10px] tracking-widest uppercase text-neutral-400 hover:text-[#d4af37] transition-colors"
            >
              <span className="mb-0.5">Explore Portfolio</span>
              <ChevronDown className="w-4 h-4 animate-bounce text-[#d4af37]" />
            </a>
          </div>
        </div>
      </section>

      {/* Prestige Credentials & Trust Ribbon (Placed immediately below the 100vh Hero) */}
      <section id="credentials" className="relative z-10 bg-[#04120e] border-y border-[#d4af37]/25 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#d4af37]/15">
            <div className="flex flex-col items-center pt-3 md:pt-0">
              <div className="flex items-center gap-1 text-2xl sm:text-3xl font-serif font-bold text-white">
                <span className="text-[#d4af37]">{CHEF_INFO.experienceYears}+</span>
                <span className="text-xs font-sans font-normal text-neutral-300">Years</span>
              </div>
              <span className="text-[11px] sm:text-xs text-neutral-300 mt-1 uppercase tracking-wider text-center">
                Luxury Hospitality
              </span>
            </div>

            <div className="flex flex-col items-center pt-3 md:pt-0 md:pl-6">
              <div className="flex items-center gap-1 text-2xl sm:text-3xl font-serif font-bold text-white">
                <span className="text-[#d4af37]">{CHEF_INFO.privateDinnersCount}</span>
              </div>
              <span className="text-[11px] sm:text-xs text-neutral-300 mt-1 uppercase tracking-wider text-center">
                Bespoke Dinners
              </span>
            </div>

            <div className="flex flex-col items-center pt-3 md:pt-0 md:pl-6">
              <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-serif font-bold text-white">
                <span className="text-[#d4af37]">{CHEF_INFO.satisfactionRate}</span>
                <Star className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
              </div>
              <span className="text-[11px] sm:text-xs text-neutral-300 mt-1 uppercase tracking-wider text-center">
                5-Star VIP Rating
              </span>
            </div>

            <div className="flex flex-col items-center pt-3 md:pt-0 md:pl-6">
              <div className="flex items-center gap-1 text-2xl sm:text-3xl font-serif font-bold text-white">
                <span className="text-[#d4af37]">100%</span>
              </div>
              <span className="text-[11px] sm:text-xs text-neutral-300 mt-1 uppercase tracking-wider text-center">
                Farm-To-Table Sourced
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
