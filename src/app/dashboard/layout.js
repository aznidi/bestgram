"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-[#f8fafc] dark:bg-[#0a0a0a] relative overflow-hidden">
   

      {/* Mobile sidebar toggle */}
      <div className="fixed top-4 left-4 z-40 md:hidden">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700"
        >
          {sidebarOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Sidebar */}
      <motion.div 
        className={`${sidebarOpen ? 'fixed inset-y-0 left-0 z-30 md:relative md:translate-x-0' : '-translate-x-full md:translate-x-0 md:w-20'} transition-all duration-300 ease-in-out flex flex-col flex-shrink-0 md:flex`}
        initial={{ x: -280 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className={`flex flex-col ${sidebarOpen ? 'w-72' : 'w-20'} h-full transition-all duration-300`}>
          <div className="flex flex-col h-full border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 backdrop-blur-sm shadow-xl">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className={`flex items-center ${sidebarOpen ? 'justify-between' : 'justify-center'} px-4`}>
                {sidebarOpen ? (
                  <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">Bestgram</Link>
                ) : (
                  <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">B</Link>
                )}
                <button 
                  onClick={toggleSidebar}
                  className="hidden md:block p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {sidebarOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                  )}
                </button>
              </div>
              <nav className="mt-8 flex-1 px-2 space-y-1">
                <Link href="/dashboard/creative" className="group flex items-center px-2 py-2 text-sm font-medium rounded-xl text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`${sidebarOpen ? 'mr-3' : 'mx-auto'} h-6 w-6 text-blue-500 dark:text-blue-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                  {sidebarOpen && <span>Dashboard</span>}
                </Link>

                <Link href="/dashboard/hashtags" className="group flex items-center px-2 py-2 text-sm font-medium rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`${sidebarOpen ? 'mr-3' : 'mx-auto'} h-6 w-6 text-gray-400 dark:text-gray-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                  </svg>
                  {sidebarOpen && <span>Hashtag Generator</span>}
                </Link>

                <Link href="/dashboard/schedule" className="group flex items-center px-2 py-2 text-sm font-medium rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`${sidebarOpen ? 'mr-3' : 'mx-auto'} h-6 w-6 text-gray-400 dark:text-gray-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {sidebarOpen && <span>Content Scheduler</span>}
                </Link>

                <Link href="/dashboard/followers" className="group flex items-center px-2 py-2 text-sm font-medium rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`${sidebarOpen ? 'mr-3' : 'mx-auto'} h-6 w-6 text-gray-400 dark:text-gray-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {sidebarOpen && <span>Follower Analytics</span>}
                </Link>

                {sidebarOpen && (
                  <div className="pt-8">
                    <h3 className="px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Settings
                    </h3>
                    <div className="mt-1 space-y-1">
                      <Link href="/dashboard/settings" className="group flex items-center px-2 py-2 text-sm font-medium rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-6 w-6 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Account Settings
                      </Link>
                      <Link href="/" className="group flex items-center px-2 py-2 text-sm font-medium rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-6 w-6 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Back to Website
                      </Link>
                    </div>
                  </div>
                )}
              </nav>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className=""
              >
                {children}
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}