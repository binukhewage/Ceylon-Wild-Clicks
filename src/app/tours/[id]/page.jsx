"use client";

import React, { useState } from "react"; // Import useState
import { tours } from "../../../data/tours";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaClock,
  FaDollarSign,
  FaTag,
  FaChevronLeft,
  FaSafari,
  FaMapMarkerAlt,
  FaTimes,
  FaUsers,
  FaChevronRight,
} from "react-icons/fa"; // Added FaTimes
import { Bebas_Neue, Lora, Montserrat } from "next/font/google";

// --- Font Setup (Matching TourPage) ---
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// Helper function to get the theme color
const getThemeColor = (type, isClass = true) =>
  isClass
    ? type === "luxury"
      ? "text-earth-green"
      : "text-earth-green"
    : type === "luxury"
    ? "#a57f2a"
    : "#4a7c59";

// --- New: Modal Component (moved here for reusability if needed elsewhere) ---
const ImageModal = ({ isOpen, onClose, imgSrc, altText }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // Close when clicking the overlay
        >
          <motion.div
            className="relative max-w-4xl w-full max-h-[90vh] bg-[#0D0D0C] rounded-xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.8, y: -50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            onClick={(e) => e.stopPropagation()} // Prevent modal closure when clicking inside
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-3 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors"
              aria-label="Close image view"
            >
              <FaTimes className="text-xl" />
            </button>

            {/* Image */}
            <div className="relative w-full h-full aspect-[4/3]">
              {" "}
              {/* Aspect ratio adjusted for general images */}
              <Image
                src={imgSrc}
                alt={altText}
                fill
                className="object-contain" // object-contain to ensure the map fits
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
  // Fix: Use React.use() to correctly unwrap the params object.
  const unwrappedParams = React.use(props.params);
  const { id } = unwrappedParams;

  const tour = tours.find((t) => t.id === parseInt(id));

  // --- New States for Modals ---
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false); // New state for gallery modal
  const [currentGalleryImage, setCurrentGalleryImage] = useState(""); // New state for current gallery image

  if (!tour) {
    return (
      <div
        className={`${montserrat.className} min-h-screen bg-black text-white flex items-center justify-center p-10`}
      >
        <h1 className="text-3xl font-bold text-red-500">
          Tour Not Found (ID: {id})
        </h1>
      </div>
    );
  }

  
  const themeColorClass = getThemeColor(tour.type, true);
  const themeColorHex = getThemeColor(tour.type, false);
  const bgColor = "bg-earth-green";

  // Placeholder gallery images if not in tour data. Replace with actual data: tour.galleryImages
  // For demonstration, using existing tour images and some generic ones.
  const galleryImages = tour.galleryImages || [
    tour.images[0],
    tour.images[1],
  ];

  const openGalleryModal = (imgSrc) => {
    setCurrentGalleryImage(imgSrc);
    setIsGalleryModalOpen(true);
  };

  return (
    <div
      className={`${bebas.variable} ${lora.variable} ${montserrat.variable} min-h-screen bg-black text-white`}
    >
      {/* Custom CSS (Matching TourPage) */}
      <style jsx global>{`
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
        /* ... other styles remain the same ... */
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
          background: linear-gradient(
            45deg,
             "#4a7c59",
            #8a9b68,
             "#4a7c59"}
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.3;
        }
        .luxury-card::before {
          background: linear-gradient(45deg, #a57f2a, #d4af37, #a57f2a);
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
        .luxury-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(165, 127, 42, 0.15);
        }
      `}</style>

      {/* Hero Section (Matching TourPage) */}
      <div className="relative h-[40vh] w-full overflow-hidden bg-black">
        <div className="absolute inset-0 wildlife-texture"></div>
        <Image
          src={tour.heroImage}
          alt={tour.title}
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/90" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-10">
          <motion.h1
            className="font-bebas text-4xl md:text-5xl mb-4 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={"text-white"}>
              {tour.title.split("–")[0]}
            </span>
            {tour.title.includes("–") && (
              <span className="text-earth-green">
                {" "}
                – {tour.title.split("–")[1]}
              </span>
            )}
          </motion.h1>
          <motion.p
            className="font-lora text-lg max-w-2xl text-gray-200 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {tour.intro}
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative bg-black px-4 sm:px-6 lg:px-8 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Back Button ABOVE Main Tour Card */}
          <div className="mb-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/tours"
                className={`flex items-center  hover:text-white transition-colors font-montserrat text-sm`}
              >
                <FaChevronLeft className="mr-2 text-xs" />
                Tours
              </Link>
            </motion.div>
          </div>

          {/* Overview Cards Grid: Tour Card (col-span-2) + Map (col-span-1) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* 1. Main Tour Card (span 2) */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`premium-card destination-card bg-[#0D0D0C] rounded-lg overflow-hidden group lg:col-span-2`}
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={tour.images[1] || tour.images[0]}
                  alt={tour.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Type Badge */}
                <div
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full backdrop-blur-sm bg-earth-green/20 text-earth-green font-montserrat text-xs uppercase tracking-wider`}
                >
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3
                    className={`font-bebas text-2xl
                      "text-white"
                    group-hover:text-earth-green transition-colors`}
                  >
                    Tour Overview
                  </h3>
                </div>

                <div className="flex flex-wrap gap-x-8 gap-y-4 mb-8">
                  <div
                    className={`flex items-center text-earth-green-light text-sm`}
                  >
                    <FaClock className="mr-1" />
                    <span className="font-montserrat">{tour.duration}</span>
                  </div>
                </div>
                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="font-montserrat text-md uppercase tracking-wider text-earth-green mb-2">
                    Tour Highlights
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {tour.inclusions.map((inclusion, i) => (
                      <div key={i} className="flex items-start">
                        <div
                          className={`w-1.5 h-1.5 mt-1.5 mr-2 rounded-full flex-shrink-0  bg-earth-green`}
                        ></div>
                        <span className="font-lora text-gray-300 text-sm">
                          {inclusion}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2. Sri Lanka Map Card (Tall, Matching Tour Overview Height) */}
<motion.div
  initial={{ opacity: 0, y: 40, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true, margin: "-50px" }}
  className={`premium-card bg-[#0D0D0C] rounded-lg overflow-hidden p-6 text-center h-full flex flex-col`}
>
  {/* Title */}
  <h3 className="font-bebas text-2xl mb-4 ">
    Expected Route
  </h3>

  {/* Clickable Map (Fills available height) */}
  <button
    onClick={() => setIsMapModalOpen(true)}
    className="relative w-full flex-1 rounded-lg overflow-hidden bg-gray-900/50 flex items-center justify-center group cursor-pointer border-2 border-transparent hover:border-earth-green transition-colors"
  >
    <Image
      src="/images/route.png"
      alt="Sri Lanka Tour Route Map"
      fill
      className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
    />

    {/* View Fullscreen Overlay */}
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
      <span className="font-bebas text-white text-xl tracking-wider px-4 py-2 rounded bg-black/50">
        VIEW FULL MAP
      </span>
    </div>
  </button>

  {/* Description */}
  <p className="font-lora text-gray-400 text-sm mt-4">
    A Visual Outline of Kurulu Trail.
  </p>
</motion.div>

          </div>

          {/* --- INCLUSIONS / EXCLUSIONS SECTION (MOVED) --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 mb-10"></div>
          

          {/* Detailed Itinerary Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p
              className={`pb-3 ${themeColorClass} font-montserrat text-xs uppercase tracking-[0.3em]`}
            >
              JOURNEY THROUGH SRI LANKA
            </p>
            <h2 className="font-bebas text-4xl md:text-5xl text-white mb-4">
              DETAILED <span className="text-earth-green">ITINERARY</span>
            </h2>
            <p className="font-lora text-lg text-gray-400 max-w-3xl mx-auto">
              Follow our carefully crafted schedule for an unforgettable
              adventure
            </p>
          </motion.div>

          {/* Itinerary Parts */}
          {tour.parts?.map((part, partIndex) => (
            <motion.div
              key={partIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: partIndex * 0.1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div
                className={`premium-card bg-[#0D0D0C] rounded-lg overflow-hidden p-8`}
              >
                <h3 className={`font-bebas text-3xl mb-6 ${themeColorClass}`}>
                  {part.name}
                </h3>

                <div className="space-y-4">
                  {part.days.map((day, dayIndex) => (
                    <motion.div
                      key={dayIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: dayIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start border-l-2 border-earth-green/50 pl-4 py-3 hover:bg-gray-900/30 rounded-r-lg transition-colors"
                    >
                      <div
                        className={`p-2 rounded-sm mr-4 mt-0.5 min-w-[50px] text-center bg-earth-green/10`}
                      >
                        <span
                          className={`font-bebas text-sm ${themeColorClass}`}
                        >
                          {day.day.replace("Day ", "D")}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-1">
                          <FaMapMarkerAlt
                            className={`mr-2 text-xs ${themeColorClass}`}
                          />
                          <p className="font-montserrat text-white text-md font-semibold">
                            {day.destination}
                          </p>
                        </div>
                        {day.accommodation && (
                          <p className="font-montserrat text-earth-green-light text-xs mb-4">
                            {day.accommodation}
                          </p>
                        )}
                        <p className="font-lora text-gray-400 text-sm">
                          {day.activities}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* --- WHAT TO SEE GALLERY (NEW SECTION) --- */}
          <div className="mt-20 mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <p
                className={`pb-3 ${themeColorClass} font-montserrat text-xs uppercase tracking-[0.3em]`}
              >
                UNFORGETTABLE SIGHTS
              </p>
              <h2 className="font-bebas text-4xl md:text-5xl text-white mb-4">
                WHAT <span className="text-earth-green">TO SEE</span> ON THIS
                TOUR
              </h2>
              <p className="font-lora text-lg text-gray-400 max-w-3xl mx-auto mb-10">
                Explore the breathtaking landscapes and vibrant culture that
                await you.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((imageSrc, index) => (
                <motion.button
                  key={index}
                  onClick={() => openGalleryModal(imageSrc)}
                  className="relative w-full h-48 rounded-lg overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Image
                    src={imageSrc}
                    alt={`Gallery Image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                </motion.button>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                href="/booking"
                style={{ backgroundColor: themeColorHex }}
                className={`flex items-center justify-center gap-2 text-white font-montserrat text-sm px-8 py-4 rounded-lg uppercase tracking-wide transition-all shadow-lg`}
              >
                <FaSafari className="text-lg" />
                Book This Tour
                <span className="inline-block">
                  <FaChevronRight className="ml-2" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Gradient Blobs */}
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-earth-green/10 blur-3xl"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl"></div>
      </div>

      {/* --- RENDER MAP MODAL --- */}
      <ImageModal // Renamed from MapModal to ImageModal for reusability
        isOpen={isMapModalOpen}
        onClose={() => setIsMapModalOpen(false)}
        imgSrc="/images/route.png"
        altText={`Full Route Map for ${tour.title}`}
      />

      
    </div>
  );
}
