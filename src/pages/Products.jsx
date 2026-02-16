/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import {
  Eye, Ear, Cpu, Settings,
  ScanEye, Barcode, AlertTriangle,
  Layers, Headphones, Activity,
  ShieldCheck, Video, CheckCircle,
  Zap, Box, Camera, ChevronRight
} from 'lucide-react';

const ProductsPage = () => {
  const [showOne, setShowOne] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowOne(prev => !prev);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="">
      {/* Hero Section */}
      <section className="py-20 pt-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-light"
          >
            Industrial AI <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl max-w-3xl mx-auto text-gray-500"
          >
            Transforming industrial operations with our suite of AI-powered vision and sound analysis solutions.
          </motion.p>
        </div>
      </section>

      {/* AI Computer Vision Section */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center mb-8 group"
          >
            <div className="p-3 rounded-xl bg-blue-100 text-blue-600 mr-4 transition-all group-hover:rotate-12">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-medium">AI Computer Vision</h2>
          </motion.div>

          <div className="grid gap-16">
            {/* Assembly Verification */}
            <ProductFeature
              title="Assembly Verification"
              description="Ensure complete and correct assembly of components with millimeter precision"
              imageSrc="/images/products/assembly-verification.png"
              icon={<Box className="w-5 h-5" />}
              features={[
                "Real-time component presence checking",
                "Correct orientation validation",
                "Missing parts detection",
                "Automated pass/fail decisions"
              ]}
              reverseLayout={false}
            />

            {/* Defect Detection */}
            <ProductFeature
              title="Defect Detection"
              description="Identify surface flaws, cracks, and imperfections invisible to the human eye"
              imageSrc="/images/products/defect-detection.png"
              icon={<AlertTriangle className="w-5 h-5" />}
              features={[
                "Microscopic flaw identification",
                "Material inconsistency detection",
                "Surface finish quality grading",
                "Automated rejection triggering"
              ]}
              reverseLayout={true}
            />

            {/* OCR & Barcode */}
            <ProductFeature
              title="OCR & Barcode Reading"
              description="Automated text and code recognition at production line speeds"
              imageSrc="/images/products/ocr.png"
              icon={<Barcode className="w-5 h-5" />}
              features={[
                "High-speed character recognition",
                "Damaged barcode reconstruction",
                "Multi-format support (1D, 2D, QR)",
                "Direct database integration"
              ]}
              reverseLayout={false}
            />

            {/* Precision Counting */}
            <ProductFeature
              title="Precision Counting"
              description="Accurate object counting and inventory management"
              imageSrc="/images/products/counting.png"
              icon={<Zap className="w-5 h-5" />}
              features={[
                "99.9% counting accuracy",
                "High-speed object tracking",
                "Batch quantity verification",
                "Real-time inventory updates"
              ]}
              reverseLayout={true}
            />
          </div>
        </div>
      </section>

      {/* Other Product Categories */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-medium mb-12 text-center"
          >
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">AI Solutions</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 ">
            {/* Sound Classification */}
            <ModernProductCard
              icon={<Ear className="w-6 h-6" />}
              title="Sound Classification"
              description="Real-time audio analysis for equipment monitoring"
              imageSrc="/images/products/sound.png"
              features={[
                "Machine Condition Monitoring",
                "Anomaly Sound Detection",
                "Predictive Failure Alerts"
              ]}
              stats={[
                { value: "95%", label: "Anomaly Detection" },
                { value: "24/7", label: "Monitoring" }
              ]}
            />

            {/* Predictive Maintenance */}
            <ModernProductCard
              icon={<Activity className="w-6 h-6" />}
              title="Predictive Maintenance"
              description="AI-driven equipment health monitoring"
              imageSrc="/images/products/predictive-maintainance.png"
              features={[
                "Vibration Analysis",
                "Thermal Anomaly Detection",
                "Failure Prediction"
              ]}
              stats={[
                { value: "30%", label: "Downtime Reduction" },
                { value: "85%", label: "Prediction Accuracy" }
              ]}
            />

            {/* CCTV Analysis */}
            <ModernProductCard
              icon={<Video className="w-6 h-6" />}
              title="AI CCTV Analysis"
              description="Intelligent surveillance for safety"
              imageSrc="/images/products/ai-cctv.png"
              features={[
                "Personnel Safety Monitoring",
                "Unauthorized Access Detection",
                "Process Compliance"
              ]}
              stats={[
                { value: "99%", label: "Intrusion Detection" },
                { value: "60%", label: "Safety Improvement" }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Unified Platform Section */}
      <section className="py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center flex flex-col justify-center items-center">
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
            viewport={{ once: true }}
            className="flex items-center w-fit justify-center p-3 rounded-full bg-blue-100 text-blue-600 mb-6"
          >
            <Cpu className="w-6 h-6" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light mb-6 inline-flex items-center  w-fit"
          >

            <motion.span
              className='bg-blue-800 px- py-1 text-white  inline-flex items-center justify-center h-12 w-20 relative overflow-hidden'
            >
              <AnimatePresence mode='wait'>
                <motion.span
                  key={showOne ? "one" : "1"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className='absolute'
                >
                  {showOne ? "One" : "1"}
                </motion.span>
              </AnimatePresence>
            </motion.span>

            <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 ml-2">
              Integrated Platform
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg max-w-3xl mx-auto text-gray-500 mb-10"
          >
            All our solutions work together on a unified AI platform for comprehensive industrial intelligence.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
            {[
              {
                icon: <Settings className="w-5 h-5" />,
                title: "Centralized Dashboard",
                description: "Monitor all systems from a single interface with customizable views"
              },
              {
                icon: <ShieldCheck className="w-5 h-5" />,
                title: "Enterprise Security",
                description: "End-to-end encryption and role-based access control"
              },
              {
                icon: <Layers className="w-5 h-5" />,
                title: "Modular Deployment",
                description: "Start with what you need and expand as requirements grow"
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-600 mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-medium text-lg">{feature.title}</h3>
                </div>
                <p className="text-gray-500">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Modern Product Feature Component
const ProductFeature = ({ title, description, imageSrc, icon, features, reverseLayout }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      className={`flex flex-col md:flex-row gap-12 items-center ${reverseLayout ? 'md:flex-row-reverse' : ''}`}
    >
      <motion.div
        className="md:w-1/2 relative"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent -z-10" />
        <img
          src={imageSrc}
          alt={title}
          className="rounded-2xl shadow-xl w-full h-auto max-h-96 object-cover border border-gray-200"
        />
      </motion.div>

      <div className="md:w-1/2">
        <motion.div
          className="flex items-center mb-6 group"
          whileHover={{ x: 5 }}
        >
          <div className="p-2 rounded-lg bg-blue-100 text-blue-600 mr-4 transition-all group-hover:rotate-12">
            {icon}
          </div>
          <h3 className="text-2xl md:text-3xl font-medium">{title}</h3>
        </motion.div>
        <motion.p
          className="text-lg text-gray-500 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>

        <ul className="space-y-4">
          {features.map((feature, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * idx }}
              viewport={{ once: true }}
              className="flex items-start group"
            >
              <div className="p-1 mr-3">
                <CheckCircle className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-lg">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

// Modern Product Card Component
const ModernProductCard = ({ icon, title, description, imageSrc, features, stats }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="relative rounded-2xl overflow-hidden group  h-full border border-gray-200 hover:border-blue-400 transition-all"
    >
      {/* Product Image with overlay */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col h-[calc(100%-15rem)]">
        <div className="flex items-start mb-4">
          <div className="p-2 rounded-lg bg-blue-100 text-blue-600 mr-4">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-medium">{title}</h3>
            <p className="text-gray-500">{description}</p>
          </div>
        </div>

        <ul className="mt-2 mb-4 space-y-2 flex-grow">
          {features.map((feature, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center"
            >
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </motion.li>
          ))}
        </ul>

        <div className="grid grid-cols-2 gap-3 mt-auto">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-2 rounded-lg border border-gray-100"
            >
              <p className="text-xl font-light text-blue-600">{stat.value}</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <motion.div
          className="mt-4 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          whileHover={{ x: 5 }}
        >
          <span className="text-sm font-medium">Learn more</span>
          <ChevronRight className="w-4 h-4 ml-1" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductsPage;