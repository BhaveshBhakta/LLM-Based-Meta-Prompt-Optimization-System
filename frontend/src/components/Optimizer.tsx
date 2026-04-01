import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Copy, Check, ArrowRight, User, FileText, Loader2 } from 'lucide-react';

export default function Optimizer() {
  const [role, setRole] = useState('student');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [optimizedPrompt, setOptimizedPrompt] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleGenerate = async () => {
    if (!description.trim()) return;
    
    setIsLoading(true);
    setOptimizedPrompt(null);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/webhook/prompt-optimize`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          role: role,
          description: description
        })
      });

      if (!response.ok) throw new Error('Failed to generate prompt');
      
      const data = await response.json();
      if (data.optimized_prompt) {
        setOptimizedPrompt(data.optimized_prompt);
        setIsLoading(false);
      } else {
        setOptimizedPrompt("Error: Invalid response from server");
      }
    } catch (error) {
      console.error("Error generating prompt:", error);
      setOptimizedPrompt("Error: Unable to connect to server. Please try again.");
      setIsLoading(false);
    }
  };

  const copyPrompt = () => {
    if (optimizedPrompt) {
      navigator.clipboard.writeText(optimizedPrompt);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 min-h-screen bg-surface">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-4">
            <Sparkles size={14} className="text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary font-label">AI Powered</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-4">
            Prompt Optimization System
          </h1>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            Transform your basic ideas into high-performance prompts using our architectural refinement engine.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Input Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm space-y-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  <User size={14} />
                  Target Role
                </label>
                <select 
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary transition-all cursor-pointer"
                >
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                  <option value="developer">Developer</option>
                  <option value="architect">Architect</option>
                  <option value="researcher">Researcher</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  <FileText size={14} />
                  Task Description
                </label>
                <textarea 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter your task or concept here..."
                  className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary transition-all min-h-[160px] resize-none"
                />
              </div>

              <button 
                onClick={handleGenerate}
                disabled={isLoading || !description.trim()}
                className="w-full bg-primary hover:bg-primary-dim disabled:opacity-50 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Refining...
                  </>
                ) : (
                  <>
                    Generate Optimized Prompt
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Output Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <label className="text-xs font-bold uppercase tracking-widest text-primary">
                  Optimized Result
                </label>
                {optimizedPrompt && (
                  <button 
                    onClick={copyPrompt}
                    className="flex items-center gap-2 text-xs font-bold text-on-surface-variant hover:text-primary transition-colors"
                  >
                    {isCopied ? (
                      <>
                        <Check size={14} className="text-green-500" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        Copy Prompt
                      </>
                    )}
                  </button>
                )}
              </div>

              <div className="flex-grow bg-surface-container-low rounded-xl p-6 font-mono text-sm leading-relaxed relative overflow-hidden min-h-[300px]">
                <AnimatePresence mode="wait">
                  {isLoading ? (
                    <motion.div 
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex flex-col items-center justify-center text-on-surface-variant/40 gap-4"
                    >
                      <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                      <p className="text-xs font-bold uppercase tracking-widest">Architecting Prompt...</p>
                    </motion.div>
                  ) : optimizedPrompt ? (
                    <motion.div 
                      key="result"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="whitespace-pre-wrap text-on-surface"
                    >
                      {optimizedPrompt}
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="placeholder"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 flex flex-col items-center justify-center text-on-surface-variant/20 text-center p-12"
                    >
                      <Sparkles size={48} className="mb-4" />
                      <p className="text-sm font-medium">Your optimized prompt will appear here after generation.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
