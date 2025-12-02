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
  FaLayerGroup,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Bebas_Neue, Lora, Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import destinations from "../../data/destinations.js";

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
        onClick={(e) => {
          e.stopPropagation();
          prevImage();
        }}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/40 p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <FaChevronLeft className="text-white text-sm" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          nextImage();
        }}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/40 p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <FaChevronRight className="text-white text-sm" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1.5">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(index);
            }}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
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
        @keyframes bounce-x {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(5px);
          }
        }

        .animate-bounce-x {
          animation: bounce-x 1s infinite;
        }
      `}</style>

      {/* Hero Section - Unchanged */}
      <div className="relative h-[50vh] w-full overflow-hidden bg-black">
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
            style={{ fontFamily: "var(--font-bebas)" }}
            className="font-bebas text-5xl md:text-7xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            TOUR{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a7c59] to-[#8fbc9d]">
              DESTINATIONS
            </span>
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

      {/* Premium Destinations Grid - Updated with Futuristic Luxury Layout */}
      <div className="relative bg-black pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Ambient Background Glow (Right) */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#4a7c59] rounded-md mix-blend-screen filter blur-[200px] opacity-10 pointer-events-none translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Destinations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-md overflow-hidden hover:border-[#4a7c59]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#4a7c59]/10"
              >
                {/* 1. Image Section */}
                <div className="relative h-[350px] w-full overflow-hidden">
                  <Image
                    src={destination.images[0]}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0C] via-transparent to-transparent opacity-90" />
                </div>

                {/* 2. Content Section (Overlapping Image) */}
                <div className="relative p-8 -mt-20 z-10">
                  {/* Title Header */}
                  <div className="flex justify-between items-end mb-6">
                    <h3 className="font-bold text-2xl md:text-3xl text-white leading-none transition-colors duration-300">
                      {destination.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="font-lora text-gray-300 text-sm leading-relaxed mb-8">
                    {destination.description}
                  </p>

                  {/* HUD Stats Grid (Replaced old gray boxes with Glass) */}
                  <div className="grid grid-cols-3 gap-3 mb-8">
                    <div className="bg-white/5 border border-white/5 rounded-md p-3 text-center group-hover:bg-white/10 transition-colors">
                      <span className="block font-montserrat text-md text-[#4a7c59] uppercase tracking-widest mb-1">
                        Area
                      </span>
                      <span className="block font-bebas text-lg text-white tracking-wide">
                        {destination.stats.area}
                      </span>
                    </div>
                    <div className="bg-white/5 border border-white/5 rounded-md p-3 text-center group-hover:bg-white/10 transition-colors">
                      <span className="block font-montserrat text-md text-[#4a7c59] uppercase tracking-widest mb-1">
                        Year
                      </span>
                      <span className="block font-bebas text-lg text-white tracking-wide">
                        {destination.stats.established}
                      </span>
                    </div>
                    <div className="bg-white/5 border border-white/5 rounded-md p-3 text-center group-hover:bg-white/10 transition-colors">
                      <span className="block font-montserrat text-md text-[#4a7c59] uppercase tracking-widest mb-1">
                        Wildlife
                      </span>
                      <span className="block font-bebas text-lg text-white tracking-wide">
                        30+ Species
                      </span>
                    </div>
                  </div>

                  {/* Highlights (Compact Pills) */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-3">
                      <FaLayerGroup className="text-[#4a7c59] text-xs" />
                      <span className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-white/60">
                        Key Features
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {destination.highlights
                        .slice(0, 4)
                        .map((highlight, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-[11px] font-lora text-gray-400"
                          >
                            <span>- </span>
                            {highlight}
                          </span>
                        ))}
                    </div>
                  </div>

                  {/* CTA Button (Sleek Glass Outline) */}
                  <Link href={`/destinations/${destination.id}`}>
                    <button className="w-full py-4 rounded-md border border-white/10 hover:border-[#4a7c59] bg-[#4a7c59] hover:bg-[#4a7c59]/10 text-center transition-all duration-300 group/btn">
                      <span className="font-montserrat text-[10px] uppercase tracking-[0.25em] text-white group-hover/btn:text-[#4a7c59] flex items-center justify-center gap-2">
                        Explore Reserve{" "}
                        <FaChevronRight className="text-[8px]" />
                      </span>
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationsPage;
