"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

export default function Testimonials() {
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

  return (
    <section ref={ref} className="py-24 sm:py-32 relative overflow-hidden bg-[#f8fafc] dark:bg-[#0a0a0a]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#f8fafc] dark:bg-[#0a0a0a]"></div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-20 right-10 w-64 h-64 rounded-full border-4 border-blue-100 dark:border-blue-900 opacity-20"
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
          className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full border-2 border-purple-100 dark:border-purple-900 opacity-20"
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
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
            Real User Experiences
          </motion.span>
          
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            What Our Users Are Saying
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 mx-auto">
            Discover how Bestgram is transforming Instagram presence for creators worldwide
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <TestimonialCard
            avatar="/avatars/emma.jpg"
            name="Emma Wilson"
            role="Fashion Influencer"
            rating={5}
            text="With Bestgram, I identified inactive accounts and increased my engagement rate by 15% in just 2 months. The interface is intuitive and the analytics are precise."
            variants={itemVariants}
            accent="blue"
          />
          
          <TestimonialCard
            avatar="/avatars/alex.jpg"
            name="Alex Parker"
            role="Professional Photographer"
            rating={5}
            text="The hashtag generator is incredible! I'm getting a much wider reach on my posts since using this platform. My followers have increased by 30% in 3 months."
            variants={itemVariants}
            accent="purple"
          />
          
          <TestimonialCard
            avatar="/avatars/sarah.jpg"
            name="Sarah Johnson"
            role="Entrepreneur"
            rating={5}
            text="The post scheduler has saved me precious time. I can now schedule my posts a week in advance and focus on creating quality content that resonates with my audience."
            variants={itemVariants}
            accent="teal"
          />
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({ avatar, name, role, rating, text, variants, accent }) {
  const accentColors = {
    blue: "border-l-blue-500 dark:border-l-blue-600",
    purple: "border-l-purple-500 dark:border-l-purple-600",
    teal: "border-l-teal-500 dark:border-l-teal-600"
  };
  
  const borderColor = accentColors[accent] || accentColors.blue;
  
  return (
    <motion.div 
      className={`bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-l-4 ${borderColor} relative overflow-hidden`}
      variants={variants}
    >
      <div className="flex items-center mb-6">
        <div className="h-14 w-14 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden flex items-center justify-center text-2xl font-bold text-gray-500 dark:text-gray-300">
          {avatar ? (
            <div className="relative w-full h-full">
              <Image 
                src={avatar} 
                alt={name} 
                layout="fill" 
                objectFit="cover"
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            name.charAt(0)
          )}
        </div>
        <div className="ml-4">
          <h4 className="text-lg font-bold text-gray-900 dark:text-white">{name}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
          <div className="flex text-yellow-400 mt-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}>
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 relative z-10">
        "{text}"
      </p>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gray-100 dark:bg-gray-700/20 opacity-30 blur-md"
        animate={{ 
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }}
      ></motion.div>
      <div className="absolute top-0 right-0 w-20 h-1 bg-gray-200 dark:bg-gray-700"></div>
    </motion.div>
  );
}