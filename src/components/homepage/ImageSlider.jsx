// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const MarqueeCarousel = ({ images, speed = 8, visibleItems = 6, gap = 60 }) => {
  // Duplicate images for seamless looping
  const duplicatedImages = [...images, ...images, ...images];

  // Responsive visibleItems and gap
  const getResponsiveSettings = () => {
    if (typeof window === 'undefined') return { items: visibleItems, gap, speedMultiplier: 1 };
    if (window.innerWidth < 640) return { items: 2, gap: 12, speedMultiplier: 2.2 }; // mobile
    if (window.innerWidth < 1024) return { items: 3, gap: 24, speedMultiplier: 1 }; // tablet
    return { items: visibleItems, gap, speedMultiplier: 1 };
  };

  const [responsive, setResponsive] = useState(getResponsiveSettings());

  useEffect(() => {
    const handleResize = () => setResponsive(getResponsiveSettings());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const itemWidth = `calc((100% - ${(responsive.items - 1) * responsive.gap}px) / ${responsive.items})`;
  const [duration, setDuration] = useState(
    images.length * (10 / (speed * responsive.speedMultiplier))
  );

  // Adjust duration when props change
  useEffect(() => {
    setDuration(images.length * (10 / (speed * responsive.speedMultiplier)));
  }, [images.length, speed, responsive.speedMultiplier]);

  return (
    <section className="relative py-20 px-4 md:px-8 bg-white dark:bg-[#020617] w-full overflow-hidden">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-center mb-4 text-gray-900 dark:text-gray-100">Our Customers</h2>
      <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-12 text-center max-w-3xl mx-auto">
        Trusted by leading manufacturers across industries.
      </p>
      <motion.div
        className="flex"
        animate={{
          x: ['0%', `-${100}%`],
        }}
        transition={{
          duration: duration * 3,
          ease: 'linear',
          repeat: Infinity,
        }}
        style={{ gap: `${responsive.gap}px` }}
      >
        {duplicatedImages.map((image, index) => (
          <div 
            key={`${index}-${image}`} 
            className="flex-shrink-0 p-2  flex items-center justify-center "
            style={{ width: itemWidth, minWidth: 0 }}
          >
            <img
              src={image}
              alt={`Slide ${index % images.length}`}
              className="object-contain w-28 h-28 "
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default MarqueeCarousel;

// Usage:
// <MarqueeCarousel 
//   images={['/img1.jpg', '/img2.jpg', '/img3.jpg']}
//   speed={1} 
//   visibleItems={3}
//   gap={8}
// />
