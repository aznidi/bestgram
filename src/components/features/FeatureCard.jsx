"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function FeatureCard({ feature, featureIdx }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        damping: 15, 
        stiffness: 100 
      }
    },
  };

  return (
    <motion.div 
      ref={ref}
      className="relative overflow-hidden rounded-xl p-4 sm:p-6 md:p-8 bg-white/5 backdrop-blur-sm border border-gray-200/10 dark:border-gray-800/10"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {/* Decorative elements - 2025 style */}
      <div className="absolute -z-10 inset-0 bg-[#f8fafc] dark:bg-[#0a0a0a] opacity-40"></div>
      <motion.div 
        className="absolute -z-10 top-0 left-0 w-full h-1 bg-blue-600 dark:bg-blue-500 opacity-10"
        animate={{ x: [0, 100, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div 
        className="absolute -z-10 bottom-0 right-0 w-full h-1 bg-blue-600 dark:bg-blue-500 opacity-10"
        animate={{ x: [0, -100, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div 
        className="absolute -z-10 top-1/4 right-1/4 w-16 sm:w-24 h-16 sm:h-24 rounded-full border border-blue-200 dark:border-blue-900 opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      ></motion.div>
      <motion.div 
        className="absolute -z-10 bottom-1/4 left-1/4 w-12 sm:w-16 h-12 sm:h-16 rounded-md border border-blue-200 dark:border-blue-900 opacity-10 rotate-45"
        animate={{ rotate: [45, 225, 45] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <div className="flex flex-col space-y-8">
        {/* Icon at the top */}
        <motion.div 
          className="flex justify-center w-full"
          variants={itemVariants}
        >
          <div className="relative w-full max-w-[180px] sm:max-w-[200px] aspect-square flex items-center justify-center rounded-2xl bg-blue-600 dark:bg-blue-700 p-4 sm:p-6 shadow-lg overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 bg-blue-600 dark:bg-blue-700 opacity-80"></div>
            
            {/* Modern decorative elements inside icon container */}
            <motion.div 
              className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-blue-500 dark:bg-blue-600 opacity-30 blur-xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            
            <motion.div 
              className="absolute top-8 left-8 w-12 h-12 rounded-full bg-blue-700 dark:bg-blue-800 opacity-20 blur-md"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border border-white/10 opacity-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            ></motion.div>
            
            <div className="h-14 w-14 sm:h-16 sm:w-16 text-white relative z-10">
              {feature.icon}
            </div>
          </div>
        </motion.div>

        {/* Content below the icon */}
        <motion.div 
          className="w-full"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <motion.h2 
              className="text-xl sm:text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white"
              variants={itemVariants}
            >
              {feature.title}
            </motion.h2>
            <motion.p 
              className="mt-3 sm:mt-4 text-sm sm:text-base text-center text-gray-600 dark:text-gray-300"
              variants={itemVariants}
            >
              {feature.description}
            </motion.p>
            <motion.ul className="mt-5 sm:mt-6 space-y-2 sm:space-y-3" variants={containerVariants}>
              {feature.details.map((detail, index) => (
                <motion.li 
                  key={detail} 
                  className="flex gap-x-2 sm:gap-x-3 items-start"
                  variants={itemVariants}
                  custom={index}
                >
                  <div className="flex-shrink-0 h-5 w-5 rounded-md bg-blue-600 dark:bg-blue-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{detail}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}