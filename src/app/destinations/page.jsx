"use client";
import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaCamera,
  FaLeaf,
  FaPaw,
  FaWater,
  FaTree,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Bebas_Neue, Lora, Montserrat } from "next/font/google";
import Image from "next/image";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// Destinations data with multiple images
const destinations = [
  {
    id: 1,
    name: "WILPATTU NATIONAL PARK",
    shortName: "WILPATTU",
    description:
      "As the largest national park in Sri Lanka, Wilpattu boasts a unique landscape of 'villus' (natural lakes) interspersed with dense scrub jungle. This diverse terrain supports a rich variety of wildlife, making it a prime destination for Photographer's around the year and changes character with the seasons.",
    highlights: [
      "Largest national park in Sri Lanka",
      "Unique 'villus' (natural lakes) landscape",
      "Prime leopard spotting opportunities",
      "Rich visual textures throughout seasons",
    ],
    images: [
      "/images/wilpattu.jpg",
      "/images/wilpattu2.jpg",
      "/images/wilpattu3.jpg"
    ],
    icon: <FaWater className="text-xl" />,
    stats: {
      area: "1,317 km²",
      established: "1938",
      animals: "Leopards, Elephants, Sloth Bears",
    },
  },
  {
    id: 2,
    name: "HORTON PLAINS NATIONAL PARK",
    shortName: "HORTON PLAINS",
    description:
      "Tucked away in the heart of Sri Lanka's central highlands, Horton Plains National Park is a nature lover's paradise and a dream destination for wildlife photography. A UNESCO World Heritage Site, this high-altitude plateau offers a unique mix of cloud forests and dramatic escarpments.",
    highlights: [
      "UNESCO World Heritage Site",
      "High-altitude plateau (2,100+ meters)",
      "Dramatic escarpments and cloud forests",
      "Home to endemic species and Sambar deer",
    ],
    images: [
      "/images/hp.jpg",
      "/images/hp1.jpg",
      "/images/heronew.jpg"
    ],
    icon: <FaTree className="text-xl" />,
    stats: {
      area: "31.6 km²",
      established: "1969",
      animals: "Sambar Deer, Leopards, Endemic Birds",
    },
  },
  {
    id: 3,
    name: "SINHARAJA RAIN FOREST RESERVE",
    shortName: "SINHARAJA",
    description:
      "Nestled in the heart of Sri Lanka, Sinharaja Forest Reserve is a UNESCO World Heritage Site and a paradise for wildlife photographers seeking a truly immersive experience. This tropical rainforest offers unparalleled biodiversity and rare endemic species.",
    highlights: [
      "UNESCO World Heritage Site",
      "One of last primary rainforests in Sri Lanka",
      "Over 160 bird species (20 endemic)",
      "Misty walking trails and dense canopy",
    ],
    images: [
      "/images/sinharaja.webp",
      "/images/sinharaja2.webp",
      "/images/sinharaja3.webp"
    ],
    icon: <FaLeaf className="text-xl" />,
    stats: {
      area: "88.6 km²",
      established: "1978",
      animals: "Endemic Birds, Purple-faced Langur, Reptiles",
    },
  },
  {
    id: 4,
    name: "KUMANA NATIONAL PARK",
    shortName: "KUMANA",
    description:
      "Kumana National Park, located on Sri Lanka's southeastern coast, is a hidden gem for wildlife photographers seeking raw, untouched natural beauty and a rich variety of wildlife. Ideal for photographers who value patience and undisturbed animal behavior.",
    highlights: [
      "Over 200 bird species",
      "Major migratory bird destination",
      "Tranquil, less-crowded environment",
      "Wetlands, lagoons, and mangrove swamps",
    ],
    images: [
      "/images/kumana.jpg",
      "/images/kumana2.jpg",
      "/images/kumana3.jpg"
    ],
    icon: <FaPaw className="text-xl" />,
    stats: {
      area: "391 km²",
      established: "1970",
      animals: "Birds, Elephants, Crocodiles",
    },
  },
  {
    id: 5,
    name: "YALA NATIONAL PARK",
    shortName: "YALA",
    description:
      "Yala National Park, located in southeastern Sri Lanka, is one of the country's premier wildlife destinations. Spanning over 900 square kilometers, it is renowned for its diverse ecosystems and highest densities of leopards in the world.",
    highlights: [
      "Highest density of leopards in the world",
      "Diverse ecosystems across 900 sq km",
      "Over 200 bird species",
      "Golden savannah and ancient rock outcrops",
    ],
    images: [
      "/images/yala.jpg",
      "/images/yala2.jpg",
      "/images/yala3.jpg"
    ],
    icon: <FaCamera className="text-xl" />,
    stats: {
      area: "979 km²",
      established: "1938",
      animals: "Leopards, Elephants, Crocodiles, Birds",
    },
  },
  {
    id: 6,
    name: "MINNERIYA NATIONAL PARK",
    shortName: "MINNERIYA",
    description:
      "Minneriya National Park is a magnet for wildlife photographers from around the world. The park's most famous attraction is 'The Gathering,' a natural phenomenon of hundreds of elephants migrating to the Minneriya Reservoir.",
    highlights: [
      "Famous for 'The Gathering' of elephants",
      "One of largest wild elephant gatherings",
      "Rich diversity including leopards and sloth bears",
      "Grasslands, wetlands, and tropical forests",
    ],
    images: [
      "/images/minneriya.jpg",
      "/images/minneriya2.jpg",
      "/images/minneriya3.jpg"
    ],
    icon: <FaPaw className="text-xl" />,
    stats: {
      area: "89 km²",
      established: "1997",
      animals: "Elephants, Leopards, Sloth Bears, Birds",
    },
  },
];

// Image Carousel Component
const ImageCarousel = ({ images, name }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative h-80 overflow-hidden group">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`${name} - Image ${index + 1}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      
      {/* Navigation buttons */}
      <button
        onClick={(e) => { e.stopPropagation(); prevImage(); }}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/40 p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <FaChevronLeft className="text-white text-sm" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); nextImage(); }}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/40 p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <FaChevronRight className="text-white text-sm" />
      </button>
      
      {/* Dots indicator */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1.5">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => { e.stopPropagation(); setCurrentIndex(index); }}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
      
      {/* Icon overlay */}
      <div className="absolute top-4 right-4 bg-black/40 p-2 rounded-full backdrop-blur-sm">
        <div className="text-earth-green">{destinations.find(d => d.name === name)?.icon}</div>
      </div>
    </div>
  );
};

const DestinationsPage = () => {
  return (
    <div
      className={`${bebas.variable} ${lora.variable} ${montserrat.variable} min-h-screen bg-black text-white`}
    >
      {/* Custom CSS for premium effects */}
      <style jsx>{`
        .text-earth-green {
          color: #4a7c59;
        }
        .text-earth-green-light {
          color: #8a9b68;
        }
        .text-earth-green-accent {
          color: #6b8e23;
        }
        .bg-earth-green {
          background-color: #4a7c59;
        }
        .bg-earth-green-light {
          background-color: #8a9b68;
        }
        .bg-earth-green-accent {
          background-color: #6b8e23;
        }
        .premium-card {
          position: relative;
          overflow: hidden;
        }
        .premium-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 0.5rem;
          padding: 1px;
          background: linear-gradient(45deg, #4a7c59, #8a9b68, #4a7c59);
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.3;
        }
        .wildlife-texture {
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%234a7c59' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
        }
        .destination-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .destination-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(74, 124, 89, 0.15);
        }
      `}</style>

      {/* Hero Section - Unchanged */}
      <div className="relative h-96 w-full overflow-hidden bg-black">
        <div className="absolute inset-0 wildlife-texture"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/elewater.jpg"
            alt="Sri Lanka National Parks"
            fill
            className="object-cover opacity-70 object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/90" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1
            className="font-bebas text-5xl md:text-6xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            SRI LANKA'S <span className="text-earth-green">WILDLIFE PARKS</span>
          </motion.h1>
          <motion.p
            className="font-lora text-lg max-w-2xl text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Discover the diverse ecosystems and incredible biodiversity of Sri
            Lanka's premier national parks
          </motion.p>
        </div>
      </div>

      {/* Premium Destinations Grid - Updated with new layout */}
      <div className="relative bg-black py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">  
          {/* Updated Destinations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="premium-card destination-card bg-[#0D0D0C] rounded-lg overflow-hidden group cursor-pointer"
              >
                {/* Image Carousel */}
                <ImageCarousel images={destination.images} name={destination.name} />

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bebas text-2xl text-white mb-2 group-hover:text-earth-green transition-colors">
                    {destination.name}
                  </h3>
                  

                  {/* Full Description */}
                  <p className="font-lora text-gray-300 text-sm mb-4 ">
                    {destination.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="text-center p-2 bg-gray-900/50 rounded">
                      <div className="text-earth-green font-bebas text-sm">
                        AREA
                      </div>
                      <div className="font-montserrat text-xs text-gray-300">
                        {destination.stats.area}
                      </div>
                    </div>
                    <div className="text-center p-2 bg-gray-900/50 rounded">
                      <div className="text-earth-green font-bebas text-sm">
                        YEAR
                      </div>
                      <div className="font-montserrat text-xs text-gray-300">
                        {destination.stats.established}
                      </div>
                    </div>
                    <div className="text-center p-2 bg-gray-900/50 rounded">
                      <div className="text-earth-green font-bebas text-sm">
                        WILDLIFE
                      </div>
                      <div className="font-montserrat text-xs text-gray-300">
                        30+ Species
                      </div>
                    </div>
                  </div>

                  {/* Highlights - now in a more compact format */}
                  <div className="mb-4">
                    <h4 className="font-montserrat text-xs uppercase tracking-wider text-earth-green mb-2">
                      KEY FEATURES
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {destination.highlights.slice(0, 4).map((highlight, i) => (
                        <div key={i} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-earth-green mt-1.5 mr-2 rounded-full flex-shrink-0"></div>
                          <span className="font-lora text-gray-300 text-xs">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Decorative Gradient Blobs */}
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-earth-green/10 blur-3xl"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl"></div>
      </div>
    </div>
  );
};

export default DestinationsPage;