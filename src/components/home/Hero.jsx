"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Tilt from 'react-parallax-tilt';
import CountUp from 'react-countup';

export default function Hero() {
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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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

  const statsVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    },
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28 min-h-screen flex items-center" ref={ref}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#f8fafc] dark:bg-[#0a0a0a]"></div>
        <div className="absolute top-0 left-0 right-0 h-[600px] bg-[#f1f5f9] dark:bg-[#111111] -skew-y-3 transform origin-top-right"></div>
        
        {/* Modern geometric shapes */}
        <motion.div 
          className="absolute top-20 right-10 w-64 h-64 rounded-full border-4 border-blue-100 dark:border-blue-900 opacity-20"
          animate={{ 
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          }}
        />
        
        <motion.div 
          className="absolute bottom-20 left-10 w-40 h-40 rounded-full border-2 border-purple-100 dark:border-purple-900 opacity-20"
          animate={{ 
            rotate: -360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          }}
        />
        
        <motion.div 
          className="absolute top-1/3 left-1/4 w-20 h-20 rounded-md border-2 border-blue-200 dark:border-blue-800 opacity-30"
          animate={{ 
            rotate: 45,
            y: [0, 20, 0],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="lg:col-span-6">
            <motion.span 
              className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 mb-6 backdrop-blur-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="mr-2 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-400 dark:bg-blue-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 dark:bg-blue-500"></span>
              </span>
              #1 Instagram Growth Platform
            </motion.span>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
              Elevate Your <span className="text-blue-600 dark:text-blue-400 relative">
                Instagram
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                ></motion.span>
              </span> Presence
            </h1>
            
            <motion.p 
              className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl"
              variants={itemVariants}
            >
              The all-in-one platform to manage, analyze and grow your Instagram account with advanced AI-powered tools.
            </motion.p>
            
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Link
                href="/pricing"
                className="group relative overflow-hidden inline-flex items-center justify-center px-6 py-3.5 border border-transparent text-base font-medium rounded-xl bg-blue-600 text-white shadow-lg transition-all duration-300"
              >
                <span className="relative z-10">View Pricing</span>
                <motion.span 
                  className="absolute inset-0 bg-blue-700 z-0"
                  initial={{ y: "100%" }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
              </Link>
              
              <Link
                href="/login"
                className="group relative overflow-hidden inline-flex items-center justify-center px-6 py-3.5 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-xl text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 shadow-lg transition-all duration-300"
              >
                <span className="relative z-10">Try For Free</span>
                <motion.span 
                  className="absolute inset-0 bg-gray-100 dark:bg-gray-700 z-0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
              </Link>
            </motion.div>
            
            <motion.div 
              className="mt-12 grid grid-cols-3 gap-4 sm:gap-8"
              variants={statsVariants}
            >
              <motion.div 
                className="relative overflow-hidden rounded-xl p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-100 dark:border-gray-800"
                whileInView={{ y: [20, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  {mounted && <CountUp end={98} suffix="%" duration={2.5} />}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Satisfaction Rate</div>
              </motion.div>
              
              <motion.div 
                className="relative overflow-hidden rounded-xl p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-100 dark:border-gray-800"
                whileInView={{ y: [20, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  {mounted && <CountUp end={10} suffix="M+" duration={2.5} />}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Accounts Managed</div>
              </motion.div>
              
              <motion.div 
                className="relative overflow-hidden rounded-xl p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-100 dark:border-gray-800"
                whileInView={{ y: [20, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  {mounted && <CountUp end={24} suffix="/7" duration={2.5} />}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Support</div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="lg:col-span-6 relative">
            <Tilt
              tiltMaxAngleX={3}
              tiltMaxAngleY={3}
              glareEnable={true}
              glareMaxOpacity={0.1}
              glareColor="#ffffff"
              glarePosition="all"
              glareBorderRadius="20px"
              tiltReverse={true}
              perspective={1000}
            >
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z" />
                        </svg>
                      </div>
                      <h3 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">Bestgram Analytics</h3>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  
                  <motion.div 
                    className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">B</div>
                      <div className="ml-3">
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">@bestgram_official</h4>
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                          <span className="flex items-center">
                            <motion.span 
                              className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            ></motion.span>
                            Active now
                          </span>
                        </div>
                      </div>
                      <div className="ml-auto">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          +24.8%
                        </span>
                      </div>
                    </div>
                    
                    <motion.div 
                      className="h-40 bg-white dark:bg-gray-800 rounded-lg p-3 mb-4 relative overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                    >
                      <div className="flex justify-between items-end h-full pb-2">
                        {[20, 30, 40, 60, 50, 70, 90, 75, 60, 80, 95, 65].map((height, index) => (
                          <motion.div 
                            key={index}
                            className={`w-1/12 bg-blue-500 dark:bg-blue-600 rounded-t-sm`}
                            style={{ height: `${height}%` }}
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{ 
                              duration: 1, 
                              delay: 0.8 + (index * 0.05),
                              ease: "easeOut"
                            }}
                          ></motion.div>
                        ))}
                      </div>
                    </motion.div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { value: "287", label: "Posts" },
                        { value: "24.5K", label: "Followers" },
                        { value: "892", label: "Following" }
                      ].map((stat, index) => (
                        <motion.div 
                          key={index}
                          className="bg-white dark:bg-gray-800 p-3 rounded-lg text-center"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.9 + (index * 0.1), duration: 0.5 }}
                        >
                          <div className="font-bold text-gray-900 dark:text-white">{stat.value}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </Tilt>
            
            <motion.div 
              className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 rounded-full border-4 border-dashed border-blue-200 dark:border-blue-900 opacity-30"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            ></motion.div>
            
            <motion.div 
              className="absolute -z-10 top-1/4 -left-10 w-20 h-20 rounded-full border-2 border-purple-200 dark:border-purple-900 opacity-30"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}