// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Camera, Zap, CheckCircle, Box, Cpu } from 'lucide-react';

const VisionShowcase = () => {
  const features = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Real-time Defect Detection",
      description: "Our AI instantly spots imperfections in products as they move through production lines.",
    },
    {
      icon: <Box className="w-5 h-5" />,
      title: "Component Verification",
      description: "Automatically checks for missing parts or incorrect assemblies.",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Precision Counting",
      description: "Accurately counts objects with 99.9% accuracy.",
    },
    {
      icon: <Camera className="w-5 h-5" />,
      title: "Live Camera Analysis",
      description: "Processes live video feeds for instant decisions.",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-center mb-4">
            Vision-Powered <span className="font-medium text-blue-600 dark:text-blue-400">Manufacturing Intelligence</span>
          </h2>
          <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Transforming production lines with AI that sees more, learns faster, and never misses a detail.
          </p>
        </motion.div>

        <div className="relative">
          {/* Main visualization container */}
          <motion.div
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
          >
            {/* Mock factory floor visualization */}
            <div className="aspect-video bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center max-h-screen">
              <div className="absolute inset-0 opacity-20 pattern-dots pattern-gray-700 pattern-size-4" />

              {/* Conveyor belt */}
              <div className="absolute bottom-0 left-0 right-0 z-10 h-16 bg-gray-700/50 border-t border-gray-600/50">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-900/90 to-transparent" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-900/90 to-transparent" />

                {/* Moving products */}
                <motion.div
                  animate={{ x: ['-10%', '110%'] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute bottom-2 left-0 flex space-x-8"
                >
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-20 h-12 relative">
                      {/* Engine image with container */}
                      <div className="absolute inset-0 bg-gray-700 rounded-md overflow-hidden">
                        <img
                          src="/images/engine.png" // Replace with your actual image path
                          alt="Engine component"
                          className="w-full h-full object-cover blur-[1px]"
                        />

                        {/* Quality overlay indicators */}
                        {i === 2 && (
                          <motion.div
                            animate={{ opacity: [0.7, 1] }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                            className="absolute top-0 left-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"
                          >
                            <div className="absolute -bottom-5 left-0 bg-red-500 text-white text-[8px] px-1 py-0.5 rounded whitespace-nowrap">
                              Crack Detected
                            </div>
                          </motion.div>
                        )}

                        {i === 4 && (
                          <motion.div
                            animate={{ scale: [0.9, 1.1] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
                            className="absolute top-2 left-2 w-6 h-1.5 bg-yellow-500 rounded-full"
                          >
                            <div className="absolute -bottom-5 left-0 bg-yellow-500 text-white text-[8px] px-1 py-0.5 rounded whitespace-nowrap">
                              Misalignment
                            </div>
                          </motion.div>
                        )}

                        {/* Good part indicator */}
                        {i === 5 && (
                          <motion.div
                            animate={{ opacity: [0.8, 1] }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                            className="absolute left-0 top-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center"
                          >
                            <CheckCircle className="w-2 h-2 text-white" />
                            <div className="absolute top-4 left-0 bg-green-500 text-white text-[8px] px-1 py-0.5 rounded whitespace-nowrap">
                              Verified
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* AI detection overlay */}
              <div className="absolute inset-0 pointer-events-none bg-[url('/images/factory.png')] bg-cover bg-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute top-8 left-8 bg-black/80 text-white px-3 py-1.5 rounded-full text-sm flex items-center"
                >
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2" />
                  <span>AI Vision Active</span>
                </motion.div>

                {/* Detection highlights */}
                <div

                  className="absolute top-1/2 left-1/2 rounded-lg"
                >
                  <div className="   bg-green-500 text-white text-xs px-2 py-1 rounded">
                    Verified
                  </div>
                </div>
              </div>
            </div>

            {/* Integrated feature indicators */}
            <div className="z-10 grid grid-cols-2 md:grid-cols-4 mb-16 divide-x divide-[#071744] ">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1}}
                  transition={{ duration: 0.7, delay: 0.2 + idx * 0.1 }}
                  viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                  className="p-6 flex flex-col items-center text-center group z-10 bg-[#071744]/20"
                >
                  <div className="mb-3 p-3 rounded-full bg-blue-600/10 text-blue-400 group-hover:bg-blue-600/20 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="font-medium text-white mb-1.5">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats/metrics floating beside */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { value: "99.9%", label: "Detection Accuracy" },
              { value: "24/7", label: "Operation" },
              { value: "50ms", label: "Response Time" },
              { value: "0", label: "Missed Defects" },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <p className="text-2xl font-light text-blue-600 dark:text-blue-400">{stat.value}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionShowcase;
