"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function Features() {
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
    <section ref={ref} className="py-24 sm:py-32 bg-gradient-to-br from-[#f8fafc] to-[#eef2ff] dark:from-[#0a0a0a] dark:to-[#111827] relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#f8fafc] dark:bg-[#0a0a0a] opacity-80"></div>
        
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gradient-to-r from-blue-300 to-purple-300 dark:from-blue-800 dark:to-purple-800 opacity-10 blur-xl"
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
          className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-gradient-to-r from-pink-300 to-orange-300 dark:from-pink-800 dark:to-orange-800 opacity-10 blur-xl"
          animate={{ 
            rotate: -360,
            scale: [1, 1.3, 1],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div 
          className="absolute top-1/3 left-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-green-300 to-teal-300 dark:from-green-800 dark:to-teal-800 opacity-10 blur-xl"
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Key Features
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 mx-auto">
            Everything you need to manage and grow your Instagram presence.
          </p>
        </motion.div>

        <motion.div 
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
              </svg>
            }
            title="Audience Analytics"
            description="Identify inactive followers, fake accounts and analyze your audience engagement metrics."
            variants={itemVariants}
            color="from-blue-500 to-indigo-500"
          />
          
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
              </svg>
            }
            title="Hashtag Generator"
            description="Find the most relevant hashtags to maximize the reach of your posts and stories."
            variants={itemVariants}
            color="from-purple-500 to-pink-500"
          />
          
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
            }
            title="Post Scheduler"
            description="Schedule your posts in advance to maintain a consistent presence on your feed."
            variants={itemVariants}
            color="from-green-500 to-teal-500"
          />
          
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            }
            title="Follower Management"
            description="Track who follows and unfollows you, and identify your most engaged fans."
            variants={itemVariants}
            color="from-amber-500 to-orange-500"
          />
          
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
              </svg>
            }
            title="Advanced Analytics"
            description="Visualize your account growth and post effectiveness over time with detailed metrics."
            variants={itemVariants}
            color="from-red-500 to-rose-500"
          />
          
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
            }
            title="Content Suggestions"
            description="Get content ideas based on trends and performance of your previous posts."
            variants={itemVariants}
            color="from-cyan-500 to-blue-500"
          />
        </motion.div>
        
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/features"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-white overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500"></span>
            <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 transition-opacity duration-300"></span>
            <span className="relative z-10 flex items-center">
              Explore All Features
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description, variants, color }) {
  return (
    <motion.div 
      className="group h-full bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden"
      variants={variants}
      whileHover={{ y: -5 }}
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 bg-gradient-to-r ${color}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-30 transition-all duration-500 blur-md"></div>
      <div className="absolute top-0 right-0 w-20 h-1 bg-gradient-to-r from-transparent to-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
    </motion.div>
  );
}