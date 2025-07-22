"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", hasDropdown: false },
    {
      name: "About",
      href: "#about",
      hasDropdown: true,
      dropdownItems: [
        { name: "Who we are", href: "#about" },
        { name: "Executive comite", href: "#about" },
        { name: "Theory of change", href: "#about" },
        { name: "Our mission", href: "#about" },
        { name: "Our vission", href: "#about" },
      ],
    },
    {
      name: "Services",
      href: "#services",
      hasDropdown: true,
      dropdownItems: [
        { name: "Who we do", href: "#services" },
        { name: "Projects", href: "#services" },
        { name: "Community Outreach", href: "#services" },
        { name: "Technical Support", href: "#services" },
      ],
    },
    {
      name: "Membership",
      href: "#membership",
      hasDropdown: true,
      dropdownItems: [
        { name: "Member registration", href: "#membership" },
        { name: "Member login", href: "#membership" },
        { name: "Member packages", href: "#membership" },
        { name: "Our members", href: "#membership" },
      ],
    },
    {
      name: "Sector Research",
      href: "#research",
      hasDropdown: true,
      dropdownItems: [
        { name: "Journals", href: "#research" },
        { name: "Manuals", href: "#research" },
        { name: "Policies and Strategies", href: "#research" },
        { name: "Reasearch and Studies", href: "#research" },
        { name: "Others", href: "#research" },
      ],
    },
    {
      name: "Blog",
      href: "#blog",
      hasDropdown: true,
      dropdownItems: [
        { name: "Latest News", href: "#blog" },
        { name: "Success Stories", href: "#blog" },
        { name: "Technical Articles", href: "#blog" },
        { name: "Community Updates", href: "#blog" },
      ],
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-transparent backdrop-blur-md shadow-lg shadow-[#0D98BA]/10"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="flex items-center hover:opacity-90 transition-opacity"
            >
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="Ethiopian Clean Cooking Alliance Logo"
                  width={140}
                  height={140}
                  className="object-contain"
                  priority
                />
              </div>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.hasDropdown && setActiveDropdown(item.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`${
                    isScrolled
                      ? "text-black hover:text-[#0D98BA]"
                      : "text-white hover:text-[#0D98BA]"
                  } transition-colors duration-200 font-medium relative group flex items-center`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180 ${
                        isScrolled ? "text-black" : "text-white"
                      }`}
                    />
                  )}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 ${
                      isScrolled ? "bg-[#0D98BA]" : "bg-[#0D98BA]"
                    } group-hover:w-full transition-all duration-300`}
                  ></span>
                </motion.a>

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <AnimatePresence>
                    <motion.div
                      className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-[#0D98BA]/50 py-2 z-50"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.dropdownItems?.map(
                        (dropdownItem, dropdownIndex) => (
                          <motion.a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToSection(dropdownItem.href);
                              setActiveDropdown(null);
                            }}
                            className="block px-4 py-2 text-gray-700 hover:text-[#0D98BA] hover:bg-[#E6F4F8] transition-colors duration-200"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.1,
                              delay: dropdownIndex * 0.05,
                            }}
                          >
                            {dropdownItem.name}
                          </motion.a>
                        )
                      )}
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-gradient-to-r from-primary to-primary hover:from-primary/90 hover:to-primary/90 text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
            >
              Get Started
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/20 backdrop-blur-md border-t border-[#0D98BA]/50 shadow-lg">
              {navItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="flex items-center justify-between px-4 py-3 text-base font-medium text-white hover:text-[#0D98BA] hover:bg-[#0D98BA]/20 rounded-lg transition-colors duration-200"
                  >
                    {item.name}
                    {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                  </a>
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.dropdownItems.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(dropdownItem.href);
                          }}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-[#0D98BA] hover:bg-[#0D98BA]/10 rounded-lg transition-colors duration-200"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-3 py-2">
                <Button
                  onClick={() => scrollToSection("#contact")}
                  className="w-full bg-gradient-to-r from-primary to-primary hover:from-primary/90 hover:to-primary/90 text-white shadow-lg shadow-primary/25"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
