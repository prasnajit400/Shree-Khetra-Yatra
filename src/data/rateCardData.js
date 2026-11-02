const base = import.meta.env.BASE_URL || '/';

export const termsAndConditions = [
  {
    title: "Package Price & Toll Inclusions",
    points: [
      "Includes toll taxes and vehicle parking charges on actual journey route.",
      "Excludes interstate tax and government GST (5%) extra on total billing if applicable."
    ]
  },
  {
    title: "Kilometers & Hours Calculation",
    points: [
      "Calculated on point-to-point basis from designated pick-up to drop point.",
      "Any extra hours or extra kilometers beyond package limits will be billed at standard tariff rates."
    ]
  },
  {
    title: "Night Halt Charges (11:00 PM – 06:00 AM)",
    points: [
      "Light Vehicles (Dzire / Ertiga / Innova Crysta): ₹500 per night.",
      "Tempo Traveller & Winger (Minibus): ₹1,000 per night."
    ]
  },
  {
    title: "Local & Outstation Duty Rules",
    points: [
      "Local Duty: Vehicles below 250 km/day billed per approved local tariff.",
      "Outstation Duty: Minimum 200 km charged per day.",
      "Standing AC in parked vehicle is chargeable.",
      "AC will be switched OFF on steep ghat or uphill roads for passenger safety and vehicle efficiency."
    ]
  },
  {
    title: "Booking Cancellation & Jurisdiction",
    points: [
      "10% of total billing is charged if booking is cancelled before 24 hours of scheduled departure.",
      "Legal Jurisdiction: All disputes subject to Puri jurisdiction courts only."
    ]
  }
];

export const officialRateCards = [
  {
    id: "puri-chilika",
    categoryTitle: "Puri to Chilika Lake Taxi Booking",
    durationDistance: "80 Km / 8 Hrs",
    routeDescription: "Satapada dolphin spotting, motorized boat boarding counter, Rajahansa Island transfer.",
    startingPrice: "₹2,200",
    image: `${base}images/hero-chilika.jpg`,
    badge: "Top Attraction #1",
    rates: [
      {
        vehicle: "AC Winger",
        seats: "12+1",
        baseRate: 4000,
        baseRateDisplay: "₹4,000.00",
        extraHrs: "₹250.00",
        extraKm: "₹23.00",
        perKm: "₹23.00",
        image: `${base}images/fleet-winger.jpg`,
        description: "Large group passenger van, high-roof AC comfort, ample luggage storage."
      },
      {
        vehicle: "AC Dzire",
        seats: "4+1",
        baseRate: 2200,
        baseRateDisplay: "₹2,200.00",
        extraHrs: "₹150.00",
        extraKm: "₹12.00",
        perKm: "₹12.00",
        image: `${base}images/fleet-dzire.jpg`,
        description: "Best-value AC sedan for couples and small families. Smooth highway ride."
      },
      {
        vehicle: "AC Innova Crysta",
        seats: "6+1",
        baseRate: 4000,
        baseRateDisplay: "₹4,000.00",
        extraHrs: "₹200.00",
        extraKm: "₹18.00",
        perKm: "₹18.00",
        image: `${base}images/fleet-innova.jpg`,
        description: "Premium luxury captain-seat MPV for superior comfort and elder care."
      },
      {
        vehicle: "AC Ertiga",
        seats: "6+1",
        baseRate: 2700,
        baseRateDisplay: "₹2,700.00",
        extraHrs: "₹200.00",
        extraKm: "₹15.00",
        perKm: "₹15.00",
        image: `${base}images/fleet-ertiga.jpg`,
        description: "Comfortable 3-row family vehicle, ideal balance of affordability and space."
      }
    ]
  },
  {
    id: "puri-konark",
    categoryTitle: "Puri to Konark Taxi Booking (5 Hrs Tour)",
    durationDistance: "5 Hrs Tour / Marine Drive",
    routeDescription: "Express Puri-Konark Marine Drive, Sun Temple architectural tour, Chandrabhaga beach breeze.",
    startingPrice: "₹1,699",
    image: `${base}images/hero-konark.jpg`,
    badge: "Top Attraction #2",
    rates: [
      {
        vehicle: "AC Winger",
        seats: "12+1",
        baseRate: 3800,
        baseRateDisplay: "₹3,800.00",
        extraHrs: "₹250.00",
        extraKm: "₹23.00",
        perKm: "₹23.00",
        image: `${base}images/fleet-winger.jpg`,
        description: "Perfect for group pilgrimages and extended families visiting the Sun Temple."
      },
      {
        vehicle: "AC Ertiga",
        seats: "6+1",
        baseRate: 2000,
        baseRateDisplay: "₹2,000.00",
        extraHrs: "₹200.00",
        extraKm: "₹15.00",
        perKm: "₹15.00",
        image: `${base}images/fleet-ertiga.jpg`,
        description: "Spacious 6-seater AC cab with prompt pick-up and waiting time included."
      },
      {
        vehicle: "AC Innova Crysta",
        seats: "6+1",
        baseRate: 3500,
        baseRateDisplay: "₹3,500.00",
        extraHrs: "₹200.00",
        extraKm: "₹18.00",
        perKm: "₹18.00",
        image: `${base}images/fleet-innova.jpg`,
        description: "Luxury cruiser with chilled dual-zone AC and plush executive seating."
      },
      {
        vehicle: "AC Dzire",
        seats: "4+1",
        baseRate: 1699,
        baseRateDisplay: "₹1,699.00",
        extraHrs: "₹150.00",
        extraKm: "₹12.00",
        perKm: "₹12.00",
        image: `${base}images/fleet-dzire.jpg`,
        description: "Our most economical express cab for quick half-day Konark sightseeing."
      }
    ]
  },
  {
    id: "puri-bhubaneswar-drop",
    categoryTitle: "Puri to Bhubaneswar Drop Taxi Fare",
    durationDistance: "One-Way / Point-to-Point Drop",
    routeDescription: "Direct highway drop to Bhubaneswar Airport (BBI), Master Canteen Station, or city hotels.",
    startingPrice: "₹1,800",
    image: `${base}images/fleet-dzire.jpg`,
    badge: "Top Attraction #3",
    rates: [
      {
        vehicle: "AC Innova Crysta",
        seats: "6+1",
        baseRate: 3500,
        baseRateDisplay: "₹3,500.00",
        extraHrs: "₹250.00",
        extraKm: "₹18.00",
        perKm: "₹18.00",
        image: `${base}images/fleet-innova.jpg`,
        description: "Stress-free airport drop with ample trunk space for heavy flight luggage."
      },
      {
        vehicle: "AC Ertiga",
        seats: "6+1",
        baseRate: 2000,
        baseRateDisplay: "₹2,000.00",
        extraHrs: "₹200.00",
        extraKm: "₹15.00",
        perKm: "₹15.00",
        image: `${base}images/fleet-ertiga.jpg`,
        description: "Popular family drop cab. Punctual doorstep pickup anywhere in Puri."
      },
      {
        vehicle: "AC Dzire",
        seats: "4+1",
        baseRate: 1800,
        baseRateDisplay: "₹1,800.00",
        extraHrs: "₹150.00",
        extraKm: "₹12.00",
        perKm: "₹12.00",
        image: `${base}images/fleet-dzire.jpg`,
        description: "Affordable standard sedan with professional highway chauffeur."
      },
      {
        vehicle: "Force Traveller",
        seats: "17+1",
        baseRate: 4000,
        baseRateDisplay: "₹4,000.00",
        extraHrs: "₹500.00",
        extraKm: "₹22.00",
        perKm: "₹22.00",
        image: `${base}images/fleet-traveller.jpg`,
        description: "17-passenger minibus with push-back seats and dedicated luggage carrier."
      }
    ]
  },
  {
    id: "bhubaneswar-sightseeing",
    categoryTitle: "Bhubaneswar Sightseeing from Puri",
    durationDistance: "80 Km / 8 Hrs",
    routeDescription: "Lingaraj Temple, Dhauli Shanti Stupa, Udayagiri-Khandagiri Caves & Nandankanan.",
    startingPrice: "₹3,000",
    image: `${base}images/hero-bhubaneswar.jpg`,
    badge: "Top Attraction #4",
    rates: [
      {
        vehicle: "AC Winger",
        seats: "13+1",
        baseRate: 5500,
        baseRateDisplay: "₹5,500.00",
        extraHrs: "₹250.00",
        extraKm: "₹23.00",
        perKm: "₹23.00",
        image: `${base}images/fleet-winger.jpg`,
        description: "Full-day group excursion across all historic temples and Buddhist caves."
      },
      {
        vehicle: "AC Innova Crysta",
        seats: "6+1",
        baseRate: 5500,
        baseRateDisplay: "₹5,500.00",
        extraHrs: "₹350.00",
        extraKm: "₹30.00",
        perKm: "₹30.00",
        image: `${base}images/fleet-innova.jpg`,
        description: "Ultimate luxury day tour with veteran temple circuit guide-driver."
      },
      {
        vehicle: "AC Ertiga",
        seats: "6+1",
        baseRate: 3800,
        baseRateDisplay: "₹3,800.00",
        extraHrs: "₹200.00",
        extraKm: "₹15.00",
        perKm: "₹15.00",
        image: `${base}images/fleet-ertiga.jpg`,
        description: "Spacious 6-seater full-day sightseeing cab for temple lovers."
      },
      {
        vehicle: "AC Dzire",
        seats: "4+1",
        baseRate: 3000,
        baseRateDisplay: "₹3,000.00",
        extraHrs: "₹250.00",
        extraKm: "₹20.00",
        perKm: "₹20.00",
        image: `${base}images/fleet-dzire.jpg`,
        description: "Complete full-day temple tour for couples or small families."
      }
    ]
  }
];

