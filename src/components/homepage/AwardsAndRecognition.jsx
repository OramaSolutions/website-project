/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const awards = [
  {
    id: 1,
    title: 'Enterprise Innovation Award',
    issuer: 'Nasscom',
    year: '2024',
    img: '/images/awards/award1.png',
    desc:'Recognized for the analysis and reduction of breakages by 50% through AI Solutions'

  },
  {
    id: 2,
    title: 'Startup Sprint',
    issuer: 'Buhler Startup Challenge',
    year: '2024',
    img: '/images/awards/aw4.png',
    desc:'Awarded for our innovative approach to AI-powered automation solutions in manufacturing industry'
  },
  {
    id: 3,
    title: 'Vision Startup',
    issuer: 'Asia',
    year: '2024',
    img: '/images/awards/aw2.png',
    desc:'Only Asian company to win the award. ORAMA-I, a *truly no-code* interface to inspection.'
  },
  {
    id: 4,
    title: 'Tech India Transformation Award',
    issuer: 'Global Tech Forum',
    year: '2024',
    img: '/images/awards/aw3.png',
    desc:'Awarded for best tech of the year in AI and Computer Vision'
  },

];

const AwardsAndRecognition = () => {
  return (
    <section className="relative py-20 px-4 md:px-8 bg-gradient-to-b from-[#071744] to-gray-600">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Fixed left content */}
          <div className="md:sticky md:top-32  h-fit flex-shrink-0 lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Awards & Recognition
              </h2>
              <p className="text-base md:text-lg text-gray-300">
                Our commitment to innovation and excellence has been recognized by industry leaders and organizations worldwide.
              </p>
            </motion.div>
          </div>

          {/* Scrollable right content */}
          <div className="lg:w-2/3 space-y-8">
            {awards.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image placeholder */}
                  <div className="md:w-1/3 h-48 md:h-52 bg-gray-700 flex items-center justify-center p-4">
                    <img
                      src={award.img}
                      alt={award.title}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>

                  {/* Award details */}
                  <div className="md:w-2/3 p-8 md:p-10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-blue-400">
                        {award.issuer}
                      </span>
                      <span className="text-sm text-gray-400">
                        {award.year}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {award.title}
                    </h3>
                    <p className="text-gray-300">
                    {award.desc}
                     </p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-600 rounded-bl-3xl opacity-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-purple-600 rounded-tr-3xl opacity-10"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsAndRecognition;
