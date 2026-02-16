/* eslint-disable no-unused-vars */
import React from 'react'
import Hero from '../components/homepage/Hero'
import MarqueeCarousel from '../components/homepage/ImageSlider'
import Applications from '../components/homepage/Applications';
import { motion } from 'framer-motion';
import VisionShowcase from '../components/homepage/VisionShowcase';
import TopIndustries from '../components/homepage/TopIndustries';
import Offerings from '../components/homepage/Offerings';
import AwardsAndRecognition from '../components/homepage/AwardsAndRecognition';
import EnquiryForm from '../components/homepage/EnquiryForm';
import USPs from '../components/homepage/USPs';
import Certificates from '../components/homepage/Certificates';
const Home = () => {

  const images = ['/images/customers/amber-logo.png', '/images/customers/bajaj-logo.png', '/images/customers/Buhler_logo.png',
    '/images/customers/Hero-logo.png', '/images/customers/Honda_Logo.svg',
    '/images/customers/LG-logo.png', '/images/customers/suzuki-logo.png', '/images/customers/tata-logo.png',
    '/images/customers/titan-logo.png']
  
  return (
    <div className=''>
      <Hero />
      <Offerings />
      <USPs />
      <Applications />
      <VisionShowcase />

      <TopIndustries />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <MarqueeCarousel images={images} />
      </motion.div>
      <AwardsAndRecognition />
      <Certificates />

    </div>
  )
}

export default Home
