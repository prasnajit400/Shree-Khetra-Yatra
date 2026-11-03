import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, ShieldCheck, HeartHandshake, CheckCircle2, Car, Sparkles, MapPin, Compass, ExternalLink, Clock } from 'lucide-react';
import MainFourAttractions from '../components/MainFourAttractions';
import QuickBookingWidget from '../components/QuickBookingWidget';
import TrustBadges from '../components/TrustBadges';
import OfficialRateTable from '../components/OfficialRateTable';
import DestinationCard from '../components/DestinationCard';
import { destinations } from '../data/destinationsData';

export default function HomePage({ onOpenInquiry }) {
  // Route distance matrix
  const distanceMatrix = [
    { from: "Puri Dham (Grand Road)", to: "Konark Sun Temple", distance: "35 km", time: "45 mins", route: "Marine Drive Highway", bestCab: "Dzire (₹1,699) • Ertiga (₹2,000)" },
    { from: "Puri Dham", to: "Chilika Lake (Satapada)", distance: "50 km", time: "1 hr 15 mins", route: "Satapada Coastal Road", bestCab: "Dzire (₹2,200) • Innova / Winger (₹4,000)" },
    { from: "Puri Dham", to: "Bhubaneswar Airport (BBI)", distance: "60 km", time: "1 hr 20 mins", route: "NH-316 Express Corridor", bestCab: "Dzire (₹1,800) • Ertiga (₹2,000)" },
    { from: "Puri Dham", to: "Raghurajpur Heritage Village", distance: "14 km", time: "25 mins", route: "Bhargavi River Corridor", bestCab: "Private Cab (₹1,600)" },
    { from: "Puri Dham", to: "Dhauli Shanti Stupa", distance: "48 km", time: "1 hr", route: "NH-316 Highway", bestCab: "Sightseeing Cab (₹3,000)" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-black">
      
      {/* 🌟 1. TOP 4 SIGHTSEEING & CAB PACKAGES (Directly below Logo section, at the very top of page) */}
      <MainFourAttractions onOpenInquiry={onOpenInquiry} />

      {/* 🚀 2. QUICK FARE CALCULATOR & DESK BOOKING WIDGET */}
      <section className="relative z-30 py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuickBookingWidget onOpenInquiry={onOpenInquiry} />
      </section>

      {/* 🛡️ 3. CORE TRUST VALUE PROPOSITIONS (Verified Cabs, Honest Fixed Fare, Desk Support, 0 Rushed Schedules) */}
      <TrustBadges />

      {/* 📋 4. OFFICIAL FIXED TARIFF RATE CARD (Full breakdown matching cardboard price chart) */}
      <OfficialRateTable onOpenInquiry={onOpenInquiry} />

      {/* 🗺️ 5. INTERACTIVE ODISHA YATRA ROUTE DISTANCE & DURATION MATRIX */}
      <section className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-2 font-heading">
                Highway Logistics & Distance Guide
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                Odisha Yatra Travel Time & Highway Distance Matrix
              </h2>
              <p className="mt-2 text-sm text-slate-400 max-w-2xl">
                Plan your day itineraries with exact point-to-point road distances and optimal private cab suggestions departing from Puri.
              </p>
            </div>

            <Link
              to="/sightseeing"
              className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors group shrink-0"
            >
              <span>Explore Sightseeing Atlas</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {distanceMatrix.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-950/80 rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/40 transition-all shadow-xl space-y-4 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-bold">
                      Route #{idx + 1}
                    </span>
                    <span className="text-slate-400 font-semibold">{item.route}</span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-white group-hover:text-cyan-300 transition-colors">
                    {item.from} &rarr; {item.to}
                  </h3>

                  <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-slate-800/80 text-xs">
                    <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-slate-500 block text-[10px] uppercase font-bold">Road Distance</span>
                      <strong className="text-white text-sm font-heading">{item.distance}</strong>
                    </div>
                    <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-slate-500 block text-[10px] uppercase font-bold">Driving Time</span>
                      <strong className="text-amber-400 text-sm font-heading">{item.time}</strong>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="text-xs text-slate-400 mb-2">
                    <span className="font-bold text-slate-300">Suggested Cab:</span> {item.bestCab}
                  </div>
                  <button
                    onClick={() => onOpenInquiry(`Route Booking: ${item.from} to ${item.to}`)}
                    className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 hover:text-white border border-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Check Cab for this Route</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 👵 6. SENIOR CITIZEN & FAMILY PILGRIMAGE CARE BANNER */}
      <section className="py-16 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 rounded-3xl p-8 sm:p-12 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-500/30">
                <HeartHandshake className="w-4 h-4 text-cyan-400" />
                <span>Devotee & Elder Pilgrimage Care</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                Unhurried Temple Darshan & Mahaprasad Arrangements
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Visiting Lord Jagannath Dham with senior citizens requires extra empathy, patience, and native local coordination. Shree Khetra Yatra ensures zero rushed schedules:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="text-xs sm:text-sm">
                    <strong className="text-white block">Grand Road E-Rickshaw Link:</strong>
                    <span className="text-slate-400">Battery cart coordination up to Singhadwara Lion Gate.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="text-xs sm:text-sm">
                    <strong className="text-white block">Fresh Mahaprasad Seva:</strong>
                    <span className="text-slate-400">Guided collection of warm earthen pot Kudua prasad at Ananda Bazar.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="text-xs sm:text-sm">
                    <strong className="text-white block">Unhurried Halts:</strong>
                    <span className="text-slate-400">Driver waits patiently during temple prayer and arati ceremonies.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="text-xs sm:text-sm">
                    <strong className="text-white block">Vetted Native Chauffeurs:</strong>
                    <span className="text-slate-400">Polite drivers fluent in Odia, Hindi, Bengali, and English.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/pilgrimage"
                  className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-sm transition-all shadow-md flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-black" />
                  <span>Read Complete Pilgrimage Guide</span>
                </Link>
                <button
                  onClick={() => onOpenInquiry('Senior Citizen Pilgrimage Request')}
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all flex items-center gap-2"
                >
                  <Car className="w-4 h-4 text-cyan-400" />
                  <span>Request Dedicated Cab</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🏛️ 7. FEATURED SIGHTSEEING DESTINATIONS SECTION */}
      <section className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-2 font-heading">
                Explore Coastal Odisha
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
                Featured Sightseeing Destinations
              </h2>
              <p className="mt-2 text-sm text-slate-400 max-w-2xl">
                Covering the holy sanctum of Puri, UNESCO heritage Konark, dolphin waters of Chilika, and the living crafts village of Raghurajpur.
              </p>
            </div>

            <Link
              to="/sightseeing"
              className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors group shrink-0"
            >
              <span>Explore All Sightseeing Spots</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
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

      {/* 🗺️ 8. GOOGLE MAPS LOCATION HIGHLIGHT SECTION */}
      <section className="py-16 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4 mb-6">
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block font-heading mb-1">
                  Our Verified Location
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                  Visit Shree Khetra Yatra on Google Maps
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Biragobindapur, Puri, Odisha 752014 • Located on the main NH-316 highway corridor.
                </p>
              </div>

              <a
                href="https://maps.app.goo.gl/77x4XpjCax4aJULfA"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 shrink-0"
              >
                <MapPin className="w-4 h-4 text-black" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-black" />
              </a>
            </div>

            <div className="w-full h-72 sm:h-80 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 relative shadow-inner">
              <iframe
                title="Shree Khetra Yatra Google Map Embed"
                src="https://maps.google.com/maps?q=19.9210368,85.8151294&hl=en&z=15&output=embed"
                className="w-full h-full border-0 filter contrast-125"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* 📞 9. BOTTOM CALL TO ACTION */}
      <section className="py-16 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider border border-cyan-500/40">
            Biragobindapur Desk Operational 24/7
          </span>

          <h2 className="text-3xl sm:text-5xl font-black font-heading leading-tight">
            Planning Your Sacred Yatra to Lord Jagannath Dham?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Reserve your private AC cab with 100% honest pricing matching our official tariff card. Speak directly with our dispatch desk today.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenInquiry('Bottom CTA Booking')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-sm shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all flex items-center justify-center gap-2"
            >
              <Car className="w-4 h-4 text-black" />
              <span>Book Cab Online Now</span>
            </button>

            <a
              href="https://wa.me/917381414499?text=Jai%20Jagannath!%20I%20would%20like%20to%20book%20a%20cab%20in%20Puri."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <span>Chat on WhatsApp: +91 7381414499</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
