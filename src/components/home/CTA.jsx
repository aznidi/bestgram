"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function CTA() {
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
    <section ref={ref} className="py-24 sm:py-32 bg-[#0a0a0a] dark:bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 rounded-full border-4 border-blue-900 opacity-10"
          animate={{ 
            rotate: 360,
          }}
          transition={{ 
            duration: 50, 
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-10 right-20 w-80 h-80 rounded-full border-4 border-blue-800 opacity-5"
          animate={{ 
            rotate: -360,
          }}
          transition={{ 
            duration: 70, 
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-blue-950/20 to-transparent opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-white"
            variants={itemVariants}
          >
            Ready to Elevate Your Instagram Presence?
          </motion.h2>
          
          <motion.p 
            className="mt-6 max-w-2xl mx-auto text-xl text-blue-100"
            variants={itemVariants}
          >
            Join thousands of users who have already transformed their Instagram presence with Bestgram.
          </motion.p>
          
          <motion.div 
            className="mt-12 flex flex-col sm:flex-row gap-6 justify-center"
            variants={itemVariants}
          >
            <Link
              href="/register"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-[#0a0a0a] bg-white shadow-lg"
            >
              Create Account
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 border border-white text-base font-medium rounded-xl text-white bg-transparent backdrop-blur-sm"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}