'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';
import { aboutData } from '@/config/data';

const features = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and well-documented code',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'Breaking down complex challenges into elegant solutions',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Optimizing applications for speed and efficiency',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively in teams with clear communication',
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-primary font-mono text-sm mb-4 block">{/* About Me */}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {aboutData.headline}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column - Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-dark-300 mb-6 leading-relaxed"
            >
              {aboutData.description}
            </motion.p>

            {aboutData.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={itemVariants}
                className="text-dark-400 mb-4 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8"
            >
              {aboutData.highlights.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-xl p-4 text-center card-hover"
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-dark-500 font-mono">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column - Feature cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, translateY: -5 }}
                className={`glass rounded-2xl p-6 card-hover ${
                  index % 2 === 1 ? 'mt-8' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-accent-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-dark-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
