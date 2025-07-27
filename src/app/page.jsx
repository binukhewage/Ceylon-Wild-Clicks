"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaSafari, FaCamera, FaPaw, FaExpand, FaChevronLeft, FaChevronRight, FaStar, FaQuoteLeft } from "react-icons/fa";
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
  variable: "--font-montserrat",
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
    { id: 1, src: "/images/hero1.jpg", alt: "Sri Lankan leopard in the wild" },
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
      description: "Our expert trackers ensure you witness Sri Lanka's most spectacular wildlife moments"
    },
    {
      id: 2,
      title: "Gallery",
      subtitle: "Stunning wildlife photography",
      icon: <FaCamera className="text-xl" />,
      image: "/images/gallery.jpg",
      link: "/gallery",
      stats: "10,000+ Images",
      description: "Award-winning photography from our team of professional wildlife photographers"
    },
    {
      id: 3,
      title: "Conservation",
      subtitle: "Protecting Sri Lanka's wildlife",
      icon: <FaPaw className="text-xl" />,
      image: "/images/portrait.jpg",
      link: "/conservation",
      stats: "15+ Projects",
      description: "Directly supporting wildlife conservation efforts across the island"
    }
  ];

  const destinations = [
    [
      {
        id: 1,
        name: "Wilpattu National Park",
        image: "/images/wilpattu.jpg",
        description: "Sri Lanka's largest national park with natural lakes",
        link: "/destinations/wilpattu"
      },
      {
        id: 2,
        name: "Horton Plains",
        image: "/images/hp.jpg",
        description: "Famous for World's End and rich biodiversity",
        link: "/destinations/horton-plains"
      },
      {
        id: 3,
        name: "Sinharaja Rain Forest",
        image: "/images/sinharaja.webp",
        description: "UNESCO World Heritage Site with endemic species",
        link: "/destinations/sinharaja"
      }
    ],
    [
      {
        id: 4,
        name: "Kumana National Park",
        image: "/images/kumana.jpg",
        description: "Known for birdwatching and diverse wildlife",
        link: "/destinations/kumana"
      },
      {
        id: 5,
        name: "Yala National Park",
        image: "/images/yala.jpg",
        description: "Home to the highest density of leopards in the world",
        link: "/destinations/yala"
      },
      {
        id: 6,
        name: "Minneriya National Park",
        image: "/images/minneriya.jpg",
        description: "Famous for the elephant gathering during dry season",
        link: "/destinations/minneriya"
      }
    ]
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Wildlife Photographer",
      rating: 5,
      comment: "The leopard sightings were beyond anything I could have imagined. The guides' knowledge was exceptional.",
      image: "/images/review1.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Nature Journalist",
      rating: 5,
      comment: "Ceylon Wild Clicks delivered the most authentic wildlife experience I've had in 15 years of travel.",
      image: "/images/review2.jpg"
    },
    {
      id: 3,
      name: "Dr. Priya Fernando",
      role: "Conservation Biologist",
      rating: 5,
      comment: "Their ethical approach to wildlife tourism sets a new standard for the industry. Highly recommended.",
      image: "/images/review3.jpg"
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

  const nextDestinationSlide = () => {
    setCurrentDestinationSlide((prev) => (prev === destinations.length - 1 ? 0 : prev + 1));
  };

  const prevDestinationSlide = () => {
    setCurrentDestinationSlide((prev) => (prev === 0 ? destinations.length - 1 : prev - 1));
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 5000);
  };

  return (
    <div className={`${bebas.variable} ${lora.variable} ${montserrat.variable}`}>
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
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="font-montserrat text-xs uppercase tracking-[0.3em] text-emerald-400">
                Wildlife Photography & Tours
              </span>
            </div>
            <h1 className="font-bebas text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-tight mb-4">
              CEYLON <span className="text-emerald-400">WILD CLICKS</span>
            </h1>
            <motion.p
              className="font-lora text-lg md:text-xl text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Immersive wildlife experiences in Sri Lanka's most breathtaking natural habitats
            </motion.p>
          </motion.div>

          <motion.div
            className="flex gap-4 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link
              href="/tours"
              className="bg-gradient-to-r from-emerald-700 to-emerald-500 hover:from-emerald-600 hover:to-emerald-400 text-white font-medium py-3 px-8 rounded-sm shadow-lg hover:shadow-emerald-500/20 transition-all text-sm tracking-wide uppercase"
            >
              Explore Tours
            </Link>
            <Link
              href="/gallery"
              className="border border-white/30 hover:border-emerald-400 text-white hover:text-emerald-400 py-3 px-8 rounded-sm transition-all text-sm tracking-wide uppercase"
            >
              View Gallery
            </Link>
          </motion.div>
        </div>

        {/* Navigation dots */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-emerald-400 w-6"
                  : "bg-white/30 w-2"
              }`}
            />
          ))}
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
              <span className="font-montserrat text-xs uppercase tracking-[0.3em] text-emerald-400">
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
              PREMIUM <span className="text-emerald-400">WILDLIFE EXPERIENCES</span>
            </motion.h2>
            <motion.p
              className="font-lora text-gray-400 max-w-2xl mx-auto text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Carefully curated encounters with Sri Lanka's magnificent wildlife, designed for discerning travelers
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
                      className="p-2 rounded-sm bg-black/50 hover:bg-emerald-500 transition-colors text-white"
                    >
                      <FaExpand className="text-xs" />
                    </button>
                  </div>
                  
                  <div className="mb-4 flex items-center gap-3">
                    <div className="text-emerald-400">{card.icon}</div>
                    <span className="font-montserrat text-xs uppercase tracking-widest text-emerald-400">
                      {card.stats}
                    </span>
                  </div>
                  
                  <h3 className="font-bebas text-2xl text-white mb-1 group-hover:text-emerald-400 transition-colors">
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
                    className="font-montserrat text-white hover:text-emerald-400 transition-colors text-xs uppercase tracking-wider flex items-center gap-2 group"
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
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-emerald-500/5 blur-3xl"></div>
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
              <span className="font-montserrat text-xs uppercase tracking-[0.3em] text-emerald-400">
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
              ICONIC <span className="text-emerald-400">WILDLIFE SANCTUARIES</span>
            </motion.h2>
            <motion.p
              className="font-lora text-gray-400 max-w-2xl mx-auto text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Discover Sri Lanka's most spectacular national parks and conservation areas
            </motion.p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentDestinationSlide * 100}%)` }}>
              {destinations.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2">
                    {slide.map((destination) => (
                      <motion.div
                        key={destination.id}
                        className="bg-gray-900 rounded-sm overflow-hidden border border-gray-800 hover:border-emerald-400/30 transition-all duration-300"
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
                            className="font-montserrat text-emerald-400 hover:text-emerald-300 transition-colors text-xs uppercase tracking-wider flex items-center gap-2"
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
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-emerald-500 text-white p-2 rounded-sm z-10 transition-colors"
            >
              <FaChevronLeft className="text-xs" />
            </button>
            <button 
              onClick={nextDestinationSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-emerald-500 text-white p-2 rounded-sm z-10 transition-colors"
            >
              <FaChevronRight className="text-xs" />
            </button>
          </div>

          <div className="flex justify-center mt-12">
            <Link
              href="/destinations"
              className="font-montserrat text-sm text-white bg-emerald-600 hover:bg-emerald-500 px-8 py-3 rounded-sm transition-colors uppercase tracking-wider"
            >
              View All Destinations
            </Link>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-emerald-500/5 blur-3xl"></div>
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
              <span className="font-montserrat text-xs uppercase tracking-[0.3em] text-emerald-400">
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
              TRAVELER <span className="text-emerald-400">TESTIMONIALS</span>
            </motion.h2>
            <motion.p
              className="font-lora text-gray-400 max-w-2xl mx-auto text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Hear from those who've experienced our wildlife adventures firsthand
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="bg-gray-900/80 backdrop-blur-sm rounded-sm p-6 border border-gray-800 hover:border-emerald-400/30 transition-colors"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start mb-5">
                  <div className="ml-3">
                    <h4 className="font-bebas text-lg text-white">{testimonial.name}</h4>
                    <p className="font-montserrat text-[0.65rem] text-emerald-400 uppercase tracking-wider">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`w-3 h-3 ${i < testimonial.rating ? 'text-amber-400' : 'text-gray-600'}`} 
                    />
                  ))}
                </div>
                <div className="relative">
                  <FaQuoteLeft className="absolute -top-1 -left-1 text-emerald-500/10 text-2xl" />
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
          <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-emerald-500/5 blur-3xl"></div>
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
              <span className="font-montserrat text-xs uppercase tracking-[0.3em] text-emerald-400">
                Stay Connected
              </span>
            </div>
            <h2 className="font-bebas text-4xl sm:text-5xl text-white mb-4">
              JOIN OUR <span className="text-emerald-400">NEWSLETTER</span>
            </h2>
            <p className="font-lora text-gray-400 max-w-2xl mx-auto text-sm">
              Receive exclusive wildlife updates, photography tips, and special offers
            </p>
          </motion.div>

          {isSubscribed ? (
            <motion.div
              className="bg-emerald-500/10 border border-emerald-500/30 rounded-sm p-6 max-w-md mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-bebas text-xl text-emerald-400 mb-2">Thank You!</h3>
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
                className="flex-grow px-5 py-3 rounded-sm bg-gray-900 border border-gray-800 focus:border-emerald-500 focus:outline-none text-white font-lora text-sm"
                required
              />
              <button
                type="submit"
                className="font-montserrat text-sm text-white bg-emerald-600 hover:bg-emerald-500 px-8 py-3 rounded-sm transition-colors uppercase tracking-wider"
              >
                Subscribe
              </button>
            </motion.form>
          )}
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-emerald-500/5 blur-3xl"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl"></div>
      </div>

      {/* Image Viewer Modal */}
      {isViewerOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={closeViewer}>
          <button 
            className="absolute top-6 right-6 text-white text-xl z-50 hover:text-emerald-400 transition-colors"
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