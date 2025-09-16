import React from 'react'
import { FaInstagram, FaFacebook, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
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
  variable: "--font-montserrat"
});

const Footer = () => {
  return (
    <footer 
      className={`${bebas.variable} ${lora.variable} ${montserrat.variable} 
      relative pt-20 pb-10 px-4 sm:px-6 lg:px-8 border-t border-gray-900`}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#0a0a0a] to-black"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-gray-300">
        
        {/* Column 1: Brand Info & Socials */}
        <div className="space-y-5">
          <div className="flex items-center space-x-2">
            <span className="text-white font-bebas text-3xl tracking-tight">CEYLON WILD CLICKS</span>
          </div>
          <p className="font-lora text-sm text-gray-400 leading-relaxed">
            Immersive wildlife experiences in Sri Lanka's most breathtaking natural habitats. Professional photography tours and conservation advocacy.
          </p>
          <div className="flex space-x-4 pt-2">
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
              <FaInstagram className="text-lg" />
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
              <FaFacebook className="text-lg" />
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
              <FaYoutube className="text-lg" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-5">
          <h3 className="text-white font-bebas text-2xl tracking-tight">Quick Links</h3>
          <ul className="space-y-3 font-lora">
            {["Home", "Gallery", "Tours", "Conservation", "Blog"].map((link) => (
              <li key={link}>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Tours */}
        <div className="space-y-5">
          <h3 className="text-white font-bebas text-2xl tracking-tight">Our Tours</h3>
          <ul className="space-y-3 font-lora">
            {["Nothern Trial", "Southern Trial", "Custom Tours"].map((tour) => (
              <li key={tour}>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {tour}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="space-y-5">
          <h3 className="text-white font-bebas text-2xl tracking-tight">Contact Us</h3>
          <ul className="space-y-4 font-lora">
            <li className="flex items-start space-x-3">
              <FaPhone className="text-green-700 mt-1 flex-shrink-0 text-sm" />
              <span className="text-gray-400 text-sm">+94 76 123 4567</span>
            </li>
            <li className="flex items-start space-x-3">
              <FaEnvelope className="text-green-700 mt-1 flex-shrink-0 text-sm" />
              <span className="text-gray-400 text-sm">info@ceylonwildclicks.com</span>
            </li>
            <li className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-green-700 mt-1 flex-shrink-0 text-sm" />
              <span className="text-gray-400 text-sm">
                123 Wildlife Lane<br />
                Colombo 05, Sri Lanka
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative border-t border-gray-800 mt-14 pt-8 text-center">
        <p className="font-montserrat text-xs text-gray-500 uppercase tracking-wider">
          © {new Date().getFullYear()} CEYLON WILD CLICKS. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  )
}

export default Footer
