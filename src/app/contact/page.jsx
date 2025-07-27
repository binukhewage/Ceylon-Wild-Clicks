"use client";
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Bebas_Neue, Lora, Montserrat } from "next/font/google";

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
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className={`${bebas.variable} ${lora.variable} ${montserrat.variable} bg-black text-gray-300 min-h-screen py-15`}>
      {/* Hero Section - Compact */}
      <div className="relative py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-montserrat text-xs uppercase tracking-[0.3em] text-emerald-400">
              Connect With Us
            </span>
            <h1 className="font-bebas text-4xl sm:text-5xl text-white mt-2 tracking-tight">
              CONTACT <span className="text-emerald-400">OUR TEAM</span>
            </h1>
            <p className="font-lora text-gray-400 max-w-2xl mx-auto mt-3 text-sm">
              Our wildlife experts are ready to craft your perfect Sri Lankan adventure.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gray-900/90 p-8 rounded-lg border border-gray-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-emerald-500/20 p-2 rounded-full">
                  <FaPaperPlane className="text-emerald-400 text-base" />
                </div>
                <h2 className="font-bebas text-2xl text-white">SEND A MESSAGE</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="font-montserrat text-xs uppercase tracking-wider text-gray-400 block mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 focus:border-emerald-500 focus:outline-none text-white font-lora text-sm rounded-sm"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="font-montserrat text-xs uppercase tracking-wider text-gray-400 block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 focus:border-emerald-500 focus:outline-none text-white font-lora text-sm rounded-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="font-montserrat text-xs uppercase tracking-wider text-gray-400 block mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 focus:border-emerald-500 focus:outline-none text-white font-lora text-sm rounded-sm"
                    placeholder="Tour inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="font-montserrat text-xs uppercase tracking-wider text-gray-400 block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 focus:border-emerald-500 focus:outline-none text-white font-lora text-sm rounded-sm"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="font-montserrat text-sm text-white bg-emerald-600 hover:bg-emerald-500 px-6 py-3 rounded-sm transition-colors uppercase tracking-wider w-full flex items-center justify-center gap-2"
                >
                  <FaPaperPlane className="text-xs" />
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-900/90 p-8 rounded-lg border border-gray-800 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-emerald-500/20 p-2 rounded-full">
                  <FaMapMarkerAlt className="text-emerald-400 text-base" />
                </div>
                <h2 className="font-bebas text-2xl text-white">OUR DETAILS</h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-500/20 p-2 rounded-full mt-0.5">
                    <FaPhone className="text-emerald-400 text-xs" />
                  </div>
                  <div>
                    <h3 className="font-bebas text-lg text-white">Phone</h3>
                    <p className="font-lora text-gray-400 text-xs mt-1">+94 76 123 4567</p>
                    <p className="font-lora text-gray-400 text-xs">+94 11 234 5678</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-500/20 p-2 rounded-full mt-0.5">
                    <FaEnvelope className="text-emerald-400 text-xs" />
                  </div>
                  <div>
                    <h3 className="font-bebas text-lg text-white">Email</h3>
                    <p className="font-lora text-gray-400 text-xs mt-1">contact@ceylonwild.com</p>
                    <p className="font-lora text-gray-400 text-xs">bookings@ceylonwild.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-500/20 p-2 rounded-full mt-0.5">
                    <FaMapMarkerAlt className="text-emerald-400 text-xs" />
                  </div>
                  <div>
                    <h3 className="font-bebas text-lg text-white">Office</h3>
                    <p className="font-lora text-gray-400 text-xs mt-1">
                      123 Wildlife Lane, Colombo 05, Sri Lanka
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-500/20 p-2 rounded-full mt-0.5">
                    <FaClock className="text-emerald-400 text-xs" />
                  </div>
                  <div>
                    <h3 className="font-bebas text-lg text-white">Hours</h3>
                    <p className="font-lora text-gray-400 text-xs mt-1">Mon-Fri: 9AM - 6PM</p>
                    <p className="font-lora text-gray-400 text-xs">Sat: 9AM - 1PM</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;