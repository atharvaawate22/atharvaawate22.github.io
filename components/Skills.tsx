'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Monitor, Server, Database, Wrench } from 'lucide-react';
import { skillsData } from '@/config/data';

const iconMap: { [key: string]: React.ElementType } = {
  Monitor,
  Server,
  Database,
  Wrench,
};

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState(0);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-dark-900/50"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-primary font-mono text-sm mb-4 block">{/* Technical Skills */}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Technologies I Work With
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies that I use to build
            robust, scalable applications
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skillsData.categories.map((category, index) => {
            const Icon = iconMap[category.icon];
            return (
              <motion.button
                key={category.name}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                  activeCategory === index
                    ? 'bg-gradient-to-r from-accent-primary to-accent-secondary text-white shadow-glow'
                    : 'glass text-dark-300 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {Icon && <Icon className="w-5 h-5" />}
                {category.name}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6"
          >
            {skillsData.categories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="glass rounded-xl p-6 card-hover"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                  <span className="text-accent-primary font-mono text-sm">
                    {skill.level}%
                  </span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: skill.level / 100 } : {}}
                    transition={{
                      duration: 1,
                      delay: index * 0.1,
                      ease: 'easeOut',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* All technologies showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-dark-500 text-sm mb-6">Full Technology Stack</p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skillsData.categories.flatMap((category) =>
              category.skills.map((skill) => (
                <motion.span
                  key={skill.name}
                  className="tech-badge"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill.name}
                </motion.span>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
