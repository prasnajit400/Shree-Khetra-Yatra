import React, { useState } from 'react';
import { MapPin, Navigation, Calendar, Car, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function QuickBookingWidget({ onOpenInquiry }) {
  const today = new Date().toISOString().split('T')[0];
  const [pickup, setPickup] = useState('Puri Hotel / Grand Road');
  const [destination, setDestination] = useState('Puri to Chilika Lake Taxi (₹2,200)');
  const [travelDate, setTravelDate] = useState(today);
  const [vehicle, setVehicle] = useState('Swift Dzire (AC Sedan - 4+1)');

  const handleQuickSearch = (e) => {
    e.preventDefault();
    const tourQuery = `${destination} • Pickup: ${pickup} • Date: ${travelDate} • ${vehicle}`;
    onOpenInquiry(tourQuery);
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-slate-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-cyan-500/30 p-5 sm:p-7 relative z-20 text-white">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-5 border-b border-slate-800 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
          <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-cyan-300 font-heading">
            Instant Fixed Cab Fare Calculator & Desk Booking
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Official Tariff • Zero Hidden Surges</span>
        </div>
      </div>

      <form onSubmit={handleQuickSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Pickup Location - Biragobindapur Sasan removed */}
        <div>
          <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wide mb-1.5 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            Pick-up Point
          </label>
          <select
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs sm:text-sm font-semibold text-white outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-colors cursor-pointer"
          >
            <option>Puri Hotel / Grand Road</option>
            <option>Puri Railway Station</option>
            <option>Bhubaneswar Airport (BBI)</option>
            <option>Bhubaneswar Railway Station</option>
            <option>Konark Marine Drive</option>
          </select>
        </div>

        {/* Destination / Tour Circuit matching price chart */}
        <div>
          <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wide mb-1.5 flex items-center gap-1">
            <Navigation className="w-3.5 h-3.5 text-cyan-400" />
            Route / Circuit
          </label>
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs sm:text-sm font-semibold text-white outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-colors cursor-pointer"
          >
            <option>Puri to Chilika Lake Taxi (₹2,200)</option>
            <option>Puri to Konark Taxi Booking (₹1,699)</option>
            <option>Puri to Bhubaneswar Drop (₹1,800)</option>
            <option>Bhubaneswar Sightseeing from Puri (₹3,000)</option>
            <option>Raghurajpur Crafts Village (₹1,600)</option>
            <option>Full-Day Golden Triangle Circuit (₹4,499)</option>
          </select>
        </div>

        {/* Travel Date with Calendar Picker */}
        <div>
          <label className="block text-[11px] font-bold text-amber-400 uppercase tracking-wide mb-1.5 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            Travel Date
          </label>
          <input
            type="date"
            required
            min={today}
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-slate-950 border border-amber-500/60 rounded-xl text-xs sm:text-sm font-bold text-white outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-400 transition-colors [color-scheme:dark] cursor-pointer"
          />
        </div>

        {/* Vehicle Selection from price chart */}
        <div>
          <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wide mb-1.5 flex items-center gap-1">
            <Car className="w-3.5 h-3.5 text-cyan-400" />
            Vehicle Type
          </label>
          <select
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs sm:text-sm font-semibold text-white outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-colors cursor-pointer"
          >
            <option>Swift Dzire (AC Sedan - 4+1)</option>
            <option>Maruti Ertiga (AC MPV - 6+1)</option>
            <option>Innova Crysta (Luxury - 6+1)</option>
            <option>Tata Winger (AC Van - 12+1)</option>
            <option>Force Traveller (Minibus - 17+1)</option>
          </select>
        </div>

        {/* Full-width submit button */}
        <div className="sm:col-span-2 lg:col-span-4 mt-2">
          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 text-black font-black text-sm sm:text-base shadow-[0_0_25px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2 group transition-all active:scale-98"
          >
            <span>Book Official Fixed Fare Cab on WhatsApp</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-black" />
          </button>
        </div>
      </form>
    </div>
  );
}
