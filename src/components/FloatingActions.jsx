import React, { useState } from 'react';
import { Phone, MessageSquare, X, Car } from 'lucide-react';

export default function FloatingActions({ onOpenInquiry }) {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <>
      {/* Mobile Floating Call Button (Bottom Left) */}
      <div className="fixed bottom-6 left-5 z-40 sm:hidden">
        <a
          href="tel:+917381414499"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-slate-900 text-amber-400 shadow-2xl border-2 border-amber-400/40 hover:scale-105 active:scale-95 transition-all"
          aria-label="Call Shree Khetra Yatra"
        >
          <Phone className="w-7 h-7 fill-amber-400 text-amber-400" />
        </a>
      </div>

      {/* Floating WhatsApp Action Button (Bottom Right) */}
      <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end">
        {/* Tooltip prompt */}
        {showTooltip && (
          <div className="mb-2 hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs font-semibold py-1.5 px-3 rounded-xl shadow-lg border border-slate-100 animate-bounce">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>Need a Cab in Puri? Chat on WhatsApp</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-slate-600 ml-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        <div className="flex items-center gap-2">
          {/* Quick Instant Inquiry Button for Desktop */}
          <button
            onClick={() => onOpenInquiry('Floating Action Booking')}
            className="hidden md:flex items-center gap-2 px-4 py-3 rounded-full bg-slate-900 text-white font-bold text-xs shadow-xl hover:bg-slate-800 transition-all border border-slate-700 active:scale-95 group"
          >
            <Car className="w-4 h-4 text-brand-400 group-hover:rotate-12 transition-transform" />
            <span>Book Cab</span>
          </button>

          {/* WhatsApp Direct Link */}
          <a
            href="https://wa.me/917381414499?text=Namaste%20Shree%20Khetra%20Yatra,%20I%20would%20like%20to%20inquire%20about%20a%20private%20cab%20and%20pilgrimage%20package."
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl transition-all hover:scale-105 active:scale-95"
            aria-label="Chat with Shree Khetra Yatra on WhatsApp"
          >
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 text-[9px] font-bold text-white items-center justify-center">1</span>
            </span>
            <MessageSquare className="w-7 h-7 fill-white" />
          </a>
        </div>
      </div>
    </>
  );
}

