'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface Service {
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    title: 'Technical SEO & Indexing Fixes',
    description:
      'Ensure your content is properly indexed and crawlable by AI systems',
    icon: '🔧',
  },
  {
    title: 'Structured Data & Entity Graph Implementation',
    description:
      'Build semantic authority through proper schema markup and entity connections',
    icon: '📊',
  },
  {
    title: 'Content Systems',
    description:
      'Create pillars, FAQs, and "liftable blocks" optimized for AI extraction',
    icon: '📝',
  },
  {
    title: 'Digital PR for Citations & Authority Signals',
    description:
      'Generate press coverage and references that AI systems recognize and reuse',
    icon: '📢',
  },
];

export default function ImplementationSection() {
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Implementation Support
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            AISO is not a report. It requires implementation. We can ship changes with your
            team/agency, or implement directly when needed.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl border border-gray-200"
        >
          <p className="text-gray-600 text-center mb-4">
            Paid ads (SEM), full web design, and full rebuilds are available via partners
            when it makes sense—but they are not our core offer.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
