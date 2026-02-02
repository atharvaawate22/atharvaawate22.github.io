'use client';

import {
  Navbar,
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Contact,
  Footer,
  ScrollAnimations,
  LoadingScreen,
} from '@/components';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollAnimations />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
