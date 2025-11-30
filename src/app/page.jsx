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
  FaStar,
  FaQuoteLeft,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaClock,       // Added for Hero
  FaCalendarAlt, // Added for Hero
  FaHeart,       // Added for Hero
  FaArrowRight,  // Added for Hero
} from "react-icons/fa";
import { Bebas_Neue, Lora, Montserrat, Kolker_Brush } from "next/font/google";

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
  const [isHoveringCard, setIsHoveringCard] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [viewerImage, setViewerImage] = useState("");
  const [currentDestinationSlide, setCurrentDestinationSlide] = useState(0);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const slides = [
    { id: 1, src: "/videos/homevideo.mp4", alt: "Sri Lankan leopard in the wild" },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Roshan Peiris",
      role: "Lead Photographer & Founder",
      bio: "I'm Roshan Peiris, a Sri Lankan wildlife and nature photographer. Since 2019, my passion for capturing Sri Lanka's untamed beauty has grown into a full-time pursuit. After dedicating myself entirely to wildlife photography in 2024, I now guide wildlife photo safaris to share the magical experience of nature with enthusiasts, offering an immersive journey through the island's incredible landscapes and biodiversity.",
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
        link: "/destinations/wilpattu",
      },
      {
        id: 2,
        name: "Horton Plains",
        image: "/images/hp-d.jpeg",
        description: "Famous for World's End and rich biodiversity",
        link: "/destinations/horton-plains",
      },
      {
        id: 3,
        name: "Sinharaja Rain Forest",
        image: "/images/sinharaja-d.webp",
        description: "UNESCO World Heritage Site with endemic species",
        link: "/destinations/sinharaja",
      },
    ],
    [
      {
        id: 4,
        name: "Kumana National Park",
        image: "/images/kumana-d.jpg",
        description: "Known for birdwatching and diverse wildlife",
        link: "/destinations/kumana",
      },
      {
        id: 5,
        name: "Yala National Park",
        image: "/images/yala.jpg",
        description: "Home to the highest density of leopards in the world",
        link: "/destinations/yala",
      },
      {
        id: 6,
        name: "Minneriya National Park",
        image: "/images/minneriya.jpg",
        description: "Famous for the elephant gathering during dry season",
        link: "/destinations/minneriya",
      },
    ],
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Wildlife Photographer",
      rating: 5,
      comment:
        "The leopard sightings were beyond anything I could have imagined. The guides' knowledge was exceptional.",
      image: "/images/review1.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Nature Journalist",
      rating: 5,
      comment:
        "Ceylon Wild Clicks delivered the most authentic wildlife experience I've had in 15 years of travel.",
      image: "/images/review2.jpg",
    },
    {
      id: 3,
      name: "Dr. Priya Fernando",
      role: "Conservation Biologist",
      rating: 5,
      comment:
        "Their ethical approach to wildlife tourism sets a new standard for the industry. Highly recommended.",
      image: "/images/review3.jpg",
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
      className={`${bebas.variable} ${lora.variable} ${montserrat.variable} ${kolker.variable}`}
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
        .hover\:bg-earth-green:hover {
          background-color: #4a7c59;
        }
        .hover\:text-earth-green:hover {
          color: #4a7c59;
        }
        .border-earth-green {
          border-color: #4a7c59;
        }
        .from-earth-green {
          --tw-gradient-from: #4a7c59;
          --tw-gradient-to: rgba(74, 124, 89, 0);
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
        }
        .to-earth-green-light {
          --tw-gradient-to: #8a9b68;
        }
      `}</style>

      {/* --- NEW HERO SECTION (ZOOSFERA STYLE) --- */}
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
              {/* Gradient: Dark on left, transparent on right to let video show */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
            </div>
          ))}
        </div>

        {/* 2. Main Content (Left Aligned) */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 lg:px-24 z-10 py-32 ">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
             <div className="mb-4">
              <span className="font-montserrat text-xs uppercase tracking-[0.3em] text-earth-green">
                Journey Beyond The Map
              </span>
            </div>

            {/* Title with Hollow Effect */}
            <h1 className="font-bebas text-7xl md:text-8xl lg:text-9xl tracking-wide mb-2 leading-none">
              <span 
                className="text-transparent"
                style={{ WebkitTextStroke: '2px white' }} 
              >
                CEYLON
              </span>
            </h1>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-bebas">
              WILD <span className="text-earth-green">ESCAPES</span>
            </h2>

            {/* Description */}
            <p className="font-lora text-gray-300 text-base md:text-lg max-w-xl mb-10 leading-relaxed border-l-2 border-[#4a7c59] pl-6">
              Discover immersive wildlife experiences in Sri Lanka's most breathtaking natural habitats. 
              Join us for a journey through the untouched wilderness.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-[#4a7c59] hover:bg-[ #6b8e23] text-white font-montserrat font-bold py-4 px-10 rounded-sm shadow-lg transition-all uppercase tracking-widest text-xs"
              >
                Contact Me
              </Link>
              
              <Link
                 href="/gallery"
                className="border border-white/30 hover:border-[ #6b8e23] text-white hover:text-[ #6b8e23] font-montserrat font-bold py-4 px-10 rounded-sm transition-all uppercase tracking-widest text-xs"
              >
                View Gallery
              </Link>
            </div>
          </motion.div>
        </div> 
      </div>
      {/* --- END HERO SECTION --- */}

      {/* Meet the Team Section */}
      <div className="relative bg-black py-24 px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="font-montserrat text-xs uppercase tracking-[0.3em] text-earth-green">
                The Visionary Behind the Lens
              </span>
            </motion.div>
            <motion.h2
              className="font-bebas text-4xl sm:text-5xl text-white mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              MEET OUR <span className="text-earth-green">FOUNDER</span>
            </motion.h2>
            <motion.p
              className="font-lora text-gray-400 max-w-xl mx-auto mt-4 text-sm leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              A passionate wildlife photographer dedicated to capturing Sri
              Lanka's natural beauty
            </motion.p>
          </div>

          {/* Founder Card */}
          <div className="grid lg:grid-cols-2 gap-8 items-center bg-gradient-to-br from-gray-900/70 to-black/80 rounded-xl  border-earth-green/20 shadow-lg shadow-earth-green/10 overflow-hidden">
            {/* Image Side */}
            <div className="relative h-96 lg:h-[550px]">
              <Image
                src={teamMembers[0].image}
                alt={teamMembers[0].name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70"></div>
              <div className="absolute inset-0 bg-[url('/images/noise-texture.png')] mix-blend-soft-light opacity-15"></div>
            </div>

            {/* Details Side */}
            <div className="relative p-10 md:p-14 flex flex-col justify-center">
              <h3 className="font-bebas text-3xl md:text-5xl text-white mb-2">
                {teamMembers[0].name}
              </h3>
              <p className="font-montserrat text-sm uppercase tracking-widest text-earth-green mb-6">
                {teamMembers[0].role}
              </p>

              <p className="font-lora text-gray-300 mb-8 leading-relaxed text-sm">
                {teamMembers[0].bio}
              </p>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex flex-col items-start p-4 rounded-lg bg-black/40 border border-earth-green/10 hover:border-earth-green/30 transition">
                  <span className="text-earth-green font-bebas text-3xl">
                    6+
                  </span>
                  <span className="font-montserrat text-xs text-gray-400 uppercase tracking-wide">
                    Years Experience
                  </span>
                </div>
                <div className="flex flex-col items-start p-4 rounded-lg bg-black/40 border border-earth-green/10 hover:border-earth-green/30 transition">
                  <span className="text-earth-green font-bebas text-3xl">
                    10+
                  </span>
                  <span className="font-montserrat text-xs text-gray-400 uppercase tracking-wide">
                    Countries covered
                  </span>
                </div>
              </div>

              {/* Social Links (Animated) */}
              <motion.div
                className="flex space-x-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { staggerChildren: 0.15 },
                  },
                }}
              >
                {["instagram", "facebook", "twitter"].map((platform, i) => (
                  <motion.a
                    key={i}
                    href={teamMembers[0].social[platform]}
                    className="text-white w-12 h-12 rounded-full bg-earth-green/10 hover:bg-earth-green/20 border border-earth-green/20 flex items-center justify-center transition-all duration-300 group"
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                  >
                    {platform === "instagram" && (
                      <FaInstagram className="text-earth-green group-hover:scale-125 transition-transform" />
                    )}
                    {platform === "facebook" && (
                      <FaFacebook className="text-earth-green group-hover:scale-125 transition-transform" />
                    )}
                    {platform === "twitter" && (
                      <FaTwitter className="text-earth-green group-hover:scale-125 transition-transform" />
                    )}
                  </motion.a>
                ))}
              </motion.div>

              {/* Signature */}
              <div className="mt-10 border-t border-earth-green/20 pt-6">
                <p className="text-white font-lora italic text-earth-green/70 text-base">
                  "Capturing the wild soul of Sri Lanka"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative bg-black py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="font-montserrat text-xs uppercase tracking-[0.3em] text-earth-green">
                Our Expertise
              </span>
            </motion.div>
            <motion.h2
              className="font-bebas text-4xl sm:text-5xl text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              PREMIUM{" "}
              <span className="text-earth-green">WILDLIFE EXPERIENCES</span>
            </motion.h2>
            <motion.p
              className="font-lora text-gray-400 max-w-2xl mx-auto text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Carefully curated encounters with Sri Lanka's magnificent
              wildlife, designed for discerning travelers
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card) => (
              <motion.div
                key={card.id}
                className="group relative overflow-hidden rounded-sm aspect-[3/4]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                onMouseEnter={() => setIsHoveringCard(card.id)}
                onMouseLeave={() => setIsHoveringCard(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                  <div className="absolute top-6 right-6">
                    <button
                      onClick={() => openViewer(card.image)}
                      className="p-2 rounded-sm bg-black/50 hover:bg-earth-green transition-colors text-white"
                    >
                      <FaExpand className="text-xs" />
                    </button>
                  </div>

                  <div className="mb-4 flex items-center gap-3">
                    <div className="text-earth-green">{card.icon}</div>
                    <span className="font-montserrat text-xs uppercase tracking-widest text-earth-green">
                      {card.stats}
                    </span>
                  </div>

                  <h3 className="font-bebas text-2xl text-white mb-1 group-hover:text-earth-green transition-colors">
                    {card.title}
                  </h3>

                  <p className="font-lora text-sm text-gray-300 mb-4">
                    {card.subtitle}
                  </p>

                  <p className="font-lora text-xs text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {card.description}
                  </p>

                  <Link
                    href={card.link}
                    className="font-montserrat text-white hover:text-earth-green transition-colors text-xs uppercase tracking-wider flex items-center gap-2 group"
                  >
                    <span>Discover More</span>
                    <span className="inline-block group-hover:translate-x-1 transition-transform">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
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

        {/* Decorative elements */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-earth-green/5 blur-3xl"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl"></div>
      </div>

      {/* Destinations Section */}
      <div className="relative bg-black py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="font-montserrat text-xs uppercase tracking-[0.3em] text-earth-green">
                Explore Sri Lanka
              </span>
            </motion.div>
            <motion.h2
              className="font-bebas text-4xl sm:text-5xl text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              ICONIC{" "}
              <span className="text-earth-green">WILDLIFE SANCTUARIES</span>
            </motion.h2>
            <motion.p
              className="font-lora text-gray-400 max-w-2xl mx-auto text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Discover Sri Lanka's most spectacular national parks and
              conservation areas
            </motion.p>
          </div>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentDestinationSlide * 100}%)`,
              }}
            >
              {destinations.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2">
                    {slide.map((destination) => (
                      <motion.div
                        key={destination.id}
                        className="bg-[#0D0D0C] rounded-sm overflow-hidden border border-gray-800 hover:border-earth-green/30 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="relative h-60 w-full">
                          <Image
                            src={destination.image}
                            alt={destination.name}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        </div>
                        <div className="p-6">
                          <h3 className="font-bebas text-xl text-white mb-2">
                            {destination.name}
                          </h3>
                          <p className="font-lora text-xs text-gray-300 mb-4">
                            {destination.description}
                          </p>
                          <Link
                            href={destination.link}
                            className="font-montserrat text-earth-green hover:text-earth-green-light transition-colors text-xs uppercase tracking-wider flex items-center gap-2"
                          >
                            Explore Destination
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3 w-3"
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
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={prevDestinationSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-earth-green text-white p-2 rounded-sm z-10 transition-colors"
            >
              <FaChevronLeft className="text-xs" />
            </button>
            <button
              onClick={nextDestinationSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-earth-green text-white p-2 rounded-sm z-10 transition-colors"
            >
              <FaChevronRight className="text-xs" />
            </button>
          </div>

          <div className="flex justify-center mt-12">
            <Link
              href="/destinations"
              className="font-montserrat text-sm text-white px-8 py-3 rounded-sm transition-colors uppercase tracking-wider"
              style={{
                backgroundColor: "#4a7c59", // earthy green base
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#6b8e23")
              } // accent on hover
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#4a7c59")
              }
            >
              View All Destinations
            </Link>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-earth-green/5 blur-3xl"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl"></div>
      </div>

      {/* Testimonials Section */}
      <div className="relative bg-black py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="font-montserrat text-xs uppercase tracking-[0.3em] text-earth-green">
                Client Experiences
              </span>
            </motion.div>
            <motion.h2
              className="font-bebas text-4xl sm:text-5xl text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              TRAVELER <span className="text-earth-green">TESTIMONIALS</span>
            </motion.h2>
            <motion.p
              className="font-lora text-gray-400 max-w-2xl mx-auto text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Hear from those who've experienced our wildlife adventures
              firsthand
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="bg-[#0D0D0C] backdrop-blur-sm rounded-sm p-6 border border-gray-800 hover:border-earth-green/30 transition-colors"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start mb-5">
                  <div className="ml-3">
                    <h4 className="font-bebas text-lg text-white">
                      {testimonial.name}
                    </h4>
                    <p className="font-montserrat text-[0.65rem] text-earth-green uppercase tracking-wider">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`w-3 h-3 ${
                        i < testimonial.rating
                          ? "text-amber-400"
                          : "text-gray-600"
                      }`}
                    />
                  ))}
                </div>
                <div className="relative">
                  <FaQuoteLeft className="absolute -top-1 -left-1 text-earth-green/10 text-2xl" />
                  <p className="font-lora text-xs text-gray-300 relative z-10 pl-4">
                    "{testimonial.comment}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-earth-green/5 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl"></div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="relative bg-black py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <span className="font-montserrat text-xs uppercase tracking-[0.3em] text-earth-green">
                Stay Connected
              </span>
            </div>
            <h2 className="font-bebas text-4xl sm:text-5xl text-white mb-4">
              JOIN OUR <span className="text-earth-green">NEWSLETTER</span>
            </h2>
            <p className="font-lora text-gray-400 max-w-2xl mx-auto text-sm">
              Receive exclusive wildlife updates, photography tips, and special
              offers
            </p>
          </motion.div>

          {isSubscribed ? (
            <motion.div
              className="bg-earth-green/10 border border-earth-green/30 rounded-sm p-6 max-w-md mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-bebas text-xl text-earth-green mb-2">
                Thank You!
              </h3>
              <p className="font-lora text-xs text-gray-300">
                You've been successfully subscribed to our newsletter.
              </p>
            </motion.div>
          ) : (
            <motion.form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto sm:max-w-xl"
              onSubmit={handleSubscribe}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-grow px-5 py-3 rounded-sm bg-gray-900 border border-gray-800 focus:border-earth-green focus:outline-none text-white font-lora text-sm"
                required
              />
              <button
                type="submit"
                className="font-montserrat text-sm text-white bg-earth-green hover:bg-earth-green-accent px-8 py-3 rounded-sm transition-colors uppercase tracking-wider"
              >
                Subscribe
              </button>
            </motion.form>
          )}
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-earth-green/5 blur-3xl"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl"></div>
      </div>

      {/* Image Viewer Modal */}
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