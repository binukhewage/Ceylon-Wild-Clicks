"use client";
import React from "react";
import Image from "next/image";
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
  FaSafari,
} from "react-icons/fa";
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

const About = () => {
  // Team member data
  const teamMembers = [
    {
      id: 1,
      name: "Roshan Peiris",
      role: "Lead Photographer & Founder",
      bio: "I'm Roshan Peiris, a Sri Lankan wildlife and nature photographer. Since 2019, my passion for capturing Sri Lanka's untamed beauty has grown into a full-time pursuit. After dedicating myself entirely to wildlife photography in 2024, I now guide wildlife photo safaris to share the magical experience of nature with enthusiasts, offering an immersive journey through the island's incredible landscapes and biodiversity.",
      image: "/images/roshan3.jpg",
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
      icon: <FaLeaf className="text-xl" />,
    },
    {
      id: 2,
      title: "Prime Locations & Exceptional Encounters",
      description:
        "We take you to the heart of Sri Lanka's most iconic national parks and biodiversity hotspots including Wilpattu, Yala, Sinharaja, Kumana, Horton Plains and Minneriya/Hurulu Eco park.",
      icon: <FaPaw className="text-xl" />,
    },
    {
      id: 3,
      title: "Tailored for Photographers",
      description:
        "Our itineraries are designed to provide ample time for observation and photography, with flexible schedules and optimal lighting conditions.",
      icon: <FaCamera className="text-xl" />,
    },
    {
      id: 4,
      title: "Small Group, Big Experience",
      description:
        "Our small group size (maximum 4) ensures a personalized and immersive experience. Our safari jeeps accommodate only 2 photographers to enhance working space.",
      icon: <FaUsers className="text-xl" />,
    },
  ];

  return (
    <div
      className={`${bebas.variable} ${lora.variable} ${montserrat.variable} min-h-screen bg-black text-white`}
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

      {/* Hero Section */}
      <div className="relative h-96 w-full overflow-hidden bg-black">
        {/* Background Texture */}
        <div className="absolute inset-0 wildlife-texture"></div>

        {/* Hero Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/about1.jpg"
            alt="Wildlife photography"
            fill
            className="object-cover opacity-70 object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/90" />
        </div>

        {/* Hero Text */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1
            className="font-bebas text-5xl md:text-6xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            ABOUT <span className="text-earth-green">CEYLON WILD CLICKS</span>
          </motion.h1>
          <motion.p
            className="font-lora text-lg max-w-2xl text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Capturing the wild heart of Sri Lanka through ethical photography
            and immersive experiences
          </motion.p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="relative bg-black  px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Our Story Section - Modern Centered Layout */}
          <div className="relative bg-black pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <motion.p
                className="font-lora text-gray-300 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Founded in 2010, Ceylon Wild Clicks began as a passionate
                endeavor to showcase Sri Lanka's incredible biodiversity through
                the lens of a camera. What started as a solo photography project
                has evolved into a dedicated team of wildlife enthusiasts,
                photographers, and conservation advocates.
              </motion.p>
              <motion.p
                className="font-lora text-gray-300 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Our journey began in the lush rainforests of Sinharaja, where
                our founder Roshan Peiris spent months documenting rare bird
                species. As word spread about his stunning captures, more people
                wanted to experience these magical moments firsthand—thus, our
                wildlife tours were born.
              </motion.p>
              <motion.p
                className="font-lora text-gray-300 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Today, we balance our photography work with responsible
                ecotourism, ensuring that our presence in natural habitats
                contributes to conservation efforts rather than disturbing them.
                We've partnered with local conservation organizations and
                trained our guides in ethical wildlife practices.
              </motion.p>
            </div>

            {/* Stats Section */}
            <motion.div
              className="max-w-4xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all">
                <div className="bg-earth-green/10 p-4 rounded-full mx-auto mb-3 w-fit">
                  <FaCamera className="text-earth-green text-2xl" />
                </div>
                <h4 className="font-bebas text-2xl text-white">15,000+</h4>
                <p className="font-montserrat text-xs text-gray-400 uppercase tracking-wider">
                  Photos Captured
                </p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all">
                <div className="bg-earth-green/10 p-4 rounded-full mx-auto mb-3 w-fit">
                  <FaUsers className="text-earth-green text-2xl" />
                </div>
                <h4 className="font-bebas text-2xl text-white">1,200+</h4>
                <p className="font-montserrat text-xs text-gray-400 uppercase tracking-wider">
                  Guests Hosted
                </p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all">
                <div className="bg-earth-green/10 p-4 rounded-full mx-auto mb-3 w-fit">
                  <FaLeaf className="text-earth-green text-2xl" />
                </div>
                <h4 className="font-bebas text-2xl text-white">8</h4>
                <p className="font-montserrat text-xs text-gray-400 uppercase tracking-wider">
                  National Parks
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="relative bg-black py-15 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
                Our Difference
              </span>
            </motion.div>
            <motion.h2
              className="font-bebas text-4xl sm:text-5xl text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              WHY CHOOSE <span className="text-earth-green">US</span>
            </motion.h2>
            <motion.p
              className="font-lora text-gray-400 max-w-3xl mx-auto text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Ceylon Wild Clicks isn't just a tour company; we're your gateway
              to capturing the untamed beauty of Sri Lankan wildlife through
              your lens.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                className=" backdrop-blur-sm rounded-sm p-6 border border-gray-800 hover:border-earth-green/30 transition-all duration-300 hover:translate-y-[-5px]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                style={{ backgroundColor: "#0D0D0C" }}
              >
                <div className="flex items-start mb-4">
                  <div className="bg-earth-green/10 p-3 rounded-sm mr-4">
                    <div className="text-earth-green">{feature.icon}</div>
                  </div>
                  <div>
                    <h1 className="font-bebas text-2xl text-white mb-2">
                      {feature.title}
                    </h1>
                    <p className="font-lora text-sm text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <a
              href="/tours"
              className="inline-flex items-center font-montserrat text-sm text-white bg-earth-green hover:bg-earth-green-accent px-6 py-3 rounded-sm transition-colors uppercase tracking-wider"
            >
              Explore Our Tours
              <FaChevronRight className="ml-2 text-xs" />
            </a>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-earth-green/5 blur-3xl"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl"></div>
      </div>

      {/* Mission & Values Section */}
      <section className="py-20 bg-black px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-montserrat text-xs uppercase tracking-[0.3em] text-earth-green">
              What Drives Us
            </span>
            <h2 className="font-bebas text-4xl sm:text-5xl text-white mt-2 mb-4">
              MISSION & <span className="text-earth-green">VALUES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tile 1 */}
            <motion.div
              className="p-10 rounded-xl border border-gray-800 hover:border-earth-green/40 transition-all text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={{ backgroundColor: "#0D0D0C" }}
            >
              <h3 className="font-bebas text-2xl text-white mb-4">
                Our Mission
              </h3>
              <p className="font-lora text-gray-300 text-sm leading-relaxed">
                To capture and share the breathtaking beauty of Sri Lanka's
                wildlife through ethical photography practices while fostering
                appreciation and support for conservation efforts among locals
                and visitors alike.
              </p>
            </motion.div>

            {/* Tile 2 */}
            <motion.div
              className="p-10 rounded-xl border border-gray-800 hover:border-earth-green/40 transition-all text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ backgroundColor: "#0D0D0C" }}
            >
              <h3 className="font-bebas text-2xl text-white mb-4">
                Our Values
              </h3>
              <ul className="font-lora text-gray-300 text-sm space-y-2">
                <li>Respect for wildlife and their habitats</li>
                <li>Ethical photography practices</li>
                <li>Conservation through education</li>
                <li>Supporting local communities</li>
              </ul>
            </motion.div>

            {/* Tile 3 */}
            <motion.div
              className=" p-10 rounded-xl border border-gray-800 hover:border-earth-green/40 transition-all text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              style={{ backgroundColor: "#0D0D0C" }}
            >
              <h3 className="font-bebas text-2xl text-white mb-4">
                Our Promise
              </h3>
              <p className="font-lora text-gray-300 text-sm leading-relaxed">
                We commit to minimizing our environmental impact, following park
                regulations, maintaining safe distances from animals, and
                contributing a portion of our proceeds to wildlife conservation
                initiatives in Sri Lanka.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

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
                    Coutries covered
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
                    className="w-12 h-12 rounded-full bg-earth-green/10 hover:bg-earth-green/20 border border-earth-green/20 flex items-center justify-center transition-all duration-300 group"
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
                <p className="font-lora italic text-earth-green/70 text-base">
                  "Capturing the wild soul of Sri Lanka"
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="relative bg-black pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden wildlife-texture">
                  <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <h3 className="font-bebas text-3xl text-white mb-4">
                        READY FOR YOUR <span className="text-earth-green">WILDLIFE ADVENTURE?</span>
                      </h3>
                      <p className="font-lora text-gray-300 max-w-2xl mx-auto mb-6">
                        Get in touch today and let’s plan an unforgettable journey into the wilds of Sri Lanka.
                      </p>
                      <a href="#"
                         className="inline-block bg-earth-green hover:bg-earth-green-accent text-white px-8 py-3 rounded-sm uppercase font-montserrat tracking-wider transition-colors"
                      >
                        BOOK NOW
                      </a>
                    </motion.div>
                  </div>
                </div>
        </div>
      </div>
    </div>
  );
};

export default About;
