import { motion } from 'motion/react';

const steps = [
  {
    number: "01",
    title: "Ingestion",
    description: "Input your initial concept, goal, or technical requirement into our secure interface."
  },
  {
    number: "02",
    title: "Refinement",
    description: "Our engine applies linguistic engineering and logic structures to harden the intent."
  },
  {
    number: "03",
    title: "Deployment",
    description: "Export your production-ready prompt directly via API or structured file formats."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-32 bg-inverse-surface text-white px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/60 mb-6 block">Methodology</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tight">How It Works</h2>
            
            <div className="space-y-16">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex gap-8 group"
                >
                  <span className="text-4xl md:text-6xl font-extrabold opacity-10 group-hover:opacity-100 transition-opacity duration-500 font-headline">
                    {step.number}
                  </span>
                  <div>
                    <h4 className="text-2xl font-bold mb-3 italic">{step.title}</h4>
                    <p className="text-white/60 max-w-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/5 p-4 bg-white/5">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxR7CS9sSfnc2xY6Sd5-pfGcS4ibp4lsH6Zh49V9cRM-zpyOiacOsZCBqcVMt0-BxUVPEDPni3EphDMVfTDB-DnqGpUVzsR2jU4OjJMfVUtGBV4-FTCUA_-MmBSShdlQwPqdxqFpwmfc1uNEc9-2QODZpINToVMYWNEy4N4V30sH4TMhp8UG1l03CdecupunDzO6yNgm3dY-d51fhN8a_2LvUNKysw2jDNAnfLEUvZo_gzXprI9CUzO5x-6Agf9vGhlci3a5rLkxE" 
                alt="Technical schematic" 
                className="w-full h-full object-cover opacity-40 grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
