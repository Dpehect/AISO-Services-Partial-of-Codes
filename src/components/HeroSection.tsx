'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6"
        >
          Pick the path that fits where you are
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          AI Search Optimization solutions designed for businesses serious about
          being recommended by AI assistants and search engines.
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-4 justify-center">
          <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold">
            Get Started
          </button>
          <button className="px-8 py-3 border border-gray-300 text-gray-900 rounded-lg hover:border-gray-400 transition-colors font-semibold">
            Learn More
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
