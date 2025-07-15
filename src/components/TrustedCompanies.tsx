"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const TrustedCompanies = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Array of partner organizations with their types
  const companies = [
    { name: "USAID Ethiopia", type: "Development" },
    { name: "World Bank", type: "Finance" },
    { name: "Ministry of Water & Energy", type: "Government" },
    { name: "GIZ Ethiopia", type: "Development" },
    { name: "UNDP Ethiopia", type: "UN Agency" },
    { name: "SNV Netherlands", type: "NGO" },
    { name: "Oromia Regional State", type: "Government" },
    { name: "SIDA", type: "Development" },
    { name: "Green Energy Ethiopia", type: "Private Sector" },
    { name: "Mirt Stoves", type: "Manufacturer" },
    { name: "Gaia Association", type: "NGO" },
    { name: "Climate Works Foundation", type: "Foundation" },
    { name: "Addis Ababa University", type: "Academic" },
    { name: "Ethiopian Standards Agency", type: "Government" },
    { name: "Women's Development Association", type: "Community" },
    { name: "Carbon Trust", type: "Certification" },
    { name: "Bahir Dar University", type: "Academic" },
    { name: "Relief Society of Tigray", type: "NGO" },
    { name: "Jimma University", type: "Academic" },
    { name: "Ethiopian Rural Energy Agency", type: "Government" },
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-green-50 border-t-4 border-green-200 relative overflow-hidden">
      {/* Top separator line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-200 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-emerald-200 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Our Trusted Partners & Supporters
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Working together with organizations committed to clean cooking
              solutions and sustainable development in Ethiopia
            </p>
          </motion.div>

          {/* Moving Companies Strip */}
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 via-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 via-white to-transparent z-10"></div>

            {/* Moving container */}
            <motion.div
              className="flex space-x-10 py-8"
              animate={
                isPaused
                  ? {}
                  : {
                      x: [0, -240 * companies.length],
                    }
              }
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 50,
                  ease: "linear",
                },
              }}
            >
              {duplicatedCompanies.map((company, index) => (
                <motion.div
                  key={`${company.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-62 h-62 flex items-center justify-center p-4">
                    <div className="relative w-full h-full">
                      <Image
                        src="/logo.png"
                        alt={`${company.name} - ${company.type}`}
                        fill
                        className="object-contain group-hover:scale-105 transition-all duration-300 drop-shadow-lg hover:drop-shadow-xl"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Stats Row */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              {
                number: "50+",
                label: "Partner Organizations",
                color: "text-green-600",
              },
              {
                number: "8",
                label: "Regions Covered",
                color: "text-emerald-600",
              },
              {
                number: "2M+",
                label: "Lives Impacted",
                color: "text-teal-600",
              },
              {
                number: "80%",
                label: "Emission Reduction",
                color: "text-green-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className={`text-3xl sm:text-4xl font-bold mb-2 ${stat.color}`}
                >
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom separator line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
    </section>
  );
};

export default TrustedCompanies;
