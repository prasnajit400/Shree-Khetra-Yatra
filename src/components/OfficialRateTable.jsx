import React, { useState } from 'react';
import { officialRateCards } from '../data/rateCardData';
import { Car, Users, ArrowRight, ShieldCheck, Check, Sparkles, Clock, Navigation } from 'lucide-react';

export default function OfficialRateTable({ onOpenInquiry }) {
  const [activeTab, setActiveTab] = useState(0);
  const currentCard = officialRateCards[activeTab];

  return (
    <section className="py-16 bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Official Fixed Fare Tariff Card</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Transparent Taxi Rates & Fleet Pricing
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            100% verified rates. No bargaining, no seasonal price gouging, and no hidden driver surcharges.
          </p>
        </div>

        {/* Route Selector Tabs (4 Routes from user's price chart) */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-8">
          {officialRateCards.map((card, idx) => (
            <button
              key={card.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === idx
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.4)] scale-105'
                  : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>{card.categoryTitle}</span>
            </button>
          ))}
        </div>

        {/* Selected Route Info Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 rounded-2xl p-4 sm:p-5 border border-amber-500/30 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-lg">
          <div>
            <h3 className="text-lg sm:text-xl font-bold font-heading text-amber-300">
              {currentCard.categoryTitle}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {currentCard.routeDescription}
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-300 bg-cyan-950/60 px-3 py-1.5 rounded-xl border border-cyan-800/60 shrink-0">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span>Standard Limit: {currentCard.durationDistance}</span>
          </div>
        </div>

        {/* Desktop Table View (Exact layout of the user's price chart screenshot) */}
        <div className="hidden md:block overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl">
          <table className="w-full text-left text-sm text-slate-300 border-collapse">
            <thead className="text-xs uppercase font-extrabold tracking-wider bg-slate-950 text-amber-400 border-b border-slate-800">
              <tr>
                <th className="py-4 px-5">IMAGE</th>
                <th className="py-4 px-4">VEHICLE</th>
                <th className="py-4 px-4">SEATS</th>
                <th className="py-4 px-4">{currentCard.durationDistance.includes('80Km') ? '80KM / 8HRS' : 'BASE FARE'}</th>
                <th className="py-4 px-4">EXTRA HRS</th>
                <th className="py-4 px-4">EXTRA KM</th>
                <th className="py-4 px-4">PER KM</th>
                <th className="py-4 px-5 text-center">BOOK</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 font-medium">
              {currentCard.rates.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-slate-800/50 transition-colors">
                  {/* Vehicle Image */}
                  <td className="py-3 px-5">
                    <div className="w-20 h-14 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shrink-0 shadow-md">
                      <img
                        src={row.image}
                        alt={row.vehicle}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </td>

                  {/* Vehicle Name */}
                  <td className="py-3 px-4">
                    <strong className="text-white text-base block font-heading">
                      {row.vehicle}
                    </strong>
                    <span className="text-[11px] text-slate-400 line-clamp-1">
                      {row.description}
                    </span>
                  </td>

                  {/* Seats */}
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 text-xs font-bold text-slate-200">
                      <Users className="w-3.5 h-3.5 text-cyan-400" />
                      {row.seats}
                    </span>
                  </td>

                  {/* Base Rate */}
                  <td className="py-3 px-4">
                    <span className="text-xl font-black text-amber-300 font-heading">
                      {row.baseRateDisplay}
                    </span>
                  </td>

                  {/* Extra Hours */}
                  <td className="py-3 px-4 text-slate-300 font-semibold">
                    {row.extraHrs}
                  </td>

                  {/* Extra Km */}
                  <td className="py-3 px-4 text-slate-300 font-semibold">
                    {row.extraKm}
                  </td>

                  {/* Per Km */}
                  <td className="py-3 px-4 text-slate-300 font-semibold">
                    {row.perKm}
                  </td>

                  {/* Book Action */}
                  <td className="py-3 px-5 text-center">
                    <button
                      onClick={() => onOpenInquiry(`${currentCard.categoryTitle} - ${row.vehicle} (${row.baseRateDisplay})`)}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-extrabold text-xs shadow-md transition-all active:scale-95 whitespace-nowrap"
                    >
                      Book Cab
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Responsive Cards View */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {currentCard.rates.map((row, rIdx) => (
            <div
              key={rIdx}
              className="bg-slate-900 rounded-2xl p-4 border border-slate-800 shadow-lg space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-20 h-14 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shrink-0">
                  <img
                    src={row.image}
                    alt={row.vehicle}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-heading">
                    {row.vehicle}
                  </h4>
                  <span className="inline-flex items-center gap-1 text-xs text-cyan-300 font-semibold">
                    <Users className="w-3.5 h-3.5" />
                    Seats: {row.seats}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 bg-slate-950 p-2.5 rounded-xl border border-slate-800/80 text-center text-xs">
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase">Base Fare</span>
                  <strong className="text-amber-300 text-sm font-bold font-heading">{row.baseRateDisplay}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase">Extra Hr</span>
                  <span className="text-slate-200 font-semibold">{row.extraHrs}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase">Extra Km</span>
                  <span className="text-slate-200 font-semibold">{row.extraKm}</span>
                </div>
              </div>

              <button
                onClick={() => onOpenInquiry(`${currentCard.categoryTitle} - ${row.vehicle} (${row.baseRateDisplay})`)}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-extrabold text-xs shadow-md"
              >
                Book {row.vehicle} Now
              </button>
            </div>
          ))}
        </div>

        {/* Trust Note */}
        <div className="mt-8 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>All rates include clean AC vehicle, native professional chauffeur, fuel, and standard parking clearances.</span>
          </div>
          <span className="text-amber-300 font-semibold shrink-0">
            Toll taxes included as per route rules
          </span>
        </div>

      </div>
    </section>
  );
}

