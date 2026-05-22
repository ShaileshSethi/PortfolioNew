import { Mail, Link as LinkIcon, Code, Send } from 'lucide-react';
import { Reveal } from './Reveal';

export function Contact() {
  return (
    <Reveal className="mb-20" id="contact">
      <div className="glass-panel rounded-3xl p-8 md:p-16 border border-primary/20 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-container rounded-full blur-[100px] opacity-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          <div>
            <h2 className="text-display-xl mb-4 tracking-tighter">Let's Build Something <span className="text-gradient-primary">Amazing.</span></h2>
            <p className="text-body-md text-on-surface-variant mb-8">Currently open for new opportunities, collaborations, and ambitious projects. Drop a message to initialize communication.</p>
            <div className="space-y-4 text-label-mono">
              <a className="flex items-center gap-4 text-on-surface hover:text-primary motion-transition" href="mailto:hello@shaileshsethi.dev">
                <Mail className="text-primary" size={20} /> hello@shaileshsethi.dev
              </a>
              <a className="flex items-center gap-4 text-on-surface hover:text-primary motion-transition" href="mailto:shaileshtunes@gmail.com">
                <Mail className="text-primary" size={20} /> shaileshtunes@gmail.com
              </a>
              <a className="flex items-center gap-4 text-on-surface hover:text-primary motion-transition" href="https://www.linkedin.com/in/shailesh-sethi-3aab58378/" target="_blank">
                <LinkIcon className="text-primary" size={20} /> linkedin.com/in/shailesh-sethi
              </a>
              <a className="flex items-center gap-4 text-on-surface hover:text-primary motion-transition" href="#">
                <Code className="text-primary" size={20} /> github.com/shaileshsethi
              </a>
            </div>
          </div>
          <div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-label-mono text-on-surface-variant mb-2 uppercase text-xs tracking-widest">Target Name</label>
                <input className="w-full bg-surface-container-high border-x-0 border-t-0 border-b border-outline-variant py-3 px-0 text-white text-label-mono focus:ring-0 input-glow transition-all duration-300 outline-none" placeholder="John Doe" type="text"/>
              </div>
              <div>
                <label className="block text-label-mono text-on-surface-variant mb-2 uppercase text-xs tracking-widest">Return Address (Email)</label>
                <input className="w-full bg-surface-container-high border-x-0 border-t-0 border-b border-outline-variant py-3 px-0 text-white text-label-mono focus:ring-0 input-glow transition-all duration-300 outline-none" placeholder="john@example.com" type="email"/>
              </div>
              <div>
                <label className="block text-label-mono text-on-surface-variant mb-2 uppercase text-xs tracking-widest">Transmission Payload</label>
                <textarea className="w-full bg-surface-container-high border-x-0 border-t-0 border-b border-outline-variant py-3 px-0 text-white text-label-mono focus:ring-0 input-glow transition-all duration-300 resize-none outline-none" placeholder="Enter your message sequence here..." rows={4}></textarea>
              </div>
              <button className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-on-primary text-label-mono font-bold rounded shadow-lg hover:glow-primary hover:scale-[1.02] motion-transition flex justify-center items-center gap-2" type="submit">
                Execute Transmission <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
