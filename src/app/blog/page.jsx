"use client";
import React, { useState } from "react";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaUser,
  FaTag,
  FaSearch,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Bebas_Neue, Lora, Montserrat, Kolker_Brush } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import blogPosts from "../../data/blogs.js"

// --- Font Setup ---
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});
const kolker = Kolker_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-kolker",
});
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});


const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Wildlife",
    "Landscapes",
    "Photography",
    "Conservation",
  ];

  return (
    <div
      className={`${bebas.variable} ${lora.variable} ${montserrat.variable} ${kolker.variable} min-h-screen bg-black text-white selection:bg-[#4a7c59] selection:text-white`}
    >
      {/* Scrollbar Style */}
      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #000;
        }
        ::-webkit-scrollbar-thumb {
          background: #4a7c59;
          border-radius: 3px;
        }
      `}</style>

      {/* =========================================
          1. CINEMATIC HERO (The Blend)
         ========================================= */}
      <div className="relative h-[55vh] w-full overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/we.jpg" // Use a moody, atmospheric jungle image
            alt="Wild Journal"
            fill
            className="object-cover opacity-60"
            priority
          />
          {/* THE BLEND */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black"></div>
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#4a7c59] rounded-full mix-blend-screen filter blur-[200px] opacity-20 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              style={{ fontFamily: "var(--font-bebas)" }}
              className="font-kolker text-5xl md:text-7xl leading-[1.2] text-white  tracking-tight drop-shadow-2xl"
            >
              WILD{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a7c59] to-[#8fbc9d]">
                JOURNAL
              </span>
            </h1>
            <p className="font-lora text-gray-300 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Stories from the field, photography tips, and tales of
              conservation from Sri Lanka.
            </p>
          </motion.div>
        </div>
      </div>

      {/* =========================================
          2. MAIN CONTENT AREA
         ========================================= */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-8 pb-32 -mt-24">
        {/* Ambient Glow Left */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#4a7c59] rounded-full mix-blend-screen filter blur-[200px] opacity-10 pointer-events-none -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto">
          {/* --- FEATURED POST (Hero Article) --- */}
          {blogPosts
            .filter((post) => post.featured)
            .map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="group relative bg-[#111] border border-white/10 rounded-3xl overflow-hidden shadow-2xl mb-16 grid grid-cols-1 lg:grid-cols-2"
              >
                {/* Image Side */}
                <div className="relative h-[400px] lg:h-auto overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#111]"></div>

                  <div className="absolute top-6 left-6">
                    <span className="bg-[#4a7c59] text-white text-[10px] font-montserrat uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                      Featured Story
                    </span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-xs font-montserrat text-gray-400 mb-4 uppercase tracking-widest">
                    <span className="text-[#4a7c59]">{post.category}</span>
                    <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                    <span>{post.date}</span>
                  </div>

                  <h2
                    style={{ fontFamily: "var(--font-bebas)" }}
                    className="text-4xl lg:text-6xl text-white mb-6 leading-none transition-colors duration-300"
                  >
                    {post.title}
                  </h2>

                  <p className="font-lora text-gray-300 text-sm lg:text-base leading-relaxed mb-8 border-l border-[#4a7c59]/50 pl-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs">
                        <FaUser className="text-[#4a7c59]" />
                      </div>
                      <span className="text-xs font-montserrat text-gray-400 uppercase tracking-widest">
                        {post.author}
                      </span>
                    </div>

                    <Link
                      href={`/blog/${post.id}`}
                      className="group/btn flex items-center gap-2 text-xs font-montserrat text-white uppercase tracking-[0.2em] border-b border-transparent hover:border-[#4a7c59] pb-1 transition-all"
                    >
                      Read Article{" "}
                      <FaArrowRight className="text-[#4a7c59] group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}

          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter((post) => !post.featured)
              .map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:border-[#4a7c59]/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/60 backdrop-blur-md text-white border border-white/10 text-[9px] font-montserrat uppercase tracking-widest px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[10px] font-montserrat text-gray-500 mb-3 uppercase tracking-widest">
                      <FaCalendarAlt className="text-[#4a7c59]" />
                      <span>{post.date}</span>
                    </div>

                    <h3
                      style={{ fontFamily: "var(--font-bebas)" }}
                      className="text-2xl text-white mb-3 leading-tight transition-colors"
                    >
                      {post.title}
                    </h3>

                    <p className="font-lora text-gray-400 text-xs leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-block w-full py-3 rounded-sm border border-white/10 hover:border-[#4a7c59] hover:bg-[#4a7c59]/10 text-center transition-all"
                    >
                      <span className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-white">
                        Read Story
                      </span>
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
