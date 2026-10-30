"use client";

import React from "react";
import { Quote } from "lucide-react";
import { CHEF_INFO } from "@/data/chefData";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#061a14] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Shifted to Left */}
        <div className="text-left max-w-3xl mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            About <span className="gold-gradient-text">Chef Zaved</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-[#d4af37] via-[#d4af37]/50 to-transparent mt-4" />
          <p className="mt-4 text-base sm:text-lg text-neutral-300 font-sans">
            Bridging 18+ years across luxury hospitality, global cruise operations, and modern gastronomy.
          </p>
        </div>

        {/* Main Content Grid: Narrative on Left (7 cols), Photo on Right (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Narrative & Credentials (7 Cols) - Left Side */}
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white leading-snug">
              Every menu tells a story, and every dining experience feels personal, innovative, and memorable.
            </h3>

            <div className="mt-6 space-y-4 text-neutral-200 text-sm sm:text-base leading-relaxed">
              <p>{CHEF_INFO.bioParagraph1}</p>
              <p>{CHEF_INFO.bioParagraph2}</p>
            </div>

            {/* Philosophy Callout Quote */}
            <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-[#0b2b22] to-[#072018] border-l-4 border-[#d4af37] relative">
              <Quote className="w-8 h-8 text-[#d4af37]/20 absolute top-4 right-4" />
              <p className="font-serif italic text-base sm:text-lg text-amber-100/95 leading-relaxed">
                &quot;{CHEF_INFO.philosophyQuote}&quot;
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <span className="font-serif font-bold text-white tracking-wider block">
                    Chef Zaved
                  </span>
                  <span className="text-xs text-[#d4af37] uppercase tracking-widest font-sans">
                    Master of Modern Gastronomy
                  </span>
                </div>
                <div className="flex items-center">
                  <img
                    src="/images/signature.png"
                    alt="Chef Zaved Signature"
                    className="h-18 sm:h-22 md:h-24 w-auto object-contain transition-transform duration-300 hover:scale-105 filter drop-shadow-[0_2px_12px_rgba(212,175,55,0.55)]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Visual Showcase (5 Cols) - Right Side */}
          <div className="lg:col-span-5 relative order-1 lg:order-2 lg:sticky lg:top-32">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Primary Image: Chef Zaved original photo fitted in frame */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#d4af37]/50 shadow-2xl bg-[#072018] group">
                <img
                  src="/images/chef-1.jpeg"
                  alt="Chef Zaved - Master of Modern Gastronomy & Private Dining"
                  className="w-full h-auto block filter brightness-100 group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
