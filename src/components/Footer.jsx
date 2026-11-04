import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck, Heart, Car, Sparkles, ChevronRight, Compass, ExternalLink } from 'lucide-react';

export default function Footer({ onOpenInquiry }) {
  return (
    <footer className="bg-black text-slate-400 pt-16 pb-24 sm:pb-12 border-t border-cyan-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Brand & Bio (New Logo & Slogan) */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-black border border-slate-800 shrink-0 flex items-center justify-center shadow-md">
                <img
                  src={`${import.meta.env.BASE_URL}images/logo-new.jpg`}
                  alt="Shree Khetra Yatra"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white font-heading tracking-tight block">
                  Shree Khetra Yatra
                </span>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block mt-0.5">
                  Comfortable and Safe Journey
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Rooted in the historic artisan and Brahmin heritage village of Biragobindapur near Puri. Delivering dependable, clean AC cab services and personalized pilgrimage sightseeing across coastal Odisha.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-amber-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Government Registered & 100% Native Drivers</span>
            </div>
          </div>

          {/* Col 2: Quick Navigation (All 6 Tabs) */}
          <div>
            <h3 className="text-white font-heading font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              Explore Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-500" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sightseeing" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-500" />
                  Sightseeing Atlas
                </Link>
              </li>
              <li>
                <Link to="/odisha-tourism" className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" />
                  Odisha State Tourism
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-500" />
                  Tour Packages & Taxi Fares
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-500" />
                  Photo Gallery & Fleet
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-500" />
                  Contact Us & Map Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Yatra Circuits */}
          <div>
            <h3 className="text-white font-heading font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Main 4 Attractions
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="hover:text-amber-300 transition-colors cursor-pointer" onClick={() => onOpenInquiry('Puri to Chilika Lake Taxi')}>
                • Puri to Chilika Lake Taxi (from ₹2,200)
              </li>
              <li className="hover:text-amber-300 transition-colors cursor-pointer" onClick={() => onOpenInquiry('Puri to Konark Taxi Booking')}>
                • Puri to Konark Taxi Booking (from ₹1,699)
              </li>
              <li className="hover:text-amber-300 transition-colors cursor-pointer" onClick={() => onOpenInquiry('Puri to Bhubaneswar Drop Taxi')}>
                • Puri to Bhubaneswar Drop (from ₹1,800)
              </li>
              <li className="hover:text-amber-300 transition-colors cursor-pointer" onClick={() => onOpenInquiry('Bhubaneswar Sightseeing from Puri')}>
                • Bhubaneswar Sightseeing (from ₹3,000)
              </li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer pt-1" onClick={() => onOpenInquiry('Koraput Tour Package Inquiry')}>
                • Koraput Tour (2 Night / 3 Days)
              </li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer" onClick={() => onOpenInquiry('Daringbadi Tour Package Inquiry')}>
                • Daringbadi — Kashmir of Odisha
              </li>
            </ul>
          </div>

          {/* Col 4: Dispatch Desk Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-heading font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              24/7 Dispatch Desk
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-heading">Dispatch Hub:</strong>
                  <span>Biragobindapur, Puri, Odisha 752014</span>
                  <a
                    href="https://maps.app.goo.gl/77x4XpjCax4aJULfA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 text-xs hover:underline flex items-center gap-1 mt-0.5"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-heading">Desk Hours:</strong>
                  <span>24 Hours / 7 Days Operational</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-heading">Direct Call:</strong>
                  <a href="tel:+917381414499" className="text-amber-400 hover:text-white font-bold transition-colors">
                    +91 7381414499
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-heading">WhatsApp Booking:</strong>
                  <a
                    href="https://wa.me/917381414499"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-white font-bold transition-colors"
                  >
                    +91 7381414499
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            © {new Date().getFullYear()} <strong>Shree Khetra Yatra</strong> — Comfortable and Safe Journey. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Puri • Konark • Chilika • Bhubaneswar • Koraput • Daringbadi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
