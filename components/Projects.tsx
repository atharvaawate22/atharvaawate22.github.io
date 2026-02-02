'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';
import { projectsData } from '@/config/data';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: string;
  github: string;
  demo: string;
  featured: boolean;
}

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative glass rounded-2xl overflow-hidden card-hover cursor-pointer"
      onClick={onClick}
    >
      {/* Image placeholder */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl font-bold text-white/10">{project.id}</span>
        </div>
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-mono rounded-full bg-accent-primary/20 text-accent-primary border border-accent-primary/30">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 group-hover:text-accent-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-dark-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="tech-badge text-xs">
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="tech-badge text-xs">+{project.tags.length - 4}</span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </div>
          <motion.span
            className="flex items-center gap-1 text-sm text-accent-primary font-medium"
            whileHover={{ x: 5 }}
          >
            View Details
            <ChevronRight className="w-4 h-4" />
          </motion.span>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/90 backdrop-blur-lg"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', bounce: 0.2 }}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-strong rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <motion.button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full glass hover:bg-white/20 transition-colors z-10"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </motion.button>

        {/* Header image */}
        <div className="h-48 sm:h-64 bg-gradient-to-br from-accent-primary/30 to-accent-secondary/30 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-8xl font-bold text-white/10">{project.id}</span>
          </div>
          <div className="absolute bottom-4 left-6">
            <span className="px-3 py-1 text-xs font-mono rounded-full bg-accent-primary/30 text-white border border-accent-primary/50">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">{project.title}</h2>
          
          <p className="text-dark-300 mb-6 leading-relaxed">
            {project.longDescription}
          </p>

          {/* Tech stack */}
          <div className="mb-8">
            <h3 className="text-sm font-mono text-dark-500 mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="tech-badge">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-5 h-5" />
              View Code
            </motion.a>
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(projectsData.map((p) => p.category)))];
  const filteredProjects =
    filter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-primary font-mono text-sm mb-4 block">{/* Featured Work */}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Projects I&apos;ve Built
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto mb-6">
            A selection of projects that showcase my skills in building
            full-stack applications with modern technologies
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
                filter === category
                  ? 'bg-gradient-to-r from-accent-primary to-accent-secondary text-white'
                  : 'glass text-dark-400 hover:text-white hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/atharva-awate"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent-primary hover:text-white transition-colors font-medium"
            whileHover={{ scale: 1.05 }}
          >
            <Github className="w-5 h-5" />
            View more on GitHub
            <ChevronRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
