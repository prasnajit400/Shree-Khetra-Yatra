import React from 'react';
import { charDhamInfo, templeRituals, mahaprasadGuide, sacredMiracles } from '../data/pilgrimageGuideData';
import { Sparkles, Clock, HeartHandshake, ShieldCheck, CheckCircle2, Car, Compass, ArrowRight, Utensils, Award, BookOpen, Eye } from 'lucide-react';

export default function PilgrimageGuidePage({ onOpenInquiry }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-8 pb-20 selection:bg-amber-500 selection:text-black">
      {/* Page Header */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-amber-500/20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-600/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Puri Dham • Sacred Char Dham of Bharat</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white leading-tight">
            Pilgrim Guide to Puri Dham & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500">
              Shree Jagannath Darshan
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Essential spiritual insights, daily temple ritual timings, Mahaprasad guidelines, sacred miracles, and specialized travel assistance for devotees, senior citizens, and visiting families.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-amber-300">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Unhurried Darshan Pacing
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Mahaprasad Seva Coordination
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Elderly Battery Car Assistance
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
        
        {/* SECTION 1: THE FOUR SACRED DHAMS */}
        <section className="bg-slate-900/90 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2 font-heading">
              Cosmic Spiritual Geography
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-heading text-white">
              {charDhamInfo.title}
            </h2>
            <p className="text-slate-300 text-sm mt-3 leading-relaxed">
              {charDhamInfo.overview}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {charDhamInfo.dhams.map((dham, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border transition-all ${
                  dham.highlight
                    ? 'bg-gradient-to-b from-amber-500/20 to-orange-500/10 border-amber-500/50 shadow-[0_0_25px_rgba(245,158,11,0.2)]'
                    : 'bg-slate-950/60 border-slate-800/80'
                }`}
              >
                <span className={`text-[11px] font-bold uppercase tracking-wider block mb-1 ${dham.highlight ? 'text-amber-300' : 'text-slate-400'}`}>
                  {dham.direction}
                </span>
                <h3 className="text-lg font-bold font-heading text-white">
                  {dham.name}
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  <strong>Presiding Deity:</strong> {dham.deity}
                </p>
                <div className="mt-3 pt-3 border-t border-slate-800 text-xs font-semibold text-amber-400">
                  {dham.significance}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: SACRED MIRACLES & MYSTERIES OF SHREE MANDIR (Replaced section as requested!) */}
        <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 rounded-3xl p-6 sm:p-10 border border-cyan-500/30 shadow-2xl">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-bold border border-cyan-500/30 mb-2">
              <Eye className="w-3.5 h-3.5" />
              <span>Timeless Wonder of Bharat</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black font-heading text-white">
              Sacred Miracles & Mysteries of Shree Mandir
            </h2>
            <p className="text-slate-300 text-sm mt-2">
              Centuries of pilgrims and scholars have marveled at these unexplained architectural and spiritual phenomena:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sacredMiracles.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all space-y-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: DAILY TEMPLE RITUAL SCHEDULE */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2 font-heading">
              Sacred Niti Schedule
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-heading text-white">
              Daily Temple Rituals & Arati Timings
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Plan your visit around the sacred daily offerings to witness the divine rites of the Holy Trinity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templeRituals.map((r, i) => (
              <div
                key={i}
                className="bg-slate-900/80 rounded-2xl p-6 border border-slate-800 hover:border-amber-500/40 transition-all shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      {r.time}
                    </span>
                    <span className="text-xs text-slate-500 font-bold">Niti #{i + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold font-heading text-white mb-2">
                    {r.ritual}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {r.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>Chauffeur waiting coordinated with darshan</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: THE SACRED MAHAPRASAD & ANANDA BAZAR */}
        <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 sm:p-10 border border-amber-500/30 shadow-2xl">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2 font-heading">
              World's Most Sacred Feast
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-heading text-white flex items-center gap-3">
              <Utensils className="w-8 h-8 text-amber-400" />
              <span>Mahaprasad & Ananda Bazar Secrets</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mahaprasadGuide.map((item, idx) => (
              <div key={idx} className="bg-slate-950/70 p-6 rounded-2xl border border-slate-800 space-y-2">
                <h3 className="text-base font-bold text-amber-300 font-heading flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{item.title}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-6">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: SENIOR CITIZEN DARSHAN ASSISTANCE BANNER */}
        <section className="bg-gradient-to-r from-amber-600 via-orange-600 to-brand-700 rounded-3xl p-8 sm:p-12 text-white shadow-2xl text-center space-y-6">
          <span className="px-3 py-1 rounded-full bg-black/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            Unhurried Elderly & Family Pilgrimage
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-heading leading-tight max-w-3xl mx-auto">
            Book a Respectful, Patient Pilgrimage Cab with Local Darshan Guidance
          </h2>
          <p className="text-amber-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            We ensure our elderly pilgrims have clean air-conditioned transportation, seamless transit to Grand Road e-rickshaws, and zero rushing during darshan.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenInquiry('Senior Citizen Pilgrimage Darshan Cab')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-950 hover:bg-black text-white font-extrabold text-sm shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <HeartHandshake className="w-4 h-4 text-amber-400" />
              <span>Request Senior Citizen Pilgrimage Cab</span>
            </button>
            <a
              href="https://wa.me/917381414499?text=Jai%20Jagannath!%20I%20would%20like%20to%20arrange%20a%20pilgrimage%20cab%20and%20darshan%20assistance."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-extrabold text-sm shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <span>Chat on WhatsApp: +91 7381414499</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
