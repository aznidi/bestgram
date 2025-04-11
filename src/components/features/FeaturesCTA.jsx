"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

export default function FeaturesCTA() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section 
      ref={ref} 
      className="relative mt-24 py-16 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0a0a0a]"></div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-20 right-10 w-64 h-64 rounded-full border-4 border-blue-900 opacity-10"
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
          className="absolute bottom-20 left-10 w-40 h-40 rounded-full border-2 border-purple-900 opacity-10"
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
          className="absolute top-1/3 left-1/4 w-20 h-20 rounded-md border-2 border-blue-800 opacity-10"
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
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl font-bold tracking-tight text-white sm:text-5xl"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to Elevate Your Instagram Presence?
          </motion.h2>
          
          <motion.p 
            className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Start today with our free trial and experience the difference for yourself. Our platform provides everything you need to grow your Instagram account.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/dashboard"
              className="relative overflow-hidden rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 w-full sm:w-auto"
            >
              <span className="relative z-10">Start Free Trial</span>
            </Link>
            
            <Link 
              href="/pricing" 
              className="relative overflow-hidden rounded-xl border border-gray-700 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center">
                View Pricing
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Abstract shape at the bottom */}
        <motion.div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-blue-600 opacity-30"
          initial={{ width: 0 }}
          animate={inView ? { width: "80%" } : { width: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
      </div>
    </section>
  );
}