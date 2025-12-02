"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import {
  FaPaw,
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaChevronLeft,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Bebas_Neue, Lora, Montserrat } from "next/font/google";
import Image from "next/image";
import destinations from "../../../data/destinations.js";
import Link from "next/link.js";

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

export default function DestinationPage() {
  const { id } = useParams();
  const destination = destinations.find((d) => d.id.toString() === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!destination) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-bebas text-3xl text-earth-green mb-4">
            Destination Not Found
          </h1>
          <p className="font-lora text-gray-300">
            The destination you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${bebas.variable} ${lora.variable} ${montserrat.variable} min-h-screen bg-black text-white`}
    >
      {/* Custom CSS */}
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
      `}</style>

      {/* Hero */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 wildlife-texture"></div>
        <Image
          src={destination.heroimage}
          alt={destination.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/90" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1
            style={{ fontFamily: "var(--font-bebas)" }}
            className="font-bebas text-5xl md:text-6xl mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {destination.name}
          </motion.h1>
          <motion.div
            className="flex items-center text-earth-green text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <FaMapMarkerAlt className="mr-2 text-red-600" />
            <span className="font-montserrat">{destination.location}</span>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="relative py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-earth-green/10 blur-3xl"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Grid for main + sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              {/* Back Button */}
              <Link
                href="/destinations"
                className="inline-flex items-center text-earth-green font-montserrat text-sm hover:text-earth-green-light transition-colors mb-2"
              >
                <FaChevronLeft className="mr-2 text-xs" />
                Destinations
              </Link>
              {/* About */}
              <motion.div
                className="premium-card bg-[#111]/80 border border-white/10 rounded-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="font-bebas text-3xl text-white/80 mb-6">
                  ABOUT {destination.shortName}
                </h2>

                {Array.isArray(destination.longDescription) ? (
                  destination.longDescription.map((para, index) => (
                    <p
                      key={index}
                      className="font-lora text-gray-300 leading-relaxed mb-4 text-lg "
                    >
                      {para}
                    </p>
                  ))
                ) : (
                  <p className="font-lora text-gray-300 leading-relaxed mb-4 text-lg"
                  >
                    {destination.longDescription}
                  </p>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8 mt-8">
              {/* Location */}
              <motion.div
                className="premium-card bg-[#111]/80 border border-white/10 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h3 className="font-bebas text-2xl text-white mb-4">
                  LOCATION
                </h3>

                <div className="w-full h-64 rounded-lg overflow-hidden border border-earth-green/30 mb-4">
                  <iframe
                    src={destination.googleMapUrl}
                    width="100%"
                    height="100%"
                    className="border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>

              {/* Tour Info */}
              <motion.div
                className="premium-card bg-[#111]/80 border border-white/10 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <h3 className="font-bebas text-2xl text-white mb-4">
                  TOUR INFO
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <div className="bg-earth-green/20 p-2 rounded-full mr-4">
                      <FaClock className="text-earth-green" />
                    </div>
                    <div>
                      <div className="font-montserrat text-sm text-earth-green">
                        BEST TIME TO VISIT
                      </div>
                      <div className="font-lora text-gray-300 text-sm">
                        Year-round destination
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-earth-green/20 p-2 rounded-full mr-4">
                      <FaUsers className="text-earth-green" />
                    </div>
                    <div>
                      <div className="font-montserrat text-sm text-earth-green">
                        GROUP SIZE
                      </div>
                      <div className="font-lora text-gray-300 text-sm">
                        Small groups (max 6)
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-earth-green hover:bg-earth-green-accent text-white font-montserrat font-medium py-3 px-6 rounded-md transition-colors duration-300 uppercase tracking-wider text-sm">
                  Book This Destination
                </button>
              </motion.div>
            </div>
          </div>

          {/* FULL-WIDTH GALLERY */}
          {/* Wildlife */}
          <motion.div
            className="mt-5 premium-card bg-[#111]/80 border border-white/10 rounded-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-bebas text-2xl text-white mb-6">
              WILDLIFE HIGHLIGHTS
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {destination.animals?.map((animal, i) => (
                <div
                  key={i}
                  className="flex items-center p-3 bg-black rounded-lg "
                >
                  <div className="bg-earth-green/20 p-2 rounded-full mr-3">
                    <FaPaw className="text-earth-green text-sm" />
                  </div>
                  <span className="font-lora text-gray-300 text-sm">
                    {animal}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="w-full py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {destination.images.map((img, i) => (
                <div
                  key={i}
                  className="relative w-full h-64 rounded-lg overflow-hidden group"
                >
                  <Image
                    src={img}
                    alt={`${destination.name} - ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
