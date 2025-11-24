"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaSearch } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
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

// Mock data for gallery
const galleryData = [
  {
    id: 1,
    name: "Sri Lankan Leopard",
    category: "mammals",
    featuredImage: "/images/willep.jpg",
    description: "The majestic apex predator of Sri Lanka's national parks",
    images: [
      {
        id: 1,
        src: "/images/walkinglep.webp",
        title: "Leopard resting on rock",
      },
      { id: 2, src: "/images/kumanalep.jpg", title: "Leopard in golden light" },
      { id: 3, src: "/images/lep.jpg", title: "Close-up portrait" },
      { id: 4, src: "/images/leps.jpg", title: "Hunting sequence" },
      { id: 5, src: "/images/gallery/leopard-5.jpg", title: "Tree climbing" },
      { id: 6, src: "/images/gallery/leopard-6.jpg", title: "Waterhole visit" },
    ],
  },
  {
    id: 2,
    name: "Asian Elephant",
    category: "mammals",
    featuredImage: "/images/eleb.jpg",
    description: "Gentle giants of the Sri Lankan wilderness",
    images: [
      { id: 1, src: "/images/gallery/elephant-1.jpg", title: "Elephant herd" },
      {
        id: 2,
        src: "/images/gallery/elephant-2.jpg",
        title: "Baby elephant playing",
      },
      {
        id: 3,
        src: "/images/gallery/elephant-3.jpg",
        title: "Elephant bathing",
      },
      {
        id: 4,
        src: "/images/gallery/elephant-4.jpg",
        title: "Sunset silhouette",
      },
      {
        id: 5,
        src: "/images/gallery/elephant-5.jpg",
        title: "Close-up texture",
      },
      { id: 6, src: "/images/gallery/elephant-6.jpg", title: "Forest walk" },
    ],
  },
  {
    id: 3,
    name: "Sloth Bear",
    category: "mammals",
    featuredImage: "/images/bearsl.jpg",
    description: "The Reclusive Guardian of the Forest",
    images: [
      { id: 1, src: "/images/gallery/butterfly-1.jpg", title: "Blue Mormon" },
      { id: 2, src: "/images/gallery/butterfly-2.jpg", title: "Ceylon Rose" },
      {
        id: 3,
        src: "/images/gallery/butterfly-3.jpg",
        title: "Common Jezebel",
      },
      { id: 4, src: "/images/gallery/butterfly-4.jpg", title: "On flower" },
      { id: 5, src: "/images/gallery/butterfly-5.jpg", title: "Wings open" },
      { id: 6, src: "/images/gallery/butterfly-6.jpg", title: "Morning dew" },
    ],
  },
  {
    id: 4,
    name: "Sri Lankan Deer",
    category: "mammals",
    featuredImage: "/images/deer.jpg",
    description: "Graceful Inhabitants of the Island’s Forests and Grasslands",
    images: [
      {
        id: 1,
        src: "/images/gallery/crocodile-1.jpg",
        title: "Basking in sun",
      },
      { id: 2, src: "/images/gallery/crocodile-2.jpg", title: "Water surface" },
      {
        id: 3,
        src: "/images/gallery/crocodile-3.jpg",
        title: "Close-up scales",
      },
      { id: 4, src: "/images/gallery/crocodile-4.jpg", title: "River bank" },
      {
        id: 5,
        src: "/images/gallery/crocodile-5.jpg",
        title: "Underwater view",
      },
      { id: 6, src: "/images/gallery/crocodile-6.jpg", title: "Group resting" },
    ],
  },
  {
    id: 5,
    name: "Birds",
    category: "birds",
    featuredImage: "/images/bird.jpg",
    description: "Vibrant displays of nature's artistry",
    images: [
      { id: 1, src: "/images/gallery/peacock-1.jpg", title: "Full display" },
      {
        id: 2,
        src: "/images/gallery/peacock-2.jpg",
        title: "Rainbow feathers",
      },
      { id: 3, src: "/images/gallery/peacock-3.jpg", title: "Dancing pose" },
      { id: 4, src: "/images/gallery/peacock-4.jpg", title: "Close-up eye" },
      {
        id: 5,
        src: "/images/gallery/peacock-5.jpg",
        title: "Forest background",
      },
      { id: 6, src: "/images/gallery/peacock-6.jpg", title: "Morning light" },
    ],
  },
  {
    id: 6,
    name: "Reptiles",
    category: "reptiles",
    featuredImage: "/images/liz.jpg",
    description: "Master fishermen of Sri Lankan waterways",
    images: [
      {
        id: 1,
        src: "/images/gallery/kingfisher-1.jpg",
        title: "Blue kingfisher",
      },
      { id: 2, src: "/images/gallery/kingfisher-2.jpg", title: "In flight" },
      {
        id: 3,
        src: "/images/gallery/kingfisher-3.jpg",
        title: "White-throated variety",
      },
      { id: 4, src: "/images/gallery/kingfisher-4.jpg", title: "River perch" },
      { id: 5, src: "/images/gallery/kingfisher-5.jpg", title: "Hunting pose" },
      { id: 6, src: "/images/gallery/kingfisher-6.jpg", title: "Water splash" },
    ],
  },
];

const GalleryPage = () => {
  const [selectedAnimal, setSelectedAnimal] = useState(galleryData[0]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAnimals = galleryData.filter(
    (animal) =>
      animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      animal.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className={`${bebas.variable} ${lora.variable} ${montserrat.variable} min-h-screen bg-black text-white`}
    >
      {/* Custom CSS for the earthy green colors */}
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
        .hover\\:bg-earth-green:hover {
          background-color: #4a7c59;
        }
        .hover\\:text-earth-green:hover {
          color: #4a7c59;
        }
        .border-earth-green {
          border-color: #4a7c59;
        }
        .from-earth-green {
          --tw-gradient-from: #4a7c59;
          --tw-gradient-to: rgba(74, 124, 89, 0);
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
        }
        .to-earth-green-light {
          --tw-gradient-to: #8a9b68;
        }
        .wildlife-texture {
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%234a7c59' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
        }
      `}</style>

      {/* Header Section */}
      <div className="relative h-96 w-full overflow-hidden bg-black">
        <div className="absolute inset-0 wildlife-texture"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/wilpattu.jpg"
            alt="Wildlife Photography Gallery"
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
            WILDLIFE <span className="text-earth-green">GALLERY</span>
          </motion.h1>
          <motion.p
            className="font-lora text-lg max-w-2xl text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Explore the breathtaking beauty of Sri Lanka's wildlife through our
            lens
          </motion.p>
        </div>
      </div>

      {/* Main Gallery Content */}
      <div className="relative bg-black pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden wildlife-texture">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Search Bar 
          <motion.div 
            className="mb-12 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search animals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-black/50 border border-gray-700 rounded-sm text-white font-lora focus:outline-none focus:border-earth-green/50 transition-colors"
              />
            </div>
          </motion.div>*/}

          {/* Animal Tiles Slider */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="backdrop-blur-sm rounded-sm p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {filteredAnimals.map((animal) => (
                  <motion.button
                    key={animal.id}
                    onClick={() => setSelectedAnimal(animal)}
                    className={`group relative aspect-square rounded-sm overflow-hidden border-2 transition-all duration-300 ${
                      selectedAnimal.id === animal.id
                        ? "border-earth-green scale-105"
                        : "border-gray-700 hover:border-earth-green/50"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Image
                      src={animal.featuredImage}
                      alt={animal.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                      <h3 className="font-bebas text-white text-sm text-center w-full drop-shadow-md">
                        {animal.name}
                      </h3>
                    </div>

                    {/* ✅ Selection indicator (green dot) */}
                    {selectedAnimal.id === animal.id && (
                      <div className="absolute top-2 right-2">
                        <div className="w-3 h-3 bg-earth-green rounded-full"></div>
                      </div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Selected Animal Gallery */}
          <motion.div
            key={selectedAnimal.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="backdrop-blur-sm rounded-sm p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="font-bebas text-2xl text-white mb-2">
                    {selectedAnimal.name}
                  </h2>
                </div>
                <span className="font-montserrat text-xs uppercase tracking-wider text-earth-green bg-earth-green/10 px-3 py-1 rounded-sm">
                  {selectedAnimal.category}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedAnimal.images.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative aspect-[4/3] rounded-sm overflow-hidden border border-gray-800 bg-gray-900 cursor-pointer hover:border-earth-green/50 transition-all duration-500"
                    onClick={() => setSelectedImage(image)}
                  >
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end p-4 opacity-0 group-hover:opacity-100">
                      <span className="font-lora text-white text-sm">
                        {image.title}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-earth-green/5 blur-3xl"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl"></div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-4/3 rounded-sm overflow-hidden bg-gray-900">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-sm p-4">
                <h3 className="font-bebas text-xl text-white mb-1">
                  {selectedAnimal.name}
                </h3>
                <p className="font-lora text-gray-300 text-sm">
                  {selectedImage.title}
                </p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm border border-white/20 text-white p-2 rounded-sm hover:bg-white/20 transition-colors"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
