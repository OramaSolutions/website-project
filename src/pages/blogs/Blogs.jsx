/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import BlogCard from './BlogsCard';

const Blogs = () => {

// TODO need to have key words to too implement search functionality
const dummyBlogs = [
  {
    id: 1,
    title: 'Convolutional Neural Networks: From Basics to Advanced Architectures',
    description: 'A comprehensive guide to understanding CNNs, their layers, and modern architectures like ResNet and EfficientNet for computer vision tasks.',
    image: '/images/ai-vision.jpg',
    category: 'Deep Learning',
    date: 'May 15, 2023',
    readTime: '8 min read'
  },
  {
    id: 2,
    title: 'Real-Time Object Detection: YOLO vs. Faster R-CNN',
    description: 'Comparing performance and implementation of popular object detection algorithms in practical computer vision applications.',
    image: '/images/object-detection.jpg',
    category: 'Computer Vision',
    date: 'June 2, 2023',
    readTime: '6 min read'
  },
  {
    id: 3,
    title: 'Transformers in Computer Vision: The Rise of ViT',
    description: 'How Vision Transformers are challenging CNNs and what this means for the future of image recognition systems.',
    image: '/images/vision-transformers.jpg',
    category: 'AI Research',
    date: 'June 10, 2023',
    readTime: '7 min read'
  },
  {
    id: 4,
    title: 'Data Augmentation Techniques for Computer Vision',
    description: 'Advanced methods to expand your training dataset and improve model generalization using TensorFlow and PyTorch.',
    image: '/images/data-augmentation.jpg',
    category: 'ML Engineering',
    date: 'May 28, 2023',
    readTime: '5 min read'
  },
  {
    id: 5,
    title: 'Deploying Computer Vision Models at Scale',
    description: 'Best practices for containerizing and serving your CV models using ONNX, TensorRT, and Kubernetes.',
    image: '/images/model-deployment.jpg',
    category: 'MLOps',
    date: 'June 5, 2023',
    readTime: '9 min read'
  },
  {
    id: 6,
    title: 'Ethical Considerations in Facial Recognition Systems',
    description: 'Examining bias, privacy concerns, and responsible AI practices in facial recognition technology.',
    image: '/images/ai-ethics.jpg',
    category: 'AI Ethics',
    date: 'June 12, 2023',
    readTime: '6 min read'
  },
];

const featuredBlog = {
  id: 0,
  title: 'The State of Computer Vision in 2023: Trends and Breakthroughs',
  description: 'An in-depth analysis of the most significant advancements in computer vision this year, including multimodal models, few-shot learning, and edge AI deployment strategies.',
  image: '/images/cv-trends.jpg',
  category: 'Trend Analysis',
  date: 'June 1, 2023',
  readTime: '12 min read'
};

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 text-white py-28 px-4 md:px-8 overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-white/30 to-transparent animate-pulse"></div>
        </div>

        {/* Floating bubbles decoration */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: 0, x: Math.random() * 100, opacity: 0.3 }}
              animate={{
                y: [0, -100, -200, -300],
                x: [Math.random() * 100, Math.random() * 100 + 50, Math.random() * 100],
                opacity: [0.3, 0.5, 0.2, 0]
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute rounded-full bg-white/10 backdrop-blur-sm"
              style={{
                width: `${10 + Math.random() * 20}px`,
                height: `${10 + Math.random() * 20}px`,
                left: `${Math.random() * 100}%`,
                bottom: '-50px'
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Latest Articles & Tutorials
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Discover & Learn
            </h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-blue-100"
            >
              Insights, tutorials, and stories to fuel your development journey.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative max-w-2xl mx-auto"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles, tutorials, guides..."
                className="w-full py-4 px-6 rounded-full bg-blue-700/60 backdrop-blur-md border-2 border-blue-400/30 focus:outline-none focus:ring-4 focus:ring-blue-300/30 text-white placeholder-blue-200 shadow-lg transition-all duration-300 hover:border-blue-300/50"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-blue-600 hover:bg-blue-50 p-2 rounded-full shadow-md transition-all duration-300 hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <span className="text-blue-100/80 text-sm">Popular searches:</span>
              {['Defect Detection', 'Object Detection', 'Computer Vision', 'OCR'].map((tag) => (
                <button
                  key={tag}
                  className="text-xs bg-white/10 hover:bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full transition-all duration-200"
                >
                  {tag}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 flex justify-center gap-4"
          >
            <a  href="#blogs-collection"  className="flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 font-medium px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl">
              Explore Topics
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <button className="flex items-center gap-2 bg-transparent border-2 border-white/30 hover:border-white/50 text-white font-medium px-6 py-3 rounded-full backdrop-blur-sm transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Watch Demo
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Blog Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div className="md:flex">
            <div className="md:w-2/3">
              <img
                src={featuredBlog.image}
                alt="Featured Blog"
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-1/3">
              <div className="flex items-center mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {featuredBlog.category}
                </span>
                <span className="text-gray-500 text-sm ml-4">{featuredBlog.date}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{featuredBlog.title}</h2>
              <p className="text-gray-600 mb-6">{featuredBlog.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-sm">{featuredBlog.readTime}</span>
                <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Blog Cards Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 pt-24" id='blogs-collection'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-300 mb-3">Latest Articles</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Browse our collection of recent publications</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {dummyBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              description={blog.description}
              imageSrc={blog.image}
              category={blog.category}
              date={blog.date}
              readTime={blog.readTime}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full inline-flex items-center transition-colors duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30">
            Load More Articles
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </motion.div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Stay Updated
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg mb-8 max-w-2xl mx-auto"
          >
            Subscribe to our newsletter to receive the latest articles and news directly in your inbox.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg bg-white bg-opacity-20 backdrop-blur-sm border border-blue-300 focus:outline-none focus:ring-2 focus:ring-white placeholder-blue-100"
            />
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors duration-300">
              Subscribe
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;