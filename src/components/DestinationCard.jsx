import React from 'react';
import { MapPin, Clock, ArrowRight, Check } from 'lucide-react';

export default function DestinationCard({ destination, onExplore }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col justify-between group">
      <div>
        <div className="relative h-52 sm:h-56 overflow-hidden">
          <img
            src={destination.image}
            alt={destination.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-900 shadow-md">
              {destination.tag}
            </span>
          </div>

          <div className="absolute bottom-3 left-3 right-3 text-white">
            <h3 className="text-xl font-bold font-heading drop-shadow-md">
              {destination.title}
            </h3>
            <p className="text-xs text-slate-300 flex items-center gap-1 mt-0.5">
              <MapPin className="w-3.5 h-3.5 text-brand-400" />
              {destination.distance}
            </p>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3 font-medium">
            <Clock className="w-3.5 h-3.5 text-amber-500" />
            <span>Optimal Time: {destination.bestTime}</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {destination.description}
          </p>

          <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Yatra Highlights:
            </h4>
            {destination.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                <Check className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-5 pt-0">
        <button
          onClick={() => onExplore(`${destination.title} Sightseeing Cab`)}
          className="w-full py-2.5 px-4 rounded-xl border border-brand-500 text-brand-700 hover:bg-brand-50 font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 group-hover:bg-brand-600 group-hover:text-white"
        >
          <span>Book Cab for {destination.title}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

