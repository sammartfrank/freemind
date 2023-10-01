'use client';

import { useState } from 'react';
import { MdPerson, MdGroup, MdHelp, MdMenu, MdClose } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const basePath = '/dashboard';

  const sidebarLinks = [
    { href: basePath + '/meetings', text: 'Therapist', icon: <MdPerson /> },
    { href: basePath + '/community', text: 'Community', icon: <MdGroup /> },
    { href: basePath + '/auto', text: 'Self Help', icon: <MdHelp /> },
  ];

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: '-100%' },
  };

  return (
    <div className='w-16 h-full'>
      <div className='p-4 space-y-6 h-full bg-zinc-300'>
        <button
          onClick={toggleSidebar}
          className='w-8 h-8 bg-gray-600 rounded-full hover:bg-gray-700 focus:outline-none flex items-center justify-center'
        >
          {isSidebarOpen ? <MdClose className='text-white' /> : <MdMenu className='text-white' />}
        </button>
        <div className='flex flex-col gap-5'>
          {sidebarLinks.map((link, index) => (
            <AnimatePresence key={index}>
              {isSidebarOpen && (
                <motion.div
                  key={link.href}
                  initial='closed'
                  animate='open'
                  exit='closed'
                  variants={variants}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className='flex items-center justify-center w-8 h-8 bg-gray-600 rounded-full text-white hover:bg-teal-500'
                  >
                    {link.icon}
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
      </div>
    </div>
  );
};
