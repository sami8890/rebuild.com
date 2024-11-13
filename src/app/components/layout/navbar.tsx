"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, ChevronDown, Menu, X, Heart } from "lucide-react";
import Link from "next/link";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState("");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    {
      title: "Properties",
      dropdown: [
        "All Properties",
        "Featured",
        "New Developments",
        "Investment",
      ],
      href: "/properties",
    },
    {
      title: "Our Projects",
      dropdown: ["Current Projects", "Completed", "Upcoming"],
      href: "/projects",
    },
    {
      title: "Buy",
      dropdown: ["Buying Guide", "Financing", "Property Search"],
      href: "/buy",
    },
    {
      title: "Mortgage",
      href: "/mortgage",
    },
    {
      title: "Sell",
      dropdown: ["Valuation", "Marketing", "Services"],
      href: "/sell",
    },
    {
      title: "About Berlin",
      dropdown: ["City Guide", "Districts", "Market Report"],
      href: "/about-berlin",
    },
  ];

  return (
    <>
      {/* Top Bar */}
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="hidden md:block bg-gray-800 text-gray-300 py-2 px-4"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Link
              href="mailto:contact@firstcitiz.com"
              className="flex items-center gap-2 hover:text-gray-100 transition-colors"
            >
              <Mail size={16} />
              <span>contact@firstcitiz.com</span>
            </Link>
            <Link
              href="tel:+4930417172"
              className="flex items-center gap-2 hover:text-gray-100 transition-colors"
            >
              <Phone size={16} />
              <span>+49 30 41 71 72</span>
            </Link>
          </div>
          <Link
            href="/wishlist"
            className="flex items-center gap-2 hover:text-gray-100 transition-colors"
          >
            <Heart size={16} />
            <span>Wishlist</span>
            <span className="bg-gray-700 px-2 py-0.5 rounded-full text-sm">
              0
            </span>
          </Link>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <motion.nav
        className={`sticky top-0 z-50 w-full ${isScrolled ? "bg-gray-900 shadow-md" : "bg-gray-900/95"
          } transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-2xl font-bold text-white"
              >
                First Citiz
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navigationItems.map((item) => (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown("")}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-md"
                  >
                    {item.title}
                    {item.dropdown && <ChevronDown size={16} />}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg py-2"
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                        >
                          {dropdownItem}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="lg:hidden p-2 text-gray-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-gray-900 border-t"
            >
              <div className="px-4 py-2 space-y-1">
                {navigationItems.map((item) => (
                  <div key={item.title}>
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.title ? "" : item.title
                        )
                      }
                      className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 rounded-md"
                    >
                      {item.title}
                      {item.dropdown && (
                        <ChevronDown
                          className={`transform transition-transform ${activeDropdown === item.title ? "rotate-180" : ""
                            }`}
                          size={16}
                        />
                      )}
                    </button>

                    {item.dropdown && activeDropdown === item.title && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="pl-6 pb-2"
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem}
                            href="#"
                            className="block px-3 py-2 text-sm text-gray-300 hover:text-white"
                          >
                            {dropdownItem}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;