import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);

  return (
    <section id="education" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 skew-y-3 transform origin-top-left -z-10" />
        <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center mb-16">
                
                {/* Modern Interactive Header */}
                <div 
                    className="flex flex-col items-center gap-4 mb-8 cursor-pointer group w-fit"
                    onMouseEnter={() => setIsHeaderHovered(true)}
                    onMouseLeave={() => setIsHeaderHovered(false)}
                >
                    <div className="flex items-center gap-4">
                        <h2 className="text-5xl md:text-7xl font-black text-white font-space-grotesk tracking-tighter transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500">
                            Education
                        </h2>
                        <motion.div 
                            animate={{ rotate: isHeaderHovered ? 180 : 0, scale: isHeaderHovered ? 1.2 : 1 }}
                            className="p-2 rounded-full border border-white/10 bg-white/5 text-gray-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-colors"
                        >
                            <GraduationCap size={32} />
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
                        // ACADEMIC_RECORDS
                    </p>
                </div>

                <p className="text-gray-400">Foundational education and university degree.</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative group cursor-default"
                >
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/50 to-purple-600/50 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500" />
                    
                    <div className="relative bg-[#0b0f14] border border-white/10 rounded-2xl p-8 md:p-10 overflow-hidden">
                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        
                        <div className="flex flex-col md:flex-row gap-8 relative z-10">
                            {/* Icon Side */}
                            <div className="flex-shrink-0 flex flex-col items-center md:items-start">
                                <div className="w-20 h-20 bg-gray-900 rounded-2xl flex items-center justify-center border border-gray-800 shadow-[0_0_20px_rgba(6,182,212,0.1)] group-hover:border-cyan-500/50 transition-colors duration-300">
                                    <GraduationCap size={32} className="text-cyan-400" />
                                </div>
                            </div>
                            
                            {/* Content Side */}
                            <div className="flex-1 text-center md:text-left">
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-2">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-100 transition-colors">Bachelor of Arts - BA</h3>
                                        <p className="text-lg text-cyan-400 font-medium">English Language and Literature, General</p>
                                    </div>
                                    <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-gray-400 uppercase tracking-widest flex items-center gap-2 mx-auto md:mx-0 whitespace-nowrap">
                                        <Calendar size={12} /> Aug 2021 - Aug 2024
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <p className="text-lg text-gray-300 font-medium">Vinoba Bhave University</p>
                                    <p className="text-sm text-gray-500 flex items-center justify-center md:justify-start gap-2 mt-1">
                                        <MapPin size={14} /> Ramgarh College, Ramgarh Jharkhand 829122
                                    </p>
                                </div>
                                
                                {/* Reveal Description on Hover */}
                                <div className="relative overflow-hidden">
                                     <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                         <p className="text-gray-400 leading-relaxed border-l-2 border-cyan-500/30 pl-4 text-sm md:text-base text-justify hover:text-cyan-50 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300 cursor-text">
                                            "Equipped with a strong foundation in English literature and language, I possess excellent writing, communication, and critical thinking skills, enabling me to craft compelling narratives, analyze complex texts, and effectively convey ideas."
                                         </p>
                                     </div>
                                     <div className="group-hover:hidden text-center md:text-left mt-2">
                                         <span className="text-xs text-cyan-500/70 font-mono animate-pulse">Hover Card for details...</span>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  );
};

export default Education;