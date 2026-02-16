import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import VisionTab from "./offerings/VisionTab";
import SoundTab from "./offerings/SoundTab";
import ShopfloorTab from "./offerings/ShopfloorTab";
import DigitizationTab from "./offerings/DigitizationTab";
import { 
  Eye, 
  Headphones, 
  BarChart3,
  Sparkles,
  FileDigit,
  ChevronRight,
  Menu,
  X
} from "lucide-react";

const Offerings = () => {
  const [active, setActive] = useState("vision");
  const [hoveredTab, setHoveredTab] = useState(null);
  

  const tabs = [
    { id: "vision", label: "Vision AI", icon: Eye, short: "Vision" },
    { id: "sound", label: "Sound Analysis", icon: Headphones, short: "Sound" },
    { id: "shopfloor", label: "Smart Shopfloor", icon: BarChart3, short: "Shopfloor" },
    { id: "digitization", label: "Digitization", icon: FileDigit, short: "Digital" },
  ];

  return (
    <section className="py-20 px-4 md:px-8">
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8 md:mb-10">
        <div className="flex items-center justify-between mb-4 md:mb-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
            <span className="text-xs md:text-sm font-semibold text-blue-600 dark:text-blue-400">
              INDUSTRIAL AI SOLUTIONS
            </span>
          </div>
          
          {/* Mobile Menu Toggle */}
        
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-3 dark:text-white text-gray-900">
          Our <span className="text-blue-600 dark:text-blue-400">
            Offerings
          </span>
        </h2>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
          Real-time AI-powered solutions for modern manufacturing
        </p>
      </div>

      {/* Modern Tabs */}
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
        {/* Tab Navigation */}
        <div className="lg:w-1/3">
          {/* Mobile Tab Switcher */}
          <div className="lg:hidden mb-4">
            <div className="flex overflow-x-auto pb-2 -mx-4 px-4">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = active === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActive(tab.id)}
                    className={`flex-shrink-0 px-4 py-3 rounded-xl mx-1 flex items-center gap-2 transition-all duration-200
                      ${isActive 
                        ? 'bg-blue-600 dark:bg-blue-400 text-white shadow-md' 
                        : 'bg-gray-100 dark:bg-gray-800 dark:text-gray-300'
                      }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{tab.short}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Desktop/Tablet Tab Navigation */}
          <div className={`hidden lg:block`}>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-1 shadow-lg">
              <div className="p-2 space-y-1 md:space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = active === tab.id;
                  return (
                    <motion.button
                      key={tab.id}
                      onClick={() => {
                        setActive(tab.id);
                       
                      }}
                      onMouseEnter={() => setHoveredTab(tab.id)}
                      onMouseLeave={() => setHoveredTab(null)}
                      className={`w-full relative p-3 md:p-4 rounded-xl transition-all duration-300 flex items-center justify-between group
                        ${isActive 
                          ? 'bg-white dark:bg-gray-800 shadow-md' 
                          : 'hover:bg-white/50 dark:hover:bg-gray-800/50'
                        }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Active Background */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-xl bg-blue-600/10 dark:bg-blue-400/10"
                          initial={false}
                          animate={{ opacity: 1 }}
                        />
                      )}

                      {/* Left Content */}
                      <div className="flex items-center gap-3 md:gap-4 z-10">
                        <div className={`p-2 md:p-3 rounded-lg ${isActive ? 'bg-blue-600 dark:bg-blue-400' : 'bg-gray-200 dark:bg-gray-700'} 
                          transition-all duration-300 group-hover:scale-110`}>
                          <Icon className={`w-4 h-4 md:w-5 md:h-5 ${isActive ? 'text-white' : 'text-gray-600 dark:text-gray-300'}`} />
                        </div>
                        
                        <div className="text-left">
                          <div className="flex items-center gap-2">
                            <span className={`font-semibold text-base md:text-lg ${isActive 
                              ? 'text-blue-600 dark:text-blue-400' 
                              : 'text-gray-700 dark:text-gray-300'
                            }`}>
                              {tab.label}
                            </span>
                            {isActive && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-600 dark:bg-blue-400"
                              />
                            )}
                          </div>
                          <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                            {tab.id === "vision" && "Visual Inspection"}
                            {tab.id === "sound" && "Audio Analytics"}
                            {tab.id === "shopfloor" && "Live Monitoring"}
                            {tab.id === "digitization" && "Paper to Digital"}
                          </span>
                        </div>
                      </div>

                      {/* Right Arrow */}
                      <motion.div
                        initial={false}
                        animate={{ 
                          x: isActive ? 0 : -10,
                          opacity: isActive ? 1 : 0 
                        }}
                        className="z-10"
                      >
                        <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-blue-500 dark:text-blue-400" />
                      </motion.div>

                      {/* Hover Effect */}
                      {hoveredTab === tab.id && !isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-xl bg-blue-600/5 dark:bg-blue-400/5"
                          layoutId="hoverBg"
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-4 md:mt-6 grid grid-cols-3 gap-2 md:gap-4">
            <div className="bg-blue-600/10 dark:bg-blue-400/10 p-2 md:p-4 rounded-xl">
              <div className="text-lg md:text-2xl font-bold text-blue-600 dark:text-blue-400">99.7%</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Accuracy</div>
            </div>
            <div className="bg-blue-600/10 dark:bg-blue-400/10 p-2 md:p-4 rounded-xl">
              <div className="text-lg md:text-2xl font-bold text-blue-600 dark:text-blue-400">24/7</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Monitoring</div>
            </div>
            <div className="bg-blue-600/10 dark:bg-blue-400/10 p-2 md:p-4 rounded-xl">
              <div className="text-lg md:text-2xl font-bold text-blue-600 dark:text-blue-400">50ms</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Response</div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:w-2/3">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 md:p-6 shadow-xl h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                {active === "vision" && <VisionTab />}
                {active === "sound" && <SoundTab />}
                {active === "shopfloor" && <ShopfloorTab />}
                {active === "digitization" && <DigitizationTab />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Offerings;
