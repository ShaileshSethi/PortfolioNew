import { Menu } from 'lucide-react';

export function TopNavBar() {
  return (
    <nav className="bg-surface/60 backdrop-blur-2xl text-primary fixed top-0 w-full z-50 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] flex justify-between items-center px-4 md:px-16 h-20 max-w-[1280px] mx-auto transition-all duration-400">
      <div className="text-headline-lg font-bold tracking-tighter text-primary">
        SS
      </div>
      <div className="hidden md:flex gap-8">
        <a className="text-label-mono text-primary font-bold border-b-2 border-primary pb-1" href="#work">Work</a>
        <a className="text-label-mono text-on-surface-variant hover:text-primary transition-all duration-400" href="#achievements">Achievements</a>
        <a className="text-label-mono text-on-surface-variant hover:text-primary transition-all duration-400" href="#skills">Skills</a>
        <a className="text-label-mono text-on-surface-variant hover:text-primary transition-all duration-400" href="#contact">Contact</a>
      </div>
      <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-primary-container to-secondary-container text-on-primary text-label-mono rounded hover:glow-primary hover:scale-105 motion-transition font-bold tracking-wide">
        Let's Build
      </button>
      <button className="md:hidden text-primary">
        <Menu />
      </button>
    </nav>
  );
}
