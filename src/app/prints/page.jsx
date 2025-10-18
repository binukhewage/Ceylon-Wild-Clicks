"use client";
import React, { useState } from 'react';
import { FaShoppingCart, FaHeart, FaSearch, FaFilter, FaExpand, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
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

// Mock data for prints
const printsData = [
  {
    id: 1,
    title: "Elephant Majesty",
    description: "A majestic wild elephant in Yala National Park",
    price: 299.99,
    size: "24x36 inches",
    medium: "Premium Matte Paper",
    category: "mammals",
    image: "/images/ele1.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Leopard's Gaze",
    description: "Rare close-up of a Sri Lankan leopard",
    price: 399.99,
    size: "30x40 inches",
    medium: "Archival Fine Art Paper",
    category: "mammals",
    image: "/images/kumanalep.jpg",
    featured: true
  },
  {
    id: 3,
    title: "Tropical Kingfisher",
    description: "Vibrant kingfisher in mid-flight",
    price: 199.99,
    size: "18x24 inches",
    medium: "Premium Glossy Paper",
    category: "birds",
    image: "/images/kingfisher.webp"
  },
];

const PrintsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [selectedPrint, setSelectedPrint] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Prints' },
    { id: 'mammals', name: 'Mammals' },
    { id: 'birds', name: 'Birds' },
    { id: 'reptiles', name: 'Reptiles' },
    { id: 'landscapes', name: 'Landscapes' }
  ];

  const filteredPrints = printsData.filter(print => {
    const matchesCategory = selectedCategory === 'all' || print.category === selectedCategory;
    const matchesSearch = print.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         print.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedPrints = [...filteredPrints].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'featured') return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    return 0;
  });

  const addToCart = (print) => {
    setCart(prev => [...prev, print]);
    // In a real app, you'd show a toast notification
  };

  const toggleWishlist = (print) => {
    setWishlist(prev => 
      prev.includes(print.id) 
        ? prev.filter(id => id !== print.id)
        : [...prev, print.id]
    );
  };

  return (
    <div className={`${bebas.variable} ${lora.variable} ${montserrat.variable} min-h-screen bg-black text-white`}>
      {/* Custom CSS for the earthy green colors - same as contact page */}
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
        .from-earth-green { --tw-gradient-from: #4a7c59; --tw-gradient-to: rgba(74, 124, 89, 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
        .to-earth-green-light { --tw-gradient-to: #8a9b68; }
        .wildlife-texture { background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%234a7c59' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E"); }
      `}</style>

      {/* Hero Section */}
      <div className="relative h-96 w-full overflow-hidden bg-black">
        <div className="absolute inset-0 wildlife-texture"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/hero12.jpg"
            alt="Wildlife Photography Prints"
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
            WILDLIFE <span className="text-earth-green">PRINTS</span>
          </motion.h1>
          <motion.p
            className="font-lora text-lg max-w-2xl text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Premium Quality Wildlife Portraits 
          </motion.p>
        </div>
      </div>

      {/* Prints Gallery */}
      <div className="relative bg-black py-16 px-4 sm:px-6 lg:px-8 overflow-hidden wildlife-texture">
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Filters and Search */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`font-montserrat text-sm px-4 py-2 rounded-sm border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-earth-green border-earth-green text-white'
                        : 'border-gray-700 text-gray-300 hover:border-earth-green/50'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Search and Sort */}
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search prints..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="font-montserrat text-sm pl-10 pr-4 py-2 bg-black/50 border border-gray-700 rounded-sm text-white w-full lg:w-64 focus:outline-none focus:border-earth-green/50"
                  />
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="font-montserrat text-sm px-4 py-2 bg-black/50 border border-gray-700 rounded-sm text-white focus:outline-none focus:border-earth-green/50"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Prints Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {sortedPrints.map((print, index) => (
              <motion.div
                key={print.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-[#0D0D0C] border border-gray-800 rounded-sm overflow-hidden hover:border-earth-green/30 transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/3] bg-gray-900 relative">
                    <Image
                      src={print.image}
                      alt={print.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay Actions */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSelectedPrint(print)}
                          className="bg-white/10 backdrop-blur-sm border border-white/20 p-3 rounded-sm hover:bg-white/20 transition-all duration-300"
                        >
                          <FaExpand className="text-white text-sm" />
                        </button>
                        <button
                          onClick={() => toggleWishlist(print)}
                          className={`backdrop-blur-sm border p-3 rounded-sm transition-all duration-300 ${
                            wishlist.includes(print.id)
                              ? 'bg-red-500/20 border-red-500/50 text-red-400'
                              : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                          }`}
                        >
                          <FaHeart className="text-sm" />
                        </button>
                      </div>
                    </div>
                    {print.featured && (
                      <div className="absolute top-3 left-3">
                        <span className="font-montserrat text-xs bg-earth-green px-2 py-1 rounded-sm uppercase tracking-wider">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bebas text-xl text-white group-hover:text-earth-green transition-colors duration-300">
                      {print.title}
                    </h3>
                    <span className="font-lora text-earth-green text-lg">
                      ${print.price}
                    </span>
                  </div>
                  <p className="font-lora text-gray-400 text-sm mb-4 line-clamp-2">
                    {print.description}
                  </p>
                  <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                    <span className="font-montserrat">{print.size}</span>
                    <span className="font-montserrat">{print.medium}</span>
                  </div>
                  <button
                    onClick={() => addToCart(print)}
                    className="font-montserrat text-sm text-white bg-earth-green hover:bg-earth-green-accent px-4 py-3 rounded-sm transition-colors uppercase tracking-wider w-full flex items-center justify-center gap-2"
                  >
                    <FaShoppingCart className="text-xs" />
                    ORDER
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {sortedPrints.length === 0 && (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="bg-[#0D0D0C] border border-gray-800 rounded-sm p-12 max-w-md mx-auto">
                <h3 className="font-bebas text-2xl text-white mb-4">No Prints Found</h3>
                <p className="font-lora text-gray-400 mb-6">
                  Try adjusting your search or filter criteria
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchTerm('');
                  }}
                  className="font-montserrat text-sm text-earth-green border border-earth-green hover:bg-earth-green/10 px-6 py-2 rounded-sm transition-colors uppercase tracking-wider"
                >
                  Clear Filters
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-earth-green/5 blur-3xl"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl"></div>
      </div>

      {/* Print Detail Modal */}
      <AnimatePresence>
        {selectedPrint && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPrint(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#0D0D0C] border border-gray-800 rounded-sm max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-square">
                  <Image
                    src={selectedPrint.image}
                    alt={selectedPrint.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Details */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="font-bebas text-3xl text-white">
                      {selectedPrint.title}
                    </h2>
                    <button
                      onClick={() => setSelectedPrint(null)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      ×
                    </button>
                  </div>
                  
                  <p className="font-lora text-gray-300 mb-6">
                    {selectedPrint.description}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between border-b border-gray-800 pb-2">
                      <span className="font-montserrat text-sm text-gray-400">Price</span>
                      <span className="font-lora text-earth-green text-xl">${selectedPrint.price}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-800 pb-2">
                      <span className="font-montserrat text-sm text-gray-400">Size</span>
                      <span className="font-lora text-white">{selectedPrint.size}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-800 pb-2">
                      <span className="font-montserrat text-sm text-gray-400">Medium</span>
                      <span className="font-lora text-white">{selectedPrint.medium}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-800 pb-2">
                      <span className="font-montserrat text-sm text-gray-400">Category</span>
                      <span className="font-lora text-white capitalize">{selectedPrint.category}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <button
                      onClick={() => addToCart(selectedPrint)}
                      className="flex-1 font-montserrat text-sm text-white bg-earth-green hover:bg-earth-green-accent px-6 py-3 rounded-sm transition-colors uppercase tracking-wider flex items-center justify-center gap-2"
                    >
                      <FaShoppingCart className="text-xs" />
                      Add to Cart
                    </button>
                    <button
                      onClick={() => toggleWishlist(selectedPrint)}
                      className={`p-3 border rounded-sm transition-all duration-300 ${
                        wishlist.includes(selectedPrint.id)
                          ? 'bg-red-500/20 border-red-500/50 text-red-400'
                          : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                      }`}
                    >
                      <FaHeart className="text-sm" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PrintsPage;