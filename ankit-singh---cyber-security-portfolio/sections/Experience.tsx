import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, MapPin, Terminal, Shield, Server } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: "KPMG",
    role: "Cyber Security Analyst",
    location: "Mumbai, India",
    period: "Sep 2024 – Present",
    type: "Full-time",
    description: [
      "Conducted Web App Pentesting (OWASP Top 10) for BFSI clients.",
      "Identified 100+ High-Severity Findings & owned vulnerability dashboard.",
      "Performed comprehensive API Security Testing (55+ critical issues).",
      "Executed Android Security Assessments utilizing MobSF & Frida.",
      "Led External Penetration Testing & Thick Client analysis."
    ],
    tech: ["Burp Suite", "OWASP", "MobSF", "API Security", "Python"]
  }
];

const ExperienceCard = ({ data, index }: { data: typeof experiences[0], index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left - width / 2);
    mouseY.set(e.clientY - top - height / 2);
  };

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [5, -5]), { damping: 20, stiffness: 100 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-5, 5]), { damping: 20, stiffness: 100 });
  const bgX = useSpring(useTransform(mouseX, [-300, 300], [0, 20]), { damping: 15, stiffness: 50 });
  const bgY = useSpring(useTransform(mouseY, [-300, 300], [0, 20]), { damping: 15, stiffness: 50 });

  return (
    <div className="relative flex flex-col md:flex-row items-center md:items-stretch gap-8 w-full">
      
      {/* Timeline Node - Desktop */}
      <div className="hidden md:flex flex-col items-center justify-start min-h-full pt-12">
         <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.8)] z-20 relative"
         >
            <div className="absolute inset-0 animate-ping bg-cyan-400 rounded-full opacity-75 duration-1000" />
         </motion.div>
         {/* Connecting Line */}
         <div className="w-12 h-px bg-gradient-to-r from-cyan-500/50 to-transparent absolute left-1/2 ml-2 top-[3.25rem] -z-10" />
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
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="relative group w-full"
        >
          {/* Card Background & Glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/30 to-purple-600/30 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500" />
          
          <div className="relative bg-[#0b0f14]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 overflow-hidden shadow-2xl">
            
            {/* Moving Grid Background */}
            <motion.div 
               style={{ x: bgX, y: bgY }}
               className="absolute inset-0 opacity-10 pointer-events-none"
            >
               <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </motion.div>

            {/* Decorative Corners */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-purple-500/30 rounded-br-2xl" />

            {/* Header */}
            <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 border-b border-white/5 pb-6">
              <div>
                 <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-cyan-950/30 rounded-lg border border-cyan-500/20 text-cyan-400">
                       <Shield size={24} />
                    </div>
                    <h3 className="text-3xl font-bold text-white tracking-tight">{data.company}</h3>
                 </div>
                 <h4 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold font-space-grotesk flex items-center gap-2">
                    {data.role}
                 </h4>
              </div>

              <div className="flex flex-col items-start md:items-end gap-2 text-sm text-gray-400 font-mono">
                 <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5">
                    <Calendar size={14} className="text-cyan-500" />
                    <span>{data.period}</span>
                 </div>
                 <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5">
                    <MapPin size={14} className="text-purple-500" />
                    <span>{data.location}</span>
                 </div>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-4 mb-8">
               {data.description.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex gap-4 group/item"
                  >
                     <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-cyan-500/50 group-hover/item:bg-cyan-400 group-hover/item:shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all" />
                     <p className="text-gray-300 text-sm md:text-base leading-relaxed group-hover/item:text-white transition-colors">
                        {item}
                     </p>
                  </motion.div>
               ))}
            </div>

            {/* Tech Stack Footer */}
            <div className="relative z-10 pt-4 border-t border-white/5">
               <div className="flex items-center gap-2 mb-3">
                  <Terminal size={14} className="text-purple-400" />
                  <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">Technologies Deployed</span>
               </div>
               <div className="flex flex-wrap gap-2">
                  {data.tech.map((tech, i) => (
                     <span 
                        key={i} 
                        className="px-3 py-1.5 text-xs font-medium text-cyan-300 bg-cyan-950/20 border border-cyan-500/20 rounded hover:border-cyan-500/50 hover:bg-cyan-950/40 transition-all cursor-default shadow-[0_0_10px_rgba(8,145,178,0.1)] hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-[#080c11]">
       
       {/* Background Decor */}
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
       <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
       
       <div className="container mx-auto px-4" ref={containerRef}>
          <div className="text-center mb-20 relative z-10">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
             >
                <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
                  <span className="text-white">Mission</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">History</span>
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
             </motion.div>
          </div>

          <div className="relative max-w-5xl mx-auto">
             
             {/* Central Cyber Spine (Desktop) */}
             <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 -translate-x-1/2 hidden md:block">
                <motion.div 
                  style={{ scaleY: scrollYProgress }}
                  className="absolute top-0 left-0 w-full bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500 origin-top shadow-[0_0_15px_rgba(34,211,238,0.5)]" 
                />
             </div>

             <div className="space-y-16">
                {experiences.map((exp, index) => (
                   <ExperienceCard key={exp.id} data={exp} index={index} />
                ))}
             </div>
          </div>
       </div>
    </section>
  );
};

export default Experience;
