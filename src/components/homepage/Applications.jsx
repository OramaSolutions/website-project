/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion';

const ApplicationCard = ({ title, description, media, idx }) => (
  <motion.a
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
    transition={{ 
      duration: 0.6, 
      delay: idx * 0.1,
      ease: [0.16, 1, 0.3, 1] 
    }}
    href='/applications'
    className="group relative isolate flex flex-col lg:flex-col h-full bg-transparent rounded-3xl border border-gray-200/80 dark:border-gray-700/50 hover:border-transparent transition-all duration-500 overflow-hidden shadow-sm hover:shadow-lg w-full"
  >
    {/* Colorful hover border effect */}
    <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-blue-400/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
    {/* Glow effect */}
    <div className="absolute inset-0 -z-20 rounded-3xl bg-[conic-gradient(at_top_left,var(--tw-gradient-stops))] from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:via-purple-500/10 group-hover:to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    {/* Responsive flex row for small screens, column for large */}
    <div className="flex flex-row w-full h-full sm:flex-row lg:flex-col">
      {/* Media container */}
      <motion.div 
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", damping: 10 }}
        className="relative aspect-[4/3] w-1/3 min-w-[120px] max-w-[180px] sm:w-1/3 sm:min-w-[120px] sm:max-w-[180px] lg:w-full lg:min-w-0 lg:max-w-none overflow-hidden"
      >
        {media ? (
          typeof media === 'string' ? (
            <div className="absolute inset-0 flex items-center justify-center ">
              <img
                src={media}
                alt={title}
                className="w-full h-full object-cover p- transition-transform duration-700 group-hover:scale-[1.02]"
                
              />
            </div>
          ) : (
            <video
              src={media}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          )
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <div className="text-gray-400 dark:text-gray-500">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeLinejoin="round" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
      </motion.div>

      {/* Content area */}
      <div className="p-5 pt-4 flex-1 flex flex-col w-2/3 sm:w-2/3 lg:w-full">
        <h3 className="text-xl font-semibold tracking-tight mb-2 line-clamp-2 leading-snug">
          {title}
        </h3>
        <p className="text-sm opacity-80 mb-4 line-clamp-3 flex-1">
          {description}
        </p>
        {/* Interactive CTA */}
        <div className="flex justify-between items-center mt-auto">
          <span className="text-xs font-medium tracking-wide uppercase opacity-60 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
            Learn more
          </span>
          <div className="w-6 h-6 flex items-center justify-center rounded-full border border-current opacity-40 group-hover:opacity-100 group-hover:bg-blue-500/10 group-hover:border-blue-500/50 dark:group-hover:border-blue-400/50 transition-all">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    {/* Animated border */}
    <div className="absolute inset-0 -z-30 rounded-3xl border-2 border-transparent group-hover:border-blue-400/20 dark:group-hover:border-blue-400/10 transition-all duration-500 pointer-events-none" />
  </motion.a>
);

const Applications = () => {
  const cards = [
    {
      title: 'Assembly Inspection AI',
      description: 'Identifies objects and verifies complex product assemblies',
      media: '/images/applications/assembly.png',
    },
    {
      title: 'Cosmetic Inspection AI',
      description: 'Automated tracking and analytics to optimize stock levels, reduce waste, and improve supply chain efficiency.',
      media: '/images/applications/cosmetic-ins.png',
    },
    {
      title: 'Dimensioning AI',
      description: 'Streamline repetitive business processes with intelligent bots, freeing up human resources for higher-value tasks.',
      media: '/images/applications/measurement.png',
    },
    {
      title: 'Label Inspection AI',
      description: 'Monitor equipment health and predict failures before they happen, minimizing downtime and repair costs.',
      media: '/images/applications/labels.png',
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-center mb-4">From Automobile to Consumer Goods</h2>
      <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-12 text-center max-w-3xl mx-auto">A wide range of applications for every manufacturing need.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {cards.map((card, idx) => (
          <ApplicationCard key={idx} {...card} idx={idx} />
        ))}
      </div>
      </div>
    </section>
  );
};

export default Applications;
