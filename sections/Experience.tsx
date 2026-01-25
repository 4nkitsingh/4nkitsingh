import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Terminal, Shield, ChevronRight, Activity } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: "KPMG",
    role: "CYBER SECURITY ANALYST",
    location: "Mumbai, India",
    period: "09/2024 – Present",
    type: "Full-time",
    description: [
      "Performed extensive web application penetration testing for BFSI clients aligned with OWASP Top 10, using black-box and grey-box approaches with tools such as BurpSuite, Nessus, and manual testing, identifying multiple critical and 100+ high-severity vulnerabilities and supporting timely remediation through close collaboration with developers.",
      "Conducted comprehensive API security testing using Burp Suite, Insomnia, and custom test cases, uncovering 55+ high-severity issues, significantly strengthening the overall security posture and resilience of the application ecosystem.",
      "Executed External Penetration Testing (EPT) using common Linux tools, Thick Client testing with PETEP, CFF Explorer, and Sysinternals Suite, and Vulnerability Assessment (VA) leveraging Nessus and Qualys, delivering detailed reports with actionable remediation guidance and measurable security improvements.",
      "Performed Android application security assessments using MobSF, Frida, JADX-GUI, and APKTool, reporting and validating the closure of 25+ high-severity vulnerabilities in coordination with mobile development teams.",
      "Owned and managed the vulnerability tracking dashboard across ongoing projects, continuously monitoring identified issues, remediation status, and risk trends throughout the engagement lifecycle, ensuring visibility, accountability, and timely closure."
    ],
    tech: ["Burp Suite", "OWASP", "MobSF", "API Security", "Python"]
  }
];

interface ExperienceCardProps {
  data: typeof experiences[0];
  index: number;
  isHeaderHovered: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ data, index, isHeaderHovered }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left - width / 2);
    mouseY.set(e.clientY - top - height / 2);
  };

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [2, -2]), { damping: 20, stiffness: 100 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-2, 2]), { damping: 20, stiffness: 100 });

  return (
    <div className="relative flex flex-col md:flex-row gap-8 w-full">
      
      {/* Timeline Node - Desktop */}
      <div className="hidden md:flex flex-col items-center flex-shrink-0 pt-8 relative">
         <div className="w-px h-full bg-gray-800 absolute top-0 bottom-0 left-1/2 -translate-x-1/2" />
         <motion.div 
            animate={{ 
              scale: isHeaderHovered ? [1, 1.5, 1] : 1,
              boxShadow: isHeaderHovered ? "0 0 20px rgba(6,182,212,0.8)" : "0 0 0 rgba(6,182,212,0)"
            }}
            transition={{ duration: 0.5 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className={`w-5 h-5 rounded-full bg-[#0b0f14] border-2 ${isHeaderHovered ? 'border-purple-500' : 'border-cyan-500'} z-10 relative mt-4 transition-colors duration-300`}
         >
            <div className={`absolute inset-0 ${isHeaderHovered ? 'bg-purple-400' : 'bg-cyan-400'} rounded-full opacity-50 animate-ping`} />
         </motion.div>
      </div>

      {/* Card Wrapper for Perspective */}
      <div className="w-full perspective-1000">
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => {
            mouseX.set(0);
            mouseY.set(0);
          }}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          animate={isHeaderHovered ? { x: [0, 5, 0], filter: "brightness(1.1)" } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative group w-full"
        >
            {/* Animated Prism Border - Modern Hover Effect */}
            <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 animate-gradient-xy" />
            
            {/* Card Background */}
            <div className="relative bg-[#0b0f14] border border-white/5 rounded-2xl p-6 md:p-8 overflow-hidden transition-all duration-500 group-hover:border-transparent group-hover:bg-[#0f1216]">
                
                {/* Cyber Grid Background (Reveals on Hover) */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Header Section */}
                <div className="relative z-10 flex flex-col gap-6 mb-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-cyan-950/30 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                                <Shield size={24} strokeWidth={2.5} />
                            </div>
                            <h3 className="text-3xl font-bold text-white tracking-tight font-space-grotesk group-hover:text-cyan-100 transition-colors">{data.company}</h3>
                        </div>

                        <div className="flex flex-wrap gap-3">
                             <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 flex items-center gap-2 text-xs font-mono text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                                <Calendar size={12} />
                                {data.period}
                             </div>
                             <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 flex items-center gap-2 text-xs font-mono text-purple-400 group-hover:bg-purple-500/10 transition-colors">
                                <MapPin size={12} />
                                {data.location}
                             </div>
                        </div>
                    </div>

                    {/* Modern Gradient Role Bar */}
                    <div className="h-12 w-full max-w-md bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-r-full relative overflow-hidden group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-shadow duration-500">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 mix-blend-overlay" />
                        <div className="absolute top-0 bottom-0 left-0 w-1 bg-white/50" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-white tracking-wider text-sm md:text-base flex items-center gap-2">
                           {data.role}
                        </span>
                    </div>
                </div>

                {/* Description Body */}
                <div className="relative z-10 space-y-4 mb-8 pl-2">
                   {data.description.map((item, i) => (
                      <motion.div 
                        key={i}
                        className="flex gap-4 group/item"
                      >
                         <div className="mt-2 min-w-[6px] h-[6px] rounded-full bg-cyan-800 group-hover:bg-cyan-400 transition-colors duration-300" />
                         <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-justify">
                            {item}
                         </p>
                      </motion.div>
                   ))}
                </div>

                {/* Footer Technologies */}
                <div className="relative z-10 border-t border-white/5 pt-6 mt-4">
                   <div className="flex items-center gap-2 mb-4">
                      <span className="text-cyan-500 font-mono font-bold">{">_"}</span>
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] group-hover:text-cyan-400 transition-colors">Technologies Deployed</span>
                   </div>
                   <div className="flex flex-wrap gap-2">
                      {data.tech.map((tech, i) => (
                         <span 
                            key={i} 
                            className="px-3 py-1.5 text-xs font-medium text-gray-400 bg-[#0f141a] border border-gray-800 rounded hover:border-cyan-500/50 hover:text-cyan-300 hover:bg-cyan-950/30 transition-all cursor-default hover:shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                         >
                            {tech}
                         </span>
                      ))}
                   </div>
                </div>

            </div>
        </motion.div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);

  return (
    <section id="experience" className="py-32 relative bg-[#080c11] overflow-hidden">
       
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 pointer-events-none" />

       <div className="container mx-auto px-4 max-w-6xl relative z-10">
          
          {/* Header Block - Replaced Gradient with Clean Typography */}
          <div 
            className="flex flex-col items-start gap-4 mb-20 cursor-pointer group w-fit"
            onMouseEnter={() => setIsHeaderHovered(true)}
            onMouseLeave={() => setIsHeaderHovered(false)}
          >
             <div className="flex items-center gap-4">
                <h2 className="text-6xl md:text-8xl font-black text-white font-space-grotesk tracking-tighter transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500">
                    Experience
                </h2>
                <motion.div 
                    animate={{ rotate: isHeaderHovered ? 180 : 0, scale: isHeaderHovered ? 1.2 : 1 }}
                    className="p-2 rounded-full border border-white/10 bg-white/5 text-gray-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-colors"
                >
                    <Activity size={32} />
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
                // VIEW_OPERATIONAL_HISTORY
             </p>
          </div>

          <div className="relative">
             <div className="space-y-16">
                {experiences.map((exp, index) => (
                   <ExperienceCard 
                      key={exp.id} 
                      data={exp} 
                      index={index} 
                      isHeaderHovered={isHeaderHovered}
                   />
                ))}
             </div>
          </div>
       </div>
    </section>
  );
};

export default Experience;