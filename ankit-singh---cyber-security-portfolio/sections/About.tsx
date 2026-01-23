import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Smartphone, Crosshair, Zap, Shield } from 'lucide-react';
import CountUp from 'react-countup';

// Metric Card Component
const MetricCard = ({ icon: Icon, value, label, subLabel, delay, color }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, zIndex: 10 }}
      animate={{ y: [0, -5, 0] }}
      // Ambient floating animation
      className="relative group perspective-1000"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-2xl`} />
      
      <div className="relative h-full bg-[#11161d]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center overflow-hidden hover:border-cyan-500/30 transition-all duration-300 shadow-2xl">
        
        {/* HUD Corners */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/10 group-hover:border-cyan-500/50 transition-colors" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/10 group-hover:border-cyan-500/50 transition-colors" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/10 group-hover:border-cyan-500/50 transition-colors" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/10 group-hover:border-cyan-500/50 transition-colors" />
        
        <div className="mb-5 p-4 rounded-full bg-white/5 border border-white/5 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300">
           <Icon size={28} className="text-cyan-400" />
        </div>
        
        <h3 className="text-4xl md:text-5xl font-bold font-space-grotesk text-white mb-2 tracking-tighter drop-shadow-lg">
           <CountUp end={value} duration={3} suffix="+" enableScrollSpy scrollSpyOnce />
        </h3>
        
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent my-4 opacity-50 group-hover:opacity-100 transition-opacity" />
        
        <p className="text-gray-200 font-bold text-sm md:text-base mb-1">{label}</p>
        <p className="text-xs text-gray-500 font-mono uppercase tracking-widest group-hover:text-cyan-500 transition-colors">{subLabel}</p>
      </div>
    </motion.div>
  )
}

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-32 bg-[#080c11] overflow-hidden">
      {/* Ambient Background - Moving Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)]" />
         <motion.div 
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" 
         />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* SECTION 1: Mission Block (Holographic Manifesto) */}
        <div className="flex flex-col items-center justify-center mb-28">
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative max-w-5xl mx-auto w-full"
           >
              <div className="text-center mb-8">
                 <h2 className="text-xs font-mono text-cyan-500 mb-2 tracking-[0.5em] uppercase flex items-center justify-center gap-4">
                    <span className="w-8 h-px bg-cyan-500/50"></span>
                    Security Impact & Mission
                    <span className="w-8 h-px bg-cyan-500/50"></span>
                 </h2>
              </div>
              
              <div className="relative bg-[#0b0f14]/40 backdrop-blur-md border border-white/10 p-8 md:p-14 rounded-3xl shadow-2xl overflow-hidden group">
                 {/* Top Glowing Edge */}
                 <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
                 
                 {/* Bottom Glowing Edge */}
                 <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
                 
                 <div className="relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk text-white mb-10 leading-tight">
                      Mission: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400 animate-gradient">Total Security</span>
                    </h1>
                    
                    <div className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed font-light max-w-4xl mx-auto">
                       <p>
                         <span className="text-white font-semibold">I am a cybersecurity professional driven by an offensive mindset.</span>
                       </p>
                       
                       <motion.div 
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.2 }}
                         className="relative py-8"
                       >
                          <div className="absolute left-1/2 -translate-x-1/2 top-0 text-6xl text-cyan-500/20 font-serif">"</div>
                          <p className="text-2xl md:text-4xl font-bold text-white leading-tight">
                            You cannot defend what you <br className="hidden md:block"/> do not know how to break.
                          </p>
                          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-1 bg-cyan-500 rounded-full mt-8 shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
                       </motion.div>

                       <p className="text-base md:text-lg text-gray-400">
                          With deep hands-on experience across Web, API, Thick Client, and Android penetration testing, I operate beyond automated tools. I focus on logic flaws, authentication bypasses, privilege escalation paths, and chained exploitation techniques that reflect real-world attacker behavior.
                       </p>
                       
                       <p className="text-base md:text-lg text-gray-400">
                          Having identified over <span className="text-cyan-400 font-bold">100 high-severity vulnerabilities</span> for BFSI environments, my work bridges offensive discovery with practical remediation—ensuring systems are not just compliant, but resilient.
                       </p>
                    </div>
                 </div>
              </div>
           </motion.div>
        </div>

        {/* SECTION 2: Metrics Grid (3D Command Center) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32 perspective-1000">
           <MetricCard 
              icon={AlertTriangle} 
              value={100} 
              label="Vulnerabilities Identified" 
              subLabel="High-Severity"
              delay={0.1}
              color="from-red-500/20 to-orange-500/20"
           />
           <MetricCard 
              icon={Zap} 
              value={55} 
              label="API Security Issues" 
              subLabel="Critical Impact"
              delay={0.2}
              color="from-yellow-500/20 to-amber-500/20"
           />
           <MetricCard 
              icon={Smartphone} 
              value={25} 
              label="Mobile Vulnerabilities" 
              subLabel="Android Systems"
              delay={0.3}
              color="from-cyan-500/20 to-blue-500/20"
           />
           <MetricCard 
              icon={Crosshair} 
              value={173} 
              label="Machines Mastered" 
              subLabel="CTF & Exploitation"
              delay={0.4}
              color="from-purple-500/20 to-pink-500/20"
           />
        </div>

      </div>
    </section>
  );
};

export default About;