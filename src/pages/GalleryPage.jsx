import React, { useState } from 'react';
import { galleryCategories, galleryItems } from '../data/galleryData';
import { Filter, MapPin, X, ZoomIn, Car, Camera, ArrowRight, MessageSquare } from 'lucide-react';

export default function GalleryPage({ onOpenInquiry }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredPhotos = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-8 pb-20 selection:bg-cyan-500 selection:text-black">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-bold border border-cyan-500/30 mb-4">
            <Camera className="w-3.5 h-3.5 text-cyan-400" />
            <span>Visual Glimpses of Coastal Odisha & Our Fleet</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            Odisha Pilgrimage & Sightseeing Gallery
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Explore authentic photos of sacred Puri Dham, the Black Pagoda at Konark, peaceful dolphin waters of Chilika Lake, Raghurajpur artisans, and our well-maintained private cabs.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 pb-4">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold shadow-md shadow-cyan-500/20 scale-105'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Counter */}
        <div className="text-center text-xs text-slate-400 mt-2 mb-6">
          Showing <strong className="text-white">{filteredPhotos.length}</strong> photos in <span className="text-cyan-400 font-semibold">{activeCategory}</span>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative bg-slate-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] border border-slate-800 hover:border-cyan-500/50 cursor-pointer transition-all duration-300 flex flex-col hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden bg-slate-950">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Category Pill */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-cyan-500 text-black shadow-sm">
                    {photo.category}
                  </span>
                </div>

                {/* Zoom Icon overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/80 backdrop-blur-md flex items-center justify-center text-black shadow-lg">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>

                {/* Title and Location bottom overlay */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-base font-bold font-heading line-clamp-1 leading-snug group-hover:text-cyan-300 transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-slate-300 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{photo.location}</span>
                  </p>
                </div>
              </div>

              <div className="p-3 text-xs text-slate-400 line-clamp-2 bg-slate-900/90 flex-1 border-t border-slate-800/80">
                {photo.description}
              </div>
            </div>
          ))}
        </div>

        {/* Fleet Booking Callout */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 rounded-3xl p-8 border border-cyan-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold font-heading text-white">
              Want to Travel in One of Our Clean Air-Conditioned Cabs?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              All vehicles come with verified native drivers, complimentary mineral water, phone chargers, and spotless interiors.
            </p>
          </div>
          <button
            onClick={() => onOpenInquiry('Gallery Fleet Booking')}
            className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-sm shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all shrink-0 flex items-center gap-2"
          >
            <Car className="w-4 h-4 text-black" />
            <span>Book Your Cab Today</span>
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black/90 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[68vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="max-h-[68vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 bg-slate-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-800">
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                  {selectedPhoto.category}
                </span>
                <h3 className="text-xl font-bold font-heading">{selectedPhoto.title}</h3>
                <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  {selectedPhoto.location}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl">
                  {selectedPhoto.description}
                </p>
              </div>

              <div className="shrink-0 flex flex-col gap-2">
                <button
                  onClick={() => {
                    const loc = selectedPhoto.location;
                    setSelectedPhoto(null);
                    onOpenInquiry(`Tour to ${loc}`);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
                >
                  <Car className="w-4 h-4 text-black" />
                  <span>Book Cab for this Trip</span>
                </button>
                <a
                  href={`https://wa.me/917381414499?text=${encodeURIComponent(
                    `Hello Shree Khetra Yatra, I saw the photo of "${selectedPhoto.title}" on your website and would like to visit here.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-xl border border-emerald-500 text-emerald-400 hover:bg-emerald-950/40 text-center font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
