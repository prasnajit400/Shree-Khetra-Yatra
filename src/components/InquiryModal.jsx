import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Car, Calendar, Users, Phone, Mail, User, MapPin, Send, MessageSquare } from 'lucide-react';

export default function InquiryModal({ isOpen, onClose, initialPackage = '' }) {
  const [formData, setFormData] = useState({
    packageName: initialPackage || 'Puri Pilgrimage & Cab Service',
    fullName: '',
    phone: '',
    email: '',
    travelDate: '',
    passengers: '2-4 Persons',
    vehiclePreference: 'Swift Dzire (AC Sedan)',
    pickupLocation: 'Puri Hotel / Station',
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

    // Format WhatsApp message text
    const message = `*New Yatra & Cab Inquiry - Shree Khetra Yatra*
━━━━━━━━━━━━━━━━━━━━
*Package/Trip:* ${formData.packageName}
*Pilgrim Name:* ${formData.fullName}
*Phone:* ${formData.phone}
*Email:* ${formData.email || 'Not provided'}
*Travel Date:* ${formData.travelDate || 'Flexible'}
*Passengers:* ${formData.passengers}
*Vehicle:* ${formData.vehiclePreference}
*Pickup Point:* ${formData.pickupLocation}
*Special Notes:* ${formData.specialRequests || 'Standard Pilgrimage'}
━━━━━━━━━━━━━━━━━━━━
Sent from Shree Khetra Yatra Website`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917381414499?text=${encoded}`;

    // Small delay to allow user to see submission state, then open WhatsApp in a new tab
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-600 via-brand-700 to-amber-700 p-5 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg leading-tight">Instant Cab & Tour Inquiry</h3>
              <p className="text-xs text-amber-200">Shree Khetra Yatra • Biragobindapur, Puri</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 font-heading">Inquiry Received with Devotion!</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Jai Jagannath! Your trip details have been generated. We are opening WhatsApp to instantly connect you with our Biragobindapur travel desk.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-700 space-y-1">
                <p><strong className="text-slate-900">Trip:</strong> {formData.packageName}</p>
                <p><strong className="text-slate-900">Name:</strong> {formData.fullName}</p>
                <p><strong className="text-slate-900">Contact:</strong> {formData.phone}</p>
                <p><strong className="text-slate-900">Vehicle:</strong> {formData.vehiclePreference}</p>
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
                  className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-100"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Selected Tour / Package */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Selected Package / Destination
                </label>
                <input
                  type="text"
                  required
                  value={formData.packageName}
                  onChange={(e) => setFormData({ ...formData, packageName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm font-semibold text-brand-700 bg-brand-50/50"
                  placeholder="e.g. Puri to Chilika Lake Taxi"
                />
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Rajesh Mohapatra"
                      className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    WhatsApp / Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Email & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@gmail.com"
                      className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Expected Travel Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="date"
                      value={formData.travelDate}
                      onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm text-slate-700"
                    />
                  </div>
                </div>
              </div>

              {/* Passengers & Vehicle Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Number of Passengers
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <select
                      value={formData.passengers}
                      onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm bg-white"
                    >
                      <option>1-2 Persons (Solo / Couple)</option>
                      <option>3-4 Persons (Small Family)</option>
                      <option>5-7 Persons (Large Family / Ertiga)</option>
                      <option>8+ Group (Multiple Cabs)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Vehicle Type
                  </label>
                  <select
                    value={formData.vehiclePreference}
                    onChange={(e) => setFormData({ ...formData, vehiclePreference: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm bg-white"
                  >
                    <option>Swift Dzire (AC Sedan - 4 Seater)</option>
                    <option>Toyota Etios (AC Sedan - 4 Seater)</option>
                    <option>Maruti Ertiga (AC SUV - 6 Seater)</option>
                    <option>Toyota Innova Crysta (Luxury 7 Seater)</option>
                  </select>
                </div>
              </div>

              {/* Pickup Point */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  Pickup Location in Puri or Bhubaneswar
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={formData.pickupLocation}
                    onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                    placeholder="e.g. Hotel near Puri Sea Beach / Grand Road / BBI Airport"
                    className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm"
                  />
                </div>
              </div>

              {/* Special Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  Special Notes / Senior Citizen Assistance
                </label>
                <textarea
                  rows="2"
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  placeholder="Need wheelchair coordination, elderly-friendly halts, fresh Mahaprasad seva, etc."
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-brand-600 via-brand-700 to-amber-600 hover:from-brand-700 hover:to-amber-700 text-white font-bold text-sm shadow-lg shadow-brand-600/30 flex items-center justify-center gap-2 active:scale-98 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry & Connect on WhatsApp</span>
                </button>
                <p className="text-center text-[11px] text-slate-400 mt-2">
                  🔒 Zero spam guarantee. Fixed transparent quotes directly from our Biragobindapur desk.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
