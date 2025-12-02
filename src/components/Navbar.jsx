"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { FaSafari, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "/public/images/cwc1.png";
import { Bebas_Neue, Lora, Montserrat } from "next/font/google";

// --- Premium Font Setup ---
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
  weight: ["400", "500", "700"],
  variable: "--font-montserrat",
});

const Navbar = () => {
  const [activePath, setActivePath] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActivePath(window.location.pathname);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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

  // Mobile Menu Animations
  const mobileMenuVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
    exit: { x: "100%", transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      className={`${bebas.variable} ${lora.variable} ${
        montserrat.variable
      } fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md shadow-2xl shadow-black/30 border-b border-[#181818]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center h-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex items-center h-full"
            >
              <Image
                src={logo}
                alt="Ceylon Wild Clicks Logo"
                priority
                className="object-contain w-auto h-[140px] lg:h-[200px] transition-all duration-300"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div ref={navRef} className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activePath === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setActivePath(item.path)}
                  className="px-4 py-2 relative h-full flex items-center group"
                >
                  <span
                    className={`font-montserrat text-[11px] tracking-[0.2em] font-bold relative uppercase transition-colors duration-300 ${
                      isActive ? "text-[#4a7c59]" : "text-white/80 group-hover:text-white"
                    }`}
                  >
                    {item.name}
                    
                    {/* Updated Active State: Glowing Underline */}
                    {isActive && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#4a7c59] shadow-[0_0_10px_#4a7c59]"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Desktop Book Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:block ml-4"
          >
            <Link
              href="/booking"
              className="font-montserrat flex items-center space-x-2 text-white px-5 py-3 rounded-md shadow-xl transition-all duration-300 text-[12px] tracking-widest uppercase border border-white/10 hover:border-[#4a7c59]"
              style={{
                background: "linear-gradient(135deg, rgba(74,124,89,0.8) 0%, rgba(74,124,89,0.4) 100%)",
                backdropFilter: "blur(10px)"
              }}
            >
              <FaSafari className="text-md" />
              <span>BOOK TOUR</span>
            </Link>
          </motion.div>

          {/* Mobile Toggle Button */}
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

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden fixed inset-0 w-full bg-black/95 backdrop-blur-md z-50 pt-20 shadow-2xl"
          >
            {/* Close Button INSIDE the Drawer */}
            <button
              className="absolute top-6 right-6 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaTimes className="w-6 h-6" />
            </button>

            {/* Mobile Links */}
            <motion.div
              className="flex flex-col space-y-2 p-6 mt-8"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.07, delayChildren: 0.2 },
                },
              }}
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  className="border-b border-[#181818]"
                  variants={itemVariants}
                >
                  <Link
                    href={item.path}
                    className={`font-montserrat block py-3 text-xl uppercase tracking-widest transition-colors flex justify-between items-center ${
                      activePath === item.path
                        ? "text-[#4a7c59] font-bold"
                        : "text-gray-300 hover:text-white"
                    }`}
                    onClick={() => {
                      setActivePath(item.path);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {item.name}
                    {activePath === item.path && (
                       <span className="w-2 h-2 rounded-full bg-[#4a7c59] shadow-[0_0_10px_#4a7c59]"></span>
                    )}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Book Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="mt-8 pt-4"
                variants={itemVariants}
              >
                <Link
                  href="/booking"
                  className="font-montserrat flex items-center justify-center space-x-2 text-white font-bold px-6 py-4 rounded-full text-sm tracking-wide uppercase bg-[#4a7c59] hover:bg-[#5d8c6d] transition-colors shadow-lg"
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