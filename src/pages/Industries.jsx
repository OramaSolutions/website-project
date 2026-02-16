/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Settings, ArrowRight, ChevronRight, Eye, Target, BarChart, Clock, Shield, Zap } from 'lucide-react';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import BeforeAfterSlider from '../components/SliderBeforeAfter';

// Industry-specific applications mapping
const industryApplications = {
  automotive: [
    {
      id: "defect-detection",
      title: "Body Panel Inspection",
      description: "Detect scratches, dents, and surface defects on car body panels, doors, and frames with sub-millimeter accuracy.",
      details: [
        "Works on all surface types: glossy, matte, metallic",
        "Real-time inspection at production line speeds",
        "Identifies defects as small as 0.1mm",
        "Color consistency verification"
      ],
      icon: Eye,
      image: "/images/industries/automotive/body-inspection.webp",
      benefits: "99.8% defect detection rate, 40% reduction in rework"
    },
    {
      id: "assembly-verification",
      title: "Assembly Line Validation",
      description: "Verify correct installation of all components including wiring harnesses, connectors, and interior parts.",
      details: [
        "Validates 100+ assembly points per vehicle",
        "Ensures proper torque seal application",
        "Verifies color-coded wiring connections",
        "Checks seal and gasket placement"
      ],
      icon: CheckCircle,
      image: "/images/industries/automotive/assembly-verification.webp",
      benefits: "70% reduction in assembly errors, 100% traceability"
    },
    {
      id: "classification",
      title: "Parts Sorting & Grading",
      description: "Automatically sort manufactured parts by quality grade, size tolerance, and material type.",
      details: [
        "Classifies parts into A/B/C quality grades",
        "Detects material inconsistencies",
        "Sorts by dimensional tolerances",
        "Identifies heat treatment variations"
      ],
      icon: Target,
      image: "/images/industries/automotive/parts-sorting.webp",
      benefits: "95% sorting accuracy, 50% faster processing"
    }
  ],
  pharma: [
    {
      id: "defect-detection",
      title: "Pharmaceutical Packaging Inspection",
      description: "Ensure pill blister packs are fully filled, tamper-proof seals are intact, and packaging meets FDA standards.",
      details: [
        "Verifies all pills are present in blister packs",
        "Detects broken or chipped tablets",
        "Checks packaging seal integrity",
        "Validates label positioning and readability"
      ],
      icon: Shield,
      image: "/images/industries/pharma/packaging-inspection.webp",
      benefits: "100% compliance, zero recall batches"
    },
    {
      id: "assembly-verification",
      title: "Medical Device Assembly",
      description: "Verify proper assembly of syringes, IV bags, and medical device components with sterility assurance.",
      details: [
        "Validates syringe plunger position",
        "Checks IV bag seal integrity",
        "Verifies needle safety cap presence",
        "Ensures proper labeling alignment"
      ],
      icon: CheckCircle,
      image: "/images/industries/pharma/device-assembly.webp",
      benefits: "99.9% assembly accuracy, 100% sterility compliance"
    },
    {
      id: "ocr-barcode",
      title: "Serial Number & Expiry Reading",
      description: "Read and verify batch numbers, expiry dates, and serial codes on pharmaceutical products.",
      details: [
        "Reads printed and laser-etched codes",
        "Verifies expiry date format compliance",
        "Cross-checks batch numbers with database",
        "Validates regulatory information"
      ],
      icon: Eye,
      image: "/images/industries/pharma/ocr-reading.webp",
      benefits: "100% code readability, zero labeling errors"
    }
  ],
  food: [
    {
      id: "defect-detection",
      title: "Food Quality & Contamination",
      description: "Detect foreign objects, discoloration, mold, and packaging defects in food products.",
      details: [
        "Identifies metal, plastic, glass contaminants",
        "Detects mold growth on produce",
        "Checks for discoloration or bruising",
        "Verifies package seal integrity"
      ],
      icon: Shield,
      image: "/images/industries/food/contamination-detection.webp",
      benefits: "40% reduction in recalls, 99.5% detection rate"
    },
    {
      id: "counting",
      title: "Portion Control & Measurement",
      description: "Accurately count and measure food items for consistent portion sizes and packaging.",
      details: [
        "Counts individual pieces (nuts, candies, chips)",
        "Measures vegetable/fruit sizes for grading",
        "Verifies weight through volume estimation",
        "Ensures consistent package fill levels"
      ],
      icon: BarChart,
      image: "/images/industries/food/portion-control.webp",
      benefits: "±1% portion accuracy, 30% material savings"
    },
    {
      id: "classification",
      title: "Product Sorting & Grading",
      description: "Sort food items by size, color, ripeness, and quality grade automatically.",
      details: [
        "Sorts fruits by color and ripeness",
        "Grades vegetables by size and shape",
        "Separates defective products automatically",
        "Classifies meat cuts by quality grade"
      ],
      icon: Target,
      image: "/images/industries/food/sorting-grading.webp",
      benefits: "200% faster sorting, consistent quality output"
    }
  ],
  electronics: [
    {
      id: "defect-detection",
      title: "PCB & Component Inspection",
      description: "Detect solder bridge, tombstoning, missing components, and circuit anomalies on PCBs.",
      details: [
        "Identifies solder bridge and insufficient solder",
        "Detects component misalignment (0.01mm accuracy)",
        "Finds lifted pins and tombstoning effects",
        "Checks for circuit trace defects"
      ],
      icon: Eye,
      image: "/images/industries/electronics/pcb-inspection.webp",
      benefits: "99.9% defect detection, 60% faster inspection"
    },
    {
      id: "assembly-verification",
      title: "SMT Component Placement",
      description: "Verify correct placement, orientation, and presence of SMT components on circuit boards.",
      details: [
        "Verifies component polarity and orientation",
        "Checks for missing or misplaced components",
        "Validates solder paste application",
        "Ensures proper chip seating"
      ],
      icon: CheckCircle,
      image: "/images/industries/electronics/smt-verification.webp",
      benefits: "100% placement accuracy, zero orientation errors"
    },
    {
      id: "ocr-barcode",
      title: "Micro-component Marking",
      description: "Read microscopic serial numbers, lot codes, and component markings for traceability.",
      details: [
        "Reads laser-etched codes on chips (0.1mm size)",
        "Verifies component authenticity markings",
        "Cross-references with manufacturing database",
        "Ensures proper date/lot coding"
      ],
      icon: Eye,
      image: "/images/industries/electronics/micro-marking.webp",
      benefits: "100% traceability, counterfeit prevention"
    }
  ],
  "battery-ev": [
    {
      id: "defect-detection",
      title: "Battery Cell Inspection",
      description: "Detect microscopic defects, dendrite formation, and electrode anomalies in battery cells.",
      details: [
        "Identifies electrode coating inconsistencies",
        "Detects separator film defects",
        "Finds microscopic metal particles",
        "Checks for electrolyte leakage"
      ],
      icon: Eye,
      image: "/images/industries/battery/cell-inspection.webp",
      benefits: "25% longer battery life, 99.95% safety rate"
    },
    {
      id: "assembly-verification",
      title: "EV Battery Pack Assembly",
      description: "Verify proper stacking, welding, and connection of battery modules in EV packs.",
      details: [
        "Validates cell alignment and stacking sequence",
        "Checks weld quality and connection integrity",
        "Verifies cooling system assembly",
        "Ensures proper busbar connections"
      ],
      icon: CheckCircle,
      image: "/images/industries/battery/pack-assembly.webp",
      benefits: "100% assembly verification, zero thermal incidents"
    },
    {
      id: "classification",
      title: "Battery Grade Classification",
      description: "Classify battery cells by capacity, internal resistance, and performance characteristics.",
      details: [
        "Sorts cells by capacity groups (A/B/C grade)",
        "Identifies high-resistance cells",
        "Classifies by self-discharge rate",
        "Groups cells for balanced pack assembly"
      ],
      icon: Target,
      image: "/images/industries/battery/grade-classification.webp",
      benefits: "15% improved pack performance, balanced charging"
    }
  ]
};

const industries = [
  {
    name: 'Automotive',
    id: "automotive",
    description: 'Innovative solutions for automotive manufacturing and quality control that drive efficiency and precision.',
    image: '/images/industries/automotive-ind.jpeg',
    features: [
      'Assembly line optimization',
      'Defect detection',
      'Predictive maintenance',
      'Automated quality inspection',
    ],
    stats: '30% faster production cycles and 99.8% defect detection accuracy',
    icon: Settings,
    beforeImage: '/images/industries/before-after/a3-b.png',
    afterImage: '/images/industries/before-after/a3-a.webp'
  },
  {
    name: 'Pharma',
    id: "pharma",
    description: 'Ensuring pharmaceutical manufacturing meets the highest standards of quality and compliance.',
    image: '/images/industries/pharma_industry.webp',
    features: [
      'Contamination detection',
      'Packaging verification',
      'Real-time monitoring',
      'Regulatory compliance checks',
    ],
    stats: '100% compliance with FDA standards',
    icon: Shield,
    beforeImage: '/images/industries/before-after/p1-b.png',
    afterImage: '/images/industries/before-after/p1-a.webp'
  },
  {
    name: 'Food, Drinks, and Beverages',
    id: "food",
    description: 'AI-driven quality control for food and beverage industries ensuring safety and consistency.',
    image: '/images/industries/Food_and_bev.webp',
    features: [
      'Label inspection',
      'Foreign object detection',
      'Shelf-life prediction',
      'Portion control verification',
    ],
    stats: '40% reduction in product recalls',
    icon: Shield,
    beforeImage: '/images/industries/before-after/fab1-b.png',
    afterImage: '/images/industries/before-after/fab1-a.webp'
  },
  {
    name: 'Consumer Goods',
    id: "consumer-goods",
    description: 'Enhancing production efficiency and quality for consumer goods at scale.',
    image: '/images/industries/consumer-products.webp',
    features: [
      'Packaging integrity checks',
      'Barcode scanning',
      'Automated sorting',
      'Retail readiness verification',
    ],
    stats: '50% faster time-to-market',
    icon: BarChart,
    beforeImage: '/images/industries/before-after/c1-b.png',
    afterImage: '/images/industries/before-after/c1-a.webp'
  },
  {
    name: 'PCB and Electronics',
    id: "electronics",
    description: 'Precision and reliability for PCB and electronics manufacturing with microscopic accuracy.',
    image: '/images/industries/electronic.webp',
    features: [
      'Solder joint inspection',
      'Component placement validation',
      'Thermal anomaly detection',
      'Circuit integrity testing',
    ],
    stats: '99.9% manufacturing accuracy',
    icon: Zap,
    beforeImage: '/images/industries/before-after/e1-b.png',
    afterImage: '/images/industries/before-after/e1-a.webp'
  },
  {
    name: 'Battery and EV',
    id: "battery-ev",
    description: 'Cutting-edge AI solutions for battery and electric vehicle production lines.',
    image: '/images/industries/battery-production.webp',
    features: [
      'Battery cell inspection',
      'Thermal management',
      'Lifecycle prediction',
      'Energy efficiency optimization',
    ],
    stats: '25% longer battery lifespan',
    icon: Zap,
    beforeImage: '/images/industries/before-after/b1-b.png',
    afterImage: '/images/industries/before-after/b1-a.webp'
  },
];

const stats = [
  { value: '200+', label: 'Industry Solutions' },
  { value: '99.7%', label: 'Accuracy Rate' },
  { value: '40%', label: 'Cost Reduction' },
  { value: '50%', label: 'Faster Production' },
];

const testimonials = [
  {
    quote: "This solution transformed our production line, reducing defects by 75% and increasing throughput by 30%.",
    name: "Michael Chen",
    title: "Director of Manufacturing, AutoTech Inc.",
  },
  {
    quote: "The AI-powered inspection system has been a game-changer for our pharmaceutical packaging process.",
    name: "Dr. Sarah Johnson",
    title: "Quality Assurance Lead, PharmaCorp",
  },
  {
    quote: "We've achieved unprecedented levels of precision in our electronics manufacturing since implementation.",
    name: "Raj Patel",
    title: "CTO, ElectroNova",
  },
];

const ApplicationCard = ({ application, index }) => {
  const Icon = application.icon;

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700 transition-all"
    >
      <div className="flex items-start mb-4">
        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white mr-4">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
            {application.title}
          </h4>
          <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">
            {application.benefits}
          </p>
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {application.description}
      </p>

      <ul className="space-y-2 mb-4">
        {application.details.map((detail, idx) => (
          <motion.li
            key={idx}
            className="flex items-start text-sm text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
            viewport={{ once: true }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-2" />
            {detail}
          </motion.li>
        ))}
      </ul>

      {/* <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
        <div className="h-40 rounded-lg bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-900 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-2">📸</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Visualization</p>
          </div>
        </div>

       
      </div> */}
    </div>
  );
};

const Industries = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
      }
    }
  }, [location]);

  return (
    <div className="bg-gradient-to-b max-w-6xl mx-auto from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 pt-28 px-4 md:px-8">


      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-medium mb-4"
          >
            INDUSTRY-SPECIFIC SOLUTIONS
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-light mb-6 leading-tight dark:text-white"
          >
            Transforming Industries with <br />
            <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">
              AI-Powered Vision
            </span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-500 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Customized computer vision solutions designed to address the unique challenges of your industry.
          </motion.p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto mb-28">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: "spring", stiffness: 300, delay: index * 0.1 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.value}</p>
              <p className="text-gray-500 dark:text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Industries Section - Expanded */}
      <section className="max-w-7xl mx-auto mb-28">
        <div className="space-y-32">
          {industries.map((industry, index) => (
            <div key={index} id={industry.id} className="scroll-mt-28">
              {/* Industry Header */}
              <motion.div
                className={`flex flex-col md:flex-row gap-12 items-center mb-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="md:w-1/2 relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 via-transparent to-transparent dark:from-blue-400/20 -z-10" />
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/10 to-blue-600/10 dark:from-blue-400/20 dark:to-blue-600/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="rounded-3xl shadow-2xl w-full h-auto max-h-96 object-cover border border-gray-200/50 dark:border-gray-700/50 group-hover:border-blue-200/80 dark:group-hover:border-blue-400/50 transition-all"
                  />
                </motion.div>

                <div className="md:w-1/2">
                  <motion.div
                    className="flex items-center mb-6 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white mr-4 transition-all group-hover:rotate-12 shadow-lg">
                      <industry.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300">
                      {industry.name}
                    </h3>
                  </motion.div>
                  <motion.p
                    className="text-xl text-gray-500 dark:text-gray-300 mb-8 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {industry.description}
                  </motion.p>

                  <motion.div
                    className="mb-8 p-4 bg-blue-50/50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800 inline-block"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-blue-600 dark:text-blue-300 font-medium">{industry.stats}</p>
                  </motion.div>

                  <ul className="space-y-4 mb-8">
                    {industry.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.1 * idx }}
                        viewport={{ once: true }}
                        className="flex items-start group"
                      >
                        <div className="p-1.5 mr-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                          <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                        </div>
                        <span className="text-lg text-gray-700 dark:text-gray-200">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <div>
                <BeforeAfterSlider
                  beforeImage={industry.beforeImage}
                  afterImage={industry.afterImage}
                  height={400}
                />
              </div>

              {/* Industry-specific Applications */}
              {industryApplications[industry.id] && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="mt-16"
                >
                  <div className="flex items-center mb-8">
                    <div className="w-2 h-8 bg-blue-500 rounded-full mr-4" />
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white">
                      {industry.name} Applications
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industryApplications[industry.id].map((app, idx) => (
                      <ApplicationCard key={idx} application={app} index={idx} />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto mb-28">
        <motion.h2
          className="text-3xl md:text-4xl font-light text-center mb-16 dark:text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Trusted by <span className="font-medium text-blue-600 dark:text-blue-400">Industry Leaders</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-5xl text-gray-200 dark:text-gray-700 mb-4">"</div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
              <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
                <p className="font-medium text-gray-800 dark:text-white">{testimonial.name}</p>
                <p className="text-gray-500 dark:text-gray-400">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto">
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-700 dark:to-blue-500 rounded-3xl p-12 text-center text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Ready to transform your industry?</h2>
          <p className="text-xl text-blue-100 dark:text-blue-50 mb-8 max-w-2xl mx-auto">
            Discover how our AI vision solutions can revolutionize your manufacturing process.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-white dark:bg-gray-50 text-blue-600 dark:text-blue-700 px-8 py-4 rounded-xl font-medium flex items-center mx-auto group"
          >
            Schedule a demo
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Industries;