"use client";
import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaUsers,
  FaChevronRight,
  FaClock,
  FaHotel,
  FaSafari,
  FaStar,
  FaSlidersH,
  FaCheck,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Bebas_Neue, Lora, Montserrat, Kolker_Brush } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { tours } from "../../data/tours.js";

// --- Font Setup ---
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});
const kolker = Kolker_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-kolker",
});
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// --- 1. Badge Component ---
const TourTypeBadge = ({ type }) => {
  const styles =
    type === "luxury"
      ? "border-amber-500/50 text-amber-100 bg-amber-900/30"
      : "border-[#4a7c59]/50 text-white bg-[#4a7c59]/20";

  return (
    <div
      className={`absolute top-4 left-4 z-20 px-4 py-1.5 rounded-full border backdrop-blur-md flex items-center gap-2 ${styles}`}
    >
      <FaStar className="text-[10px]" />
      <span className="font-montserrat text-[10px] uppercase tracking-[0.2em]">
        {type}
      </span>
    </div>
  );
};

// --- 2. UPDATED: Tour Card Component ---
const TourCard = ({
  tour,
  expandedTour,
  toggleExpand,
  activeTab,
  setActiveTab,
}) => {
  const flatItinerary = tour.parts?.flatMap((part) => part.days) || [];

  // Helper to split title safely
  const [mainTitle, subTitle] = tour.title.includes("–") 
    ? tour.title.split("–") 
    : [tour.title, null];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="group relative bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden hover:border-[#4a7c59]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#4a7c59]/5"
    >
      {/* 1. Image Section with Overlapping Title */}
      <div className="relative h-72 w-full overflow-hidden">
        <Image
          src={tour.images[0]}
          alt={tour.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Gradient Overlay - Darker at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-500" />
        

        {/* --- UPDATED: SPLIT TITLE DESIGN --- */}
        <div className="absolute bottom-0 left-0 w-full p-6 z-10">
          <h3 className="text-white drop-shadow-lg">
            {/* Part 1: Main Title (Bebas, Large) */}
            <span className="block font-bold text-4xl leading-[0.85] group-hover:text-[#4a7c59] transition-colors duration-300">
              {mainTitle}
            </span>
            
            {/* Part 2: Subtitle (Montserrat, Green, Tracking) */}
            {subTitle && (
              <span className="block font-montserrat text-[11px] uppercase tracking-[0.25em] text-[#4a7c59] mt-2 group-hover:text-white transition-colors duration-300 font-bold">
                {subTitle}
              </span>
            )}
          </h3>
        </div>
      </div>

      {/* 2. Content Section */}
      <div className="px-6 pb-6 pt-2">
        
        {/* Meta Data Row */}
        <div className="flex items-center gap-4 text-gray-400 mb-5">
          <div className="flex items-center gap-2">
            <FaClock className="text-[#4a7c59] text-xs" />
            <span className="font-montserrat text-[10px] uppercase tracking-wider">
              {tour.duration}
            </span>
          </div>
          <div className="w-[1px] h-3 bg-white/10"></div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-[#4a7c59] text-xs" />
            <span className="font-montserrat text-[10px] uppercase tracking-wider">
              Sri Lanka
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-white/5 mb-5"></div>

        {/* Highlights (Clean List) */}
        <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-6">
          {tour.highlights.slice(0, 4).map((highlight, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1 h-1 bg-[#4a7c59] rounded-full flex-shrink-0" />
              <span className="font-lora text-gray-400 text-xs truncate">
                {highlight}
              </span>
            </div>
          ))}
        </div>

        {/* Expandable Details (Minimalist Button) */}
        <div className="mb-6">
          <button
            onClick={() => toggleExpand(tour.id)}
            className="flex items-center justify-between w-full group/btn py-2 border-y border-white/5 hover:border-white/10 transition-colors"
          >
            <span className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-gray-400 group-hover/btn:text-white transition-colors">
              View Summary
            </span>
            <FaChevronRight className={`text-xs text-[#4a7c59] transition-transform duration-300 ${expandedTour === tour.id ? 'rotate-90' : ''}`} />
          </button>

          <AnimatePresence>
            {expandedTour === tour.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-4 pb-2 bg-white/[0.02] rounded-b-lg -mx-6 px-6 mb-[-1rem]">
                  {/* Minimal Tabs */}
                  <div className="ml-4 flex gap-4 border-b border-white/5 mb-4">
                    {['itinerary', 'included'].map((tab) => (
                      <button
                        key={tab}
                        className={`pb-2 font-montserrat text-[9px] uppercase tracking-widest transition-all ${
                          activeTab === tab ? "text-[#4a7c59] border-b border-[#4a7c59]" : "text-gray-500 hover:text-white"
                        }`}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <div className="ml-2 max-h-48 overflow-y-auto custom-scrollbar pr-2">
                    {activeTab === "itinerary" ? (
                      <div className="space-y-3">
                        {flatItinerary.map((item, i) => (
                          <div key={i} className="flex gap-3">
                            <span className="ml-2 font-montserrat text-[#4a7c59] text-[10px] font-bold w-8 shrink-0 pt-0.5">
                              {item.day.replace("Day ", "D")}
                            </span>
                            <div>
                              <p className="font-montserrat text-white text-[10px] uppercase mb-0.5">
                                {item.destination}
                              </p>
                              <p className="font-lora text-gray-500 text-[10px] leading-relaxed">
                                {item.activities || item.details}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-1.5">
                        {tour.inclusions.map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <FaCheck className="text-[#4a7c59] text-[8px]" />
                            <span className="font-lora text-gray-400 text-[10px]">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Action Button (Outline Style - Lighter Feel) */}
        <div className="mt-auto">
          <Link
            href={`/tours/${tour.id}`}
            className="block w-full py-3.5 rounded-sm border border-white/10 hover:border-[#4a7c59] bg-[#4a7c59] hover:bg-[#4a7c59]/5 text-center transition-all duration-300 group/link"
          >
            <span className="font-montserrat text-[10px] uppercase tracking-[0.25em] text-white group-hover/link:text-[#4a7c59]">
              Full Details
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main TourPage Component ---
const TourPage = () => {
  const [expandedTour, setExpandedTour] = useState(null);
  const [activeTab, setActiveTab] = useState("itinerary");
  const [activeFilter, setActiveFilter] = useState("all");

  const toggleExpand = (tourId) => {
    if (expandedTour !== tourId) {
      setActiveTab("itinerary");
    }
    setExpandedTour((prevId) => (prevId === tourId ? null : tourId));
  };

  // Filter tours based on active filter
  const filteredTours = tours.filter((tour) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "premium") return tour.type === "premium";
    if (activeFilter === "luxury") return tour.type === "luxury";
    if (activeFilter === "wildlife") return tour.category === "wildlife";
    if (activeFilter === "cultural") return tour.category === "cultural";
    return true;
  });

  // Group tours by type for better organization
  const premiumTours = filteredTours.filter((tour) => tour.type === "premium");
  const luxuryTours = filteredTours.filter((tour) => tour.type === "luxury");
  const otherTours = filteredTours.filter(
    (tour) => !tour.type || tour.type === "standard"
  );

  return (
    <div
      className={`${bebas.variable} ${lora.variable} ${montserrat.variable} ${kolker.variable} min-h-screen bg-black text-white`}
    >
      {/* Custom CSS */}
      <style jsx>{`
        .text-earth-green { color: #4a7c59; }
        .text-earth-green-light { color: #8a9b68; }
        .bg-earth-green { background-color: #4a7c59; }
        .wildlife-texture {
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%234a7c59' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
        }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #4a7c59; border-radius: 4px; }
      `}</style>

      {/* Hero Section */}
      <div className="relative h-[50vh] w-full overflow-hidden bg-black">
        <div className="absolute inset-0 wildlife-texture"></div>
        <Image
          src="/images/heronew.jpg"
          alt="Wildlife photography tours"
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/90" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1
            style={{ fontFamily: "var(--font-bebas)" }}
            className="font-bebas text-4xl md:text-7xl mb-4 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className=" text-white">TRAVEL</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a7c59] to-[#8fbc9d]"> ITENARIES</span>
          </motion.h1>
          <motion.p
            className="font text-lg max-w-3xl text-gray-200 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Immerse yourself in unparalleled wildlife encounters and cultural
            journeys through Sri Lanka's most breathtaking landscapes
          </motion.p>
        </div>
      </div>

      {/* Main Tours Section */}
      <div className="relative bg-black pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Ambient Glows for atmosphere */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#4a7c59] rounded-full mix-blend-screen filter blur-[200px] opacity-10 pointer-events-none -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Premium Tours Section */}
          {premiumTours.length > 0 && (
            <section className="mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {premiumTours.map((tour) => (
                  <TourCard
                    key={tour.id}
                    tour={tour}
                    expandedTour={expandedTour}
                    toggleExpand={toggleExpand}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Luxury Tours Section */}
          {luxuryTours.length > 0 && (
            <section>
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <p className="pb-3 text-earth-green font-montserrat text-xs uppercase tracking-[0.3em]">
                  CURATED JOURNEYS
                </p>
                <h3 className="font-bebas text-4xl md:text-5xl text-white mb-4">
                  LUXURY <span className="text-earth-green">TOURS</span>
                </h3>
                <p className="font-lora text-gray-400 max-w-2xl mx-auto">
                  Unmatched comfort, exclusive camps, and personalized
                  itineraries for a truly bespoke safari experience.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {luxuryTours.map((tour) => (
                  <TourCard
                    key={tour.id}
                    tour={tour}
                    expandedTour={expandedTour}
                    toggleExpand={toggleExpand}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Other Tours Section */}
          {otherTours.length > 0 && (
            <section>
              <motion.div
                className="text-center mb-12 mt-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h3 className="font-bebas text-3xl md:text-4xl text-white mb-4">
                  SPECIALTY <span className="text-earth-green">TOURS</span>
                </h3>
                <p className="font-lora text-gray-400 max-w-2xl mx-auto">
                  Unique experiences tailored to specific interests and travel
                  styles
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherTours.map((tour) => (
                  <TourCard
                    key={tour.id}
                    tour={tour}
                    expandedTour={expandedTour}
                    toggleExpand={toggleExpand}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Decorative Gradient Blobs */}
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-earth-green/10 blur-3xl"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl"></div>
      </div>

      {/* Features Section */}
      <div className="relative bg-black pt-10 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="pb-3 text-earth-green font-montserrat text-xs uppercase tracking-[0.3em]">
              WHY CHOOSE US
            </p>
            <h2 className="font-bebas text-4xl md:text-5xl text-white mb-4">
              UNMATCHED <span className="text-earth-green">EXPERIENCE</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaUsers,
                title: "Small Groups",
                description:
                  "Limited to 6 participants for personalized attention and optimal photography opportunities",
              },
              {
                icon: FaHotel,
                title: "Luxury Stays",
                description:
                  "Premium lodges and tented camps in optimal locations for wildlife viewing",
              },
              {
                icon: FaSlidersH,
                title: "Customizable Tours",
                description:
                  "Tailor-made itineraries shaped to your interests, pace, and travel style",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-[#0D0D0C] p-8 rounded-lg border border-gray-800 text-center relative overflow-hidden group hover:border-[#4a7c59]/50 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-earth-green/20 p-4 rounded-full inline-flex mb-6 group-hover:bg-earth-green/30 transition-colors">
                  <feature.icon className="text-[#4a7c59] text-3xl group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bebas text-2xl text-white mb-4">
                  {feature.title}
                </h3>
                <p className="font-lora text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPage;