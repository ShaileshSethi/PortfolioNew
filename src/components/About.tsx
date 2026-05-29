import { Terminal, Gauge, Pencil } from 'lucide-react';
import { Reveal } from './Reveal';

export function About() {
  return (
    <Reveal className="mb-40" id="about">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="col-span-1 md:col-span-5 relative">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
          <div className="glass-panel rounded-2xl p-4 relative z-10 aspect-square overflow-hidden border border-outline-variant/30">
            <div className="w-full h-full bg-surface-container-high rounded-xl relative overflow-hidden group">
              <img 
                alt="Developer Workspace" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 motion-transition mix-blend-luminosity" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIfuzWik0phIPYbQcX5zwf-bbovbWz3GK7oW5n87gKj58Cli4uGKDuyRycnVcmjHEZY7cLQgCyyaS4eSxr_tS2LzYFqReWh9jyJBHT7wK9TkZ_EpMc4ga057qppZmyQGMOaOEc55VJqBqqc8yTwvjeQm74_xet_nyyFELTov-8tpDYAs7OcxY6tLZ9i7gWF7-74_hRdbW2tzTKn1Q6_voGkYAitH2N8M_et5pvH0ObNzE0bA6VPZR75AEsOW69y5MM6WtNOqODkjuM" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-6 md:col-start-7">
          <h2 className="text-headline-lg mb-6 flex items-center gap-4">
            <Terminal className="text-primary w-10 h-10" />
            The Directive
          </h2>
          <div className="space-y-6 text-body-md text-on-surface-variant">
            <p className="border-l-4 border-surface-tint pl-6 py-2 bg-gradient-to-r from-surface-tint/10 to-transparent rounded-r-lg">
              Driven by ambition, fueled by curiosity, and operating with a relentless startup mentality.
            </p>
            <p>
              I don't just write code; I architect solutions. My focus is on the intersection of robust backend engineering and immersive, high-fidelity user interfaces. Every project is an opportunity to push boundaries and build something that doesn't just work, but leaves a lasting impression.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="glass-panel px-4 py-3 rounded-lg border border-outline-variant/50 flex items-center gap-3">
                <Gauge className="text-secondary-fixed-dim w-6 h-6" />
                <div>
                  <div className="text-label-mono text-on-surface text-xs uppercase tracking-wider">Focus</div>
                  <div className="font-bold text-white">Performance</div>
                </div>
              </div>
              <div className="glass-panel px-4 py-3 rounded-lg border border-outline-variant/50 flex items-center gap-3">
                <Pencil className="text-primary-container w-6 h-6" />
                <div>
                  <div className="text-label-mono text-on-surface text-xs uppercase tracking-wider">Focus</div>
                  <div className="font-bold text-white">Architecture</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
