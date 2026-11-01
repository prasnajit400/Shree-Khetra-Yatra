import React from 'react';
import { ShieldCheck, IndianRupee, Headphones, Clock, Sparkles, CheckCircle2 } from 'lucide-react';

export default function TrustBadges() {
  const values = [
    {
      icon: ShieldCheck,
      stat: "100%",
      title: "Verified Cabs",
      description: "Clean, fully air-conditioned vehicles with courteous, vetted native chauffeurs who respect pilgrim customs.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-200"
    },
    {
      icon: IndianRupee,
      stat: "100%",
      title: "Honest Fixed Fares",
      description: "Transparent all-inclusive pricing with zero hidden fees, toll surprises, or opportunistic rate surges.",
      color: "text-brand-600",
      bg: "bg-brand-50",
      border: "border-brand-200"
    },
    {
      icon: Headphones,
      stat: "24/7",
      title: "Desk Support",
      description: "Dedicated roadside dispatch, flight tracking, and round-the-clock telephone and WhatsApp travel assistance.",
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-200"
    },
    {
      icon: Clock,
      stat: "0",
      title: "Rushed Schedules",
      description: "Unhurried temple darshan, elderly passenger care, guided entry coordination, and Mahaprasad arrangements.",
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200"
    }
  ];

  return (
    <section className="py-12 bg-white relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center border ${item.border}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`text-2xl font-black font-heading ${item.color}`}>
                    {item.stat}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading mb-2 group-hover:text-brand-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-slate-400 group-hover:text-brand-600 transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Biragobindapur Verified Guarantee</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
