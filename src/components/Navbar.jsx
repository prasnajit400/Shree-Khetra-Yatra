import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageSquare, Menu, X, Car, ShieldCheck, ChevronRight, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenInquiry }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // 6 genuine tabs as requested
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sightseeing', path: '/sightseeing' },
    { name: 'Pilgrimage Guide', path: '/pilgrimage' },
    { name: 'Tour Packages', path: '/packages' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <header className="w-full sticky top-0 z-40 transition-all duration-300">
      {/* Top Futuristic Utility Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center flex-wrap justify-center gap-4 text-slate-400">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <span className="text-sm">🇮🇳</span>
              <span>INDIA • PURI DHAM CHAR DHAM</span>
            </span>
            <span className="hidden sm:inline-block text-slate-700">•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              Biragobindapur, Puri, Odisha 752014
            </span>
            <span className="hidden sm:inline-block text-slate-700">•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              24/7 Roadside Cab Dispatch Desk
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:shreekhetraryatra@gmail.com"
              className="hidden lg:flex items-center gap-1.5 hover:text-cyan-400 transition-colors text-slate-300"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              shreekhetraryatra@gmail.com
            </a>
            <span className="hidden lg:inline-block text-slate-700">•</span>
            <a
              href="tel:+917381414499"
              className="flex items-center gap-1.5 font-bold text-amber-400 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              +91 7381414499
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar (Glassmorphic Futuristic) */}
      <nav
        className={`w-full transition-all duration-300 border-b ${
          scrolled
            ? 'bg-slate-950/90 backdrop-blur-xl border-slate-800/90 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-slate-950/80 backdrop-blur-lg border-white/10 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 via-orange-500 to-amber-400 flex items-center justify-center text-black shadow-[0_0_20px_rgba(245,158,11,0.4)] group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2v20" />
                <path d="M2 12h20" />
                <path d="m4.93 4.93 14.14 14.14" />
                <path d="m19.07 4.93-14.14 14.14" />
                <circle cx="12" cy="12" r="3" fill="#000000" />
              </svg>
            </div>
            <div>
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white group-hover:text-amber-400 transition-colors font-heading block leading-none">
                Shree Khetra Yatra
              </span>
              <span className="text-[10px] font-bold text-cyan-400 tracking-wider uppercase block mt-1">
                Puri Dham Cab & Pilgrimage Logistics
              </span>
            </div>
          </Link>

          {/* Desktop Navigation (6 Tabs) */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 bg-slate-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-bold transition-all duration-200 relative ${
                    isActive
                      ? 'text-black bg-gradient-to-r from-amber-400 to-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onOpenInquiry('Futuristic Header Cab Booking')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-extrabold text-xs shadow-[0_0_20px_rgba(6,182,212,0.4)] active:scale-95 transition-all"
            >
              <Car className="w-3.5 h-3.5 text-black" />
              <span>Book Cab Now</span>
            </button>
            <a
              href="https://wa.me/917381414499?text=Hello%20Shree%20Khetra%20Yatra,%20I%20would%20like%20to%20inquire%20about%20Puri%20cab%20and%20tour%20packages."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-emerald-500/50 hover:bg-emerald-500/10 text-emerald-400 font-bold text-xs transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenInquiry('Quick Cab Inquiry')}
              className="p-1.5 px-3 rounded-full bg-cyan-500 text-black text-xs font-extrabold flex items-center gap-1"
            >
              <Car className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 pt-3 pb-6 shadow-2xl animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-xl text-sm font-bold flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-amber-500 text-black'
                        : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 opacity-60" />
                </NavLink>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenInquiry('Mobile Navigation Inquiry');
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-extrabold text-center shadow-lg flex items-center justify-center gap-2 text-sm"
              >
                <Car className="w-4 h-4" />
                <span>Instant Cab Booking</span>
              </button>
              <a
                href="https://wa.me/917381414499"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-center flex items-center justify-center gap-2 text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: +91 7381414499</span>
              </a>
              <a
                href="tel:+917381414499"
                className="w-full py-2.5 rounded-xl border border-slate-700 text-slate-300 font-bold text-center flex items-center justify-center gap-2 text-xs"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Desk: +91 7381414499</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
