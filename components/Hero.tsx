"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { BACKGROUND_SLIDES } from "@/data/chefData";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = BACKGROUND_SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const currentSlide = BACKGROUND_SLIDES[currentIndex] || BACKGROUND_SLIDES[0];

  return (
    <>
      {/* 100vh Full-Bleed Edge-to-Edge Hero Background Slideshow */}
      <section
        id="hero"
        className="relative h-screen min-h-[600px] max-h-[1080px] w-full flex flex-col justify-end overflow-hidden bg-[#061a14]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Fullscreen Animated Background Slideshow - Edge to Edge, No Borders */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#061a14]">
          {BACKGROUND_SLIDES.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? "opacity-100 z-1 pointer-events-auto" : "opacity-0 -z-10 pointer-events-none"
                }`}
              >
                {/* Background Photo - Fully Edge-to-Edge with Living Subtle Motion & Zero Border */}
                <img
                  src={slide.imageUrl}
                  alt={slide.name}
                  className={`w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.08] transition-transform duration-[6000ms] ease-out select-none border-0 ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                  loading={idx === 0 ? "eager" : "lazy"}
                />

                {/* Luxury Forest-Green Atmosphere & Edge Blending (Seamlessly melts into the website's dark forest-green palette) */}
                <div className="absolute inset-0 bg-[#061a14]/30 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061a14] via-transparent to-[#061a14]/80 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#061a14]/50 via-transparent to-[#061a14]/50 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Floating Side Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#061a14]/70 hover:bg-[#d4af37] text-white hover:text-[#061a14] border border-[#d4af37]/40 hover:border-[#d4af37] items-center justify-center backdrop-blur-md shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#061a14]/70 hover:bg-[#d4af37] text-white hover:text-[#061a14] border border-[#d4af37]/40 hover:border-[#d4af37] items-center justify-center backdrop-blur-md shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Clean Hero Bottom Bar */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-7 sm:pb-9 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Left/Center: Minimalist Progress Indicator Dots */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {BACKGROUND_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`View background slide ${idx + 1}: ${slide.name}`}
                className={`transition-all duration-300 rounded-full focus:outline-none cursor-pointer ${
                  idx === currentIndex
                    ? "w-6 sm:w-8 h-1.5 bg-gradient-to-r from-[#d4af37] to-[#fae8b4] shadow-[0_0_10px_rgba(212,175,55,0.9)]"
                    : "w-1.5 h-1.5 bg-white/40 hover:bg-[#d4af37]/90"
                }`}
              />
            ))}
          </div>

          {/* Right Side: Sleek Luxury Dish Name Pill */}
          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#061a14]/90 backdrop-blur-md border border-[#d4af37]/50 shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
              <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse shrink-0" />
              <span className="font-serif text-xs sm:text-sm lg:text-base font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#FFFDF5] via-[#fae8b4] to-[#d4af37]">
                {currentSlide.name}
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
