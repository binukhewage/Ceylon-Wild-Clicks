"use client";
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaInstagram, FaFacebook, FaTwitter, FaUsers, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
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

const ContactPage = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your submission logic here
  };

  return (
    <div className={`${bebas.variable} ${lora.variable} ${montserrat.variable} ${kolker.variable} min-h-screen bg-black text-white selection:bg-[#4a7c59] selection:text-white`}>
      
      {/* =========================================
          1. CINEMATIC HERO (The Blend)
         ========================================= */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero1.jpg" // High quality hero image
            alt="Contact us"
            fill
            className="object-cover opacity-70"
            priority
          />
          {/* THE BLEND: Gradient to solid black */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black"></div>
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#4a7c59] rounded-full mix-blend-screen filter blur-[200px] opacity-20 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pb-20 mt-10 md:mt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 
            style={{ fontFamily: "var(--font-bebas)" }}
            className="text-5xl md:text-7xl leading-[1.2] text-white mb-6 drop-shadow-2xl">
              CONNECT WITH <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a7c59] to-[#8fbc9d]">
                THE WILD
              </span>
            </h1>
            <p className="font-lora text-gray-300 text-sm md:text-lg max-w-xl mx-auto leading-relaxed drop-shadow-md">
              Plan your unforgettable expedition. Our team is ready to craft your perfect itinerary.
            </p>
          </motion.div>
        </div>
      </div>

      {/* =========================================
          2. FLOATING CONTENT SECTION
         ========================================= */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-8 pb-32 ">
        
        {/* Ambient Glow (Left) */}
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#4a7c59] rounded-full mix-blend-screen filter blur-[200px] opacity-10 pointer-events-none -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

            {/* --- CONTACT FORM (Span 7) --- */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-md p-8 md:p-12 shadow-2xl relative overflow-hidden"
            >
              {/* Internal Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#4a7c59] rounded-full mix-blend-screen filter blur-[100px] opacity-10 pointer-events-none"></div>

              <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-6">
                <div className="w-10 h-10 rounded-full bg-[#4a7c59]/10 flex items-center justify-center border border-[#4a7c59]/20">
                  <FaPaperPlane className="text-[#4a7c59] text-sm" />
                </div>
                <h3 className="font-bebas text-3xl text-white tracking-wide">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name Input */}
                  <div className="group">
                    <label className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-[#4a7c59] mb-2 block group-focus-within:text-white transition-colors">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-lora focus:outline-none focus:border-[#4a7c59] focus:bg-white/10 transition-all placeholder:text-gray-600"
                      placeholder="John Doe"
                    />
                  </div>
                  {/* Email Input */}
                  <div className="group">
                    <label className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-[#4a7c59] mb-2 block group-focus-within:text-white transition-colors">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-lora focus:outline-none focus:border-[#4a7c59] focus:bg-white/10 transition-all placeholder:text-gray-600"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="group">
                  <label className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-[#4a7c59] mb-2 block group-focus-within:text-white transition-colors">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-lora focus:outline-none focus:border-[#4a7c59] focus:bg-white/10 transition-all placeholder:text-gray-600"
                    placeholder="Tour Inquiry / Custom Package"
                  />
                </div>

                {/* Message Input */}
                <div className="group">
                  <label className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-[#4a7c59] mb-2 block group-focus-within:text-white transition-colors">Your Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-lora focus:outline-none focus:border-[#4a7c59] focus:bg-white/10 transition-all placeholder:text-gray-600 resize-none"
                    placeholder="Tell us about your dream expedition..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full md:w-auto flex items-center justify-center gap-3 bg-[#4a7c59] hover:bg-[#5d8c6d] text-white font-montserrat text-[11px] uppercase tracking-[0.2em] font-bold px-8 py-4 rounded-md transition-all shadow-lg hover:shadow-[#4a7c59]/40 hover:-translate-y-1"
                >
                  Send Message
                  <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>

            {/* --- INFO COLUMN (Span 5) --- */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-5 space-y-6"
            >
              
              {/* Info Card */}
              <div className="bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-md p-8 shadow-xl">
                <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
                  <div className="w-10 h-10 rounded-full bg-[#4a7c59]/10 flex items-center justify-center border border-[#4a7c59]/20">
                    <FaMapMarkerAlt className="text-[#4a7c59] text-sm" />
                  </div>
                  <h3 className="font-bebas text-3xl text-white tracking-wide">Headquarters</h3>
                </div>

                <div className="space-y-8">
                  {/* Location */}
                  <div className="group">
                    <span className="block font-montserrat text-[10px] uppercase tracking-[0.2em] text-[#4a7c59] mb-1">Office Location</span>
                    <p className="font-lora text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors">
                      123 Wildlife Lane, <br />Colombo 05, Sri Lanka
                    </p>
                  </div>

                  {/* Contacts */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="group">
                      <span className="block font-montserrat text-[10px] uppercase tracking-[0.2em] text-[#4a7c59] mb-1 flex items-center gap-2"><FaPhone className="text-[10px]"/> Phone</span>
                      <p className="font-lora text-gray-300 text-sm group-hover:text-white transition-colors">+94 76 123 4567</p>
                    </div>
                    <div className="group">
                      <span className="block font-montserrat text-[10px] uppercase tracking-[0.2em] text-[#4a7c59] mb-1 flex items-center gap-2"><FaEnvelope className="text-[10px]"/> Email</span>
                      <p className="font-lora text-gray-300 text-sm group-hover:text-white transition-colors">hello@ceylonwild.com</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="group border-t border-white/5 pt-6">
                    <span className="block font-montserrat text-[10px] uppercase tracking-[0.2em] text-[#4a7c59] mb-1 flex items-center gap-2"><FaClock className="text-[10px]"/> Operation Hours</span>
                    <div className="flex justify-between font-lora text-gray-300 text-sm">
                      <span>Mon - Fri</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between font-lora text-gray-300 text-sm">
                      <span>Weekend</span>
                      <span>9:00 AM - 1:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Socials Card */}
              <div className="bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-md p-8 shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <FaUsers className="text-[#4a7c59] text-xl" />
                    <h3 className="font-bebas text-2xl text-white tracking-wide">Follow Us</h3>
                  </div>
                  
                  <div className="flex gap-3">
                    {[FaInstagram, FaFacebook, FaTwitter].map((Icon, i) => (
                      <a 
                        key={i} 
                        href="#" 
                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-[#4a7c59] hover:border-[#4a7c59] transition-all duration-300"
                      >
                        <Icon className="text-sm" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default ContactPage;