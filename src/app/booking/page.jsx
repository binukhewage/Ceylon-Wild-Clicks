"use client";
import React, { useState } from "react";
import { 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaCalendar, 
  FaUsers, 
  FaCommentDots,
  FaPaperPlane 
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Bebas_Neue, Lora, Montserrat, Kolker_Brush } from "next/font/google";
import Image from "next/image";

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

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tour: "",
    participants: "1",
    startDate: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your booking request! We'll contact you shortly.");
  };

  return (
    <div className={`${bebas.variable} ${lora.variable} ${montserrat.variable} ${kolker.variable} min-h-screen bg-black text-white selection:bg-[#4a7c59] selection:text-white`}>
      
      {/* Date Picker Dark Mode Fix */}
      <style jsx global>{`
        ::-webkit-calendar-picker-indicator {
            filter: invert(1);
            opacity: 0.5;
            cursor: pointer;
        }
        ::-webkit-calendar-picker-indicator:hover {
            opacity: 1;
        }
      `}</style>

      {/* =========================================
          1. CINEMATIC HERO (The Blend)
         ========================================= */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        
        {/* Background Layer */}
        <div className="absolute inset-0">
          <Image
            src="/images/hp1.jpg" // High quality hero image
            alt="Booking Adventure"
            fill
            className="object-cover opacity-70"
            priority
          />
          {/* THE BLEND: Gradient to black */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black"></div>
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#4a7c59] rounded-full mix-blend-screen filter blur-[200px] opacity-20 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 
            style={{ fontFamily: "var(--font-bebas)" }}
            className="font-kolker text-5xl md:text-7xl leading-[1.2] text-white mb-6 drop-shadow-2xl">
              RESERVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a7c59] to-[#8fbc9d]">YOUR SPOT</span>
            </h1>
            <p className="font-lora text-gray-300 text-sm md:text-lg max-w-xl mx-auto leading-relaxed drop-shadow-md">
              Secure your place on an exclusive wildlife photography adventure. 
              Limited availability for the upcoming season.
            </p>
          </motion.div>
        </div>
      </div>

      {/* =========================================
          2. FLOATING FORM SECTION
         ========================================= */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-8 pb-32 -mt-32">
        
        {/* Ambient Glow (Left) */}
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#4a7c59] rounded-full mix-blend-screen filter blur-[200px] opacity-10 pointer-events-none -translate-x-1/2"></div>

        <div className="max-w-5xl mx-auto">
          
          {/* Glass Card Container */}
          <motion.div 
            className="bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-md p-8 md:p-12 shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Internal decorative glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#4a7c59] rounded-full mix-blend-screen filter blur-[150px] opacity-5 pointer-events-none"></div>

            <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-6 relative z-10">
               <div className="w-10 h-10 rounded-full bg-[#4a7c59]/10 flex items-center justify-center border border-[#4a7c59]/20">
                  <FaCalendar className="text-[#4a7c59] text-sm" />
               </div>
               <h3 className="font-bebas text-3xl text-white tracking-wide font-bold">Details</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              
              {/* Row 1: Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name */}
                <div className="group">
                  <label className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-[#4a7c59] mb-2 block group-focus-within:text-white transition-colors">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-4 pr-10 py-4 text-white font-lora focus:outline-none focus:border-[#4a7c59] focus:bg-white/10 transition-all placeholder:text-gray-600"
                      placeholder="John Doe"
                    />
                    <FaUser className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#4a7c59] transition-colors text-xs" />
                  </div>
                </div>

                {/* Email */}
                <div className="group">
                  <label className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-[#4a7c59] mb-2 block group-focus-within:text-white transition-colors">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-4 pr-10 py-4 text-white font-lora focus:outline-none focus:border-[#4a7c59] focus:bg-white/10 transition-all placeholder:text-gray-600"
                      placeholder="john@example.com"
                    />
                    <FaEnvelope className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#4a7c59] transition-colors text-xs" />
                  </div>
                </div>
              </div>

              {/* Row 2: Contact & Tour */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Phone */}
                <div className="group">
                  <label className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-[#4a7c59] mb-2 block group-focus-within:text-white transition-colors">
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-4 pr-10 py-4 text-white font-lora focus:outline-none focus:border-[#4a7c59] focus:bg-white/10 transition-all placeholder:text-gray-600"
                      placeholder="+94 77 123 4567"
                    />
                    <FaPhone className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#4a7c59] transition-colors text-xs" />
                  </div>
                </div>

                {/* Tour Selection */}
                <div className="group">
                  <label className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-[#4a7c59] mb-2 block group-focus-within:text-white transition-colors">
                    Select Expedition
                  </label>
                  <div className="relative">
                    <select
                      name="tour"
                      value={formData.tour}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-4 pr-10 py-4 text-white font-lora focus:outline-none focus:border-[#4a7c59] focus:bg-white/10 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-black text-gray-500">Select a journey...</option>
                      <option value="northern" className="bg-black">Northern Wild Trail</option>
                      <option value="southern" className="bg-black">Southern Wild Trail</option>
                      <option value="custom" className="bg-black">Custom Expedition</option>
                    </select>
                    <FaMapMarkerAlt className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#4a7c59] transition-colors text-xs pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Row 3: Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Participants */}
                <div className="group">
                  <label className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-[#4a7c59] mb-2 block group-focus-within:text-white transition-colors">
                    Group Size
                  </label>
                  <div className="relative">
                    <select
                      name="participants"
                      value={formData.participants}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-4 pr-10 py-4 text-white font-lora focus:outline-none focus:border-[#4a7c59] focus:bg-white/10 transition-all appearance-none cursor-pointer"
                    >
                      {[1,2,3,4,5,6].map(num => (
                        <option key={num} value={num} className="bg-black">{num} {num === 1 ? 'Person' : 'People'}</option>
                      ))}
                      <option value="7+" className="bg-black">7+ (Large Group)</option>
                    </select>
                    <FaUsers className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#4a7c59] transition-colors text-xs pointer-events-none" />
                  </div>
                </div>

                {/* Date */}
                <div className="group">
                  <label className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-[#4a7c59] mb-2 block group-focus-within:text-white transition-colors">
                    Preferred Start Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-4 pr-4 py-4 text-white font-lora focus:outline-none focus:border-[#4a7c59] focus:bg-white/10 transition-all [color-scheme:dark]"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="group">
                <label className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-[#4a7c59] mb-2 block group-focus-within:text-white transition-colors">
                  Special Requests / Notes
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-4 pr-10 py-4 text-white font-lora focus:outline-none focus:border-[#4a7c59] focus:bg-white/10 transition-all placeholder:text-gray-600 resize-none"
                    placeholder="Tell us about your photography gear, dietary requirements, or specific animals you wish to see..."
                  />
                  <FaCommentDots className="absolute right-4 top-6 text-gray-600 group-focus-within:text-[#4a7c59] transition-colors text-xs" />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex flex-col items-center">
                <button
                  type="submit"
                  className="group relative overflow-hidden rounded-md py-4 px-12 text-white font-medium text-xs tracking-[0.2em] uppercase text-center shadow-2xl hover:shadow-[#4a7c59]/40 transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-r from-[#4a7c59] via-[#5d8c6d] to-[#4a7c59] bg-[length:200%_100%] hover:bg-[100%_0] transition-[background-position] w-full md:w-auto"
                >
                  <span className="flex items-center justify-center gap-3">
                    Confirm Reservation <FaPaperPlane className="text-xs" />
                  </span>
                </button>

                <p className="mt-6 font-lora text-[10px] text-gray-500">
                  *Your privacy is paramount. We do not share your data.
                </p>
              </div>

            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;