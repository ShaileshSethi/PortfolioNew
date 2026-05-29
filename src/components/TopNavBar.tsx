import { Menu } from 'lucide-react';
import logoSrc from '../assets/logo-ss.png';

export function TopNavBar() {
  return (
    <nav className="bg-surface/50 backdrop-blur-xl text-primary fixed top-0 left-0 right-0 w-full z-50 border-b border-white/10 shadow-[0_2px_20px_rgba(0,0,0,0.1)] flex justify-between items-center px-4 md:px-12 h-16 md:h-20">
      <a href="#" className="flex items-center shrink-0 hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">
        <img src={logoSrc} alt="Shailesh Sethi Portfolio" className="h-10 md:h-14 w-auto block" />
      </a>
      <div className="hidden md:flex gap-6 md:gap-8 items-center">
        <a className="text-label-mono text-primary font-bold border-b-2 border-primary pb-0.5 text-xs md:text-sm" href="#work">Work</a>
        <a className="text-label-mono text-on-surface-variant hover:text-primary transition-all duration-300 text-xs md:text-sm" href="#achievements">Achievements</a>
        <a className="text-label-mono text-on-surface-variant hover:text-primary transition-all duration-300 text-xs md:text-sm" href="#skills">Skills</a>
        <a className="text-label-mono text-on-surface-variant hover:text-primary transition-all duration-300 text-xs md:text-sm" href="#contact">Contact</a>
      </div>
      <button className="hidden md:block px-5 md:px-6 py-2 md:py-2.5 bg-gradient-to-r from-primary-container to-secondary-container text-on-primary text-label-mono rounded hover:glow-primary hover:scale-105 motion-transition font-bold tracking-wide text-xs md:text-sm">
        Let's Build
      </button>
      <button className="md:hidden text-primary p-1">
        <Menu size={24} />
      </button>
    </nav>
  );
}
