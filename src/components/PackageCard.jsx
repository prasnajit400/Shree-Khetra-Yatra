import React from 'react';
import { Clock, Car, Star, Check, ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';

export default function PackageCard({ pkg, onBook }) {
  const whatsappBookingUrl = `https://wa.me/917381414499?text=${encodeURIComponent(
    `Hello Shree Khetra Yatra, I would like to book/inquire about: ${pkg.title} (${pkg.priceDisplay})`
  )}`;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col justify-between group">
      <div>
        {/* Card Header & Image */}
        <div className="relative h-56 sm:h-60 overflow-hidden">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

          {/* Top badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-600 text-white shadow-md">
              {pkg.category}
            </span>
            {pkg.badge && (
              <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-400 text-slate-900 shadow-sm flex items-center gap-1">
                ⭐ {pkg.badge}
              </span>
            )}
          </div>

          {/* Bottom Duration & Vehicle overlay */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
            <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{pkg.duration}</span>
            </span>
            <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg">
              <Car className="w-3.5 h-3.5 text-brand-400" />
              <span>{pkg.vehicleType}</span>
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5">
          <div className="flex items-center justify-between text-xs mb-2">
            <div className="flex items-center gap-1 text-amber-500 font-bold">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>{pkg.rating}</span>
              <span className="text-slate-400 font-normal">({pkg.reviewsCount} reviews)</span>
            </div>
            <span className="text-[11px] text-emerald-700 bg-emerald-50 font-semibold px-2 py-0.5 rounded-md border border-emerald-200">
              Native Chauffeur
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading group-hover:text-brand-600 transition-colors leading-snug">
            {pkg.title}
          </h3>
          <p className="text-xs text-slate-500 mt-1 line-clamp-1">
            {pkg.subtitle}
          </p>

          <p className="text-xs sm:text-sm text-slate-600 mt-3 line-clamp-2 leading-relaxed">
            {pkg.overview}
          </p>

          {/* Inclusions summary */}
          <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
            {pkg.inclusions.slice(0, 3).map((inc, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{inc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer with Price and Actions */}
      <div className="p-5 pt-3 bg-slate-50 border-t border-slate-100">
        <div className="flex items-baseline justify-between mb-3">
          <div>
            <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
              Fixed All-Inclusive Fare
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-slate-900 font-heading">
                {pkg.priceDisplay}
              </span>
              {pkg.originalPrice && (
                <span className="text-xs text-slate-400 line-through">
                  ₹{pkg.originalPrice}
                </span>
              )}
            </div>
          </div>
          <span className="text-[11px] font-bold text-brand-700 bg-brand-100/60 px-2 py-1 rounded-md">
            {pkg.pricingNote}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => onBook(pkg.title)}
            className="w-full py-2.5 px-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-1.5"
          >
            <span>Book / Inquiry</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          
          <a
            href={whatsappBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-2 rounded-xl border border-emerald-600 hover:bg-emerald-50 text-emerald-700 font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
