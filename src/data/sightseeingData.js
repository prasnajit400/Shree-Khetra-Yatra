const base = import.meta.env.BASE_URL || '/';

export const sightseeingRegions = [
  "All",
  "Puri Dham",
  "Konark Coast",
  "Chilika Satapada",
  "Bhubaneswar",
  "Artisan Villages"
];

export const sightseeingSpots = [
  {
    id: "jagannath-temple-spot",
    title: "Shree Jagannath Temple",
    region: "Puri Dham",
    tag: "Sacred Char Dham Sanctum",
    distanceFromPuri: "Heart of Puri (Grand Road)",
    distanceFromDesk: "12 km from Biragobindapur Hub",
    bestTime: "06:00 AM – 10:30 PM (Arati timings)",
    duration: "2 - 3 Hours",
    entryFee: "Free Entry (Special Puja through Pandaship optional)",
    image: `${base}images/hero-jagannath.jpg`,
    description: "The supreme sanctum of Lord Jagannath, Balabhadra, and Devi Subhadra. Built in the 12th century by King Anantavarman Chodaganga Deva, it stands 214 feet high and is considered one of the holiest pilgrim sites on Earth.",
    highlights: [
      "Darshan of the Holy Trinity in the sanctum sanctorum",
      "Nilachakra wheel and daily flag changing ritual (Chuna-Lagi) at 05:00 PM",
      "World's largest temple kitchen feeding over 50,000 devotees daily",
      "Bada Danda (Grand Road) holy walkway"
    ],
    tips: "Traditional Indian attire required. Mobile phones and leather items are strictly deposited at Singhadwara lockers."
  },
  {
    id: "konark-sun-temple-spot",
    title: "Konark Sun Temple (Black Pagoda)",
    region: "Konark Coast",
    tag: "UNESCO World Heritage Site",
    distanceFromPuri: "35 km via Marine Drive",
    distanceFromDesk: "38 km from Biragobindapur Hub",
    bestTime: "06:00 AM – 06:00 PM (Sunrise ideal)",
    duration: "2 - 3 Hours",
    entryFee: "₹40 (Indian Citizens) / ₹600 (Foreign Nationals)",
    image: `${base}images/hero-konark.jpg`,
    description: "Conceived as a colossal 24-wheeled chariot of Surya the Sun God pulled by seven spirited horses, this 13th-century sandstone masterpiece is celebrated for its sundial wheels, erotic sculptures, and celestial musician friezes.",
    highlights: [
      "Intricately carved 24 stone chariot wheels acting as exact sundials",
      "Natya Mandir (Hall of Dance) with classical Odissi poses",
      "Sound and light show in the evening",
      "Breathtaking Puri-Konark Marine Drive scenic coastal highway"
    ],
    tips: "Visit early morning around 07:00 AM for soft golden photography light and minimal heat."
  },
  {
    id: "chilika-satapada-spot",
    title: "Chilika Lake & Dolphin Sanctuary",
    region: "Chilika Satapada",
    tag: "Asia's Largest Brackish Water Lagoon",
    distanceFromPuri: "50 km south of Puri",
    distanceFromDesk: "48 km from Biragobindapur Hub",
    bestTime: "07:00 AM – 02:00 PM",
    duration: "4 - 5 Hours (including boat cruise)",
    entryFee: "Motorized boat rental at OTDC counter (₹1,500 – ₹3,000 per boat)",
    image: `${base}images/hero-chilika.jpg`,
    description: "Satapada sits at the meeting point of Chilika lagoon and the Bay of Bengal. Devotees and nature lovers board motorized country boats to spot endangered Irrawaddy dolphins and visit Rajahansa Island and the scenic Sea Mouth (Muhan).",
    highlights: [
      "Natural Irrawaddy dolphin sightings in open lagoon waters",
      "Sea Mouth (Chilika Muhan) sandbar beach where lake meets sea",
      "Rajahansa Island with fresh coastal breeze and red crabs",
      "Winter migratory bird flocks (Nov – Feb)"
    ],
    tips: "Our drivers accompany you directly to the official OTDC ticket counter to prevent private middleman touts."
  },
  {
    id: "dhauli-shanti-stupa-spot",
    title: "Dhauli Shanti Stupa (Peace Pagoda)",
    region: "Bhubaneswar",
    tag: "Historic Buddhist Peace Monument",
    distanceFromPuri: "48 km from Puri on NH-316",
    distanceFromDesk: "35 km from Biragobindapur Hub",
    bestTime: "07:00 AM – 06:30 PM",
    duration: "1 Hour",
    entryFee: "Free Entry",
    image: `${base}images/dhauli-shanti-stupa.jpg`,
    description: "Built atop Dhauli hill overlooking the Daya river plains where the historic Kalinga War was fought in 261 BCE. Witnessing the battlefield, Emperor Ashoka renounced bloodshed, adopted Buddhism, and established universal peace edicts.",
    highlights: [
      "Iconic white Peace Pagoda dome adorned with stone-carved Buddha reliefs",
      "Ancient Ashokan rock edicts inscribed in early Brahmi and Prakrit script",
      "Elephant sculpture emerging from living rock",
      "Elevated vantage point overlooking the sacred Daya river valley"
    ],
    tips: "Conveniently located right along our Puri-Bhubaneswar highway route; ideal stop en route to the airport."
  },
  {
    id: "lingaraj-temple-spot",
    title: "Lingaraj Temple & Temple Circuit",
    region: "Bhubaneswar",
    tag: "11th-Century Kalinga Marvel",
    distanceFromPuri: "60 km north of Puri",
    distanceFromDesk: "45 km from Biragobindapur Hub",
    bestTime: "06:00 AM – 09:00 PM",
    duration: "2 Hours",
    entryFee: "Free Entry",
    image: `${base}images/hero-bhubaneswar.jpg`,
    description: "The crown jewel of Bhubaneswar's temple architecture, dedicated to Lord Harihara (a combined form of Vishnu and Shiva). Its towering 180-foot deula spire dominates the Old Town skyline alongside the sacred Bindusagar lake.",
    highlights: [
      "Magnificent 11th-century Somavamsi dynasty architecture",
      "Bindusagar holy tank with waters collected from sacred rivers of India",
      "Nearby Mukteshwar Temple ('Gem of Odishan Architecture')",
      "Rajarani Temple renowned for erotic sandstone figurines"
    ],
    tips: "Non-Hindus can view the temple complex from a dedicated raised viewing platform outside the northern boundary."
  },
  {
    id: "raghurajpur-village-spot",
    title: "Raghurajpur Heritage Crafts Village",
    region: "Artisan Villages",
    tag: "National Heritage Village",
    distanceFromPuri: "14 km from Puri",
    distanceFromDesk: "4 km from Biragobindapur Hub",
    bestTime: "09:00 AM – 05:00 PM",
    duration: "2 Hours",
    entryFee: "Free Entry",
    image: `${base}images/hero-raghurajpur.jpg`,
    description: "Located right next to our home village of Biragobindapur, Raghurajpur is an open-air living museum where every home is an artisan studio. Renowned for Pattachitra scroll painting, palm-leaf engraving (Talapatra Chitra), wooden toys, and Gotipua dance.",
    highlights: [
      "Direct interactions with Master Chitrakar artisans in their homes",
      "Painted village streets decorated with traditional mythological murals",
      "Witness natural stone, shell, and vegetable color grinding",
      "Birthplace of legendary Odissi dance guru Kelucharan Mohapatra"
    ],
    tips: "Buy directly from the artists. There are zero middleman commissions when booking our local cab."
  },
  {
    id: "golden-beach-spot",
    title: "Blue Flag Golden Beach",
    region: "Puri Dham",
    tag: "Eco-Certified Blue Flag Shore",
    distanceFromPuri: "2 km from Jagannath Temple",
    distanceFromDesk: "13 km from Biragobindapur Hub",
    bestTime: "05:30 AM – 08:30 AM (Sunrise & Holy Dip)",
    duration: "1 - 2 Hours",
    entryFee: "₹20 for Blue Flag certified zone",
    image: `${base}images/golden-beach.jpg`,
    description: "One of India's few internationally certified Blue Flag beaches. Clean golden sands, safe bathing zones with lifeguards, water sports, and peaceful morning sunrise prayer spots overlooking the Bay of Bengal.",
    highlights: [
      "Pristine, clean sand with dedicated changing rooms and showers",
      "Sacred holy bath (Tirtha Snana) before temple darshan",
      "Puri Lighthouse with 360-degree panoramic ocean views",
      "Evening beach strolls and local Odia street snacks"
    ],
    tips: "Early morning around 05:45 AM offers peaceful, crowd-free waters for holy dips and sunrise meditation."
  },
  {
    id: "gundicha-temple-spot",
    title: "Maa Gundicha Temple (Yajna Vedi)",
    region: "Puri Dham",
    tag: "Summer Garden Sanctuary",
    distanceFromPuri: "3 km from Jagannath Temple (Grand Road tip)",
    distanceFromDesk: "10 km from Biragobindapur Hub",
    bestTime: "06:00 AM – 08:30 PM",
    duration: "1 Hour",
    entryFee: "Free Entry",
    image: `${base}images/jagannath-temple.jpg`,
    description: "Considered the birthplace of Lord Jagannath and site of the celestial Ashwamedha Yajna. During the world-famous annual Rath Yatra, the deities travel on their majestic chariots from the main temple to stay here for 9 days.",
    highlights: [
      "Serene garden temple setting adorned with Kalinga stone carvings",
      "Simhasana where the Holy Trinity resides during Rath Yatra festival",
      "Less crowded than the main temple; ideal for peaceful prayer",
      "Unhurried darshan for senior citizens"
    ],
    tips: "A peaceful alternative for elderly pilgrims who find the main temple complex difficult to navigate."
  }
];

