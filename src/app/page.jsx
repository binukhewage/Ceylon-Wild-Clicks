"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaSafari,
  FaCamera,
  FaPaw,
  FaExpand,
  FaChevronLeft,
  FaChevronRight,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { Bebas_Neue, Lora, Montserrat, Kolker_Brush } from "next/font/google";
import { Star } from "lucide-react";

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

const kolker = Kolker_Brush({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kolker",
});

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [isHoveringCard, setIsHoveringCard] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [viewerImage, setViewerImage] = useState("");
  const [currentDestinationSlide, setCurrentDestinationSlide] = useState(0);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const slides = [
    {
      id: 1,
      src: "/videos/homevideo.mp4",
      alt: "Sri Lankan leopard in the wild",
    },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Roshan Peiris",
      role: "Lead Photographer & Founder",
      bio: "I'm Roshan Peiris, a Sri Lankan wildlife and nature photographer. Since 2019, my passion for capturing Sri Lanka's untamed beauty has grown into a full-time pursuit. After dedicating myself entirely to wildlife photography in 2024, I now guide wildlife photo safaris to share the magical experience of nature with enthusiasts.",
      image: "/images/roshan.JPG",
      social: {
        instagram: "https://instagram.com/roshan",
        facebook: "https://facebook.com/roshan",
        twitter: "https://twitter.com/roshan",
      },
    },
  ];

  const cards = [
    {
      id: 1,
      title: "Wildlife Tours",
      subtitle: "Expert-guided safari adventures",
      icon: <FaSafari className="text-xl" />,
      image: "/images/safari.jpg",
      link: "/tours",
      stats: "98% Success Rate",
      description:
        "Our expert trackers ensure you witness Sri Lanka's most spectacular wildlife moments",
    },
    {
      id: 2,
      title: "Gallery",
      subtitle: "Stunning wildlife photography",
      icon: <FaCamera className="text-xl" />,
      image: "/images/bird.jpg",
      link: "/gallery",
      stats: "10,000+ Images",
      description:
        "Award-winning photography from our team of professional wildlife photographers",
    },
    {
      id: 3,
      title: "Prints",
      subtitle: "Intimate close-ups of nature's wonders",
      icon: <FaPaw className="text-xl" />,
      image: "/images/portrait.jpg",
      link: "/prints",
      stats: "15+ Projects",
      description:
        "Discover powerful portraits of wildlife,Support our work by owning a piece of high-quality prints.",
    },
  ];

  const destinations = [
    [
      {
        id: 1,
        name: "Wilpattu National Park",
        image: "/images/wilpattu-dd.jpg",
        description: "Sri Lanka's largest national park with natural lakes",
        link: "/destinations/1",
      },
      {
        id: 2,
        name: "Horton Plains",
        image: "/images/hp-d.jpeg",
        description: "Famous for World's End and rich biodiversity",
        link: "/destinations/2",
      },
      {
        id: 3,
        name: "Sinharaja Rain Forest",
        image: "/images/sinharaja-d.webp",
        description: "UNESCO World Heritage Site with endemic species",
        link: "/destinations/3",
      },
    ],
    [
      {
        id: 4,
        name: "Kumana National Park",
        image: "/images/kumana-d.jpg",
        description: "Known for birdwatching and diverse wildlife",
        link: "/destinations/4",
      },
      {
        id: 5,
        name: "Yala National Park",
        image: "/images/yala.jpg",
        description: "Home to the highest density of leopards in the world",
        link: "/destinations/5",
      },
      {
        id: 6,
        name: "Minneriya National Park",
        image: "/images/minneriya.jpg",
        description: "Famous for the elephant gathering during dry season",
        link: "/destinations/6",
      },
    ],
  ];

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Wildlife Photographer",
      rating: 5,
      text: "The leopard sightings were beyond anything I could have imagined. The guides' knowledge was exceptional.",
      image: "/images/review1.jpg",
      location: "UK",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Nature Journalist",
      rating: 5,
      text: "Ceylon Wild Clicks delivered the most authentic wildlife experience I've had in 15 years of travel.",
      image: "/images/review2.jpg",
      location: "USA",
    },
    {
      id: 3,
      name: "Dr. Priya Fernando",
      role: "Conservation Biologist",
      rating: 5,
      text: "Their ethical approach to wildlife tourism sets a new standard for the industry. Highly recommended.",
      image: "/images/review3.jpg",
      location: "Australia",
    },
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
    document.body.style.overflow = "hidden";
  };

  const closeViewer = () => {
    setIsViewerOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextDestinationSlide = () => {
    setCurrentDestinationSlide((prev) =>
      prev === destinations.length - 1 ? 0 : prev + 1
    );
  };

  const prevDestinationSlide = () => {
    setCurrentDestinationSlide((prev) =>
      prev === 0 ? destinations.length - 1 : prev - 1
    );
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 5000);
  };

  return (
    <div
      className={`${bebas.variable} ${lora.variable} ${montserrat.variable} ${kolker.variable} bg-black`}
    >
      {/* Custom CSS for the earthy green colors */}
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
      `}</style>

      {/* --- HERO SECTION --- */}
      <div className="relative h-screen w-full overflow-hidden bg-[#131f14]">
        {/* 1. Video Background */}
        <div className="relative h-full w-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <video
                src={slide.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
            </div>
          ))}
        </div>

        {/* 2. Main Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 lg:px-24 z-10 pt-20 md:py-32">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <span className="font-montserrat text-[10px] md:text-xs uppercase tracking-[0.3em] text-earth-green">
                Journey Beyond The Map
              </span>
            </div>

            {/* Title */}
            <h1 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide mb-2 leading-none">
              <span
                
                className="text-transparent"
                style={{ WebkitTextStroke: "2px white" , fontFamily: "var(--font-bebas)" }}
              >
                CEYLON
              </span>
            </h1>

            <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight font-bebas">
              WILD <span className="text-earth-green">ESCAPES</span>
            </h2>

            {/* Description */}
            <p className="font-lora text-gray-300 text-sm md:text-lg max-w-xl mb-8 md:mb-10 leading-relaxed border-l-2 border-[#4a7c59] pl-4 md:pl-6">
              Discover immersive wildlife experiences in Sri Lanka's most
              breathtaking natural habitats. Join us for a journey through the
              untouched wilderness.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/toours"
                className="bg-[#4a7c59] hover:bg-[#6b8e23] text-white font-montserrat font-bold py-3 md:py-4 px-8 md:px-10 rounded-sm shadow-lg transition-all uppercase tracking-widest text-[10px] md:text-xs text-center"
              >
                Tours
              </Link>

              <Link
                href="/gallery"
                className="border border-white/30 hover:border-[#6b8e23] text-white hover:text-[#6b8e23] font-montserrat font-bold py-3 md:py-4 px-8 md:px-10 rounded-sm transition-all uppercase tracking-widest text-[10px] md:text-xs text-center"
              >
                View Gallery
              </Link>
            </div>
          </motion.div>
        </div>

        {/* 4. Slide Counter (Hidden on very small screens) */}
        <div className="absolute bottom-10 right-6 md:right-16 z-30 hidden sm:flex items-end gap-4">
          <div className="flex gap-2 mb-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  idx === currentSlide
                    ? "w-12 bg-earth-green"
                    : "w-3 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* 5. Scroll Indicator */}
        <motion.div
          className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
            Scroll
          </span>
          <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0">
            <motion.div
              className="w-full h-1/2 bg-earth-green"
              animate={{ y: [0, 16, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* --- MEET THE TEAM --- */}
      <div className="relative bg-black py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#4a7c59] rounded-full mix-blend-screen filter blur-[150px] opacity-10 -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-15 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-earth-green">
                The Visionary
              </span>
            </motion.div>
            <motion.h2
              
              className="font-kolker text-4xl sm:text-5xl text-white leading-[0.85] my-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              BEHIND THE{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a7c59] to-[#8fbc9d]">
                LENS
              </span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 items-center">
            {/* Image Area */}
            <div className="lg:col-span-5 relative">
              <motion.div
                className="relative h-[350px] sm:h-[400px] lg:h-[500px] w-full rounded-xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Image
                  src={teamMembers[0].image}
                  alt={teamMembers[0].name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </motion.div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-7 lg:-ml-16 relative z-20 mt-[-30px] lg:mt-0">
              <motion.div
                className="bg-[#111] lg:bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 lg:p-10 rounded-2xl shadow-xl"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6 border-b border-white/10 pb-6">
                  <div>
                    <h3 className="font-kolker text-5xl md:text-6xl text-white leading-none">
                      {teamMembers[0].name}
                    </h3>
                    <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-earth-green mt-2">
                      {teamMembers[0].role}
                    </p>
                  </div>
                </div>

                <p className="font-lora text-gray-300 mb-8 leading-relaxed text-sm md:text-base">
                  {teamMembers[0].bio}
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <span className="block font-kolker text-4xl md:text-5xl text-earth-green leading-none">
                      06+
                    </span>
                    <span className="block font-sans text-[9px] uppercase tracking-widest text-gray-400 mt-1">
                      Years Experience
                    </span>
                  </div>
                  <div>
                    <span className="block font-kolker text-4xl md:text-5xl text-earth-green leading-none">
                      10+
                    </span>
                    <span className="block font-sans text-[9px] uppercase tracking-widest text-gray-400 mt-1">
                      Countries
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="flex gap-2">
                    {["instagram", "facebook", "twitter"].map((platform, i) => (
                      <a
                        key={i}
                        href={teamMembers[0].social[platform]}
                        className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-earth-green hover:border-earth-green hover:bg-earth-green/10 transition-all duration-300 text-sm"
                      >
                        {platform === "instagram" && <FaInstagram />}
                        {platform === "facebook" && <FaFacebook />}
                        {platform === "twitter" && <FaTwitter />}
                      </a>
                    ))}
                  </div>
                  <div className="h-px w-8 bg-white/10"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* --- SERVICES SECTION --- */}
      <div className="relative bg-black py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="font-sans text-xs uppercase tracking-[0.4em] text-earth-green">
                Our Expertise
              </span>
            </motion.div>
            <motion.h2
              className="font-kolker text-4xl sm:text-5xl text-white leading-[1.2] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              PREMIUM <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a7c59] to-[#8fbc9d]">
                WILDLIFE EXPERIENCES
              </span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                className="group relative h-[450px] md:h-[500px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setIsHoveringCard(card.id)}
                onMouseLeave={() => setIsHoveringCard(null)}
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-70 group-hover:opacity-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-20">
                  <div className="absolute top-6 left-6 right-6 flex justify-between items-start opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-4 group-hover:translate-y-0">
                    <span className="px-3 py-1 rounded-full border border-white/20 bg-black/30 backdrop-blur-md text-xs font-sans tracking-widest text-earth-green uppercase">
                      {card.stats}
                    </span>
                    <button
                      onClick={() => openViewer(card.image)}
                      className="p-3 rounded-full bg-white/10 hover:bg-earth-green text-white transition-colors backdrop-blur-md"
                    >
                      <FaExpand className="text-xs" />
                    </button>
                  </div>

                  <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                    <div className="mb-2 text-earth-green">{card.icon}</div>
                    <h3 className="font-kolker text-3xl text-white mb-2 leading-none group-hover:text-earth-green transition-colors">
                      {card.title}
                    </h3>
                    <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mb-6 transition-all duration-500">
                      <p className="font-lora text-sm text-gray-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {card.description}
                      </p>
                    </div>
                    <p className="font-lora text-sm text-gray-400 group-hover:hidden transition-all duration-300">
                      {card.subtitle}
                    </p>
                    <Link
                      href={card.link}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-sans uppercase tracking-widest text-white border-b border-earth-green/0 hover:border-earth-green pb-1 transition-all w-fit"
                    >
                      Discover
                      <svg
                        className="w-4 h-4 text-earth-green transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* --- DESTINATIONS SECTION --- */}
      <div className="relative bg-black py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6 md:gap-8">
            <div className="max-w-2xl">
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="font-sans text-earth-green text-xs uppercase tracking-[0.4em] ">
                  Explore Sri Lanka
                </span>
              </motion.div>
              <motion.h2
                className="font-kolker text-4xl sm:text-5xl text-white leading-[1.2]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                ICONIC <br />
                <span className="text-earth-green">SANCTUARIES</span>
              </motion.h2>
            </div>

            <div className="flex gap-4">
              <button
                onClick={prevDestinationSlide}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 bg-white/5 hover:bg-earth-green hover:border-earth-green text-white flex items-center justify-center transition-all duration-300"
              >
                <FaChevronLeft className="text-sm" />
              </button>
              <button
                onClick={nextDestinationSlide}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 bg-white/5 hover:bg-earth-green hover:border-earth-green text-white flex items-center justify-center transition-all duration-300"
              >
                <FaChevronRight className="text-sm" />
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 cubic-bezier(0.25, 1, 0.5, 1)"
              style={{
                transform: `translateX(-${currentDestinationSlide * 100}%)`,
              }}
            >
              {destinations.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-1 md:px-2">
                    {slide.map((destination) => (
                      <motion.div
                        key={destination.id}
                        className="group relative bg-[#0D0D0C] rounded-2xl overflow-hidden border border-white/5 hover:border-earth-green/50 transition-all duration-500"
                      >
                        {/* Shorter height on mobile to keep vertical stack manageable */}
                        <div className="relative h-60 md:h-80 w-full overflow-hidden">
                          <Image
                            src={destination.image}
                            alt={destination.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0C] via-transparent to-transparent opacity-90" />
                        </div>
                        <div className="relative p-6 md:p-8 -mt-16 md:-mt-20">
                          <h3 className="font-bold text-3xl md:text-3xl text-white mb-2 leading-none group-hover:text-earth-green transition-colors">
                            {destination.name}
                          </h3>
                          <p className="font-lora text-sm text-gray-400 mb-6 leading-relaxed line-clamp-3">
                            {destination.description}
                          </p>
                          <Link
                            href={destination.link}
                            className="inline-block"
                          >
                            <span className="font-sans text-[10px] md:text-xs uppercase tracking-widest text-white border border-white/20 px-4 md:px-6 py-2 md:py-3 rounded-full hover:bg-earth-green hover:border-earth-green transition-all duration-300 flex items-center gap-2">
                              Explore
                            </span>
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-12 md:mt-20">
            <Link
              href="/destinations"
              className="group relative overflow-hidden rounded-md py-4 px-10 text-white font-medium text-xs md:text-sm tracking-widest uppercase text-center shadow-xl hover:shadow-earth-green/40 transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-r from-[#4a7c59] via-[#5d8c6d] to-[#4a7c59] bg-[length:200%_100%] hover:bg-[100%_0] transition-[background-position]"
            >
              View All Destinations
            </Link>
          </div>
        </div>
      </div>

      {/* --- TESTIMONIALS --- */}
      <section className="relative w-full py-20 md:py-24 bg-black overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-[#4a7c59] font-sans text-xs tracking-[0.3em] uppercase mb-4 block">
              client experiences
            </span>
            <motion.h2 className="font-bebas text-4xl sm:text-5xl text-white mb-4">
              TRAVELLER <span className="text-earth-green">TESTIMONIALS</span>
            </motion.h2>
          </motion.div>
        </div>

        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 w-8 md:w-24 z-20 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-8 md:w-24 z-20 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>

          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-4 md:gap-8 px-4 md:px-8"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 40,
                repeat: Infinity,
              }}
              style={{ width: "fit-content" }}
            >
              {[...reviews, ...reviews].map((review, index) => (
                // Adjusted width: responsive on mobile (85vw) vs fixed on desktop
                <div
                  key={index}
                  className="w-[85vw] sm:w-[350px] md:w-[450px] flex-shrink-0 group"
                >
                  <div className="h-full p-6 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-[#4a7c59]/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#4a7c59]/10 relative overflow-hidden">
                    <div className="absolute top-4 right-8 text-9xl font-serif text-white/5 select-none leading-none group-hover:text-[#4a7c59]/10 transition-colors duration-500">
                      &rdquo;
                    </div>

                    <div className="flex gap-1 mb-6 text-[#4a7c59]">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          fill="currentColor"
                          stroke="none"
                        />
                      ))}
                    </div>

                    <p className="font-lora text-base md:text-lg text-gray-300 leading-relaxed mb-8 relative z-10 group-hover:text-white transition-colors">
                      "{review.text}"
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#4a7c59] to-gray-600 flex items-center justify-center text-white font-bold text-sm">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-white font-sans text-sm tracking-wide uppercase">
                          {review.name}
                        </h4>
                        <span className="text-gray-500 text-xs tracking-wider">
                          {review.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- NEWSLETTER --- */}
      <div className="relative bg-black py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            className="text-center mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <span className="font-sans text-xs uppercase tracking-[0.4em] text-earth-green">
                Wild Updates
              </span>
            </div>

            <h2 className="font-kolker text-4xl sm:text-5xl text-white leading-[1.2] mb-6">
              UNLOCK THE <br className="sm:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a7c59] to-[#8fbc9d]">
                UNTAMED
              </span>
            </h2>

            <p className="font-lora text-gray-400 max-w-lg mx-auto text-sm leading-relaxed">
              Join our exclusive circle. Receive curated wildlife stories,
              photography secrets, and expedition invites.
            </p>
          </motion.div>

          <div className="relative max-w-lg mx-auto">
            {isSubscribed ? (
              <motion.div
                className="bg-white/5 backdrop-blur-md border border-earth-green/30 rounded-2xl p-8 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-12 h-12 bg-earth-green/20 rounded-full flex items-center justify-center mx-auto mb-4 text-earth-green">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <h3 className="font-kolker text-4xl text-white mb-2">
                  Welcome to the Tribe
                </h3>
              </motion.div>
            ) : (
              <motion.form
                className="relative group"
                onSubmit={handleSubscribe}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-2 transition-all duration-300 focus-within:border-earth-green/50">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="flex-grow bg-transparent border-none text-white px-4 md:px-6 py-2 focus:ring-0 focus:outline-none font-lora text-sm placeholder:text-gray-500 w-full"
                    required
                  />
                  <button
                    type="submit"
                    className="hidden sm:block bg-[#4a7c59] hover:bg-[#5d8c6d] text-white font-sans text-[10px] uppercase tracking-widest px-8 py-3 rounded-full transition-all duration-300 shadow-lg"
                  >
                    Subscribe
                  </button>
                  <button
                    type="submit"
                    className="sm:hidden bg-[#4a7c59] text-white p-3 rounded-full flex-shrink-0"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </button>
                </div>
              </motion.form>
            )}
          </div>
        </div>
      </div>

      {/* --- IMAGE VIEWER MODAL --- */}
      {isViewerOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeViewer}
        >
          <button
            className="absolute top-6 right-6 text-white text-xl z-50 hover:text-earth-green transition-colors"
            onClick={closeViewer}
          >
            &times;
          </button>
          <div
            className="relative max-w-6xl w-full h-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
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