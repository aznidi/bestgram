"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function PricingHeader() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div ref={ref} className="mx-auto max-w-4xl text-center relative z-10 py-8">
      {/* Decorative elements */}
      <motion.div 
        className="absolute -z-10 -top-20 right-0 w-40 h-40 rounded-full bg-blue-100 dark:bg-blue-900/20 opacity-30 blur-xl"
        animate={{ 
          y: [0, 15, 0],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute -z-10 -bottom-10 left-10 w-60 h-60 rounded-full bg-purple-100 dark:bg-purple-900/20 opacity-20 blur-xl"
        animate={{ 
          x: [0, 10, 0],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute -z-10 top-1/2 left-1/4 w-16 h-16 rounded-md border-2 border-blue-200 dark:border-blue-800 opacity-20 rotate-12"
        animate={{ 
          rotate: [12, 45, 12],
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.span 
        className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 mb-6 backdrop-blur-sm"
        initial={{ opacity: 0, y: -10 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
      >
        <span className="mr-2 flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-400 dark:bg-blue-600 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 dark:bg-blue-500"></span>
        </span>
        Pricing Plans
      </motion.span>
      
      <motion.h2 
        className="mt-2 text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Pricing Plans for Every Need
      </motion.h2>
      
      <motion.div 
        className="mt-6 text-xl leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p>Choose the perfect plan that aligns with your Instagram goals, whether you're just starting out or managing multiple professional accounts.</p>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mt-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {['Flexible Options', 'No Hidden Fees', '24/7 Support'].map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-sm bg-[#f1f5f9] dark:bg-[#111111] rounded-lg text-gray-700 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}