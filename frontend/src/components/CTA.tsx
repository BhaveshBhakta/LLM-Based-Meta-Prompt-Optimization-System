import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section className="py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-10 leading-tight">
            Ready to engineer <br /> the future?
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => navigate('/optimize')}
              className="bg-primary hover:bg-primary-dim text-white px-10 py-5 rounded-lg font-bold text-lg shadow-xl shadow-primary/20 transition-all active:scale-95"
            >
              Create Your First Prompt
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
