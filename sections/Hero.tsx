import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Shield, ChevronDown, Terminal, Lock, Cpu } from 'lucide-react';

// ScrambleText Component
const ScrambleText = ({ text, className = "", speed = 0.5 }: { text: string, className?: string, speed?: number }) => {
  const [display, setDisplay] = useState(text);
  const intervalRef = useRef<any>(null);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  useEffect(() => {
    let iteration = 0;
    const target = text;
    
    clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setDisplay(() => {
        return target.split("").map((letter, index) => {
          if (index < iteration) {
            return target[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("");
      });

      if (iteration >= target.length) {
        clearInterval(intervalRef.current);
        setDisplay(target);
      }
      
      iteration += speed; 
    }, 30);
    
    return () => clearInterval(intervalRef.current);
  }, [text, speed]);

  return <span className={className}>{display}</span>;
}

const Hero: React.FC = () => {
  const [isNameHovered, setIsNameHovered] = useState(false);
  const [isJobHovered, setIsJobHovered] = useState(false);

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
             <motion.div
               whileHover={{ 
                  scale: 1.05, 
                  rotate: [0, -3, 3, -3, 0],
                  boxShadow: "0 0 20px rgba(34,211,238,0.6)"
               }}
               transition={{ duration: 0.4 }}
               className="relative px-3 py-1 text-xs font-mono text-cyan-400 bg-cyan-950/30 border border-cyan-500/30 rounded-full flex items-center gap-2 cursor-pointer overflow-hidden group shadow-[0_0_0_rgba(6,182,212,0)] transition-shadow"
             >
               {/* Dynamic Lighting / Shimmer Effect on Hover */}
               <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent skew-x-12"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
               />
               
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500 group-hover:bg-cyan-300"></span>
               </span>
               <span className="relative z-10 font-bold group-hover:text-cyan-200 transition-colors">System Status: ONLINE</span>
             </motion.div>
          </div>
          
          <div 
            className="cursor-default w-fit"
            onMouseEnter={() => setIsNameHovered(true)}
            onMouseLeave={() => setIsNameHovered(false)}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight leading-tight">
              <ScrambleText text={isNameHovered ? "4nkit" : "ANKIT"} speed={0.4} />
              {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                <ScrambleText text={isNameHovered ? "singh" : "SINGH"} speed={0.4} />
              </span>
            </h1>
          </div>
          
          <div 
            className="w-fit cursor-default"
            onMouseEnter={() => setIsJobHovered(true)}
            onMouseLeave={() => setIsJobHovered(false)}
          >
             <h2 className="text-xl md:text-2xl text-gray-400 mb-6 font-light h-8 flex items-center">
                <ScrambleText 
                  text={isJobHovered ? "Currently Working in KPMG" : "Security Analyst | Penetration Tester"} 
                  className={isJobHovered ? "text-cyan-400 font-medium" : ""}
                  speed={0.8}
                />
             </h2>
          </div>
          
          <motion.p 
            className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed border-l-2 border-cyan-500/50 pl-4 cursor-default"
            whileHover={{ 
              color: "#cffafe", // cyan-100
              textShadow: "0 0 8px rgba(6,182,212,0.5)",
              borderColor: "#22d3ee", // cyan-400
              x: 5,
              backgroundColor: "rgba(6,182,212,0.05)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ borderRadius: "0 8px 8px 0" }}
          >
            Breaking systems to build resilient defenses. Specialized in identifying critical vulnerabilities across Web, API, and Mobile infrastructures.
          </motion.p>

          <div className="flex flex-wrap gap-4">
            <button 
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-3.5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 text-cyan-300 border border-cyan-500/50 rounded-lg font-medium transition-all duration-300 overflow-hidden hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:-translate-y-1"
            >
              <div className="absolute inset-0 w-1 bg-cyan-400 transition-all duration-300 ease-out group-hover:w-full opacity-10"></div>
              <span className="relative flex items-center gap-2">
                View Experience <Terminal size={18} />
              </span>
            </button>
            <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3.5 text-gray-300 hover:text-white border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-950/30 rounded-lg transition-all duration-300 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:-translate-y-1"
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
           <motion.div 
             className="relative w-[400px] h-[400px] flex items-center justify-center cursor-pointer group/image"
             whileHover={{ scale: 1.35 }}
             transition={{ type: "spring", stiffness: 260, damping: 20 }}
           >
              
              {/* Rotating Outer Rings */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-cyan-500/30 rounded-full border-dashed group-hover/image:border-cyan-400/60 transition-colors duration-300"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border border-purple-500/30 rounded-full border-dotted group-hover/image:border-purple-400/60 transition-colors duration-300"
              />
              
              {/* Main Photo Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-[0_0_50px_rgba(6,182,212,0.4)] z-10 group bg-black">
                 <img 
                   src="https://media.licdn.com/dms/image/v2/D4D03AQFXnFb2pffE_Q/profile-displayphoto-crop_800_800/B4DZsUj_w2HwAI-/0/1765576540690?e=1770854400&v=beta&t=vVNFpfS1OyacAdAmVKpics4Z8Yt7h1dFHQUdMiR6B7g" 
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

           </motion.div>
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