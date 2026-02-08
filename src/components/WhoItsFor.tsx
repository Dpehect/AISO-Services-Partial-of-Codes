'use client';

import { motion } from 'framer-motion';

interface Feature {
  icon: string;
  text: string;
}

const forFeatures: Feature[] = [
  {
    icon: '✓',
    text: 'Already invest in content/SEO but still don\'t get mentioned',
  },
  {
    icon: '✓',
    text: 'Have strong product/service pages that aren\'t "liftable" by assistants',
  },
  {
    icon: '✓',
    text: 'Need a clear plan + implementation, not theory',
  },
];

const notForFeatures: Feature[] = [
  {
    icon: '✕',
    text: 'A generic "SEO package"',
  },
  {
    icon: '✕',
    text: 'A one-time blog spam sprint',
  },
  {
    icon: '✕',
    text: 'Shortcuts that risk your rankings',
  },
];

export default function WhoItsFor() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
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
            Who AISO Hub is for (and who it's not)
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* For */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-green-600 mb-8">
              AISO Hub is for teams who:
            </h3>
            {forFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-4"
              >
                <span className="text-2xl font-bold text-green-600 flex-shrink-0">
                  {feature.icon}
                </span>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Not For */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-red-600 mb-8">
              AISO Hub is not for teams looking for:
            </h3>
            {notForFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-4"
              >
                <span className="text-2xl font-bold text-red-600 flex-shrink-0">
                  {feature.icon}
                </span>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
