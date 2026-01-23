import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ChevronDown, Terminal, Lock, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] animate-pulse delay-1000" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left order-2 lg:order-1"
        >
          <div className="flex items-center gap-2 mb-4">
             <span className="px-3 py-1 text-xs font-mono text-cyan-400 bg-cyan-950/30 border border-cyan-500/30 rounded-full flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"/> 
               System Status: ONLINE
             </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight leading-tight">
            ANKIT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">SINGH</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-400 mb-6 font-light">
            Security Analyst | Penetration Tester
          </h2>
          
          <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed border-l-2 border-cyan-500/50 pl-4">
            Breaking systems to build resilient defenses. Specialized in identifying critical vulnerabilities across Web, API, and Mobile infrastructures.
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-3 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 rounded-sm font-medium transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 w-1 bg-cyan-400 transition-all duration-300 ease-out group-hover:w-full opacity-10"></div>
              <span className="relative flex items-center gap-2">
                View Experience <Terminal size={18} />
              </span>
            </button>
            <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 text-gray-300 hover:text-white border border-transparent hover:border-white/20 rounded-sm transition-all duration-300"
            >
              Contact Me
            </button>
          </div>
        </motion.div>

        {/* Visual Content - Photo with Cyber Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex items-center justify-center order-1 lg:order-2"
        >
           <div className="relative w-[400px] h-[400px] flex items-center justify-center">
              
              {/* Rotating Outer Rings */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-cyan-500/30 rounded-full border-dashed"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border border-purple-500/30 rounded-full border-dotted"
              />
              
              {/* Main Photo Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-[0_0_50px_rgba(6,182,212,0.4)] z-10 group">
                 {/* 
                    REPLACE THE SRC BELOW WITH YOUR ACTUAL PHOTO PATH 
                    Example: src="/ankit-photo.jpg" 
                 */}
                 <img 
                   src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80" 
                   alt="Ankit Singh" 
                   className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                 />
                 
                 {/* Cyber Overlay/Scan Effect */}
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent animate-scan pointer-events-none" />
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
              </div>

              {/* Orbiting Elements */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 bg-[#0b0f14] border border-cyan-500 text-cyan-400 p-2 rounded-lg shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                   <Lock size={16} />
                </div>
              </motion.div>

              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute w-[80%] h-[80%]"
              >
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 bg-[#0b0f14] border border-purple-500 text-purple-400 p-2 rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                   <Cpu size={16} />
                </div>
              </motion.div>

           </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;