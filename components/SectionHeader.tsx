"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface SectionHeaderProps {
  badge?: string | React.ReactNode;
  badgeIcon?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: string | React.ReactNode;
  watermark?: string;
  align?: "left" | "center";
  className?: string;
  dividerWidth?: string;
}

export default function SectionHeader({
  badge,
  badgeIcon = <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />,
  title,
  subtitle,
  watermark,
  align = "center",
  className = "",
  dividerWidth = "w-24 sm:w-28",
}: SectionHeaderProps) {
  const isLeft = align === "left";

  return (
    <div
      className={`relative mb-12 sm:mb-16 select-none ${
        isLeft ? "text-left max-w-4xl" : "text-center max-w-3xl mx-auto"
      } ${className}`}
    >
      {/* 1. Giant Translucent Luxury Watermark (Directly inspired by atulkochhar.com) */}
      {watermark && (
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.18, margin: "0px 0px -70px 0px" }}
          transition={{ duration: 0.9, delay: 0.0, ease: [0.22, 1, 0.36, 1] }}
          className={`absolute pointer-events-none select-none font-serif uppercase font-black tracking-[0.25em] leading-none z-0 ${
            isLeft
              ? "left-0 -top-10 sm:-top-14 text-6xl sm:text-7xl md:text-8xl lg:text-[130px] origin-left"
              : "left-1/2 -translate-x-1/2 -top-10 sm:-top-14 text-6xl sm:text-7xl md:text-8xl lg:text-[130px] origin-center whitespace-nowrap"
          }`}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#d4af37]/15 via-white/[0.06] to-transparent">
            {watermark}
          </span>
        </motion.div>
      )}

      {/* 2. Category Badge / Tag (Animated Slide-up) */}
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.18, margin: "0px 0px -70px 0px" }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mb-3.5"
        >
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a231b] border border-[#d4af37]/40 text-[#d4af37] text-xs uppercase tracking-[0.22em] font-semibold shadow-sm ${
              isLeft ? "" : "mx-auto"
            }`}
          >
            {badgeIcon}
            <span>{badge}</span>
          </div>
        </motion.div>
      )}

      {/* 3. Main Heading (Animated Slide-up with Deceleration Ease) */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.18, margin: "0px 0px -70px 0px" }}
        transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15]"
      >
        {title}
      </motion.h2>

      {/* 4. Luxury Gold Hairline Divider (Expanding Animated Line) */}
      <div className={`relative z-10 mt-4.5 ${isLeft ? "" : "flex justify-center"}`}>
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.18, margin: "0px 0px -70px 0px" }}
          transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={`h-0.5 ${dividerWidth} ${
            isLeft
              ? "origin-left bg-gradient-to-r from-[#d4af37] via-[#d4af37]/60 to-transparent"
              : "origin-center bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
          }`}
        />
      </div>

      {/* 5. Subtitle / Narrative Lead (Animated Soft Fade-up) */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.18, margin: "0px 0px -70px 0px" }}
          transition={{ duration: 0.85, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mt-4.5 text-base sm:text-lg lg:text-xl text-neutral-300 font-sans leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
