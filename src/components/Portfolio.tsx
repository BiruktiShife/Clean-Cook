"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Community Training",
    "Health & Safety",
    "Technology Innovation",
    "Clean Cookstoves",
  ];

  const projects = [
    {
      id: 1,
      title: "Clean Cookstove Distribution Program",
      description:
        "Large-scale distribution of improved cookstoves across rural Ethiopia, reaching over 50,000 households with fuel-efficient cooking solutions that reduce smoke emissions by 80%.",
      image: "/agri.jpeg",
      category: "Clean Cookstoves",
      technologies: [
        "Community Outreach",
        "Local Manufacturing",
        "Quality Control",
        "Impact Monitoring",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Women's Cooperative Training Initiative",
      description:
        "Comprehensive training program empowering 500+ women across 8 regions to become local cookstove entrepreneurs, creating sustainable income while promoting clean cooking.",
      image: "/bio.webp",
      category: "Community Training",
      technologies: [
        "Business Training",
        "Technical Skills",
        "Microfinance",
        "Mentorship",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Health Impact Assessment Study",
      description:
        "Longitudinal study measuring health improvements in communities using clean cookstoves, documenting 60% reduction in respiratory illnesses among women and children.",
      image: "/eth.jpg",
      category: "Health & Safety",
      technologies: [
        "Data Collection",
        "Health Monitoring",
        "Statistical Analysis",
        "Community Surveys",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Biomass Innovation Lab",
      description:
        "Research and development facility creating next-generation cookstoves using locally available biomass materials, improving efficiency by 40% over traditional designs.",
      image: "/image.jfif",
      category: "Technology Innovation",
      technologies: [
        "R&D",
        "Material Science",
        "Prototype Testing",
        "Local Materials",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Carbon Credit Verification Program",
      description:
        "Establishing carbon credit systems for clean cookstove projects, generating additional revenue streams for communities while contributing to global climate goals.",
      image: "/agri.jpeg",
      category: "Technology Innovation",
      technologies: [
        "Carbon Monitoring",
        "Verification Systems",
        "Impact Measurement",
        "Financial Modeling",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "School Feeding Program Enhancement",
      description:
        "Upgrading cooking facilities in 200+ schools with institutional cookstoves, improving meal quality while reducing cooking time and fuel costs by 50%.",
      image: "/bio.webp",
      category: "Community Training",
      technologies: [
        "Institutional Stoves",
        "Training Programs",
        "Maintenance Support",
        "Nutrition Education",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden border-t-4 border-teal-300"
    >
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-teal-600 to-transparent"></div>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/6 w-56 h-56 bg-gradient-to-br from-blue-300 to-indigo-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/6 w-72 h-72 bg-gradient-to-br from-purple-300 to-blue-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge
              variant="outline"
              className="mb-4 text-primary border-primary"
            >
              Our Portfolio
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our latest work and see how we've helped businesses
              achieve their digital goals through innovative solutions and
              exceptional design.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={`transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-500/25"
                    : "border-green-300 text-green-700 hover:bg-green-50 hover:border-green-400"
                }`}
              >
                {filter}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  layout
                >
                  <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-green-100 shadow-lg hover:shadow-green-500/20 bg-white/80 backdrop-blur-sm">
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <div className="aspect-video relative">
                        <Image
                          src="/image.jfif"
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white font-bold text-lg">
                          {project.title
                            .split(" ")
                            .map((word) => word[0])
                            .join("")}
                        </div>
                      </div>

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white/90 text-black hover:bg-white"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white/90 text-black hover:bg-white"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      {/* Category Badge */}
                      <Badge variant="secondary" className="mb-3 text-xs">
                        {project.category}
                      </Badge>

                      {/* Project Title */}
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>

                      {/* Project Description */}
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs px-2 py-1"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 text-xs hover:bg-primary/10"
                        >
                          <ExternalLink className="h-3 w-3 mr-1" />
                          View Live
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 text-xs hover:bg-primary/10"
                        >
                          <Github className="h-3 w-3 mr-1" />
                          Source
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
