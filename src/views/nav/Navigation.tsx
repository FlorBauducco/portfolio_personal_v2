import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import { navigationData } from '../../data/navigation.data';

export const Navigation = ({
  activeSection,
  onNavigate,
}: {
  activeSection: string;
  onNavigate: (id: string) => void;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/40 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Profile Picture Logo */}
          <motion.button
            onClick={() => onNavigate('home')}
            className="relative w-12 h-12 rounded-full border-2 border-gradient-to-r from-indigo-400 to-purple-400 bg-linear-to-br from-indigo-500/20 to-purple-500/20 shrink-0 flex items-center justify-center overflow-hidden cursor-pointer" 
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Placeholder for profile picture */}
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.button>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-3">
            {navigationData.map((item) => {
              const Icon = Icons[item.icon as keyof typeof Icons] as React.ComponentType<
                React.SVGProps<SVGSVGElement>
              >;
              const isActive = activeSection === item.id;

              return (
                <motion.button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`relative p-2 rounded-lg transition-colors flex flex-col justify-center items-center gap-1 cursor-pointer ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={item.label}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-linear-to-r from-indigo-500/20 to-purple-500/20 rounded-lg"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon width={20} height={20} className="relative z-10" />
                  <span className='text-xs '>
                    {item.label}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <Icons.Menu size={24} />
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/10 bg-black/40 backdrop-blur-sm"
            >
              <div className="px-4 py-4 space-y-2">
                {navigationData.map((item) => {
                  const Icon = Icons[item.icon as keyof typeof Icons] as React.ComponentType<
                    React.SVGProps<SVGSVGElement>
                  >;
                  const isActive = activeSection === item.id;

                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => {
                        onNavigate(item.id);
                        setIsMobileOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        isActive
                          ? 'bg-linear-to-r from-indigo-500/20 to-purple-500/20 text-white'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon width={18} height={18} />
                      {item.label}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
