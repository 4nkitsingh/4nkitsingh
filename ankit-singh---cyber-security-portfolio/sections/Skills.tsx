import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Server, ShieldCheck, Smartphone, Terminal } from 'lucide-react';
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

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-transparent to-[#05070a] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 font-space-grotesk text-white">Technical Arsenal</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for offensive operations and vulnerability assessment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative h-full bg-[#11161d] rounded-xl overflow-hidden transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]">
                
                {/* Neon Border Gradient */}
                <div className="absolute inset-0 p-[1px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-500" />
                
                {/* Inner Content */}
                <div className="relative h-full bg-[#0b0f14] rounded-xl p-8 z-10">
                  
                  {/* Glowing Background Blob */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[50px] rounded-full transition-all duration-500 group-hover:bg-cyan-500/20 group-hover:scale-150" />

                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-gray-800/50 rounded-lg text-gray-400 group-hover:text-cyan-400 group-hover:bg-cyan-500/20 transition-all duration-300 ring-1 ring-white/5 group-hover:ring-cyan-500/50">
                      <cat.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">{cat.title}</h3>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-[10px] font-bold text-cyan-500/80 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <span className="w-1 h-1 bg-cyan-500 rounded-full" /> Techniques
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cat.skills.map((skill, i) => (
                          <span key={i} className="text-xs px-2.5 py-1.5 bg-gray-800/80 rounded text-gray-300 border border-gray-700/50 group-hover:border-cyan-500/30 group-hover:bg-cyan-900/10 transition-colors">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-[10px] font-bold text-purple-500/80 uppercase tracking-widest mb-3 flex items-center gap-2">
                         <span className="w-1 h-1 bg-purple-500 rounded-full" /> Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cat.tools.map((tool, i) => (
                          <span key={i} className="text-xs px-2.5 py-1.5 bg-gray-800/80 rounded text-gray-300 border border-gray-700/50 group-hover:border-purple-500/30 group-hover:bg-purple-900/10 transition-colors">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;