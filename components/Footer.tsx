'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { siteConfig } from '@/config/data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-white/10">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950/50" />

      <div className="container-custom relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-semibold">{siteConfig.name}</span>
            </motion.a>
            <p className="text-sm text-dark-500 flex items-center gap-1">
              © {currentYear} Made with{' '}
              <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in India
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={`mailto:${siteConfig.email}`}
              className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-white/10 transition-colors text-sm"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
            Back to top
          </motion.button>
        </div>

        {/* Bottom text */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-dark-600 font-mono">
            Designed & Built by {siteConfig.name} using Next.js, TypeScript, Tailwind CSS, Framer Motion & Three.js
          </p>
        </div>
      </div>
    </footer>
  );
}
