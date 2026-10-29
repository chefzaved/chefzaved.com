import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const BOOKINGS_FILE = path.join(DATA_DIR, "bookings.json");

interface BookingPayload {
  fullName: string;
  email: string;
  phone: string;
  eventDate: string;
  numberOfGuests: number | string;
  eventType: string;
  dietaryPreferences: string[];
  experienceTier?: string;
  requestedDishes?: string[];
  message?: string;
}

interface StoredBooking extends BookingPayload {
  id: string;
  referenceCode: string;
  status: "Pending Concierge Review" | "Confirmed" | "Followed Up";
  createdAt: string;
}

function getStoredBookings(): StoredBooking[] {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(BOOKINGS_FILE)) {
      // Seed with initial realistic bookings for demonstration
      const initialBookings: StoredBooking[] = [
        {
          id: "bk-sample-1",
          referenceCode: "CZ-2026-8812",
          fullName: "Duchess Genevieve Laurent",
          email: "g.laurent@prestigegroup.ch",
          phone: "+41 22 819 9200",
          eventDate: "2026-11-14",
          numberOfGuests: 8,
          eventType: "Private In-Home Dining",
          dietaryPreferences: ["Pescatarian", "Gluten-Free"],
          experienceTier: "Imperial 7-Course Wine Paired",
          requestedDishes: ["Pan-Seared Hokkaido Scallops", "Wild Brittany Turbot en Papillote"],
          message: "Anniversary celebration at our residence. Looking forward to wine pairing.",
          status: "Confirmed",
          createdAt: "2026-10-25T14:30:00.000Z",
        },
        {
          id: "bk-sample-2",
          referenceCode: "CZ-2026-9043",
          fullName: "Jonathan Sterling Esq.",
          email: "sterling@apexpartners.com",
          phone: "+1 212 555 0192",
          eventDate: "2026-11-20",
          numberOfGuests: 24,
          eventType: "Luxury Event Catering",
          dietaryPreferences: ["Halal Available", "Nut Allergy Alert"],
          experienceTier: "Signature 5-Course Tasting",
          requestedDishes: ["Miyazaki Wagyu A5 Striploin", "Deconstructed Valrhona Gold Dome"],
          message: "Annual partners gathering in our penthouse. Need live carving station.",
          status: "Pending Concierge Review",
          createdAt: "2026-10-28T09:15:00.000Z",
        },
      ];
      fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(initialBookings, null, 2), "utf-8");
      return initialBookings;
    }
    const raw = fs.readFileSync(BOOKINGS_FILE, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    console.error("Error reading bookings file:", err);
    return [];
  }
}

function saveBookings(bookings: StoredBooking[]) {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(bookings, null, 2), "utf-8");
}

export async function GET() {
  const bookings = getStoredBookings();
  return NextResponse.json({
    success: true,
    count: bookings.length,
    bookings,
  });
}

export async function POST(request: Request) {
  try {
    const body: BookingPayload = await request.json();

    // Validation
    if (!body.fullName || !body.fullName.trim()) {
      return NextResponse.json(
        { success: false, error: "Full Name is required." },
        { status: 400 }
      );
    }

    if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!body.phone || body.phone.trim().length < 6) {
      return NextResponse.json(
        { success: false, error: "A valid phone number is required." },
        { status: 400 }
      );
    }

    if (!body.eventDate) {
      return NextResponse.json(
        { success: false, error: "Event Date is required." },
        { status: 400 }
      );
    }

    const guests = Number(body.numberOfGuests);
    if (!guests || guests < 1) {
      return NextResponse.json(
        { success: false, error: "Number of guests must be at least 1." },
        { status: 400 }
      );
    }

    // Generate VIP Reference Code: CZ-2026-XXXX
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const referenceCode = `CZ-2026-${randomDigits}`;
    const newBooking: StoredBooking = {
      id: `bk-${Date.now()}`,
      referenceCode,
      fullName: body.fullName.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone.trim(),
      eventDate: body.eventDate,
      numberOfGuests: guests,
      eventType: body.eventType || "Private In-Home Dining",
      dietaryPreferences: Array.isArray(body.dietaryPreferences) ? body.dietaryPreferences : [],
      experienceTier: body.experienceTier || "Signature 5-Course Tasting",
      requestedDishes: Array.isArray(body.requestedDishes) ? body.requestedDishes : [],
      message: body.message?.trim() || "",
      status: "Pending Concierge Review",
      createdAt: new Date().toISOString(),
    };

    const bookings = getStoredBookings();
    bookings.unshift(newBooking);
    saveBookings(bookings);

    return NextResponse.json({
      success: true,
      message: "Booking inquiry submitted successfully.",
      booking: newBooking,
    });
  } catch (err: unknown) {
    console.error("Failed to process booking:", err);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your booking.",
      },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const { id, status } = await request.json();
    if (!id || !status) {
      return NextResponse.json({ success: false, error: "ID and status are required." }, { status: 400 });
    }
    const bookings = getStoredBookings();
    const index = bookings.findIndex((b) => b.id === id);
    if (index === -1) {
      return NextResponse.json({ success: false, error: "Booking not found." }, { status: 404 });
    }
    bookings[index].status = status;
    saveBookings(bookings);
    return NextResponse.json({ success: true, booking: bookings[index] });
  } catch (err) {
    return NextResponse.json({ success: false, error: "Failed to update booking" }, { status: 500 });
  }
}
