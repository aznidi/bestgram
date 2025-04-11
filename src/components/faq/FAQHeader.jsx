"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function FAQHeader() {
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
    <section ref={ref} className="py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#f8fafc] dark:bg-[#0a0a0a] opacity-80"></div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-10 right-10 w-40 h-40 rounded-full border-4 border-blue-100 dark:border-blue-900 opacity-20"
          animate={{ 
            rotate: 360,
            x: [0, 10, 0],
            y: [0, 15, 0],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div 
          className="absolute bottom-10 left-10 w-60 h-60 rounded-full border-2 border-purple-100 dark:border-purple-900 opacity-20"
          animate={{ 
            rotate: -360,
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div 
          className="absolute top-1/3 left-1/4 w-20 h-20 rounded-md border-2 border-blue-200 dark:border-blue-800 opacity-30 rotate-12"
          animate={{ 
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 mb-6 backdrop-blur-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <span className="mr-2 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-400 dark:bg-blue-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 dark:bg-blue-500"></span>
            </span>
            Support Center
          </motion.div>
          
          <motion.h1 
            className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl sm:tracking-tight relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400"
              initial={{ width: 0 }}
              animate={inView ? { width: "100%" } : { width: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            ></motion.span>
          </motion.h1>
          
          <motion.p 
            className="max-w-3xl mt-6 mx-auto text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Find quick answers to the most common questions about Bestgram's features, pricing, and services.
          </motion.p>
          
          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {["Account", "Billing", "Features", "Security"].map((category, index) => (
              <motion.button
                key={category}
                className="px-5 py-2 rounded-lg text-sm font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-sm border border-gray-200 dark:border-gray-700"
                whileHover={{ backgroundColor: theme === 'dark' ? '#1e293b' : '#f1f5f9' }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}