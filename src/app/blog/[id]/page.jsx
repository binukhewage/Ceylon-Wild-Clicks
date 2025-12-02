"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FaChevronLeft, 
  FaUser, 
  FaCalendarAlt, 
  FaTag, 
  FaShareAlt 
} from "react-icons/fa";
import { Bebas_Neue, Lora, Montserrat, Kolker_Brush } from "next/font/google";
import blogPosts from "../../../data/blogs.js";

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

export default function BlogArticlePage() {
  const { id } = useParams();
  // Ensure id comparison works (string vs number)
  const blog = blogPosts.find((post) => post.id == id);

  if (!blog) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-bebas text-4xl text-[#4a7c59] mb-4">Article Not Found</h1>
          <Link href="/blog" className="text-gray-400 hover:text-white underline font-lora">
            Return to Journal
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`${bebas.variable} ${lora.variable} ${montserrat.variable} ${kolker.variable} min-h-screen bg-black text-white selection:bg-[#4a7c59] selection:text-white`}>
      
      {/* Scrollbar Style */}
      <style jsx global>{`
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: #4a7c59; border-radius: 3px; }
      `}</style>

      {/* =========================================
          1. CINEMATIC HERO (The Blend)
         ========================================= */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover opacity-60"
            priority
          />
          {/* THE BLEND: Gradient to solid black */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black"></div>
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#4a7c59] rounded-full mix-blend-screen filter blur-[200px] opacity-20 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-4 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            {/* Category Pill */}
            <span className="inline-block py-1 px-4 rounded-full bg-[#4a7c59]/20 border border-[#4a7c59]/50 text-[#4a7c59] font-montserrat text-[10px] uppercase tracking-[0.2em] mb-6 backdrop-blur-md">
              {blog.category}
            </span>

            {/* Title */}
            <h1 
            style={{ fontFamily: "var(--font-bebas)" }}
            className="font-kolker text-4xl md:text-7xl  leading-[1.2] text-white mb-8 drop-shadow-2xl">
              {blog.title}
            </h1>

            {/* Metadata Bar (HUD Style) */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-gray-300 font-montserrat text-[10px] uppercase tracking-widest">
               <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-[#4a7c59]" />
                  <span>{blog.date}</span>
               </div>
               <div className="w-[1px] h-4 bg-white/20 hidden md:block"></div>
               <div className="flex items-center gap-2">
                  <FaUser className="text-[#4a7c59]" />
                  <span>{blog.author}</span>
               </div>
               <div className="w-[1px] h-4 bg-white/20 hidden md:block"></div>
               <div className="flex items-center gap-2">
                  <FaTag className="text-[#4a7c59]" />
                  <span>5 Min Read</span>
               </div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* =========================================
          2. ARTICLE CONTENT (Floating Glass)
         ========================================= */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-8 pb-32 -mt-20">
        
        {/* Ambient Glow Left */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#4a7c59] rounded-full mix-blend-screen filter blur-[200px] opacity-10 pointer-events-none -translate-x-1/2"></div>

        <div className="max-w-4xl mx-auto">
          
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-3 font-montserrat text-[10px] uppercase tracking-[0.25em] text-white/80 hover:text-white transition-all px-5 py-2.5 backdrop-blur-md"
            >
              <FaChevronLeft className="text-[8px] group-hover:-translate-x-1 transition-transform" />
              <span>Back to Journal</span>
            </Link>
          </div>

          {/* Main Content Card */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-md p-8 md:p-16 shadow-2xl relative overflow-hidden"
          >
            {/* Top Shine */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            {/* PROSE STYLING FIXED: Used backticks for multi-line string */}
            <div 
              className={`prose prose-lg prose-invert max-w-none
              prose-headings:font-bebas prose-headings:tracking-wide prose-headings:text-white
              prose-p:font-lora prose-p:text-gray-300 prose-p:leading-relaxed
              prose-a:text-[#4a7c59] prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-l-[#4a7c59] prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
              prose-strong:text-white prose-strong:font-montserrat
              prose-img:rounded-xl prose-img:shadow-xl prose-img:border prose-img:border-white/10`}
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Footer Share Section */}
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
               <span className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  Share this story
               </span>
               <div className="flex gap-4">
                  <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-[#4a7c59] hover:border-[#4a7c59] transition-all">
                     <FaShareAlt className="text-sm" />
                  </button>
                  {/* Add more share buttons as needed */}
               </div>
            </div>

          </motion.article>

        </div>
      </div>
    </div>
  );
}