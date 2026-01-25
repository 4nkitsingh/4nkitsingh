import React, { useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Globe, Server, ShieldCheck, Smartphone, Terminal, Cpu } from 'lucide-react';
import { SkillCategory } from '../types';

const skillCategories: SkillCategory[] = [
  {
    title: "Web & API Security",
    icon: Globe,
    skills: ["SQL Injection", "XSS", "IDOR", "Auth Bypass", "Business Logic"],
    tools: ["Burp Suite", "Postman", "Insomnia"]
  },
  {
    title: "Vulnerability Assessment",
    icon: ShieldCheck,
    skills: ["External Pentesting", "Thick Client Testing", "Network Audit"],
    tools: ["Nessus", "Qualys", "Acunetix"]
  },
  {
    title: "Windows & AD",
    icon: Server,
    skills: ["Kerberoasting", "Silver Ticket", "Golden Ticket", "AD Enum"],
    tools: ["Mimikatz", "BloodHound", "CrackMapExec"]
  },
  {
    title: "Mobile Security",
    icon: Smartphone,
    skills: ["Android Pentesting", "Static Analysis", "Dynamic Analysis"],
    tools: ["MobSF", "Frida", "JADX-GUI", "APKTool"]
  },
  {
    title: "OS & Scripting",
    icon: Terminal,
    skills: ["Bash", "Python", "PowerShell", "C/C++ (AV Evasion)"],
    tools: ["Kali Linux", "Windows", "Docker"]
  }
];

const SkillCard = ({ category, index }: { category: SkillCategory; index: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="group relative h-full bg-gray-900/40 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(6, 182, 212, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Grid Pattern that reveals on hover */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />

      <div className="relative h-full p-8 z-10">
        <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-cyan-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                <category.icon size={28} className="text-gray-400 group-hover:text-cyan-400 transition-colors relative z-10" />
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-100 transition-colors">{category.title}</h3>
        </div>
        
        <div className="space-y-6">
            <div>
                 <h4 className="text-[10px] font-bold text-cyan-500/70 uppercase tracking-widest mb-3 flex items-center gap-2">
                   <span className="w-1 h-1 bg-cyan-500 rounded-full shadow-[0_0_5px_rgba(6,182,212,1)]" /> Techniques
                 </h4>
                 <div className="flex flex-wrap gap-2">
                   {category.skills.map((skill, i) => (
                      <span key={i} className="text-xs px-2.5 py-1 bg-white/5 hover:bg-cyan-500/10 rounded text-gray-400 hover:text-cyan-300 border border-white/5 hover:border-cyan-500/30 transition-all cursor-default">
                        {skill}
                      </span>
                   ))}
                 </div>
            </div>
            
             <div>
                 <h4 className="text-[10px] font-bold text-purple-500/70 uppercase tracking-widest mb-3 flex items-center gap-2">
                   <span className="w-1 h-1 bg-purple-500 rounded-full shadow-[0_0_5px_rgba(168,85,247,1)]" /> Tools
                 </h4>
                 <div className="flex flex-wrap gap-2">
                   {category.tools.map((tool, i) => (
                      <span key={i} className="text-xs px-2.5 py-1 bg-white/5 hover:bg-purple-500/10 rounded text-gray-400 hover:text-purple-300 border border-white/5 hover:border-purple-500/30 transition-all cursor-default">
                        {tool}
                      </span>
                   ))}
                 </div>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-transparent to-[#05070a] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Modern Interactive Header */}
        <div 
            className="flex flex-col items-center gap-4 mb-12 cursor-pointer group w-fit mx-auto"
            onMouseEnter={() => setIsHeaderHovered(true)}
            onMouseLeave={() => setIsHeaderHovered(false)}
        >
             <div className="flex items-center gap-4">
                <h2 className="text-5xl md:text-7xl font-black text-white font-space-grotesk tracking-tighter transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500">
                    Arsenal
                </h2>
                <motion.div 
                    animate={{ rotate: isHeaderHovered ? 180 : 0, scale: isHeaderHovered ? 1.2 : 1 }}
                    className="p-2 rounded-full border border-white/10 bg-white/5 text-gray-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-colors"
                >
                    <Terminal size={32} />
                </motion.div>
             </div>
             
             {/* Animated Underline */}
             <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                <motion.div 
                    initial={{ x: '-100%' }}
                    animate={{ x: isHeaderHovered ? '0%' : '-100%' }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                    className="h-full w-full bg-gradient-to-r from-cyan-500 to-purple-600" 
                />
             </div>
             <p className="text-gray-500 font-mono text-sm tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                // INITIATE_SKILL_MATRIX
             </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for offensive operations and vulnerability assessment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <SkillCard key={idx} category={cat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;