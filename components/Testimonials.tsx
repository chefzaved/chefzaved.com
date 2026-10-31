"use client";

import React, { useState, useEffect } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import { TESTIMONIALS_DATA } from "@/data/chefData";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = TESTIMONIALS_DATA;

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const activeTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-[#061a14] relative overflow-hidden">
      {/* Decorative background radial amber flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Section Header (Inspired by atulkochhar.com) */}
        <SectionHeader
          watermark="ACCLAIM"
          badge="VIP Acclaim &amp; Critic Reviews"
          title={
            <>
              Client <span className="gold-gradient-text">Testimonials</span>
            </>
          }
          align="center"
        />

        {/* Aggregate Rating Badge */}
        <ScrollReveal delay={0.25} distance={18} className="text-center -mt-6 sm:-mt-8 mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-[#08221a] border border-[#d4af37]/30 shadow-lg">
            <div className="flex items-center text-[#d4af37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#d4af37]" />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-semibold text-white">
              4.98 / 5.0
            </span>
            <span className="text-neutral-400 text-xs hidden sm:inline">|</span>
            <span className="text-neutral-300 text-xs">
              Based on 180+ Verified VIP Private Events
            </span>
          </div>
        </ScrollReveal>

        {/* Featured Testimonial Spread – Full-width, Borderless Editorial Layout */}
        <ScrollReveal delay={0.35} distance={28}>
          <div className="relative w-full rounded-3xl bg-[#08221a]/30 p-6 sm:p-10 lg:p-14 border-0 shadow-none">
          <Quote className="w-16 h-16 sm:w-20 sm:h-20 text-[#d4af37]/10 absolute top-6 right-8 sm:top-10 sm:right-12 pointer-events-none" />

          <div className="relative z-10 flex flex-col justify-between min-h-[260px]">
            {/* Rating Stars & Event Tag */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-1 text-[#d4af37]">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#d4af37]" />
                ))}
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-200 bg-[#061a14]/80 px-3.5 py-1.5 rounded-full border border-[#144234]/60">
                <CheckCircle className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{activeTestimonial.eventType}</span>
                <span className="text-neutral-400">•</span>
                <span>{activeTestimonial.date}</span>
              </div>
            </div>

            {/* Quote Body – Refined, Slightly Smaller Editorial Font */}
            <blockquote className="font-serif text-base sm:text-lg md:text-xl lg:text-[22px] text-neutral-100 font-normal italic leading-relaxed sm:leading-loose max-w-5xl">
              &quot;{activeTestimonial.quote}&quot;
            </blockquote>

            {/* Client Info & Featured Dish */}
            <div className="mt-8 pt-6 border-t border-[#144234]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full overflow-hidden border border-[#d4af37]/50 shadow-md shrink-0">
                  <img
                    src={activeTestimonial.avatarUrl}
                    alt={activeTestimonial.clientName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-white tracking-wide">
                    {activeTestimonial.clientName}
                  </h4>
                  <p className="text-xs text-[#d4af37] font-medium uppercase tracking-wider">
                    {activeTestimonial.clientRole}
                  </p>
                  <p className="text-xs text-neutral-300 mt-0.5">
                    {activeTestimonial.clientLocation}
                  </p>
                </div>
              </div>

              {/* Highlight Dish Tag */}
              <div className="text-left sm:text-right">
                <span className="text-[11px] text-neutral-400 uppercase tracking-widest block">
                  Favorite Dish Course:
                </span>
                <span className="text-xs sm:text-sm font-serif italic text-amber-200">
                  {activeTestimonial.highlightDish}
                </span>
              </div>
            </div>
          </div>

          {/* Slider Controls */}
          <div className="mt-8 flex items-center justify-between pt-4 border-t border-[#144234]/40">
            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(idx);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-8 bg-[#d4af37]"
                      : "w-2 bg-[#184c3d] hover:bg-[#297c65]"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-[#1d5c4b] bg-[#0b2b22] hover:bg-[#d4af37] text-neutral-200 hover:text-[#061a14] flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-[#1d5c4b] bg-[#0b2b22] hover:bg-[#d4af37] text-neutral-200 hover:text-[#061a14] flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        </ScrollReveal>

        {/* Press and VIP Mentions Footer Bar */}
        <div className="mt-14 pt-8 border-t border-[#144234]/70 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 mb-6 font-medium">
            Entrusted by International Diplomats, Luxury Brands &amp; Private Families
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-neutral-300 font-serif text-sm sm:text-base opacity-80">
            <span className="hover:text-[#d4af37] transition-colors tracking-widest">
              MAYFAIR PRIVATE CLIENTS
            </span>
            <span className="hover:text-[#d4af37] transition-colors tracking-widest">
              THE MANHATTAN SALON
            </span>
            <span className="hover:text-[#d4af37] transition-colors tracking-widest">
              EMIRATES YACHT RECEPTIONS
            </span>
            <span className="hover:text-[#d4af37] transition-colors tracking-widest">
              BEVERLY HILLS ATELIER
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
