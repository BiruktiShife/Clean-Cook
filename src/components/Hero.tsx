"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    {
      src: "/agri.jpeg",
      title: "Sustainable Agriculture",
      description:
        "Promoting clean cooking solutions for agricultural communities across Ethiopia",
    },
    {
      src: "/bio.webp",
      title: "Biomass Innovation",
      description:
        "Developing efficient biomass cookstoves to reduce environmental impact",
    },
    {
      src: "/eth.jpg",
      title: "Ethiopian Communities",
      description:
        "Empowering local communities with clean cooking technologies and training",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Rotating Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentImageIndex ? 1 : 0,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Image
              src={image.src}
              alt={image.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-transparent to-emerald-900/30"></div>
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-emerald-500/20 rounded-full blur-2xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-3/4 left-1/2 w-32 h-32 bg-teal-500/25 rounded-full blur-xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -20, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/6 right-1/6 w-40 h-40 bg-green-600/15 rounded-full blur-2xl"
          animate={{
            x: [0, 60, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto pt-20 md:pt-32">
          {/* Main heading */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforming{" "}
            <motion.span
              className="text-green-400 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Ethiopia
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-green-400/50 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </motion.span>{" "}
            Through Clean Cooking
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Empowering Ethiopian communities with sustainable clean cooking
            solutions. We promote efficient cookstoves, renewable energy, and
            environmental conservation for a healthier, greener future.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-6 text-lg font-semibold group shadow-lg"
            >
              Membership Registration
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#about")}
              className="px-8 py-6 text-lg font-semibold group border-white/30 text-black hover:bg-white/10"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              explore projects
            </Button>
          </motion.div>

          {/* Dynamic Image Description */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              className="mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-2 text-center">
                  {heroImages[currentImageIndex].title}
                </h3>
                <p className="text-gray-200 text-center leading-relaxed">
                  {heroImages[currentImageIndex].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Image Indicators */}
          <div className="flex justify-center gap-2 mb-12">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
