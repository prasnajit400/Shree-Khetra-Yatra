import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck, Heart, Car, Sparkles, ChevronRight, Compass, ExternalLink } from 'lucide-react';

export default function Footer({ onOpenInquiry }) {
  return (
    <footer className="bg-black text-slate-400 pt-16 pb-24 sm:pb-12 border-t border-cyan-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 via-orange-500 to-amber-400 flex items-center justify-center text-black shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2v20" />
                  <path d="M2 12h20" />
                  <circle cx="12" cy="12" r="3" fill="#000000" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-extrabold text-white font-heading tracking-tight block">
                  Shree Khetra Yatra
                </span>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                  Puri Dham Cab & Pilgrimage Logistics
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
                <Link to="/pilgrimage" className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" />
                  Pilgrimage & Char Dham Guide
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
              <li className="hover:text-amber-300 transition-colors cursor-pointer" onClick={() => onOpenInquiry('Raghurajpur Crafts Village Tour')}>
                • Raghurajpur Crafts Village (₹1,600)
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <button
                onClick={() => onOpenInquiry('Footer Quick Booking')}
                className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Car className="w-4 h-4" />
                <span>Reserve a Cab Online &rarr;</span>
              </button>
            </div>
          </div>

          {/* Col 4: Contact & Desk Information */}
          <div className="space-y-3.5">
            <h3 className="text-white font-heading font-bold text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              Biragobindapur Desk
            </h3>
            
            <div className="space-y-1">
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                <span>Biragobindapur, Puri, Odisha 752014, India</span>
              </div>
              <a
                href="https://maps.app.goo.gl/77x4XpjCax4aJULfA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-white font-bold ml-7 transition-colors"
              >
                <span>Google Maps Location &rarr;</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <a href="tel:+917381414499" className="text-amber-300 hover:text-white font-bold transition-colors">
                +91 7381414499
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              <a href="mailto:shreekhetraryatra@gmail.com" className="hover:text-cyan-300 transition-colors break-all">
                shreekhetraryatra@gmail.com
              </a>
            </div>

            <div className="flex items-start gap-3 text-sm text-slate-400">
              <Clock className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
              <div>
                <p className="text-slate-200 font-medium">Daily Desk: 06:00 AM – 09:00 PM</p>
                <p className="text-xs text-emerald-400 font-semibold">24/7 Roadside & Flight Cab Dispatch</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/917381414499?text=Hello%20Shree%20Khetra%20Yatra,%20I%20am%20looking%20for%20cab%20service%20in%20Puri."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-lg"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat Instantly on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Shree Khetra Yatra (Shree Khetra Yatra Odisha). All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-slate-400">
            <span>Devoted to Lord Jagannath Dham</span>
            <span className="text-cyan-500">•</span>
            <a
              href="https://maps.app.goo.gl/77x4XpjCax4aJULfA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              Biragobindapur, Puri on Google Maps
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
