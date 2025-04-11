"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PricingHeader from '@/components/pricing/PricingHeader';
import PricingFrequencySelector from '@/components/pricing/PricingFrequencySelector';
import PricingTiers from '@/components/pricing/PricingTiers';
import FeatureComparison from '@/components/pricing/FeatureComparison';
import FAQ from '@/components/pricing/FAQ';
import PricingCTA from '@/components/pricing/PricingCTA';
import { frequencies, tiers } from '@/components/pricing/pricingData';
import { useTheme } from 'next-themes';

export default function Pricing() {
  const [frequency, setFrequency] = useState(frequencies[0]);
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
    <section ref={ref} className="py-24 sm:py-32 bg-[#f8fafc] dark:bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#f8fafc] dark:bg-[#0a0a0a] opacity-80"></div>
        
        <motion.div 
          className="absolute top-20 right-10 w-64 h-64 rounded-full border-4 border-blue-100 dark:border-blue-900 opacity-20"
          animate={{ 
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div 
          className="absolute bottom-20 left-10 w-80 h-80 rounded-full border-2 border-purple-100 dark:border-purple-900 opacity-20"
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
          className="absolute top-1/3 left-1/4 w-40 h-40 rounded-md border-2 border-blue-200 dark:border-blue-800 opacity-30"
          animate={{ 
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <motion.div 
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants}>
          <PricingHeader />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <PricingFrequencySelector 
            frequencies={frequencies} 
            frequency={frequency} 
            setFrequency={setFrequency} 
          />
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="mt-12"
        >
          <PricingTiers 
            tiers={tiers} 
            frequency={frequency} 
          />
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="mt-24"
        >
          <FeatureComparison />
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="mt-24"
        >
          <FAQ />
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="mt-24"
        >
          <PricingCTA />
        </motion.div>
      </motion.div>
    </section>
  );
}