"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function FeatureComparison() {
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
    <section ref={ref} className="py-16 sm:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#f8fafc] dark:bg-[#0a0a0a] opacity-80"></div>
        
        <motion.div 
          className="absolute top-20 right-10 w-64 h-64 rounded-full bg-blue-100 dark:bg-blue-900/20 opacity-10 blur-xl"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
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
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div 
          className="absolute top-1/3 left-1/4 w-20 h-20 rounded-md bg-blue-100 dark:bg-blue-900/20 opacity-10 blur-sm"
          animate={{ 
            rotate: 45,
            y: [0, 20, 0],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Feature Comparison
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300"
          >
            Choose the plan that fits your needs with our comprehensive feature set
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-8"
        >
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <motion.div 
                variants={itemVariants}
                className="overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800/80 backdrop-blur-sm shadow-xl"
              >
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                    <tr>
                      <th scope="col" className="py-5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-white sm:pl-8">
                        Features
                      </th>
                      <th scope="col" className="px-3 py-5 text-center text-sm font-semibold text-gray-900 dark:text-white">
                        <div className="flex flex-col items-center">
                          <span className="text-base">Basic</span>
                          <span className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">For individuals</span>
                        </div>
                      </th>
                      <th scope="col" className="px-3 py-5 text-center text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20">
                        <div className="flex flex-col items-center">
                          <span className="text-base">Standard</span>
                          <span className="mt-1 text-xs font-normal text-blue-500 dark:text-blue-300">Most popular</span>
                        </div>
                      </th>
                      <th scope="col" className="px-3 py-5 text-center text-sm font-semibold text-gray-900 dark:text-white">
                        <div className="flex flex-col items-center">
                          <span className="text-base">Premium</span>
                          <span className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">For teams</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="py-5 pl-6 pr-3 text-sm font-medium text-gray-900 dark:text-white sm:pl-8">Number of accounts</td>
                      <td className="px-3 py-5 text-sm text-center text-gray-500 dark:text-gray-400">1</td>
                      <td className="px-3 py-5 text-sm text-center text-gray-500 dark:text-gray-400 bg-blue-50 dark:bg-blue-900/20">3</td>
                      <td className="px-3 py-5 text-sm text-center text-gray-500 dark:text-gray-400">10</td>
                    </tr>
                    <tr>
                      <td className="py-5 pl-6 pr-3 text-sm font-medium text-gray-900 dark:text-white sm:pl-8">Follower analytics</td>
                      <td className="px-3 py-5 text-sm text-center text-gray-500 dark:text-gray-400">Basic</td>
                      <td className="px-3 py-5 text-sm text-center text-gray-500 dark:text-gray-400 bg-blue-50 dark:bg-blue-900/20">Advanced</td>
                      <td className="px-3 py-5 text-sm text-center text-gray-500 dark:text-gray-400">Complete</td>
                    </tr>
                    <tr>
                      <td className="py-5 pl-6 pr-3 text-sm font-medium text-gray-900 dark:text-white sm:pl-8">Post scheduling</td>
                      <td className="px-3 py-5 text-sm text-center text-gray-500 dark:text-gray-400">
                        <div className="flex justify-center">
                          <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </td>
                      <td className="px-3 py-5 text-sm text-center text-gray-500 dark:text-gray-400 bg-blue-50 dark:bg-blue-900/20">
                        <div className="flex justify-center">
                          <svg className="h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </td>
                      <td className="px-3 py-5 text-sm text-center text-gray-500 dark:text-gray-400">
                        <div className="flex justify-center">
                          <svg className="h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-5 pl-6 pr-3 text-sm font-medium text-gray-900 dark:text-white sm:pl-8">Fake follower detection</td>
                      <td className="px-3 py-5 text-sm text-center text-gray-500 dark:text-gray-400">
                        <div className="flex justify-center">
                          <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </td>
                      <td className="px-3 py-5 text-sm text-center text-gray-500 dark:text-gray-400 bg-blue-50 dark:bg-blue-900/20">Basic</td>
                      <td className="px-3 py-5 text-sm text-center text-gray-500 dark:text-gray-400">Automatic</td>
                    </tr>
                    <tr>
                      <td className="py-5 pl-6 pr-3 text-sm font-medium text-gray-900 dark:text-white sm:pl-8">AI content suggestions</td>
                      <td className="px-3 py-5 text-sm text-center text-gray-500 dark:text-gray-400">Limited</td>
                      <td className="px-3 py-5 text-sm text-center text-gray-500 dark:text-gray-400 bg-blue-50 dark:bg-blue-900/20">Standard</td>
                      <td className="px-3 py-5 text-sm text-center text-gray-500 dark:text-gray-400">Advanced</td>
                    </tr>
                    <tr>
                      <td className="py-5 pl-6 pr-3 text-sm font-medium text-gray-900 dark:text-white sm:pl-8">Customer support</td>
                      <td className="px-3 py-5 text-sm text-center text-gray-500 dark:text-gray-400">Email</td>
                      <td className="px-3 py-5 text-sm text-center text-gray-500 dark:text-gray-400 bg-blue-50 dark:bg-blue-900/20">Priority</td>
                      <td className="px-3 py-5 text-sm text-center text-gray-500 dark:text-gray-400">24/7 Dedicated</td>
                    </tr>
                    <tr>
                      <td className="py-5 pl-6 pr-3 text-sm font-medium text-gray-900 dark:text-white sm:pl-8">Analytics reports</td>
                      <td className="px-3 py-5 text-sm text-center text-gray-500 dark:text-gray-400">Weekly</td>
                      <td className="px-3 py-5 text-sm text-center text-gray-500 dark:text-gray-400 bg-blue-50 dark:bg-blue-900/20">Daily</td>
                      <td className="px-3 py-5 text-sm text-center text-gray-500 dark:text-gray-400">Real-time</td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Need a custom solution? <a href="/contact" className="text-blue-600 dark:text-blue-400 font-medium">Contact our sales team</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}