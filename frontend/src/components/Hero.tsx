import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-low rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Production Ready</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface mb-8 leading-[1.1]">
              From Raw Concept to <span className="text-primary italic">Production-Ready</span> Prompt
            </h1>
            
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
              A sophisticated AI-powered system designed for developers, researchers, and students to transform, refine, and optimize AI interactions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigate('/optimize')}
                className="bg-primary hover:bg-primary-dim text-white px-8 py-4 rounded-lg font-semibold text-base shadow-lg shadow-primary/20 transition-all active:scale-95"
              >
                Try for Free
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="aspect-square rounded-2xl bg-surface-container-low border border-black/5 flex items-center justify-center p-8 overflow-hidden group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_Zj-tBuGRMwaYXCAGO2xjwIUu91gwNHnqKVb5dJU64LvcQTNYmUogagL0Ouq2RqSld6uqc8hqmYbB7IQVWKMaRaEyuJ47taGCyXDaJxnpz99qahrxmD71IH1VhuteUr1VcpsCAQxx6cCJHlm_OVEwj8AqaofsykbyEuwT0RqdAaglQHIGcYQUUHnSpg_yWvk4R63y-E9rlsY0Y_wFNIR5g2c3gKOx8YcGWIn919VuhJlAdbQLZoc7Bs5l6w_O9P2UbkIcH9ZwpOo" 
                alt="Abstract architectural visualization" 
                className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
