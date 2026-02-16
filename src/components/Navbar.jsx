/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Sun, Moon, ChevronDown, ChevronRight, ArrowUpRight } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import Contact from "./Contact";
import { useThemeContext } from "./ThemeContext";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { theme, setTheme } = useThemeContext();
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    setIsOpen(false);
    setHoveredLink(null);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setHoveredLink(null);
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    {
      name: "No-Code Platform",
      path: "/no-code-platform",
      highlight: true,
      badge: "New",
    },
    {
      name: "Applications",
      path: "/applications",
      submenu: [
        {
          name: "Defect Detection",
          path: "/applications#defect-detection",
        },
        {
          name: "Assembly Verification",
          path: "/applications#assembly-verification",
        },
        {
          name: "Counting & Measurement",
          path: "/applications#counting",
        },
        {
          name: "OCR & Barcode Reading",
          path: "/applications#ocr-barcode",
        },
        {
          name: "Classification",
          path: "/applications#classification",
        },

      ],
    },
    {
      name: "Industries",
      path: "/industries",
      submenu: [
        {
          name: "Automotive (2W / 4W)",
          path: "/industries#automotive",

        },
        {
          name: "Pharma & Medical",
          path: "/industries#pharma",

        },
        {
          name: "Food & Beverage",
          path: "/industries#food",

        },
        {
          name: "Consumer Goods",
          path: "/industries#consumer-goods",

        },
        {
          name: "PCBs & Electronics",
          path: "/industries#electronics",

        },
        {
          name: "Battery & EV",
          path: "/industries#battery-ev",

        },
      ],
    },
    { name: "Resources", path: "/resources" },
    { name: "Company", path: "/company" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#020617]/95 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-800/50 supports-[backdrop-filter]:bg-white/80 supports-[backdrop-filter]:dark:bg-[#020617]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <NavLink
              to="/"
              className="flex items-center gap-1 group"
            >
              <div className="relative">
                {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div> */}
                <img
                  src="/logo-sq.png"
                  alt="Orama"
                  className="relative w-9 h-9 rounded-full p-0.5 bg-white"
                />
              </div>
              <div className="flex flex-col">
                <span className="uppercase font-semibold text-gray-900 dark:text-gray-100 text-lg tracking-tight">
                  Orama Solutions
                </span>
                {/* <span className="text-xs text-gray-500 dark:text-gray-400 font-normal">
                  Industrial Vision AI
                </span> */}
              </div>
            </NavLink>

            {/* <NavLink
              to="/"
              className="flex items-center gap-3 group"
            >
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="Orama"
                  className="relative h-16 w-auto  p-1"
                />
              </div>

            </NavLink> */}

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8 relative" ref={dropdownRef}>
              {navLinks.map((link) => (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => {
                    setHoveredLink(link.path);
                    setActiveDropdown(link.name);
                  }}
                  onMouseLeave={() => {
                    setHoveredLink(null);
                    setActiveDropdown(null);
                  }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => {
                      const baseClasses = "flex items-center gap-1.5 px-1 py-2 text-sm font-medium transition-all duration-200 relative group";
                      const isPrimary = link.name === "No-Code Platform" || isActive;

                      if (isPrimary) {
                        return `${baseClasses} text-blue-600 dark:text-blue-400`;
                      }

                      return `${baseClasses} text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400`;
                    }}
                  >
                    {link.name}
                    {link.badge && (
                      <span className="px-1.5 py-0.5 text-xs font-bold bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full">
                        {link.badge}
                      </span>
                    )}
                    {link.submenu && (
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                    )}



                  </NavLink>

                  {/* Dropdown */}
                  {link.submenu && hoveredLink === link.path && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-80"
                    >
                      <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden">
                        <div className="p-2">
                          {link.submenu.map((item, index) => (
                            <motion.div
                              key={item.path}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              <NavLink
                                to={item.path}
                                className={({ isActive }) => `
                                  flex items-center gap-3 p-3 rounded-xl
                                  text-sm font-medium transition-all duration-200
                                  ${isActive
                                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                                  }
                                  group/item
                                `}
                                onClick={() => setHoveredLink(null)}
                              >
                                {item.icon && (
                                  <span className="text-xl">{item.icon}</span>
                                )}
                                <div className="flex-1">
                                  <div className="flex items-center justify-between">
                                    <span>{item.name}</span>
                                    <ChevronRight className="w-4 h-4 opacity-0 group-hover/item:opacity-100 translate-x-0 group-hover/item:translate-x-1 transition-all" />
                                  </div>
                                  {item.description && (
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                      {item.description}
                                    </p>
                                  )}
                                </div>
                              </NavLink>
                            </motion.div>
                          ))}
                        </div>
                        {link.name === "Applications" && (
                          <div className="border-t border-gray-200 dark:border-gray-800 p-3 bg-gradient-to-r from-blue-50/50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/20">
                            <NavLink
                              to="/applications/all"
                              className="flex items-center justify-between p-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                            >
                              <span>View all applications</span>
                              <ArrowUpRight className="w-4 h-4" />
                            </NavLink>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Controls */}
            <div className="flex relative center gap-4">
              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group"
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              >
                <div className="relative w-5 h-5">
                  <Sun className="absolute inset-0 w-5 h-5 transition-all duration-300 rotate-0 scale-100 dark:rotate-90 dark:scale-0" />
                  <Moon className="absolute inset-0 w-5 h-5 transition-all duration-300 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
                </div>
              </button>

              {/* Desktop CTA */}
              <div className="hidden lg:block relative">
                <Contact />
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                aria-label="Open menu"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Active dropdown background overlay */}
        <AnimatePresence>
          {hoveredLink && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent dark:from-[#020617]/50 pointer-events-none"
            />
          )}
        </AnimatePresence>
      </nav>

      <Sidebar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
};

export default Navbar;