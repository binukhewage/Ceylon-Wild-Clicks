"use client";
import React, { useState } from "react";
import {
  FaShoppingCart,
  FaHeart,
  FaSearch,
  FaExpand,
  FaTimes,
  FaArrowRight
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Bebas_Neue, Lora, Montserrat, Kolker_Brush } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import printsData from "../../data/printsData.js";

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

const PrintsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [selectedPrint, setSelectedPrint] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "All Archives" },
    { id: "mammals", name: "Mammals" },
    { id: "birds", name: "Avian" },
    { id: "reptiles", name: "Reptiles" },
    { id: "landscapes", name: "Scenery" },
  ];

  // Filtering Logic
  const filteredPrints = printsData.filter((print) => {
    const matchesCategory =
      selectedCategory === "all" || print.category === selectedCategory;
    const matchesSearch =
      print.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      print.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sorting Logic
  const sortedPrints = [...filteredPrints].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "featured")
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    return 0;
  });

  const addToCart = (print) => {
    setCart((prev) => [...prev, print]);
    // Toast logic here
  };

  const toggleWishlist = (print) => {
    setWishlist((prev) =>
      prev.includes(print.id)
        ? prev.filter((id) => id !== print.id)
        : [...prev, print.id]
    );
  };

  return (
    <div className={`${bebas.variable} ${lora.variable} ${montserrat.variable} ${kolker.variable} min-h-screen bg-black text-white selection:bg-[#4a7c59] selection:text-white`}>
      
      {/* Scrollbar Style */}
      <style jsx global>{`
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: #4a7c59; border-radius: 3px; }
      `}</style>

      {/* =========================================
          1. CINEMATIC HERO (The Blend)
         ========================================= */}
      <div className="relative h-[55vh] w-full overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero12.jpg"
            alt="Fine Art Prints"
            fill
            className="object-cover opacity-60"
            priority
          />
          {/* THE BLEND: Gradient to black */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black"></div>
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#4a7c59] rounded-full mix-blend-screen filter blur-[200px] opacity-20 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 
            style={{ fontFamily: "var(--font-bebas)" }}
            className="font-kolker text-5xl md:text-7xl leading-[0.75] text-white mb-6 drop-shadow-2xl">
              WILD <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a7c59] to-[#8fbc9d]">PRINTS</span>
            </h1>
            <p className="font-lora text-gray-300 text-sm md:text-lg max-w-xl mx-auto leading-relaxed drop-shadow-md">
              Own a piece of the untamed. Museum-quality prints for the modern collector.
            </p>
          </motion.div>
        </div>
      </div>

      {/* =========================================
          2. FLOATING CONTROL BAR (Overlap)
         ========================================= */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-8 -mt-24 mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col lg:flex-row gap-6 justify-between items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            
            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`relative px-5 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] font-montserrat transition-all duration-300 overflow-hidden ${
                    selectedCategory === category.id
                      ? "text-white shadow-[0_0_15px_rgba(74,124,89,0.4)]"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="relative z-10">{category.name}</span>
                  {selectedCategory === category.id && (
                    <motion.div layoutId="activeCat" className="absolute inset-0 bg-[#4a7c59]" />
                  )}
                </button>
              ))}
            </div>

            {/* Search & Sort */}
            <div className="flex gap-4 w-full lg:w-auto">
              <div className="relative flex-grow lg:flex-grow-0">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs" />
                <input
                  type="text"
                  placeholder="Search archives..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full lg:w-64 pl-10 pr-4 py-2.5 bg-black/40 border border-white/10 rounded-full text-white font-lora text-sm focus:outline-none focus:border-[#4a7c59] transition-colors placeholder:text-gray-600"
                />
              </div>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none pl-6 pr-10 py-2.5 bg-black/40 border border-white/10 rounded-full text-white font-montserrat text-[10px] uppercase tracking-widest focus:outline-none focus:border-[#4a7c59] cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 text-[8px]">▼</div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* =========================================
          3. PRINTS GRID (Museum Style)
         ========================================= */}
      <div className="relative bg-black px-4 sm:px-6 lg:px-8 pb-32">
        
        {/* Ambient Glows */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#4a7c59] rounded-full mix-blend-screen filter blur-[200px] opacity-10 pointer-events-none -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <AnimatePresence>
              {sortedPrints.map((print) => (
                <motion.div
                  layout
                  key={print.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="group relative bg-[#0a0a0a] border border-white/5 hover:border-[#4a7c59]/40 rounded-xl overflow-hidden shadow-lg hover:shadow-[0_10px_40px_-10px_rgba(74,124,89,0.15)] transition-all duration-500 flex flex-col"
                >
                  {/* Image Area */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#050505]">
                    <Image
                      src={print.image}
                      alt={print.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                       <button 
                          onClick={() => setSelectedPrint(print)}
                          className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#4a7c59] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all transform hover:scale-110"
                       >
                          <FaExpand className="text-sm" />
                       </button>
                       <button 
                          onClick={() => toggleWishlist(print)}
                          className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 transition-all transform hover:scale-110 ${
                            wishlist.includes(print.id) ? "bg-red-500/80 text-white border-red-500" : "bg-white/10 text-white hover:bg-white/20"
                          }`}
                       >
                          <FaHeart className="text-sm" />
                       </button>
                    </div>

                    {/* Badge */}
                    {print.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#4a7c59] text-white text-[9px] font-montserrat uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Info Area */}
                  <div className="p-6 flex flex-col flex-grow border-t border-white/5">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-bebas text-2xl text-white tracking-wide group-hover:text-[#4a7c59] transition-colors duration-300">
                          {print.title}
                        </h3>
                        <p className="font-montserrat text-[10px] uppercase tracking-wider text-gray-500">
                          {print.medium} • {print.size}
                        </p>
                      </div>
                      <span className="font-lora text-white text-lg">${print.price}</span>
                    </div>
                    
                    <p className="font-lora text-gray-400 text-xs line-clamp-2 mb-6">
                      {print.description}
                    </p>

                    <div className="mt-auto">
                        <Link href={`/prints/${print.id}`}>
                            <button className="w-full py-3 rounded-sm border border-white/10 hover:border-[#4a7c59] hover:bg-[#4a7c59]/10 text-center transition-all duration-300">
                                <span className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-white">
                                View Details
                                </span>
                            </button>
                        </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {sortedPrints.length === 0 && (
            <div className="text-center py-20">
              <p className="font-lora text-gray-500 italic">No prints found matching your criteria.</p>
              <button
                  onClick={() => { setSelectedCategory("all"); setSearchTerm(""); }}
                  className="mt-4 text-[#4a7c59] font-montserrat text-xs uppercase tracking-widest hover:underline"
              >
                  Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* =========================================
          4. QUICK VIEW MODAL
         ========================================= */}
      <AnimatePresence>
        {selectedPrint && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-[100] flex items-center justify-center p-4"
            onClick={() => setSelectedPrint(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-[#0a0a0a] border border-white/10 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col lg:flex-row shadow-2xl shadow-black"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Image */}
              <div className="relative lg:w-1/2 h-64 lg:h-auto bg-[#050505]">
                <Image
                  src={selectedPrint.image}
                  alt={selectedPrint.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Modal Details */}
              <div className="lg:w-1/2 p-8 lg:p-12 overflow-y-auto relative">
                <button
                  onClick={() => setSelectedPrint(null)}
                  className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
                >
                  <FaTimes size={20} />
                </button>

                <span className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-[#4a7c59] block mb-2">
                   {selectedPrint.category} Collection
                </span>
                <h2 className="font-kolker text-6xl text-white leading-none mb-6">
                  {selectedPrint.title}
                </h2>

                <p className="font-lora text-gray-300 text-sm leading-relaxed mb-8 border-l border-[#4a7c59]/50 pl-4">
                  {selectedPrint.description}
                </p>

                <div className="space-y-4 mb-10">
                   {[
                     { label: "Dimensions", val: selectedPrint.size },
                     { label: "Medium", val: selectedPrint.medium },
                     { label: "Authenticity", val: "Signed & Numbered" }
                   ].map((item, i) => (
                     <div key={i} className="flex justify-between border-b border-white/5 pb-2">
                        <span className="font-montserrat text-xs text-gray-500 uppercase tracking-wider">{item.label}</span>
                        <span className="font-lora text-sm text-white">{item.val}</span>
                     </div>
                   ))}
                </div>

                <div className="flex items-center justify-between mb-8">
                   <div className="flex flex-col">
                      <span className="font-montserrat text-[10px] text-gray-500 uppercase">Price</span>
                      <span className="font-bebas text-3xl text-white">${selectedPrint.price}</span>
                   </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => addToCart(selectedPrint)}
                    className="flex-1 bg-[#4a7c59] hover:bg-[#5d8c6d] text-white font-montserrat text-[11px] uppercase tracking-[0.2em] font-bold py-4 rounded-full transition-all shadow-lg hover:shadow-[#4a7c59]/30 flex items-center justify-center gap-2"
                  >
                    <FaShoppingCart /> Add to Cart
                  </button>
                  <button
                    onClick={() => toggleWishlist(selectedPrint)}
                    className={`px-5 rounded-full border border-white/10 flex items-center justify-center transition-all ${
                       wishlist.includes(selectedPrint.id) ? "text-red-500 bg-red-500/10 border-red-500/30" : "text-white hover:bg-white/5"
                    }`}
                  >
                    <FaHeart />
                  </button>
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