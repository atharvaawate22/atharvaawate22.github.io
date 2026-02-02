'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollAnimations() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Wait for DOM to be ready
    const ctx = gsap.context(() => {
      // Fade in sections on scroll
      gsap.utils.toArray<HTMLElement>('section').forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0.8 },
          {
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'top 20%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Parallax effect for gradient orbs
      gsap.utils.toArray<HTMLElement>('.gradient-orb').forEach((orb) => {
        gsap.to(orb, {
          y: -100,
          ease: 'none',
          scrollTrigger: {
            trigger: orb.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });

      // Scale up effect for cards
      gsap.utils.toArray<HTMLElement>('.card-hover').forEach((card) => {
        gsap.fromTo(
          card,
          { scale: 0.95, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return null;
}
