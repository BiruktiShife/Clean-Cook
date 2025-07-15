"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", company: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const features = [
    {
      icon: MessageSquare,
      title: "Partnership Opportunities",
      description:
        "Join our network of partners working towards clean cooking solutions",
    },
    {
      icon: Users,
      title: "Community Programs",
      description:
        "Connect with our community outreach and training initiatives",
    },
    {
      icon: Zap,
      title: "Technical Support",
      description:
        "Get expert guidance on clean cookstove implementation and maintenance",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-gradient-to-br from-slate-100 via-gray-50 to-zinc-100 relative overflow-hidden border-t-4 border-emerald-400"
    >
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-emerald-600 to-transparent"></div>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-slate-300 to-gray-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-zinc-300 to-slate-300 rounded-full blur-3xl"></div>
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
              Contact Us
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Join Our Clean Cooking Mission
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to make a difference in Ethiopian communities? Get in touch
              with us today and let's discuss how we can work together to
              promote clean cooking solutions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-xl border border-green-200/50 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Partner with us
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Interested in joining our clean cooking alliance? Fill out
                    the form below and we'll get back to you as soon as
                    possible.
                  </p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      className="text-center py-8"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. We'll get back to you within
                        24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            required
                            className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                            required
                            className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Company (Optional)</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your Company Name"
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your project..."
                          rows={5}
                          required
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-6 text-lg font-semibold group shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300"
                      >
                        {isSubmitting ? (
                          <motion.div
                            className="flex items-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          >
                            <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                            Sending...
                          </motion.div>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Contact Image */}
              <div className="mb-8">
                <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-green-500/20">
                  <Image
                    src="/images.webp"
                    alt="Contact us"
                    width={600}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">Get In Touch</h3>
                    <p className="text-green-100">We'd love to hear from you</p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Why Choose Us?
                </h3>
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                      <feature.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
