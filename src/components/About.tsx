import { Terminal, Gauge, Pencil } from 'lucide-react';
import { Reveal } from './Reveal';
import directiveImg from '../assets/the-directive.jpg';

export function About() {
  return (
    <Reveal className="mb-32 md:mb-40" id="about">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div className="col-span-1 md:col-span-5 relative">
          <div className="absolute inset-0 bg-primary/15 blur-2xl rounded-full"></div>
          <div className="glass-panel rounded-2xl p-3 relative z-10 aspect-square overflow-hidden border border-outline-variant/30">
            <div className="w-full h-full bg-surface-container-high rounded-lg relative overflow-hidden group">
              <img 
                alt="The Directive" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-75 motion-transition" 
                src={directiveImg}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-6 md:col-start-7">
          <h2 className="text-headline-lg mb-6 flex items-center gap-3">
            <Terminal className="text-primary w-9 h-9" />
            The Directive
          </h2>
          <div className="space-y-5 text-body-md text-on-surface-variant">
            <p className="border-l-4 border-surface-tint pl-5 py-2 bg-gradient-to-r from-surface-tint/8 to-transparent rounded-r-lg">
              Driven by ambition, fueled by curiosity, and operating with a relentless startup mentality.
            </p>
            <p>
              I don't just write code; I architect solutions. My focus is on the intersection of robust backend engineering and immersive, high-fidelity user interfaces. Every project is an opportunity to push boundaries and build something that doesn't just work, but leaves a lasting impression.
            </p>
            <div className="flex gap-3 pt-2">
              <div className="glass-panel px-4 py-3 rounded-lg border border-outline-variant/50 flex items-center gap-3 flex-1">
                <Gauge className="text-secondary-fixed-dim w-5 h-5 flex-shrink-0" />
                <div className="min-w-0">
                  <div className="text-label-mono text-on-surface text-xs uppercase tracking-wider">Focus</div>
                  <div className="font-bold text-white text-sm">Performance</div>
                </div>
              </div>
              <div className="glass-panel px-4 py-3 rounded-lg border border-outline-variant/50 flex items-center gap-3 flex-1">
                <Pencil className="text-primary-container w-5 h-5 flex-shrink-0" />
                <div className="min-w-0">
                  <div className="text-label-mono text-on-surface text-xs uppercase tracking-wider">Focus</div>
                  <div className="font-bold text-white text-sm">Architecture</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
