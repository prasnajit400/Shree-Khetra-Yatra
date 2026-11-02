import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Car, Calendar, Users, Phone, Mail, User, MapPin, Send, MessageSquare } from 'lucide-react';

export default function InquiryModal({ isOpen, onClose, initialPackage = '' }) {
  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    packageName: initialPackage || 'Puri to Chilika Lake Taxi (₹2,200)',
    fullName: '',
    phone: '',
    email: '',
    travelDate: today,
    passengers: '2-4 Persons',
    vehiclePreference: 'Swift Dzire (AC Sedan - 4+1)',
    pickupLocation: 'Puri Hotel / Grand Road',
    specialRequests: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialPackage) {
      setFormData((prev) => ({ ...prev, packageName: initialPackage }));
    }
    if (isOpen) {
      setSubmitted(false);
    }
  }, [initialPackage, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `*New Yatra & Cab Inquiry - Shree Khetra Yatra*
━━━━━━━━━━━━━━━━━━━━
*Package/Trip:* ${formData.packageName}
*Pilgrim Name:* ${formData.fullName}
*Phone:* ${formData.phone}
*Email:* ${formData.email || 'Not provided'}
*Travel Date:* ${formData.travelDate}
*Passengers:* ${formData.passengers}
*Vehicle:* ${formData.vehiclePreference}
*Pickup Point:* ${formData.pickupLocation}
*Special Notes:* ${formData.specialRequests || 'Standard Pilgrimage'}
━━━━━━━━━━━━━━━━━━━━
Sent from Shree Khetra Yatra Website`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917381414499?text=${encoded}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-cyan-500/40 max-h-[92vh] flex flex-col text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-5 text-white flex items-center justify-between shrink-0 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg leading-tight text-white">Instant Cab Booking Desk</h3>
              <p className="text-xs text-amber-300">Shree Khetra Yatra • Puri Dham Logistics</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-white font-heading">Inquiry Received with Devotion!</h4>
              <p className="text-sm text-slate-300 max-w-sm mx-auto">
                Jai Jagannath! Your booking details have been generated. We are opening WhatsApp to instantly connect you with our dispatch desk.
              </p>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-left text-xs text-slate-300 space-y-1">
                <p><strong className="text-white">Trip:</strong> {formData.packageName}</p>
                <p><strong className="text-white">Name:</strong> {formData.fullName}</p>
                <p><strong className="text-white">Contact:</strong> {formData.phone}</p>
                <p><strong className="text-white">Vehicle:</strong> {formData.vehiclePreference}</p>
                <p><strong className="text-white">Date:</strong> {formData.travelDate}</p>
              </div>
              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/917381414499?text=${encodeURIComponent('Hello Shree Khetra Yatra, I submitted an inquiry for: ' + formData.packageName)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm inline-flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open WhatsApp Directly</span>
                </a>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl border border-slate-700 text-slate-300 font-semibold text-sm hover:bg-slate-800"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Selected Tour / Package */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Selected Package / Destination
                </label>
                <input
                  type="text"
                  required
                  value={formData.packageName}
                  onChange={(e) => setFormData({ ...formData, packageName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-cyan-500/40 bg-slate-950 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 outline-none text-sm font-semibold text-cyan-300"
                  placeholder="e.g. Puri to Chilika Lake Taxi"
                />
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Rajesh Mohapatra"
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-950 border border-slate-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none text-sm text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    WhatsApp / Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-950 border border-slate-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none text-sm text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Email & Date Picker */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@gmail.com"
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-950 border border-slate-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none text-sm text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-amber-400 mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>Travel Date *</span>
                  </label>
                  <input
                    type="date"
                    required
                    min={today}
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-amber-500/60 focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20 outline-none text-sm text-white font-bold [color-scheme:dark] cursor-pointer"
                  />
                </div>
              </div>

              {/* Passengers & Vehicle Type from price chart */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Number of Passengers
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <select
                      value={formData.passengers}
                      onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-950 border border-slate-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none text-sm text-white cursor-pointer"
                    >
                      <option>1-4 Persons (Dzire Sedan)</option>
                      <option>5-6 Persons (Ertiga / Innova)</option>
                      <option>7-12 Persons (Tata Winger)</option>
                      <option>13-17 Persons (Force Traveller)</option>
                      <option>18+ Group (Multiple Cabs)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Vehicle Type
                  </label>
                  <select
                    value={formData.vehiclePreference}
                    onChange={(e) => setFormData({ ...formData, vehiclePreference: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none text-sm text-white cursor-pointer"
                  >
                    <option>Swift Dzire (AC Sedan - 4+1)</option>
                    <option>Maruti Ertiga (AC MPV - 6+1)</option>
                    <option>Innova Crysta (Luxury - 6+1)</option>
                    <option>Tata Winger (AC Van - 12+1)</option>
                    <option>Force Traveller (Minibus - 17+1)</option>
                  </select>
                </div>
              </div>

              {/* Pickup Point - Biragobindapur Sasan removed */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Pickup Location
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <select
                    value={formData.pickupLocation}
                    onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-950 border border-slate-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none text-sm text-white cursor-pointer"
                  >
                    <option>Puri Hotel / Grand Road</option>
                    <option>Puri Railway Station</option>
                    <option>Bhubaneswar Airport (BBI)</option>
                    <option>Bhubaneswar Railway Station</option>
                    <option>Konark Marine Drive</option>
                  </select>
                </div>
              </div>

              {/* Special Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Special Notes / Senior Citizen Assistance
                </label>
                <textarea
                  rows="2"
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  placeholder="Need wheelchair coordination, elderly-friendly halts, fresh Mahaprasad seva, etc."
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none text-sm text-white"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 text-black font-extrabold text-sm shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2 active:scale-98 transition-all"
                >
                  <Send className="w-4 h-4 text-black" />
                  <span>Send Inquiry & Connect on WhatsApp</span>
                </button>
                <p className="text-center text-[11px] text-slate-400 mt-2">
                  🔒 Zero spam guarantee. Fixed transparent quotes directly from our dispatch desk.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
