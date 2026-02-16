import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Scan, CheckCircle, AlertTriangle, RotateCw } from "lucide-react";

const VisionTab = () => {
  const [inferred, setInferred] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInspect = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setInferred(true);
      setIsProcessing(false);

      // Auto reset after 5 seconds
      setTimeout(() => {
        setInferred(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 md:flex-row items-start md:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            Real-time Visual Inspection
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            AI-powered defect detection with millimeter precision
          </p>
        </div>
        <motion.button
          onClick={handleInspect}
          disabled={isProcessing}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-2 py-1 md:px-6 md:py-3 text-md md:text-lg rounded-xl font-semibold flex items-center gap-2 
            ${isProcessing
              ? 'bg-gray-500 cursor-not-allowed'
              : 'bg-blue-600 dark:bg-blue-400 hover:bg-blue-700 dark:hover:bg-blue-500'
            } text-white shadow-lg`}
        >
          {isProcessing ? (
            <>
              <RotateCw className="w-4 h-4 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <Scan className="w-4 h-4" />
              Run Inspection
            </>
          )}
        </motion.button>
      </div>

      <div className="relative rounded-2xl overflow-hidden bg-gray-900 p-1">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px),
                            linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={inferred ? "/images/offerings/vision_before.png" : "/images/offerings/vision_before.png"}
              alt="vision inspection"
              className="w-full max-h-[400px] object-cover rounded-xl"
            />
          </motion.div>

          {/* Animated Bounding Box */}
          {inferred && (
            <>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", duration: 0.8 }}
                className="absolute top-[55%] md:top-[65%] left-[40%] w-[20%] h-[15%] border-2 border-red-500 rounded-lg"
                style={{
                  boxShadow: '0 0 20px rgba(239, 68, 68, 0.5)',
                }}
              >
                {/* Pulsing Effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-red-400 rounded-lg"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Detection Label */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="absolute top-[36%] left-[61%] bg-blue-600 dark:bg-blue-400 text-white px-4 py-2 rounded-lg shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  <span className="font-bold">Defect Detected</span>
                  <span className="ml-2 px-2 py-1 bg-red-700 rounded text-xs">0.23mm</span>
                </div>
              </motion.div>
            </>
          )}
        </div>
      </div>

      {/* Results Panel */}
      {inferred && <div className="grid grid-cols-3 gap-4">
        <motion.div
          className="bg-blue-600/10 dark:bg-blue-400/10 p-4 rounded-xl"
          whileHover={{ y: -5 }}
        >
          <div className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-300">Total Inspections</span>
            {inferred ? (
              <CheckCircle className="w-5 h-5 text-green-500" />
            ) : (
              <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
            )}
          </div>
          <div className="text-3xl font-bold mt-2 text-blue-600 dark:text-blue-400">
            {inferred ? "1,247" : "1,246"}
          </div>
        </motion.div>

        <motion.div
          className="bg-blue-600/10 dark:bg-blue-400/10 p-4 rounded-xl"
          whileHover={{ y: -5 }}
        >
          <div className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-300">Accuracy</span>
            <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-blue-600 dark:bg-blue-400"
                initial={{ width: "99.7%" }}
                animate={{ width: inferred ? "99.8%" : "99.7%" }}
              />
            </div>
          </div>
          <div className="text-3xl font-bold mt-2 text-blue-600 dark:text-blue-400">
            {inferred ? "99.8%" : "99.7%"}
          </div>
        </motion.div>

        <motion.div
          className="bg-blue-600/10 dark:bg-blue-400/10 p-4 rounded-xl"
          whileHover={{ y: -5 }}
        >
          <div className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-300">Processing Time</span>
            <div className="px-2 py-1 bg-blue-600 dark:bg-blue-400 rounded text-xs text-white">
              {inferred ? "47ms" : "45ms"}
            </div>
          </div>
          <div className="text-3xl font-bold mt-2 text-blue-600 dark:text-blue-400">
            {inferred ? "47ms" : "45ms"}
          </div>
        </motion.div>
      </div>}
    </div>
  );
};

export default VisionTab;
