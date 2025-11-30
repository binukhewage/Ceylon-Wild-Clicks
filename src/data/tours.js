// src/data/tours.js

export const tours = [
  // ======================================================
  // 1. Kurulu Trail – Avian Jewels of Ceylon
  // ======================================================
  {
    id: 1,
    type: "premium",
    title: "Kurulu Trail – Avian Jewels of Ceylon",
    heroImage: "/images/hero12.jpg",
    duration: "15 Days / 14 Nights",
    price: "$5,499",
    intro:
      "A deep dive into Sri Lanka’s richest biodiversity hotspots including Sinharaja, Kumana, Gal Oya, and Horton Plains. A perfect expedition for endemic bird watchers and nature photographers.",
    images: [
      "/images/kumana.jpg",
      "/images/kumanalep.jpg",
      "/images/kumana.jpg",
    ],
    galleryImages: [
      "/images/kumana.jpg",
      "/images/kumanalep.jpg",
      "/images/kumana.jpg",
      "/images/kumana.jpg",
      "/images/kumanalep.jpg",
      "/images/kumana.jpg",
    ],
    highlights: [
      "Sinharaja Endemic Birds",
      "Kumana Wetlands",
      "Migratory Birds",
      "Gal Oya Boat Safari",
      "Horton Plains Montane Species",
    ],

    parts: [
      {
        name: "PART 1: The Western Gate & Rainforest Immersion (Day 1 - 4)",
        days: [
          {
            day: "Day 1",
            destination: "Arrival & Negombo",
            accommodation: "5* Hotel (BB)",
            activities:
              "Arrive at CMB. Meet your private guide and transfer to your hotel. Evening Tour Briefing: Enjoy a welcome dinner and detailed briefing on the birding protocols for the journey ahead.",
          },
          {
            day: "Day 2",
            destination: "Transfer to Sinharaja",
            accommodation: "Blue Magpie Hotel (FB)",
            activities:
              "Morning transfer (approx. 4-5 hours) to the Sinharaja Rainforest buffer zone. Afternoon Trek: Commence a half-day trekking session, exploring the fringe habitats and local village for low-country endemics.",
          },
          {
            day: "Day 3",
            destination: "Sinharaja Core Forest Tracking",
            accommodation: "Blue Magpie Hotel (FB)",
            activities:
              "Full-Day Trekking: Spend the day inside the UNESCO World Heritage Sinharaja Rainforest,focusing on the famed mixed-species feeding flocks that hold most of the island's 34 endemics.",
          },
          {
            day: "Day 4",
            destination: "Sinharaja Deep Interior Trails",
            accommodation: "Blue Magpie Hotel (FB)",
            activities:
              "Full-Day Trekking: Second full day dedicated to tracking key targets such as the Sri Lanka Blue Magpie, Red-faced Malkoha, and the Ashy-headed Laughingthrush within the forest interior.",
          },
        ],
      },

      {
        name: "PART 2: Wetlands, Coast & Dry Zone (Day 5–10)",
        days: [
          {
            day: "Day 5",
            destination: "Transfer to Kumana",
            accommodation: "Bay Vista Arugambay / Jungle Queen (FB)",
            activities:
              "Long Scenic Transfer: Depart Sinharaja for the East Coast (approx. 7 hours). Settle into your accommodation near the beach. Evening Relaxation: Enjoy a quiet evening on the beach or resting after the journey.",
          },
          {
            day: "Day 6",
            destination: "Kumana National Park",
            accommodation: "Bay Vista Arugambay / Jungle Queen (FB)",
            activities:
              "Full-Day Safari: Explore Kumana National Park, famous for the Kumana Villu (natural waterholes). Focus on migratory waterfowl, storks,spoonbills, and the coastal bird species.",
          },
          {
            day: "Day 7",
            destination: "Kumana Deep Wilderness",
            accommodation: "Bay Vista Arugambay / Jungle Queen (FB)",
            activities:
              "Full-Day Safari: Second day in Kumana, pushing deeper into the untouched coastal wilderness. Excellent opportunity for general wildlife viewing (leopards, elephants) alongside specialized bird photography.",
          },
          {
            day: "Day 8",
            destination: "Transfer to Gal Oya",
            accommodation: "Gal Oya Lodge (FB)",
            activities:
              "Morning transfer to the remote Gal Oya region (approx. 3 hours). Evening boat safari on the Gal Oya reservoir, focusing on observing swimming elephants and raptors soaring over the water.",
          },
          {
            day: "Day 9",
            destination: "Nilgala Forest Reserve",
            accommodation: "Gal Oya Lodge / Local Hotel (FB)",
            activities:
              "Full-day exploration: Trekking and jeep safari in Nilgala Forest Reserve, renowned for its rich dry zone birdlife and unique forest structure away from common tourist trails.",
          },
          {
            day: "Day 10",
            destination: "Nilgala Continued & Transfer Prep",
            accommodation: "Gal Oya Lodge / Local Hotel (FB)",
            activities:
              "Full-day exploration: A second dedicated day in the Nilgala area to maximize sightings of dry-zone specialties before preparing for the transfer to the central highlands.",
          },
        ],
      },

      {
        name: "PART 3: High Altitude & Departure (Day 11–15)",
        days: [
          {
            day: "Day 11",
            destination: "Transfer to Nuwara Eliya",
            accommodation: "Whistling Thrush / Local Hotel (FB)",
            activities:
              "Scenic mountain transfer: Travel to the hill country town of Nuwara Eliya (approx. 3.5 hours). Afternoon relaxation: Enjoy a leisurely city tour or unwind at the hotel, acclimatizing to the higher altitude.",
          },
          {
            day: "Day 12",
            destination: "Horton Plains: Montane Endemics",
            accommodation: "Whistling Thrush / Local Hotel (FB)",
            activities:
              "Full-day trekking: Explore Horton Plains National Park (UNESCO World Heritage Site), focusing on high-altitude endemics including the Sri Lanka Whistling Thrush and the elusive Sri Lanka Bush Warbler.",
          },
          {
            day: "Day 13",
            destination: "Horton Plains: Plateau Exploration",
            accommodation: "Whistling Thrush / Local Hotel (FB)",
            activities:
              "Full-day trekking: Second full day exploring cloud forest and montane grassland habitats, maximizing opportunities to spot the difficult plateau species.",
          },
          {
            day: "Day 14",
            destination: "Colombo Transfer & City Tour",
            accommodation: "3* Hotel Colombo (FB)",
            activities:
              "Transfer to Colombo: Begin the scenic 5-hour drive back to the capital region (CMB). Evening city tour: Explore Colombo's rich history, culture, and architecture.",
          },
          {
            day: "Day 15",
            destination: "Departure",
            accommodation: "-",
            activities:
              "Following breakfast, transfer to Bandaranaike International Airport (CMB) for your international departure, concluding the Kurulu Trail expedition.",
          },
        ],
      },
    ],

    inclusions: [
      "Accommodation: 14 nights",
      "Meals: BB + Full Board during safaris",
      "Guided trekking in Sinharaja and Horton Plains",
      "Full-day safari in Kumana",
      "Exclusive Gal Oya boat safari",
      "All transportation & transfers",
    ],
  },

  // ======================================================
  // 2. Pulli Trail – The Leopard Odyssey
  // ======================================================
  {
    id: 2,
    type: "premium",
    title: "Pulli Trail – The Leopard Odyssey",
    heroImage: "/images/we.jpg",
    duration: "15 Days / 14 Nights",
    price: "$5,999",
    intro:
      "Track Sri Lanka’s apex predator across its four major habitats: Wilpattu, Horton Plains, Kumana, and Yala. Includes 10 safari opportunities with expert leopard trackers.",
    images: [
      "/images/willep.jpg",
      "/images/kumana1.jpg",
      "/images/minneriya1.jpg",
    ],
    galleryImages: [
      "/images/kumana.jpg",
      "/images/kumanalep.jpg",
      "/images/kumana.jpg",
      "/images/kumana.jpg",
      "/images/kumanalep.jpg",
      "/images/kumana.jpg",
    ],
    highlights: [
      "10 Leopard Safaris",
      "Wilpattu Dry Forest Ecosystems",
      "Kumana Coastal Wetlands",
      "Yala Leopard Territories",
      "Horton Plains Cloud Forests",
    ],

    parts: [
      {
        name: "PART 1: The Northern Wilds – Wilpattu & Nuwara Eliya (Day 1–7)",
        days: [
          {
            day: "Day 1",
            destination: "Arrival & Negombo",
            accommodation: "3–5 Star Hotel (BB)",
            activities:
              "Arrival, beach leisure, welcome dinner, and leopard tracking briefing.",
          },
          {
            day: "Day 2",
            destination: "Transfer to Wilpattu",
            accommodation: "Thimbiriwewa Resort (FB)",
            activities:
              "Afternoon safari exploring Villus for leopard, sloth bear, and spotted deer.",
          },
          {
            day: "Day 3–5",
            destination: "Wilpattu Full Immersion",
            accommodation: "Thimbiriwewa Resort (FB)",
            activities:
              "Three full-day safaris targeting core leopard territories.",
          },
          {
            day: "Day 6",
            destination: "Transfer to Nuwara Eliya",
            accommodation: "Nuwara Eliya Hotel (FB)",
            activities: "Scenic highland transfer and city exploration.",
          },
          {
            day: "Day 7",
            destination: "Horton Plains National Park",
            accommodation: "Nuwara Eliya Hotel (FB)",
            activities:
              "Safari targeting extremely rare mountain leopards and montane species.",
          },
        ],
      },

      {
        name: "PART 2: The Remote Coast – Kumana National Park (Day 8–11)",
        days: [
          {
            day: "Day 8",
            destination: "Transfer to Kumana",
            accommodation: "Bay Vista Arugambay / Jungle Queen (FB)",
            activities:
              "Long scenic drive, beach leisure before deep wilderness exploration.",
          },
          {
            day: "Day 9–11",
            destination: "Kumana Deep Wilderness",
            accommodation: "Bay Vista Arugambay / Jungle Queen (FB)",
            activities:
              "Three full-day safaris focusing on coastal leopards & endemic birdlife.",
          },
        ],
      },

      {
        name: "PART 3: Yala & Departure (Day 12–15)",
        days: [
          {
            day: "Day 12",
            destination: "Transfer to Yala",
            accommodation: "Yala Chalets by Lalan Leisure (FB)",
            activities:
              "Evening half-day safari targeting quiet leopard blocks.",
          },
          {
            day: "Day 13–14",
            destination: "Yala Full-Day Safaris",
            accommodation: "Yala Chalets by Lalan Leisure (FB)",
            activities:
              "Two full-day safaris covering Yala’s premium leopard territories.",
          },
          {
            day: "Day 15",
            destination: "Transfer to Colombo & Departure",
            accommodation: "-",
            activities:
              "Scenic drive to Colombo, short city tour, departure from CMB.",
          },
        ],
      },
    ],

    inclusions: [
      "Accommodation: 14 nights (3–5 star & safari chalets)",
      "Meals: BB + picnic meals during safaris",
      "10 total safaris (7 full-day + 3 half-day)",
      "All park entrance fees and jeep fees",
      "Expert leopard trackers & licensed guides",
      "All transportation & transfers",
    ],

    exclusions: ["Extra beverages", "Tips", "Personal items not listed"],
  },

  // ======================================================
  // 3. Urumaya Trail – Heritage & Habitat
  // ======================================================
  {
    id: 3,
    type: "premium",
    title: "Urumaya Trail – Heritage & Habitat",
    heroImage: "/images/we.jpg",
    duration: "14 Days / 13 Nights",
    price: "$4,999",
    intro:
      "A perfect blend of culture, history, wildlife, tea country, and coastal relaxation. Visit ancient cities, go on safaris, explore rainforests, and unwind on golden beaches.",
    images: ["/images/anu.jpeg", "/images/minneriya.jpg", "/images/yala1.jpg"],
    highlights: [
      "Anuradhapura Ancient City",
      "Sigiriya & Pidurangala",
      "Kandy Cultural Heritage",
      "Yala Safari",
      "Sinharaja Rainforest",
      "Hikkaduwa Beach",
    ],

    parts: [
      {
        name: "PART 1: Cultural Triangle (Day 1–4)",
        days: [
          {
            day: "Day 1",
            destination: "Arrival, Negombo & Wilpattu Transfer",
            accommodation: "5* Hotel (BB)",
            activities:
              "Negombo city tour, transfer to Wilpattu, evening briefing.",
          },
          {
            day: "Day 2",
            destination: "Wilpattu Safari & Anuradhapura",
            accommodation: "Blue Magpie Hotel (FB)",
            activities:
              "Morning Wilpattu safari, afternoon visit to ancient Anuradhapura, transfer to Habarana.",
          },
          {
            day: "Day 3",
            destination: "Habarana Village Experience & Safari",
            accommodation: "Bay Vista / Jungle Queen (FB)",
            activities:
              "Village tour, cooking demonstration, Minneriya/Kaudulla safari.",
          },
          {
            day: "Day 4",
            destination: "Sigiriya & Transfer to Kandy",
            accommodation: "Bay Vista / Jungle Queen (FB)",
            activities:
              "Sunrise Pidurangala climb, Sigiriya fortress, transfer to Kandy.",
          },
        ],
      },

      {
        name: "PART 2: The Hill Country (Day 5–8)",
        days: [
          {
            day: "Day 5",
            destination: "Dambulla & Kandy Culture",
            accommodation: "Hotel (FB)",
            activities:
              "Visit Dambulla Cave Temple, Spice Garden, cultural show, Temple of the Tooth.",
          },
          {
            day: "Day 6",
            destination: "Explore Kandy",
            accommodation: "Hotel (FB)",
            activities: "Botanical gardens, city tour, lake walk.",
          },
          {
            day: "Day 7",
            destination: "Transfer to Nuwara Eliya",
            accommodation: "Hotel (FB)",
            activities: "Scenic drive to the tea country, leisure evening.",
          },
          {
            day: "Day 8",
            destination: "Tea Plantation & Transfer to Yala",
            accommodation: "Whistling Thrush (FB)",
            activities: "Tea factory visit, transfer to Yala.",
          },
        ],
      },

      {
        name: "PART 3: Safari, Rainforest & Southern Coast (Day 9–14)",
        days: [
          {
            day: "Day 9",
            destination: "Yala National Park",
            accommodation: "Hotel (FB)",
            activities:
              "Full-day Yala safari focusing on leopard, sloth bear, and elephants.",
          },
          {
            day: "Day 10",
            destination: "Yala to Sinharaja",
            accommodation: "Hotel (FB)",
            activities:
              "Morning safari/visit, transfer to Ratnapura Gem Museum, continue to Sinharaja.",
          },
          {
            day: "Day 11",
            destination: "Sinharaja & Transfer to Galle",
            accommodation: "Sinharaja Forest Hotel (FB)",
            activities:
              "Half-day rainforest trek, afternoon transfer to Galle.",
          },
          {
            day: "Day 12",
            destination: "Galle Fort & Hikkaduwa",
            accommodation: "Hikkaduwa Hotel (BB)",
            activities: "Explore Galle Fort, relax at Hikkaduwa beach.",
          },
          {
            day: "Day 13",
            destination: "Hikkaduwa Coastal Fun",
            accommodation: "Hikkaduwa Hotel (BB)",
            activities:
              "Coral garden snorkeling, turtle conservation visit, beach day.",
          },
          {
            day: "Day 14",
            destination: "Colombo & Departure",
            accommodation: "-",
            activities: "Colombo city tour, lunch, transfer to CMB Airport.",
          },
        ],
      },
    ],

    inclusions: [
      "Accommodation for 13 nights",
      "Daily breakfast & full board during safaris",
      "Wilpattu & Yala Safaris",
      "Sigiriya & Pidurangala Climb",
      "Rainforest Trekking",
      "City Tours (Kandy, Colombo, Galle)",
      "All transportation & transfers",
    ],
  },

  // ======================================================
  // 4. Northern Wild Trail (Existing)
  // ======================================================
  {
    id: 4,
    type: "luxury",
    title: "Northern Wild Trail",
    heroImage: "/images/we.jpg",
    duration: "14 Days / 13 Nights",
    price: "$5,999",
    intro: "Luxury wildlife expedition across Sri Lanka's top national parks.",
    images: [
      "/images/willep.jpg",
      "/images/minneriya1.jpg",
      "/images/horton1.jpg",
    ],
    highlights: [
      "Wilpattu Leopards",
      "Minneriya Elephants",
      "Horton Plains Biodiversity",
      "Sinharaja Endemics",
    ],
    parts: [
      {
        name: "Itinerary",
        days: [
          {
            day: "Day 1",
            destination: "Negombo",
            activities: "Arrival, hotel stay.",
          },
          {
            day: "Day 2-5",
            destination: "Wilpattu",
            activities: "Luxury glamping & safaris.",
          },
          {
            day: "Day 6-7",
            destination: "Minneriya",
            activities: "Elephant gathering.",
          },
          {
            day: "Day 8-10",
            destination: "Horton Plains",
            activities: "Trekking & highland wildlife.",
          },
          { day: "Day 11", destination: "Pelmadulla", activities: "Rest day." },
          {
            day: "Day 12-13",
            destination: "Sinharaja",
            activities: "Rainforest exploration.",
          },
          {
            day: "Day 14",
            destination: "Departure",
            activities: "Final dinner & airport transfer.",
          },
        ],
      },
    ],
    inclusions: [
      "Professional Guide",
      "Luxury Accommodation",
      "All Meals",
      "Park Fees",
      "Transportation",
    ],
  },

  // ======================================================
  // 5. Southern Wild Trail (Existing)
  // ======================================================
  {
    id: 5,
    type: "luxury",
    title: "Southern Wild Trail",
    heroImage: "/images/we.jpg",
    duration: "14 Days / 13 Nights",
    price: "$5,999",
    intro: "Experience Sri Lanka's southern wilderness with luxury comfort.",
    images: ["/images/kumana.jpg", "/images/kumana1.jpg", "/images/yala1.jpg"],
    highlights: [
      "Yala Leopards",
      "Kumana Birdlife",
      "Horton Plains Landscape",
      "Sinharaja Rainforest",
    ],
    parts: [
      {
        name: "Itinerary",
        days: [
          {
            day: "Day 1",
            destination: "Negombo",
            activities: "Arrival, hotel stay.",
          },
          {
            day: "Day 2-4",
            destination: "Horton Plains",
            activities: "Highland trekking.",
          },
          {
            day: "Day 5",
            destination: "Arugam Bay",
            activities: "Beach relaxation.",
          },
          {
            day: "Day 6-8",
            destination: "Kumana",
            activities: "Deep wilderness safaris.",
          },
          {
            day: "Day 9-11",
            destination: "Yala",
            activities: "Leopard tracking.",
          },
          {
            day: "Day 12-13",
            destination: "Sinharaja",
            activities: "Rainforest walks.",
          },
          {
            day: "Day 14",
            destination: "Departure",
            activities: "Farewell dinner & airport transfer.",
          },
        ],
      },
    ],
    inclusions: [
      "Professional Guide",
      "Luxury Accommodation",
      "All Meals",
      "Park Fees",
      "Transportation",
    ],
  },
];
