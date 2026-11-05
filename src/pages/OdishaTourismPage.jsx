import React, { useState, useMemo } from 'react';
import { tourismRegions, odishaDestinations } from '../data/odishaTourismData';
import { MapPin, Clock, Calendar, Compass, Check, ArrowRight, Car, Sparkles, Filter, Phone, MessageSquare, Info, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function OdishaTourismPage({ onOpenInquiry }) {
  const [selectedCategory, setSelectedCategory] = useState('All Destinations');

  const filteredDestinations = useMemo(() => {
    if (selectedCategory === 'All Destinations') return odishaDestinations;
    return odishaDestinations.filter((d) => d.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-8 pb-20 selection:bg-cyan-500 selection:text-black">
      
      {/* 🌟 PAGE HEADER HERO BANNER */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/25 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-md">
            <Compass className="w-4 h-4 text-cyan-400" />
            <span>Official Odisha State Tourism Guide</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white leading-tight">
            Discover Odisha — <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-amber-300 to-orange-400">
              India's Best Kept Secret
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From the 12th-century sanctum of Lord Jagannath and the misty pine hills of Daringbadi to the tribal peaks of Koraput, sacred island shrines, and wildlife sanctuaries. Explore tourist information for Odisha’s most breathtaking destinations and book direct private cab travel.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
            <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              13+ Handpicked Tourist Spots
            </span>
            <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
              <Car className="w-4 h-4 text-amber-400" />
              Dedicated Doorstep AC Cabs
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Experienced Native Chauffeurs
            </span>
          </div>
        </div>
      </section>

      {/* 🧭 FILTER & DESTINATIONS GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto max-w-full pb-3 scrollbar-none px-1">
          <div className="inline-flex items-center gap-1.5 bg-slate-900/90 backdrop-blur-md p-1.5 rounded-2xl border border-slate-800 shrink-0">
            {tourismRegions.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap shrink-0 transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-[0_0_20px_rgba(6,182,212,0.5)] scale-105'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Counter */}
        <div className="text-center text-xs text-slate-400 mt-2 mb-8">
          Showing <strong className="text-cyan-400">{filteredDestinations.length}</strong> top destinations in <span className="text-white font-semibold">{selectedCategory}</span>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest) => {
            const whatsappUrl = `https://wa.me/917381414499?text=${encodeURIComponent(
              `Hello Shree Khetra Yatra, I am interested in visiting ${dest.title}. Please share cab fares and tour package options.`
            )}`;

            return (
              <div
                key={dest.id}
                className="bg-slate-900/90 rounded-3xl border border-slate-800 hover:border-cyan-500/40 shadow-xl hover:shadow-[0_0_35px_rgba(6,182,212,0.18)] transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative h-64 overflow-hidden bg-slate-950">
                    <img
                      src={dest.image}
                      alt={dest.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/95 text-black backdrop-blur-md shadow-md">
                        {dest.category}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-400 text-black shadow-md">
                        {dest.tag}
                      </span>
                    </div>

                    {/* Title overlay */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-xl font-black font-heading text-white drop-shadow-md leading-snug">
                        {dest.title}
                      </h3>
                      <p className="text-xs text-cyan-300 flex items-center gap-1 mt-1 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{dest.distance}</span>
                      </p>
                    </div>
                  </div>

                  {/* Destination Details Body */}
                  <div className="p-5 space-y-4">
                    {/* Quick Metadata Grid */}
                    <div className="grid grid-cols-2 gap-2 text-xs bg-slate-950/70 p-3 rounded-2xl border border-slate-800">
                      <div>
                        <span className="text-slate-500 block text-[10px] uppercase font-bold tracking-wider">
                          Ideal Duration:
                        </span>
                        <span className="text-amber-300 font-semibold flex items-center gap-1 mt-0.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{dest.idealDuration}</span>
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px] uppercase font-bold tracking-wider">
                          Best Season:
                        </span>
                        <span className="text-slate-200 font-medium flex items-center gap-1 mt-0.5">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          <span className="line-clamp-1">{dest.bestSeason}</span>
                        </span>
                      </div>
                    </div>

                    {/* Summary / Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {dest.summary}
                    </p>

                    {/* Top Experiences / Highlights */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-800">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 block mb-1 font-heading">
                        Key Attractions & Experiences:
                      </span>
                      {dest.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Travel Assistance Tip */}
                    <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-800/40 text-xs text-cyan-200 flex items-start gap-2">
                      <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{dest.travelTip}</span>
                    </div>
                  </div>
                </div>

                {/* 2 High-Conversion Action Buttons */}
                <div className="p-5 pt-0 space-y-2">
                  <button
                    onClick={() => onOpenInquiry(`Tour Request for ${dest.title}`)}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-400 text-black font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-98"
                  >
                    <Car className="w-4 h-4 text-black" />
                    <span>Book Cab / Inquire Tour</span>
                    <ArrowRight className="w-3.5 h-3.5 text-black" />
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl border border-emerald-500/50 hover:bg-emerald-500/10 text-emerald-400 font-bold text-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp Tour Inquiry</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* 🚀 CUSTOM TRIP INQUIRY BANNER */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 sm:p-12 border border-cyan-500/30 shadow-2xl relative overflow-hidden text-center">
          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider border border-cyan-500/40">
              Personalized Odisha Tour Circuits
            </span>
            <h3 className="text-2xl sm:text-4xl font-black font-heading text-white">
              Impressed by a Destination in Odisha?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you want to combine the spiritual aura of Puri with the pine hills of Daringbadi, take a weekend expedition to Koraput, or visit Maa Tara Tarini and Ghatagaon—our local dispatch desk in Biragobindapur coordinates seamless private cab packages tailored to your schedule and vehicle preference.
            </p>
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onOpenInquiry('Custom Odisha Tourism Circuit Inquiry')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-sm shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all flex items-center justify-center gap-2"
              >
                <Compass className="w-4 h-4 text-black" />
                <span>Build Custom Tour Circuit</span>
              </button>
              <a
                href="https://wa.me/917381414499?text=Hello%20Shree%20Khetra%20Yatra,%20I%20would%20like%20to%20plan%20a%20custom%20Odisha%20tour."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp: +91 7381414499</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
