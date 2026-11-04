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
    image: `${base}images/banner-chilika-taxi.jpg`,
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
    image: `${base}images/banner-konark-taxi.jpg`,
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
    image: `${base}images/banner-bhubaneswar-drop.jpg`,
    overview: "Point-to-point guaranteed private cab transfer from Puri to Biju Patnaik International Airport (BBI) or Bhubaneswar Railway Station. Dzire (₹1,800), Ertiga (₹2,000), Innova Crysta (₹3,500), or Force Traveller 17+1 (₹4,000).",
    inclusions: [
      "Direct smooth 60 km drive via NH-316 bypassing city traffic",
      "Doorstep pick-up from Puri hotel, resort, or Grand Road",
      "Luggage assistance and child/elderly passenger care",
      "Zero flight delay surcharge with real-time flight monitoring",
      "Highway toll charges included"
    ],
    exclusions: [
      "Multi-point city detours outside designated drop destination",
      "Parking charges at destination if private pick-up applies"
    ],
    itinerary: [
      "Punctual doorstep pickup from your Puri hotel or residence",
      "Smooth 60 km drive via NH-316 bypassing city traffic",
      "Direct drop at BBI Departure Terminal or Railway Station Platform Gate"
    ]
  },
  {
    id: "bhubaneswar-sightseeing-tour",
    title: "Bhubaneswar Sightseeing from Puri (80 Km / 8 Hrs)",
    subtitle: "Lingaraj Temple, Dhauli Shanti Stupa, Khandagiri & Nandankanan",
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
    image: `${base}images/banner-bhubaneswar-sightseeing.jpg`,
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

  /* 🚀 4 NEW TOUR PACKAGES ADDED AS REQUESTED BY USER (With Direct Client Pricing Discussion) */
  {
    id: "koraput-tour-package",
    title: "Koraput Tour Package (2 Night / 3 Days)",
    subtitle: "Deomali Hills, Duduma Waterfall, Gupteswar Cave & Tribal Odyssey",
    category: "Koraput Tour",
    vehicleType: "AC Sedan • Ertiga • Innova Crysta • Traveller",
    duration: "2 Nights / 3 Days",
    price: 0,
    priceDisplay: "Discuss with Desk",
    originalPrice: null,
    pricingNote: "Direct Desk Quote",
    isCustomPrice: true,
    featured: true,
    rating: 4.9,
    reviewsCount: 88,
    badge: "2 Night / 3 Days Special",
    image: `${base}images/banner-koraput.jpg`,
    overview: "Experience the mesmerizing mountain beauty and rich tribal heritage of southern Odisha with our 2 Night / 3 Days Koraput Tour. Covers Koraput Local Sightseeing, Sabara Srikhetra Jagannath Temple, Tribal Museum, the majestic Duduma Waterfall (Machkund), Odisha's highest mountain peak at Deomali Hill Range, sacred Gupteswar Cave, Balda Caves, and Kolab Reservoir.",
    inclusions: [
      "Dedicated private AC Cab for entire 3-day circuit with veteran mountain chauffeur",
      "Doorstep pickup & drop from Puri or Bhubaneswar",
      "Full sightseeing of Deomali Hills, Duduma Falls, Gupteswar & Balda Caves",
      "Driver night halt allowances, highway toll taxes, and parking clearances included",
      "Customized pacing with hotel stay & local dining coordination"
    ],
    exclusions: [
      "Hotel / resort accommodation charges (can be arranged on request)",
      "Meals, snacks & personal expenses",
      "Any entry / boating tickets at Kolab reservoir or waterfalls"
    ],
    itinerary: [
      "Day 1: Departure from Puri / Bhubaneswar -> Scenic Eastern Ghats drive to Koraput -> Sabara Srikhetra Jagannath Temple & Tribal Museum -> Night halt in Koraput",
      "Day 2: Early morning excursion to Deomali Hill Range (Highest peak of Odisha, 1,672 m) -> Duduma Waterfall (Machkund) -> Kolab Reservoir & Botanical Garden -> Night halt",
      "Day 3: Sacred Gupteswar Shiva Cave -> Balda Caves & rolling green plateau -> Comfortable return highway journey"
    ]
  },
  {
    id: "daringbadi-tour-package",
    title: "Daringbadi Tour Package (The Kashmir of Odisha)",
    subtitle: "Misty Pine Forests, Coffee Gardens, Midubanda Falls & Hill Valleys",
    category: "Daringbadi",
    vehicleType: "Private AC Cab • Sedan / SUV / Traveller",
    duration: "2 Days / 1 Night (or 3 Days)",
    price: 0,
    priceDisplay: "Discuss with Desk",
    originalPrice: null,
    pricingNote: "Direct Desk Quote",
    isCustomPrice: true,
    featured: true,
    rating: 4.9,
    reviewsCount: 94,
    badge: "Hill Station Special",
    image: `${base}images/banner-daringbadi.jpg`,
    overview: "Escape to Daringbadi, famously known as the Kashmir of Odisha, perched at an altitude of 3,000 ft amid misty pine hills, fragrant coffee and black pepper plantations, and whispering valleys. Enjoy refreshing cool mountain breezes, Midubanda Waterfall, Lover's Point, Hill View Point, and eco-parks.",
    inclusions: [
      "Dedicated private AC cab with experienced hill & ghat section chauffeur",
      "Doorstep pickup and return drop at Puri / Bhubaneswar",
      "Daringbadi local sightseeing: Pine Jungle, Coffee & Pepper plantations, Midubanda Falls, Lover's Point, Hill View Point & Emu farm",
      "All fuel, highway tolls, parking passes, and driver night allowances included",
      "Unhurried schedule for families, couples, and nature lovers"
    ],
    exclusions: [
      "Hotel / Eco-retreat stay charges (can be arranged as per package choice)",
      "Meals and refreshments",
      "Optional adventure park activities"
    ],
    itinerary: [
      "Day 1: Morning departure from Puri -> Scenic drive through Ganjam ghats -> Daringbadi arrival -> Check-in -> Pine forest walk & sunset from Hill View Point -> Overnight stay",
      "Day 2: Morning visit to Coffee & Spice plantations -> Midubanda Waterfall -> Lover's Point -> Emu bird sanctuary -> Afternoon scenic return drive to Puri"
    ]
  },
  {
    id: "tara-tarini-tour-package",
    title: "Puri to Maa Tara Tarini Temple Tour Package",
    subtitle: "Full Day Spiritual Pilgrimage to Revered Hilltop Adi Shakti Peeth",
    category: "Maa Tara Tarini",
    vehicleType: "AC Dzire • Ertiga • Innova Crysta • Winger",
    duration: "Full Day Tour",
    price: 0,
    priceDisplay: "Discuss with Desk",
    originalPrice: null,
    pricingNote: "Custom All-Inclusive Fare",
    isCustomPrice: true,
    featured: true,
    rating: 5.0,
    reviewsCount: 112,
    badge: "Hilltop Shakti Peeth",
    image: `${base}images/banner-tara-tarini.jpg`,
    overview: "Embark on an auspicious full-day pilgrimage from Puri to the ancient Maa Tara Tarini Temple, situated atop Kumari Hills on the sacred banks of the Rushikulya River in Ganjam. Ascend via modern ropeway cable car or the 999 holy steps, offer prayers at one of India's four primary Adi Shakti Peethas, and return comfortably with evening darshan at Shree Jagannath Temple.",
    inclusions: [
      "Dedicated sanitized AC Cab with respectful native chauffeur",
      "Doorstep hotel pickup and return drop anywhere in Puri",
      "Full-day tour with ample vehicle waiting time at hilltop temple complex",
      "Scenic hill road drive, 999 steps / modern ropeway boarding assistance",
      "All highway toll taxes, parking fees, and driver allowances included"
    ],
    exclusions: [
      "Ropeway ticket fees / special puja coupons",
      "Personal temple offerings and priest honorarium",
      "Food and personal refreshments"
    ],
    itinerary: [
      "06:30 AM: Doorstep morning pickup from Puri hotel",
      "09:30 AM: Scenic coastal highway drive arriving at Kumari Hills, Purushottampur",
      "10:00 AM - 01:30 PM: Ropeway / 999 steps ascent, sanctum darshan of Twin Goddesses Tara and Tarini, prasad & arati",
      "02:00 PM: Traditional lunch break near Rushikulya river",
      "03:30 PM: Relaxed return journey to Puri with evening darshan view of Shree Jagannath Temple"
    ]
  },
  {
    id: "kalijai-tour-package",
    title: "Puri to Maa Kalijai Temple & Chilika Island Tour",
    subtitle: "Full Day Lagoon Drive, Scenic Boat Cruise & Island Shrine Darshan",
    category: "Maa Kalijai",
    vehicleType: "AC Dzire • Ertiga • Innova Crysta • Winger",
    duration: "Full Day Tour",
    price: 0,
    priceDisplay: "Discuss with Desk",
    originalPrice: null,
    pricingNote: "Custom All-Inclusive Fare",
    isCustomPrice: true,
    featured: true,
    rating: 4.9,
    reviewsCount: 104,
    badge: "Chilika Island Temple",
    image: `${base}images/banner-kalijai.jpg`,
    overview: "A blissful full-day spiritual journey from Puri to the revered island sanctum of Maa Kalijai in Chilika Lake. Dedicated to the presiding goddess of the lagoon who protects all boatmen, pilgrims, and coastal travelers. Combines smooth highway cab transit from Puri, scenic motorized boat ride to Kalijai Island, divine temple puja, and evening darshan at Shree Jagannath Temple.",
    inclusions: [
      "Private AC Cab of your choice with polite courteous driver",
      "Doorstep pickup & drop from your Puri hotel or Grand Road",
      "Scenic highway drive through historic coastal Odisha to Chilika boat boarding counter",
      "Boat ride coordination & assistance for crossing to Kalijai Island",
      "All highway tolls, vehicle parking clearances, and driver allowances included"
    ],
    exclusions: [
      "Motorized boat hire charges to Kalijai Island",
      "Personal temple puja items and offerings",
      "Meals and refreshments at island halts"
    ],
    itinerary: [
      "07:30 AM: Morning pickup from Puri hotel",
      "09:30 AM: Highway drive reaching Chilika boat jetty (Balugaon / Barkul)",
      "10:00 AM - 01:30 PM: Scenic boat ride across the blue expanse of Chilika Lake to Kalijai Island -> Maa Kalijai Darshan & temple blessings",
      "02:00 PM: Fresh coastal lunch halt",
      "04:30 PM: Safe return drive to Puri with evening Shree Jagannath Temple darshan"
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
    image: `${base}images/banner-konark-taxi.jpg`,
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
