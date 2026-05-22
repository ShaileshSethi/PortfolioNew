import { Cpu, PenTool } from 'lucide-react';
import { Reveal } from './Reveal';

export function Skills() {
  return (
    <section className="mb-40" id="skills">
      <Reveal className="mb-16 border-b border-outline-variant/30 pb-6 text-center md:text-left">
        <p className="text-label-mono text-primary mb-2 uppercase tracking-widest">03 // Arsenal</p>
        <h2 className="text-display-xl">Technical Matrix</h2>
      </Reveal>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Reveal>
          <h3 className="text-label-mono text-on-surface-variant mb-6 uppercase tracking-widest border-b border-surface-bright pb-2 flex items-center gap-2">
            <Cpu size={16} /> Systems & Core
          </h3>
          <div className="flex flex-wrap gap-3">
            <div className="glass-panel px-4 py-2 border border-outline-variant rounded text-label-mono text-white hover:border-primary hover:text-primary motion-transition cursor-default">AI</div>
            <div className="glass-panel px-4 py-2 border border-outline-variant rounded text-label-mono text-white hover:border-primary hover:text-primary motion-transition cursor-default">GameDev</div>
            <div className="glass-panel px-4 py-2 border border-outline-variant rounded text-label-mono text-white hover:border-primary hover:text-primary motion-transition cursor-default">Prompt Engineering</div>
            <div className="glass-panel px-4 py-2 border border-outline-variant rounded text-label-mono text-white hover:border-primary hover:text-primary motion-transition cursor-default">Python</div>
            <div className="glass-panel px-4 py-2 border border-outline-variant rounded text-label-mono text-white hover:border-primary hover:text-primary motion-transition cursor-default">C</div>
            <div className="glass-panel px-4 py-2 border border-outline-variant rounded text-label-mono text-white hover:border-primary hover:text-primary motion-transition cursor-default">HTML</div>
            <div className="glass-panel px-4 py-2 border border-outline-variant rounded text-label-mono text-white hover:border-primary hover:text-primary motion-transition cursor-default">CSS</div>
            <div className="glass-panel px-4 py-2 border border-outline-variant rounded text-label-mono text-white hover:border-primary hover:text-primary motion-transition cursor-default">JavaScript</div>
          </div>
        </Reveal>

        <Reveal>
          <h3 className="text-label-mono text-on-surface-variant mb-6 uppercase tracking-widest border-b border-surface-bright pb-2 flex items-center gap-2">
            <PenTool size={16} /> Interface & Client
          </h3>
          <div className="flex flex-wrap gap-3">
            <div className="glass-panel px-4 py-2 border border-outline-variant rounded text-label-mono text-white hover:border-secondary-fixed-dim hover:text-secondary-fixed-dim motion-transition cursor-default">Creative UI/UX</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
