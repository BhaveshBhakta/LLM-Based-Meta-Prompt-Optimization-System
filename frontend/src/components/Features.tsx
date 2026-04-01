import { motion } from 'motion/react';
import { Wand2, GitBranch, RotateCcw, BrainCircuit } from 'lucide-react';

const features = [
  {
    icon: Wand2,
    title: "Smart Transformation",
    description: "Automatically upgrades vague instructions into highly structured, context-rich commands."
  },
  {
    icon: GitBranch,
    title: "Dynamic Strategies",
    description: "Injects advanced logic frameworks like Chain of Thought and Few-Shot prompting dynamically."
  },
  {
    icon: RotateCcw,
    title: "Self-Improving Loop",
    description: "Analyzes AI outputs to iteratively refine prompt phrasing for maximum accuracy."
  },
  {
    icon: BrainCircuit,
    title: "Context Awareness",
    description: "Maintains multi-turn context awareness to ensure consistency across complex workflows."
  }
];

export default function Features() {
  return (
    <section className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4 block">Core Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
            Architectural precision for <br className="hidden md:block" /> modern prompt engineering.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/5 border-l border-black/5">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface p-8 hover:bg-surface-container-low transition-colors group cursor-default"
            >
              <div className="mb-8 text-primary group-hover:scale-110 transition-transform duration-300 origin-left">
                <feature.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
