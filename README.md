# Chef Zaved (chefzaved.com)
### Ultra-Premium Full-Stack Private Chef & Fine Dining Website

A modern, ultra-premium, fully responsive full-stack website designed for **Chef Zaved**, Master of Haute Gastronomy and Private Dining. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

---

## ✦ Luxury Design System

- **Color Palette**:
  - **Royal Forest Green**: Deep opulent greens (`#04120e`, `#061a14`, `#0b2b22`, `#0f382c`, `#144234`)
  - **Warm Gold & Amber**: Radiant 24K gold accents (`#d4af37`, `#f3e5ab`, `#e5c07b`, `#aa7c11`, `#f59e0b`)
  - **Glassmorphism**: Frosted emerald-tinted glass containers with subtle 24K gold border glows.
- **Typography**:
  - **Headings**: `Playfair Display` (serif, editorial luxury, graceful italic accents)
  - **Body**: `Inter` (sans-serif, crisp, highly legible)
- **Visuals**: Dark-mood cinematic food photography, flame sear accents, and microgreen plating.

---

## ✦ Complete Page Structure & Sections

1. **Navigation Bar**:
   - Fixed header with glassmorphism blur and gold border on scroll.
   - Logo: "Chef Zaved" with chef hat & cutlery crest.
   - Links: Home, About Chef, Services, Menu & Portfolio, Testimonials.
   - Prominent "Book a Chef" glowing CTA button.
   - Mobile slide-out drawer with contact links.
   - Live tasting request counter badge.

2. **Hero Section**:
   - Cinematic background with layered charcoal gradient overlays and warm amber glow.
   - Catchy Headline: *"Crafting Culinary Masterpieces, One Plate at a Time"*.
   - Subtext highlighting bespoke in-home private dining, menus, and masterclasses.
   - Dual CTAs: *"Book Private Dining"* (smooth scrolls to reservation form) & *"Explore Menu"*.
   - Trust strip: 16+ Years Experience, 650+ Bespoke Dinners, 99.8% 5-Star VIP Rating, 100% Farm-to-Table.

3. **About Chef Zaved**:
   - Compelling culinary biography: Michelin pedigree in Paris and London, French haute precision married with global fusion.
   - Behind-the-scenes photography collage (action shots of plating and ingredients).
   - 4 Pillars of Excellence: Michelin Pedigree, VIP & Private Dining, Sommelier-Certified, Farm-to-Table Ethics.
   - Callout quote with digital signature styling.

4. **Services Offered (Grid Layout)**:
   - **Private In-Home Dining**: Intimate multi-course dinners and family celebrations.
   - **Luxury Event Catering**: Milestone weddings, galas, synchronized silver service.
   - **Masterclasses & Cooking Workshops**: Hands-on culinary ateliers and knife mastery.
   - **Menu Consulting**: Culinary advisory for luxury restaurants and hospitality groups.
   - Interactive *"Reserve This Experience"* action that auto-selects the service in the booking form.

5. **Signature Menu & Portfolio (Interactive Gallery)**:
   - Categorized tabs: *All Dishes*, *Appetizers*, *Mains*, *Desserts*, *Signature Fusion Specials*.
   - Dietary filter tags (*Gluten-Free*, *Halal*, *Pescatarian*, *Vegetarian*).
   - Dish cards with descriptions, ingredients list, and sommelier wine pairings.
   - Interactive *"Request Dish"* toggle: adds dishes directly into the user's inquiry payload.
   - Lightbox modal for high-res inspection and chef tasting notes.

6. **Client Testimonials / Reviews**:
   - Interactive slider with Previous / Next navigation and dot indicators.
   - Verified VIP reviews from art patrons, equity partners, architects, and food critics.
   - 5-star rating badges and highlight dish callouts.
   - Global press/location mentions (*Mayfair*, *Manhattan*, *Emirates Yacht Receptions*, *Beverly Hills*).

7. **Interactive Booking & Inquiry Form**:
   - Fields: Full Name, Email, Phone, Event Date, Guest Count, Event Type dropdown, Dietary Preferences pills, Experience Tier selector, and Host Notes.
   - Pre-populated with any requested dishes selected from the gallery.
   - Client-side validation with instant visual alerts.
   - Full-stack submission to `/api/bookings`.
   - Confetti celebration animation upon submission.
   - Reservation confirmation receipt with unique Reference Number (e.g. `CZ-2026-XXXX`), print/save options, and reset controls.

8. **Concierge Portal (Admin / Evaluator Live Viewer)**:
   - Discreet access button in Navbar and Footer.
   - Live viewer for all saved booking inquiries in `/data/bookings.json`.
   - Filter by status (*Pending Concierge Review*, *Confirmed*, *Followed Up*).
   - Real-time status update functionality via `PATCH /api/bookings`.

9. **Footer**:
   - Brand logo and luxury tagline: *"Haute Gastronomie"*.
   - Navigation quick links.
   - Concierge contact info: direct VIP mobile, email, and global presence cities.
   - Private Salon newsletter signup linked to `/api/newsletter`.
   - Social media links (Instagram, Facebook, YouTube, LinkedIn).
   - Copyright notice for `chefzaved.com`.

10. **Floating Controls**:
    - Floating *"Book a Chef"* speed dial showing the number of selected dishes.
    - Scroll-to-top button.

---

## ✦ Technical Architecture & Full-Stack APIs

```
d:\chefzaved.com\
├── app/
│   ├── api/
│   │   ├── bookings/
│   │   │   └── route.ts       # GET (retrieve), POST (create), PATCH (update status)
│   │   └── newsletter/
│   │       └── route.ts       # POST (subscribe to private salon circle)
│   ├── globals.css            # Tailwind CSS v4 setup & custom gold gradients
│   ├── layout.tsx             # Root layout with Playfair Display & Inter fonts
│   └── page.tsx               # Main full-stack application coordinator
├── components/
│   ├── Navbar.tsx             # Sticky luxury header & mobile drawer
│   ├── Hero.tsx               # Cinematic hero with dual CTAs & trust strip
│   ├── About.tsx              # Chef bio, credentials & photography collage
│   ├── Services.tsx           # 4-card service grid with experience reservation
│   ├── MenuPortfolio.tsx      # Interactive categorized dishes & lightbox
│   ├── Testimonials.tsx       # VIP review slider with rating cards
│   ├── BookingForm.tsx        # Multi-step inquiry form with confetti & receipt
│   ├── ConciergePortalModal.tsx # Live database viewer for reservations
│   ├── Footer.tsx             # Footer, social links & newsletter
│   └── FloatingCTA.tsx        # Floating booking trigger & scroll-to-top
├── data/
│   ├── chefData.ts            # Dish repertoire, services, bio, testimonials
│   ├── bookings.json          # Persistent JSON store for booking records
│   └── subscribers.json       # Persistent JSON store for newsletter
└── package.json
```

---

## ✦ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run in Development Mode
```bash
npm run dev
```
Open [http://localhost:9146](http://localhost:9146) in your browser.

### 3. Production Build & Start
```bash
npm run build
npm run start
```
Starts the production server on [http://localhost:9146](http://localhost:9146).

---

## ✦ License
© 2026 Chef Zaved. All rights reserved. Registered at [chefzaved.com](https://chefzaved.com).
