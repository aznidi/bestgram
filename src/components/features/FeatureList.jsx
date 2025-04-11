"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FeatureCard from './FeatureCard';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function FeatureList({ features }) {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section ref={ref} className="relative py-10 sm:py-16 md:py-24 lg:py-32 overflow-hidden bg-[#f8fafc] dark:bg-[#0a0a0a]">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#f8fafc] dark:bg-[#0a0a0a] opacity-80"></div>
        
        {/* Geometric shapes */}
        <motion.div 
          className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-blue-100/30 dark:bg-blue-900/10 blur-3xl"
          animate={{ 
            x: [50, 0, 50],
            y: [0, 50, 0],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-0 left-0 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-purple-100/30 dark:bg-purple-900/10 blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [50, 0, 50],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute top-1/3 left-1/4 w-32 sm:w-40 h-32 sm:h-40 rounded-full bg-teal-100/30 dark:bg-teal-900/10 blur-2xl"
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]"></div>
      </div>

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 gap-y-12 sm:gap-y-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-10">
          {features.map((feature, featureIdx) => (
            <FeatureCard 
              key={feature.title} 
              feature={feature} 
              featureIdx={featureIdx} 
            />
          ))}
        </div>
      </motion.div>
      
      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-800 to-transparent opacity-30"></div>
      
      {/* Side decorative elements */}
      <div className="hidden lg:block absolute top-1/4 left-0 w-1 h-20 bg-purple-200 dark:bg-purple-800 opacity-30"></div>
      <div className="hidden lg:block absolute top-2/4 right-0 w-1 h-20 bg-blue-200 dark:bg-blue-800 opacity-30"></div>
    </section>
  );
}