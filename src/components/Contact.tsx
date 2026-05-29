import { Mail, Link as LinkIcon, Code, Send } from "lucide-react";
import { Reveal } from "./Reveal";
import { useState } from "react";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = `Portfolio Contact from ${name || "Visitor"}`;
    const body = `Name: ${name || "N/A"}\nEmail: ${email || "N/A"}\n\nMessage:\n${message || "N/A"}`;
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=shaileshtunes@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailComposeUrl, "_blank");
  };

  return (
    <Reveal className="mb-20 md:mb-24" id="contact">
      <div className="glass-panel rounded-3xl p-6 md:p-12 border border-primary/20 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 md:-top-40 md:-right-40 w-80 h-80 md:w-96 md:h-96 bg-primary-container rounded-full blur-[80px] opacity-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 relative z-10">
          <div>
            <h2 className="text-display-xl mb-4 md:mb-5 tracking-tighter leading-tight">
              Let's Build Something{" "}
              <span className="text-gradient-primary">Amazing.</span>
            </h2>
            <p className="text-body-md text-on-surface-variant mb-8">
              Open for new opportunities, collaborations, and ambitious
              projects. Drop a message to initialize communication.
            </p>
            <div className="space-y-3 text-label-mono text-sm">
              <a
                className="flex items-center gap-3 text-on-surface hover:text-primary motion-transition group"
                href="mailto:shaileshtunes@gmail.com"
              >
                <Mail className="text-primary w-5 h-5 flex-shrink-0" />
                <span className="group-hover:underline">
                  shaileshtunes@gmail.com
                </span>
              </a>
              <a
                className="flex items-center gap-3 text-on-surface hover:text-primary motion-transition group"
                href="https://www.linkedin.com/in/shailesh-sethi-3aab58378/"
                target="_blank"
              >
                <LinkIcon className="text-primary w-5 h-5 flex-shrink-0" />
                <span className="group-hover:underline">
                  linkedin.com/in/shailesh-sethi
                </span>
              </a>
              <a
                className="flex items-center gap-3 text-on-surface hover:text-primary motion-transition group"
                href="#"
              >
                <Code className="text-primary w-5 h-5 flex-shrink-0" />
                <span className="group-hover:underline">
                  github.com/shaileshsethi
                </span>
              </a>
            </div>
          </div>
          <div>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-label-mono text-on-surface-variant mb-2 uppercase text-xs tracking-widest">
                  Name
                </label>
                <input
                  className="w-full bg-surface-container-high border-x-0 border-t-0 border-b border-outline-variant py-2.5 px-0 text-white text-body-md focus:ring-0 input-glow transition-all duration-300 outline-none"
                  placeholder="John Doe"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-label-mono text-on-surface-variant mb-2 uppercase text-xs tracking-widest">
                  Email
                </label>
                <input
                  className="w-full bg-surface-container-high border-x-0 border-t-0 border-b border-outline-variant py-2.5 px-0 text-white text-body-md focus:ring-0 input-glow transition-all duration-300 outline-none"
                  placeholder="john@example.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-label-mono text-on-surface-variant mb-2 uppercase text-xs tracking-widest">
                  Message
                </label>
                <textarea
                  className="w-full bg-surface-container-high border-x-0 border-t-0 border-b border-outline-variant py-2.5 px-0 text-white text-body-md focus:ring-0 input-glow transition-all duration-300 resize-none outline-none"
                  placeholder="Enter your message..."
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-on-primary text-label-mono font-bold rounded shadow-lg hover:glow-primary hover:scale-[1.01] motion-transition flex justify-center items-center gap-2 text-sm"
                type="submit"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
