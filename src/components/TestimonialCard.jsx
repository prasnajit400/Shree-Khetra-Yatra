import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';

export default function TestimonialCard({ review }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-card flex flex-col justify-between relative group hover:shadow-card-hover transition-all duration-300">
      <Quote className="w-8 h-8 text-brand-100 absolute top-5 right-5 group-hover:text-brand-200 transition-colors" />

      <div>
        <div className="flex items-center gap-1 text-amber-400 mb-3">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400" />
          ))}
        </div>

        <p className="text-slate-700 text-xs sm:text-sm italic leading-relaxed mb-4">
          "{review.comment}"
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <div>
          <h4 className="text-sm font-bold text-slate-900 font-heading">
            {review.name}
          </h4>
          <p className="text-xs text-slate-500">{review.city}</p>
          <span className="text-[11px] font-semibold text-brand-600 block mt-0.5">
            {review.yatra}
          </span>
        </div>

        {review.verified && (
          <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100 shrink-0">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Verified Pilgrim</span>
          </div>
        )}
      </div>
    </div>
  );
}

