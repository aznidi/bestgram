"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PricingCard from './PricingCard';
import { useState, useEffect } from 'react';

export default function PricingTiers({ tiers, frequency }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative overflow-hidden p-5">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute top-20 right-10 w-64 h-64 rounded-full border-4 border-blue-100 dark:border-blue-900 opacity-20"
          animate={{ 
            rotate: 360,
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div 
          className="absolute bottom-20 left-10 w-40 h-40 rounded-full border-2 border-purple-100 dark:border-purple-900 opacity-20"
          animate={{ 
            rotate: -360,
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div 
          className="absolute top-1/3 left-1/4 w-20 h-20 rounded-md border-2 border-blue-200 dark:border-blue-800 opacity-30"
          animate={{ 
            y: [0, 20, 0],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <motion.div 
        ref={ref}
        className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-8 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {tiers.map((tier, index) => (
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.2 + (index * 0.1),
              ease: "easeOut"
            }}
            className="flex"
          >
            <PricingCard tier={tier} frequency={frequency} index={index} />
          </motion.div>
        ))}
      </motion.div>
      
      {/* Additional decorative elements */}
      <motion.div 
        className="absolute -z-10 bottom-10 right-1/4 w-32 h-32 rounded-full border-4 border-dashed border-blue-200 dark:border-blue-900 opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
}