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
    imageUrl: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=2000&q=85",
  },
  {
    id: "dish-2",
    name: "Wild Brittany Turbot en Papillote",
    category: "Coastal Haute Cuisine",
    subtitle: "Line-Caught Turbot • Sea Asparagus • Baby Chanterelles • Champagne Beurre Blanc",
    badge: "Ocean Harvest",
    imageUrl: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=2000&q=85",
  },
  {
    id: "dish-3",
    name: "Truffle Saffron Risotto with Lobster",
    category: "Modern Italian Fusion",
    subtitle: "Acquerello 7Y Carnaroli • Butter-Poached Maine Lobster • Shaved Périgord Black Truffle",
    badge: "Artisanal Selection",
    imageUrl: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=2000&q=85",
  },
  {
    id: "dish-4",
    name: "Deconstructed Valrhona Gold Dome",
    category: "Theatrical Haute Pâtisserie",
    subtitle: "24K Edible Gold Leaf • Valrhona 70% Guanaja • Passionfruit Ganache • Hazelnut Praline",
    badge: "Theatrical Plating",
    imageUrl: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=2000&q=85",
  },
  {
    id: "dish-5",
    name: "Artisanal Butter-Poached Lobster Tail",
    category: "Atlantic Grand Reserve",
    subtitle: "Slow-Poached Coldwater Tail • Imperial Saffron Bisque • Meyer Lemon Air • Sea Succulents",
    badge: "Signature Seafood",
    imageUrl: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=2000&q=85",
  },
  {
    id: "dish-6",
    name: "Sous-Vide Duck Magret with Spiced Glaze",
    category: "Classic French Modernized",
    subtitle: "Applewood Embers • Green Cardamom & Morello Cherry Reduction • Celeriac Fondant",
    badge: "Seasonal Masterpiece",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=2000&q=85",
  },
  {
    id: "dish-7",
    name: "Heirloom Beetroot & Truffled Chèvre",
    category: "Garden Gastronomy",
    subtitle: "Salt-Baked Heritage Beets • Whipped French Goat Chèvre • Shaved Black Truffle • Wild Honeycomb",
    badge: "Farm-to-Table",
    imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=2000&q=85",
  },
  {
    id: "dish-8",
    name: "Royal Saffron Pistachio Kulfi Delice",
    category: "Heritage Awadhi Reimagined",
    subtitle: "Kashmiri Mongra Saffron • Bronte Sicilian Pistachio • Rose Water Pearls • Spun Gold Halo",
    badge: "Heritage Fusion",
    imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=2000&q=85",
  },
  {
    id: "dish-9",
    name: "Slow-Braised Canterbury Lamb Shank",
    category: "Slow-Crafted Epicurean",
    subtitle: "14-Hour Braised Free-Range Lamb • Pomegranate Molasses • Saffron Polenta • Crispy Mint",
    badge: "Comfort Luxury",
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=2000&q=85",
  },
  {
    id: "dish-10",
    name: "Tiger Prawn Contemporary Fusion",
    category: "Indo-Continental Creation",
    subtitle: "Charred King Prawn • Spiced Coconut Emulsion • Curry Leaf Tempering • Micro Greens",
    badge: "Supper Club Exclusive",
    imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=2000&q=85",
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
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-32 sm:pt-36 pb-12 overflow-hidden bg-[#061a14]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Fullscreen Edge-to-Edge Background Slideshow (Like atulkochhar.com) */}
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
                className={`w-full h-full object-cover object-center filter brightness-[0.75] ${
                  isActive ? "scale-105 transition-transform duration-[8000ms] ease-out" : "scale-100"
                }`}
              />
              {/* Layered cinematic overlays: dark emerald tint + gradient protection for crisp text */}
              <div className="absolute inset-0 bg-[#061a14]/60 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061a14] via-[#061a14]/45 to-[#061a14]/80" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#061a14]/90 via-[#061a14]/40 to-[#061a14]/90" />
            </div>
          );
        })}
      </div>

      {/* Floating Edge Navigation Buttons (Left & Right) */}
      <button
        onClick={prevSlide}
        aria-label="Previous dish"
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-[#061a14]/75 hover:bg-[#d4af37] text-white hover:text-black border border-[#d4af37]/40 hover:border-[#d4af37] items-center justify-center backdrop-blur-md shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next dish"
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-[#061a14]/75 hover:bg-[#d4af37] text-white hover:text-black border border-[#d4af37]/40 hover:border-[#d4af37] items-center justify-center backdrop-blur-md shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Hero Center Content Overlay */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col justify-center items-center my-auto">
        {/* Top Gold Crest Pill with Active Counter */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#061a14]/90 border border-[#d4af37]/50 shadow-xl mb-6 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-[#d4af37]" />
          <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
            Dish {String(currentIndex + 1).padStart(2, "0")} / 10 • {currentDish.badge}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
        </div>

        {/* Category Tag */}
        <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#fae8b4] font-semibold block drop-shadow-md">
          {currentDish.category}
        </span>

        {/* Big Majestic Dish Name in Playfair Display Typography */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.15] max-w-4xl mt-3 drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] transition-all duration-500">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fae8b4] via-[#d4af37] to-[#f3e5ab]">
            {currentDish.name}
          </span>
        </h1>

        {/* Dish Subtitle / Key Luxury Ingredients */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-neutral-200 font-sans max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          {currentDish.subtitle}
        </p>

        {/* 10 Dots / Progress Indicator */}
        <div className="mt-7 flex items-center justify-center gap-2">
          {HERO_DISHES.map((dish, idx) => (
            <button
              key={dish.id}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to ${dish.name}`}
              className={`transition-all duration-300 rounded-full focus:outline-none cursor-pointer ${
                idx === currentIndex
                  ? "w-8 sm:w-10 h-2 sm:h-2.5 bg-gradient-to-r from-[#d4af37] to-[#fae8b4] shadow-[0_0_14px_rgba(212,175,55,0.8)]"
                  : "w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/30 hover:bg-[#d4af37]/80"
              }`}
            />
          ))}
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

          {/* CTA 2: Explore Full Menu */}
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-medium text-sm uppercase tracking-wider text-neutral-100 bg-[#061a14]/80 hover:bg-[#0f382c] border border-[#d4af37]/50 hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-300 backdrop-blur-md transform hover:-translate-y-0.5"
          >
            <Utensils className="w-4 h-4 text-[#d4af37]" />
            <span>Explore Full Menu</span>
          </a>
        </div>
      </div>

      {/* Trust Badges Bar & Discover More at Bottom */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="pt-6 border-t border-[#d4af37]/30 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 w-full backdrop-blur-sm bg-[#061a14]/40 rounded-2xl p-4">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-serif font-bold text-white">
              <span className="text-[#d4af37]">{CHEF_INFO.experienceYears}+</span>
              <span className="text-sm font-sans font-normal text-neutral-300">Years</span>
            </div>
            <span className="text-xs text-neutral-300 mt-1 uppercase tracking-wider">
              Luxury Hospitality
            </span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-serif font-bold text-white">
              <span className="text-[#d4af37]">{CHEF_INFO.privateDinnersCount}</span>
            </div>
            <span className="text-xs text-neutral-300 mt-1 uppercase tracking-wider">
              Bespoke Dinners
            </span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-serif font-bold text-white">
              <span className="text-[#d4af37]">{CHEF_INFO.satisfactionRate}</span>
              <Star className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
            </div>
            <span className="text-xs text-neutral-300 mt-1 uppercase tracking-wider">
              5-Star VIP Rating
            </span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-serif font-bold text-white">
              <span className="text-[#d4af37]">100%</span>
            </div>
            <span className="text-xs text-neutral-300 mt-1 uppercase tracking-wider">
              Farm-To-Table Sourced
            </span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-6">
          <a
            href="#about"
            aria-label="Scroll to about section"
            className="inline-flex flex-col items-center text-xs tracking-widest uppercase text-neutral-400 hover:text-[#d4af37] transition-colors"
          >
            <span className="mb-1 text-[10px]">Discover More</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#d4af37]" />
          </a>
        </div>
      </div>
    </section>
  );
}
