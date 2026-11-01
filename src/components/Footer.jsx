import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck, Heart, Car, Sparkles, ChevronRight } from 'lucide-react';

export default function Footer({ onOpenInquiry }) {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 sm:pb-12 border-t-4 border-brand-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-amber-500 flex items-center justify-center text-white shadow-md">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2v20" />
                  <path d="M2 12h20" />
                  <circle cx="12" cy="12" r="3" fill="#ffffff" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-extrabold text-white font-heading tracking-tight block">
                  Shree Khetra Yatra
                </span>
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
                  Odisha Pilgrimage Logistics
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Rooted in the historic artisan and Brahmin heritage village of Biragobindapur near Puri. Delivering dependable, clean AC cab services and personalized pilgrimage sightseeing across coastal Odisha.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-brand-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Government Registered & 100% Native Drivers</span>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div>
            <h3 className="text-white font-heading font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-500"></span>
              Explore Pages
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-500" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-500" />
                  Tour Packages & Taxi Fares
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-500" />
                  Photo Gallery & Fleet
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-500" />
                  Contact Us & Cab Booking
                </Link>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <button
                onClick={() => onOpenInquiry('Footer Quick Booking')}
                className="inline-flex items-center gap-2 text-xs font-bold text-brand-400 hover:text-brand-300 transition-colors"
              >
                <Car className="w-4 h-4" />
                <span>Reserve a Cab Online &rarr;</span>
              </button>
            </div>
          </div>

          {/* Col 3: Popular Pilgrimage Circuits */}
          <div>
            <h3 className="text-white font-heading font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-500"></span>
              Key Yatra Circuits
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => onOpenInquiry('Puri to Chilika Lake Taxi')}>
                • Puri to Chilika Lake (Satapada) – ₹2,200
              </li>
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => onOpenInquiry('Raghurajpur Crafts Village Tour')}>
                • Raghurajpur Crafts Village – ₹1,600
              </li>
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => onOpenInquiry('Full-Day Golden Triangle Private Cab')}>
                • Golden Triangle (Puri + Konark + BBI) – ₹4,499
              </li>
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => onOpenInquiry('Puri to Konark Taxi Booking')}>
                • Express Puri to Konark Sun Temple
              </li>
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => onOpenInquiry('BBI Airport Transfer')}>
                • Bhubaneswar Airport (BBI) Direct Drops
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Desk Information */}
          <div className="space-y-3.5">
            <h3 className="text-white font-heading font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-500"></span>
              Biragobindapur Desk
            </h3>
            
            <div className="flex items-start gap-3 text-sm text-slate-300">
              <MapPin className="w-4 h-4 text-brand-400 mt-1 shrink-0" />
              <span>Biragobindapur, Puri, Odisha 752014, India</span>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-4 h-4 text-brand-400 shrink-0" />
              <a href="tel:+917381414499" className="text-amber-300 hover:text-white font-bold transition-colors">
                +91 7381414499
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4 text-brand-400 shrink-0" />
              <a href="mailto:shreekhetraryatra@gmail.com" className="hover:text-amber-400 transition-colors break-all">
                shreekhetraryatra@gmail.com
              </a>
            </div>

            <div className="flex items-start gap-3 text-sm text-slate-400">
              <Clock className="w-4 h-4 text-brand-400 mt-1 shrink-0" />
              <div>
                <p className="text-slate-200 font-medium">Daily Desk Hours: 06:00 AM – 09:00 PM</p>
                <p className="text-xs text-slate-400">24/7 Roadside & Pilgrimage Dispatch</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/917381414499?text=Hello%20Shree%20Khetra%20Yatra,%20I%20am%20looking%20for%20cab%20service%20in%20Puri."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat Instantly on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Shree Khetra Yatra (Shree Khetra Yatra Odisha). All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-slate-400">
            <span>Devoted to Lord Jagannath Dham</span>
            <span className="text-brand-500">•</span>
            <span>Biragobindapur, Puri</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
