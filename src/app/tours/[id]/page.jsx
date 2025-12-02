"use client";

import React, { useState } from "react";
import { tours } from "../../../data/tours";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaClock,
  FaChevronLeft,
  FaSafari,
  FaMapMarkerAlt,
  FaTimes,
  FaStar,
  FaExpand,
  FaLayerGroup,
  FaHotel,
} from "react-icons/fa";
import { Bebas_Neue, Lora, Montserrat, Kolker_Brush } from "next/font/google";

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

// --- Modal Component ---
const ImageModal = ({ isOpen, onClose, imgSrc, altText }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-w-5xl w-full h-auto max-h-[90vh] bg-transparent rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-[#4a7c59]/20"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-[#4a7c59] text-white rounded-full transition-colors border border-white/10"
            >
              <FaTimes className="text-lg" />
            </button>
            <div className="relative w-full h-[80vh]">
              <Image
                src={imgSrc}
                alt={altText}
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- Main Component ---
export default function TourDetails(props) {
  const unwrappedParams = React.use(props.params);
  const { id } = unwrappedParams;

  const tour = tours.find((t) => t.id === parseInt(id));
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [currentGalleryImage, setCurrentGalleryImage] = useState("");

  if (!tour) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="font-bebas text-4xl text-red-500">
          Expedition Not Found
        </h1>
      </div>
    );
  }

  const galleryImages = tour.galleryImages || [tour.images[0], tour.images[1]];

  // Use images from the tour array for the parts, falling back to gallery images if needed
  const getPartImage = (index) => {
    if (tour.images && tour.images[index + 1]) return tour.images[index + 1];
    return galleryImages[index % galleryImages.length];
  };

  const openGalleryModal = (imgSrc) => {
    setCurrentGalleryImage(imgSrc);
    setIsGalleryModalOpen(true);
  };

  return (
    <div
      className={`${bebas.variable} ${lora.variable} ${montserrat.variable} ${kolker.variable} min-h-screen bg-black text-white selection:bg-[#4a7c59] selection:text-white`}
    >
      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #000;
        }
        ::-webkit-scrollbar-thumb {
          background: #4a7c59;
          border-radius: 3px;
        }
      `}</style>

      {/* =========================================
          1. CINEMATIC HERO
         ========================================= */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={tour.heroImage}
            alt={tour.title}
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black"></div>
        </div>

        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#4a7c59] rounded-full mix-blend-screen filter blur-[200px] opacity-20 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

        <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-4 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              style={{ fontFamily: "var(--font-bebas)" }}
              className="text-5xl md:text-7xl leading-[1.2] text-white mb-3 drop-shadow-2xl"
            >
              <span className="block">
                {tour.title.split(/[-–]/)[0].trim()}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a7c59] to-[#8fbc9d]">
                  - {tour.title.split(/[-–]/)[1]?.trim()}
                </span>
              </span>
            </h1>

            <motion.p
              className="font text-md max-w-4xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {tour.intro}
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* =========================================
          2. MAIN CONTENT
         ========================================= */}
      <div className="relative px-4 sm:px-6 lg:px-8 pb-32 -mt-10 z-20">
        {/* Ambient Glow */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#4a7c59] rounded-full mix-blend-screen filter blur-[200px] opacity-10 pointer-events-none -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto">
          {/* --- BACK BUTTON --- */}
          <div className="mb-6">
            <Link
              href="/tours"
              className="group inline-flex items-center gap-3 font-montserrat text-[10px] uppercase tracking-[0.25em] text-white/80 hover:text-white transition-all px-5 py-2.5 rounded-full  backdrop-blur-md"
            >
              <FaChevronLeft className="text-[8px] group-hover:-translate-x-1 transition-transform" />
              <span>Back to Archives</span>
            </Link>
          </div>

          {/* --- TOP GRID: OVERVIEW --- */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-24">
            {/* (Keep Overview & Map Cards same as previous) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl group flex flex-col"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={tour.images[1] || tour.images[0]}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-90" />
                
              </div>
              <div className="p-6 relative flex-grow flex flex-col justify-between">
                <div className="flex justify-between items-start mb-4 border-b border-white/10 pb-4">
                  <h3 className="uppercase text-2xl text-white group-hover:text-[#4a7c59] transition-colors duration-300 tracking-wide">
                    Tour Overview
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-gray-400">
                    <FaClock className="text-[#4a7c59] text-xs" />
                    <span className="font-montserrat text-[10px] uppercase tracking-widest">
                      {tour.duration}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="font-montserrat text-[11px] uppercase tracking-[0.25em] text-[#4a7c59] mb-3">
                    Highlights
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {tour.inclusions.slice(0, 4).map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-[#4a7c59] flex-shrink-0 shadow-[0_0_5px_#4a7c59]"></div>
                        <span className="font-lora text-gray-300 text-sm leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className=" backdrop-blur-xl border border-white/10 rounded-md p-6 shadow-xl flex flex-col h-full"
            >
              <h4 className="font-bold text-xl text-white mb-4 uppercase ">Route</h4>
              <button
                onClick={() => setIsMapModalOpen(true)}
                className="relative w-full flex-grow min-h-[200px] rounded-xl overflow-hidden group  transition-all bg-[#050505]"
              >
                <Image
                  src="/images/route.png"
                  alt="Route Map"
                  fill
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-montserrat text-[9px] uppercase tracking-[0.2em] font-bold text-white border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition-all">
                    View Map
                  </span>
                </div>
              </button>
            </motion.div>
          </div>

          {/* --- DETAILED ITINERARY HEADER --- */}
          <div className="text-center mb-16">
            <p className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-[#4a7c59] mb-3">
              Journey Through Ceylon
            </p>
            <h2 
            
            className=" uppercase text-3xl md:text-5xl text-white leading-none">
              Detailed <span className="text-[#4a7c59]">Itinerary</span>
            </h2>
          </div>

          {/* --- ITINERARY PARTS (New Layout with dedicated Images) --- */}
          <div className="space-y-24">
            {tour.parts?.map((part, partIndex) => (
              <div key={partIndex} className="relative">
                {/* Part Header */}
                {part.name && (
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-[1px] bg-[#4a7c59]"></div>
                    <h4 className="font-bold text-2xl text-white tracking-wider uppercase">
                      {part.name}
                    </h4>
                  </div>
                )}

                {/* Split Grid for Part */}
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ${
                    partIndex % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* 1. Image Side (Alternating Order) */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl lg:sticky lg:top-24 ${
                      partIndex % 2 === 1 ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <Image
                      src={getPartImage(partIndex)}
                      alt={part.name || `Part ${partIndex + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-1000"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                    {/* Decorative Label */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="font-bold uppercase text-lg text-white/50 drop-shadow-md">
                        {[
                          "The Beginning",
                          "Deep Wilderness",
                          "The Highland Finale",
                          "Coastal Retreat",
                        ][partIndex] || "Expedition Phase"}
                      </span>
                    </div>
                  </motion.div>

                  {/* 2. Timeline Side */}
                  <div
                    className={`space-y-4 ${
                      partIndex % 2 === 1 ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    {part.days.map((day, dayIndex) => (
                      <motion.div
                        key={dayIndex}
                        initial={{
                          opacity: 0,
                          x: partIndex % 2 === 1 ? -20 : 20,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: dayIndex * 0.1 }}
                        className="group relative pl-8 border-l border-white/10 hover:border-[#4a7c59] transition-colors duration-300"
                      >
                        {/* Timeline Dot */}
                        <div className="absolute left-[-5px] top-6 w-2.5 h-2.5 rounded-full bg-[#111] border border-white/30 group-hover:bg-[#4a7c59] group-hover:border-[#4a7c59] group-hover:shadow-[0_0_10px_#4a7c59] transition-all z-10"></div>

                        <div className="bg-[#111]/60 backdrop-blur-md border border-white/5 rounded-xl p-6 hover:bg-white/[0.03] transition-all">
                          <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 mb-3">
                            <span className="font-montserrat text-[#4a7c59] text-[10px] font-bold uppercase tracking-widest border border-[#4a7c59]/20 px-2 py-1 rounded bg-[#4a7c59]/5">
                              {day.day}
                            </span>
                            <span className="font-bebas text-2xl text-white">
                              {day.destination}
                            </span>
                          </div>
                          <p className="font-lora text-gray-400 text-sm leading-relaxed pl-1 mb-4">
                            {day.activities}
                          </p>
                          {day.accommodation && (
                            <div className="flex items-center gap-2 text-[10px] font-montserrat text-white/50 uppercase tracking-wider pl-1 border-t border-white/5 pt-3">
                              <FaHotel className="text-[#4a7c59]" />
                              {day.accommodation}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================
          3. VISUAL ARCHIVES (Gallery)
         ========================================= */}
      <div className="relative pb-24 border-t border-white/5 bg-black mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-[#4a7c59] mb-3">
              UNFORGETTABLE SIGHTS
            </p>
            <h2 
            
            className=" uppercase text-3xl md:text-5xl text-white leading-none">
              what to see on <span className="text-[#4a7c59]">this tour</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group border border-white/10 hover:border-[#4a7c59] shadow-lg"
                onClick={() => openGalleryModal(img)}
              >
                <Image
                  src={img}
                  alt="Gallery"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10">
                  <FaExpand className="text-white text-xs" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* --- FINAL CTA SECTION --- */}
        <div className="mt-32 max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-b from-[#4a7c59]/20 to-[#111]/80 backdrop-blur-xl border border-[#4a7c59]/30 rounded-3xl p-10 shadow-[0_0_50px_rgba(74,124,89,0.15)]">
            <p className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-[#4a7c59] mb-2">
              Ready to explore?
            </p>
            <h4 className="font-bold uppercase text-3xl text-white mb-8">
              Start Your Journey
            </h4>

            <Link
              href="/booking"
              className="group relative overflow-hidden inline-flex w-full sm:w-auto py-4 px-12 rounded-md bg-[#4a7c59] text-white font-montserrat text-xs uppercase tracking-[0.2em] font-bold shadow-lg shadow-[#4a7c59]/20 hover:shadow-[#4a7c59]/40 transition-all hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Book Now <FaSafari />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>

            <p className="mt-6 text-gray-500 font-lora text-xs italic">
              *Limited availability for upcoming season.
            </p>
          </div>
        </div>
      </div>

      {/* Modals */}
      <ImageModal
        isOpen={isMapModalOpen}
        onClose={() => setIsMapModalOpen(false)}
        imgSrc="/images/route.png"
        altText="Route Map"
      />
      <ImageModal
        isOpen={isGalleryModalOpen}
        onClose={() => setIsGalleryModalOpen(false)}
        imgSrc={currentGalleryImage}
        altText="Gallery View"
      />
    </div>
  );
}
