"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FaShoppingCart, FaHeart, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { Bebas_Neue, Lora, Montserrat } from "next/font/google";
import Link from "next/link";
import printsData from "../../../data/printsData";

// Fonts
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-bebas" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export default function PrintDetailsPage() {
  const { id } = useParams();
  const print = printsData.find((p) => p.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState(print?.size || "24x36 inches");
  const [selectedMaterial, setSelectedMaterial] = useState(print?.medium || "Premium Matte Paper");
  const [selectedFrame, setSelectedFrame] = useState("Unframed");
  const [isInWishlist, setIsInWishlist] = useState(false);

  // Price calculation based on selections
  const calculatePrice = () => {
    let basePrice = print?.price || 0;
    
    // Size adjustments
    if (selectedSize === "18x24 inches") basePrice -= 50;
    if (selectedSize === "30x40 inches") basePrice += 100;
    
    // Material adjustments
    if (selectedMaterial === "Glossy Fine Art Paper") basePrice += 25;
    if (selectedMaterial === "Canvas Texture") basePrice += 75;
    
    // Frame adjustments
    if (selectedFrame === "Black Frame") basePrice += 150;
    if (selectedFrame === "Wood Frame") basePrice += 200;
    if (selectedFrame === "White Frame") basePrice += 150;
    
    return basePrice;
  };

  if (!print) {
    return (
      <div className={`${bebas.variable} ${lora.variable} ${montserrat.variable} min-h-screen flex items-center justify-center bg-black text-white wildlife-texture`}>
        <div className="text-center">
          <h1 className="font-bebas text-3xl mb-4">Print Not Found</h1>
          <Link href="/prints" className="font-montserrat text-earth-green hover:text-earth-green-accent transition-colors">
            Return to Prints
          </Link>
        </div>
      </div>
    );
  }

  const toggleWishlist = () => {
    setIsInWishlist(!isInWishlist);
  };

  const addToCart = () => {
    // Add to cart logic here
    console.log('Added to cart:', {
      print,
      selectedSize,
      selectedMaterial,
      selectedFrame,
      finalPrice: calculatePrice()
    });
  };

  return (
    <div className={`${bebas.variable} ${lora.variable} ${montserrat.variable} min-h-screen bg-black text-white`}>
      {/* Custom CSS for the earthy green colors */}
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
        
        /* Custom select styles */
        .custom-select {
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234a7c59'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E") no-repeat right 1rem center;
          background-size: 1rem;
          appearance: none;
          padding-right: 3rem;
        }
        
        .custom-select:focus {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b8e23'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
        }
      `}</style>

      <div className="relative bg-black py-25 px-4 sm:px-6 lg:px-8 overflow-hidden wildlife-texture">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link 
              href="/prints" 
              className="inline-flex items-center gap-2 font-montserrat text-sm text-earth-green hover:text-earth-green-accent transition-colors uppercase tracking-wider"
            >
              <FaArrowLeft className="text-sm" />
            </Link>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden border border-gray-800 bg-[#0D0D0C]">
                <Image
                  src={print.image}
                  alt={print.title}
                  fill
                  className="object-cover"
                  priority
                />
                {print.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="font-montserrat text-xs bg-earth-green px-3 py-1 rounded-sm uppercase tracking-wider">
                      Featured
                    </span>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Details Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-[#0D0D0C] backdrop-blur-sm rounded-sm p-8 border border-gray-800"
            >
              <div className="space-y-6">
                {/* Title and Category */}
                <div>
                  <h1 className="font-bebas text-4xl text-white mb-2">{print.title}</h1>
                  <div className="flex items-center gap-4">
                    <span className="font-montserrat text-xs uppercase tracking-wider text-earth-green bg-earth-green/10 px-3 py-1 rounded-sm">
                      {print.category}
                    </span>
                    {print.featured && (
                      <span className="font-montserrat text-xs uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-sm">
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="font-lora text-gray-300 leading-relaxed text-lg">
                  {print.description}
                </p>

                {/* Price Display */}
                <div className="flex items-center justify-between py-4 border-y border-gray-800">
                  <div>
                    <span className="font-bebas text-3xl text-earth-green">${calculatePrice()}</span>
                    {print.featured && (
                      <span className="font-montserrat text-xs text-amber-400 ml-2">FEATURED PRINT</span>
                    )}
                  </div>
                  <button
                    onClick={toggleWishlist}
                    className={`p-3 rounded-sm border transition-all duration-300 ${
                      isInWishlist
                        ? 'bg-red-500/20 border-red-500/50 text-red-400'
                        : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                    }`}
                  >
                    <FaHeart className="text-lg" />
                  </button>
                </div>

                {/* Customization Options */}
                <div className="space-y-6">
                  {/* Size Selection */}
                  <div>
                    <label className="font-montserrat text-sm uppercase tracking-wider block mb-3 text-gray-300">
                      Select Size
                    </label>
                    <select 
                      value={selectedSize}
                      onChange={(e) => setSelectedSize(e.target.value)}
                      className="custom-select w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-sm text-white font-lora focus:outline-none focus:border-earth-green/50 transition-colors"
                    >
                      <option value="18x24 inches">18x24 inches - ${print.price - 50}</option>
                      <option value="24x36 inches">24x36 inches - ${print.price}</option>
                      <option value="30x40 inches">30x40 inches - ${print.price + 100}</option>
                    </select>
                  </div>

                  {/* Material Selection */}
                  <div>
                    <label className="font-montserrat text-sm uppercase tracking-wider block mb-3 text-gray-300">
                      Select Material
                    </label>
                    <select 
                      value={selectedMaterial}
                      onChange={(e) => setSelectedMaterial(e.target.value)}
                      className="custom-select w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-sm text-white font-lora focus:outline-none focus:border-earth-green/50 transition-colors"
                    >
                      <option value="Premium Matte Paper">Premium Matte Paper - Base</option>
                      <option value="Glossy Fine Art Paper">Glossy Fine Art Paper - +$25</option>
                      <option value="Canvas Texture">Canvas Texture - +$75</option>
                    </select>
                  </div>

                  {/* Frame Selection */}
                  <div>
                    <label className="font-montserrat text-sm uppercase tracking-wider block mb-3 text-gray-300">
                      Select Frame
                    </label>
                    <select 
                      value={selectedFrame}
                      onChange={(e) => setSelectedFrame(e.target.value)}
                      className="custom-select w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-sm text-white font-lora focus:outline-none focus:border-earth-green/50 transition-colors"
                    >
                      <option value="Unframed">Unframed - Base</option>
                      <option value="Black Frame">Black Frame - +$150</option>
                      <option value="Wood Frame">Wood Frame - +$200</option>
                      <option value="White Frame">White Frame - +$150</option>
                    </select>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={addToCart}
                  className="font-montserrat text-sm text-white bg-earth-green hover:bg-earth-green-accent px-6 py-4 rounded-sm transition-colors uppercase tracking-wider w-full flex items-center justify-center gap-3 mt-8"
                >
                  <FaShoppingCart className="text-base" />
                  ADD TO CART - ${calculatePrice()}
                </button>

                {/* Additional Info */}
                <div className="pt-6 border-t border-gray-800">
                  <div className="space-y-3 text-sm text-gray-400">
                    <p className="flex justify-between">
                      <span className="font-montserrat">Free Shipping</span>
                      <span className="font-lora text-earth-green">Worldwide</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="font-montserrat">Delivery Time</span>
                      <span className="font-lora">7-14 Business Days</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="font-montserrat">Quality Guarantee</span>
                      <span className="font-lora">30 Days Return</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-earth-green/5 blur-3xl"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl"></div>
      </div>
    </div>
  );
}