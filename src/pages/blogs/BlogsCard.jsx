/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const BlogCard = ({ 
  title, 
  description, 
  imageSrc, 
  category = 'Uncategorized', 
  date = '', 
  readTime = '' 
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col"
    >
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {category}
          </span>
          {date && <span className="text-gray-500 text-sm">{date}</span>}
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <div className="flex items-center justify-between mt-auto">
          {readTime && <span className="text-gray-500 text-sm">{readTime}</span>}
          <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
            Read more
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;