import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, ShieldCheck, HeartHandshake, CheckCircle2, Car, Sparkles, MapPin, ChevronLeft, ChevronRight, Play, X, Compass, ExternalLink, Clock, Navigation } from 'lucide-react';
import QuickBookingWidget from '../components/QuickBookingWidget';
import TrustBadges from '../components/TrustBadges';
import MainFourAttractions from '../components/MainFourAttractions';
import DestinationCard from '../components/DestinationCard';
import PackageCard from '../components/PackageCard';
import OfficialRateTable from '../components/OfficialRateTable';
import { packages } from '../data/packagesData';
import { destinations } from '../data/destinationsData';

export default function HomePage({ onOpenInquiry }) {
  // Futuristic hero slides matching the user's reference mockup
  const heroSlides = [
    {
      id: "puri-dham",
      badge: "SACRED CHAR DHAM OF INDIA",
      headline: "ENDLESS DISCOVERY",
      subHeadline: "PURI DHAM • LORD JAGANNATH SANCTUM",
      image: `${import.meta.env.BASE_URL}images/hero-jagannath.jpg`,
      cardTitle: "PURI DHAM",
      cardDescription: "One of Hinduism's revered Char Dhams. Built in the 12th century, the Shree Jagannath Temple features the world's largest temple kitchen serving sacred Mahaprasad, the sacred Grand Road, and the Blue Flag Golden Beach.",
      routeTo: "/pilgrimage",
      ctaText: "Explore Puri Dham",
      stat1: "12th Century",
      stat1Label: "Sacred Heritage",
      stat2: "50,000+",
      stat2Label: "Daily Mahaprasad"
    },
    {
      id: "konark-sun-temple",
      badge: "UNESCO WORLD HERITAGE SITE",
      headline: "TIMELESS ARCHITECTURE",
      subHeadline: "KONARK SUN TEMPLE • BLACK PAGODA",
      image: `${import.meta.env.BASE_URL}images/hero-konark.jpg`,
      cardTitle: "KONARK",
      cardDescription: "A monumental 13th-century stone chariot carved with 24 giant sundial wheels and celestial musicians. Connected to Puri via the breathtaking Marine Drive coastline along the Bay of Bengal.",
      routeTo: "/sightseeing",
      ctaText: "Discover Konark",
      stat1: "₹1,699",
      stat1Label: "5 Hrs Tour Fare",
      stat2: "35 km",
      stat2Label: "Scenic Marine Drive"
    },
    {
      id: "chilika-satapada",
      badge: "ASIA'S LARGEST BRACKISH LAGOON",
      headline: "COASTAL SPLENDOR",
      subHeadline: "CHILIKA LAKE • SATAPADA DOLPHIN LAGOON",
      image: `${import.meta.env.BASE_URL}images/hero-chilika.jpg`,
      cardTitle: "CHILIKA LAKE",
      cardDescription: "Satapada serves as the sanctuary of the rare Irrawaddy dolphins and thousands of winter migratory birds. Experience serene motorized boat rides to Rajahansa Island and the meeting point of lake and sea.",
      routeTo: "/packages",
      ctaText: "Book Chilika Cab",
      stat1: "₹2,200",
      stat1Label: "80Km/8Hrs Fare",
      stat2: "7 Hours",
      stat2Label: "Day Excursion"
    },
    {
      id: "bhubaneswar-circuit",
      badge: "CITY OF 500 ANCIENT TEMPLES",
      headline: "SPIRITUAL CAPITAL",
      subHeadline: "BHUBANESWAR • LINGARAJ & DHAULI",
      image: `${import.meta.env.BASE_URL}images/hero-bhubaneswar.jpg`,
      cardTitle: "BHUBANESWAR",
      cardDescription: "Eastern India's temple city boasting Somavamsi stone carvings at Lingaraj and Mukteshwar, alongside the historic white Dhauli Shanti Stupa where Emperor Ashoka embraced universal peace.",
      routeTo: "/sightseeing",
      ctaText: "View City Circuit",
      stat1: "₹1,800",
      stat1Label: "Airport Drop Fare",
      stat2: "60 km",
      stat2Label: "NH-316 Corridor"
    },
    {
      id: "raghurajpur-crafts",
      badge: "LIVING ARTISAN HERITAGE HAMLET",
      headline: "LIVING HERITAGE",
      subHeadline: "RAGHURAJPUR • PATTACHITRA CRAFTS",
      image: `${import.meta.env.BASE_URL}images/hero-raghurajpur.jpg`,
      cardTitle: "RAGHURAJPUR",
      cardDescription: "Situated adjacent to our Biragobindapur hub, every house is an open-air art gallery. Witness master Chitrakars engraving palm leaves and painting mythological frescoes with natural stone pigments.",
      routeTo: "/packages",
      ctaText: "Raghurajpur Tour",
      stat1: "₹1,600",
      stat1Label: "Special Tour Rate",
      stat2: "4 km",
      stat2Label: "From Biragobindapur"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [showDarshanModal, setShowDarshanModal] = useState(false);

  // Auto slide interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const currentSlideData = heroSlides[currentSlide];

  // Route distance matrix (useful travel data)
  const distanceMatrix = [
    { from: "Puri Dham (Grand Road)", to: "Konark Sun Temple", distance: "35 km", time: "45 mins", route: "Marine Drive Highway", bestCab: "Dzire (₹1,699) / Ertiga (₹2,000)" },
    { from: "Puri Dham", to: "Chilika Lake (Satapada)", distance: "50 km", time: "1 hr 15 mins", route: "Satapada Coastal Road", bestCab: "Dzire (₹2,200) / Innova (₹4,000)" },
    { from: "Puri Dham", to: "Bhubaneswar Airport (BBI)", distance: "60 km", time: "1 hr 20 mins", route: "NH-316 Express Corridor", bestCab: "Dzire (₹1,800) / Ertiga (₹2,000)" },
    { from: "Puri Dham", to: "Raghurajpur Heritage Village", distance: "14 km", time: "25 mins", route: "Bhargavi River Corridor", bestCab: "Private Cab (₹1,600)" },
    { from: "Puri Dham", to: "Dhauli Shanti Stupa", distance: "48 km", time: "1 hr", route: "NH-316 Highway", bestCab: "Sightseeing Cab (₹3,000)" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-black">
      
      {/* 🚀 REAL HORIZONTAL SLIDING CAROUSEL HERO */}
      <section className="relative min-h-[92vh] overflow-hidden bg-slate-950">
        
        {/* Horizontal Slider Track with Smooth Momentum */}
        <div
          className="flex w-full min-h-[92vh] transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide, idx) => (
            <div
              key={slide.id}
              className="w-full flex-shrink-0 min-h-[92vh] relative flex flex-col justify-between"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={slide.image}
                  alt={slide.cardTitle}
                  className="w-full h-full object-cover object-center filter brightness-[0.70] contrast-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-slate-950/70" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-slate-950/80" />
              </div>

              {/* Top Meta Spacer */}
              <div className="pt-6 px-6 sm:px-12 flex items-center justify-between relative z-20">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-bold text-amber-300">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span>{slide.badge}</span>
                </div>
                <div className="text-xs text-slate-400 font-mono bg-black/40 px-3 py-1 rounded-full border border-white/10">
                  SLIDE 0{idx + 1} / 0{heroSlides.length}
                </div>
              </div>

              {/* Center Main Stage Content */}
              <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full my-auto py-8 relative z-20 flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Left Typography */}
                <div className="max-w-2xl space-y-5 text-left">
                  <div className="inline-block text-xs font-extrabold uppercase tracking-widest text-cyan-400 font-heading">
                    {slide.subHeadline}
                  </div>

                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight text-white uppercase leading-[0.95]">
                    {slide.headline}
                  </h1>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                    Rooted in historic Biragobindapur near Puri, Shree Khetra Yatra delivers dependable, affordable taxi service and pilgrimage sightseeing tours throughout coastal Odisha.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button
                      onClick={() => onOpenInquiry(`Hero Booking for ${slide.cardTitle}`)}
                      className="px-8 py-3.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(6,182,212,0.6)] active:scale-95 transition-all flex items-center gap-2"
                    >
                      <span>BOOK CAB NOW</span>
                      <ArrowRight className="w-4 h-4 text-black" />
                    </button>

                    <button
                      onClick={() => setShowDarshanModal(true)}
                      className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-md border border-white/20 transition-all group"
                    >
                      <div className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                        <Play className="w-3.5 h-3.5 fill-black ml-0.5" />
                      </div>
                      <span>EXPERIENCE DARSHAN</span>
                    </button>
                  </div>
                </div>

                {/* Right Frosted Card */}
                <div className="w-full max-w-sm bg-black/45 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-7 text-left shadow-2xl space-y-4 hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-xs font-black uppercase tracking-widest text-cyan-400">
                      DESTINATION HIGHLIGHT
                    </span>
                    <span className="text-xs text-slate-400">0{idx + 1} / 0{heroSlides.length}</span>
                  </div>

                  <h3 className="text-2xl font-black font-heading text-white tracking-wide">
                    {slide.cardTitle}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {slide.cardDescription}
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                      <span className="text-cyan-400 text-base font-extrabold block">{slide.stat1}</span>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider">{slide.stat1Label}</span>
                    </div>
                    <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                      <span className="text-amber-400 text-base font-extrabold block">{slide.stat2}</span>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider">{slide.stat2Label}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs">
                    <Link
                      to={slide.routeTo}
                      className="text-amber-300 hover:text-white font-bold flex items-center gap-1 transition-colors"
                    >
                      <span>{slide.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-[11px] text-slate-500 font-semibold">Fixed Fares</span>
                  </div>
                </div>
              </div>

              {/* Bottom Spacer */}
              <div className="h-6"></div>
            </div>
          ))}
        </div>

        {/* Real Horizontal Slide Navigation Arrows on Screen Edges */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/60 hover:bg-cyan-500 hover:text-black backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-xl"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/60 hover:bg-cyan-500 hover:text-black backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-xl"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Bottom Slide Indicator Bar */}
        <div className="relative z-20 border-t border-white/10 bg-black/70 backdrop-blur-md py-4 px-6 sm:px-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold">
            <div className="flex items-center gap-6 text-slate-400">
              <a
                href="https://wa.me/917381414499"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>WhatsApp: +91 7381414499</span>
              </a>
              <a href="tel:+917381414499" className="hover:text-amber-400 transition-colors">
                Desk Call
              </a>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <a
                href="https://maps.app.goo.gl/77x4XpjCax4aJULfA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline flex items-center gap-1"
              >
                <span>Google Map Location</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="flex items-center gap-6 sm:gap-10 text-slate-300">
              <div className="text-center sm:text-right">
                <span className="text-white font-extrabold text-sm block font-heading">12th Century</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">Heritage Sanctum</span>
              </div>
              <div className="text-center sm:text-right">
                <span className="text-amber-400 font-extrabold text-sm block font-heading">4 Sacred Dhams</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">Puri Divine Seat</span>
              </div>
              <div className="text-center sm:text-right">
                <span className="text-cyan-400 font-extrabold text-sm block font-heading">100% Fixed</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">Honest Cab Fares</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK FARE CALCULATOR & INQUIRY WIDGET */}
      <section className="relative z-30 -mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuickBookingWidget onOpenInquiry={onOpenInquiry} />
      </section>

      {/* 🌟 4 MAIN TOUR PACKAGES ON HOME PAGE (Immediately following Quick Booking) */}
      <MainFourAttractions onOpenInquiry={onOpenInquiry} />

      {/* 4 CORE TRUST VALUE PROPOSITIONS (Verified Cabs, Honest Fixed Fares, Desk Support, 0 Rushed Schedules) */}
      <TrustBadges />

      {/* 🚀 OFFICIAL FIXED TARIFF RATE CARD */}
      <OfficialRateTable onOpenInquiry={onOpenInquiry} />

      {/* 🗺️ INTERACTIVE ODISHA YATRA ROUTE DISTANCE & DURATION MATRIX */}
      <section className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-2 font-heading">
                Highway Logistics & Distance Guide
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                Odisha Yatra Travel Time & Highway Distance Matrix
              </h2>
              <p className="mt-2 text-sm text-slate-400 max-w-2xl">
                Plan your day itineraries with exact point-to-point road distances and optimal private cab suggestions departing from Puri.
              </p>
            </div>

            <Link
              to="/sightseeing"
              className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors group shrink-0"
            >
              <span>Explore Sightseeing Atlas</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {distanceMatrix.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-950/80 rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/40 transition-all shadow-xl space-y-4 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-bold">
                      Route #{idx + 1}
                    </span>
                    <span className="text-slate-400 font-semibold">{item.route}</span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-white group-hover:text-cyan-300 transition-colors">
                    {item.from} &rarr; {item.to}
                  </h3>

                  <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-slate-800/80 text-xs">
                    <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-slate-500 block text-[10px] uppercase font-bold">Road Distance</span>
                      <strong className="text-white text-sm font-heading">{item.distance}</strong>
                    </div>
                    <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-slate-500 block text-[10px] uppercase font-bold">Driving Time</span>
                      <strong className="text-amber-400 text-sm font-heading">{item.time}</strong>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="text-xs text-slate-400 mb-2">
                    <span className="font-bold text-slate-300">Suggested Cab:</span> {item.bestCab}
                  </div>
                  <button
                    onClick={() => onOpenInquiry(`Route Booking: ${item.from} to ${item.to}`)}
                    className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 hover:text-white border border-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Check Cab for this Route</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SENIOR CITIZEN & FAMILY PILGRIMAGE CARE BANNER */}
      <section className="py-16 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 rounded-3xl p-8 sm:p-12 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-500/30">
                <HeartHandshake className="w-4 h-4 text-cyan-400" />
                <span>Devotee & Elder Pilgrimage Care</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                Unhurried Temple Darshan & Mahaprasad Arrangements
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Visiting Lord Jagannath Dham with senior citizens requires extra empathy, patience, and native local coordination. Shree Khetra Yatra ensures zero rushed schedules:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="text-xs sm:text-sm">
                    <strong className="text-white block">Grand Road E-Rickshaw Link:</strong>
                    <span className="text-slate-400">Battery cart coordination up to Singhadwara Lion Gate.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="text-xs sm:text-sm">
                    <strong className="text-white block">Fresh Mahaprasad Seva:</strong>
                    <span className="text-slate-400">Guided collection of warm earthen pot Kudua prasad at Ananda Bazar.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="text-xs sm:text-sm">
                    <strong className="text-white block">Unhurried Halts:</strong>
                    <span className="text-slate-400">Driver waits patiently during temple prayer and arati ceremonies.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="text-xs sm:text-sm">
                    <strong className="text-white block">Vetted Native Chauffeurs:</strong>
                    <span className="text-slate-400">Polite drivers fluent in Odia, Hindi, Bengali, and English.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/pilgrimage"
                  className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-sm transition-all shadow-md flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-black" />
                  <span>Read Complete Pilgrimage Guide</span>
                </Link>
                <button
                  onClick={() => onOpenInquiry('Senior Citizen Pilgrimage Request')}
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all flex items-center gap-2"
                >
                  <Car className="w-4 h-4 text-cyan-400" />
                  <span>Request Dedicated Cab</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SIGHTSEEING DESTINATIONS SECTION */}
      <section className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-2 font-heading">
                Explore Coastal Odisha
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
                Featured Sightseeing Destinations
              </h2>
              <p className="mt-2 text-sm text-slate-400 max-w-2xl">
                Covering the holy sanctum of Puri, UNESCO heritage Konark, dolphin waters of Chilika, and the living crafts village of Raghurajpur.
              </p>
            </div>

            <Link
              to="/sightseeing"
              className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors group shrink-0"
            >
              <span>Explore All Sightseeing Spots</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest) => (
              <DestinationCard
                key={dest.id}
                destination={dest}
                onExplore={onOpenInquiry}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 🗺️ GOOGLE MAPS LOCATION HIGHLIGHT SECTION */}
      <section className="py-16 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4 mb-6">
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block font-heading mb-1">
                  Our Verified Location
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                  Visit Shree Khetra Yatra on Google Maps
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Biragobindapur, Puri, Odisha 752014 • Located on the main NH-316 highway corridor.
                </p>
              </div>

              <a
                href="https://maps.app.goo.gl/77x4XpjCax4aJULfA"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 shrink-0"
              >
                <MapPin className="w-4 h-4 text-black" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-black" />
              </a>
            </div>

            <div className="w-full h-72 sm:h-80 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 relative shadow-inner">
              <iframe
                title="Shree Khetra Yatra Google Map Embed"
                src="https://maps.google.com/maps?q=19.9210368,85.8151294&hl=en&z=15&output=embed"
                className="w-full h-full border-0 filter contrast-125"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CALL TO ACTION */}
      <section className="py-16 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider border border-cyan-500/40">
            Biragobindapur Desk Operational 24/7
          </span>

          <h2 className="text-3xl sm:text-5xl font-black font-heading leading-tight">
            Planning Your Sacred Yatra to Lord Jagannath Dham?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Reserve your private AC cab with 100% honest pricing matching our official tariff card. Speak directly with our dispatch desk today.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenInquiry('Bottom Futuristic CTA Booking')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-sm shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all flex items-center justify-center gap-2"
            >
              <Car className="w-4 h-4 text-black" />
              <span>Book Cab Online Now</span>
            </button>

            <a
              href="https://wa.me/917381414499?text=Jai%20Jagannath!%20I%20would%20like%20to%20book%20a%20cab%20in%20Puri."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <span>Chat on WhatsApp: +91 7381414499</span>
            </a>
          </div>
        </div>
      </section>

      {/* AUDIO-VISUAL DARSHAN EXPERIENCE MODAL */}
      {showDarshanModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn"
          onClick={() => setShowDarshanModal(false)}
        >
          <div
            className="relative max-w-3xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-cyan-500/40 shadow-[0_0_50px_rgba(6,182,212,0.3)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowDarshanModal(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black/90 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-72 sm:h-96 overflow-hidden">
              <img
                src="/images/hero-jagannath.jpg"
                alt="Shree Jagannath Temple Darshan"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-cyan-500 text-black flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.8)] animate-pulse">
                  <Play className="w-8 h-8 fill-black ml-1" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
                  Shree Jagannath Dham Darshan
                </h3>
                <p className="text-xs sm:text-sm text-cyan-200 max-w-md">
                  Experience the spiritual resonance of the 12th-century sanctum sanctorum, temple bells, and the sacred evening arati at Grand Road.
                </p>
              </div>
            </div>

            <div className="p-6 bg-slate-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
              <div className="text-left">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                  Need Darshan Logistics & Cab?
                </span>
                <p className="text-xs text-slate-400 mt-0.5">
                  We coordinate respectful hotel pickups, wheelchair transit, and fresh Mahaprasad arrangements.
                </p>
              </div>

              <button
                onClick={() => {
                  setShowDarshanModal(false);
                  onOpenInquiry('Darshan Assistance & Cab Request');
                }}
                className="px-6 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-xs uppercase tracking-wider shadow-lg shrink-0"
              >
                Book Darshan Cab
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

