"use client";

import React from "react";
import {
  UtensilsCrossed,
  Sparkles,
  GraduationCap,
  Compass,
  Check,
  ArrowRight,
  Users,
} from "lucide-react";
import { SERVICES_DATA, Service } from "@/data/chefData";

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "UtensilsCrossed":
        return <UtensilsCrossed className="w-6 h-6 text-[#d4af37]" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-[#d4af37]" />;
      case "GraduationCap":
        return <GraduationCap className="w-6 h-6 text-[#d4af37]" />;
      case "Compass":
        return <Compass className="w-6 h-6 text-[#d4af37]" />;
      default:
        return <UtensilsCrossed className="w-6 h-6 text-[#d4af37]" />;
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#061a14] relative">
      {/* Decorative gradient lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a231b] border border-[#d4af37]/30 text-[#d4af37] text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Bespoke Culinary Offerings</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Curated <span className="gold-gradient-text">Services</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4" />
          <p className="mt-4 text-base sm:text-lg text-neutral-300 font-sans">
            From intimate multi-course private residences to grand galas and immersive culinary ateliers.
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-gradient-to-b from-[#0b2b22] to-[#072018] border border-[#144234] hover:border-[#d4af37]/60 p-8 sm:p-10 transition-all duration-300 hover:shadow-[0_10px_40px_-15px_rgba(212,175,55,0.25)] flex flex-col justify-between"
            >
              {/* Top Accent Glow on hover */}
              <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/0 group-hover:via-[#d4af37]/60 to-transparent transition-all duration-500" />

              <div>
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#0f382c] border border-[#d4af37]/35 flex items-center justify-center shadow-inner group-hover:border-[#d4af37] group-hover:scale-105 transition-all duration-300">
                    {getIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/10 border border-[#d4af37]/40 text-[#d4af37]">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#f3e5ab] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#d4af37]/90 mt-1 font-medium">
                  {service.tagline}
                </p>

                {/* Ideal For Pill */}
                <div className="mt-4 flex items-center gap-2 text-xs text-neutral-300 bg-[#061a14]/80 px-3 py-2 rounded-lg border border-[#144234]">
                  <Users className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span>{service.idealFor}</span>
                </div>

                {/* Narrative Description */}
                <p className="mt-4 text-sm text-neutral-200 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Inclusions Checklist */}
                <div className="mt-6 pt-6 border-t border-[#144234]">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-3">
                    Experience Highlights:
                  </h4>
                  <ul className="space-y-2.5">
                    {service.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                        <div className="w-4 h-4 rounded-full bg-[#d4af37]/15 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#d4af37]" />
                        </div>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-[#144234]">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#09241c] hover:bg-gradient-to-r hover:from-[#d4af37] hover:to-amber-500 text-neutral-100 hover:text-[#061a14] font-semibold text-xs uppercase tracking-wider border border-[#1d5c4b] hover:border-transparent transition-all duration-300 group/btn"
                >
                  <span>Reserve This Experience</span>
                  <ArrowRight className="w-4 h-4 text-[#d4af37] group-hover/btn:text-[#061a14] group-hover/btn:translate-x-1 transition-all" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
