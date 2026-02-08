'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl sm:text-7xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Be Recommended by AI
          </motion.h1>

          <motion.p
            className="text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Stop competing for search rankings. Start winning in AI recommendations.
            We help businesses get found by ChatGPT, Perplexity, and other AI systems.
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center flex-col sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link
              href="/solutions"
              className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold text-lg"
            >
              Explore Solutions
            </Link>
            <button className="px-8 py-4 border border-gray-300 text-gray-900 rounded-lg hover:border-gray-400 transition-colors font-semibold text-lg">
              Schedule Demo
            </button>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why AISO Hub?
            </h2>
            <p className="text-xl text-gray-600">
              The first AI Search Optimization agency
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: '🎯',
                title: 'AI-First Strategy',
                description:
                  'We optimize for AI visibility, not just search rankings. Fundamentally different approach.',
              },
              {
                icon: '📊',
                title: 'Proven Framework',
                description:
                  'Four-step proven methodology: Audit → Foundation → Optimize → Monitor',
              },
              {
                icon: '🚀',
                title: 'Implementation Support',
                description:
                  'We don\'t just give you reports. We help you implement and track results.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-8 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Win in AI Search?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start with an AISO Audit to understand your AI visibility baseline.
          </p>
          <Link
            href="/solutions"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
          >
            Explore All Solutions
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
