'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface Solution {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

const solutions: Solution[] = [
  {
    id: 'audit',
    title: 'AISO Audit',
    description:
      'Rapid assessment that prioritizes what to change for AI inclusion—without risking SEO.',
    icon: '📊',
    href: '#',
  },
  {
    id: 'foundation',
    title: 'AISO Foundation',
    description:
      'Entity-first architecture and schema governance for durable AI discoverability.',
    icon: '🏗️',
    href: '#',
  },
  {
    id: 'optimize',
    title: 'AISO Optimize',
    description:
      'Make key pages liftable by assistants and persuasive to humans—iteratively.',
    icon: '⚡',
    href: '#',
  },
  {
    id: 'monitor',
    title: 'AISO Monitor',
    description:
      'Ongoing tracking of inclusions by engine/query with monthly fixes and proof.',
    icon: '🔍',
    href: '#',
  },
];

export default function SolutionsGrid() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
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
            Our Solutions
          </h2>
          <p className="text-xl text-gray-600">
            A complete framework for AI search visibility
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {solutions.map((solution) => (
            <motion.div
              key={solution.id}
              variants={cardVariants}
              className="group p-8 rounded-xl border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{solution.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {solution.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {solution.description}
              </p>

              <Link
                href={solution.href}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group/link"
              >
                Know more
                <span className="ml-2 group-hover/link:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
