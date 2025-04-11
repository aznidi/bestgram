"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function FeatureHeader() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#f8fafc] dark:bg-[#0a0a0a]"></div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-10 right-20 w-40 h-40 rounded-full border-4 border-blue-100 dark:border-blue-900 opacity-20"
          animate={{ 
            rotate: 360,
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div 
          className="absolute bottom-10 left-20 w-32 h-32 rounded-full border-2 border-purple-100 dark:border-purple-900 opacity-20"
          animate={{ 
            rotate: -360,
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div 
          className="absolute top-1/3 left-1/4 w-16 h-16 rounded-md border-2 border-blue-200 dark:border-blue-800 opacity-30"
          animate={{ 
            y: [0, 15, 0],
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="mr-2 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-400 dark:bg-blue-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 dark:bg-blue-500"></span>
            </span>
            Explore Our Tools
          </motion.span>
          
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Features
          </h1>
          
          <motion.p 
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Discover all the tools Bestgram offers to optimize your Instagram presence and take your social media strategy to the next level.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="h-1 w-20 bg-blue-600 dark:bg-blue-500 rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}