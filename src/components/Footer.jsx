import React from 'react'
import { FaInstagram, FaFacebook, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { FiCamera } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Column 1: Brand Info & Socials */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-white font-bold text-xl">CWC</span>
          </div>
          <p className="text-sm text-gray-400">
            Capturing the wild's untamed beauty through our lenses. Professional wildlife photography tours and conservation advocacy.
          </p>
          <div className="flex space-x-4 pt-2">
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition">
              <FaInstagram className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition">
              <FaFacebook className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition">
              <FaYoutube className="text-xl" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold text-lg">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Gallery</a></li>
            <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Tours</a></li>
            <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Portraits</a></li>
            <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Blog</a></li>
          </ul>
        </div>

        {/* Column 3: Tours */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold text-lg">Our Tours</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Birdwatching Expeditions</a></li>
            <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Northern Trails</a></li>
            <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Southern Trails</a></li>
            <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Custom Tours</a></li>
            <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Conservation Safaris</a></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold text-lg">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <FaPhone className="text-emerald-400 mt-1 flex-shrink-0" />
              <span className="text-gray-400">+1 (555) 123-4567</span>
            </li>
            <li className="flex items-start space-x-3">
              <FaEnvelope className="text-emerald-400 mt-1 flex-shrink-0" />
              <span className="text-gray-400">contact@cwcaptures.com</span>
            </li>
            <li className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-emerald-400 mt-1 flex-shrink-0" />
              <span className="text-gray-400">
                123 Wilderness Way<br />
                Forest Hills, NC 28734
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Ceylon Wild Clicks. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer