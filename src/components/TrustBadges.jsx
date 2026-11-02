import React from 'react';
import { ShieldCheck, IndianRupee, Headphones, Clock, Sparkles, CheckCircle2 } from 'lucide-react';

export default function TrustBadges() {
  const values = [
    {
      icon: ShieldCheck,
      stat: "100%",
      title: "Verified Cabs",
      description: "Clean, fully air-conditioned vehicles with courteous, vetted native chauffeurs who respect pilgrim customs.",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/30"
    },
    {
      icon: IndianRupee,
      stat: "100%",
      title: "Honest Fixed Fares",
      description: "Transparent all-inclusive pricing with zero hidden fees, toll surprises, or opportunistic rate surges.",
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/30"
    },
    {
      icon: Headphones,
      stat: "24/7",
      title: "Desk Support",
      description: "Dedicated roadside dispatch, flight tracking, and round-the-clock telephone and WhatsApp travel assistance.",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/30"
    },
    {
      icon: Clock,
      stat: "0",
      title: "Rushed Schedules",
      description: "Unhurried temple darshan, elderly passenger care, guided entry coordination, and Mahaprasad arrangements.",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/30"
    }
  ];

  return (
    <section className="py-16 bg-slate-900/80 border-t border-slate-800 text-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Mini Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>The Shree Khetra Yatra Promise</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
            Pilgrim-First Service Guarantees
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-950/90 rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
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
                  <h3 className="text-lg font-bold text-white font-heading mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-bold text-slate-400 group-hover:text-cyan-400 transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Biragobindapur Verified Guarantee</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
