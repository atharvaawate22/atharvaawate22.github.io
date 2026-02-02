'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ArrowDown, Download, Github, Linkedin, ExternalLink } from 'lucide-react';
import dynamic from 'next/dynamic';
import { siteConfig, roles } from '@/config/data';

// Dynamically import Three.js scene to avoid SSR issues
const HeroScene = dynamic(() => import('./three/HeroScene'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-radial from-accent-primary/10 to-transparent" />
  ),
});

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Role rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // GSAP animations on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title letters
      if (titleRef.current) {
        const letters = titleRef.current.querySelectorAll('.letter');
        gsap.fromTo(
          letters,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.2,
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Split name into letters for animation
  const nameLetters = siteConfig.name.split('').map((letter, index) => (
    <span
      key={index}
      className="letter inline-block"
      style={{ display: letter === ' ' ? 'inline' : 'inline-block' }}
    >
      {letter === ' ' ? '\u00A0' : letter}
    </span>
  ));

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="gradient-orb gradient-orb-1" aria-hidden="true" />
      <div className="gradient-orb gradient-orb-2" aria-hidden="true" />
      
      {/* Three.js Scene */}
      <HeroScene />

      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-accent-primary font-mono text-sm md:text-base mb-4"
        >
          Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <h1
          ref={titleRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-shadow-glow"
        >
          {nameLetters}
        </h1>

        {/* Animated Role */}
        <div className="h-12 md:h-16 mb-8 overflow-hidden">
          <motion.div
            key={currentRole}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-dark-300"
          >
            <span className="gradient-text font-medium">{roles[currentRole]}</span>
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-dark-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building scalable web applications with clean architecture and a passion for 
          solving complex problems through elegant code.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.button
            onClick={handleScrollToProjects}
            className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="w-5 h-5" />
            View Projects
          </motion.button>

          <motion.a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center gap-2 w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-4"
        >
          <motion.a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            aria-label="GitHub Profile"
          >
            <Github className="w-6 h-6" />
          </motion.a>

          <motion.a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="flex flex-col items-center gap-2 text-dark-500 hover:text-white transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          aria-label="Scroll to about section"
        >
          <span className="text-xs font-mono">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
}
