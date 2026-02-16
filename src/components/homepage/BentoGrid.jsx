// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";


const images = [
  "/images/industries/automotive-ind.jpeg",
  '/images/industries/consumer-products.webp',

  "/images/industries/electronic.webp",
  "/images/industries/pharma_ind.jpg",

  "/images/industries/battery-ind.jpg",

  // duplicate for more variations

];

const BentoGrid = ({ className = "" }) => {

  const layouts = [


    // Layout 3:
    <div className={`grid grid-cols-8 grid-rows-4 auto-rows-fr gap-2 md:gap-3 w-full max-w-xl h-[260px] sm:h-[320px] md:h-[420px] ${className}`}>

      <BentoItem
        src={images[0]}
        className="col-span-5 row-span-2"

        eager={true}
      />
      <BentoItem
        src={images[1]}
        className="col-span-3 row-span-1"


      />
      <BentoItem
        src={images[2]}
        className="col-span-3 row-span-3"


      />
      <BentoItem
        src={images[3]}
        className="col-span-2 row-span-2"


      />
      <BentoItem
        src={images[4]}
        className="col-span-3 row-span-2"

      />

    </div>,


  ];

  return (
    <div className="relative">
      {layouts[0]}

      {/* Optional: Manual layout switcher buttons */}

    </div>
  );
};

export default BentoGrid;

/* ---------- Item ---------- */

const BentoItem = ({ src, className, eager = false }) => {
  return (
    <div


      className={`relative overflow-hidden rounded-2xl shadow-xl cursor-pointer group ${className}`}
    >
      <img
        src={src}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={eager ? "high" : "auto"}
        className="w-full h-full object-cover"
        alt=""
      />

      {/* Dynamic gradient overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}

      {/* Subtle border effect */}
      {/* <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl transition-all duration-300" /> */}

      {/* Glow effect */}
      {/* <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(255,255,255,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" /> */}
    </div>
  );
};
