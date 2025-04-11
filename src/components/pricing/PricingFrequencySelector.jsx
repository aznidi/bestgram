"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function PricingFrequencySelector({ frequencies, frequency, setFrequency }) {
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
    <motion.div 
      ref={ref}
      className="mt-16 flex justify-center relative z-10"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {/* Decorative elements */}
      <motion.div 
        className="absolute -z-10 -top-6 -left-10 w-20 h-20 rounded-full border-2 border-blue-200 dark:border-blue-900 opacity-20"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      ></motion.div>
      
      <motion.div 
        className="absolute -z-10 -bottom-6 -right-10 w-16 h-16 rounded-full border-2 border-purple-200 dark:border-purple-900 opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      ></motion.div>

      <div className="relative backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 p-1.5 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 max-w-xs w-full sm:max-w-md">
        <div className="grid grid-cols-2 gap-x-2 rounded-xl text-center text-sm font-medium leading-5">
          {frequencies.map((option) => (
            <motion.button
              key={option.value}
              className={`${
                frequency.value === option.value 
                  ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-md' 
                  : 'text-gray-600 dark:text-gray-300'
              } cursor-pointer rounded-xl py-3 px-4 transition-all duration-300 relative overflow-hidden`}
              onClick={() => setFrequency(option)}
              whileTap={{ scale: 0.98 }}
            >
              {frequency.value === option.value && (
                <motion.span 
                  className="absolute inset-0 bg-blue-50 dark:bg-blue-900/20 -z-10"
                  layoutId="activeBackground"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{option.label}</span>
            </motion.button>
          ))}
        </div>
        
        {/* Subtle accent line */}
        <motion.div 
          className="absolute bottom-0 left-0 h-0.5 bg-blue-500 dark:bg-blue-600 opacity-30"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
    </motion.div>
  );
}