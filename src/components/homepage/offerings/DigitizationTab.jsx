import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { 
  FileText, 
  Scan, 
  CheckCircle, 
  FileSpreadsheet,
  Search,
  Zap,
  ClipboardCheck,
  ArrowRight
} from "lucide-react";

const DigitizationTab = () => {
  const [digitized, setDigitized] = useState(false);
  const [processing, setProcessing] = useState(false);

  const handleDigitize = () => {
    setProcessing(true);
    
    // Simulate processing time
    setTimeout(() => {
      setProcessing(false);
      setDigitized(true);
      
      // Auto reset after 8 seconds
      setTimeout(() => {
        setDigitized(false);
      }, 8000);
    }, 2000);
  };

//   const forms = [
//     { id: 1, name: "Quality Check Form", type: "digital", date: "Today" },
//     { id: 2, name: "Safety Inspection", type: "digital", date: "Today" },
//     { id: 3, name: "Equipment Log", type: "digital", date: "Yesterday" },
//     { id: 4, name: "Maintenance Report", type: "paper", date: "Pending" },
//   ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 md:flex-row items-start md:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            Shop Floor Digitization
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-md">
            Convert paper forms to structured digital data with AI
          </p>
        </div>
        
        <motion.button
          onClick={handleDigitize}
          disabled={processing || digitized}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-2 py-1 md:px-6 md:py-3 text-md md:text-lg rounded-xl font-semibold flex items-center gap-2 
            ${processing 
              ? 'bg-blue-400 cursor-not-allowed' 
              : digitized
              ? 'bg-gray-600 cursor-default'
              : 'bg-blue-600 dark:bg-blue-400 hover:bg-blue-700 dark:hover:bg-blue-500'
            } text-white shadow-lg`}
        >
          {processing ? (
            <>
              <Scan className="w-4 h-4 animate-pulse" />
              Digitizing...
            </>
          ) : digitized ? (
            <>
              <CheckCircle className="w-4 h-4" />
              Digitized
            </>
          ) : (
            <>
              <Scan className="w-4 h-4" />
              Digitize Form
            </>
          )}
        </motion.button>
      </div>

      {/* Image Comparison Section */}
      <div className="relative rounded-2xl overflow-hidden bg-gray-900 p-1">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px),
                            linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-6 p-6">
            {/* Before: Paper Form */}
            <div className="lg:w-1/2">
              <div className="mb-4 flex items-center gap-3">
                <FileText className="w-5 h-5 text-amber-500" />
                <h3 className="text-lg font-semibold dark:text-white">
                  {digitized ? "Before: Paper Form" : "Paper Form"}
                </h3>
              </div>
              
              <div className="relative rounded-xl overflow-hidden border-2 border-amber-500/30">
                <motion.img
                  src="/images/offerings/shop_dig_before.png"
                  alt="Paper quality check form"
                  className="w-full"
                  animate={{ 
                    opacity: digitized ? 0.3 : 1,
                    scale: digitized ? 0.95 : 1
                  }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              
              <div className="mt-4 text-sm text-amber-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <span>Manual entries & physical storage</span>
                </div>
              </div>
            </div>

            {/* Arrow Separator */}
            <div className="relative lg:w-12 flex justify-center">
              <motion.div
                animate={{ 
                  x: processing ? [0, 10, 0] : 0,
                  opacity: processing ? [0.5, 1, 0.5] : 1
                }}
                transition={{ duration: 1.5, repeat: processing ? Infinity : 0 }}
                className="text-3xl lg:text-4xl text-blue-600 dark:text-blue-400"
              >
                <ArrowRight className="w-8 h-8 lg:w-10 lg:h-10" />
              </motion.div>
            </div>

            {/* After: Digital Form */}
            <div className="lg:w-1/2">
              <div className="mb-4 flex items-center gap-3">
                <FileSpreadsheet className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="text-lg font-semibold dark:text-white">
                  {digitized ? "After: Digital Form" : "Digital Form"}
                </h3>
              </div>
              
              <div className="relative rounded-xl overflow-hidden border-2 border-blue-600/30 dark:border-blue-400/30">
                <motion.img
                  src="/images/offerings/shop_dig_after.png"
                  alt="Digital quality check form"
                  className="w-full"
                  animate={{ 
                    opacity: digitized ? 1 : 0.3,
                    scale: digitized ? 1 : 0.95
                  }}
                  transition={{ duration: 0.5 }}
                />
                
                {!digitized && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/70"
                  >
                    <div className="text-center p-4">
                      <Scan className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                      <p className="text-white font-semibold">Click "Digitize Form"</p>
                      <p className="text-gray-300 text-sm mt-1">to see the transformation</p>
                    </div>
                  </motion.div>
                )}
              </div>
              
              <div className="mt-4 text-sm text-blue-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                  <span>Structured data & real-time analytics</span>
                </div>
              </div>
            </div>
          </div>

          {/* Processing Animation */}
          {processing && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="px-6 pb-6"
            >
              <div className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Zap className="w-5 h-5 text-amber-500 animate-pulse" />
                  <span className="font-semibold text-white">AI Processing Form...</span>
                </div>
                
                <div className="flex justify-center space-x-1">
                  {[1, 2, 3].map(i => (
                    <motion.div
                      key={i}
                      className="w-2 h-6 bg-blue-600 dark:bg-blue-400 rounded-full"
                      animate={{ height: ["50%", "100%", "50%"] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
                    />
                  ))}
                </div>
                
                <div className="mt-3 text-center text-sm text-gray-300">
                  Scanning, extracting data, generating digital format...
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Key Stats & Benefits */}
      {
        digitized && <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div 
          className="bg-blue-600/10 dark:bg-blue-400/10 p-4 rounded-xl"
          whileHover={{ y: -5 }}
        >
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            95%
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Processing Speed</div>
        </motion.div>

        <motion.div 
          className="bg-blue-600/10 dark:bg-blue-400/10 p-4 rounded-xl"
          whileHover={{ y: -5 }}
        >
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            1.2k
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Forms Digitized</div>
        </motion.div>

        <motion.div 
          className="bg-blue-600/10 dark:bg-blue-400/10 p-4 rounded-xl"
          whileHover={{ y: -5 }}
        >
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            99%
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Accuracy Rate</div>
        </motion.div>

        <motion.div 
          className="bg-blue-600/10 dark:bg-blue-400/10 p-4 rounded-xl"
          whileHover={{ y: -5 }}
        >
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            75%
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">Cost Reduction</div>
        </motion.div>
      </div>
      }
      

      {/* Key Benefits */}
      <div className="bg-blue-600/10 dark:bg-blue-400/10 rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-4 dark:text-white">Key Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-blue-600/20 dark:bg-blue-400/20">
              <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <div className="font-medium dark:text-white">Instant Processing</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Convert paper to digital in seconds</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-blue-600/20 dark:bg-blue-400/20">
              <ClipboardCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <div className="font-medium dark:text-white">Error-Free Data</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">AI validates and corrects entries</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-blue-600/20 dark:bg-blue-400/20">
              <FileSpreadsheet className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <div className="font-medium dark:text-white">Real-time Analytics</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Gain insights instantly</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-blue-600/20 dark:bg-blue-400/20">
              <Search className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <div className="font-medium dark:text-white">Smart Search</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Find any form in milliseconds</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitizationTab;
