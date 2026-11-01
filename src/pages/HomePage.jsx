import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, ShieldCheck, HeartHandshake, CheckCircle2, Car, Sparkles, Star, MapPin, Award } from 'lucide-react';
import QuickBookingWidget from '../components/QuickBookingWidget';
import TrustBadges from '../components/TrustBadges';
import DestinationCard from '../components/DestinationCard';
import PackageCard from '../components/PackageCard';
import TestimonialCard from '../components/TestimonialCard';
import { packages } from '../data/packagesData';
import { destinations } from '../data/destinationsData';
import { testimonials } from '../data/testimonialsData';

export default function HomePage({ onOpenInquiry }) {
  // Show first 3-4 top featured packages for homepage preview
  const popularPackages = packages.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-8 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-900 overflow-hidden">
        {/* Hero Background Image with Spiritual Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1628084666504-2ee178ebfefb?auto=format&fit=crop&w=2000&q=85"
            alt="Puri Jagannath Dham & Coastal Odisha"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/85 to-slate-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
        </div>

        {/* Hero Main Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center mt-6 mb-10">
          {/* Trust Banner Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-amber-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-brand-400" />
            <span>#1 Trusted Cab & Pilgrimage Logistics in Puri & Biragobindapur</span>
          </div>

          {/* Exact Hero Tagline requested */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-heading tracking-tight leading-tight sm:leading-tight">
            Travel Agency in Puri – <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-brand-400 to-orange-500">
              Shree Khetra Yatra Odisha
            </span>
          </h1>

          {/* Exact Hero Subheading requested */}
          <p className="mt-5 text-sm sm:text-base lg:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Rooted in the historic village of Biragobindapur near Puri, Shree Khetra Yatra delivers dependable, affordable taxi service and pilgrimage sightseeing tours tailored for families, solo pilgrims, and visiting groups throughout coastal Odisha.
          </p>

          {/* Hero CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/packages"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-amber-600 hover:from-brand-700 hover:to-amber-700 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-brand-600/30 flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
              <span>View Tour Packages</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href="tel:+917381414499"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/20 backdrop-blur-md flex items-center justify-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Us: +91 7381414499</span>
            </a>
          </div>

          {/* Quick bullet guarantees */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              100% Fixed Rates • No Bargaining
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Clean Sanitized AC Cabs
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Devout Native Chauffeurs
            </span>
          </div>
        </div>

        {/* Embedded Hero Quick Fare / Inquiry Box */}
        <QuickBookingWidget onOpenInquiry={onOpenInquiry} />
      </section>

      {/* TRUST HIGHLIGHTS & CORE VALUE PROPOSITIONS */}
      <TrustBadges />

      {/* SENIOR CITIZEN & FAMILY PILGRIMAGE CARE (Special Value Highlight) */}
      <section className="py-14 bg-gradient-to-b from-brand-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden border border-slate-700/50">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-amber-500/10 to-transparent pointer-events-none" />

            <div className="max-w-3xl space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
                <HeartHandshake className="w-4 h-4" />
                <span>Specialized Pilgrimage Assistance</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                Devotional & Senior Citizen Care at Puri Dham
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Visiting Lord Jagannath with elderly parents or young children can sometimes feel overwhelming during festive crowds. Shree Khetra Yatra takes pride in offering an unhurried, gentle travel experience:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-brand-500/20 text-brand-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="text-xs sm:text-sm">
                    <strong className="text-white block">Unhurried Temple Halts:</strong>
                    <span className="text-slate-300">No rushed schedules. Take your time for quiet darshan and arati.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-brand-500/20 text-brand-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="text-xs sm:text-sm">
                    <strong className="text-white block">Mahaprasad Coordination:</strong>
                    <span className="text-slate-300">Arrangements for fresh, authentic earthen pot Mahaprasad at Ananda Bazar.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-brand-500/20 text-brand-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="text-xs sm:text-sm">
                    <strong className="text-white block">Grand Road E-Rickshaw Link:</strong>
                    <span className="text-slate-300">Assistance with battery car / e-rickshaw right up to Singhadwara gate.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-brand-500/20 text-brand-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="text-xs sm:text-sm">
                    <strong className="text-white block">Courteous Native Drivers:</strong>
                    <span className="text-slate-300">Fluent in Odia, Hindi, Bengali & English, providing respectful local guidance.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenInquiry('Senior Citizen Pilgrimage Assistance')}
                  className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm transition-all shadow-lg shadow-amber-500/25 flex items-center gap-2"
                >
                  <HeartHandshake className="w-4 h-4" />
                  <span>Request Senior Citizen Yatra Cab</span>
                </button>
                <a
                  href="tel:+917381414499"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Speak with Local Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED DESTINATIONS SECTION */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-widest block mb-2 font-heading">
              Coastal Odisha Sightseeing Hubs
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Featured Pilgrimage & Coastal Destinations
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              From the divine sanctum of Lord Jagannath in Puri to the world heritage sun temple of Konark and dolphin waters of Chilika, we cover every iconic landmark.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest) => (
              <DestinationCard
                key={dest.id}
                destination={dest}
                onExplore={onOpenInquiry}
              />
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR TOUR PACKAGES PREVIEW SECTION */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold text-brand-600 uppercase tracking-widest block mb-2 font-heading">
                Best-Selling Fixed Price Itineraries
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
                Popular Tour Packages & Cab Bookings
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
                Transparent fares with clean AC sedans and SUVs. Zero toll surprises, zero fuel surcharges.
              </p>
            </div>

            <Link
              to="/packages"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-700 transition-colors group shrink-0"
            >
              <span>Explore All Tour Packages</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onBook={onOpenInquiry}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all"
            >
              <span>View All 6 Packages & Detailed Itineraries &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* OUR FLEET SHOWCASE */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-widest block mb-2 font-heading">
              Our Premium Cab Fleet
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Spotlessly Clean & Fully Air-Conditioned
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Each vehicle in our fleet is cleaned, vacuumed, and safety-inspected daily at our Biragobindapur yard before heading out.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-center">
              <div className="h-32 rounded-xl overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=500&q=80"
                  alt="Maruti Suzuki Dzire AC"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading font-bold text-slate-900 text-base">Maruti Swift Dzire</h3>
              <p className="text-xs text-brand-600 font-semibold mt-0.5">AC Sedan • 4 Passengers</p>
              <p className="text-xs text-slate-500 mt-2">Smooth highway drive, ideal for couples and small pilgrim families.</p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-center">
              <div className="h-32 rounded-xl overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=500&q=80"
                  alt="Toyota Etios AC"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading font-bold text-slate-900 text-base">Toyota Etios</h3>
              <p className="text-xs text-brand-600 font-semibold mt-0.5">AC Sedan • 4 Passengers</p>
              <p className="text-xs text-slate-500 mt-2">Extra boot space for temple luggage and generous rear legroom.</p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-center">
              <div className="h-32 rounded-xl overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=500&q=80"
                  alt="Maruti Suzuki Ertiga"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading font-bold text-slate-900 text-base">Maruti Ertiga</h3>
              <p className="text-xs text-brand-600 font-semibold mt-0.5">AC MPV • 6-7 Passengers</p>
              <p className="text-xs text-slate-500 mt-2">Spacious multi-row seating for extended families and group yatras.</p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-center">
              <div className="h-32 rounded-xl overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=500&q=80"
                  alt="Toyota Innova Crysta"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading font-bold text-slate-900 text-base">Toyota Innova Crysta</h3>
              <p className="text-xs text-brand-600 font-semibold mt-0.5">Luxury AC SUV • 7 Passengers</p>
              <p className="text-xs text-slate-500 mt-2">Premium ride comfort for Golden Triangle circuit sightseeing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PILGRIM TESTIMONIALS */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-widest block mb-2 font-heading">
              Devotee Experiences
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
              Trusted by Pilgrims Across India
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Read how devotees and travelers from Kolkata, Delhi, Bengaluru, and beyond experienced their pilgrimage with Shree Khetra Yatra.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((test) => (
              <TestimonialCard key={test.id} review={test} />
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM INVITATION CTA BANNER */}
      <section className="py-16 bg-gradient-to-r from-brand-700 via-brand-600 to-amber-600 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            Biragobindapur Desk Operational 24/7
          </span>

          <h2 className="text-3xl sm:text-5xl font-black font-heading leading-tight">
            Planning Your Yatra to Lord Jagannath Dham?
          </h2>

          <p className="text-brand-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Reserve your private AC cab with 100% honest pricing and polite local chauffeurs. Speak directly with our dispatch desk today.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenInquiry('Bottom CTA Yatra Booking')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-950 hover:bg-black text-white font-extrabold text-sm shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <Car className="w-4 h-4 text-amber-400" />
              <span>Book Cab Online Now</span>
            </button>

            <a
              href="https://wa.me/917381414499?text=Jai%20Jagannath!%20I%20would%20like%20to%20book%20a%20cab%20in%20Puri."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-brand-800 font-extrabold text-sm shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <span>Chat on WhatsApp: +91 7381414499</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
