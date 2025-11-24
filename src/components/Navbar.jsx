"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { FaSafari, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "/public/images/cwc1.png"; // Assuming this path is correct
import { Montserrat } from "next/font/google"; 

// --- Font Setup for premium look ---
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Navbar = () => {
  const [activePath, setActivePath] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null); 

  // Earthy premium color palette (using the same as the improved Home component)
  const colors = {
    primary: "#8c8c69", // Desaturated Gold/Olive
    backgroundDark: "#0A0A0A", // Near black
    backgroundTransparent: "rgba(10, 10, 10, 0.95)",
    border: "#181818",
  };

  useEffect(() => {
    // 1. Set active path based on window location (for initial load)
    if (typeof window !== 'undefined') {
        setActivePath(window.location.pathname);
    }
    
    // 2. Handle scroll logic
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // More aggressive scroll threshold
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "GALLERY", path: "/gallery" },
    { name: "TOURS", path: "/tours" },
    { name: "DESTINATIONS", path: "/destinations" },
    { name: "PRINTS", path: "/prints" },
    { name: "BLOG", path: "/blog" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  const handleMobileLinkClick = (path) => {
    setActivePath(path);
    setMobileMenuOpen(false);
  };
  
  // Mobile drawer variants
  const mobileMenuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
    exit: { x: "100%", transition: { duration: 0.3 } },
  };

  // Mobile link stagger variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      className={`${montserrat.className} fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? `bg-[${colors.backgroundTransparent}] backdrop-blur-md shadow-2xl shadow-black/30 border-b border-[${colors.border}]`
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Tailwind CSS arbitrary value fix for static class detection */}
      <div className="hidden bg-[#8c8c69] hover:bg-[#727253] text-[#8c8c69]"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Navbar Height is h-24 (96px) */}
        <div className="flex justify-between items-center h-24">
          
          {/* Logo Container (Left) - UPDATED FOR FULL HEIGHT */}
          <Link href="/" className="flex items-center h-full"> {/* h-full on Link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex items-center h-full" // h-full on motion.div
            >
              <Image
                src={logo}
                alt="Ceylon Wild Clicks Logo"
                priority
                // Updated Image classes: h-full makes it fill the container's height (96px).
                // object-contain ensures it scales without cropping. Removed negative translate.
                className="object-contain w-auto h-[140px] lg:h-[200px] transition-all duration-300"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation (Center) */}
          <div ref={navRef} className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activePath === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setActivePath(item.path)}
                  className="px-4 py-2 relative h-full flex items-center transition-colors duration-300"
                >
                  <motion.span
                    className={`text-xs tracking-widest font-medium relative uppercase ${
                      isActive ? 'text-white' : 'text-white'
                    }`}
                    whileHover={{ color: colors.primary }}
                  >
                    {item.name}
                    
                    {/* Premium Active Pill Indicator */}
                    {isActive && (
                        <motion.span
                            layoutId="activePill"
                            className="absolute inset-0 bg-white/5 rounded-full -m-1 -z-10 mix-blend-lighten"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    )}
                  </motion.span>
                </Link>
              );
            })}
          </div>

          {/* Book Now Button (Right) */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:block ml-4"
          >
            <Link
              href="/booking"
              className={`flex items-center space-x-2 text-white font-bold px-5 py-3 rounded-sm shadow-xl transition-all duration-300 text-sm tracking-widest uppercase `}
              style={{
                background: "linear-gradient(to right, #4a7c59, #8a9b68)",
              }}
            >
              <FaSafari className="text-base" />
              <span>BOOK TOUR</span>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white focus:outline-none p-3 rounded-full hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <FaTimes className="w-5 h-5 text-white" />
            ) : (
              <FaBars className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`lg:hidden fixed inset-0 w-full bg-[${colors.backgroundDark}] z-40 pt-24 shadow-2xl`}
          >
            <motion.div
                className="flex flex-col space-y-2 p-6"
                initial="hidden"
                animate="visible"
                variants={{
                    visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
                }}
            >
              {navItems.map((item) => (
                <motion.div 
                    key={item.name} 
                    className={`border-b border-[${colors.border}]`}
                    variants={itemVariants}
                >
                  <Link
                    href={item.path}
                    className={`block py-3 text-xl uppercase tracking-widest transition-colors ${
                      activePath === item.path ? `text-[#8c8c69] font-bold` : 'text-gray-300 hover:text-white'
                    }`}
                    onClick={() => handleMobileLinkClick(item.path)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Book Tour Button */}
              <motion.div whileHover={{ scale: 1.02 }} className="mt-8 pt-4" variants={itemVariants}>
                <Link
                  href="/booking"
                  className={`flex items-center justify-center space-x-2 text-black font-bold px-6 py-3 rounded-sm text-sm tracking-wide uppercase bg-[#8c8c69] hover:bg-[#727253] transition-colors shadow-lg`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FaSafari />
                  <span>BOOK WILDLIFE TOUR</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;