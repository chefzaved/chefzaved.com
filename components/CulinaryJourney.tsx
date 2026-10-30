"use client";

import React from "react";
import { Sparkles, Compass, Award, Anchor, Utensils, Quote, CheckCircle2 } from "lucide-react";
import { CHEF_INFO } from "@/data/chefData";

interface CulinaryJourneyProps {
  onOpenBooking?: () => void;
}

const CAREER_MILESTONES = [
  {
    era: "The Classical Foundation",
    title: "Luxury Hospitality & Five-Star Pedigree",
    brands: "Taj Group of Hotels • Peerless Inn • Fortune Hospitality • Vedic Village Spa Resort",
    desc: "Forged in India's most prestigious luxury kitchens, mastering classical fundamentals, high-volume fine dining discipline, and the profound depth of authentic Indian culinary heritage.",
    icon: Award,
  },
  {
    era: "The International Horizon",
    title: "Global River Cruises & Haute Cuisine",
    brands: "Uniworld Boutique River Cruise Collection • Edelweiss • Avalon Waterways • Barak • Al Barandah",
    desc: "Navigating international waterways to deliver world-class gastronomy for discerning global travellers, harmonizing European haute cuisine techniques with vibrant cross-cultural flavour profiles.",
    icon: Anchor,
  },
  {
    era: "The Modern Frontier",
    title: "Boutique Resorts & Exclusive Supper Clubs",
    brands: "Araiya Hotels & Resorts • Polo Towers • Private Residence Supper Clubs",
    desc: "Pioneering chef-curated seasonal tasting menus, intimate sit-down suppers, and contemporary grazing concepts where seasonal ingredients and culinary storytelling take centre stage.",
    icon: Compass,
  },
];

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
  return (
    <section id="culinary-journey" className="py-24 sm:py-32 bg-[#061a14] relative overflow-hidden border-t border-[#144234]/60">
      {/* Decorative ambient glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-emerald-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-14 sm:mb-18">
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

        {/* 2-Column Editorial Grid: Portrait on Left, Journey Biography on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 cols): Original Black Coat Portrait */}
          <div className="lg:col-span-5 relative lg:sticky lg:top-28">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-b from-[#d4af37]/35 via-[#144234]/30 to-[#d4af37]/15 blur-md -z-10" />

              {/* Portrait Container - Original portrait unmodified */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#d4af37]/60 shadow-[0_10px_40px_rgba(0,0,0,0.8)] bg-[#072018]">
                <img
                  src="/images/chef-2.png"
                  alt="Chef Zaved - Professional Executive Chef Portrait in Black Coat"
                  className="w-full h-auto block object-cover filter brightness-[0.98] contrast-[1.02] transition-transform duration-700 ease-out hover:scale-[1.02]"
                />

                {/* Subtle bottom gradient for image integration */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#061a14] via-[#061a14]/60 to-transparent pointer-events-none" />

                {/* Caption Tag pinned at portrait bottom */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#061a14]/90 backdrop-blur-md border border-[#d4af37]/40 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-serif font-bold text-white text-sm block tracking-wide">
                        Chef Zaved
                      </span>
                      <span className="text-[11px] text-[#d4af37] uppercase tracking-wider font-sans font-medium">
                        Master of Modern Gastronomy
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-[#fae8b4] px-2.5 py-1 rounded-full bg-[#0b2b22] border border-[#d4af37]/30">
                      18+ Yrs
                    </span>
                  </div>
                </div>
              </div>

              {/* Experience Highlights Quick Metric Ribbon */}
              <div className="mt-5 grid grid-cols-3 gap-2.5 text-center">
                <div className="p-3 rounded-xl bg-[#0b2b22]/70 border border-[#144234]">
                  <div className="font-serif text-lg sm:text-xl font-bold text-[#d4af37]">18+</div>
                  <div className="text-[10px] text-neutral-300 uppercase tracking-wider mt-0.5">Years Legacy</div>
                </div>
                <div className="p-3 rounded-xl bg-[#0b2b22]/70 border border-[#144234]">
                  <div className="font-serif text-lg sm:text-xl font-bold text-[#d4af37]">11+</div>
                  <div className="text-[10px] text-neutral-300 uppercase tracking-wider mt-0.5">Global Brands</div>
                </div>
                <div className="p-3 rounded-xl bg-[#0b2b22]/70 border border-[#144234]">
                  <div className="font-serif text-lg sm:text-xl font-bold text-[#d4af37]">650+</div>
                  <div className="text-[10px] text-neutral-300 uppercase tracking-wider mt-0.5">Bespoke Dinners</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Editorial Personal Journey Narrative */}
          <div className="lg:col-span-7 space-y-8">
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

            {/* 3 Chronological Milestone Chapters */}
            <div className="space-y-4 pt-2">
              <div className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-3">
                Career Milestones & Pedigree
              </div>

              {CAREER_MILESTONES.map((milestone, idx) => {
                const IconComponent = milestone.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl bg-[#0b2b22]/60 border border-[#144234] hover:border-[#d4af37]/50 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5 text-[#d4af37]" />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                          <h4 className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-[#fae8b4] transition-colors">
                            {milestone.title}
                          </h4>
                          <span className="text-[11px] uppercase tracking-wider text-[#d4af37] font-sans font-semibold">
                            {milestone.era}
                          </span>
                        </div>

                        <p className="text-xs text-[#fae8b4]/90 font-medium font-sans mt-1">
                          {milestone.brands}
                        </p>

                        <p className="text-xs sm:text-sm text-neutral-300 font-sans mt-2 leading-relaxed">
                          {milestone.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
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
                    Master of Modern Gastronomy
                  </span>
                </div>

                <img
                  src="/images/signature.png"
                  alt="Chef Zaved Signature"
                  className="h-14 sm:h-16 w-auto object-contain filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.5)]"
                />
              </div>
            </div>

            {/* Action CTA */}
            {onOpenBooking && (
              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="px-8 py-3.5 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-wider text-[#061a14] bg-gradient-to-r from-[#f5df93] via-[#d4af37] to-[#ba8d28] hover:from-amber-200 hover:to-[#d4af37] transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:shadow-[0_0_35px_rgba(212,175,55,0.5)] transform hover:-translate-y-0.5 cursor-pointer"
                >
                  Commission Chef Zaved
                </button>

                <a
                  href="#services"
                  className="px-6 py-3.5 rounded-full font-medium text-xs sm:text-sm uppercase tracking-wider text-neutral-200 bg-[#061a14] hover:bg-[#0b2b22] border border-[#144234] hover:border-[#d4af37] hover:text-[#d4af37] transition-all"
                >
                  Explore Services
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
