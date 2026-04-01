import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isOptimizePage = location.pathname === '/optimize';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-surface/80 backdrop-blur-md border-b border-black/5 h-16' : 'bg-transparent h-20'
      }`}
    >
      <div className="flex justify-between items-center h-full px-6 md:px-12 max-w-7xl mx-auto">
        <Link to="/" className="text-xl font-bold tracking-tighter text-on-surface">
        PromptOptimizer AI
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Product link removed as per request */}
        </nav>

        <div className="flex items-center gap-4">
          {isOptimizePage ? (
            <button 
              onClick={() => navigate('/')}
              className="hidden md:flex items-center gap-2 bg-surface-container-high hover:bg-surface-container-highest text-on-surface px-6 py-2.5 rounded-lg font-medium transition-all active:scale-95 border border-black/5"
            >
              <ArrowLeft size={18} />
              Back to Home
            </button>
          ) : (
            <button 
              onClick={() => navigate('/optimize')}
              className="hidden md:block bg-primary hover:bg-primary-dim text-white px-6 py-2.5 rounded-lg font-medium transition-all active:scale-95"
            >
              Get Started
            </button>
          )}
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-on-surface"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-surface border-b border-black/5 p-6 md:hidden flex flex-col gap-4 shadow-xl"
          >
            {isOptimizePage ? (
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate('/');
                }}
                className="w-full flex items-center justify-center gap-2 bg-surface-container-high text-on-surface py-3 rounded-lg font-medium mt-2 border border-black/5"
              >
                <ArrowLeft size={18} />
                Back to Home
              </button>
            ) : (
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate('/optimize');
                }}
                className="w-full bg-primary text-white py-3 rounded-lg font-medium mt-2"
              >
                Get Started
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
