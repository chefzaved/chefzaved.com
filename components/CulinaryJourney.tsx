"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Sparkles, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { JOURNEY_PHOTOS } from "@/data/chefData";

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

interface CulinaryJourneyProps {
  onOpenBooking?: () => void;
}

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

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-left max-w-4xl mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a231b] border border-[#d4af37]/40 text-[#d4af37] text-xs uppercase tracking-[0.25em] font-semibold mb-3.5">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>An 18-Year Gastronomic Odyssey</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            My <span className="gold-gradient-text">Culinary Journey</span>
          </h2>

          <div className="w-24 h-0.5 bg-gradient-to-r from-[#d4af37] via-[#d4af37]/50 to-transparent mt-4" />

          <p className="mt-4 text-base sm:text-lg text-neutral-300 font-sans leading-relaxed">
            From the grand kitchens of India’s most celebrated five-star hotels to the dining rooms of international boutique river cruises, each chapter has defined my approach to modern gastronomy.
          </p>
        </div>

        {/* 2-Column Editorial Grid: Multi-Photo Showcase on Left, Journey Biography on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column (6 cols): Multi-Photo Showcase - Side by Side with Journey Archive */}
          <div className="lg:col-span-6 relative space-y-4">
            {/* Side-by-Side Dual Photos Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {/* Photo 1: Iconic Chef Zaved Portrait (Badge completely removed) */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#d4af37]/60 shadow-[0_10px_35px_rgba(0,0,0,0.8)] bg-[#072018] group aspect-[4/5] flex items-center justify-center">
                <img
                  src="/images/chef-journey.jpg"
                  alt="Chef Zaved - An 18-Year Gastronomic Odyssey"
                  className="w-full h-full object-cover filter brightness-[0.98] contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Photo 2: Beside it! Interactive Journey Moments Viewer from D:\chefzaved.com\Photos\My Journey */}
              <div
                className="relative rounded-2xl overflow-hidden border-2 border-[#d4af37]/60 shadow-[0_10px_35px_rgba(0,0,0,0.8)] bg-[#072018] group aspect-[4/5] flex items-center justify-center select-none"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* Active Journey Image */}
                <img
                  key={currentPhoto.id}
                  src={currentPhoto.imageUrl}
                  alt={currentPhoto.title}
                  className="w-full h-full object-cover filter brightness-[0.96] contrast-[1.04] transition-all duration-700 ease-out"
                />

                {/* Subtle bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#061a14] via-[#061a14]/60 to-transparent pointer-events-none" />

                {/* Navigation Arrows */}
                <button
                  onClick={prevPhoto}
                  aria-label="Previous journey moment"
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#061a14]/80 hover:bg-[#d4af37] text-white hover:text-[#061a14] border border-[#d4af37]/50 flex items-center justify-center backdrop-blur-md transition-all duration-300 cursor-pointer shadow-lg z-10"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextPhoto}
                  aria-label="Next journey moment"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#061a14]/80 hover:bg-[#d4af37] text-white hover:text-[#061a14] border border-[#d4af37]/50 flex items-center justify-center backdrop-blur-md transition-all duration-300 cursor-pointer shadow-lg z-10"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Caption Tag pinned at photo bottom */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2.5 rounded-xl bg-[#061a14]/90 backdrop-blur-md border border-[#d4af37]/40 shadow-xl z-10">
                  <div className="flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <span className="font-serif font-bold text-white text-xs truncate block tracking-wide">
                        {currentPhoto.title}
                      </span>
                      <span className="text-[10px] text-[#d4af37] uppercase tracking-wider font-sans font-medium truncate block">
                        {currentPhoto.tag}
                      </span>
                    </div>
                    <span className="shrink-0 text-[10px] font-semibold text-[#fae8b4] px-2 py-0.5 rounded-full bg-[#0b2b22] border border-[#d4af37]/30">
                      {String(currentIndex + 1).padStart(2, "0")} / {String(JOURNEY_PHOTOS.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Horizontal Thumbnail Selector for all 11 Journey Photos */}
            <div className="pt-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-medium">
                  Career Archives ({JOURNEY_PHOTOS.length} Photographs)
                </span>
                <span className="text-[11px] text-[#d4af37] font-sans">Click to inspect</span>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#d4af37]/40">
                {JOURNEY_PHOTOS.map((photo, idx) => {
                  const isSelected = idx === currentIndex;
                  return (
                    <button
                      key={photo.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`relative shrink-0 w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden transition-all duration-300 border-2 cursor-pointer ${
                        isSelected
                          ? "border-[#d4af37] scale-105 shadow-[0_0_12px_rgba(212,175,55,0.7)]"
                          : "border-[#144234] opacity-60 hover:opacity-100 hover:border-[#d4af37]/60"
                      }`}
                      title={photo.title}
                    >
                      <img
                        src={photo.imageUrl}
                        alt={photo.title}
                        className="w-full h-full object-cover filter brightness-[0.95]"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column (6 cols): Editorial Personal Journey Narrative */}
          <div className="lg:col-span-6 space-y-8">
            {/* Lead Narrative Paragraphs */}
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

            {/* Prestige Brands Marquee Pills */}
            <div className="pt-2">
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
            </div>

            {/* Pull Quote Card with Signature */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#0b2b22] to-[#072018] border-l-4 border-[#d4af37] relative shadow-xl">
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
          </div>
        </div>
      </div>
    </section>
  );
}
