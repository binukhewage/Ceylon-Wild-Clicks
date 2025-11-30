"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaCamera,
  FaHeart,
  FaUsers,
  FaLeaf,
  FaPaw,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaChevronRight,
} from "react-icons/fa";
import { Kolker_Brush, Lora, Montserrat } from "next/font/google";

// --- Font Setup ---
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
  variable: "--font-montserrat",
});

const About = () => {
  // Data
  const teamMembers = [
    {
      id: 1,
      name: "Roshan Peiris",
      role: "Lead Photographer & Founder",
      bio: "Since 2019, my passion for capturing Sri Lanka's untamed beauty has grown into a full-time pursuit. After dedicating myself entirely to wildlife photography in 2024, I now guide wildlife photo safaris to share the magical experience of nature with enthusiasts.",
      image: "/images/roshan.jpg", // Ensure this path is correct
      social: {
        instagram: "https://instagram.com/roshan",
        facebook: "https://facebook.com/roshan",
        twitter: "https://twitter.com/roshan",
      },
    },
  ];

  const features = [
    {
      id: 1,
      title: "Unrivaled Wildlife Expertise",
      description:
        "Our tours are led by seasoned local guides with an intimate knowledge of photography and Sri Lanka's wildlife and their habitats.",
      icon: <FaLeaf />,
    },
    {
      id: 2,
      title: "Prime Locations & Exceptional Encounters",
      description:
        "We take you to the heart of Sri Lanka's most iconic national parks and biodiversity hotspots including Wilpattu, Yala, Sinharaja, Kumana, Horton Plains and Minneriya/Hurulu Eco park.",
      icon: <FaPaw />,
    },
    {
      id: 3,
      title: "Tailored for Photographers",
      description:
        "Our itineraries are designed to provide ample time for observation and photography, with flexible schedules and optimal lighting conditions.",
      icon: <FaCamera />,
    },
    {
      id: 4,
      title: "Small Group, Bigger Experience",
      description:
        "Our small group size (maximum 6) ensures a personalized and immersive experience. Our safari jeeps accommodate only 2 photographers to enhance working space.",
      icon: <FaUsers />,
    },
  ];

  return (
    <div
      className={`${kolker.variable} ${lora.variable} ${montserrat.variable} min-h-screen bg-black text-white overflow-hidden`}
    >
      {/* =========================================
          1. CINEMATIC HERO
         ========================================= */}
      <div className="relative h-[40vh] w-full overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about1.jpg" // Ensure path is correct
            alt="Wildlife photography"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-kolker text-4xl sm:text-5xl leading-[1.2] text-white mb-6">
              ABOUT{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a7c59] to-[#8fbc9d]">
                CEYLON WILD ESCAPES
              </span>
            </h1>
            <p className="font-lora text-gray-300 text-md md:text-lg max-w-2xl mx-auto leading-relaxed">
              Capturing the soul of Sri Lanka through ethical photography and
              immersive, luxurious expeditions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* =========================================
          2. OUR STORY (Editorial Layout)
         ========================================= */}
      <div className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Text Narrative */}
            <div className="lg:col-span-7 space-y-8">
              <h2 className="font-kolker text-4xl md:text-5xl text-white leading-none mb-8">
                FROM PASSION TO <br />
                <span className="text-[#4a7c59]">PURPOSE</span>
              </h2>

              <div className="font-lora text-gray-400 text-lg leading-relaxed space-y-6 border-l border-white/10 pl-6 md:pl-10">
                <p>
                  Founded in 2010,{" "}
                  <span className="text-white">Ceylon Wild Escapes</span> began
                  in the lush rainforests of Sinharaja. What started as a
                  solitary pursuit to document rare bird species has evolved
                  into a movement.
                </p>
                <p>
                  Today, we balance professional photography with responsible
                  ecotourism. We believe that to truly see nature, one must
                  become part of its rhythm—silent, observant, and respectful.
                </p>
              </div>

              {/* Minimal Stats Row */}
              <div className="flex gap-12 pt-8">
                <div>
                  <span className="block font-kolker text-5xl text-white">
                    15k+
                  </span>
                  <span className="block font-montserrat text-[10px] uppercase tracking-widest text-[#4a7c59]">
                    Photos Captured
                  </span>
                </div>
                <div>
                  <span className="block font-kolker text-5xl text-white">
                    1.2k
                  </span>
                  <span className="block font-montserrat text-[10px] uppercase tracking-widest text-[#4a7c59]">
                    Guests Hosted
                  </span>
                </div>
                <div>
                  <span className="block font-kolker text-5xl text-white">
                    08
                  </span>
                  <span className="block font-montserrat text-[10px] uppercase tracking-widest text-[#4a7c59]">
                    National Parks
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Decorative Image/Glass Element */}
            <div className="lg:col-span-5 relative h-[500px] w-full">
              <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-full backdrop-blur-3xl transform rotate-6"></div>
              {/* Replace with a secondary image if available, or keep abstract */}
              <div className="absolute inset-4 rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <Image
                  src="/images/cwe.png" // Use a different image if possible
                  alt="Story"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#4a7c59]/20 mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          3. MEET THE FOUNDER (Asymmetrical)
         ========================================= */}
      <div className="relative py-24 bg-black overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#4a7c59] rounded-full mix-blend-screen filter blur-[150px] opacity-10 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Image (5 Cols) */}
            <motion.div
              className="lg:col-span-5 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={teamMembers[0].image}
                alt={teamMembers[0].name}
                fill
                className="object-cover  hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </motion.div>

            {/* Content (7 Cols - Overlapping) */}
            <motion.div
              className="lg:col-span-7 lg:-ml-20 relative z-20 mt-[-50px] lg:mt-0"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-[#111] lg:bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-2xl shadow-2xl">
                <span className="font-montserrat text-xs uppercase tracking-[0.3em] text-[#4a7c59] mb-2 block">
                  The Visionary
                </span>
                <h3 className="font-kolker text-6xl text-white mb-1">
                  {teamMembers[0].name}
                </h3>
                <p className="font-lora text-gray-400 italic text-sm mb-6">
                  "Capturing the wild soul of Ceylon"
                </p>
                <p className="font-lora text-gray-300 mb-8 text-base leading-relaxed">
                  {teamMembers[0].bio}
                </p>

                {/* Socials */}
                <div className="flex gap-4">
                  {Object.entries(teamMembers[0].social).map(([key, url]) => (
                    <a
                      key={key}
                      href={url}
                      className="text-white/50 hover:text-[#4a7c59] transition-colors"
                    >
                      {key === "instagram" && <FaInstagram size={20} />}
                      {key === "facebook" && <FaFacebook size={20} />}
                      {key === "twitter" && <FaTwitter size={20} />}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* =========================================
          4. WHY CHOOSE US (Holographic Grid)
         ========================================= */}
      <div className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="font-sans text-xs uppercase tracking-[0.4em] text-earth-green">
                Our difference
              </span>
            </motion.div>
            <motion.h2
              className="font-kolker text-4xl sm:text-5xl text-white leading-[1.2] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              WHY <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a7c59] to-[#8fbc9d]">
                CEYLON WILD ESCAPES
              </span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-[#4a7c59]/50 transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-[#4a7c59]/10 flex items-center justify-center text-[#4a7c59] text-xl mb-6 group-hover:bg-[#4a7c59] group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-bebas text-2xl text-white mb-3 tracking-wide">
                  {feature.title}
                </h3>
                <p className="font-lora text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/tours"
              className="group relative overflow-hidden rounded-md py-4 px-10 text-white font-medium text-xs tracking-[0.2em] uppercase text-center shadow-lg hover:shadow-[#4a7c59]/40 transition-all duration-300 inline-block bg-gradient-to-r from-[#4a7c59] via-[#5d8c6d] to-[#4a7c59] bg-[length:200%_100%] hover:bg-[100%_0] transition-[background-position]"
            >
              Explore Tours
            </Link>
          </div>
        </div>
      </div>

      {/* =========================================
          5. MISSION & VALUES (Sleek List)
         ========================================= */}
      <div className="relative pt-15 pb-24 bg-gradient-to-b from-black to-[#050505] px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-20">
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="font-sans text-xs uppercase tracking-[0.4em] text-earth-green">
                WHAT DRIVES US 
              </span>
            </motion.div>
            <motion.h2
              className="font-kolker text-4xl sm:text-5xl text-white leading-[1.2] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              MISSION & <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a7c59] to-[#8fbc9d]">
                VALUES
              </span>
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          
            {/* Mission */}
            <div className="px-6 text-center md:text-left">
              <span className="font-kolker text-5xl text-white/20 mb-2 block">
                01
              </span>
              <h3 className="font-montserrat text-xs uppercase tracking-[0.2em] text-[#4a7c59] mb-4 font-bold">
                Mission
              </h3>
              <p className="font-lora text-gray-400 text-sm leading-relaxed">
                To capture the breathtaking beauty of Sri Lanka's wildlife
                through ethical photography while fostering conservation.
              </p>
            </div>

            {/* Values */}
            <div className="px-6 pt-8 md:pt-0 text-center md:text-left">
              <span className="font-kolker text-5xl text-white/20 mb-2 block">
                02
              </span>
              <h3 className="font-montserrat text-xs uppercase tracking-[0.2em] text-[#4a7c59] mb-4 font-bold">
                Values
              </h3>
              <ul className="font-lora text-gray-400 text-sm space-y-2">
                <li>• Respect for Habitats</li>
                <li>• Ethical Encounters</li>
                <li>• Community Support</li>
              </ul>
            </div>

            {/* Promise */}
            <div className="px-6 pt-8 md:pt-0 text-center md:text-left">
              <span className="font-kolker text-5xl text-white/20 mb-2 block">
                03
              </span>
              <h3 className="font-montserrat text-xs uppercase tracking-[0.2em] text-[#4a7c59] mb-4 font-bold">
                Promise
              </h3>
              <p className="font-lora text-gray-400 text-sm leading-relaxed">
                We contribute a portion of proceeds to wildlife conservation
                initiatives in Sri Lanka.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
