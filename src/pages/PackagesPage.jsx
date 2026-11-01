import React, { useState, useMemo } from 'react';
import { packages } from '../data/packagesData';
import PackageCard from '../components/PackageCard';
import { Filter, ArrowUpDown, ShieldCheck, CheckCircle2, Car, Sparkles, Phone, MessageSquare } from 'lucide-react';

export default function PackagesPage({ onOpenInquiry }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default'); // 'default', 'price-low', 'price-high', 'duration'

  const categories = [
    'All',
    'Chilika Lake',
    'Heritage & Craft',
    'Full Day Circuit',
    'Konark Express',
    'Airport Transfer',
    'Puri Local'
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
    <div className="min-h-screen bg-slate-50 pt-8 pb-20">
      {/* Top Page Header Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-500">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold border border-brand-500/30 mb-4">
            <Car className="w-3.5 h-3.5" />
            <span>Honest Transparent Cab Pricing • No Surge</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            Pilgrimage & Cab Tour Packages
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Choose from carefully curated, unhurried pilgrimage circuits and coastal excursions departing from Puri and Biragobindapur.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-amber-300 font-semibold">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              All Parking & Toll Taxes Included
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Clean Chilled AC Sedans & SUVs
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Senior Citizen Priority Care
            </span>
          </div>
        </div>
      </section>

      {/* Filter and Sorting Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <Filter className="w-4 h-4 text-slate-400 shrink-0 mr-1 hidden sm:block" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 shrink-0 self-end md:self-auto">
            <ArrowUpDown className="w-4 h-4 text-slate-400" />
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              Sort By:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium bg-slate-50 text-slate-800 outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
            >
              <option value="default">Default Recommended</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="duration">Duration: Short to Long</option>
            </select>
          </div>
        </div>

        {/* Results Counter */}
        <div className="mt-4 flex items-center justify-between text-xs text-slate-500 px-1">
          <span>
            Showing <strong className="text-slate-800">{filteredAndSortedPackages.length}</strong> tour packages in <span className="text-brand-600 font-semibold">{selectedCategory}</span>
          </span>
          <span className="hidden sm:inline text-slate-400">
            Click "Book / Inquiry" to reserve instantly on WhatsApp or phone
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

        {/* Custom Customization Banner */}
        <div className="mt-16 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-3xl p-8 sm:p-10 text-center">
          <div className="w-12 h-12 rounded-2xl bg-brand-600 text-white mx-auto flex items-center justify-center shadow-md mb-4">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
            Need a Customized Pilgrimage Itinerary or Multiple Cabs?
          </h3>
          <p className="mt-2 text-sm text-slate-600 max-w-xl mx-auto">
            Whether you need special halts for temple arati, wheelchair assistance, or multi-day hotel + cab packages across coastal Odisha, our Biragobindapur team can personalize everything.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenInquiry('Custom Tailored Yatra Package')}
              className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
            >
              <span>Build Custom Package</span>
            </button>
            <a
              href="tel:+917381414499"
              className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-300 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-brand-600" />
              <span>Call Desk: +91 7381414499</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
