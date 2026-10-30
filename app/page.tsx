"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import MenuPortfolio from "@/components/MenuPortfolio";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import ConciergePortalModal from "@/components/ConciergePortalModal";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  const [requestedDishes, setRequestedDishes] = useState<string[]>([]);
  const [selectedServicePreset, setSelectedServicePreset] = useState<string>(
    "Private In-Home Dining"
  );
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

  const handleRemoveRequestedDish = (dishName: string) => {
    setRequestedDishes((prev) => prev.filter((d) => d !== dishName));
  };

  // When user clicks "Reserve This Experience" in Services
  const handleSelectService = (serviceTitle: string) => {
    setSelectedServicePreset(serviceTitle);
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // When user clicks "Book a Chef" or "Book Private Dining"
  const handleOpenBooking = () => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#061a14] text-[#ededed] font-sans selection:bg-[#d4af37] selection:text-[#061a14]">
      {/* 1. Navigation Bar */}
      <Navbar
        requestedDishesCount={requestedDishes.length}
        onOpenBooking={handleOpenBooking}
        onOpenConciergePortal={() => setIsConciergeOpen(true)}
      />

      <main>
        {/* 2. Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 3. About Chef Zaved Section */}
        <About />

        {/* 4. Services Offered */}
        <Services onSelectService={handleSelectService} />

        {/* 5. Signature Menu & Portfolio */}
        <MenuPortfolio
          requestedDishes={requestedDishes}
          onRequestDish={handleRequestDish}
          onOpenBooking={handleOpenBooking}
        />

        {/* 6. Client Testimonials */}
        <Testimonials />

        {/* 7. Interactive Booking & Inquiry Form */}
        <BookingForm
          selectedServicePreset={selectedServicePreset}
          requestedDishes={requestedDishes}
          onRemoveRequestedDish={handleRemoveRequestedDish}
          onOpenConciergePortal={() => setIsConciergeOpen(true)}
        />
      </main>

      {/* 8. Footer */}
      <Footer
        onOpenConciergePortal={() => setIsConciergeOpen(true)}
        onOpenBooking={handleOpenBooking}
      />

      {/* Floating CTA & Scroll-to-top */}
      <FloatingCTA
        requestedDishesCount={requestedDishes.length}
        onOpenBooking={handleOpenBooking}
      />

      {/* Concierge Portal Modal */}
      <ConciergePortalModal
        isOpen={isConciergeOpen}
        onClose={() => setIsConciergeOpen(false)}
      />
    </div>
  );
}
