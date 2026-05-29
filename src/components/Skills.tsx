import { Cpu, PenTool } from 'lucide-react';
import { Reveal } from './Reveal';

export function Skills() {
  return (
    <section className="mb-32 md:mb-40" id="skills">
      <Reveal className="mb-10 md:mb-12 border-b border-outline-variant/30 pb-5 md:pb-6">
        <p className="text-label-mono text-primary mb-2 uppercase tracking-widest">03 // Arsenal</p>
        <h2 className="text-display-xl text-left">Technical Matrix</h2>
      </Reveal>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        <Reveal>
          <h3 className="text-label-mono text-on-surface-variant mb-5 uppercase tracking-widest border-b border-surface-bright pb-2.5 flex items-center gap-2 text-xs">
            <Cpu size={15} /> Systems & Core
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {['AI', 'GameDev', 'Prompt Eng.', 'Python', 'C', 'HTML', 'CSS', 'JavaScript'].map((skill) => (
              <div key={skill} className="glass-panel px-3.5 py-2 border border-outline-variant rounded text-label-mono text-white hover:border-primary hover:text-primary hover:bg-primary/5 motion-transition cursor-default text-xs">
                {skill}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <h3 className="text-label-mono text-on-surface-variant mb-5 uppercase tracking-widest border-b border-surface-bright pb-2.5 flex items-center gap-2 text-xs">
            <PenTool size={15} /> Interface & Client
          </h3>
          <div className="flex flex-wrap gap-2.5">
            <div className="glass-panel px-3.5 py-2 border border-outline-variant rounded text-label-mono text-white hover:border-secondary-fixed-dim hover:text-secondary-fixed-dim hover:bg-secondary-fixed-dim/5 motion-transition cursor-default text-xs">
              Creative UI/UX
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
