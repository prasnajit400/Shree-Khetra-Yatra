const base = import.meta.env.BASE_URL || '/';

export const packages = [
  {
    id: "puri-chilika-taxi",
    title: "Puri to Chilika Lake Taxi Booking",
    subtitle: "Satapada Irrawaddy Dolphin Spotting & Sea Mouth Boat Ride Transfer",
    category: "Chilika Lake",
    vehicleType: "Dzire (₹2,200) • Ertiga (₹2,700) • Innova / Winger (₹4,000)",
    duration: "80 Km / 8 Hrs",
    price: 2200,
    priceDisplay: "₹2,200",
    originalPrice: 2500,
    pricingNote: "Official Tariff Card Rate • Extra: ₹12/km, ₹150/hr",
    featured: true,
    rating: 4.9,
    reviewsCount: 142,
    badge: "Official Tariff Matched",
    image: `${base}images/hero-chilika.jpg`,
    overview: "Embark on an 80 km / 8 hrs private day excursion from Puri to Satapada on the banks of Chilika Lake. Available in Swift Dzire (₹2,200), Ertiga (₹2,700), Innova Crysta (₹4,000), or 12-seater AC Winger (₹4,000).",
    inclusions: [
      "AC Vehicle of your choice with native courteous chauffeur",
      "80 Km / 8 Hours inclusive running limit",
      "Doorstep pick-up & drop from your Puri hotel or Grand Road",
      "Boat ride coordination & official OTDC ticketing counter assistance",
      "Unhurried halt at Satapada Chilika Tourism complex"
    ],
    exclusions: [
      "OTDC / Private motorized boat hire charges",
      "Personal meals, snacks & seafood at island stops",
      "Entry fees to any optional private exhibits"
    ],
    itinerary: [
      "07:30 AM: Doorstep pick-up from Puri hotel / resort",
      "09:00 AM: Scenic drive arriving at Satapada, Chilika Lake",
      "09:15 AM - 12:30 PM: Motorized boat cruise, Irrawaddy dolphin watching & Sea Mouth (Muhan)",
      "12:45 PM: Fresh coastal lunch halt at Satapada",
      "02:30 PM: Comfortable return drive to Puri"
    ]
  },
  {
    id: "puri-konark-taxi",
    title: "Puri to Konark Taxi Booking (5 Hrs Tour)",
    subtitle: "Express Sun Temple Tour & Chandrabhaga Beach Visit",
    category: "Konark Express",
    vehicleType: "Dzire (₹1,699) • Ertiga (₹2,000) • Innova (₹3,500) • Winger (₹3,800)",
    duration: "5 Hrs Tour",
    price: 1699,
    priceDisplay: "₹1,699",
    originalPrice: 2000,
    pricingNote: "Official Tariff Rate • Extra: ₹12/km, ₹150/hr",
    featured: true,
    rating: 4.8,
    reviewsCount: 167,
    badge: "Most Popular Half-Day Tour",
    image: `${base}images/hero-konark.jpg`,
    overview: "Fast, punctual, and breathtaking ride along the renowned Marine Drive connecting Puri and Konark. Available in Dzire (₹1,699), Ertiga (₹2,000), Innova Crysta (₹3,500), or 12-seater AC Winger (₹3,800).",
    inclusions: [
      "Clean, sanitized AC Cab with polite local driver",
      "5 Hours dedicated tour duration with ample monument waiting",
      "Puri hotel pickup and drop-off",
      "Marine Drive scenic coastal route drive & Chandrabhaga beach halt",
      "All parking clearances and driver allowances included"
    ],
    exclusions: [
      "Konark monument entrance fees (ASI)",
      "Camera fees if applicable",
      "Food and personal refreshments"
    ],
    itinerary: [
      "Custom morning or afternoon pickup from Puri",
      "35 km scenic drive alongside the Bay of Bengal coastline",
      "Chandrabhaga Beach ocean breeze stop",
      "Sun Temple sightseeing with ample vehicle waiting time",
      "Safe and prompt return transfer to Puri"
    ]
  },
  {
    id: "puri-bhubaneswar-drop",
    title: "Puri to Bhubaneswar Drop Taxi Fare",
    subtitle: "Direct Airport (BBI), Station, or Hotel Transfer",
    category: "Airport Transfer",
    vehicleType: "Dzire (₹1,800) • Ertiga (₹2,000) • Innova (₹3,500) • Traveller (₹4,000)",
    duration: "1.5 - 2 Hours",
    price: 1800,
    priceDisplay: "₹1,800",
    originalPrice: 2100,
    pricingNote: "One-Way Drop • 17+1 Traveller: ₹4,000",
    featured: true,
    rating: 4.9,
    reviewsCount: 310,
    badge: "Airport Express Drop",
    image: `${base}images/fleet-dzire.jpg`,
    overview: "Point-to-point guaranteed private cab transfer from Puri to Biju Patnaik International Airport (BBI) or Bhubaneswar Railway Station. Dzire (₹1,800), Ertiga (₹2,000), Innova Crysta (₹3,500), or Force Traveller 17+1 (₹4,000).",
    inclusions: [
      "Direct smooth 60 km drive via NH-316 bypassing city traffic",
      "Doorstep pick-up from Puri hotel, resort, or Grand Road",
      "Luggage assistance and child/elderly passenger care",
      "Zero flight delay surcharge with real-time flight monitoring",
      "Highway toll charges included"
    ],
    exclusions: [
      "En-route detour to temples outside the highway route (available upon request)"
    ],
    itinerary: [
      "Chauffeur arrives at your Puri hotel 15 minutes before scheduled departure",
      "Luggage stowed comfortably into air-conditioned vehicle",
      "Direct express highway transit to Bhubaneswar",
      "Drop at BBI Airport departures gate or Bhubaneswar station platform"
    ]
  },
  {
    id: "bhubaneswar-sightseeing-from-puri",
    title: "Bhubaneswar Sightseeing from Puri",
    subtitle: "Lingaraj Temple, Dhauli Peace Pagoda, Caves & City Circuit",
    category: "Bhubaneswar Tour",
    vehicleType: "Dzire (₹3,000) • Winger (₹4,000) • Innova Crysta (₹5,500)",
    duration: "80 Km / 8 Hrs",
    price: 3000,
    priceDisplay: "₹3,000",
    originalPrice: 3500,
    pricingNote: "80 Km / 8 Hrs • Extra: ₹15-30/km",
    featured: true,
    rating: 4.9,
    reviewsCount: 188,
    badge: "Capital Heritage Circuit",
    image: `${base}images/hero-bhubaneswar.jpg`,
    overview: "Comprehensive full-day city sightseeing covering ancient Kalinga architecture: 11th-century Lingaraj Temple, Dhauli Shanti Stupa, Udayagiri-Khandagiri Caves, and Nandankanan. Dzire (₹3,000), Winger 13+1 (₹4,000), Innova (₹5,500).",
    inclusions: [
      "Dedicated Full-Day AC Cab with veteran temple circuit driver",
      "80 Km and 8 Hours inclusive running limit",
      "Covers Dhauli Peace Pagoda, Lingaraj Temple precinct, Mukteshwar, Rajarani & Caves",
      "Includes fuel, toll taxes, and vehicle parking clearances",
      "Flexible halts for lunch and authentic Odia sweet tastings (Pahala Rasagola)"
    ],
    exclusions: [
      "Monument entry tickets and cave passes",
      "Meals and refreshments"
    ],
    itinerary: [
      "08:00 AM: Departure from Puri hotel via NH-316",
      "09:30 AM: Dhauli Shanti Stupa & Ashokan Rock Edicts",
      "11:00 AM: Lingaraj Temple, Bindusagar & Mukteshwar Temple",
      "01:30 PM: Authentic Odia Thali lunch break",
      "03:00 PM: Udayagiri & Khandagiri Jain Caves exploration",
      "05:30 PM: Return drive to Puri with evening drop"
    ]
  },
  {
    id: "raghurajpur-crafts-tour",
    title: "Raghurajpur Crafts & Pattachitra Village Tour",
    subtitle: "Heritage Art & Living Crafts Village Excursion",
    category: "Heritage & Craft",
    vehicleType: "Private Cab (AC) • 4+1 Seats",
    duration: "4 Hours",
    price: 1600,
    priceDisplay: "₹1,600",
    originalPrice: 1900,
    pricingNote: "Special Discounted Fare • 16% OFF",
    featured: false,
    rating: 4.9,
    reviewsCount: 98,
    badge: "Heritage Cultural Excursion",
    image: `${base}images/hero-raghurajpur.jpg`,
    overview: "Visit Raghurajpur, Odisha's celebrated heritage crafts village near Puri. Walk along painted murals, meet National Award-winning Chitrakars, and witness live Pattachitra palm-leaf engraving, Gotipua dance heritage, and stone carving.",
    inclusions: [
      "Private AC Cab (Swift Dzire / Etios) with courteous driver",
      "Doorstep pick-up and drop anywhere in Puri",
      "All toll, parking, and village entry clearances",
      "Direct artisan studio visits with no middleman commission pressure",
      "Visit nearby village coconut groves and rural riverside"
    ],
    exclusions: [
      "Personal purchases of authentic Pattachitra artwork",
      "Tips or voluntary artist honorarium",
      "Food and personal refreshments"
    ],
    itinerary: [
      "09:00 AM or 02:30 PM: Pick-up from Puri hotel",
      "Direct drive through coconut groves and Bhargavi riverbank to Raghurajpur (14 km)",
      "Guided walk along the twin village streets admiring outdoor wall frescoes",
      "Interactive interaction with master artisans demonstrating natural pigment painting",
      "Safe return drop at your hotel"
    ]
  },
  {
    id: "golden-triangle-tour",
    title: "Full-Day Golden Triangle Private Cab Tour",
    subtitle: "Puri + Konark + Bhubaneswar Complete Heritage Circuit",
    category: "Full Day Circuit",
    vehicleType: "Private Cab (AC) • Dzire / Innova",
    duration: "8 Hours",
    price: 4499,
    priceDisplay: "₹4,499",
    originalPrice: 5200,
    pricingNote: "Comprehensive full-day excursion",
    featured: false,
    rating: 5.0,
    reviewsCount: 215,
    badge: "Ultimate Odisha Odyssey",
    image: `${base}images/hero-konark.jpg`,
    overview: "The most iconic cultural journey in eastern India. Tour the spiritual sanctum of Puri Jagannath Dham, witness the 13th-century architectural grandeur of the Konark Sun Temple, and explore Bhubaneswar's Lingaraj & Dhauli Shanti Stupa.",
    inclusions: [
      "Dedicated Full-Day AC Sedan / SUV with veteran highway chauffeur",
      "Customized pickup from Puri or Bhubaneswar hotel/station",
      "Covering Puri Dham, Marine Drive, Chandrabhaga Beach, Konark, Dhauli Peace Pagoda & Bhubaneswar temples",
      "Includes fuel, toll taxes, interstate/intercity permits, and vehicle parking",
      "Flexible schedule accommodating senior citizens and temple prayer timings"
    ],
    exclusions: [
      "Monument entry tickets (Konark ASI counter)",
      "Temple panda / priest honorariums",
      "Breakfast, lunch & refreshments"
    ],
    itinerary: [
      "07:00 AM: Start from Puri via picturesque Puri-Konark Marine Drive",
      "08:15 AM: Chandrabhaga Beach stroll & photo-stop",
      "08:45 AM - 10:45 AM: Konark Sun Temple (UNESCO World Heritage) exploration",
      "12:00 PM: Dhauli Shanti Stupa & Ashokan Rock Edicts",
      "01:00 PM: Authentic Odia Thali lunch break",
      "02:30 PM - 05:00 PM: Lingaraj Temple outer precinct, Mukteshwar & Rajarani temples",
      "06:30 PM: Relaxed return drop at Puri hotel"
    ]
  }
];
