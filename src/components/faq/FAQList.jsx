"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function FAQList({ faqs }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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
    <div className="relative">
      {/* Decorative elements */}
      <motion.div 
        className="absolute -z-10 top-20 right-10 w-64 h-64 rounded-full border-4 border-blue-100 dark:border-blue-900 opacity-10"
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
        className="absolute -z-10 bottom-20 left-10 w-40 h-40 rounded-full border-2 border-purple-100 dark:border-purple-900 opacity-10"
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
        className="absolute -z-10 top-1/3 left-1/4 w-20 h-20 rounded-md border-2 border-blue-200 dark:border-blue-800 opacity-20"
        animate={{ 
          y: [0, 20, 0],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.dl 
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {faqs.map((faq, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className={`bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl overflow-hidden cursor-pointer border border-gray-100 dark:border-gray-700 shadow-sm transition-all duration-300 ${expandedIndex === index ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="p-6 relative">
              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-16 h-1 bg-blue-500 dark:bg-blue-400 opacity-60"></div>
              
              <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-white flex items-start justify-between">
                <span>{faq.question}</span>
                <motion.span 
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-2 flex-shrink-0 text-blue-500 dark:text-blue-400"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </motion.span>
              </dt>
              
              <motion.dd 
                className="mt-4 text-base text-gray-600 dark:text-gray-300 overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: expandedIndex === index ? 'auto' : 0,
                  opacity: expandedIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="pb-2">{faq.answer}</div>
              </motion.dd>
            </div>
          </motion.div>
        ))}
      </motion.dl>
    </div>
  );
}