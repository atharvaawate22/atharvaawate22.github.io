'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { experienceData } from '@/config/data';

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-dark-900/50"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl" />

      <div className="container-custom relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-primary font-mono text-sm mb-4 block">{/* Experience */}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My Journey
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto">
            A timeline of my professional experience and growth as a software developer
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-tertiary md:-translate-x-1/2" />

          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-accent-primary border-4 border-dark-950 md:-translate-x-1/2 -translate-x-1/2 z-10">
                <div className="absolute inset-0 rounded-full bg-accent-primary animate-ping opacity-20" />
              </div>

              {/* Content */}
              <div
                className={`flex-1 ml-8 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass rounded-2xl p-6 card-hover"
                >
                  {/* Header */}
                  <div className={`flex flex-col gap-2 mb-4 ${index % 2 === 0 ? 'md:items-end' : ''}`}>
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-accent-primary font-medium">
                      <Briefcase className="w-4 h-4" />
                      {item.company}
                    </div>
                    <div className={`flex flex-wrap gap-4 text-sm text-dark-400 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {item.description.map((desc, i) => (
                      <li
                        key={i}
                        className="text-sm text-dark-300 flex items-start gap-2"
                        style={{ flexDirection: index % 2 === 0 ? 'row-reverse' : 'row' }}
                      >
                        <span className="text-accent-primary mt-1.5">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {item.technologies.map((tech) => (
                      <span key={tech} className="tech-badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
