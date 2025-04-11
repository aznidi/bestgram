"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FAQHeader from '@/components/faq/FAQHeader';
import FAQList from '@/components/faq/FAQList';
import ContactSupport from '@/components/faq/ContactSupport';
import { faqs } from '@/components/faq/faqData';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function FAQ() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
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
    <section className="relative overflow-hidden py-16 sm:py-24 bg-[#f8fafc] dark:bg-[#0a0a0a]">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#f8fafc] dark:bg-[#0a0a0a]"></div>
        
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
          className="absolute bottom-20 left-10 w-40 h-40 rounded-full border-2 border-purple-100 dark:border-purple-900 opacity-20"
          animate={{ 
            rotate: -360,
          }}
          transition={{ 
            duration: 15, 
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
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <motion.div 
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants}>
          <FAQHeader />
        </motion.div>
        
        <motion.div 
          className="mt-16"
          variants={itemVariants}
        >
          <FAQList faqs={faqs} />
        </motion.div>
        
        <motion.div 
          className="mt-20"
          variants={itemVariants}
        >
          <ContactSupport />
        </motion.div>
      </motion.div>
    </section>
  );
}