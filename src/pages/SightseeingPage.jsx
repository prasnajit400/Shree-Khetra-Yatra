import React, { useState, useMemo } from 'react';
import { sightseeingRegions, sightseeingSpots } from '../data/sightseeingData';
import { MapPin, Clock, Compass, Ticket, Info, Check, ArrowRight, Car, Sparkles, Filter, Phone } from 'lucide-react';

export default function SightseeingPage({ onOpenInquiry }) {
  const [selectedRegion, setSelectedRegion] = useState('All');

  const filteredSpots = useMemo(() => {
    if (selectedRegion === 'All') return sightseeingSpots;
    return sightseeingSpots.filter((s) => s.region === selectedRegion);
  }, [selectedRegion]);

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-8 pb-20 selection:bg-cyan-500 selection:text-black">
      {/* Cinematic Futuristic Page Banner */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-md">
            <Compass className="w-4 h-4 text-cyan-400" />
            <span>Complete Coastal Odisha Sightseeing Atlas</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white leading-tight">
            Explore Sacred Sights & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-amber-300 to-orange-500">
              Coastal Wonders of Odisha
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From the sanctum sanctorum of Lord Jagannath in Puri to the architectural wonders of Konark, dolphin sanctuaries of Chilika, and the ancient stone temples of Bhubaneswar—explore distances, timings, and book direct private AC cabs.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-2 text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              Doorstep Hotel Pick-up Anywhere in Puri
            </span>
            <span className="flex items-center gap-1.5 text-amber-300">
              ★ Courteous Native Odia & Hindi Chauffeurs
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              ✓ 100% Fixed Fares • Zero Surges
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Region Filter Bar */}
        <div className="flex items-center justify-center flex-wrap gap-2 pb-4">
          <div className="flex items-center gap-1.5 bg-slate-900/90 backdrop-blur-md p-1.5 rounded-2xl border border-slate-800">
            {sightseeingRegions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedRegion === region
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-[0_0_20px_rgba(6,182,212,0.5)] scale-105'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Counter */}
        <div className="text-center text-xs text-slate-400 mt-2 mb-8">
          Showing <strong className="text-cyan-400">{filteredSpots.length}</strong> verified destinations in <span className="text-white font-semibold">{selectedRegion}</span>
        </div>

        {/* Sightseeing Spot Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSpots.map((spot) => (
            <div
              key={spot.id}
              className="bg-slate-900/90 rounded-2xl border border-slate-800 hover:border-cyan-500/40 shadow-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={spot.image}
                    alt={spot.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/90 text-black backdrop-blur-md shadow-md">
                      {spot.region}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-400 text-black shadow-md">
                      {spot.tag}
                    </span>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-xl font-bold font-heading text-white drop-shadow-md">
                      {spot.title}
                    </h3>
                    <p className="text-xs text-cyan-300 flex items-center gap-1 mt-0.5 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{spot.distanceFromPuri}</span>
                    </p>
                  </div>
                </div>

                {/* Spot Details Body */}
                <div className="p-5 space-y-4">
                  {/* Quick Metadata Grid */}
                  <div className="grid grid-cols-2 gap-2 text-xs bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase font-bold tracking-wider">
                        Best Time:
                      </span>
                      <span className="text-slate-200 font-medium">{spot.bestTime}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase font-bold tracking-wider">
                        Duration:
                      </span>
                      <span className="text-slate-200 font-medium">{spot.duration}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {spot.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-800">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                      Key Highlights:
                    </span>
                    {spot.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tips Note */}
                  {spot.tips && (
                    <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 flex items-start gap-2">
                      <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{spot.tips}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onOpenInquiry(`Cab Booking for ${spot.title}`)}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 text-black font-extrabold text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center justify-center gap-2 active:scale-98"
                >
                  <Car className="w-4 h-4" />
                  <span>Book Private Cab for {spot.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Customized Circuit Inquiry Banner */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 sm:p-12 border border-cyan-500/30 shadow-2xl relative overflow-hidden text-center">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider border border-cyan-500/40">
              Multi-Spot Custom Itineraries
            </span>
            <h3 className="text-2xl sm:text-4xl font-black font-heading text-white">
              Want to Combine Multiple Sightseeing Spots in One Day?
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Our dispatch desk in Biragobindapur specializes in custom combination packages (e.g., Puri Temple + Konark + Chandrabhaga + Chilika Satapada). Tell us your dream itinerary and we will calculate the most affordable fixed fare!
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onOpenInquiry('Custom Multi-Spot Sightseeing Itinerary')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-sm shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all flex items-center justify-center gap-2"
              >
                <Compass className="w-4 h-4" />
                <span>Build Custom Tour</span>
              </button>
              <a
                href="tel:+917381414499"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Call Desk: +91 7381414499</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

