import React, { useState } from 'react';
import { officialRateCards, termsAndConditions } from '../data/rateCardData';
import { Car, Users, ArrowRight, Eye, ShieldCheck, Check, Clock, Sparkles, X, FileText, ChevronRight } from 'lucide-react';

export default function MainFourAttractions({ onOpenInquiry }) {
  const [selectedPriceModal, setSelectedPriceModal] = useState(null);

  return (
    <section className="pt-8 sm:pt-10 pb-14 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Official Tariff Packages</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black font-heading text-white tracking-tight">
              Top 4 Sightseeing & Cab Packages
            </h2>
            <p className="mt-1 text-sm text-slate-400 max-w-2xl">
              Verified coastal circuits departing directly from Puri. Fixed honest fares, vetted drivers, and unhurried halts.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3.5 py-2 rounded-xl shrink-0">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Fixed Rates • Toll & Parking Included</span>
          </div>
        </div>

        {/* 4 Main Attraction Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {officialRateCards.map((card) => (
            <div
              key={card.id}
              className="bg-slate-900/90 rounded-2xl border border-slate-800 hover:border-cyan-500/50 shadow-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.18)] transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              <div>
                {/* 100% Crisp Graphic Banner (No dark overlay gradient, exact 3:2 aspect ratio matching user's banner) */}
                <div className="relative aspect-[3/2] w-full overflow-hidden bg-slate-950">
                  <img
                    src={card.image}
                    alt={card.categoryTitle}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Card Body - Free of extra route descriptions as requested */}
                <div className="p-4 sm:p-5 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      {card.badge}
                    </span>
                    <span className="text-[11px] font-bold text-amber-300 bg-amber-950/40 border border-amber-800/40 px-2 py-0.5 rounded-md">
                      {card.durationDistance}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-heading text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {card.categoryTitle}
                  </h3>

                  {/* Starting Fare */}
                  <div className="flex items-baseline justify-between pt-1 border-t border-slate-800/80">
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                      Base Fare Starts:
                    </span>
                    <span className="text-xl sm:text-2xl font-black text-amber-300 font-heading">
                      {card.startingPrice}
                    </span>
                  </div>

                  {/* Available Fleet Pills */}
                  <div className="pt-2 border-t border-slate-800/80">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                      Available Fleet:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {card.rates.map((v, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-[10px] text-slate-300 font-medium"
                        >
                          {v.vehicle}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 2 Action Buttons: "Book Cab Now" & "View All Vehicle Prices" */}
              <div className="p-4 sm:p-5 pt-0 space-y-2">
                <button
                  onClick={() => onOpenInquiry(`Booking for ${card.categoryTitle} (${card.startingPrice})`)}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-400 text-black font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-98"
                >
                  <Car className="w-4 h-4 text-black" />
                  <span>Book Cab Now</span>
                  <ArrowRight className="w-3.5 h-3.5 text-black" />
                </button>

                <button
                  onClick={() => setSelectedPriceModal(card)}
                  className="w-full py-2 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-cyan-300 hover:text-white border border-slate-700 font-bold text-xs transition-colors flex items-center justify-center gap-2 group-hover:border-cyan-500/40"
                >
                  <Eye className="w-3.5 h-3.5 text-cyan-400" />
                  <span>View All Vehicle Prices</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* 🚀 DEDICATED FULL VEHICLE PRICING & TERMS MODAL (Launched by "View All Vehicle Prices") */}
      {selectedPriceModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn"
          onClick={() => setSelectedPriceModal(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden border border-cyan-500/40 shadow-2xl max-h-[92vh] flex flex-col text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 border-b border-slate-800 flex items-center justify-between shrink-0">
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-1">
                  OFFICIAL TARIFF CARD BREAKDOWN
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-heading text-white">
                  {selectedPriceModal.categoryTitle}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Standard Limits: <strong className="text-amber-300">{selectedPriceModal.durationDistance}</strong>
                </p>
              </div>

              <button
                onClick={() => setSelectedPriceModal(null)}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-white transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body with Vehicle Price Table */}
            <div className="p-6 overflow-y-auto space-y-6">
              
              {/* Detailed Table */}
              <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/80">
                <table className="w-full text-left text-sm text-slate-300 border-collapse">
                  <thead className="text-xs uppercase font-extrabold tracking-wider bg-slate-950 text-amber-400 border-b border-slate-800">
                    <tr>
                      <th className="py-3 px-4">VEHICLE</th>
                      <th className="py-3 px-3">SEATS</th>
                      <th className="py-3 px-3">BASE FARE</th>
                      <th className="py-3 px-3">EXTRA HRS</th>
                      <th className="py-3 px-3">EXTRA KM</th>
                      <th className="py-3 px-3">PER KM</th>
                      <th className="py-3 px-4 text-center">ACTION</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {selectedPriceModal.rates.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-900/60 transition-colors">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-16 h-11 rounded-lg overflow-hidden bg-slate-900 border border-slate-800 shrink-0">
                              <img src={row.image} alt={row.vehicle} className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <strong className="text-white block font-heading">{row.vehicle}</strong>
                              <span className="text-[10px] text-slate-400 line-clamp-1">{row.description}</span>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-3 text-cyan-300 font-bold">{row.seats}</td>
                        <td className="py-3 px-3 text-lg font-black text-amber-300 font-heading">{row.baseRateDisplay}</td>
                        <td className="py-3 px-3 font-semibold">{row.extraHrs}</td>
                        <td className="py-3 px-3 font-semibold">{row.extraKm}</td>
                        <td className="py-3 px-3 font-semibold">{row.perKm}</td>
                        <td className="py-3 px-4 text-center">
                          <button
                            onClick={() => {
                              const tourName = `${selectedPriceModal.categoryTitle} - ${row.vehicle} (${row.baseRateDisplay})`;
                              setSelectedPriceModal(null);
                              onOpenInquiry(tourName);
                            }}
                            className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs shadow-md transition-all active:scale-95 whitespace-nowrap"
                          >
                            Book {row.vehicle}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Complete Terms & Conditions */}
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider">
                  <FileText className="w-4 h-4" />
                  <span>Terms & Conditions (Official Tariff Policy)</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
                  {termsAndConditions.map((term, tIdx) => (
                    <div key={tIdx} className="space-y-1">
                      <strong className="text-white block font-heading">{term.title}</strong>
                      <ul className="space-y-1 text-slate-400 list-disc list-inside">
                        {term.points.map((pt, pIdx) => (
                          <li key={pIdx} className="leading-relaxed">{pt}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>🔒 Transparent pricing. Zero surprise toll surcharges.</span>
              <button
                onClick={() => setSelectedPriceModal(null)}
                className="px-4 py-2 rounded-xl border border-slate-700 hover:bg-slate-800 text-white font-bold"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
