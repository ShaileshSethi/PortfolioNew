/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { Loader } from './components/Loader';
import { TopNavBar } from './components/TopNavBar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useMousePosition } from './hooks/useMousePosition';

export default function App() {
  const [loading, setLoading] = useState(true);
  const mousePosition = useMousePosition();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background text-on-background antialiased selection:bg-primary-container selection:text-on-primary-container relative w-full min-h-screen overflow-hidden">
      {loading && <Loader />}
      
      <div className="light-leak"></div>
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      <div className="bg-blob blob-3"></div>
      <div 
        className="mouse-glow" 
        style={{
          '--mouse-x': `${mousePosition.x}px`,
          '--mouse-y': `${mousePosition.y}px`,
        } as React.CSSProperties}
      ></div>

      <TopNavBar />
      
      <main className="max-w-[1280px] mx-auto px-4 md:px-12 pt-28 md:pt-32 pb-16 md:pb-24 relative z-10">
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
