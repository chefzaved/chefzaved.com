"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CulinaryJourney from "@/components/CulinaryJourney";
import MenuPortfolio from "@/components/MenuPortfolio";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ConciergePortalModal from "@/components/ConciergePortalModal";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  const [requestedDishes, setRequestedDishes] = useState<string[]>([]);
  const [isConciergeOpen, setIsConciergeOpen] = useState<boolean>(false);

  // Toggle requesting a dish from the menu
  const handleRequestDish = (dishName: string) => {
    setRequestedDishes((prev) => {
      if (prev.includes(dishName)) {
        return prev.filter((d) => d !== dishName);
      } else {
        return [...prev, dishName];
      }
    });
  };

  const handleOpenContact = () => {
    window.location.href = "/contact";
  };

  return (
    <div className="min-h-screen bg-[#061a14] text-[#ededed] font-sans selection:bg-[#d4af37] selection:text-[#061a14]">
      {/* 1. Navigation Bar */}
      <Navbar
        requestedDishesCount={requestedDishes.length}
        onOpenBooking={handleOpenContact}
        onOpenConciergePortal={() => setIsConciergeOpen(true)}
      />

      <main>
        {/* 2. Hero Section */}
        <Hero onOpenBooking={handleOpenContact} />

        {/* 3. About Chef Zaved Section */}
        <About />

        {/* 3.5. My Culinary Journey Editorial Section */}
        <CulinaryJourney onOpenBooking={handleOpenContact} />

        {/* 4. Signature Menu & Portfolio */}
        <MenuPortfolio
          requestedDishes={requestedDishes}
          onRequestDish={handleRequestDish}
          onOpenBooking={handleOpenContact}
        />

        {/* 5. Client Testimonials */}
        <Testimonials />
      </main>

      {/* 6. Footer */}
      <Footer
        onOpenConciergePortal={() => setIsConciergeOpen(true)}
        onOpenBooking={handleOpenContact}
      />

      {/* Floating Scroll-to-top */}
      <FloatingCTA
        requestedDishesCount={requestedDishes.length}
        onOpenBooking={handleOpenContact}
      />

      {/* Concierge Portal Modal */}
      <ConciergePortalModal
        isOpen={isConciergeOpen}
        onClose={() => setIsConciergeOpen(false)}
      />
    </div>
  );
}
