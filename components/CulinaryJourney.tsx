"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import { JOURNEY_PHOTOS } from "@/data/chefData";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";

interface CulinaryJourneyProps {
  onOpenBooking: () => void;
}

const PRESTIGE_BRANDS = [
  "Taj Group of Hotels",
  "Uniworld River Cruises",
  "Araiya Hotels & Resorts",
  "Avalon Waterways",
  "Edelweiss Luxury Cruises",
  "Polo Towers",
  "Vedic Village Spa Resort",
  "Peerless Inn",
  "Fortune Hospitality",
  "Barak & Al Barandah",
];

export default function CulinaryJourney({ onOpenBooking }: CulinaryJourneyProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalPhotos = JOURNEY_PHOTOS.length;

  const nextPhoto = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalPhotos);
  }, [totalPhotos]);

  const prevPhoto = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalPhotos) % totalPhotos);
  }, [totalPhotos]);

  // Gentle auto-slideshow through all 11 journey moments
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextPhoto, 4500);
    return () => clearInterval(interval);
  }, [isPaused, nextPhoto]);

  const currentPhoto = JOURNEY_PHOTOS[currentIndex] || JOURNEY_PHOTOS[0];

  return (
    <section id="culinary-journey" className="py-24 sm:py-32 bg-[#061a14] relative overflow-hidden border-t border-[#144234]/60">
      {/* Decorative ambient glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-emerald-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Animated Section Header (Inspired by atulkochhar.com) */}
        <SectionHeader
          watermark="ODYSSEY"
          badge="An 18-Year Gastronomic Odyssey"
          title={
            <>
              My <span className="gold-gradient-text">Culinary Journey</span>
            </>
          }
          subtitle="From the grand kitchens of India’s most celebrated five-star hotels to the dining rooms of international boutique river cruises, each chapter has defined my approach to modern gastronomy."
          align="left"
        />

        {/* 2-Column Editorial Grid: Single Box Image Slider on Left, Journey Narrative on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column (5 cols): Single Box Image Slider - Pure, uncrowded luxury */}
          <div className="lg:col-span-5 relative lg:sticky lg:top-28">
            <ScrollReveal direction="up" delay={0.2} distance={48}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Outer Subtle Glow Halo */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-[#d4af37]/20 via-[#144234]/15 to-transparent blur-md -z-10" />

                {/* Single Box Photo Container - Smoothly cycles through the journey photos */}
                <div
                  className="relative rounded-2xl overflow-hidden border border-[#d4af37]/40 shadow-[0_12px_45px_rgba(0,0,0,0.85)] bg-[#072018] aspect-[4/5] flex items-center justify-center select-none group"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  {/* Active Journey Image with Smooth Luxury Transition */}
                  <img
                    key={currentPhoto.id}
                    src={currentPhoto.imageUrl}
                    alt={currentPhoto.title}
                    className="w-full h-full object-cover filter brightness-[0.98] contrast-[1.03] transition-all duration-700 ease-out"
                  />

                  {/* Subtle Luxury Gradient Overlay at Bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#061a14]/90 via-[#061a14]/40 to-transparent pointer-events-none" />

                  {/* Floating Navigation Arrows - Subtle, elegant, appearing gracefully */}
                  <button
                    onClick={prevPhoto}
                    aria-label="Previous photo"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#061a14]/80 hover:bg-[#d4af37] text-white hover:text-[#061a14] border border-[#d4af37]/40 flex items-center justify-center backdrop-blur-md transition-all duration-300 opacity-80 sm:opacity-0 sm:group-hover:opacity-100 cursor-pointer shadow-xl z-20"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextPhoto}
                    aria-label="Next photo"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#061a14]/80 hover:bg-[#d4af37] text-white hover:text-[#061a14] border border-[#d4af37]/40 flex items-center justify-center backdrop-blur-md transition-all duration-300 opacity-80 sm:opacity-0 sm:group-hover:opacity-100 cursor-pointer shadow-xl z-20"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* Understated Minimal Caption Pill at Bottom */}
                  <div className="absolute bottom-3 inset-x-3 px-3.5 py-2 rounded-xl bg-[#061a14]/85 backdrop-blur-md border border-[#d4af37]/30 flex items-center justify-between text-xs z-10 shadow-lg">
                    <div className="min-w-0 pr-2">
                      <p className="font-serif font-semibold text-white truncate text-xs sm:text-sm">
                        {currentPhoto.title}
                      </p>
                      <p className="text-[10px] text-[#d4af37] uppercase tracking-wider font-sans font-medium truncate">
                        {currentPhoto.tag}
                      </p>
                    </div>
                    {/* Slide Counter */}
                    <span className="shrink-0 font-sans text-[10px] font-semibold text-[#fae8b4] px-2 py-0.5 rounded-full bg-[#0b2b22] border border-[#d4af37]/30">
                      {String(currentIndex + 1).padStart(2, "0")} / {String(JOURNEY_PHOTOS.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Minimal Pagination Dots Below Single Box */}
                <div className="flex items-center justify-center gap-1.5 mt-3">
                  {JOURNEY_PHOTOS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`transition-all duration-300 rounded-full cursor-pointer ${
                        idx === currentIndex
                          ? "w-6 h-1 bg-[#d4af37]"
                          : "w-1.5 h-1 bg-white/25 hover:bg-[#d4af37]/60"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column (7 cols): Editorial Personal Journey Narrative */}
          <div className="lg:col-span-7 space-y-8">
            {/* Lead Narrative Paragraphs */}
            <ScrollReveal delay={0.22} distance={48}>
              <div className="space-y-4 text-neutral-200 text-sm sm:text-base leading-relaxed font-sans">
                <p className="text-base sm:text-lg text-white font-serif leading-relaxed">
                  <span className="text-3xl sm:text-4xl font-serif text-[#d4af37] float-left mr-2.5 leading-none">
                    F
                  </span>
                  or Chef Zaved, the kitchen has never been merely a workplace—it is a sacred stage of cultural dialogue, disciplined precision, and sensory alchemy. Over the past eighteen years, his journey has crossed regional heritage culinary arts, royal banquets, five-star resort operations, and international river voyages.
                </p>

                <p>
                  Beginning his career with an uncompromising dedication to culinary fundamentals, Chef Zaved honed his technique across India&apos;s most venerated hospitality empires, including the prestigious <strong className="text-white font-medium">Taj Group of Hotels</strong>, <strong className="text-white font-medium">Peerless Inn</strong>, <strong className="text-white font-medium">Fortune Hospitality</strong>, and the wellness sanctuaries of <strong className="text-white font-medium">Vedic Village Spa Resort</strong>. It was here that he mastered the intricacies of slow-crafted gravies, royal Awadhi Dum Pukht techniques, and precision European butchery.
                </p>

                <p>
                  Expanding his culinary horizons onto the global stage, he navigated luxury river cruise operations with world-renowned fleets, including the <strong className="text-white font-medium">Uniworld Boutique River Cruise Collection</strong>, <strong className="text-white font-medium">Edelweiss</strong>, <strong className="text-white font-medium">Avalon Waterways</strong>, <strong className="text-white font-medium">Barak</strong>, and <strong className="text-white font-medium">Al Barandah</strong>. Catering to high-profile international guests aboard boutique cruise vessels demanded acute attention to seasonal sourcing, contemporary French and Continental styling, and bespoke guest dietary preferences.
                </p>

                <p>
                  Throughout leadership posts with premier resort groups including <strong className="text-white font-medium">Araiya Hotels & Resorts</strong> and <strong className="text-white font-medium">Polo Towers</strong>, Chef Zaved continuously refined his signature culinary voice: harmonizing authentic Indian flavour profiles with avant-garde modern gastronomy.
                </p>
              </div>
            </ScrollReveal>

            {/* Prestige Brands Marquee Pills */}
            <ScrollReveal delay={0.34} distance={45} className="pt-2">
              <div className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-medium mb-3">
                Trusted by Renowned Hospitality Brands & International Fleets
              </div>

              <div className="flex flex-wrap gap-2">
                {PRESTIGE_BRANDS.map((brand, i) => (
                  <span
                    key={i}
                    className="text-xs px-3.5 py-1.5 rounded-full bg-[#09241c] border border-[#144234] text-neutral-200 hover:border-[#d4af37]/60 hover:text-white transition-colors"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            {/* Pull Quote Card with Signature */}
            <ScrollReveal delay={0.46} distance={48}>
              <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#0b2b22] to-[#072018] border-l-4 border-[#d4af37] relative shadow-xl hover:shadow-[0_10px_30px_rgba(212,175,55,0.12)] transition-shadow duration-500">
                <Quote className="w-8 h-8 text-[#d4af37]/25 absolute top-4 right-4" />
                <p className="font-serif italic text-base sm:text-lg text-amber-100/95 leading-relaxed">
                  &quot;To cook is to tell a story through the senses. Every plate is a reflection of the rivers I have crossed, the grand kitchens I have led, and the discerning guests I have had the privilege to serve.&quot;
                </p>

                <div className="mt-4 flex items-center justify-between pt-3 border-t border-[#144234]/70">
                  <div>
                    <span className="font-serif font-bold text-white tracking-wider block text-sm sm:text-base">
                      Chef Zaved
                    </span>
                    <span className="text-xs text-[#d4af37] uppercase tracking-widest font-sans">
                      Executive Chef &amp; Founder
                    </span>
                  </div>

                  <img
                    src="/images/signature.png"
                    alt="Chef Zaved Signature"
                    className="h-14 sm:h-16 w-auto object-contain filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.5)]"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
