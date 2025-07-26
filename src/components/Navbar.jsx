"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaCamera, FaSafari } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Professional color palette
  const colors = {
    darkGreen: "#0a2e1a",
    mediumGreen: "#14532d",
    accentGreen: "#22c55e",
    lightText: "#f0fdf4",
    darkText: "#1a2e05",
    jetBlack: "#0d0d0d",
    charcoal: "#1a1a1a"
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "Tours", path: "/tours" },
    { name: "Portraits", path: "/portraits" },
    { name: "Journal", path: "/journal" },
    {
      name: "About",
      path: "#",
      subItems: [
        { name: "Our Story", path: "/about" },
        { name: "Contact Us", path: "/contact" },
      ],
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`fixed w-full z-50 ${
        scrolled ? "bg-black/95 backdrop-blur-md shadow-xl" : "bg-transparent"
      } transition-all duration-300 border-b ${
        scrolled ? "border-[#14532d]/30" : "border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.span
              className="font-medium text-xl tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <span className="text-gray-200">CEYLON</span>
              <span className="text-[#22c55e]"> WILD</span>
              <span className="text-gray-200"> CLICKS</span>
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative h-full flex items-center"
              >
                {item.subItems ? (
                  <div
                    className="px-4 py-2 cursor-pointer relative group h-full flex items-center"
                    onMouseEnter={() => setActiveTab(item.name)}
                    onMouseLeave={() => setActiveTab("")}
                  >
                    <span
                      className={`flex items-center text-gray-300 hover:text-[#22c55e] transition-colors text-sm tracking-wide ${
                        activeTab === item.name ? "text-[#22c55e]" : ""
                      }`}
                    >
                      {item.name}
                      <motion.span
                        animate={{ rotate: activeTab === item.name ? 180 : 0 }}
                        className="ml-1 text-xs mt-0.5"
                      >
                        ▼
                      </motion.span>
                    </span>

                    <AnimatePresence>
                      {activeTab === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{
                            type: "spring",
                            damping: 25,
                            stiffness: 300,
                          }}
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-56 bg-[#0d0d0d] rounded-lg shadow-2xl border border-[#1a1a1a] overflow-hidden"
                        >
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.path}
                              className="block px-4 py-3 text-gray-300 hover:bg-[#1a1a1a] hover:text-[#22c55e] transition-colors text-sm border-b border-[#1a1a1a] last:border-0 flex items-center group"
                            >
                              <span className="w-2 h-2 rounded-full bg-[#22c55e] mr-3 group-hover:scale-110 transition-transform"></span>
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className="px-4 py-2 relative h-full flex items-center"
                  >
                    <motion.span
                      className="text-gray-300 hover:text-[#22c55e] transition-colors text-sm tracking-wide relative"
                      whileHover={{ color: "#22c55e" }}
                    >
                      {item.name}
                      <motion.span
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        className="absolute bottom-0 left-0 w-full h-px bg-[#22c55e] origin-left"
                        transition={{ duration: 0.3 }}
                      />
                    </motion.span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Book Now Button */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="hidden lg:block"
          >
            <Link
              href="/booking"
              className="flex items-center space-x-2 bg-gradient-to-r from-[#14532d] to-[#22c55e] text-white px-5 py-2.5 rounded-md shadow-lg hover:shadow-[#22c55e]/20 transition-all text-sm tracking-wide"
            >
              <FaSafari className="text-xs" />
              <span>BOOK TOUR</span>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-300 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="space-y-1.5 w-6">
              <motion.span
                animate={
                  mobileMenuOpen
                    ? { rotate: 45, y: 6, backgroundColor: "#22c55e" }
                    : { rotate: 0, backgroundColor: "#f0fdf4" }
                }
                className="block h-0.5 w-full rounded-full"
              ></motion.span>
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-0.5 w-full rounded-full"
              ></motion.span>
              <motion.span
                animate={
                  mobileMenuOpen
                    ? {
                        rotate: -45,
                        y: -6,
                        backgroundColor: "#22c55e",
                      }
                    : { rotate: 0, backgroundColor: "#f0fdf4" }
                }
                className="block h-0.5 w-full rounded-full"
              ></motion.span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-[#0d0d0d] pt-28 px-6 z-40"
          >
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="border-b border-[#1a1a1a] pb-4"
                >
                  {item.subItems ? (
                    <div>
                      <button
                        onClick={() =>
                          setActiveTab(activeTab === item.name ? "" : item.name)
                        }
                        className="flex items-center justify-between w-full text-gray-300 hover:text-[#22c55e] text-lg"
                      >
                        {item.name}
                        <span
                          className={`transition-transform ${
                            activeTab === item.name ? "rotate-180" : ""
                          }`}
                        >
                          ▼
                        </span>
                      </button>

                      {activeTab === item.name && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          className="pl-4 mt-3 space-y-3 overflow-hidden"
                        >
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.path}
                              className="block text-gray-400 hover:text-[#22c55e] py-1.5 text-sm flex items-center"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] mr-3"></span>
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.path}
                      className="block text-gray-300 hover:text-[#22c55e] text-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              <motion.div whileHover={{ scale: 1.02 }} className="mt-8">
                <Link
                  href="/booking"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#14532d] to-[#22c55e] text-white px-6 py-3 rounded-md text-sm tracking-wide"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FaSafari />
                  <span>BOOK WILDLIFE TOUR</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;