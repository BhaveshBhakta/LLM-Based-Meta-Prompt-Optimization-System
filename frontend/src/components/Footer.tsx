import { Globe, Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface-container-low py-12 px-6 md:px-12 border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-lg font-bold text-on-surface uppercase tracking-[0.2em] mb-4">
            PromptOptimizer AI
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed max-w-xs">
              © 2026 PromptOptimizer AI. Architectural Precision in Prompt Engineering.
            </p>
          </div>

          <div className="flex gap-6">
            <Globe size={18} className="text-on-surface-variant hover:text-primary cursor-pointer transition-colors" />
            <Terminal size={18} className="text-on-surface-variant hover:text-primary cursor-pointer transition-colors" />
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[10px] uppercase tracking-widest text-on-surface-variant/40">
            Built with architectural precision
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-[10px] uppercase tracking-widest text-on-surface-variant/40 hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-on-surface-variant/40 hover:text-primary transition-colors">GitHub</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-on-surface-variant/40 hover:text-primary transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
