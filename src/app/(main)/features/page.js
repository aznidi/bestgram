"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import FeatureHeader from '@/components/features/FeatureHeader';
import FeatureList from '@/components/features/FeatureList';
import FeaturesCTA from '@/components/features/FeaturesCTA';
import { featuresData } from '@/components/features/featuresData';

export default function FeaturesPage() {
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
    <section ref={ref} className="relative overflow-hidden py-24 sm:py-32 bg-[#f8fafc] dark:bg-[#0a0a0a]">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#f8fafc] dark:bg-[#0a0a0a] opacity-80"></div>
        
        <motion.div 
          className="absolute top-20 right-10 w-64 h-64 rounded-full bg-blue-100 dark:bg-blue-900/20 opacity-10 blur-xl"
          animate={{ 
            rotate: 360,
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div 
          className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-purple-100 dark:bg-purple-900/20 opacity-10 blur-xl"
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
          className="absolute top-1/3 left-1/4 w-40 h-40 rounded-full bg-teal-100 dark:bg-teal-900/20 opacity-10 blur-xl"
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
        
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-[#f1f5f9] dark:bg-[#111111] -skew-y-3 transform origin-top-right"></div>
      </div>
      
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <FeatureHeader />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <FeatureList features={featuresData} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <FeaturesCTA />
        </motion.div>
    </section>
  );
}