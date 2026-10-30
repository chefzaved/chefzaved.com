"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import {
  Calendar,
  Users,
  Sparkles,
  Utensils,
  Mail,
  Phone,
  User,
  Clock,
  CheckCircle2,
  AlertCircle,
  FileText,
  Printer,
  RotateCcw,
  ShieldCheck,
  X,
} from "lucide-react";

interface BookingFormProps {
  selectedServicePreset: string;
  requestedDishes: string[];
  onRemoveRequestedDish: (dish: string) => void;
  onOpenConciergePortal: () => void;
}

interface BookingResponse {
  id: string;
  referenceCode: string;
  fullName: string;
  email: string;
  phone: string;
  eventDate: string;
  numberOfGuests: number;
  eventType: string;
  dietaryPreferences: string[];
  experienceTier: string;
  requestedDishes: string[];
  message: string;
  status: string;
  createdAt: string;
}

export default function BookingForm({
  selectedServicePreset,
  requestedDishes,
  onRemoveRequestedDish,
  onOpenConciergePortal,
}: BookingFormProps) {
  // Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState<number | string>(4);
  const [eventType, setEventType] = useState(
    selectedServicePreset || "Private In-Home Dining"
  );
  const [selectedDietary, setSelectedDietary] = useState<string[]>([]);
  const [experienceTier, setExperienceTier] = useState("Signature 5-Course Tasting");
  const [message, setMessage] = useState("");
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    setMinDate(new Date().toISOString().split("T")[0]);
  }, []);

  // Validation & Submission State
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<BookingResponse | null>(null);

  // Sync preset if updated externally (e.g. clicking "Reserve Experience" in Services section)
  useEffect(() => {
    if (selectedServicePreset) {
      setEventType(selectedServicePreset);
    }
  }, [selectedServicePreset]);

  // Dietary preferences options
  const dietaryOptions = [
    "None / No Restrictions",
    "Vegetarian",
    "Vegan",
    "Halal",
    "Gluten-Free",
    "Pescatarian",
    "Nut Allergy",
    "Shellfish Allergy",
    "Dairy-Free",
  ];

  const handleDietaryToggle = (item: string) => {
    if (item === "None / No Restrictions") {
      setSelectedDietary(["None / No Restrictions"]);
      return;
    }
    const filtered = selectedDietary.filter((d) => d !== "None / No Restrictions");
    if (filtered.includes(item)) {
      setSelectedDietary(filtered.filter((d) => d !== item));
    } else {
      setSelectedDietary([...filtered, item]);
    }
  };

  // Validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!phone.trim() || phone.replace(/\D/g, "").length < 7) {
      newErrors.phone = "Please provide a valid contact number.";
    }

    if (!eventDate) {
      newErrors.eventDate = "Please select your preferred event date.";
    } else {
      const selected = new Date(eventDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        newErrors.eventDate = "Event date must be in the future.";
      }
    }

    const guests = Number(numberOfGuests);
    if (!guests || guests < 1) {
      newErrors.numberOfGuests = "Please specify at least 1 guest.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        fullName,
        email,
        phone,
        eventDate,
        numberOfGuests: Number(numberOfGuests),
        eventType,
        dietaryPreferences: selectedDietary.length > 0 ? selectedDietary : ["None"],
        experienceTier,
        requestedDishes,
        message,
      };

      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit booking inquiry.");
      }

      // Success! Fire celebration confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#d4af37", "#f3e5ab", "#ffffff", "#e69a0d"],
      });

      setConfirmedBooking(data.booking);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to process booking.";
      setErrors({ server: message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setEventDate("");
    setNumberOfGuests(4);
    setSelectedDietary([]);
    setMessage("");
    setConfirmedBooking(null);
    setErrors({});
  };

  return (
    <section id="booking" className="py-24 sm:py-32 bg-[#061a14] relative">
      {/* Decorative gradient aura */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a231b] border border-[#d4af37]/30 text-[#d4af37] text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Private Dining Concierge</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Reserve Your <span className="gold-gradient-text">Private Experience</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4" />
          <p className="mt-4 text-base sm:text-lg text-neutral-300 font-sans">
            Please share your vision. Chef Zaved and his personal concierge will craft an uncompromising culinary proposal within 24 hours.
          </p>
        </div>

        {/* Confirmation State Modal / Card */}
        {confirmedBooking ? (
          <div className="rounded-3xl bg-gradient-to-b from-[#0b2b22] to-[#072018] border border-[#d4af37] p-8 sm:p-12 shadow-2xl shadow-amber-500/10 text-center animate-fadeIn">
            <div className="w-20 h-20 rounded-full bg-[#d4af37]/15 border-2 border-[#d4af37] mx-auto flex items-center justify-center mb-6 shadow-inner">
              <CheckCircle2 className="w-10 h-10 text-[#d4af37]" />
            </div>

            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
              Reservation Inscribed Successfully
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-2">
              Thank You, {confirmedBooking.fullName}
            </h3>

            {/* Reference Badge */}
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#09241c] border border-[#d4af37]/50 text-white font-mono text-sm">
              <span className="text-neutral-400">Concierge Reference:</span>
              <span className="text-[#d4af37] font-bold">{confirmedBooking.referenceCode}</span>
            </div>

            <p className="mt-4 text-sm sm:text-base text-neutral-200 max-w-xl mx-auto leading-relaxed">
              Chef Zaved&apos;s Maitre D&apos; and Sommelier have received your booking dossier. We will reach out directly to coordinate your custom menu tasting and cellar selections.
            </p>

            {/* Reservation Summary Receipt */}
            <div className="mt-8 p-6 rounded-2xl bg-[#051a13] border border-[#144234] text-left max-w-2xl mx-auto space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between border-b border-[#144234] pb-2">
                <span className="text-neutral-400">Experience Type:</span>
                <span className="font-semibold text-white">{confirmedBooking.eventType}</span>
              </div>
              <div className="flex justify-between border-b border-[#144234] pb-2">
                <span className="text-neutral-400">Event Date:</span>
                <span className="font-semibold text-white">{confirmedBooking.eventDate}</span>
              </div>
              <div className="flex justify-between border-b border-[#144234] pb-2">
                <span className="text-neutral-400">Guest Count:</span>
                <span className="font-semibold text-white">{confirmedBooking.numberOfGuests} Guests</span>
              </div>
              <div className="flex justify-between border-b border-[#144234] pb-2">
                <span className="text-neutral-400">Experience Tier:</span>
                <span className="font-semibold text-[#d4af37]">{confirmedBooking.experienceTier}</span>
              </div>
              <div className="flex justify-between border-b border-[#144234] pb-2">
                <span className="text-neutral-400">Dietary Preferences:</span>
                <span className="font-semibold text-white">
                  {confirmedBooking.dietaryPreferences.join(", ")}
                </span>
              </div>
              {confirmedBooking.requestedDishes.length > 0 && (
                <div className="flex flex-col gap-1 border-b border-[#144234] pb-2">
                  <span className="text-neutral-400">Pre-Selected Repertoire Dishes:</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {confirmedBooking.requestedDishes.map((dish, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 rounded bg-[#0b2b22] text-amber-200 border border-[#d4af37]/35"
                      >
                        {dish}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {confirmedBooking.message && (
                <div className="pt-1">
                  <span className="text-neutral-400 block mb-1">Host Notes:</span>
                  <p className="italic text-neutral-200 bg-[#072018] p-3 rounded-lg border border-[#144234]">
                    &quot;{confirmedBooking.message}&quot;
                  </p>
                </div>
              )}
            </div>

            {/* Receipt Actions */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0b2b22] hover:bg-[#123d30] text-neutral-200 text-xs font-semibold uppercase tracking-wider border border-[#1d5c4b] transition-colors"
              >
                <Printer className="w-4 h-4 text-[#d4af37]" />
                <span>Print Dossier Receipt</span>
              </button>

              <button
                onClick={onOpenConciergePortal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500/10 hover:bg-amber-500/20 text-[#d4af37] text-xs font-semibold uppercase tracking-wider border border-[#d4af37]/40 transition-colors"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>View in Concierge Portal</span>
              </button>

              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#d4af37] hover:bg-amber-300 text-[#061a14] text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg shadow-amber-500/20"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Book Another Date</span>
              </button>
            </div>
          </div>
        ) : (
          /* The Interactive Booking Form */
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-gradient-to-b from-[#0b2b22] to-[#072018] border border-[#144234] hover:border-[#d4af37]/50 p-8 sm:p-12 shadow-2xl transition-all duration-300"
            noValidate
          >
            {/* General Server Error Banner if any */}
            {errors.server && (
              <div className="mb-6 p-4 rounded-xl bg-red-950/60 border border-red-500 text-red-200 text-sm flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                <span>{errors.server}</span>
              </div>
            )}

            {/* Requested Dishes Banner if any selected */}
            {requestedDishes.length > 0 && (
              <div className="mb-8 p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 to-[#0e352a] border border-[#d4af37]/40">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Selected Repertoire Dishes ({requestedDishes.length})</span>
                  </div>
                  <span className="text-[11px] text-neutral-300">
                    Included in your custom proposal
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {requestedDishes.map((dish) => (
                    <span
                      key={dish}
                      className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-[#051a13] border border-[#d4af37]/50 text-white"
                    >
                      <span>{dish}</span>
                      <button
                        type="button"
                        onClick={() => onRemoveRequestedDish(dish)}
                        className="text-neutral-400 hover:text-red-400 transition-colors ml-1"
                        title="Remove dish"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Field 1: Full Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Full Name <span className="text-[#d4af37]">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#d4af37] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors({ ...errors, fullName: "" });
                    }}
                    placeholder="e.g. Lord Alistair Vance"
                    className={`w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#051a13] border text-white placeholder-neutral-400 text-sm focus:outline-none focus:ring-1 transition-all ${
                      errors.fullName
                        ? "border-red-500 focus:ring-red-500"
                        : "border-[#144234] focus:border-[#d4af37] focus:ring-[#d4af37]"
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                  </p>
                )}
              </div>

              {/* Field 2: Email Address */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Email Address <span className="text-[#d4af37]">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#d4af37] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    placeholder="concierge@vance-holdings.com"
                    className={`w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#051a13] border text-white placeholder-neutral-400 text-sm focus:outline-none focus:ring-1 transition-all ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500"
                        : "border-[#144234] focus:border-[#d4af37] focus:ring-[#d4af37]"
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Field 3: Phone Number */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Phone / WhatsApp <span className="text-[#d4af37]">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#d4af37] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors({ ...errors, phone: "" });
                    }}
                    placeholder="+1 (555) 789-0199"
                    className={`w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#051a13] border text-white placeholder-neutral-400 text-sm focus:outline-none focus:ring-1 transition-all ${
                      errors.phone
                        ? "border-red-500 focus:ring-red-500"
                        : "border-[#144234] focus:border-[#d4af37] focus:ring-[#d4af37]"
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                  </p>
                )}
              </div>

              {/* Field 4: Event Date */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Event Date <span className="text-[#d4af37]">*</span>
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-[#d4af37] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="date"
                    value={eventDate}
                    min={minDate}
                    onChange={(e) => {
                      setEventDate(e.target.value);
                      if (errors.eventDate) setErrors({ ...errors, eventDate: "" });
                    }}
                    className={`w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#051a13] border text-white text-sm focus:outline-none focus:ring-1 transition-all ${
                      errors.eventDate
                        ? "border-red-500 focus:ring-red-500"
                        : "border-[#144234] focus:border-[#d4af37] focus:ring-[#d4af37]"
                    }`}
                  />
                </div>
                {errors.eventDate && (
                  <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.eventDate}
                  </p>
                )}
              </div>

              {/* Field 5: Number of Guests */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Number of Guests <span className="text-[#d4af37]">*</span>
                </label>
                <div className="relative">
                  <Users className="w-4 h-4 text-[#d4af37] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="number"
                    min="1"
                    max="200"
                    value={numberOfGuests}
                    onChange={(e) => setNumberOfGuests(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#051a13] border border-[#144234] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] text-white text-sm focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Field 6: Event Type Dropdown */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Event Type
                </label>
                <div className="relative">
                  <Utensils className="w-4 h-4 text-[#d4af37] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#051a13] border border-[#144234] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] text-white text-sm focus:outline-none transition-all cursor-pointer appearance-none"
                  >
                    <option value="Private In-Home Dining">Private In-Home Dining (Intimate)</option>
                    <option value="Luxury Event Catering">Luxury Event Catering (Weddings & Galas)</option>
                    <option value="Masterclasses & Cooking Workshops">Masterclasses & Cooking Workshop</option>
                    <option value="Menu Consulting & Culinary Strategy">Menu Consulting & Restaurant Advisory</option>
                    <option value="Yacht & Destination Dining">Yacht & Private Villa Destination Dining</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Experience Tier Selector */}
            <div className="mt-8">
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                Preferred Tasting Level
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    name: "Signature 5-Course Tasting",
                    desc: "Chef Zaved's acclaimed signature tasting journey",
                  },
                  {
                    name: "Imperial 7-Course Wine Paired",
                    desc: "Full gastronomic flight with Grand Cru cellar pairings",
                  },
                  {
                    name: "Bespoke Multi-Course Custom",
                    desc: "Completely tailored menu crafted to personal heritage",
                  },
                ].map((tier) => (
                  <button
                    key={tier.name}
                    type="button"
                    onClick={() => setExperienceTier(tier.name)}
                    className={`p-3.5 rounded-xl text-left border transition-all ${
                      experienceTier === tier.name
                        ? "bg-amber-500/10 border-[#d4af37] text-white shadow-md shadow-amber-500/10"
                        : "bg-[#051a13] border-[#144234] text-neutral-300 hover:border-[#1d5c4b]"
                    }`}
                  >
                    <div className="text-xs font-semibold text-[#d4af37]">{tier.name}</div>
                    <div className="text-[11px] text-neutral-400 mt-1 leading-normal">
                      {tier.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Field 7: Dietary Preferences */}
            <div className="mt-8">
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                Dietary Preferences & Allergies
              </label>
              <div className="flex flex-wrap gap-2">
                {dietaryOptions.map((opt) => {
                  const isSelected = selectedDietary.includes(opt);
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => handleDietaryToggle(opt)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        isSelected
                          ? "bg-[#d4af37] text-[#061a14] font-semibold shadow-sm"
                          : "bg-[#051a13] border border-[#144234] text-neutral-200 hover:text-white hover:border-[#1d5c4b]"
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Field 8: Message / Special Requests */}
            <div className="mt-8">
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                Special Requests & Notes (Occasion, Kitchen Setup, Venue)
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell Chef Zaved about your occasion, wine preferences, or specific culinary traditions..."
                className="w-full p-4 rounded-xl bg-[#051a13] border border-[#144234] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] text-white placeholder-neutral-400 text-sm focus:outline-none transition-all resize-y"
              />
            </div>

            {/* Submit Button */}
            <div className="mt-10 pt-6 border-t border-[#144234] flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-neutral-400">
                🔒 Your privacy is strictly protected. We respect non-disclosure requirements.
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-10 py-4 rounded-full font-semibold text-xs uppercase tracking-widest text-[#061a14] bg-gradient-to-r from-[#f5df93] via-[#d4af37] to-[#ba8d28] hover:from-amber-200 hover:to-[#d4af37] shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:shadow-[0_0_35px_rgba(212,175,55,0.5)] transition-all duration-300 disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-[#061a14] border-t-transparent rounded-full animate-spin" />
                    Transmitting Inscription...
                  </span>
                ) : (
                  <span>Request Private Dining Reservation</span>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
