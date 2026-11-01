import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, ShieldCheck, HelpCircle, ChevronDown, ChevronUp, Car, Sparkles } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    travelDates: '',
    pickupPoint: 'Puri Hotel / Station',
    destination: 'Puri Dham / Chilika / Konark',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const text = `*New Contact Page Inquiry - Shree Khetra Yatra*
━━━━━━━━━━━━━━━━━━━━
*Name:* ${formData.fullName}
*Phone:* ${formData.phone}
*Email:* ${formData.email || 'Not provided'}
*Dates / Details:* ${formData.travelDates}
*Pickup:* ${formData.pickupPoint}
*Destination:* ${formData.destination}
*Message:* ${formData.message || 'None'}
━━━━━━━━━━━━━━━━━━━━`;

    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/917381414499?text=${encoded}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 800);
  };

  const faqs = [
    {
      q: "What is the dress code for Shree Jagannath Temple darshan?",
      a: "Traditional Indian attire is mandatory. For men, dhotis or pyjamas with kurta (or shirts); for women, sarees or salwar kameez. Western wear such as shorts, sleeveless tops, and ripped jeans are strictly prohibited by the temple administration. Leather belts, purses, mobile phones, and cameras must be deposited at official counters outside Singhadwara."
    },
    {
      q: "Can you assist senior citizens with wheelchairs or battery cars?",
      a: "Yes! While non-Hindus and motor vehicles cannot enter the inner sanctum, we arrange e-rickshaws and battery-operated carts right up to the Lion's Gate (Singhadwara) on Grand Road. Our chauffeurs assist elderly pilgrims with comfortable halts, minimal walking access, and patience."
    },
    {
      q: "Are the quoted cab fares fixed with no hidden costs?",
      a: "Yes, 100%. All Shree Khetra Yatra prices include vehicle fuel, clean air-conditioned sedan/SUV, dedicated native chauffeur, interstate/intercity permits, and standard highway tolls and parking. There are zero surprise surcharges."
    },
    {
      q: "How does the airport transfer from Bhubaneswar (BBI) work?",
      a: "Our chauffeur tracks your flight status in real time. Even if your flight is delayed, the driver waits at the arrival gate holding a placard with your name. No extra waiting fee is levied for flight delays."
    },
    {
      q: "Can you arrange fresh authentic Mahaprasad from the temple?",
      a: "Our native local team can guide you directly to authentic earthen pot 'Kudua' Mahaprasad sellers at Ananda Bazar inside the temple complex, ensuring you receive fresh, sanctified Anna-Brahma prasad without paying inflated commissions to middlemen."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-8 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-500">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold border border-brand-500/30 mb-4">
            <Phone className="w-3.5 h-3.5" />
            <span>24/7 Pilgrimage & Roadside Support</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            Contact Shree Khetra Yatra
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Get in touch directly with our dispatch desk in Biragobindapur near Puri for cab bookings, pilgrimage advice, and custom tour inquiries.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Business Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card">
              <span className="text-xs font-bold text-brand-600 uppercase tracking-widest block mb-1 font-heading">
                Headquarters Desk
              </span>
              <h2 className="text-2xl font-bold font-heading text-slate-900">
                Shree Khetra Yatra
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                Also known as Shree Khetra Yatra Odisha
              </p>

              <div className="space-y-5 text-sm">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 border border-brand-100">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-heading">Physical Address:</strong>
                    <span className="text-slate-600 leading-relaxed block mt-0.5">
                      Biragobindapur, Puri, Odisha 752014, India
                    </span>
                    <span className="text-[11px] text-amber-600 font-semibold block mt-0.5">
                      (Historic Brahmin SASAN heritage village located on Puri-Bhubaneswar NH-316 corridor)
                    </span>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-heading">Phone / WhatsApp:</strong>
                    <a
                      href="tel:+917381414499"
                      className="text-base font-bold text-brand-700 hover:text-brand-800 block mt-0.5"
                    >
                      +91 7381414499
                    </a>
                    <span className="text-xs text-slate-500">Available for calls and WhatsApp messages</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-heading">Support Email:</strong>
                    <a
                      href="mailto:shreekhetraryatra@gmail.com"
                      className="text-slate-700 hover:text-brand-600 font-medium block mt-0.5 break-all"
                    >
                      shreekhetraryatra@gmail.com
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-heading">Desk Operating Hours:</strong>
                    <span className="text-slate-700 block mt-0.5 font-medium">
                      Daily: 06:00 AM – 09:00 PM IST
                    </span>
                    <span className="text-xs text-emerald-700 font-semibold block">
                      24/7 Roadside Cab Dispatch & Flight Tracking
                    </span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Action */}
              <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
                <a
                  href="https://wa.me/917381414499?text=Namaste%20Shree%20Khetra%20Yatra,%20I%20would%20like%20to%20inquire%20about%20a%20cab%20service."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp (+91 7381414499)</span>
                </a>

                <a
                  href="tel:+917381414499"
                  className="w-full py-2.5 px-4 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-800 font-bold text-sm flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-brand-600" />
                  <span>Direct Desk Call</span>
                </a>
              </div>
            </div>

            {/* Biragobindapur Location Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 shadow-card space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Strategic Location</span>
              </div>
              <h3 className="text-lg font-bold font-heading">
                Based in Biragobindapur near Puri
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Located conveniently on the highway linking Puri Dham, Raghurajpur Crafts Village, and Bhubaneswar. This enables our fleet to dispatch cabs quickly to Puri railway station, Grand Road resorts, or airport pickups without urban congestion delay.
              </p>
              <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-400" />
                <span>Puri City: 12 km • Raghurajpur: 4 km • BBI Airport: 50 km</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Lead Capture Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-card">
              <div className="mb-6">
                <span className="text-xs font-bold text-brand-600 uppercase tracking-widest block mb-1 font-heading">
                  Quick Inquiry & Cab Reservation
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
                  Send Your Pilgrimage Details
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Fill out your travel requirements. We will review your dates and connect with a confirmed fixed quote instantly.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-slate-900">
                    Thank You for Your Devotion!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Jai Jagannath! Your inquiry has been routed to our Biragobindapur travel desk. We are redirecting you to WhatsApp for instant confirmation.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={`https://wa.me/917381414499?text=${encodeURIComponent(
                        `Namaste Shree Khetra Yatra, I submitted an inquiry from ${formData.fullName}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md inline-flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Continue to WhatsApp Desk</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-100"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Soumya Ranjan Das"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 73814 14499"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm"
                      />
                    </div>
                  </div>

                  {/* Email & Dates */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@gmail.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                        Travel Dates / Yatra Schedule *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.travelDates}
                        onChange={(e) => setFormData({ ...formData, travelDates: e.target.value })}
                        placeholder="e.g. 15th to 18th Nov (3 Days)"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm"
                      />
                    </div>
                  </div>

                  {/* Pickup & Destination */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                        Pick-up Location
                      </label>
                      <select
                        value={formData.pickupPoint}
                        onChange={(e) => setFormData({ ...formData, pickupPoint: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm bg-white"
                      >
                        <option>Puri Hotel / Grand Road</option>
                        <option>Puri Railway Station</option>
                        <option>Bhubaneswar Airport (BBI)</option>
                        <option>Bhubaneswar Railway Station</option>
                        <option>Biragobindapur Sasan</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                        Tour / Yatra Route
                      </label>
                      <select
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm bg-white"
                      >
                        <option>Puri Dham Temple & Beach Sightseeing</option>
                        <option>Puri to Chilika Lake Taxi (₹2,200)</option>
                        <option>Raghurajpur Crafts Village Tour (₹1,600)</option>
                        <option>Full-Day Golden Triangle (Puri + Konark + BBI)</option>
                        <option>Puri to Konark Sun Temple Express</option>
                        <option>Bhubaneswar Airport Direct AC Transfer</option>
                      </select>
                    </div>
                  </div>

                  {/* Message & Special Requests */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                      Travel Details / Special Requests
                    </label>
                    <textarea
                      rows="3"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please mention number of pilgrims, elderly assistance needed, luggage details, or temple arati timings..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-sm"
                    ></textarea>
                  </div>

                  {/* CTA Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-brand-600 via-brand-700 to-amber-600 hover:from-brand-700 hover:to-amber-700 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-brand-600/30 flex items-center justify-center gap-2 active:scale-98 transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Inquiry & Connect with Desk</span>
                    </button>
                    <p className="text-center text-xs text-slate-400 mt-2">
                      🔒 Direct dispatch desk response within 15 minutes.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-widest block mb-1 font-heading">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
              Pilgrimage & Cab Service Guidelines
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left font-heading font-bold text-sm sm:text-base text-slate-800 flex items-center justify-between gap-4 hover:text-brand-600 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-brand-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
