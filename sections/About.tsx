import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Smartphone, Crosshair, Zap, FileText, Quote, Target } from 'lucide-react';
import CountUp from 'react-countup';

// Metric Card Component
const MetricCard = ({ icon: Icon, value, label, subLabel, delay, color, details, accentColor }: any) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-full h-[320px] perspective-1000 group cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="w-full h-full relative"
      >
        <motion.div
            className="w-full h-full relative"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            style={{ transformStyle: 'preserve-3d' }}
        >
            {/* FRONT FACE */}
            <div className="absolute inset-0 backface-hidden bg-[#11161d]/90 backdrop-blur-xl border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center overflow-hidden shadow-2xl z-20"
                 style={{ backfaceVisibility: 'hidden' }}>
                 
                {/* Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
    
                {/* HUD Corners */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/10 group-hover:border-white/30 transition-colors" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/10 group-hover:border-white/30 transition-colors" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/10 group-hover:border-white/30 transition-colors" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/10 group-hover:border-white/30 transition-colors" />
                
                <div className={`mb-6 p-4 rounded-full bg-white/5 border border-white/5 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all duration-300 ${accentColor.replace('border-', 'text-').replace('/50', '')}`}>
                   <Icon size={32} />
                </div>
                
                <h3 className="text-5xl font-bold font-space-grotesk text-white mb-2 tracking-tighter drop-shadow-lg">
                   <CountUp end={value} duration={2.5} suffix="+" enableScrollSpy scrollSpyOnce />
                </h3>
                
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent my-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                
                <p className="text-gray-200 font-bold text-base mb-1">{label}</p>
                <p className="text-xs text-gray-500 font-mono uppercase tracking-widest group-hover:text-white transition-colors">{subLabel}</p>
                
                <div className={`absolute bottom-4 text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 ${accentColor.replace('border-', 'text-').replace('/50', '')}`}>
                    // ACCESS_INTEL <FileText size={10} />
                </div>
            </div>
    
            {/* BACK FACE */}
            <div 
                className={`absolute inset-0 bg-[#05070a] border-2 ${accentColor} rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden`}
                style={{ 
                    transform: 'rotateY(180deg)', 
                    backfaceVisibility: 'hidden' 
                }}
            >
                 {/* Strong Gradient Background */}
                 <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20`} />
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-40 mix-blend-overlay" />
                 
                 {/* Animated Scan Line */}
                 <div className="absolute top-0 left-0 w-full h-1 bg-white/20 shadow-[0_0_10px_rgba(255,255,255,0.5)] animate-scan opacity-50" />

                 <div className="relative z-10 w-full">
                     <div className={`w-12 h-12 mx-auto bg-white/5 rounded-xl flex items-center justify-center mb-5 border ${accentColor} shadow-[0_0_20px_rgba(0,0,0,0.5)]`}>
                         <Crosshair size={24} className="text-white" />
                     </div>
                     
                     <h4 className="text-sm font-bold text-white mb-4 font-mono uppercase tracking-widest border-b border-white/10 pb-3">
                         // EXECUTION_VECTOR
                     </h4>
                     
                     <p className="text-gray-300 text-sm leading-relaxed font-medium">
                        {details}
                     </p>
                 </div>
                 
                 {/* Corner Accents - Solid Color */}
                 <div className={`absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 ${accentColor.replace('/50', '')}`} />
                 <div className={`absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 ${accentColor.replace('/50', '')}`} />
            </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

// Interactive Target Component (Replaces the 3D Object)
const InteractiveTarget = ({ onHover, onLeave }: { onHover: () => void, onLeave: () => void }) => {
  return (
    <motion.div 
      className="relative cursor-pointer group"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
        {/* Outer Glow Ring */}
        <div className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Main Target Body */}
        <div className="relative w-24 h-24 bg-[#0b0f14] border border-cyan-500/50 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.2)] overflow-hidden">
            {/* Spinning gradient background */}
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(34,211,238,0.3)_180deg,transparent_360deg)] opacity-50"
            />
            
            {/* Inner Circle */}
            <div className="absolute inset-1 bg-[#0b0f14] rounded-full flex items-center justify-center z-10">
                <Target size={40} className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
            </div>
            
            {/* Crosshair lines */}
            <div className="absolute inset-0 z-20 opacity-30">
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-cyan-500" />
                <div className="absolute left-1/2 top-0 h-full w-[1px] bg-cyan-500" />
            </div>
        </div>
    </motion.div>
  )
}

// Enhanced Typewriter Component
const TypewriterText = ({ text, className, speed = 0.05, hoverEffect = false }: { text: string, className?: string, speed?: number, hoverEffect?: boolean }) => {
  const characters = text.split("");
  
  return (
    <motion.div
      className={`${className} inline-block`}
      initial="hidden"
      whileInView="visible"
      whileHover={hoverEffect ? "hover" : undefined}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
    >
      {characters.map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
                opacity: 1, 
                transition: { delay: i * speed } 
            },
            hover: {
                color: "#22d3ee", // cyan-400
                textShadow: "0 0 15px rgba(34,211,238,0.8)",
                transition: { duration: 0.2, delay: 0 } // Immediate reaction on hover
            }
          }}
          className="inline-block whitespace-pre"
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

const About: React.FC = () => {
  const [isTargetHovered, setIsTargetHovered] = useState(false);

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
        
        {/* SECTION 1: Mission Block */}
        <div className="flex flex-col items-center justify-center mb-32">
           <motion.div 
             initial={{ opacity: 0, scale: 0.98 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative max-w-5xl mx-auto w-full"
           >
              {/* Minimal Glass Container */}
              <div className="relative bg-[#0b0f14]/40 backdrop-blur-2xl border border-cyan-500/20 p-10 md:p-16 rounded-[2.5rem] shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)] overflow-hidden">
                 
                 {/* Subtle Top Gradient Line */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                 
                 <div className="flex flex-col items-center text-center relative z-10">
                    
                    {/* Mission Header Row with Interactive Target */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-14">
                        <h1 className="text-5xl md:text-7xl font-bold text-white font-space-grotesk tracking-tight drop-shadow-sm">
                          Mission:
                        </h1>
                        <InteractiveTarget 
                          onHover={() => setIsTargetHovered(true)} 
                          onLeave={() => setIsTargetHovered(false)}
                        />
                    </div>

                    {/* Subtitle with Glow & Dance Effect */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        animate={isTargetHovered ? {
                           textShadow: "0 0 15px rgba(34,211,238,0.5)",
                           color: "#e0f2fe", // cyan-50
                           x: [0, -2, 2, -2, 0],
                        } : {
                           x: 0,
                           textShadow: "none"
                        }}
                        // @ts-ignore
                        transition={isTargetHovered ? {
                           x: { repeat: 3, duration: 0.2 },
                           default: { duration: 0.2 }
                        } : { duration: 0.5 }}
                        className="text-xl md:text-2xl font-medium text-gray-200 mb-12 tracking-wide"
                    >
                        I am a cybersecurity professional driven by an offensive mindset.
                    </motion.p>
                    
                    {/* Quote with Glow & Dance Effect */}
                    <motion.div 
                       className="relative mb-14 max-w-3xl cursor-default group"
                       animate={isTargetHovered ? {
                          scale: 1.02,
                          filter: "drop-shadow(0 0 10px rgba(34,211,238,0.3))",
                          x: [0, -3, 3, -3, 0]
                       } : {
                          scale: 1,
                          filter: "none",
                          x: 0
                       }}
                       // @ts-ignore
                       transition={isTargetHovered ? {
                          x: { repeat: 3, duration: 0.25 }
                       } : { duration: 0.3 }}
                    >
                       <Quote className="absolute -top-12 left-1/2 -translate-x-1/2 text-white/5 group-hover:text-cyan-500/10 transition-colors duration-500" size={100} />
                       
                       {/* Speed increased to 0.03 for faster appearance */}
                       <TypewriterText 
                          text="You cannot defend what you do not know how to break."
                          className={`text-3xl md:text-5xl font-bold ${isTargetHovered ? 'text-cyan-300' : 'text-white'} leading-tight relative z-10 transition-colors duration-300`}
                          speed={0.03}
                          hoverEffect={true}
                       />
                       
                       {/* Minimal underline indicator */}
                       <motion.div 
                          initial={{ width: 0, opacity: 0 }}
                          whileInView={{ width: 80, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 1.5, duration: 0.8 }}
                          className={`h-1 bg-gradient-to-r ${isTargetHovered ? 'from-cyan-400 to-white shadow-[0_0_15px_rgba(34,211,238,1)]' : 'from-cyan-500 to-blue-600'} mx-auto mt-10 rounded-full transition-all duration-300`}
                       />
                    </motion.div>

                    {/* Content Paragraphs - Clean Typography */}
                    <div className="space-y-8 max-w-4xl mx-auto text-left">
                       <motion.p 
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 1.8 }}
                          className="text-gray-400 text-lg leading-relaxed font-light border-l-2 border-white/5 pl-6 py-2 cursor-default"
                          whileHover={{ 
                            color: "#cffafe", // cyan-100
                            textShadow: "0 0 8px rgba(6,182,212,0.5)",
                            borderColor: "#22d3ee", // cyan-400
                            x: 5,
                            backgroundColor: "rgba(6,182,212,0.05)"
                          }}
                          style={{ borderRadius: "0 8px 8px 0" }}
                       >
                          With deep hands-on experience across Web, API, Thick Client, and Android penetration testing, I operate beyond automated tools. I focus on logic flaws, authentication bypasses, privilege escalation paths, and chained exploitation techniques that reflect real-world attacker behavior.
                       </motion.p>
                       
                       <motion.p 
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 2.0 }}
                          className="text-gray-400 text-lg leading-relaxed font-light border-l-2 border-white/5 pl-6 py-2 cursor-default"
                          whileHover={{ 
                            color: "#cffafe", // cyan-100
                            textShadow: "0 0 8px rgba(6,182,212,0.5)",
                            borderColor: "#22d3ee", // cyan-400
                            x: 5,
                            backgroundColor: "rgba(6,182,212,0.05)"
                          }}
                          style={{ borderRadius: "0 8px 8px 0" }}
                       >
                          Having identified over <span className="text-cyan-300 font-semibold">100 high-severity vulnerabilities</span> for BFSI environments, my work bridges offensive discovery with practical remediation—ensuring systems are not just compliant, but resilient.
                       </motion.p>
                    </div>

                 </div>
              </div>
           </motion.div>
        </div>

        {/* SECTION 2: Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32 perspective-1000">
           <MetricCard 
              icon={AlertTriangle} 
              value={100} 
              label="Vulnerabilities" 
              subLabel="High-Severity"
              delay={0.1}
              color="from-red-600/40 to-orange-600/40"
              accentColor="border-red-500/50"
              details="Achieved through rigorous manual pentesting of BFSI applications, focusing on Business Logic Flaws, Authentication Bypasses, and chaining low-severity bugs into critical account takeovers."
           />
           <MetricCard 
              icon={Zap} 
              value={55} 
              label="API Security" 
              subLabel="Critical Impact"
              delay={0.2}
              color="from-yellow-500/40 to-amber-500/40"
              accentColor="border-yellow-500/50"
              details="Uncovered by reverse-engineering private APIs, fuzzing parameters for BOLA/IDOR, and exploiting weak JWT implementations and broken rate-limiting controls."
           />
           <MetricCard 
              icon={Smartphone} 
              value={25} 
              label="Mobile Security" 
              subLabel="Android Systems"
              delay={0.3}
              color="from-cyan-600/40 to-blue-600/40"
              accentColor="border-cyan-500/50"
              details="Identified via static analysis (decompilation) and dynamic instrumentation using Frida to bypass SSL pinning, Root detection, and extracting hardcoded secrets."
           />
           <MetricCard 
              icon={Crosshair} 
              value={173} 
              label="Machines Pwned" 
              subLabel="CTF & Exploitation"
              delay={0.4}
              color="from-purple-600/40 to-pink-600/40"
              accentColor="border-purple-500/50"
              details="Conquered 173+ machines across HackTheBox and Proving Grounds by exploiting kernel vulnerabilities, misconfigurations, and complex Active Directory attack paths."
           />
        </div>

      </div>
    </section>
  );
};

export default About;