"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Plus,
  Check,
  ChefHat,
  ArrowRight,
} from "lucide-react";
import { MODERN_EUROPEAN_MENU, ModernEuropeanDish } from "@/data/modernEuropeanMenu";

interface MenuPortfolioProps {
  requestedDishes: string[];
  onRequestDish: (dishName: string) => void;
  onOpenBooking: () => void;
}

export default function MenuPortfolio({
  requestedDishes,
  onRequestDish,
  onOpenBooking,
}: MenuPortfolioProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const touchStartXRef = useRef<number | null>(null);

  const totalDishes = MODERN_EUROPEAN_MENU.length;
  const currentDish: ModernEuropeanDish = MODERN_EUROPEAN_MENU[currentIndex];
  const isRequested = requestedDishes.includes(currentDish.name);

  // Transition handler
  const goToSlide = useCallback((index: number) => {
    setIsAnimating(true);
    setCurrentIndex(index);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const nextSlide = useCallback(() => {
    goToSlide((currentIndex + 1) % totalDishes);
  }, [currentIndex, totalDishes, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentIndex - 1 + totalDishes) % totalDishes);
  }, [currentIndex, totalDishes, goToSlide]);

  // Autoplay timer (4.5s)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 4500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current !== null) {
      const touchEndX = e.changedTouches[0].clientX;
      const diffX = touchStartXRef.current - touchEndX;
      if (diffX > 50) {
        nextSlide();
      } else if (diffX < -50) {
        prevSlide();
      }
      touchStartXRef.current = null;
    }
    setIsPaused(false);
  };

  return (
    <section id="menu" className="py-24 sm:py-32 bg-[#061a14] relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* ============================================================ */}
        {/* 1. PRESERVED EXISTING HEADING (EXACTLY AS SPECIFIED)          */}
        {/* ============================================================ */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0a231b] border border-[#d4af37]/30 text-[#d4af37] text-xs uppercase tracking-widest font-semibold mb-3.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>THE ART OF MODERN GASTRONOMY</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            SIGNATURE MENU & <span className="gold-gradient-text">PORTFOLIO</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4" />
          <p className="mt-4 text-base sm:text-lg text-neutral-300 font-sans leading-relaxed">
            An expression of culinary artistry, global flavours and contemporary presentation.
          </p>
        </div>

        {/* Selected Dishes Tray Notification if user has requested any */}
        {requestedDishes.length > 0 && (
          <div className="mb-10 p-4 rounded-xl bg-amber-500/10 border border-[#d4af37]/40 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto shadow-lg animate-fadeIn">
            <div className="flex items-center gap-3 text-left">
              <div className="w-9 h-9 rounded-full bg-[#d4af37]/20 flex items-center justify-center shrink-0">
                <ChefHat className="w-5 h-5 text-[#d4af37]" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-white">
                  You have pre-selected {requestedDishes.length} signature creation{requestedDishes.length > 1 ? "s" : ""}
                </p>
                <p className="text-xs text-neutral-300 truncate max-w-md">
                  {requestedDishes.join(" • ")}
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="shrink-0 px-4 py-2 rounded-full bg-[#d4af37] text-[#061a14] text-xs font-semibold uppercase tracking-wider hover:bg-amber-300 transition-colors shadow-md cursor-pointer"
            >
              Inquire via Contact Us
            </a>
          </div>
        )}

        {/* ============================================================ */}
        {/* 2. FULL-WIDTH EDITORIAL SPLIT LAYOUT (60% LEFT / 40% RIGHT)  */}
        {/* Zero Box, Zero Card Border - Photos seamlessly melt into bg  */}
        {/* ============================================================ */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* ============================================================ */}
          {/* LEFT COLUMN: 60% Width – Seamless Edge-Blended Photo Slider   */}
          {/* ============================================================ */}
          <div className="lg:col-span-7 xl:col-span-7 relative flex flex-col items-center">
            
            {/* Seamless Borderless Image Stage (No box container, melts into #061a14) */}
            <div className="relative w-full max-w-[620px] xl:max-w-[660px] aspect-[4/3] sm:aspect-[16/11] overflow-hidden select-none bg-transparent">
              {MODERN_EUROPEAN_MENU.map((dish, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <div
                    key={dish.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      isActive ? "opacity-100 z-1 pointer-events-auto" : "opacity-0 -z-10 pointer-events-none"
                    }`}
                  >
                    {/* The Photograph - Perfectly proportioned, no box background */}
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover object-center select-none filter brightness-[0.96] contrast-[1.06]"
                      loading={idx === 0 ? "eager" : "lazy"}
                    />

                    {/* Smooth Edge Dissolve into #061a14 (Top, Bottom, Left, Right) */}
                    <div className="absolute inset-x-0 top-0 h-16 sm:h-20 bg-gradient-to-b from-[#061a14] via-[#061a14]/70 to-transparent pointer-events-none z-2" />
                    <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-[#061a14] via-[#061a14]/70 to-transparent pointer-events-none z-2" />
                    <div className="absolute inset-y-0 left-0 w-16 sm:w-20 bg-gradient-to-r from-[#061a14] via-[#061a14]/70 to-transparent pointer-events-none z-2" />
                    <div className="absolute inset-y-0 right-0 w-16 sm:w-20 bg-gradient-to-l from-[#061a14] via-[#061a14]/70 to-transparent pointer-events-none z-2" />

                    {/* Radial Corner Vignette to melt corners completely into website background */}
                    <div className="absolute inset-0 pointer-events-none z-2 [mask-image:radial-gradient(ellipse_75%_75%_at_50%_50%,transparent_40%,black_100%)] bg-[#061a14]" />
                  </div>
                );
              })}

              {/* Minimal floating navigation arrows */}
              <div className="absolute inset-x-2 sm:inset-x-4 top-1/2 -translate-y-1/2 flex items-center justify-between z-10 pointer-events-none">
                <button
                  onClick={prevSlide}
                  aria-label="Previous culinary creation"
                  className="pointer-events-auto w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#061a14]/80 hover:bg-[#d4af37] text-[#d4af37] hover:text-[#061a14] border border-[#d4af37]/40 hover:border-[#d4af37] flex items-center justify-center backdrop-blur-md shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next culinary creation"
                  className="pointer-events-auto w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#061a14]/80 hover:bg-[#d4af37] text-[#d4af37] hover:text-[#061a14] border border-[#d4af37]/40 hover:border-[#d4af37] flex items-center justify-center backdrop-blur-md shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Understated Progress Bar & Counter (Positioned directly under photo without a box) */}
            <div className="w-full max-w-[620px] xl:max-w-[660px] mt-4 px-2 flex items-center justify-between select-none">
              <div className="flex items-center gap-1 sm:gap-1.5 max-w-[70%] overflow-x-auto py-1">
                {MODERN_EUROPEAN_MENU.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    aria-label={`Go to dish ${idx + 1}`}
                    className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === currentIndex
                        ? "w-5 sm:w-7 bg-gradient-to-r from-[#d4af37] to-[#fae8b4] shadow-[0_0_8px_rgba(212,175,55,0.8)]"
                        : "w-1.5 sm:w-2 bg-white/20 hover:bg-[#d4af37]/80"
                    }`}
                  />
                ))}
              </div>

              <span className="text-[11px] font-mono tracking-widest text-[#d4af37] bg-[#061a14] px-2.5 py-0.5 rounded-full border border-[#d4af37]/30">
                {String(currentIndex + 1).padStart(2, "0")} / {String(totalDishes).padStart(2, "0")}
              </span>
            </div>

          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: 40% Width – Synchronized Dish Information      */}
          {/* ============================================================ */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center space-y-6 lg:pl-2">
            
            {/* 1. CULINARY CATEGORY & STYLE */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shrink-0 animate-pulse" />
                <span className="text-xs sm:text-[13px] font-semibold tracking-[0.22em] uppercase text-[#d4af37]">
                  {currentDish.category}
                </span>
              </div>
              <p className="text-xs tracking-wider uppercase text-neutral-400 font-sans pl-3.5">
                {currentDish.styleLabel}
              </p>
            </div>

            {/* 2. DISH NAME (Elegant refined typography) */}
            <div className="space-y-3">
              <h3
                className={`font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-normal text-[#FFFDF5] leading-[1.18] tracking-tight transition-all duration-500 break-words ${
                  isAnimating ? "opacity-40 translate-y-1" : "opacity-100 translate-y-0"
                }`}
              >
                {currentDish.name}
              </h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-[#d4af37] to-transparent" />
            </div>

            {/* 3. SHORT DESCRIPTION (AI-Generated 15-25 words) */}
            <p
              className={`text-neutral-300 font-sans text-base sm:text-lg leading-relaxed transition-all duration-500 ${
                isAnimating ? "opacity-40 translate-y-1" : "opacity-100 translate-y-0"
              }`}
            >
              {currentDish.description}
            </p>

            {/* 4. INTERACTIVE REQUEST DISH BUTTON */}
            <div className="pt-2">
              <button
                onClick={() => onRequestDish(currentDish.name)}
                className={`group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  isRequested
                    ? "bg-[#d4af37] text-[#061a14] shadow-[0_0_20px_rgba(212,175,55,0.45)]"
                    : "bg-[#08241c] text-[#d4af37] border border-[#d4af37]/60 hover:bg-[#d4af37] hover:text-[#061a14] hover:shadow-[0_0_20px_rgba(212,175,55,0.35)]"
                }`}
              >
                {isRequested ? (
                  <>
                    <Check className="w-4 h-4 text-[#061a14]" />
                    <span>Included in Inquiry</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 text-[#d4af37] group-hover:text-[#061a14] transition-colors" />
                    <span>Request This Creation</span>
                  </>
                )}
              </button>
            </div>

            {/* 5. CHEF SIGNATURE (Understated, elegant editorial) */}
            <div className="pt-6 border-t border-[#144234]/60 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src="/images/signature.png"
                  alt="Chef Zaved Signature"
                  className="h-10 sm:h-12 w-auto object-contain filter invert brightness-200 sepia hue-rotate-[10deg] saturate-[2.5] opacity-85"
                />
                <div>
                  <p className="font-serif text-sm font-semibold text-white tracking-wide">
                    Chef Zaved
                  </p>
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#d4af37]">
                    Master of Modern Gastronomy
                  </p>
                </div>
              </div>

              {/* Minimal Next Dish Quick Navigation */}
              <button
                onClick={nextSlide}
                className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-[#d4af37] transition-colors cursor-pointer group"
                title="Next Creation"
              >
                <span>Next</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
