
import React from 'react';
import { Zap } from 'lucide-react';
const BentoGrid = React.lazy(() => import("./BentoGrid"));
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-x-hidden overflow-y-hidden">
      {/* Mobile background overlay */}
      <div className="absolute inset-0 md:hidden pointer-events-none flex items-center justify-center overflow-x-hidden" aria-hidden="true">
        <div className="opacity-40 dark:opacity-65 w-full flex justify-center [filter:saturate(1.1)_contrast(1.05)]">
          <BentoGrid className="!h-[75vh] w-full max-w-[92vw] !max-w-[92vw]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/75 to-white/85 dark:from-[#020617]/20 dark:via-[#020617]/35 dark:to-[#020617]/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 pt-16">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* Left Content */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-8 text-gray-900 dark:text-gray-100 leading-tight">
              Revolutionizing Business Through{" "}
              <span className="font-medium bg-blue-600 dark:bg-blue-400 bg-clip-text text-transparent">
                Intelligent
              </span>{" "}
              Automation
            </h1>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
              We build cutting-edge automation solutions that streamline operations,
              reduce costs, and propel your business into the future.
            </p>

          </div>

          {/* Right Spacer (optional visual balance) */}
          <div className="hidden md:flex md:w-1/2 justify-center max-h-screen overflow-hidden">
            <BentoGrid />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;



const PulseButton = () => {
  return (
    <button

      className="px-6 py-3 rounded-lg font-medium relative overflow-hidden group hover:cursor-pointer bg-transparent"
    >
      {/* Moving border light */}
      <div

        className="absolute inset-0 rounded-lg p-[2px] pointer-events-none"
        style={{
          background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #f43f5e, #f59e0b, #3b82f6)',
          backgroundSize: '400% 400%',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor'
        }}
      />

      {/* Background pulse animation */}
      <div

        className="absolute inset-0 bg-white/10 rounded-lg"
      />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        <Zap className="w-5 h-5 fill-current group-hover:animate-pulse" />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Get Automated Solution
        </span>
      </span>
    </button>
  );
};
