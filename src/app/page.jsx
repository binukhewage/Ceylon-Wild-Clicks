"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaSafari, FaCamera, FaPaw, FaExpand } from "react-icons/fa";
import { Bebas_Neue, Lora } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHoveringCard, setIsHoveringCard] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [viewerImage, setViewerImage] = useState("");

  const slides = [
    { id: 1, src: "/images/lep.jpg", alt: "Sri Lankan leopard in the wild" },
  ];

  const cards = [
    {
      id: 1,
      title: "Wildlife Tours",
      subtitle: "Expert-guided safari adventures",
      icon: <FaSafari className="text-2xl" />,
      image: "/images/safari.jpg",
      link: "/tours",
      stats: "98% Success Rate",
      description: "Our expert trackers ensure you witness Sri Lanka's most spectacular wildlife moments"
    },
    {
      id: 2,
      title: "Gallery",
      subtitle: "Stunning wildlife photography",
      icon: <FaCamera className="text-2xl" />,
      image: "/images/gallery.jpg",
      link: "/gallery",
      stats: "10,000+ Images",
      description: "Award-winning photography from our team of professional wildlife photographers"
    },
    {
      id: 3,
      title: "Animal Portraits",
      subtitle: "Protecting Sri Lanka's wildlife",
      icon: <FaPaw className="text-2xl" />,
      image: "/images/portrait.jpg",
      link: "/conservation",
      stats: "15+ Projects",
      description: "Directly supporting wildlife conservation efforts across the island"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const openViewer = (src) => {
    setViewerImage(src);
    setIsViewerOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeViewer = () => {
    setIsViewerOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className={`${bebas.variable} ${lora.variable}`}>
      {/* Hero Carousel Section */}
      <div className="relative h-screen max-h-[900px] w-full overflow-hidden bg-black">
        {/* Slides */}
        <div className="relative h-full w-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover object-center"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center text-center px-4 z-10 pt-[30%]">
          <motion.h1
            className="font-bebas text-4xl md:text-6xl lg:text-7xl text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            CEYLON <span className="text-emerald-400">WILD CLICKS</span>
          </motion.h1>

          <motion.p
            className="font-lora text-base md:text-xl lg:text-2xl text-gray-300 mt-3 max-w-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Explore. Capture. Cherish Sri Lanka's Untamed Beauty
          </motion.p>

          <motion.div
            className="flex gap-3 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link
              href="/gallery"
              className="bg-gradient-to-r from-[#14532d] to-[#22c55e] hover:from-[#1e7e34] hover:to-[#2dd45d] text-white font-medium py-2.5 px-5 rounded-md shadow-lg hover:shadow-emerald-500/30 transition-all text-sm md:text-base"
            >
              View Gallery
            </Link>
            <Link
              href="/tours"
              className="border-2 border-white hover:border-emerald-400 text-white hover:text-emerald-400 py-2.5 px-5 rounded-md transition-all text-sm md:text-base"
            >
              Our Tours
            </Link>
          </motion.div>
        </div>

        {/* Navigation dots */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide
                  ? "bg-emerald-400"
                  : "bg-white bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Services Section */}
      <div className="relative bg-gradient-to-b from-black to-gray-900 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1.5 bg-emerald-500/20 rounded-full border border-emerald-500/30 mb-4">
              <span className="font-lora text-xs uppercase tracking-widest text-emerald-300">What We Offer</span>
            </div>
            <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-white">
              OUR <span className="text-emerald-400">SERVICES</span>
            </h2>
            <p className="font-lora text-gray-400 max-w-2xl mx-auto mt-4">
              Immersive wildlife experiences designed by experts with decades of field knowledge
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card) => (
              <motion.div
                key={card.id}
                className="group relative overflow-hidden rounded-2xl aspect-[3/4]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                onMouseEnter={() => setIsHoveringCard(card.id)}
                onMouseLeave={() => setIsHoveringCard(null)}
                style={{
                  transform: isHoveringCard === card.id ? 
                    'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1.05)' : 
                    'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
                  transition: 'transform 0.5s cubic-bezier(0.17, 0.67, 0.83, 0.67)'
                }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                
                <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center">
                  <div className="absolute top-8 right-8">
                    <button 
                      onClick={() => openViewer(card.image)}
                      className="p-2 rounded-full bg-black/50 hover:bg-emerald-500/80 transition-colors text-white"
                    >
                      <FaExpand className="text-sm" />
                    </button>
                  </div>
                  
                  <h3 className="font-bebas text-3xl text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {card.title}
                  </h3>
                  
                  <p className="font-lora text-gray-300 mb-4">
                    {card.subtitle}
                  </p>
                  
                  <div className="font-lora text-xs text-emerald-300 mb-4 border border-emerald-300/30 px-3 py-1 rounded-full">
                    {card.stats}
                  </div>
                  
                  <p className="font-lora text-sm text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {card.description}
                  </p>
                  
                  <Link
                    href={card.link}
                    className="font-lora text-white hover:text-emerald-400 transition-colors text-sm uppercase tracking-wider flex items-center gap-2 group"
                  >
                    <span>Explore More</span>
                    <span className="inline-block group-hover:translate-x-1 transition-transform">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating Elements for Background */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl"></div>
      </div>

      {/* Image Viewer Modal */}
      {isViewerOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeViewer}>
          <button 
            className="absolute top-8 right-8 text-white text-2xl z-50"
            onClick={closeViewer}
          >
            &times;
          </button>
          <div className="relative max-w-6xl w-full h-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={viewerImage}
              alt="Expanded view"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;