"use client";

import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function PricingCard({ tier, frequency, index }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className={`${
        tier.mostPopular
          ? 'ring-2 ring-blue-600 dark:ring-blue-400'
          : 'ring-1 ring-gray-200 dark:ring-gray-700'
      } rounded-3xl p-6 sm:p-8 bg-white dark:bg-gray-800/80 backdrop-blur-sm relative overflow-hidden h-full flex flex-col`}
    >
      {/* Decorative elements */}
      <div className="absolute -z-10 top-0 right-0 w-40 h-1 bg-blue-100 dark:bg-blue-900/30"></div>
      <div className="absolute -z-10 bottom-0 left-0 w-40 h-1 bg-blue-100 dark:bg-blue-900/30"></div>
      {tier.mostPopular && (
        <motion.div 
          className="absolute -z-10 -bottom-16 -right-16 w-40 h-40 rounded-full bg-blue-50 dark:bg-blue-900/20 opacity-50 blur-xl"
          animate={{ 
            rotate: 360,
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
      )}
      
      <h2
        className={`${
          tier.mostPopular ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-white'
        } text-2xl font-semibold leading-8`}
      >
        {tier.name}
      </h2>
      
      {tier.mostPopular && (
        <motion.p 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-4 flex items-baseline gap-x-1"
        >
          <span className="rounded-full bg-blue-600/10 dark:bg-blue-400/10 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-600 dark:text-blue-400">
            Most popular
          </span>
        </motion.p>
      )}
      
      <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">{tier.description}</p>
      
      <motion.p 
        className="mt-6 flex items-baseline gap-x-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{tier.price[frequency.value]}</span>
        <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-400">{frequency.priceSuffix}</span>
      </motion.p>
      
      <Link
        href={tier.href}
        className={`${
          tier.mostPopular
            ? 'bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-500 dark:hover:bg-blue-600'
            : 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 ring-1 ring-inset ring-blue-200 dark:ring-blue-800 hover:ring-blue-300 dark:hover:ring-blue-700'
        } mt-6 block rounded-xl py-3 px-4 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors duration-200`}
      >
        Choose this plan
      </Link>
      
      <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300 flex-grow">
        {tier.features.map((feature, featureIndex) => (
          <motion.li 
            key={feature} 
            className="flex gap-x-3 items-start"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + (featureIndex * 0.05), duration: 0.5 }}
          >
            <CheckIcon className="h-6 w-5 flex-none text-blue-600 dark:text-blue-400 mt-0.5" aria-hidden="true" />
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>
      
      {/* Additional decorative element */}
      {tier.mostPopular && (
        <div className="absolute top-0 right-0">
          <div className="w-16 h-16 overflow-hidden inline-block">
            <div className="h-2 w-2 bg-blue-600 dark:bg-blue-500 rotate-45 transform origin-bottom-left absolute top-0 right-0 shadow-lg"></div>
          </div>
        </div>
      )}
    </motion.div>
  );
}