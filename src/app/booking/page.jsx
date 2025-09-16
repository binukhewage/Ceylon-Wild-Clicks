"use client";
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendar, FaUsers, FaComment } from "react-icons/fa";
import { motion } from "framer-motion";
import { Bebas_Neue, Lora, Montserrat } from "next/font/google";
import Image from "next/image";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-bebas" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

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
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your booking request! We'll contact you shortly.");
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
        .form-input {
          background: rgba(13, 13, 12, 0.7);
          border: 1px solid rgba(74, 124, 89, 0.3);
          transition: all 0.3s ease;
        }
        .form-input:focus {
          outline: none;
          border-color: #4a7c59;
          box-shadow: 0 0 0 2px rgba(74, 124, 89, 0.2);
        }
      `}</style>

      {/* Hero Section */}
      <div className="relative h-[50vh] w-full overflow-hidden bg-black">
        <div className="absolute inset-0 wildlife-texture"></div>
        <Image
          src="/images/hp1.jpg" // Replace with your booking hero image
          alt="Wildlife photography booking"
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
            <span className="text-white">BOOK YOUR PHOTO </span>
            <span className="text-earth-green">TOUR</span>
          </motion.h1>
          <motion.p
            className="font-lora text-lg max-w-2xl text-gray-200 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Reserve your spot on an exclusive wildlife photography adventure in Sri Lanka's pristine national parks
          </motion.p>
        </div>
      </div>

      {/* Form Section */}
      <div className="relative pb-16 px-4 sm:px-6 lg:px-8 bg-black">
        {/* Decorative Gradient Blobs */}
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-earth-green/10 blur-3xl"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Form Container */}
          <motion.div 
            className="premium-card bg-[#0D0D0C] rounded-lg p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="relative">
                  <label htmlFor="name" className="font-montserrat text-sm text-earth-green-light mb-2 block">
                    Full Name :
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="text-earth-green/70" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input font-lora w-full pl-10 pr-3 py-3 rounded-md text-white placeholder-gray-500"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label htmlFor="email" className="font-montserrat text-sm text-earth-green-light mb-2 block">
                    Email Address :
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-earth-green/70" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input font-lora w-full pl-10 pr-3 py-3 rounded-md text-white placeholder-gray-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone Field */}
                <div className="relative">
                  <label htmlFor="phone" className="font-montserrat text-sm text-earth-green-light mb-2 block">
                    Phone Number :
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaPhone className="text-earth-green/70" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="form-input font-lora w-full pl-10 pr-3 py-3 rounded-md text-white placeholder-gray-500"
                      placeholder="+94 77 123 4567"
                    />
                  </div>
                </div>

                {/* Tour Selection */}
                <div className="relative">
                  <label htmlFor="tour" className="font-montserrat text-sm text-earth-green-light mb-2 block">
                    Select Tour :
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaMapMarkerAlt className="text-earth-green/70" />
                    </div>
                    <select
                      id="tour"
                      name="tour"
                      value={formData.tour}
                      onChange={handleChange}
                      required
                      className="form-input font-lora w-full pl-10 pr-3 py-3 rounded-md text-white appearance-none"
                    >
                      <option value="">Choose a tour</option>
                      <option value="northern">Northern Wild Trail - Tour 01</option>
                      <option value="southern">Southern Wild Trail - Tour 02</option>
                      <option value="custom">Customize Tour</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-earth-green/70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Participants */}
                <div className="relative">
                  <label htmlFor="participants" className="font-montserrat text-sm text-earth-green-light mb-2 block">
                    Number of Participants :
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUsers className="text-earth-green/70" />
                    </div>
                    <select
                      id="participants"
                      name="participants"
                      value={formData.participants}
                      onChange={handleChange}
                      required
                      className="form-input font-lora w-full pl-10 pr-3 py-3 rounded-md text-white appearance-none"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5">5 People</option>
                      <option value="6">6 People</option>
                      <option value="7+">7+ People (Custom Group)</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-earth-green/70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Start Date */}
                <div className="relative">
                  <label htmlFor="startDate" className="font-montserrat text-sm text-earth-green-light mb-2 block">
                    Preferred Start Date :
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaCalendar className="text-earth-green/70" />
                    </div>
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      className="form-input font-lora w-full pl-10 pr-3 py-3 rounded-md text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <label htmlFor="message" className="font-montserrat text-sm text-earth-green-light mb-2 block">
                  Additional Message
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3">
                    <FaComment className="text-earth-green/70" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="form-input font-lora w-full pl-10 pr-3 py-3 rounded-md text-white placeholder-gray-500"
                    placeholder="Tell us about your special requirements, or questions..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="pt-4"
              >
                <button
                  type="submit"
                  className="w-full bg-earth-green hover:bg-earth-green-accent text-white font-montserrat font-medium py-4 px-6 rounded-md transition-colors duration-300 uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <FaEnvelope className="text-sm" />
                  Submit Booking Request
                </button>
              </motion.div>

              {/* Privacy Note */}
              <p className="font-lora text-xs text-gray-500 text-center">
                Your information is secure and will only be used to process your booking request.
                We respect your privacy and never share your data with third parties.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;