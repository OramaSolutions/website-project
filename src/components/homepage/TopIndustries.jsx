/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion';
import { Car, Stethoscope, Utensils, ShoppingBag, Cpu, BatteryCharging } from 'lucide-react';
import { IoFastFoodOutline } from "react-icons/io5";
const industries = [
  {
    title: 'Automotive (2 Wheeler & 4 Wheeler)',
    description: 'Advanced vision and automation for vehicle assembly, inspection, and quality control in both 2-wheeler and 4-wheeler manufacturing.',
    icon: Car,
    color: 'blue'
  },
  {
    title: 'Pharma & Medical',
    description: 'Ensuring safety, compliance, and precision in pharmaceutical and medical device production with automated inspection and tracking.',
    icon: Stethoscope,
    color: 'purple'
  },
  {
    title: 'Food & Beverage',
    description: 'Automated quality checks, packaging inspection, and traceability for food and beverage manufacturing lines.',
    icon: IoFastFoodOutline,
    color: 'green'
  },
  {
    title: 'Consumer Goods',
    description: 'Smart vision solutions for packaging, labeling, and defect detection in consumer goods production.',
    icon: ShoppingBag,
    color: 'pink'
  },
  {
    title: 'PCBs & Electronics',
    description: 'High-precision inspection and process automation for PCB assembly and electronics manufacturing.',
    icon: Cpu,
    color: 'yellow'
  },
  {
    title: 'Battery & EV',
    description: 'Inspection and traceability for battery cells, modules, and electric vehicle components.',
    icon: BatteryCharging,
    color: 'cyan'
  },
];

const IndustryCard = ({ title, description, icon: Icon, color, idx }) => {
  const colorClasses = {
    blue: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20',
    purple: 'text-purple-500 bg-purple-50 dark:bg-purple-900/20',
    green: 'text-green-500 bg-green-50 dark:bg-green-900/20',
    pink: 'text-pink-500 bg-pink-50 dark:bg-pink-900/20',
    yellow: 'text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20',
    cyan: 'text-cyan-500 bg-cyan-50 dark:bg-cyan-900/20',
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '0px 0px -50px 0px' }}
      transition={{
        duration: 0.6,
        delay: idx * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className='group relative isolate flex flex-col h-full rounded-3xl border border-gray-200/80 dark:border-gray-700/50 hover:border-transparent transition-all duration-500 overflow-hidden shadow-sm hover:shadow-lg w-full'
    >
      {/* Colorful hover border effect */}
      <div className='absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-blue-400/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
      {/* Glow effect */}
      <div className='absolute inset-0 -z-20 rounded-3xl bg-[conic-gradient(at_top_left,var(--tw-gradient-stops))] from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:via-purple-500/10 group-hover:to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
      
      {/* Icon Container */}
      <div className={`flex items-center justify-center p-4 transition-all duration-300 group-hover:scale-105`}>
        <div className={`p-4 rounded-2xl ${colorClasses[color]} transition-all duration-300 group-hover:shadow-md`}>
          <Icon 
            size={36} 
            className={`transition-all duration-300 group-hover:scale-110`}
            strokeWidth={1.5}
          />
        </div>
      </div>
      
      {/* Content */}
      <div className='px-6 pb-6 flex-1 flex flex-col'>
        <h3 className='text-xl font-light tracking-tight mb-2 text-center line-clamp-2 leading-snug'>
          {title}
        </h3>
        <p className='text-sm opacity-80 mb-4 text-center flex-1'>
          {description}
        </p>
      </div>
      
      {/* Animated border */}
      <div className='absolute inset-0 -z-30 rounded-3xl border-2 border-transparent group-hover:border-blue-400/20 dark:group-hover:border-blue-400/10 transition-all duration-500 pointer-events-none' />
    </motion.div>
  );
};

const TopIndustries = () => {
  return (
    <section className='py-20 px-4 md:px-8'>
      <div className='max-w-7xl mx-auto'>
      <h2 className='text-3xl sm:text-4xl md:text-5xl font-light text-center mb-4'>
        Empowering Key Industries with AI
      </h2>
      <p className='text-base md:text-lg text-gray-600 dark:text-gray-400 mb-12 text-center max-w-3xl mx-auto'>
        Purpose-built AI systems tailored for quality, throughput, and traceability across critical manufacturing sectors.
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
        {industries.map((industry, idx) => (
          <IndustryCard 
            key={idx} 
            title={industry.title}
            description={industry.description}
            icon={industry.icon}
            color={industry.color}
            idx={idx} 
          />
        ))}
      </div>
      </div>
    </section>
  );
};

export default TopIndustries;
