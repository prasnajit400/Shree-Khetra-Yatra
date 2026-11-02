const base = import.meta.env.BASE_URL || '/';

export const galleryCategories = [
  "All",
  "Coastal Odisha",
  "Temple & Coast",
  "Pilgrimage & Landscapes",
  "Our Fleet"
];

export const galleryItems = [
  {
    id: 1,
    title: "Shree Jagannath Temple Bada Danda",
    category: "Temple & Coast",
    location: "Puri Dham",
    image: `${base}images/hero-jagannath.jpg`,
    description: "The magnificent 12th-century sanctum of Lord Jagannath along Grand Road in sacred Puri Dham."
  },
  {
    id: 2,
    title: "Konark Sun Temple Sandstone Wheels",
    category: "Temple & Coast",
    location: "Konark",
    image: `${base}images/hero-konark.jpg`,
    description: "Intricately carved 13th-century stone sundials and celestial sculptures at the Black Pagoda."
  },
  {
    id: 3,
    title: "Irrawaddy Dolphin Boat Cruise",
    category: "Coastal Odisha",
    location: "Chilika Lake (Satapada)",
    image: `${base}images/hero-chilika.jpg`,
    description: "Serene morning boat cruise across Satapada waters spotting natural dolphin pods."
  },
  {
    id: 4,
    title: "Lingaraj Temple Twilight Reflection",
    category: "Temple & Coast",
    location: "Old Town, Bhubaneswar",
    image: `${base}images/hero-bhubaneswar.jpg`,
    description: "11th-century Somavamsi stone deula towering over the sacred waters of Bindusagar."
  },
  {
    id: 5,
    title: "Raghurajpur Heritage Crafts Murals",
    category: "Pilgrimage & Landscapes",
    location: "Raghurajpur Heritage Village",
    image: `${base}images/hero-raghurajpur.jpg`,
    description: "Master artisan hand-painting sacred epic scrolls on traditional cloth and palm leaves."
  },
  {
    id: 6,
    title: "Puri Blue Flag Golden Beach Sunrise",
    category: "Coastal Odisha",
    location: "Golden Beach, Puri",
    image: `${base}images/golden-beach.jpg`,
    description: "Early dawn prayer, sunrise, and sacred dip at the clean Blue Flag certified shore of Puri."
  },
  {
    id: 7,
    title: "Our Clean AC Swift Dzire Fleet",
    category: "Our Fleet",
    location: "Biragobindapur Fleet Yard",
    image: `${base}images/fleet-dzire.jpg`,
    description: "Immaculately maintained, fully air-conditioned sedan ready for pilgrimage journeys."
  },
  {
    id: 8,
    title: "Konark Sun Temple Complete View",
    category: "Temple & Coast",
    location: "Konark Heritage Complex",
    image: `${base}images/konark-sun-temple.jpg`,
    description: "Full architectural panorama of the monumental UNESCO World Heritage chariot temple."
  },
  {
    id: 9,
    title: "Sri Jagannath Temple Ancient Shikhara",
    category: "Temple & Coast",
    location: "Puri Dham",
    image: `${base}images/jagannath-temple.jpg`,
    description: "The 214-foot soaring stone spire crowned by the sacred Nilachakra and Patitapavana flag."
  },
  {
    id: 10,
    title: "Master Pattachitra Painter Studio",
    category: "Pilgrimage & Landscapes",
    location: "Raghurajpur Crafts Village",
    image: `${base}images/raghurajpur-art.jpg`,
    description: "Authentic living tradition of natural stone pigment grinding and delicate brushwork."
  },
  {
    id: 11,
    title: "Chilika Calm Waters & Fishing Boats",
    category: "Coastal Odisha",
    location: "Satapada, Chilika",
    image: `${base}images/chilika-lake.jpg`,
    description: "Quiet morning across Asia's largest brackish lagoon surrounded by migratory wetland birds."
  },
  {
    id: 12,
    title: "Konark Chariot Wheel Hub & Spokes",
    category: "Temple & Coast",
    location: "Konark",
    image: `${base}images/konark-wheel.jpg`,
    description: "Exquisite details of medallions depicting day-and-night activities carved in sandstone."
  }
];
