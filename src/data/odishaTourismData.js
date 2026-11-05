const base = import.meta.env.BASE_URL || '/';

export const tourismRegions = [
  'All Destinations',
  'Sacred Temples & Shrines',
  'Hill Stations & Nature',
  'Heritage & Handicrafts',
  'Wildlife & Eco-Tourism',
  'Lakes & Coastal Beaches'
];

export const odishaDestinations = [
  {
    id: "puri-jagannath-dham",
    title: "Shree Jagannath Temple & Puri Dham",
    category: "Sacred Temples & Shrines",
    tag: "Sacred Char Dham",
    distance: "Puri City Center (Grand Road)",
    idealDuration: "1 Full Day",
    bestSeason: "October to March (Ratha Yatra in June/July)",
    image: `${base}images/hero-jagannath.jpg`,
    summary: "One of the four revered Char Dhams of Bharat. The monumental 12th-century Kalinga-style temple honors Lord Jagannath, Lord Balabhadra, and Devi Subhadra. Experience the towering 214-ft vimana, sacred Singhadwara, and world-famous Mahaprasad.",
    description: "Built in the 12th century by King Anantavarman Chodaganga Deva, the sacred temple of Lord Jagannath is eastern India's supreme pilgrimage sanctum. Devotees from around the globe journey to walk the sacred Grand Road (Bada Danda), touch the 22 holy steps (Baisi Pahacha), and partake in the blissful earthen-pot Mahaprasad at Ananda Bazar.",
    highlights: [
      "World's largest temple kitchen feeding over 50,000 devotees daily with earthen pot Kudua prasad",
      "Singhadwara Lion Gate and the 16-sided chlorite Aruna Stambha pillar",
      "Ananda Bazar — the sacred, joyful open-air food market of the divine Lord",
      "Daily sunset flag-changing ceremony (Patitapabana Bana) atop the 214-ft temple spire",
      "Walking access to the Blue Flag certified Golden Beach promenade"
    ],
    travelTip: "Private cabs pick up from all Puri hotels. We coordinate battery carts right to Singhadwara for senior citizens."
  },
  {
    id: "konark-sun-temple",
    title: "Konark Sun Temple & Marine Drive",
    category: "Heritage & Handicrafts",
    tag: "UNESCO World Heritage Site",
    distance: "35 km from Puri (45 mins via Marine Drive)",
    idealDuration: "Half Day (4 - 5 Hours)",
    bestSeason: "October to March",
    image: `${base}images/banner-konark-taxi.jpg`,
    summary: "A 13th-century stone marvel conceived as a colossal cosmic chariot of the Sun God Surya, complete with 24 carved wheels and 7 galloping horses. Renowned worldwide for its breathtaking stone carvings and astronomical sundial precision.",
    description: "Built in 1250 AD by King Narasimhadeva I, the Black Pagoda at Konark stands as the ultimate crown of Kalinga architectural genius. Connected to Puri via the picturesque Marine Drive coastal highway along the Bay of Bengal, it represents the absolute pinnacle of Indian stone artistry.",
    highlights: [
      "24 giant carved chariot sundial wheels capable of predicting exact time down to the minute",
      "Natya Mandapa (Hall of Dance) adorned with celestial dancers, musicians, and mythic beasts",
      "Scenic coastal highway drive along the Puri-Konark Marine Drive with ocean breeze",
      "Chandrabhaga Beach stroll where myth says Lord Rama's brother Lakshmana prayed",
      "ASI interpretation museum and light & sound show in the evening"
    ],
    travelTip: "Best explored in early morning or late afternoon for golden hour photography and comfortable monument walking."
  },
  {
    id: "chilika-lake-satapada",
    title: "Chilika Lake & Satapada Lagoon",
    category: "Lakes & Coastal Beaches",
    tag: "Asia's Largest Lagoon",
    distance: "50 km from Puri (1 hr 15 mins drive)",
    idealDuration: "Full Day (6 - 8 Hours)",
    bestSeason: "November to March (Migratory bird peak)",
    image: `${base}images/banner-chilika-taxi.jpg`,
    summary: "Asia's largest brackish water lagoon spreading over 1,100 sq km. Satapada is world-famous as the natural sanctuary of the endangered Irrawaddy dolphins and a haven for winter migratory waterfowl from Siberia.",
    description: "Chilika is a designated Ramsar wetland of international importance. At Satapada, motorized country boats ferry travelers across serene waters to witness Irrawaddy dolphins surfacing, explore scenic Rajahansa Island, and witness the sea mouth where the lagoon joins the Bay of Bengal.",
    highlights: [
      "Thrilling motorized boat ride spotting Irrawaddy dolphins leaping in their natural lagoon habitat",
      "Sea Mouth (Muhan) — the dramatic meeting point of freshwater Chilika and the Bay of Bengal",
      "Rajahansa Island sandbar stroll between the lagoon and sea surf",
      "Over 160 species of vibrant migratory birds arriving from Central Asia and Siberia",
      "Fresh coastal seafood, crab, and prawn fry at lakeside food stalls and eateries"
    ],
    travelTip: "Our drivers guide you directly to authorized boat boarding points with life-jacket safety and verified tariffs."
  },
  {
    id: "bhubaneswar-temple-circuit",
    title: "Bhubaneswar — Temple City of India",
    category: "Sacred Temples & Shrines",
    tag: "Capital Heritage Circuit",
    distance: "60 km from Puri (NH-316 Highway)",
    idealDuration: "Full Day (8 Hours)",
    bestSeason: "October to March",
    image: `${base}images/banner-bhubaneswar-sightseeing.jpg`,
    summary: "Eastern India's temple capital boasting 500+ sandstone monuments spanning the 6th to 13th centuries, alongside pivotal Buddhist peace monuments and ancient Jain cave dwellings.",
    description: "Known historically as Ekamra Kshetra, Bhubaneswar preserves the most complete architectural chronicle of ancient Kalinga stone masonry. From the towering 11th-century spire of Lingaraj to the pristine white Dhauli Shanti Stupa, it offers a fascinating journey through Hindu, Buddhist, and Jain heritage.",
    highlights: [
      "11th-century Lingaraj Temple dedicated to Lord Harihara, surrounded by sacred Bindusagar lake",
      "Mukteshwar Temple — 'The Gem of Odishan Architecture' famous for its sculpted arched Torana",
      "Dhauli Shanti Stupa & Emperor Ashoka's 3rd-century BC rock edicts renouncing war for peace",
      "Ancient rock-cut Udayagiri and Khandagiri Jain monastic caves with Rani Gumpha multi-storied halls",
      "Authentic Pahala Rasagola sweet tasting along the national highway"
    ],
    travelTip: "Combine Lingaraj, Mukteshwar, Dhauli, and Khandagiri comfortably in our 80 km / 8 hrs fixed cab package."
  },
  {
    id: "koraput-highlands",
    title: "Koraput Hill Station & Tribal Odyssey",
    category: "Hill Stations & Nature",
    tag: "Mountain & Tribal Odyssey",
    distance: "Southern Odisha (Ideal 2 Night / 3 Days Circuit)",
    idealDuration: "2 Nights / 3 Days",
    bestSeason: "September to March",
    image: `${base}images/banner-koraput.jpg`,
    summary: "A pristine paradise in the Eastern Ghats boasting Odisha's highest mountain peak, gushing waterfalls, ancient limestone cave shrines, fragrant coffee valleys, and vibrant indigenous tribal cultures.",
    description: "Located in the southwestern tip of Odisha at high elevations, Koraput captivates with misty mountain contours, tribal haats (weekly markets), and virgin landscapes. From the heights of Deomali to the roaring Duduma cascade on the Machkund River, it is Odisha's ultimate adventure destination.",
    highlights: [
      "Deomali Hill Range — The highest mountain peak in Odisha (1,672 meters) with 360-degree cloud vistas",
      "Duduma Waterfall — Roaring 175-meter horsetail cascade on the Machkund River",
      "Gupteswar Sacred Shiva Cave — Ancient subterranean stalagmite lingam nestled inside deep sal forests",
      "Sabara Srikhetra Jagannath Temple — Unique shrine welcoming all tribes without caste or entry barriers",
      "Balda Caves, Kolab Reservoir & Tribal Museum showcasing authentic jewelry and musical instruments"
    ],
    travelTip: "Requires a dedicated multi-day private cab with an experienced mountain chauffeur. Inquire for custom vehicle rates."
  },
  {
    id: "daringbadi-kashmir-odisha",
    title: "Daringbadi — The Kashmir of Odisha",
    category: "Hill Stations & Nature",
    tag: "The Kashmir of Odisha",
    distance: "250 km from Puri (Kandhamal Highlands)",
    idealDuration: "2 Days / 1 Night (or 3 Days)",
    bestSeason: "October to February (Chilly winter frost)",
    image: `${base}images/banner-daringbadi.jpg`,
    summary: "A scenic hill station perched at 3,000 feet amid pine-fringed hills, rolling coffee gardens, black pepper plantations, and misty valleys with chilly winter breezes.",
    description: "Surrounded by cloud-kissed Eastern Ghat hills, Daringbadi earned the moniker 'Kashmir of Odisha' because of its pleasant sub-tropical highland climate, occasional winter frost, pine forests, and unhurried natural tranquility. It is an idyllic getaway for couples, families, and nature enthusiasts.",
    highlights: [
      "Sprawling organic coffee plantations and spicy black pepper gardens with mountain aromas",
      "Dense whispering pine jungle trails and serene scenic hiking paths",
      "Midubanda Waterfall tucked deep within the verdant forest valley",
      "Hill View Point and Sunset Point offering panoramic sweeps over Kandhamal valleys",
      "Lover's Point, Dashingbadi waterfall, Emu bird sanctuary, and nature eco-parks"
    ],
    travelTip: "Book a 2-day dedicated private cab from Puri. Our drivers are well-versed in the scenic ghat roads."
  },
  {
    id: "maa-tara-tarini-shrine",
    title: "Maa Tara Tarini Hilltop Temple (Rushikulya)",
    category: "Sacred Temples & Shrines",
    tag: "Ancient Adi Shakti Peetha",
    distance: "165 km from Puri (Kumari Hills, Ganjam)",
    idealDuration: "Full Day Pilgrimage",
    bestSeason: "Round the year (Chaitra Yatra in March/April)",
    image: `${base}images/banner-tara-tarini.jpg`,
    summary: "Revered as one of the four ancient Adi Shakti Peethas of Bharat, situated atop Kumari Hills on the scenic banks of Rushikulya River. Ascend via 999 holy steps or a modern ropeway cable car.",
    description: "Maa Tara Tarini Temple represents the breast (Stana Peetha) of Goddess Sati. The sanctum holds the stone murtis of twin goddesses Tara and Tarini, adorned with silver crowns. Perched on a 708-foot hill overlooking the winding Rushikulya River, it radiates immense spiritual power and serenity.",
    highlights: [
      "Sacred sanctum of Twin Goddesses Tara and Tarini, supreme wish-fulfilling deities of coastal Odisha",
      "Thrilling modern ropeway cable car ride carrying pilgrims smoothly to the summit",
      "Historic 999 sacred stone steps for pilgrims seeking devotional climb",
      "Panoramic 360-degree view of the meandering Rushikulya River and surrounding farmland",
      "Sacred tonsuring (Mundan) and puja rituals with prasad distribution"
    ],
    travelTip: "We provide full-day private cabs from Puri with doorstep pickup and ample hilltop waiting time."
  },
  {
    id: "maa-kalijai-island",
    title: "Maa Kalijai Temple & Chilika Island",
    category: "Sacred Temples & Shrines",
    tag: "Island Goddess Sanctuary",
    distance: "75 km from Puri to boat boarding point",
    idealDuration: "Full Day Tour",
    bestSeason: "October to April (Makar Sankranti Mela in January)",
    image: `${base}images/banner-kalijai.jpg`,
    summary: "Located on an enchanting island in the heart of blue Chilika Lake. Maa Kalijai is venerated as the supreme guardian goddess of all fishermen, sailors, pilgrims, and coastal travelers.",
    description: "The island temple of Maa Kalijai is steeped in deep coastal folklore. Legend tells of the devoted young maiden Jaai, caught in a sudden storm, who became the divine protector of Chilika Lake. A scenic boat cruise brings devotees across the shimmering lagoon to the sacred island.",
    highlights: [
      "Serene motorized boat ride across the wide blue waters of Chilika Lake to the island shrine",
      "Temple sanctum enveloped completely by the sparkling waters and gentle breeze of the lagoon",
      "Sacred trees adorned with thousands of vibrant red prayer ribbons tied by grateful devotees",
      "Flocks of seagulls, kingfishers, and winter migratory waterfowl flying alongside the boats",
      "Grand Makar Sankranti Mela in January attended by thousands of pilgrims from across Odisha"
    ],
    travelTip: "Combine this with morning Jagannath darshan and an unhurried boat cruise. We handle cab and boat boarding."
  },
  {
    id: "ghatagaon-maa-tarini",
    title: "Ghatagaon — Maa Tarini Temple",
    category: "Sacred Temples & Shrines",
    tag: "Wish-Fulfilling Forest Deity",
    distance: "Keonjhar District (200 km from Puri)",
    idealDuration: "Full Day Tour",
    bestSeason: "Throughout the year (Chaiti Parba in April)",
    image: `${base}images/ghatagaon-tarini.jpg`,
    summary: "Famous wish-fulfilling shrine in Keonjhar nestled amidst deep sal forests. Renowned across Eastern India for the unbroken custom of devotees offering fresh green coconuts.",
    description: "Maa Tarini at Ghatagaon is one of the most revered Shakti deities of Odisha. Millions of devotees believe that no journey through Odisha is complete without paying homage to Maa Tarini. Devotees from distant cities send coconuts by bus or private cab to be offered at her holy altar.",
    highlights: [
      "Historic coconut offering tradition — lakhs of green coconuts offered daily at Maa Tarini's altar",
      "Dense, sacred Sal forest canopy offering cool spiritual tranquility",
      "Grand Chaiti Parba festival celebrated with immense devotion and tribal folk music",
      "Delicious Mahaprasad preparation served to visiting pilgrims",
      "Scenic highway corridor journey through rural Odisha's green agrarian countryside"
    ],
    travelTip: "We provide dedicated sanitized cabs from Puri or Bhubaneswar with veteran chauffeurs for this sacred day trip."
  },
  {
    id: "pipili-applique-village",
    title: "Pipili Applique Village — Colorful Handicraft Hub",
    category: "Heritage & Handicrafts",
    tag: "World-Famous Chandua Craft Hub",
    distance: "20 km from Puri (on NH-316 Highway)",
    idealDuration: "1 to 2 Hours (En-route stop)",
    bestSeason: "Round the year",
    image: `${base}images/pipili-applique.jpg`,
    summary: "The world-famous artisan town that crafts the ceremonial cloth canopies, umbrellas, and coverings for the sacred chariots of Lord Jagannath during the Puri Ratha Yatra.",
    description: "Strategically located on the main highway linking Puri and Bhubaneswar, Pipili is renowned for Chandua (traditional applique embroidery). Master tailors stitch cut-out cloth designs of elephants, peacocks, flowers, and sacred deities onto contrasting fabrics with sparkling mirrors.",
    highlights: [
      "Vibrant street lined with colorful shops displaying handmade Chandua lanterns and wall hangings",
      "Centuries-old royal heritage: artisans craft the massive cloth canopies for the Ratha Yatra chariots",
      "Intricate handmade garden umbrellas, wall tapestries, bags, bedcovers, and lampshades",
      "Direct artisan interaction demonstrating needlework, patch embroidery, and mirror inlays",
      "Ideal shopping stop on the highway between Puri and Bhubaneswar with zero detours"
    ],
    travelTip: "Our drivers halt at authentic master artisan workshops so you can purchase genuine applique at factory rates."
  },
  {
    id: "ram-temple-fatehgarh",
    title: "Ram Temple, Fatehgarh, Nayagarh",
    category: "Sacred Temples & Shrines",
    tag: "Hilltop Ayodhya-Style Mandir",
    distance: "115 km from Puri / Bhubaneswar (Fatehgarh, Nayagarh)",
    idealDuration: "Full Day Tour",
    bestSeason: "October to March",
    image: `${base}images/ram-mandir-fatehgarh.jpg`,
    summary: "A magnificent newly consecrated 73-ft high stone temple perched 1,800 feet atop Fatehgarh hill, hailed as the 'Ayodhya of Odisha' with sweeping views of the Mahanadi basin.",
    description: "Built entirely of hand-carved Baulamala stone adhering to classical Kalinga architectural canons, the Sri Ram Mandir atop Fatehgarh Hill has become one of Odisha's newest pilgrimage sensations. A scenic 4.5 km serpentine ghat road climbs up through the hills to this awe-inspiring summit.",
    highlights: [
      "73-foot carved stone temple honoring Lord Ram, Mata Sita, Lakshman, and Lord Hanuman",
      "Hilltop elevation of 1,800 feet providing breathtaking panoramic sweeps over Mahanadi river valleys",
      "Thrilling serpentine ghat road drive with lush mountain vistas",
      "Exquisite stone carvings reflecting both Ayodhya reverence and classical Odia temple art",
      "Spiritual peace, fresh mountain air, and unhurried prayer ambiance"
    ],
    travelTip: "Best visited on a day excursion from Puri or Bhubaneswar. Private AC sedan or SUV recommended for hill climb."
  },
  {
    id: "satakosia-bhitarkanika-wildlife",
    title: "Satakosia & Bhitarkanika — Wildlife Tour Odisha",
    category: "Wildlife & Eco-Tourism",
    tag: "River Gorge & Mangrove Delta",
    distance: "Satakosia (180 km) / Bhitarkanika (160 km)",
    idealDuration: "2 Days / 1 Night Circuit",
    bestSeason: "November to March",
    image: `${base}images/wildlife-bhitarkanika.jpg`,
    summary: "Odisha's premier wildlife wonders: the 22-km dramatic Satakosia river gorge on the Mahanadi, and the UNESCO wetland mangrove maze of Bhitarkanika teeming with giant saltwater crocodiles.",
    description: "Experience Odisha's wild side. At Satakosia, the majestic Mahanadi cuts through a sheer 22-km gorge surrounded by tiger reserve hills and sandbar eco-tents. At Bhitarkanika, silent boat safaris glide through dense mangrove creeks to witness 20-foot saltwater crocodiles, kingfishers, and spotted deer.",
    highlights: [
      "Silent boat safari through tidal mangrove creeks spotting giant Estuarine crocodiles and monitor lizards",
      "Satakosia River Gorge — 22 km of dramatic turquoise water flanked by forested mountain walls",
      "Overnight luxury eco-tent camping on pristine river sandbars under starry skies",
      "Over 8 species of colorful kingfishers and thousands of migratory waterfowl",
      "Guided eco-walks led by local forest department trackers and conservationists"
    ],
    travelTip: "Custom 2-day private tour. We coordinate vehicle, highway routing, and forest boat safari points."
  },
  {
    id: "raghurajpur-craft-village",
    title: "Raghurajpur Heritage Artisan Village",
    category: "Heritage & Handicrafts",
    tag: "Living Heritage Village",
    distance: "14 km from Puri",
    idealDuration: "Half Day (3 - 4 Hours)",
    bestSeason: "Round the year",
    image: `${base}images/hero-raghurajpur.jpg`,
    summary: "A living open-air art gallery where every family is a master Chitrakar. Celebrated for centuries-old Pattachitra palm-leaf scrolls, Gotipua dance, and outdoor wall frescoes.",
    description: "Located close to our Biragobindapur hub, Raghurajpur is an artisan village where both sides of the street feature traditional houses adorned with colorful mythological murals. Master artisans create intricate Pattachitra scrolls using stone-ground natural pigments.",
    highlights: [
      "Master Chitrakars demonstrating palm-leaf etching with sharp iron styluses (Tala Pattachitra)",
      "Traditional Pattachitra scroll painting on cloth treated with tamarind seed paste and chalk",
      "Birthplace of Gotipua dance — the ancient devotional precursor to Odissi dance",
      "Handmade coconut shell crafts, wooden painted toys, and cowdung papier-mâché masks",
      "Warm hospitality in an idyllic rural setting shaded by coconut and betel nut groves"
    ],
    travelTip: "Just 20 minutes from Puri. Perfect morning or afternoon half-day trip with direct taxi pickup."
  }
];
