'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-black">
            AISO Hub
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-black transition-colors"
            >
              Home
            </Link>
            <Link
              href="/solutions"
              className="text-gray-700 hover:text-black transition-colors font-semibold"
            >
              Solutions
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-black transition-colors"
            >
              Method
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-black transition-colors"
            >
              Insights
            </Link>
            <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 space-y-2"
          >
            <Link href="/" className="block text-gray-700 hover:text-black py-2">
              Home
            </Link>
            <Link href="/solutions" className="block text-gray-700 hover:text-black py-2 font-semibold">
              Solutions
            </Link>
            <Link href="#" className="block text-gray-700 hover:text-black py-2">
              Method
            </Link>
            <Link href="#" className="block text-gray-700 hover:text-black py-2">
              Insights
            </Link>
            <button className="w-full mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
              Contact
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
