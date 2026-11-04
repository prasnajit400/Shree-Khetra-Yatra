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
    'Koraput Tour',
    'Daringbadi',
    'Maa Tara Tarini',
    'Maa Kalijai',
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
      result.sort((a, b) => {
        if (a.price === 0) return 1;
        if (b.price === 0) return -1;
        return a.price - b.price;
      });
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
            <span>Official Fixed Fare Tariff & Tailored Tour Circuits</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            Pilgrimage & Cab Tour Packages
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Choose from carefully curated, unhurried pilgrimage circuits, coastal excursions, and scenic hill station tours across Odisha.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-amber-300 font-semibold">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              All Standard Toll Taxes & Parking Included
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Dzire • Ertiga • Innova Crysta • Winger • Traveller
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Direct Custom Quote on Discussion
            </span>
          </div>
        </div>
      </section>

      {/* 🚀 OFFICIAL TARIFF & RATE CARD SECTION */}
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
            Click "Book / Inquiry" or "WhatsApp" to discuss custom pricing
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
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-400 text-black shadow-md'
                    : 'bg-slate-950 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 self-end md:self-auto shrink-0">
            <ArrowUpDown className="w-4 h-4 text-slate-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-slate-950 border border-slate-800 text-xs rounded-xl px-3 py-2 text-slate-200 focus:outline-none focus:border-amber-400"
            >
              <option value="default">Sort by: Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="duration">Duration</option>
            </select>
          </div>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredAndSortedPackages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              onBook={onOpenInquiry}
            />
          ))}
        </div>

        {/* Custom Tour Inquiry Box */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 rounded-3xl p-8 sm:p-12 border border-amber-500/30 text-center shadow-xl">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
              Need A Customized Multi-Day Tour?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Planning Koraput, Daringbadi, or Special Temple Darshans?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We provide tailored outstation packages with dedicated chauffeurs fluent in Hindi, Odia, Bengali, and English. Speak directly with our dispatch desk to plan custom night halts and vehicle options.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => onOpenInquiry('Custom Multi-Day Outstation Package Inquiry')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-black" />
                <span>Discuss Custom Tour Package</span>
              </button>
              <a
                href="https://wa.me/917381414499?text=Hello%20Shree%20Khetra%20Yatra,%20I%20would%20like%20to%20discuss%20a%20customized%20tour%20package."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: +91 7381414499</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
