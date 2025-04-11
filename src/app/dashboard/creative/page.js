"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function CreativeDashboard() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Fictional data for statistics
  const [accountData] = useState({
    username: 'your_account',
    profile: '/profile-placeholder.jpg',
    followers: 5482,
    following: 722,
    posts: 152,
    engagement: 3.2,
    growth: 12.4,
    impressions: 18200,
    reachRate: 68,
    bestTime: '19:00'
  });

  // Recent posts data
  const [recentPosts] = useState([
    { id: 1, image: '/img/post1.jpg', likes: 432, comments: 56, date: '2 days ago' },
    { id: 2, image: '/img/post2.jpg', likes: 387, comments: 42, date: '4 days ago' },
    { id: 3, image: '/img/post3.jpg', likes: 521, comments: 78, date: '1 week ago' },
    { id: 4, image: '/img/post4.jpg', likes: 298, comments: 28, date: '1 week ago' }
  ]);

  // Follower trend data
  const [followerTrend] = useState([
    { day: 'Mon', value: 78 },
    { day: 'Tue', value: 62 },
    { day: 'Wed', value: 85 },
    { day: 'Thu', value: 90 },
    { day: 'Fri', value: 110 },
    { day: 'Sat', value: 132 },
    { day: 'Sun', value: 145 }
  ]);

  // Follower demographics
  const [followerDemographics] = useState([
    { name: '18-24', percentage: 35 },
    { name: '25-34', percentage: 40 },
    { name: '35-44', percentage: 15 },
    { name: '45+', percentage: 10 }
  ]);

  // Animation variants
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
    <div className="relative min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-10"
        >
          {/* Dashboard header */}
          <motion.div 
            variants={itemVariants}
            className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-xl"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center space-x-6">
                <div className="h-20 w-20 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center overflow-hidden">
                  <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                    {accountData.username.charAt(0).toUpperCase()}
                  </span>
                </div>
                
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome, @{accountData.username}</h1>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    Your Instagram presence continues to grow! {accountData.growth > 0 ? '🚀' : ''}
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center space-x-3"
              >
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">
                  New Post
                </button>
                <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-medium">
                  View Analytics
                </button>
              </motion.div>
            </div>
            
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <motion.div 
                variants={itemVariants}
                className="rounded-xl bg-blue-50 dark:bg-blue-900/30 p-4"
              >
                <div className="text-sm text-gray-500 dark:text-gray-400">Followers</div>
                <div className="mt-2 flex items-baseline">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">{accountData.followers.toLocaleString()}</span>
                  <span className="ml-2 text-sm font-medium text-green-600 dark:text-green-400">+{accountData.growth}%</span>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="rounded-xl bg-purple-50 dark:bg-purple-900/30 p-4"
              >
                <div className="text-sm text-gray-500 dark:text-gray-400">Engagement</div>
                <div className="mt-2 flex items-baseline">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">{accountData.engagement}%</span>
                  <span className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">of followers</span>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="rounded-xl bg-pink-50 dark:bg-pink-900/30 p-4"
              >
                <div className="text-sm text-gray-500 dark:text-gray-400">Posts</div>
                <div className="mt-2 flex items-baseline">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">{accountData.posts}</span>
                  <span className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">total</span>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="rounded-xl bg-indigo-50 dark:bg-indigo-900/30 p-4"
              >
                <div className="text-sm text-gray-500 dark:text-gray-400">Impressions</div>
                <div className="mt-2 flex items-baseline">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">{(accountData.impressions/1000).toFixed(1)}k</span>
                  <span className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">this week</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Quick actions */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <Link href="/dashboard/hashtags" className="group rounded-xl bg-white dark:bg-gray-800 p-6 shadow-lg border-l-4 border-blue-500">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Hashtag Generator</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Find the most relevant hashtags for your upcoming posts.</p>
                </div>
                <div className="text-blue-500 dark:text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                  </svg>
                </div>
              </div>
            </Link>
            
            <Link href="/dashboard/schedule" className="group rounded-xl bg-white dark:bg-gray-800 p-6 shadow-lg border-l-4 border-purple-500">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Post Scheduler</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Schedule your posts in advance to maximize your impact.</p>
                </div>
                <div className="text-purple-500 dark:text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </Link>
            
            <Link href="/dashboard/followers" className="group rounded-xl bg-white dark:bg-gray-800 p-6 shadow-lg border-l-4 border-pink-500">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Follower Analysis</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Identify inactive accounts and your most loyal fans.</p>
                </div>
                <div className="text-pink-500 dark:text-pink-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.div>
          
          {/* Main dashboard section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Growth chart */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-2 rounded-xl bg-white dark:bg-gray-800 p-6 shadow-lg"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white">Follower Growth</h2>
                <div className="inline-flex rounded-md shadow-sm">
                  <button className="rounded-l-md px-3 py-1 text-sm bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 font-medium">Week</button>
                  <button className="px-3 py-1 text-sm text-gray-500 dark:text-gray-400">Month</button>
                  <button className="rounded-r-md px-3 py-1 text-sm text-gray-500 dark:text-gray-400">Year</button>
                </div>
              </div>
              
              <div className="h-72 flex items-end space-x-2">
                {followerTrend.map((day, index) => (
                  <div key={day.day} className="flex-1 flex flex-col items-center group">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: `${day.value * 0.5}px` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="w-full rounded-t-lg bg-blue-500 dark:bg-blue-600 relative"
                    >
                      <div className="absolute -top-9 left-1/2 transform -translate-x-1/2 bg-blue-700 dark:bg-blue-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        +{day.value}
                      </div>
                    </motion.div>
                    <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">{day.day}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 text-sm font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  +{followerTrend.reduce((sum, day) => sum + day.value, 0)} new followers this week
                </div>
              </div>
            </motion.div>
            
            {/* Recent posts performance */}
            <motion.div 
              variants={itemVariants}
              className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-lg"
            >
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Top Posts</h2>
              <div className="space-y-4">
                {recentPosts.map((post, index) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                    key={post.id} 
                    className="flex items-center space-x-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50"
                  >
                    <div className="h-14 w-14 flex-shrink-0 bg-gray-200 dark:bg-gray-600 rounded-md flex items-center justify-center">
                      <span className="text-2xl">📷</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-800 dark:text-white truncate">
                        Post #{post.id}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {post.date}
                      </p>
                    </div>
                    <div className="flex space-x-3 text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        {post.likes}
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        {post.comments}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link href="/dashboard/posts" className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
                  View all posts →
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Demographics section */}
          <motion.div 
            variants={itemVariants}
            className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-lg"
          >
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Audience Demographics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">Age Distribution</h3>
                <div className="space-y-4">
                  {followerDemographics.map((demo) => (
                    <div key={demo.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{demo.name}</span>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{demo.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${demo.percentage}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="bg-blue-600 h-2 rounded-full"
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">Best Time to Post</h3>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Optimal posting time</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">{accountData.bestTime}</p>
                    </div>
                    <div className="h-16 w-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Posts at this time receive <span className="font-medium text-blue-600 dark:text-blue-400">32% more engagement</span> than average.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}