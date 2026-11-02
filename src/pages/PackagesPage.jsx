import React, { useState, useMemo } from 'react';
import { packages } from '../data/packagesData';
import PackageCard from '../components/PackageCard';
import OfficialRateTable from '../components/OfficialRateTable';
import { Filter, ArrowUpDown, ShieldCheck, CheckCircle2, Car, Sparkles, Phone, MessageSquare, Table, Calendar } from 'lucide-react';

export default function PackagesPage({ onOpenInquiry }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default'); // 'default', 'price-low', 'price-high', 'duration'

  const categories = [
    'All',
    'Chilika Lake',
    'Konark Express',
    'Airport Transfer',
    'Bhubaneswar Tour',
    'Heritage & Craft',
    'Full Day Circuit'
  ];

  // Filtering and sorting logic
  const filteredAndSortedPackages = useMemo(() => {
    let result = [...packages];

    // Filter by Category
    if (selectedCategory !== 'All') {
      result = result.filter((pkg) => pkg.category === selectedCategory);
    }

    // Sort
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'duration') {
      result.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));
    }

    return result;
  }, [selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-8 pb-20 selection:bg-cyan-500 selection:text-black">
      {/* Top Page Header Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-bold border border-cyan-500/30 mb-4">
            <Car className="w-3.5 h-3.5 text-cyan-400" />
            <span>Official Fixed Fare Tariff • Zero Price Surges</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            Pilgrimage & Cab Tour Packages
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Choose from carefully curated, unhurried pilgrimage circuits and coastal excursions departing from Puri. Fully matched with our verified tariff card.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-amber-300 font-semibold">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              All Standard Toll Taxes & Parking Included
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Dzire • Ertiga • Innova Crysta • Winger • Force Traveller
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Senior Citizen Priority Care
            </span>
          </div>
        </div>
      </section>

      {/* 🚀 OFFICIAL TARIFF & RATE CARD SECTION (Matched directly with user's price chart screenshot!) */}
      <OfficialRateTable onOpenInquiry={onOpenInquiry} />

      {/* Filter and Sorting Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-6">
          <div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block font-heading">
              Detailed Package Cards
            </span>
            <h3 className="text-2xl font-bold font-heading text-white">
              All Tour Packages & Day Excursions
            </h3>
          </div>
          <span className="text-xs text-slate-400 hidden sm:inline">
            Click "Book / Inquiry" to reserve instantly
          </span>
        </div>

        <div className="bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <Filter className="w-4 h-4 text-slate-400 shrink-0 mr-1 hidden sm:block" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-md font-bold'
                    : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 shrink-0 self-end md:self-auto">
            <ArrowUpDown className="w-4 h-4 text-slate-400" />
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Sort By:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-1.5 rounded-xl border border-slate-700 text-xs sm:text-sm font-medium bg-slate-950 text-white outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 cursor-pointer"
            >
              <option value="default">Default Recommended</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="duration">Duration: Short to Long</option>
            </select>
          </div>
        </div>

        {/* Results Counter */}
        <div className="mt-4 flex items-center justify-between text-xs text-slate-400 px-1">
          <span>
            Showing <strong className="text-white">{filteredAndSortedPackages.length}</strong> tour packages in <span className="text-cyan-400 font-semibold">{selectedCategory}</span>
          </span>
          <span className="hidden sm:inline text-slate-500">
            Official tariff card rates applied
          </span>
        </div>

        {/* Package Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedPackages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              onBook={onOpenInquiry}
            />
          ))}
        </div>

        {/* Custom Tailored Tour Banner */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-cyan-500/30 rounded-3xl p-8 sm:p-10 text-center">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500 text-black mx-auto flex items-center justify-center shadow-lg mb-4">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
            Need a Large Multi-Cab Group Booking or Customized Circuit?
          </h3>
          <p className="mt-2 text-sm text-slate-300 max-w-xl mx-auto">
            We provide multiple AC Wingers (12+1) and Force Travellers (17+1) for large family yatras, wedding guests, or corporate temple tours.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenInquiry('Custom Tailored Group Tour Package')}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-extrabold text-sm shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all flex items-center gap-2"
            >
              <span>Request Group Tariff Quote</span>
            </button>
            <a
              href="tel:+917381414499"
              className="px-6 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm border border-slate-700 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>Call Desk: +91 7381414499</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
