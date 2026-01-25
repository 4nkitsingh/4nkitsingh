import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Shield, Menu, X, Sparkles } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const navigate = useNavigate();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          const el = document.getElementById(targetId);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(targetId);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
      window.scrollTo(0, 0);
    }
  };

  // Updated Nav Links: Removed About, Skills, Projects
  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || location.pathname !== '/' ? 'py-4 bg-[#0b0f14]/60 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' : 'py-6 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-3 group">
          {/* Enhanced Liquid Glass 3D Icon */}
          <div className="relative w-11 h-11 rounded-xl flex items-center justify-center overflow-hidden transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] border border-white/10 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-[12px] group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.4),inset_0_0_10px_rgba(255,255,255,0.1)]">
             {/* Internal Shine/Reflection */}
             <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent opacity-60 rounded-t-xl" />
             <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-cyan-500/20 blur-xl rounded-full" />
             
             <Shield className="text-cyan-400 relative z-10 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" size={22} strokeWidth={2.5} />
          </div>
          
          <div className="flex flex-col">
            <span className="font-space-grotesk font-bold text-xl tracking-tight leading-none text-white group-hover:text-cyan-100 transition-colors">
              4nkitsingh
            </span>
            <span className="text-[10px] font-mono text-cyan-500/80 tracking-widest uppercase">
              Security
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2 bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-lg">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                (location.pathname === link.href) 
                ? 'text-black bg-white shadow-[0_0_15px_rgba(255,255,255,0.4)]' 
                : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <div className="w-px h-6 bg-white/10 mx-2" />

          {/* Hire Me Button - Liquid Glass 3D */}
          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="relative group px-6 py-2 rounded-full overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] active:scale-95"
          >
            {/* Glass Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay" />
            
            {/* Top Shine */}
            <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent opacity-100" />
            
            <div className="relative flex items-center gap-2 text-white font-bold text-sm tracking-wide z-10">
               <span>Hire Me</span>
               <Sparkles size={14} className="group-hover:rotate-12 transition-transform text-yellow-300" />
            </div>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-[#0b0f14]/95 backdrop-blur-xl border-b border-gray-800/50"
        >
          <div className="flex flex-col p-4 space-y-2">
             {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-300 hover:text-cyan-400 hover:bg-white/5 px-4 py-3 rounded-xl transition-all font-medium"
                >
                  {link.name}
                </a>
             ))}
             <a 
               href="#contact"
               onClick={(e) => handleNavClick(e, '#contact')}
               className="mt-2 text-center text-black bg-cyan-400 hover:bg-cyan-300 px-4 py-3 rounded-xl font-bold transition-all shadow-[0_0_15px_rgba(34,211,238,0.4)]"
             >
               Hire Me
             </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;