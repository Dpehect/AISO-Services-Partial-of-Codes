'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SEOAgencySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Looking for an SEO agency?
          </h2>
          <p className="text-xl text-gray-600">
            Read this first.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="bg-blue-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Most SEO agencies optimize for rankings.
            </h3>
            <p className="text-lg text-gray-700">
              We optimize for being recommended.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-xl font-bold text-gray-900">
              We do SEO, but we treat it as a distribution layer that supports AI inclusion:
            </h4>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span className="text-gray-700">
                  <strong>Technical indexing + canonical clarity</strong> so systems trust what to crawl
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span className="text-gray-700">
                  <strong>Content that answers the question</strong> in one scroll (and can be cited safely)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                <span className="text-gray-700">
                  <strong>Authority signals</strong> that assistants reuse (press, references, structured proof)
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 justify-center pt-8"
          >
            <Link
              href="#"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Explore SEO for AI Visibility
            </Link>
            <Link
              href="#"
              className="px-8 py-3 border border-gray-300 text-gray-900 rounded-lg hover:border-gray-400 transition-colors font-semibold"
            >
              Start with AISO Audit
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
