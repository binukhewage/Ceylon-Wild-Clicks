"use client";
import React from "react";
import { FaMapMarkerAlt, FaCamera, FaUsers, FaLeaf, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Bebas_Neue, Lora, Montserrat } from "next/font/google";
import Image from "next/image";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-bebas" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

const tours = [
  {
    id: 1,
    title: "Northern Wild Trail - Tour 01",
    itinerary: [
      { day: "1st Day (01 night)", details: "Arrival to Sri Lanka - Negambo, 5* Hotel (BB)" },
      { day: "2nd - 5th Day (4 nights)", details: "Wilpattu National Park, Luxury Glamping (FB)" },
      { day: "6th - 7th Day (2 nights)", details: "Minneriya National Park, 5* Hotel (FB)" },
      { day: "8th - 10th Day (3 nights)", details: "Horton Plains National Park, Holiday Bungalow (FB)" },
      { day: "11th Day (01 night)", details: "Rest Day in Pelmadulla, 3* Hotel (FB)" },
      { day: "12th - 13th Day (02 nights)", details: "Sinharaja Rain Forest, 3* Hotel (FB)" },
      { day: "14th Day - Dinner", details: "Departure from Sri Lanka, 4* Hotel" },
    ],
    image: "/images/northern-tour.jpg",
    highlights: ["Wilpattu Leopards", "Minneriya Elephants", "Horton Plains Biodiversity", "Sinharaja Endemics"],
  },
  {
    id: 2,
    title: "Southern Wild Trail - Tour 02",
    itinerary: [
      { day: "1st Day (01 night)", details: "Arrival to Sri Lanka - Negambo, 5* Hotel (BB)" },
      { day: "2nd - 4th Day (3 nights)", details: "Horton Plains National Park, Holiday Bungalow (FB)" },
      { day: "5th Day (1 night)", details: "Arugambay, 5* Hotel (HB)" },
      { day: "6th - 8th Day (3 nights)", details: "Kumana National Park, Luxury Tented Camp (FB)" },
      { day: "9th - 11th Day (3 nights)", details: "Yala National Park, Luxury Chalets (FB)" },
      { day: "12th - 13th Day (02 nights)", details: "Sinharaja Rain Forest, 3* Hotel (FB)" },
      { day: "14th Day - Dinner", details: "Departure from Sri Lanka, 4* Hotel" },
    ],
    image: "/images/southern-tour.jpg",
    highlights: ["Yala Leopards", "Kumana Birdlife", "Horton Plains Landscape", "Sinharaja Rainforest"],
  },
];

const TourPage = () => {
  return (
    <div className={`${bebas.variable} ${lora.variable} ${montserrat.variable} min-h-screen bg-black text-white`}>
      {/* Custom CSS for earthy colors */}
      <style jsx>{`
        .text-earth-green { color: #4a7c59; }
        .text-earth-green-light { color: #8a9b68; }
        .text-earth-green-accent { color: #6b8e23; }
        .bg-earth-green { background-color: #4a7c59; }
        .bg-earth-green-light { background-color: #8a9b68; }
        .bg-earth-green-accent { background-color: #6b8e23; }
        .hover\\:bg-earth-green:hover { background-color: #4a7c59; }
        .hover\\:text-earth-green:hover { color: #4a7c59; }
        .border-earth-green { border-color: #4a7c59; }
        .wildlife-texture {
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%234a7c59' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
        }
      `}</style>

      {/* Hero Section */}
      <div className="relative h-96 w-full overflow-hidden bg-black">
        <div className="absolute inset-0 wildlife-texture"></div>
        <Image
          src="/images/heronew.jpg"
          alt="Wildlife photography tours"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/90" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1
            className="font-bebas text-5xl md:text-6xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            PHOTO - SAFARI <span className="text-earth-green">TOURS</span>
          </motion.h1>
          <motion.p
            className="font-lora text-lg max-w-2xl text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Immersive photography experiences in Sri Lanka's most spectacular national parks
          </motion.p>
        </div>
      </div>

      {/* Tours Section */}
      <div className="relative bg-black pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Tours Grid */}
          <div className="space-y-20">
            {tours.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-[#0D0D0C] rounded-sm overflow-hidden border border-gray-800"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Tour Image */}
                  <div className="relative h-80 lg:h-full">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="font-bebas text-white text-2xl bg-earth-green/80 px-4 py-2 rounded-sm">
                        Tour {tour.id.toString().padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Tour Details */}
                  <div className="p-8">
                    <h3 className="font-bebas text-3xl text-white mb-4">{tour.title}</h3>

                    {/* Highlights */}
                    <div className="mb-6">
                      <div className="flex items-center mb-3">
                        <FaLeaf className="text-earth-green mr-2" />
                        <span className="font-montserrat text-sm uppercase tracking-wider text-earth-green">
                          Key Highlights
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {tour.highlights.map((highlight, i) => (
                          <span
                            key={i}
                            className="font-lora text-xs text-gray-300 bg-gray-800/50 px-3 py-1 rounded-full border border-earth-green/20"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Itinerary */}
                    <div className="mb-6">
                      <div className="flex items-center mb-3">
                        <FaMapMarkerAlt className="text-earth-green mr-2" />
                        <span className="font-montserrat text-sm uppercase tracking-wider text-earth-green">
                          14-Day Itinerary
                        </span>
                      </div>
                      <div className="space-y-3">
                        {tour.itinerary.map((item, i) => (
                          <div key={i} className="flex items-start">
                            <div className="bg-earth-green/10 p-2 rounded-sm mr-3 mt-0.5">
                              <span className="font-bebas text-earth-green text-sm">{i + 1}</span>
                            </div>
                            <div>
                              <p className="font-bebas text-white text-sm">{item.day}</p>
                              <p className="font-lora text-gray-400 text-xs">{item.details}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className="font-montserrat text-sm text-white bg-earth-green hover:bg-earth-green-accent px-6 py-3 rounded-sm transition-colors uppercase tracking-wider w-full flex items-center justify-center gap-2">
                      <FaCamera className="text-xs" />
                      Book This Tour
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPage;
