import React, { useState } from 'react';
import { MapPin, Navigation, Calendar, Car, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function QuickBookingWidget({ onOpenInquiry }) {
  const [pickup, setPickup] = useState('Puri Hotel / Grand Road');
  const [destination, setDestination] = useState('Puri to Chilika Lake Taxi (₹2,200)');
  const [travelDate, setTravelDate] = useState('');
  const [vehicle, setVehicle] = useState('Swift Dzire (AC Sedan)');

  const handleQuickSearch = (e) => {
    e.preventDefault();
    const tourQuery = `${destination} • Pickup: ${pickup} • ${vehicle}`;
    onOpenInquiry(tourQuery);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/50 p-4 sm:p-6 lg:p-7 relative z-20">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-slate-100 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-700 font-heading">
            Instant Cab Fare Calculator & Desk Inquiry
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Zero Surges • Fixed Rates</span>
        </div>
      </div>

      <form onSubmit={handleQuickSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Pickup Location */}
        <div>
          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wide mb-1.5 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-brand-500" />
            Pick-up Point
          </label>
          <select
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="w-full px-3 py-2.5 bg-slate-50 hover:bg-slate-100/80 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-colors"
          >
            <option>Puri Hotel / Grand Road</option>
            <option>Puri Railway Station</option>
            <option>Bhubaneswar Airport (BBI)</option>
            <option>Bhubaneswar Railway Station</option>
            <option>Biragobindapur Sasan</option>
            <option>Konark Marine Drive</option>
          </select>
        </div>

        {/* Destination / Tour Circuit */}
        <div>
          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wide mb-1.5 flex items-center gap-1">
            <Navigation className="w-3.5 h-3.5 text-brand-500" />
            Tour / Drop Destination
          </label>
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full px-3 py-2.5 bg-slate-50 hover:bg-slate-100/80 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-colors"
          >
            <option>Puri to Chilika Lake Taxi (₹2,200)</option>
            <option>Raghurajpur Crafts Village (₹1,600)</option>
            <option>Golden Triangle Circuit (₹4,499)</option>
            <option>Puri to Konark Sun Temple (Express)</option>
            <option>Bhubaneswar Airport Transfer (₹1,800)</option>
            <option>Puri Local Pancha Tirtha (₹1,400)</option>
          </select>
        </div>

        {/* Travel Date */}
        <div>
          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wide mb-1.5 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-brand-500" />
            Travel Date
          </label>
          <input
            type="date"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            className="w-full px-3 py-2.5 bg-slate-50 hover:bg-slate-100/80 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-colors"
          />
        </div>

        {/* Vehicle Selection & CTA */}
        <div>
          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wide mb-1.5 flex items-center gap-1">
            <Car className="w-3.5 h-3.5 text-brand-500" />
            Vehicle Type
          </label>
          <select
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
            className="w-full px-3 py-2.5 bg-slate-50 hover:bg-slate-100/80 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-colors"
          >
            <option>Swift Dzire (AC Sedan - 4 Seats)</option>
            <option>Toyota Etios (AC Sedan - 4 Seats)</option>
            <option>Maruti Ertiga (AC SUV - 6 Seats)</option>
            <option>Innova Crysta (Luxury 7 Seats)</option>
          </select>
        </div>

        {/* Full-width submit button */}
        <div className="sm:col-span-2 lg:col-span-4 mt-2">
          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-brand-600 via-brand-700 to-amber-600 hover:from-brand-700 hover:to-amber-700 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-brand-600/30 flex items-center justify-center gap-2 group transition-all"
          >
            <span>Check Fixed Fare & Book on WhatsApp</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </form>
    </div>
  );
}
