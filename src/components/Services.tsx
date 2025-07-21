"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Flame,
  Users,
  Heart,
  Leaf,
  GraduationCap,
  Wrench,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Flame,
      title: "Clean Cookstove Distribution",
      description:
        "Providing efficient, affordable cookstoves that reduce fuel consumption and harmful emissions for healthier cooking.",
      features: [
        "Fuel-Efficient Stoves",
        "Smoke Reduction",
        "Affordable Pricing",
        "Local Manufacturing",
      ],
      color: "text-green-600",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Users,
      title: "Community Training Programs",
      description:
        "Comprehensive training programs to educate communities on clean cooking practices and stove maintenance.",
      features: [
        "Hands-on Training",
        "Community Workshops",
        "Local Champions",
        "Ongoing Support",
      ],
      color: "text-emerald-600",
      bgColor: "bg-emerald-500/10",
    },
    {
      icon: Heart,
      title: "Health & Safety Education",
      description:
        "Educational initiatives focused on the health benefits of clean cooking and indoor air quality improvement.",
      features: [
        "Health Awareness",
        "Safety Training",
        "Medical Partnerships",
        "Impact Monitoring",
      ],
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      icon: Leaf,
      title: "Environmental Conservation",
      description:
        "Programs focused on reducing deforestation, carbon emissions, and promoting sustainable fuel sources.",
      features: [
        "Carbon Reduction",
        "Sustainable Fuels",
        "Reforestation",
        "Environmental Monitoring",
      ],
      color: "text-green-600",
      bgColor: "bg-green-600/10",
    },
    {
      icon: GraduationCap,
      title: "Capacity Building",
      description:
        "Building local capacity through training programs for technicians, entrepreneurs, and community leaders.",
      features: [
        "Technical Training",
        "Business Development",
        "Leadership Programs",
        "Certification Courses",
      ],
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Wrench,
      title: "Technical Support & Maintenance",
      description:
        "Ongoing technical support, maintenance services, and repair programs to ensure long-term stove functionality.",
      features: [
        "Repair Services",
        "Maintenance Training",
        "Spare Parts Supply",
        "Quality Assurance",
      ],
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-[#0D98BA] to-gray-800 text-white relative overflow-hidden border-t-4 border-[#0D98BA]"
    >
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#0D98BA] to-transparent"></div>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-[#0D98BA] to-[#0D98BA] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-[#0D98BA] to-[#0D98BA] rounded-full blur-3xl"></div>
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
              className="mb-4 text-[#0D98BA] border-[#0D98BA]"
            >
              Our Programs
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Comprehensive Clean Cooking Solutions
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              From community training to technology deployment, we offer
              end-to-end clean cooking services that help Ethiopian communities
              thrive sustainably.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-[#0D98BA]/20 shadow-lg hover:shadow-[#0D98BA]/20 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <motion.div
                      className={`inline-flex items-center justify-center w-14 h-14 ${service.bgColor} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      <service.icon className={`h-7 w-7 ${service.color}`} />
                    </motion.div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          className="flex items-center text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.1 + featureIndex * 0.05,
                          }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="h-4 w-4 text-[#0D98BA] mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    <Button
                      variant="ghost"
                      className="w-full group/btn hover:bg-primary/10 hover:text-primary"
                      onClick={scrollToContact}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            className="text-center bg-gradient-to-r from-[#0D98BA]/10 via-emerald-500/5 to-teal-500/10 rounded-2xl p-8 lg:p-12 border border-[#0D98BA]/50 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 ">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-white mb-8 max-w-2xl mx-auto ">
              Let's discuss how our services can help you achieve your goals and
              drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-gradient-to-r from-[#0D98BA] to-[#0D98BA] hover:from-[#0B7A94] hover:to-[#0B7A94] text-white px-8 py-6 text-lg font-semibold group shadow-lg shadow-[#0D98BA]/25 hover:shadow-[#0D98BA]/40 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.querySelector("#portfolio");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="px-8 py-6 text-lg font-semibold border-[#0D98BA] text-[#0D98BA] hover:bg-[#0D98BA]/10 hover:border-[#0D98BA] transition-all duration-300"
              >
                View Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
