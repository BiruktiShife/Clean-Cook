"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const footerLinks = {
    programs: [
      { name: "Clean Cookstoves", href: "#services" },
      { name: "Community Training", href: "#services" },
      { name: "Health & Safety", href: "#services" },
      { name: "Environmental Impact", href: "#services" },
      { name: "Technology Innovation", href: "#services" },
      { name: "Sustainable Energy", href: "#services" },
    ],
    organization: [
      { name: "About Us", href: "#about" },
      { name: "Our Mission", href: "#about" },
      { name: "Executive Committee", href: "#about" },
      { name: "Success Stories", href: "#blog" },
      { name: "Impact Reports", href: "#research" },
      { name: "Contact", href: "#contact" },
    ],
    resources: [
      { name: "Research Reports", href: "#research" },
      { name: "Technical Guides", href: "#blog" },
      { name: "Community Updates", href: "#blog" },
      { name: "Membership Info", href: "#membership" },
      { name: "Partner Network", href: "#membership" },
      { name: "Join Alliance", href: "#membership" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  const contactInfo = [
    { icon: Mail, text: "ethiopiacleancooking.org" },
    { icon: Phone, text: "+251 11 123 4567" },
    { icon: MapPin, text: "Addis Ababa, Ethiopia" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-primary to-gray-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/20"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Company Info */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <div className="mb-6">
                  <div className="relative">
                    <Image
                      src="/logo.png"
                      alt="Ethiopian Clean Cooking Alliance Logo"
                      width={90}
                      height={90}
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="text-green-100/80 leading-relaxed mb-6 text-lg">
                  Empowering Ethiopian communities through sustainable clean
                  cooking solutions. We promote efficient cookstoves, renewable
                  energy, and environmental conservation for a healthier,
                  greener future.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/60 transition-colors duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-primary-foreground/90 leading-relaxed">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-primary-foreground/80 font-semibold mb-4">
                  Follow Us
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="w-12 h-12 bg-gray-700/50 hover:bg-primary hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 group border border-gray-600/30 hover:border-primary"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5 text-primary-foreground/80 group-hover:text-white transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-primary-foreground/80 mb-6 pb-2 border-b border-primary/30">
                Programs
              </h4>
              <ul className="space-y-3">
                {footerLinks.programs.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:bg-primary transition-colors"></span>
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-primary-foreground/80 mb-6 pb-2 border-b border-primary/30">
                Organization
              </h4>
              <ul className="space-y-3">
                {footerLinks.organization.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:bg-primary transition-colors"></span>
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-primary-foreground/80 mb-6 pb-2 border-b border-primary/30">
                Resources
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:bg-primary transition-colors"></span>
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative separator */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent h-px"></div>
        <div className="relative bg-primary/20 h-px"></div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950/80 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <motion.div
                className="flex flex-col md:flex-row items-center gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-primary-foreground/60">
                  © 2025 All rights reserved.
                </p>
                <div className="flex items-center gap-4 text-sm text-primary-foreground/50">
                  <a
                    href="#"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Privacy Policy
                  </a>
                  <span>•</span>
                  <a
                    href="#"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Terms of Service
                  </a>
                  <span>•</span>
                  <a
                    href="#"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Cookies
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={scrollToTop}
                  className="rounded-full bg-gray-700/30 hover:bg-primary hover:text-white border border-gray-600/30 hover:border-primary transition-all duration-300"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="h-4 w-4 text-primary-foreground/80" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
