import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from "/public/images/cwc.png" 
import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp, FaArrowRight } from 'react-icons/fa'
import { Kolker_Brush, Lora, Montserrat } from "next/font/google";

// --- Font Setup (Matching Hero/Nav) ---
const kolker = Kolker_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-kolker",
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
      className={`${kolker.variable} ${lora.variable} ${montserrat.variable} 
      relative pt-32 pb-10 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden`}
    >
      {/* 1. Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#4a7c59] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#4a7c59] rounded-full mix-blend-screen filter blur-[150px] opacity-5 pointer-events-none translate-y-1/2"></div>

      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Column 1: Brand Identity (Span 4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="block">
              <Image
                src={logo}
                alt="Ceylon Wild Clicks"
                className="w-20 h-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>

            <p className="font-lora text-gray-400 text-sm leading-7 max-w-sm">
              We curate immersive expeditions into Sri Lanka's untouched wilderness. 
              Where luxury meets the raw, untamed soul of nature.
            </p>

            <div className="flex gap-4">
              {[FaInstagram, FaFacebook, FaYoutube].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#4a7c59] hover:border-[#4a7c59] transition-all duration-300 group"
                >
                  <Icon className="text-sm group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Explore (Span 2 cols) */}
          <div className="lg:col-span-2 lg:pl-8">
            <h3 className="font-montserrat text-xs uppercase tracking-[0.2em] text-[#4a7c59] mb-8 font-bold">
              Explore
            </h3>
            <ul className="space-y-4">
              {["Home", "Gallery", "Our Story", "Tours"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 font-lora text-sm">
                    <span className="w-0 h-[1px] bg-[#4a7c59] group-hover:w-4 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Expeditions (Span 3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-montserrat text-xs uppercase tracking-[0.2em] text-[#4a7c59] mb-8 font-bold">
              Expeditions
            </h3>
            <ul className="space-y-4">
              {["Pulli Trail", "Kurulu Trail", "Urumaya Trail", "Luxury Tours"].map((item) => (
                <li key={item}>
                  <Link href="/tours" className="group flex items-center justify-between text-gray-400 hover:text-white transition-colors duration-300 font-lora text-sm border-b border-white/5 pb-2 hover:border-[#4a7c59]/50">
                    {item}
                    <FaArrowRight className="text-[10px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#4a7c59]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact (Span 3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-montserrat text-xs uppercase tracking-[0.2em] text-[#4a7c59] mb-8 font-bold">
              Get in Touch
            </h3>
            <div className="space-y-6 font-lora text-sm text-gray-400">
              <p className="leading-relaxed">
                <span className="block text-white mb-1 font-montserrat text-xs uppercase tracking-wide">Headquarters</span>
                No. 123, Wildlife Lane,<br />Colombo 05, Sri Lanka
              </p>
              
              <div>
                 <span className="block text-white mb-1 font-montserrat text-xs uppercase tracking-wide">Inquiries</span>
                 <a href="mailto:hello@ceylonwild.com" className="hover:text-[#4a7c59] transition-colors">hello@ceylonwild.com</a>
              </div>

              <a 
                href="https://wa.me/94761234567" 
                className="inline-flex items-center gap-2 text-white border border-white/20 px-6 py-3 rounded-full hover:bg-[#4a7c59] hover:border-[#4a7c59] transition-all duration-300 text-xs font-montserrat tracking-widest uppercase"
              >
                <FaWhatsapp className="text-lg" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Big Watermark Text */}
        <div className="relative border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-end">
           <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none">
              <span className="font-kolker text-[12rem] md:text-[18rem] leading-none text-white whitespace-nowrap">
                CEYLON WILD
              </span>
           </div>

           <p className="font-montserrat text-[10px] text-gray-600 uppercase tracking-widest">
            © {new Date().getFullYear()} Ceylon Wild Escapes.
          </p>
           
           <div className="flex gap-6 mt-4 md:mt-0 relative z-10">
              <Link href="/privacy" className="font-montserrat text-[10px] text-gray-600 hover:text-white uppercase tracking-widest transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="font-montserrat text-[10px] text-gray-600 hover:text-white uppercase tracking-widest transition-colors">
                Terms of Use
              </Link>
           </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer