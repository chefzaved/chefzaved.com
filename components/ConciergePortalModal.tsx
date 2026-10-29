"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  ShieldCheck,
  Calendar,
  Users,
  Utensils,
  Phone,
  Mail,
  RefreshCw,
  CheckCircle,
  Clock,
  Sparkles,
} from "lucide-react";

interface ConciergePortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface StoredBooking {
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
  status: "Pending Concierge Review" | "Confirmed" | "Followed Up";
  createdAt: string;
}

export default function ConciergePortalModal({
  isOpen,
  onClose,
}: ConciergePortalModalProps) {
  const [bookings, setBookings] = useState<StoredBooking[]>([]);
  const [loading, setLoading] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string>("All");

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/bookings");
      const data = await res.json();
      if (data.success && data.bookings) {
        setBookings(data.bookings);
      }
    } catch (err) {
      console.error("Error fetching bookings:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchBookings();
    }
  }, [isOpen]);

  const handleUpdateStatus = async (
    id: string,
    newStatus: "Pending Concierge Review" | "Confirmed" | "Followed Up"
  ) => {
    try {
      const res = await fetch("/api/bookings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setBookings((prev) =>
          prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
        );
      }
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  };

  if (!isOpen) return null;

  const filteredBookings = bookings.filter((b) =>
    statusFilter === "All" ? true : b.status === statusFilter
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#072018] rounded-2xl border border-[#d4af37]/50 shadow-2xl flex flex-col overflow-hidden animate-fadeIn">
        {/* Header */}
        <div className="p-6 border-b border-[#144234] flex items-center justify-between bg-[#0b2b22]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-[#d4af37]" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
                Chef Zaved Concierge Desk
                <span className="text-[10px] font-sans font-normal uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-[#d4af37] border border-[#d4af37]/40">
                  Live Database
                </span>
              </h3>
              <p className="text-xs text-neutral-300">
                Real-time private dining dossiers &amp; VIP inquiries
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchBookings}
              disabled={loading}
              className="p-2 rounded-lg bg-[#09241c] hover:bg-[#0f382c] border border-[#144234] text-neutral-200 hover:text-white transition-colors"
              title="Refresh reservations"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#09241c] hover:bg-[#0f382c] border border-[#144234] text-neutral-200 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="px-6 py-3 bg-[#051a13] border-b border-[#144234] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="text-neutral-400 uppercase tracking-wider text-[10px]">Filter Status:</span>
            {["All", "Pending Concierge Review", "Confirmed", "Followed Up"].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  statusFilter === st
                    ? "bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/60 font-medium"
                    : "text-neutral-300 hover:text-white"
                }`}
              >
                {st}
              </button>
            ))}
          </div>
          <span className="text-neutral-300 font-mono text-[11px]">
            {filteredBookings.length} Dossier{filteredBookings.length === 1 ? "" : "s"}
          </span>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {loading ? (
            <div className="py-16 text-center text-neutral-300 flex flex-col items-center">
              <RefreshCw className="w-6 h-6 animate-spin text-[#d4af37] mb-3" />
              <p className="text-sm">Loading concierge dossiers...</p>
            </div>
          ) : filteredBookings.length === 0 ? (
            <div className="py-16 text-center text-neutral-300">
              <p className="text-sm">No reservations found matching this filter.</p>
            </div>
          ) : (
            filteredBookings.map((b) => (
              <div
                key={b.id}
                className="p-5 rounded-xl bg-[#09241c] border border-[#144234] hover:border-[#d4af37]/50 transition-colors space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#d4af37] bg-black/40 px-2.5 py-1 rounded border border-[#d4af37]/30">
                      {b.referenceCode}
                    </span>
                    <h4 className="font-serif text-base font-bold text-white">
                      {b.fullName}
                    </h4>
                  </div>

                  <div className="flex items-center gap-2">
                    <select
                      value={b.status}
                      onChange={(e) =>
                        handleUpdateStatus(
                          b.id,
                          e.target.value as "Pending Concierge Review" | "Confirmed" | "Followed Up"
                        )
                      }
                      className="text-xs bg-[#051a13] text-neutral-200 border border-[#1d5c4b] rounded-lg px-2.5 py-1 focus:outline-none focus:border-[#d4af37]"
                    >
                      <option value="Pending Concierge Review">Pending Concierge Review</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Followed Up">Followed Up</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-neutral-200 pt-2 border-t border-[#144234]">
                  <div className="flex items-center gap-1.5 text-neutral-300">
                    <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{b.eventDate}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-neutral-300">
                    <Users className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{b.numberOfGuests} Guests</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-neutral-300">
                    <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span className="truncate">{b.email}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-neutral-300">
                    <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{b.phone}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="px-2 py-0.5 rounded bg-[#0f382c] text-neutral-200 border border-[#184c3d]">
                    {b.eventType}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#051a13] text-[#d4af37] border border-[#d4af37]/30">
                    {b.experienceTier}
                  </span>
                  {b.dietaryPreferences && b.dietaryPreferences.length > 0 && (
                    <span className="text-neutral-300">
                      Diet: {b.dietaryPreferences.join(", ")}
                    </span>
                  )}
                </div>

                {b.requestedDishes && b.requestedDishes.length > 0 && (
                  <div className="text-xs text-neutral-300 bg-[#051a13] p-2.5 rounded-lg border border-[#144234]">
                    <span className="text-[#d4af37] font-medium mr-1.5">
                      Requested Dishes:
                    </span>
                    <span>{b.requestedDishes.join(" • ")}</span>
                  </div>
                )}

                {b.message && (
                  <p className="text-xs italic text-neutral-300 bg-[#051a13]/70 p-2 rounded border border-[#144234]">
                    &quot;{b.message}&quot;
                  </p>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#144234] bg-[#0b2b22] flex items-center justify-between text-xs text-neutral-300">
          <span>Storage: /data/bookings.json</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#051a13] border border-[#144234] text-neutral-200 hover:text-white"
          >
            Close Portal
          </button>
        </div>
      </div>
    </div>
  );
}
