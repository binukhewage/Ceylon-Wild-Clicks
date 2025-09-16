"use client";
import React, { useState } from "react";
import { FaMapMarkerAlt, FaCamera, FaUsers, FaLeaf, FaChevronRight, FaStar, FaClock, FaHotel, FaChevronLeft, FaSafari } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Bebas_Neue, Lora, Montserrat } from "next/font/google";
import Image from "next/image";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-bebas" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

const tours = [
  {
    id: 1,
    title: "NORTHERN WILD TRAIL",
    shortTitle: "TOUR 01",
    duration: "14 Days / 13 Nights",
    difficulty: "Moderate",
    groupSize: "Max 6 Photographers",
    price: "$5,999",
    itinerary: [
      { day: "1st Day (01 night)", details: "Arrival to Sri Lanka - Negambo, 5* Hotel (BB)" },
      { day: "2nd - 5th Day (4 nights)", details: "Wilpattu National Park, Luxury Glamping (FB)" },
      { day: "6th - 7th Day (2 nights)", details: "Minneriya National Park, 5* Hotel (FB)" },
      { day: "8th - 10th Day (3 nights)", details: "Horton Plains National Park, Holiday Bungalow (FB)" },
      { day: "11th Day (01 night)", details: "Rest Day in Pelmadulla, 3* Hotel (FB)" },
      { day: "12th - 13th Day (02 nights)", details: "Sinharaja Rain Forest, 3* Hotel (FB)" },
      { day: "14th Day - Dinner", details: "Departure from Sri Lanka, 4* Hotel" },
    ],
    images: [
      "/images/minneriya.jpg",
      "/images/minneriya1.jpg",
      "/images/horton1.jpg"
    ],
    highlights: ["Wilpattu Leopards", "Minneriya Elephants", "Horton Plains Biodiversity", "Sinharaja Endemics"],
    included: ["Professional Guide", "Luxury Accommodation", "All Meals", "Park Fees", "Transportation"],
    parks: ["Wilpattu", "Minneriya", "Horton Plains", "Sinharaja"]
  },
  {
    id: 2,
    title: "SOUTHERN WILD TRAIL",
    shortTitle: "TOUR 02",
    duration: "14 Days / 13 Nights",
    difficulty: "Moderate",
    groupSize: "Max 6 Photographers",
    price: "$5,999",
    itinerary: [
      { day: "1st Day (01 night)", details: "Arrival to Sri Lanka - Negambo, 5* Hotel (BB)" },
      { day: "2nd - 4th Day (3 nights)", details: "Horton Plains National Park, Holiday Bungalow (FB)" },
      { day: "5th Day (1 night)", details: "Arugambay, 5* Hotel (HB)" },
      { day: "6th - 8th Day (3 nights)", details: "Kumana National Park, Luxury Tented Camp (FB)" },
      { day: "9th - 11th Day (3 nights)", details: "Yala National Park, Luxury Chalets (FB)" },
      { day: "12th - 13th Day (02 nights)", details: "Sinharaja Rain Forest, 3* Hotel (FB)" },
      { day: "14th Day - Dinner", details: "Departure from Sri Lanka, 4* Hotel" },
    ],
    images: [
      "/images/kumana.jpg",
      "/images/kumana1.jpg",
      "/images/yala1.jpg"
    ],
    highlights: ["Yala Leopards", "Kumana Birdlife", "Horton Plains Landscape", "Sinharaja Rainforest"],
    included: ["Professional Guide", "Luxury Accommodation", "All Meals", "Park Fees", "Transportation"],
    parks: ["Horton Plains", "Kumana", "Yala", "Sinharaja"]
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
    <div className="relative h-60 overflow-hidden group">
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
    </div>
  );
};

const TourPage = () => {
  const [expandedTour, setExpandedTour] = useState(null);
  const [activeTab, setActiveTab] = useState("itinerary");

  const toggleExpand = (tourId) => {
    if (expandedTour === tourId) {
      setExpandedTour(null);
    } else {
      setExpandedTour(tourId);
    }
  };

  return (
    <div className={`${bebas.variable} ${lora.variable} ${montserrat.variable} min-h-screen bg-black text-white`}>
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
            className="font-bebas text-5xl md:text-6xl mb-4 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span >PHOTO-SAFARI</span>
            <span className="text-earth-green"> TOURS</span>
          </motion.h1>
          <motion.p
            className="font-lora text-lg max-w-2xl text-gray-200 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Exclusive small-group photography expeditions through Sri Lanka's most spectacular wilderness areas
          </motion.p>
        </div>
      </div>

      {/* Tours Section */}
      <div className="relative bg-black pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Tours Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
            {tours.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="premium-card destination-card bg-[#0D0D0C] rounded-lg overflow-hidden group cursor-pointer"
              >
                {/* Image Carousel */}
                <ImageCarousel images={tour.images} name={tour.title} />

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bebas text-2xl text-white group-hover:text-earth-green transition-colors">
                      {tour.title}
                    </h3>
                    <span className="font-bebas text-earth-green text-xl">
                      {tour.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center text-earth-green-light text-sm">
                      <FaClock className="mr-1" />
                      <span className="font-montserrat">{tour.duration}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="font-montserrat text-xs uppercase tracking-wider text-earth-green mb-2">
                      HIGHLIGHTS
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {tour.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-earth-green mt-1.5 mr-2 rounded-full flex-shrink-0"></div>
                          <span className="font-lora text-gray-300 text-xs">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* National Parks */}
                  <div className="mb-4">
                    <h4 className="font-montserrat text-xs uppercase tracking-wider text-earth-green mb-2">
                      NATIONAL PARKS
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {tour.parks.map((park, i) => (
                        <span key={i} className="font-montserrat text-xs text-earth-green-light bg-gray-900/50 px-2 py-1 rounded">
                          {park}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expandable Details */}
                  <div className="mb-4 border-t border-gray-800 pt-4">
                    <button 
                      onClick={() => toggleExpand(tour.id)}
                      className="flex items-center justify-between w-full text-left"
                    >
                      <span className="font-montserrat text-sm text-white">
                        TOUR DETAILS
                      </span>
                      <motion.div
                        animate={{ rotate: expandedTour === tour.id ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaChevronRight className="text-earth-green" />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {expandedTour === tour.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mt-4"
                        >
                          {/* Tab Navigation */}
                          <div className="flex border-b border-gray-800 mb-4">
                            <button
                              className={`font-montserrat text-xs px-3 py-1 ${activeTab === "itinerary" ? "text-earth-green border-b-2 border-earth-green" : "text-gray-400"}`}
                              onClick={() => setActiveTab("itinerary")}
                            >
                              Itinerary
                            </button>
                            <button
                              className={`font-montserrat text-xs px-3 py-1 ${activeTab === "included" ? "text-earth-green border-b-2 border-earth-green" : "text-gray-400"}`}
                              onClick={() => setActiveTab("included")}
                            >
                              What's Included
                            </button>
                          </div>
                          
                          {/* Tab Content */}
                          {activeTab === "itinerary" && (
                            <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
                              {tour.itinerary.map((item, i) => (
                                <div key={i} className="flex items-start border-l-2 border-earth-green/50 pl-3 py-1">
                                  <div className="bg-earth-green/10 p-1 rounded-sm mr-2 mt-0.5 min-w-[20px] text-center">
                                    <span className="font-bebas text-earth-green text-xs">{i + 1}</span>
                                  </div>
                                  <div>
                                    <p className="font-montserrat text-white text-xs">{item.day}</p>
                                    <p className="font-lora text-gray-400 text-xs">{item.details}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                          
                          {activeTab === "included" && (
                            <div className="grid grid-cols-1 gap-2">
                              {tour.included.map((item, i) => (
                                <div key={i} className="flex items-center">
                                  <div className="bg-earth-green/20 p-1 rounded mr-2">
                                    -
                                  </div>
                                  <span className="font-lora text-gray-300 text-xs">{item}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4"
                  >
                    <button className="flex items-center justify-center w-full bg-earth-green hover:bg-earth-green transition-colors text-white font-montserrat text-sm px-4 py-3 rounded-md uppercase tracking-wide">
                      <FaSafari className="mr-2" />
                      Reserve This Tour
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Decorative Gradient Blobs */}
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-earth-green/10 blur-3xl"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl"></div>
      </div>

      {/* Premium Features Section */}
      <div className="relative bg-black py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="pb-3 text-earth-green font-montserrat text-xs uppercase tracking-[0.3em]">ONLY FROM US</p>
            <h2 className="font-bebas text-4xl md:text-5xl text-white mb-4">PREMIUM <span className="text-earth-green">EXPERIENCE</span></h2>
            <p className="font-lora text-lg text-gray-400 max-w-3xl mx-auto">
              What sets our photography tours apart from the rest
            </p>
          </motion.div>

          <div className="grid grid-cols-1 pb-10 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-[#0D0D0C] p-8 rounded-lg border border-gray-800 text-center premium-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-earth-green/20 p-4 rounded-full inline-flex mb-6">
                <FaUsers className="text-earth-green text-3xl" />
              </div>
              <h3 className="font-bebas text-2xl text-white mb-4">Small Group Size</h3>
              <p className="font-lora text-gray-400">
                Limited to just 6 participants to ensure personalized guidance and optimal photography opportunities
              </p>
            </motion.div>

            <motion.div 
              className="bg-[#0D0D0C] p-8 rounded-lg border border-gray-800 text-center premium-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-earth-green/20 p-4 rounded-full inline-flex mb-6">
                <FaHotel className="text-earth-green text-3xl" />
              </div>
              <h3 className="font-bebas text-2xl text-white mb-4">Luxury Accommodations</h3>
              <p className="font-lora text-gray-400">
                Stay in premium lodges and luxury tented camps located within or near national parks for optimal access
              </p>
            </motion.div>

            <motion.div 
              className="bg-[#0D0D0C] p-8 rounded-lg border border-gray-800 text-center premium-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-earth-green/20 p-4 rounded-full inline-flex mb-6">
                <FaMapMarkerAlt className="text-earth-green text-3xl" />
              </div>
              <h3 className="font-bebas text-2xl text-white mb-4">Expert Local Guides</h3>
              <p className="font-lora text-gray-400">
                Our professional guides have decades of experience tracking wildlife and understanding animal behavior
              </p>
            </motion.div>
          </div>
        </div>
        {/* Decorative Gradient Blobs */}
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-earth-green/10 blur-3xl"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl"></div>
      </div>
    </div>
  );
};

export default TourPage;