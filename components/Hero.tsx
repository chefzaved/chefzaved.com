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
  Flame,
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
    subtitle: "Black Garlic Mousseline • Charred King Oyster • 48h Bone Marrow Jus",
    badge: "Chef's Signature",
    imageUrl: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "dish-2",
    name: "Wild Brittany Turbot en Papillote",
    category: "Coastal Haute Cuisine",
    subtitle: "Sea Asparagus • Baby Chanterelles • Champagne Beurre Blanc",
    badge: "Line-Caught Catch",
    imageUrl: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "dish-3",
    name: "Truffle Saffron Risotto with Lobster",
    category: "Modern Italian Fusion",
    subtitle: "Acquerello 7Y Carnaroli • Butter-Poached Maine Lobster • Périgord Truffle",
    badge: "Artisanal Selection",
    imageUrl: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "dish-4",
    name: "Deconstructed Valrhona Gold Dome",
    category: "Theatrical Haute Pâtisserie",
    subtitle: "24K Edible Gold • Valrhona 70% Guanaja • Passionfruit Ganache",
    badge: "Sweet Finale",
    imageUrl: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "dish-5",
    name: "Artisanal Butter-Poached Lobster Tail",
    category: "Atlantic Grand Reserve",
    subtitle: "Imperial Saffron Bisque • Meyer Lemon Air • Micro Sea Succulents",
    badge: "Signature Seafood",
    imageUrl: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "dish-6",
    name: "Sous-Vide Duck Magret with Spiced Glaze",
    category: "Classic French Modernized",
    subtitle: "Applewood Embers • Green Cardamom & Morello Cherry Reduction • Celeriac",
    badge: "Seasonal Masterpiece",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "dish-7",
    name: "Heirloom Beetroot & Truffled Chèvre",
    category: "Garden Gastronomy",
    subtitle: "Salt-Baked Beets • French Goat Chèvre • Shaved Black Truffle • Honeycomb",
    badge: "Organic Farm-to-Table",
    imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "dish-8",
    name: "Royal Saffron Pistachio Kulfi Delice",
    category: "Heritage Awadhi Reimagined",
    subtitle: "Kashmiri Mongra Saffron • Bronte Pistachio • Rose Essence • Spun Gold Halo",
    badge: "Heritage Fusion",
    imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "dish-9",
    name: "Slow-Braised Canterbury Lamb Shank",
    category: "Slow-Crafted Epicurean",
    subtitle: "14-Hour Braised Lamb • Pomegranate Molasses • Saffron Polenta",
    badge: "Comfort Luxury",
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "dish-10",
    name: "Tiger Prawn Contemporary Fusion",
    category: "Indo-Continental Creation",
    subtitle: "Charred King Prawn • Spiced Coconut Emulsion • Crispy Curry Leaves",
    badge: "Supper Club Exclusive",
    imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1600&q=85",
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

  // Auto-advance every 4.5 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const currentDish = HERO_DISHES[currentIndex];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-32 sm:pt-36 pb-16 overflow-hidden bg-[#061a14]"
    >
      {/* Background with Ambient Dark Glow mirroring current dish */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle blurred active dish ambient glow in background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 filter blur-3xl scale-110 transition-all duration-1000 ease-out"
          style={{ backgroundImage: `url(${currentDish.imageUrl})` }}
        />
        {/* Layered cinematic forest green gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#061a14] via-[#061a14]/90 to-[#061a14]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061a14] via-[#061a14]/85 to-transparent" />
        {/* Center warm gold glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Gold Crest Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0a261e]/90 border border-[#d4af37]/40 shadow-lg shadow-black/40 mb-5 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-[#d4af37]" />
          <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
            Haute Gastronomie • 10 Signature Masterpieces
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
        </div>

        {/* Animated Authentic Dish Showcase Stage */}
        <div
          className="relative w-full max-w-4xl mx-auto group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Dish Frame */}
          <div className="relative h-[340px] sm:h-[420px] md:h-[470px] lg:h-[500px] w-full rounded-3xl overflow-hidden border-2 border-[#d4af37]/50 shadow-[0_20px_60px_rgba(0,0,0,0.85)] bg-[#072018]">
            {/* 10 Dish Images layered with smooth opacity crossfade */}
            {HERO_DISHES.map((dish, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div
                  key={dish.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <img
                    src={dish.imageUrl}
                    alt={dish.name}
                    className={`w-full h-full object-cover filter brightness-[0.92] ${
                      isActive ? "scale-105 transition-transform duration-[7000ms] ease-out" : "scale-100"
                    }`}
                  />
                  {/* Cinematic dark gradients for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04120e] via-[#04120e]/60 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#04120e]/60 via-transparent to-transparent" />
                </div>
              );
            })}

            {/* Floating Top Badge: Counter & Tag */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider bg-[#061a14]/85 text-[#d4af37] border border-[#d4af37]/40 backdrop-blur-md shadow-md">
                Dish {String(currentIndex + 1).padStart(2, "0")} / 10
              </span>
              <span className="hidden sm:inline-flex px-3 py-1.5 rounded-full text-[11px] font-medium tracking-wide bg-[#061a14]/75 text-neutral-200 border border-white/10 backdrop-blur-md">
                {currentDish.badge}
              </span>
            </div>

            {/* Left & Right Interactive Navigation Arrows */}
            <button
              onClick={prevSlide}
              aria-label="Previous dish"
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#061a14]/80 hover:bg-[#d4af37] text-white hover:text-black border border-[#d4af37]/40 hover:border-[#d4af37] flex items-center justify-center backdrop-blur-md shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next dish"
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#061a14]/80 hover:bg-[#d4af37] text-white hover:text-black border border-[#d4af37]/40 hover:border-[#d4af37] flex items-center justify-center backdrop-blur-md shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Bottom Dish Details Overlay */}
            <div className="absolute bottom-0 left-0 right-0 z-20 p-5 sm:p-8 md:p-10 text-left bg-gradient-to-t from-[#04120e] via-[#04120e]/90 to-transparent">
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold block">
                {currentDish.category}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mt-1 transition-all duration-500">
                {currentDish.name}
              </h2>
              <p className="mt-2 text-xs sm:text-sm md:text-base text-neutral-300 font-sans max-w-2xl leading-relaxed line-clamp-2 sm:line-clamp-none">
                {currentDish.subtitle}
              </p>
            </div>
          </div>

          {/* 10 Dots / Progress Indicator */}
          <div className="mt-4 flex items-center justify-center gap-1.5 sm:gap-2">
            {HERO_DISHES.map((dish, idx) => (
              <button
                key={dish.id}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to ${dish.name}`}
                className={`transition-all duration-300 rounded-full focus:outline-none ${
                  idx === currentIndex
                    ? "w-8 sm:w-10 h-2 sm:h-2.5 bg-gradient-to-r from-[#d4af37] to-[#fae8b4] shadow-[0_0_12px_rgba(212,175,55,0.7)]"
                    : "w-2 sm:w-2.5 h-2 sm:h-2.5 bg-[#144234] hover:bg-[#d4af37]/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Dual CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          {/* CTA 1: Book Private Dining */}
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider text-black bg-gradient-to-r from-[#f5df93] via-[#d4af37] to-[#ba8d28] hover:from-amber-200 hover:to-[#d4af37] transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-neutral-900 group-hover:scale-110 transition-transform" />
            <span>Book Private Dining</span>
          </button>

          {/* CTA 2: Explore Menu */}
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-medium text-sm uppercase tracking-wider text-neutral-100 bg-[#09241c]/80 hover:bg-[#0f382c] border border-[#1d5c4b] hover:border-[#d4af37]/60 hover:text-[#d4af37] transition-all duration-300 backdrop-blur-md transform hover:-translate-y-0.5"
          >
            <Utensils className="w-4 h-4 text-[#d4af37]" />
            <span>Explore Full Menu</span>
          </a>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-12 pt-8 border-t border-[#144234]/80 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 w-full max-w-4xl">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-serif font-bold text-white">
              <span className="text-[#d4af37]">{CHEF_INFO.experienceYears}+</span>
              <span className="text-sm font-sans font-normal text-neutral-400">Years</span>
            </div>
            <span className="text-xs text-neutral-400 mt-1 uppercase tracking-wider">
              Luxury Hospitality
            </span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-serif font-bold text-white">
              <span className="text-[#d4af37]">{CHEF_INFO.privateDinnersCount}</span>
            </div>
            <span className="text-xs text-neutral-400 mt-1 uppercase tracking-wider">
              Bespoke Dinners
            </span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-serif font-bold text-white">
              <span className="text-[#d4af37]">{CHEF_INFO.satisfactionRate}</span>
              <Star className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
            </div>
            <span className="text-xs text-neutral-400 mt-1 uppercase tracking-wider">
              5-Star VIP Rating
            </span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-serif font-bold text-white">
              <span className="text-[#d4af37]">100%</span>
            </div>
            <span className="text-xs text-neutral-400 mt-1 uppercase tracking-wider">
              Farm-To-Table Sourced
            </span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="mt-10 inline-flex flex-col items-center text-xs tracking-widest uppercase text-neutral-500 hover:text-[#d4af37] transition-colors"
        >
          <span className="mb-1 text-[10px]">Discover More</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#d4af37]" />
        </a>
      </div>
    </section>
  );
}
