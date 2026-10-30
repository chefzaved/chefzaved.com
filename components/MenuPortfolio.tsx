"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Wine,
  Plus,
  Check,
  Eye,
  X,
  Flame,
  ChefHat,
  Info,
} from "lucide-react";
import { DISHES_DATA, Dish } from "@/data/chefData";

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
  const categories = [
    "All",
    "Authentic Bengali Heritage",
    "Modern European & Grills",
    "Artisanal Canapés & Amuse-Bouche",
    "Bespoke Grazing & Desserts",
  ] as const;

  type MenuCategory = (typeof categories)[number];

  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>("All");
  const [dietaryFilter, setDietaryFilter] = useState<string>("All");
  const [activeModalDish, setActiveModalDish] = useState<Dish | null>(null);

  const dietaryOptions = ["All", "Gluten-Free", "Halal", "Pescatarian", "Vegetarian"];

  // Filter dishes
  const filteredDishes = DISHES_DATA.filter((dish) => {
    const matchesCategory =
      selectedCategory === "All" || dish.category === selectedCategory;
    const matchesDietary =
      dietaryFilter === "All" ||
      dish.dietary.some((d) => d.toLowerCase().includes(dietaryFilter.toLowerCase()));
    return matchesCategory && matchesDietary;
  });

  return (
    <section id="menu" className="py-24 sm:py-32 bg-[#061a14] relative">
      {/* Decorative ambient background accents */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a231b] border border-[#d4af37]/30 text-[#d4af37] text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Haute Cuisine Repertoire</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Signature Menu & <span className="gold-gradient-text">Portfolio</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4" />
          <p className="mt-4 text-base sm:text-lg text-neutral-300 font-sans">
            A celebration of sensory harmony. Click &quot;Request Dish&quot; on any creation to include it in your bespoke dining inquiry.
          </p>
        </div>

        {/* Selected Dishes Tray Notification if user has requested any */}
        {requestedDishes.length > 0 && (
          <div className="mb-10 p-4 rounded-xl bg-amber-500/10 border border-[#d4af37]/40 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto shadow-lg animate-fadeIn">
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

        {/* Categorized Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-[#d4af37] to-[#ba8d28] text-[#061a14] font-semibold shadow-[0_0_20px_rgba(212,175,55,0.35)]"
                    : "bg-[#09241c] text-neutral-200 hover:text-white hover:bg-[#0f382c] border border-[#144234]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Secondary Dietary Filter Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 text-xs">
          <span className="text-neutral-400 uppercase tracking-widest text-[11px] mr-1">
            Dietary Filter:
          </span>
          {dietaryOptions.map((diet) => {
            const isActive = dietaryFilter === diet;
            return (
              <button
                key={diet}
                onClick={() => setDietaryFilter(diet)}
                className={`px-3 py-1 rounded-md transition-colors ${
                  isActive
                    ? "bg-[#d4af37]/20 border border-[#d4af37] text-[#d4af37] font-medium"
                    : "bg-[#072018]/80 border border-[#144234] text-neutral-300 hover:text-white"
                }`}
              >
                {diet}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish) => {
            const isRequested = requestedDishes.includes(dish.name);

            return (
              <div
                key={dish.id}
                className="group rounded-2xl bg-[#08241c] border border-[#144234] hover:border-[#d4af37]/60 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:shadow-[0_12px_45px_-10px_rgba(212,175,55,0.22)]"
              >
                {/* Image Container with Badges */}
                <div className="relative aspect-[16/11] overflow-hidden bg-[#051711]">
                  <img
                    src={dish.imageUrl}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08241c] via-transparent to-[#061a14]/30" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    {dish.badge ? (
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#061a14]/90 backdrop-blur-md text-[#d4af37] border border-[#d4af37]/40">
                        {dish.badge}
                      </span>
                    ) : (
                      <span />
                    )}

                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#061a14]/80 backdrop-blur-md text-neutral-200 border border-[#144234]">
                      {dish.category}
                    </span>
                  </div>

                  {/* Quick Preview Button */}
                  <button
                    onClick={() => setActiveModalDish(dish)}
                    className="absolute bottom-3 right-3 p-2 rounded-full bg-[#061a14]/70 hover:bg-[#d4af37] text-white hover:text-[#061a14] transition-colors backdrop-blur-md"
                    title="View Dish Details & Wine Pairing"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      onClick={() => setActiveModalDish(dish)}
                      className="font-serif text-xl font-bold text-white group-hover:text-[#f3e5ab] transition-colors cursor-pointer"
                    >
                      {dish.name}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-neutral-200 line-clamp-3 leading-relaxed">
                      {dish.description}
                    </p>

                    {/* Wine Pairing Hint */}
                    <div className="mt-4 flex items-center gap-2 text-xs text-amber-200/90 bg-[#061a14] px-3 py-2 rounded-lg border border-[#144234]">
                      <Wine className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                      <span className="truncate">Pairing: {dish.winePairing}</span>
                    </div>

                    {/* Dietary Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {dish.dietary.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#0f382c] text-neutral-200 border border-[#184c3d]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* "Request Dish" Action */}
                  <div className="mt-6 pt-4 border-t border-[#144234] flex items-center justify-between">
                    <button
                      onClick={() => setActiveModalDish(dish)}
                      className="text-xs text-neutral-300 hover:text-white transition-colors inline-flex items-center gap-1"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>

                    <button
                      onClick={() => onRequestDish(dish.name)}
                      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                        isRequested
                          ? "bg-amber-500/20 text-[#d4af37] border border-[#d4af37]"
                          : "bg-[#0b2b22] hover:bg-[#d4af37] text-neutral-100 hover:text-[#061a14] border border-[#1d5c4b] hover:border-transparent"
                      }`}
                    >
                      {isRequested ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Dish Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Request Dish</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredDishes.length === 0 && (
          <div className="text-center py-16 text-neutral-300">
            <p className="text-lg">No dishes found matching your selected criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setDietaryFilter("All");
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-[#0b2b22] text-[#d4af37] border border-[#d4af37]/40 text-xs uppercase"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Dish Detail Lightbox Modal */}
      {activeModalDish && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#061a14]/92 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#072018] rounded-2xl border border-[#d4af37]/50 shadow-2xl overflow-hidden animate-fadeIn">
            <button
              onClick={() => setActiveModalDish(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#061a14]/80 text-neutral-300 hover:text-white hover:bg-[#0b2b22] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-video w-full overflow-hidden">
              <img
                src={activeModalDish.imageUrl}
                alt={activeModalDish.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#072018] via-transparent to-[#061a14]/40" />
              <div className="absolute bottom-4 left-6">
                <span className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold">
                  {activeModalDish.category}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                  {activeModalDish.name}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-sm sm:text-base text-neutral-200 leading-relaxed">
                {activeModalDish.description}
              </p>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-2">
                  Artisanal Ingredients & Elements:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalDish.ingredients.map((ing, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-lg bg-[#0b2b22] border border-[#184c3d] text-neutral-100"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-500/10 border border-[#d4af37]/35 flex items-start gap-3">
                <Wine className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
                    Sommelier Wine Cellar Recommendation:
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-200 mt-1">
                    {activeModalDish.winePairing}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#144234]">
                <div className="flex gap-2">
                  {activeModalDish.dietary.map((d) => (
                    <span
                      key={d}
                      className="text-[11px] px-2.5 py-1 rounded bg-[#0f382c] text-neutral-200 border border-[#184c3d]"
                    >
                      {d}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    onRequestDish(activeModalDish.name);
                    setActiveModalDish(null);
                  }}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#d4af37] to-amber-500 text-[#061a14] font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
                >
                  {requestedDishes.includes(activeModalDish.name)
                    ? "Remove from Request"
                    : "Add to Dining Request"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
