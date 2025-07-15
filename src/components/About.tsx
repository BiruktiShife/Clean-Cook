"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Lightbulb } from "lucide-react";
import Image from "next/image";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Health & Environment",
      description:
        "We're committed to improving community health and protecting Ethiopia's environment through clean cooking solutions that reduce indoor air pollution and deforestation.",
    },
    {
      icon: Users,
      title: "Community Empowerment",
      description:
        "Our success is measured by community impact. We work closely with local leaders and women's groups to build sustainable clean cooking ecosystems.",
    },
    {
      icon: Lightbulb,
      title: "Local Innovation",
      description:
        "We develop culturally appropriate technologies using local materials and traditional knowledge, creating solutions that fit Ethiopian cooking practices.",
    },
    {
      icon: Award,
      title: "Sustainable Impact",
      description:
        "Every program is designed for long-term sustainability, with local manufacturing, maintenance networks, and community ownership ensuring lasting change.",
    },
  ];

  const skills = [
    "Clean Cookstoves",
    "Community Training",
    "Environmental Conservation",
    "Sustainable Energy",
    "Health & Safety",
    "Technology Innovation",
  ];

  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-gradient-to-br from-emerald-100 via-green-50 to-teal-100 relative overflow-hidden border-t-4 border-green-300"
    >
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-green-600 to-transparent"></div>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-200 rounded-full blur-3xl"></div>
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
              About Us
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Transforming Lives Through Clean Cooking Since 2015
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are a dedicated alliance of organizations, communities, and
              individuals committed to promoting clean cooking solutions across
              Ethiopia, improving health outcomes, environmental sustainability,
              and economic opportunities.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Building a Sustainable Future, One Community at a Time
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded with a vision to address the critical need for clean
                cooking solutions in Ethiopia, we've grown from a small
                initiative to a trusted alliance serving communities nationwide.
                Our journey has been marked by continuous innovation, community
                engagement, and an unwavering commitment to improving lives.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Today, we combine proven clean cooking technologies with
                community- centered approaches to deliver solutions that not
                only meet immediate needs but also create lasting environmental
                and health benefits.
              </p>

              {/* Skills */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Our Focus Areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Badge variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Content - Image & Stats */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Company Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-green-500/20">
                  <Image
                    src="/image.jfif"
                    alt="Our team and workspace"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent"></div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full opacity-80"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-emerald-500 rounded-full opacity-60"></div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    number: "2M+",
                    label: "Households Reached",
                    color: "text-green-600",
                  },
                  {
                    number: "80%",
                    label: "Smoke Reduction",
                    color: "text-emerald-600",
                  },
                  {
                    number: "8",
                    label: "Regions Covered",
                    color: "text-teal-600",
                  },
                  {
                    number: "500+",
                    label: "Women Entrepreneurs",
                    color: "text-green-500",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-0">
                        <div
                          className={`text-3xl sm:text-4xl font-bold mb-2 ${stat.color}`}
                        >
                          {stat.number}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Values Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <value.icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
