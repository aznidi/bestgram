"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function PricingCTA() {
  const [mounted, setMounted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section 
      ref={ref}
      className="relative overflow-hidden mt-24 py-16 px-6 sm:py-20 sm:px-12 lg:py-24 lg:px-8"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#f8fafc] dark:bg-[#0a0a0a]"></div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-10 right-10 w-40 h-40 rounded-full bg-blue-100 dark:bg-blue-900/20 opacity-30 blur-xl"
          animate={{ 
            rotate: 360,
            x: [0, 10, 0],
            y: [0, 15, 0],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div 
          className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-purple-100 dark:bg-purple-900/20 opacity-20 blur-xl"
          animate={{ 
            rotate: -360,
            x: [0, -15, 0],
            y: [0, 10, 0],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div 
          className="absolute top-1/3 left-1/4 w-20 h-20 rounded-full bg-teal-100 dark:bg-teal-900/20 opacity-30 blur-md"
          animate={{ 
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto rounded-3xl overflow-hidden bg-white dark:bg-gray-800/90 shadow-2xl border border-gray-100 dark:border-gray-700"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            className="p-8 sm:p-12 lg:p-16"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 mb-6">
              <span className="mr-2 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-400 dark:bg-blue-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 dark:bg-blue-500"></span>
              </span>
              Enterprise Solutions
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Need a custom solution?</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Contact our team to discuss your specific requirements and get a personalized offer for your business or agency.
            </p>
            
            <div className="mt-8 space-y-4">
              {[
                "Dedicated account manager",
                "Custom feature development",
                "Priority support 24/7",
                "Advanced analytics and reporting"
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-3 text-gray-700 dark:text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="relative bg-blue-600 p-8 sm:p-12 lg:p-16 flex flex-col justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="absolute inset-0 overflow-hidden">
              <motion.div 
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-500 opacity-20"
                animate={{ 
                  y: [0, 10, 0],
                  x: [0, -10, 0],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-blue-700 opacity-20"
                animate={{ 
                  y: [0, -15, 0],
                  x: [0, 15, 0],
                }}
                transition={{ 
                  duration: 12, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-6">Get in touch with us</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center text-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  enterprise@bestgram.com
                </div>
                <div className="flex items-center text-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +1 (555) 123-4567
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-transparent bg-white px-6 py-4 text-base font-medium text-blue-600 shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                >
                  Contact Us
                </Link>
                <Link
                  href="/book-demo"
                  className="inline-flex items-center justify-center rounded-xl border border-white px-6 py-4 text-base font-medium text-white shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                >
                  Book a Demo
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}