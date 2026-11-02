# Shree Khetra Yatra - Odisha Pilgrimage & Cab Service Website

A modern, responsive, multi-page web application built with **React**, **React Router v6**, **Vite**, and **Tailwind CSS** for **Shree Khetra Yatra**, a premier pilgrimage logistics and taxi service based in **Biragobindapur near Puri, Odisha, India**.

Inspired by [puritourtrip.com](https://puritourtrip.com/) with a warm spiritual aesthetic (sacred saffron/amber and coastal navy/ocean tones), transparent pricing, elder-friendly assistance, and real route navigation.

---

## 🏛️ Business Overview & Contact
- **Business Name:** Shree Khetra Yatra (also known as *Shree Khetra Yatra Odisha*)
- **Tagline / Hero Heading:** Travel Agency in Puri – Shree Khetra Yatra Odisha
- **Hero Subheading:** Rooted in the historic village of Biragobindapur near Puri, Shree Khetra Yatra delivers dependable, affordable taxi service and pilgrimage sightseeing tours tailored for families, solo pilgrims, and visiting groups throughout coastal Odisha.
- **Phone / WhatsApp:** [+91 7381414499](tel:+917381414499)
- **Support Email:** [shreekhetraryatra@gmail.com](mailto:shreekhetraryatra@gmail.com)
- **Address:** Biragobindapur, Puri, Odisha 752014, India
- **Operating Desk Hours:** 24/7 Roadside Cab Dispatch (Desk Operational Daily 06:00 AM – 09:00 PM IST)

---

## 🧭 Page Architecture & Real Routes

| Route | Page | Key Features |
|---|---|---|
| `/` | **Home Page** | Hero section with tagline, CTAs ("View Tour Packages", "Call Us"), embedded Quick Fare & Tour Inquiry Box, 4 Trust Badges, Senior Citizen Pilgrimage Care feature, Featured Destinations grid, Best-selling packages preview, Fleet showcase, Pilgrim reviews, and Bottom booking banner. |
| `/packages` | **Tour Packages** | Comprehensive package listings with category filtering (`All`, `Chilika Lake`, `Heritage & Craft`, `Full Day Circuit`, `Konark Express`, `Airport Transfer`, `Puri Local`) and dynamic sorting (Default, Price: Low to High, Price: High to Low, Duration). Each card has duration, vehicle type, rating, inclusions, and "Book / Inquiry" button opening the lead modal. |
| `/gallery` | **Photo Gallery** | Filterable photo showcase categorized by `Coastal Odisha`, `Temple & Coast`, `Pilgrimage & Landscapes`, and `Our Fleet`. Features an interactive full-screen Lightbox modal with location tags and instant booking shortcuts. |
| `/contact` | **Contact Us** | Complete contact directory, strategic Biragobindapur location details, interactive Lead Capture Form (Full Name, Phone, Email, Travel Dates, Route, Notes), 1-click WhatsApp redirect, direct call options, and an expandable FAQ accordion covering temple attire, elder care, and airport logistics. |

---

## 🚗 Core Tour Packages & Rates

1. **Puri to Chilika Lake Taxi**
   - Vehicle: Swift Dzire (AC)
   - Duration: 7 Hours
   - Price: **₹2,200**
   - Highlights: Satapada Irrawaddy dolphin spotting, Sea Mouth boat ride transfer.

2. **Raghurajpur Crafts & Pattachitra Village Tour**
   - Vehicle: Private Cab (AC)
   - Duration: 4 Hours
   - Price: **₹1,600** (Discounted from ₹1,900)
   - Highlights: Heritage art & craft village excursion, live palm-leaf painting, direct artisan studio visits.

3. **Full-Day Golden Triangle Private Cab Tour**
   - Vehicle: Private Cab (AC)
   - Duration: 8 Hours
   - Price: **₹4,499**
   - Highlights: Complete heritage circuit covering Puri Dham + Konark Sun Temple + Chandrabhaga Beach + Bhubaneswar (Dhauli & Lingaraj).

4. **Puri to Konark Taxi Booking**
   - Vehicle: Private Cab (AC)
   - Duration: 3 Hours
   - Price: **Contact Desk for Best Rates** (Starts from ₹1,500)
   - Highlights: Express Sun Temple tour, Marine Drive scenic drive, and Chandrabhaga Beach stroll.

5. **Bhubaneswar Airport (BBI) to Puri Direct AC Transfer**
   - Vehicle: Swift Dzire / Ertiga (AC)
   - Duration: 1.5 - 2 Hours
   - Price: **₹1,800**
   - Highlights: Real-time flight tracking, airport gate meet & greet, zero flight delay surcharges.

6. **Puri Local Pancha Tirtha & Temple Sightseeing**
   - Vehicle: Swift Dzire (AC)
   - Duration: 4.5 Hours
   - Price: **₹1,400**
   - Highlights: Gundicha Temple, Lokanath Temple, Narendra Sarovar, and Golden Beach.

---

## 🌟 Global UI Components & Interactivity

- **Sticky Navigation Bar:** Logo featuring Lord Jagannath Chakra motif, genuine `NavLink` routing with active indicators, quick contact phone and email, and desktop/mobile drawer.
- **Floating WhatsApp Button:** Fixed bottom-right button with pulse animation linking directly to `https://wa.me/917381414499` with pre-filled message.
- **Mobile Quick Call Button:** Fixed bottom-left button for 1-tap phone calls on mobile devices.
- **Interactive Package Inquiry Modal:** Can be launched from any package card or header CTA, automatically pre-filling the selected package name and routing customer details directly to WhatsApp.
- **Scroll to Top:** Seamlessly resets scroll position to the top upon route changes.

---

## 🛠️ Development & Build Commands

To run locally in the workspace:

```bash
# Start development server
npm run dev

# Build production bundle
npm run build

# Preview production build
npm run preview
```

# Test
# Test
