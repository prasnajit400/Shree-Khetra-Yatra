import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageSquare, Menu, X, Car, ShieldCheck, ChevronRight } from 'lucide-react';

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

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tour Packages', path: '/packages' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <header className="w-full sticky top-0 z-40 transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center flex-wrap justify-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5 text-brand-400 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              Biragobindapur, Puri, Odisha 752014
            </span>
            <span className="hidden sm:inline-block text-slate-600">•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-brand-400" />
              Desk Daily: 06:00 AM – 09:00 PM IST (24/7 Cab Dispatch)
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:shreekhetraryatra@gmail.com"
              className="hidden lg:flex items-center gap-1.5 hover:text-brand-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-400" />
              shreekhetraryatra@gmail.com
            </a>
            <span className="hidden lg:inline-block text-slate-600">•</span>
            <a
              href="tel:+917381414499"
              className="flex items-center gap-1.5 font-bold text-amber-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-500 fill-brand-500" />
              +91 7381414499
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-200 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white shadow-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-brand-700 via-brand-600 to-amber-500 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
              {/* Sacred Jagannath Chakra / Lotus Motif */}
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2v20" />
                <path d="M2 12h20" />
                <path d="m4.93 4.93 14.14 14.14" />
                <path d="m19.07 4.93-14.14 14.14" />
                <circle cx="12" cy="12" r="3" fill="#ffffff" />
              </svg>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors font-heading block leading-none">
                Shree Khetra Yatra
              </span>
              <span className="text-[11px] font-semibold text-brand-600 tracking-wider uppercase block mt-1">
                Odisha Pilgrimage & Cab Service
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-150 relative ${
                    isActive
                      ? 'text-brand-600 bg-brand-50'
                      : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-600 rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenInquiry('Custom Cab Booking')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-brand-600 to-amber-600 text-white font-semibold text-sm shadow-md shadow-brand-600/25 hover:from-brand-700 hover:to-amber-700 hover:shadow-lg transition-all active:scale-95"
            >
              <Car className="w-4 h-4" />
              <span>Book Cab / Inquiry</span>
            </button>
            <a
              href="https://wa.me/917381414499?text=Hello%20Shree%20Khetra%20Yatra,%20I%20would%20like%20to%20inquire%20about%20Puri%20cab%20and%20tour%20packages."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg border border-emerald-600 text-emerald-700 font-semibold text-sm hover:bg-emerald-50 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600 fill-emerald-600/20" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenInquiry('Quick Cab Inquiry')}
              className="p-2 rounded-lg bg-brand-50 text-brand-600 hover:bg-brand-100 text-xs font-semibold flex items-center gap-1"
            >
              <Car className="w-4 h-4" />
              <span>Book</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-brand-600 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between ${
                      isActive
                        ? 'bg-brand-50 text-brand-600 font-bold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </NavLink>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenInquiry('Mobile Navigation Inquiry');
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-600 to-amber-600 text-white font-bold text-center shadow-md flex items-center justify-center gap-2"
              >
                <Car className="w-4 h-4" />
                <span>Instant Cab Booking</span>
              </button>
              <a
                href="https://wa.me/917381414499?text=Hello%20Shree%20Khetra%20Yatra,%20I%20would%20like%20to%20inquire%20about%20Puri%20tours."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-center flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: +91 7381414499</span>
              </a>
              <a
                href="tel:+917381414499"
                className="w-full py-2.5 rounded-xl border border-slate-300 text-slate-800 font-bold text-center flex items-center justify-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4 text-brand-600" />
                <span>Direct Call Desk</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
