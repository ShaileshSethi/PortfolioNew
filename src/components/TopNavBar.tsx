import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function TopNavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-surface/50 backdrop-blur-xl text-primary fixed top-0 left-0 right-0 w-full z-50 border-b border-white/10 shadow-[0_2px_20px_rgba(0,0,0,0.1)] flex justify-between items-center px-4 md:px-12 h-16 md:h-20">
      <a href="#" className="text-headline-lg-mobile md:text-headline-lg font-bold tracking-tighter text-primary hover:opacity-80 transition-opacity">
        <img src="/src/assets/logo-ss.png" alt="Shailesh Sethi Portfolio" className="h-10 md:h-14 w-auto" />
      </a>
      <div className="hidden md:flex gap-6 md:gap-8 items-center">
        <a className="text-label-mono text-primary font-bold border-b-2 border-primary pb-0.5 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface rounded px-2 py-1" href="#work">Work</a>
        <a className="text-label-mono text-on-surface-variant hover:text-primary transition-all duration-300 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface rounded px-2 py-1" href="#achievements">Achievements</a>
        <a className="text-label-mono text-on-surface-variant hover:text-primary transition-all duration-300 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface rounded px-2 py-1" href="#skills">Skills</a>
        <a className="text-label-mono text-on-surface-variant hover:text-primary transition-all duration-300 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface rounded px-2 py-1" href="#contact">Contact</a>
      </div>
      <button className="hidden md:block px-5 md:px-6 py-2 md:py-2.5 bg-gradient-to-r from-primary-container to-secondary-container text-on-primary text-label-mono rounded hover:glow-primary hover:scale-105 motion-transition font-bold tracking-wide text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-primary">
        Let's Build
      </button>
      <button 
        className="md:hidden text-primary p-2 min-h-12 min-w-12 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary rounded"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-surface/95 backdrop-blur-xl border-b border-white/10 md:hidden">
          <div className="flex flex-col p-4 space-y-3">
            <a className="text-label-mono text-primary font-bold text-sm px-4 py-2 rounded hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary" href="#work" onClick={() => setMobileMenuOpen(false)}>Work</a>
            <a className="text-label-mono text-on-surface-variant hover:text-primary text-sm px-4 py-2 rounded hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary" href="#achievements" onClick={() => setMobileMenuOpen(false)}>Achievements</a>
            <a className="text-label-mono text-on-surface-variant hover:text-primary text-sm px-4 py-2 rounded hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary" href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a>
            <a className="text-label-mono text-on-surface-variant hover:text-primary text-sm px-4 py-2 rounded hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary" href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <button className="w-full px-5 py-3 bg-gradient-to-r from-primary-container to-secondary-container text-on-primary text-label-mono rounded font-bold tracking-wide text-sm focus:outline-none focus:ring-2 focus:ring-primary mt-2">
              Let's Build
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
