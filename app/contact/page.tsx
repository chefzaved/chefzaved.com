"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ConciergePortalModal from "@/components/ConciergePortalModal";
import FloatingCTA from "@/components/FloatingCTA";

export default function ContactPage() {
  const [requestedDishes, setRequestedDishes] = useState<string[]>([]);
  const [isConciergeOpen, setIsConciergeOpen] = useState<boolean>(false);

  const handleRemoveDish = (dishName: string) => {
    setRequestedDishes((prev) => prev.filter((d) => d !== dishName));
  };

  const handleScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#061a14] text-[#ededed] font-sans selection:bg-[#d4af37] selection:text-[#061a14]">
      {/* 1. Navigation Bar */}
      <Navbar
        requestedDishesCount={requestedDishes.length}
        onOpenBooking={handleScrollToContact}
        onOpenConciergePortal={() => setIsConciergeOpen(true)}
      />

      <main className="pt-24 sm:pt-28">
        {/* Contact & Private Booking Experience */}
        <ContactSection
          requestedDishes={requestedDishes}
          onRemoveRequestedDish={handleRemoveDish}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenConciergePortal={() => setIsConciergeOpen(true)}
        onOpenBooking={handleScrollToContact}
      />

      {/* Floating CTA */}
      <FloatingCTA
        requestedDishesCount={requestedDishes.length}
        onOpenBooking={handleScrollToContact}
      />

      {/* Concierge Portal Modal */}
      <ConciergePortalModal
        isOpen={isConciergeOpen}
        onClose={() => setIsConciergeOpen(false)}
      />
    </div>
  );
}
