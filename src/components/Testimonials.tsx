"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Almaz Tadesse",
      position: "Director",
      company: "Ministry of Water and Energy",
      content:
        "The Ethiopian Clean Cooking Alliance has been instrumental in transforming our national clean cooking strategy. Their comprehensive approach and technical expertise have helped us reach over 2 million households with improved cookstoves, significantly reducing indoor air pollution and deforestation.",
      rating: 5,
      avatar: "AT",
    },
    {
      id: 2,
      name: "Kebede Worku",
      position: "Community Leader",
      company: "Oromia Regional State",
      content:
        "Thanks to ECCA's training programs, our women's cooperative now produces and distributes efficient cookstoves throughout our district. This initiative has not only improved health outcomes but also created sustainable income opportunities for over 500 women in our community.",
      rating: 5,
      avatar: "KW",
    },
    {
      id: 3,
      name: "Sarah Mitchell",
      position: "Program Manager",
      company: "USAID Ethiopia",
      content:
        "Our partnership with the Ethiopian Clean Cooking Alliance has exceeded all expectations. Their deep understanding of local contexts and innovative solutions have made our clean cooking interventions more effective and sustainable than ever before.",
      rating: 5,
      avatar: "SM",
    },
    {
      id: 4,
      name: "Ato Girma Bekele",
      position: "CEO",
      company: "Green Energy Ethiopia",
      content:
        "ECCA's market development initiatives have been game-changing for our business. Through their support, we've scaled our improved cookstove production by 300% and established distribution networks in 8 regions, reaching rural communities that need clean cooking solutions most.",
      rating: 5,
      avatar: "GB",
    },
    {
      id: 5,
      name: "Dr. Hanna Getachew",
      position: "Research Director",
      company: "Ethiopian Health Institute",
      content:
        "The health impact studies conducted with ECCA have provided crucial evidence for policy makers. Their work has documented a 60% reduction in respiratory illnesses among households using improved cookstoves, making a compelling case for scaling clean cooking solutions nationwide.",
      rating: 5,
      avatar: "HG",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-[#0D98BA] to-900 to-gray-800 text-white relative overflow-hidden border-t-4 border-turquoise-300"
    >
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#0D98BA] to-transparent"></div>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/6 w-56 h-56 bg-gradient-to-br from-[#0D98BA] to-[#0D98BA] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/6 w-72 h-72 bg-gradient-to-br from-[#0D98BA] to-[#0D98BA] rounded-full blur-3xl"></div>
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
              Testimonials
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What Our Partners Say
            </h2>
            <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our partners and
              stakeholders have to say about their experience working with the
              Ethiopian Clean Cooking Alliance.
            </p>
          </motion.div>

          {/* Main Testimonial */}
          <div className="relative mb-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                <Card className="relative overflow-hidden bg-gradient-to-br from-[#BD98BA]/5A]/5 to-emerald-50 border bor[#0D98BA]98BA]/50 shadow-xl hover:sh[##D98BA]D98BA]/20 transition-all duration-300">
                  <CardContent className="p-8 lg:p-12 text-center">
                    {/* Quote Icon */}
                    <motion.div
                      className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500o-b-blue-600nded-full mb-6 shadow-lg shadow-green-500/25"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <Quote className="h-8 w-8 text-white" />
                    </motion.div>

                    {/* Rating */}
                    <motion.div
                      className="flex justify-center mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {[...Array(testimonials[currentIndex].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 text-yellow-400 fill-current"
                          />
                        )
                      )}
                    </motion.div>

                    {/* Testimonial Content */}
                    <motion.blockquote
                      className="text-lg lg:text-xl text-foreground mb-8 leading-relaxed italic"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      "{testimonials[currentIndex].content}"
                    </motion.blockquote>

                    {/* Client Info */}
                    <motion.div
                      className="flex items-center justify-center gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                        {testimonials[currentIndex].avatar}
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-foreground">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonials[currentIndex].position} at{" "}
                          {testimonials[currentIndex].company}
                        </div>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-blue-300  textblue-600 h hover:-blue-50 hover0 hover:border0- transi0 transition-all duration-300"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-lueb-300  tex-blue-600 h hover:bblue-50 hover0 hover:border-0 transi0 transition-all duration-300"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center gap-2 mb-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-cyan-500 scale-125 shadow-lg shadow-cyan-500/50"
                    : "bg-cyan-200 hover:bg-cyan-300"
                }`}
              />
            ))}
          </div>

          {/* All Testimonials Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    {/* Rating */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      "{testimonial.content.substring(0, 120)}..."
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-sm">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {testimonial.position} at {testimonial.company}
                        </div>
                      </div>
                    </div>
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

export default Testimonials;
