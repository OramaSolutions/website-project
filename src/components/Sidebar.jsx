// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, ChevronDown, ArrowUpRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Contact from "./Contact";

const Sidebar = ({ isOpen, onClose, navLinks }) => {
  const [expandedMenu, setExpandedMenu] = useState(null);

  // Close sidebar when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
      setExpandedMenu(null); // Reset expanded menus when closing
    };
  }, [isOpen, onClose]);

  const toggleSubmenu = (linkName) => {
    setExpandedMenu(prev => prev === linkName ? null : linkName);
  };



  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0  backdrop z-50"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Modern Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 max-h-[85vh] bg-white dark:bg-[#0f172a] rounded-t-3xl z-50 shadow-2xl overflow-hidden"
          >
            {/* Drawer handle */}
            <div className="pt-4 pb-2 flex justify-center cursor-grab active:cursor-grabbing" onClick={onClose}>
              <div className="w-12 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
            </div>

            {/* Drawer Content */}
            <div className="flex flex-col h-full min-h-[60vh]">
              {/* Drawer Header */}
              <div className="px-6 pb-4">
                <div className="flex items-center justify-end">
                  {/* <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl blur opacity-30"></div>
                      <img
                        src="/logo-sq.png"
                        alt="Orama"
                        className="relative w-10 h-10 rounded-lg shadow-lg bg-white dark:bg-gray-900 p-1"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-gray-900 dark:text-gray-100">
                        Orama Solutions
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Industrial Vision AI
                      </span>
                    </div>
                  </div> */}

                  <button
                    onClick={onClose}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto px-6 pb-6">
                <div className="space-y-2">
                  {navLinks.map((link) => (
                    <div key={link.path} className="space-y-1">
                      {link.submenu ? (
                        // Collapsible menu item
                        <div>
                          <button
                            onClick={() => toggleSubmenu(link.name)}
                            className={`flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200 group ${expandedMenu === link.name
                                ? 'bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 text-blue-600 dark:text-blue-400'
                                : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50'
                              }`}     >
                            <div className="flex items-center gap-3">
                              <span className="text-base font-medium">
                                {link.name}
                              </span>
                              {link.badge && (
                                <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full">
                                  {link.badge}
                                </span>
                              )}
                            </div>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${expandedMenu === link.name ? 'rotate-180' : ''
                              }`} />
                          </button>

                          {/* Collapsible Submenu */}
                          <AnimatePresence>
                            {expandedMenu === link.name && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="ml-4 pl-4 border-l border-gray-200 dark:border-gray-800 overflow-hidden"
                              >
                                <div className="space-y-1 py-2">
                                  {link.submenu.map((item) => (
                                    <NavLink
                                      key={item.path}
                                      to={item.path}
                                      onClick={onClose}
                                      className={({ isActive }) => `
                                        flex items-center gap-3 px-4 py-2.5 rounded-lg
                                        text-sm transition-all duration-200
                                        ${isActive
                                          ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                          : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/30'
                                        }
                                      `}
                                    >
                                      {item.icon && (
                                        <span className="text-lg">{item.icon}</span>
                                      )}
                                      <div className="flex-1">
                                        <div className="font-medium">{item.name}</div>
                                        {item.description && (
                                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                            {item.description}
                                          </div>
                                        )}
                                      </div>
                                    </NavLink>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        // Regular menu item
                        <NavLink
                          to={link.path}
                          onClick={onClose}
                          className={({ isActive }) => `
                            flex items-center justify-between px-4 py-3.5 rounded-xl
                            text-base font-medium transition-all duration-200
                            ${isActive || link.highlight
                              ? 'bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 text-blue-600 dark:text-blue-400'
                              : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50'
                            }
                          `}
                        >
                          <div className="flex items-center gap-3">
                            {link.name}
                            {link.badge && (
                              <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full">
                                {link.badge}
                              </span>
                            )}
                          </div>
                          <ChevronRight className="w-4 h-4" />
                        </NavLink>
                      )}
                    </div>
                  ))}

                  {/* CTA Section */}
                  <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-800">
                    <div className="space-y-4">
                      <Contact />
                      <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                        No credit card required • Free tier available
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;