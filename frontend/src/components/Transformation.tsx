import { motion } from 'motion/react';
import { History, CheckCircle2, ChevronDown } from 'lucide-react';

export default function Transformation() {
  return (
    <section className="py-24 bg-surface-container-low px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">Structured Transformation</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">Witness the transition from ambiguous input to deterministic, high-performance execution.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/5 overflow-hidden rounded-2xl border border-black/5 shadow-sm">
          {/* Left: Simple Draft */}
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 flex flex-col"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Simple Draft</span>
              <History size={18} className="text-on-surface-variant/40" />
            </div>
            <div className="flex-grow font-mono text-sm text-on-surface-variant leading-relaxed">
              <p className="mb-4">"Write me a Python script to scrape a website and save it to a database."</p>
              <div className="h-px w-full bg-surface-container-low my-6"></div>
              <p className="opacity-40 italic">// Problems: Undefined structure, no error handling, ambiguous database choice.</p>
            </div>
          </motion.div>

          {/* Right: Structured Output */}
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 flex flex-col relative"
          >
            {/* Mobile Arrow */}
            <div className="md:hidden absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white p-2 rounded-full shadow-lg z-10">
              <ChevronDown size={16} />
            </div>

            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Structured Output</span>
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-primary uppercase tracking-wider">
                <CheckCircle2 size={14} />
                Chain of Thought Enabled
              </div>
            </div>
            <div className="flex-grow font-mono text-sm leading-relaxed">
              <p className="text-primary font-bold mb-2"># PROMPT CORE REFINEMENT</p>
              <p className="mb-2"><span className="text-primary/60 font-bold">ACT AS:</span> Senior Python Automation Engineer.</p>
              <p className="mb-2"><span className="text-primary/60 font-bold">TASK:</span> Generate a modular web scraper using BeautifulSoup4 and SQLAlchemy for SQLite.</p>
              <p className="mb-2"><span className="text-primary/60 font-bold">CONSTRAINTS:</span> Implement exponential backoff, rotating user-agents, and a schema-validated ingestion pipeline.</p>
              
              <div className="mt-6 p-4 bg-primary/5 border-l-2 border-primary text-primary/80 italic text-xs rounded-r-lg">
                // Strategy: Step-by-step reasoning applied to dependency management and error handling logic.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
