"use client";

import React from "react";
import { Utensils, Calendar, ChevronDown, Award, Star, Flame, Sparkles } from "lucide-react";
import { CHEF_INFO } from "@/data/chefData";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#061a14]"
    >
      {/* Background Image with Dark Cinematic Overlays */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=2000&q=85')`,
          }}
        />
        {/* Layered cinematic forest green gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#061a14] via-[#061a14]/85 to-[#061a14]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061a14] via-[#061a14]/80 to-transparent" />
        {/* Radial warm amber/gold glow in center */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Gold Crest Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0a261e]/90 border border-[#d4af37]/40 shadow-lg shadow-black/40 mb-6 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-[#d4af37]" />
          <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
            Ultra-Premium Private Gastronomy
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
        </div>

        {/* Catchy Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.15] max-w-4xl">
          Crafting Culinary Masterpieces,{" "}
          <span className="block mt-2 italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#fae8b4] via-[#d4af37] to-[#e69a0d]">
            One Plate at a Time
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-300 font-normal max-w-2xl leading-relaxed">
          {CHEF_INFO.subtext}
        </p>

        {/* Dual CTA Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
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
            <span>Explore Menu</span>
          </a>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-14 pt-8 border-t border-[#144234]/80 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 w-full max-w-4xl">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-serif font-bold text-white">
              <span className="text-[#d4af37]">{CHEF_INFO.experienceYears}+</span>
              <span className="text-sm font-sans font-normal text-neutral-400">Years</span>
            </div>
            <span className="text-xs text-neutral-400 mt-1 uppercase tracking-wider">
              Michelin-Trained
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
          className="mt-12 inline-flex flex-col items-center text-xs tracking-widest uppercase text-neutral-500 hover:text-[#d4af37] transition-colors"
        >
          <span className="mb-1 text-[10px]">Discover More</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#d4af37]" />
        </a>
      </div>
    </section>
  );
}
