"use client";
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaInstagram, FaFacebook, FaTwitter, FaSafari, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';
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
      `}</style>

      {/* Hero Section */}
      <div className="relative h-96 w-full overflow-hidden bg-black">
        <div className="absolute inset-0 wildlife-texture"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/hero1.jpg"
            alt="Contact us for wildlife adventures"
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
            CONNECT WITH <span className="text-earth-green">US</span>
          </motion.h1>
          <motion.p
            className="font-lora text-lg max-w-2xl text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Connect with us to plan your unforgettable wildlife adventure
          </motion.p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="relative bg-black pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden wildlife-texture">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              style={{ backgroundColor: '#0D0D0C' }}
              className=" backdrop-blur-sm rounded-sm p-8 border border-gray-800"
            >
              <div className="flex items-center mb-8">
                <div className="bg-earth-green/10 p-3 rounded-sm mr-4">
                  <FaPaperPlane className="text-earth-green text-xl" />
                </div>
                <h3 className="font-bebas text-2xl text-white">SEND US A MESSAGE</h3>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="font-montserrat text-xs uppercase tracking-wider block mb-2 text-gray-400">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-sm text-white text-sm font-lora focus:outline-none focus:border-earth-green/50 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="font-montserrat text-xs uppercase tracking-wider block mb-2 text-gray-400">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-sm text-white text-sm font-lora focus:outline-none focus:border-earth-green/50 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="font-montserrat text-xs uppercase tracking-wider block mb-2 text-gray-400">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-sm text-white text-sm font-lora focus:outline-none focus:border-earth-green/50 transition-colors"
                    placeholder="Tour inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="font-montserrat text-xs uppercase tracking-wider block mb-2 text-gray-400">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-sm text-white text-sm font-lora focus:outline-none focus:border-earth-green/50 transition-colors"
                    placeholder="Tell us about your wildlife adventure plans..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="font-montserrat text-sm text-white bg-earth-green hover:bg-earth-green-accent px-6 py-3 rounded-sm transition-colors uppercase tracking-wider w-full flex items-center justify-center gap-2"
                >
                  <FaPaperPlane className="text-xs" />
                  SEND MESSAGE
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
              style={{ backgroundColor: '#0D0D0C' }}
            >
              {/* Contact Details */}
              <div className=" backdrop-blur-sm rounded-sm p-8 border border-gray-800">
                <div className="flex items-center mb-8">
                  <div className="bg-earth-green/10 p-3 rounded-sm mr-4">
                    <FaMapMarkerAlt className="text-earth-green text-xl" />
                  </div>
                  <h3 className="font-bebas text-2xl text-white">CONTACT DETAILS</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-earth-green/10 p-3 rounded-sm mt-0.5">
                      <FaPhone className="text-earth-green text-sm" />
                    </div>
                    <div>
                      <h4 className="font-bebas text-lg text-white mb-1">Phone</h4>
                      <p className="font-lora text-gray-300 text-sm">+94 76 123 4567</p>
                      <p className="font-lora text-gray-300 text-sm">+94 11 234 1234</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-earth-green/10 p-3 rounded-sm mt-0.5">
                      <FaEnvelope className="text-earth-green text-sm" />
                    </div>
                    <div>
                      <h4 className="font-bebas text-lg text-white mb-1">Email</h4>
                      <p className="font-lora text-gray-300 text-sm">contact@ceylonwildclicks.com</p>
                      <p className="font-lora text-gray-300 text-sm">bookings@ceylonwildclicks.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-earth-green/10 p-3 rounded-sm mt-0.5">
                      <FaMapMarkerAlt className="text-earth-green text-sm" />
                    </div>
                    <div>
                      <h4 className="font-bebas text-lg text-white mb-1">Office</h4>
                      <p className="font-lora text-gray-300 text-sm">123 Wildlife Lane, Colombo 05, Sri Lanka</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-earth-green/10 p-3 rounded-sm mt-0.5">
                      <FaClock className="text-earth-green text-sm" />
                    </div>
                    <div>
                      <h4 className="font-bebas text-lg text-white mb-1">Hours</h4>
                      <p className="font-lora text-gray-300 text-sm">Mon-Fri: 9AM - 6PM</p>
                      <p className="font-lora text-gray-300 text-sm">Sat: 9AM - 1PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-[#0D0D0C] backdrop-blur-sm rounded-sm p-8 border border-gray-800">
                <div className="flex items-center mb-6">
                  <div className="bg-earth-green/10 p-3 rounded-sm mr-4">
                    <FaUsers className="text-earth-green text-xl" />
                  </div>
                  <h3 className="font-bebas text-2xl text-white">FOLLOW US</h3>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 rounded-full bg-earth-green/10 hover:bg-earth-green/20 border border-earth-green/20 flex items-center justify-center transition-all duration-300 group">
                    <FaInstagram className="text-earth-green group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-earth-green/10 hover:bg-earth-green/20 border border-earth-green/20 flex items-center justify-center transition-all duration-300 group">
                    <FaFacebook className="text-earth-green group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-earth-green/10 hover:bg-earth-green/20 border border-earth-green/20 flex items-center justify-center transition-all duration-300 group">
                    <FaTwitter className="text-earth-green group-hover:scale-110 transition-transform" />
                  </a>
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
};

export default ContactPage;
