import React, { useState } from 'react';
import { motion, useMotionValue, useMotionTemplate, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Linkedin, FileText, Send, Youtube, Download, Copy, Check } from 'lucide-react';

// Magic Contact Item Component
const ContactItem = ({ icon: Icon, label, value, color = "cyan" }: { icon: any, label: string, value: string, color?: "cyan" | "purple" | "green" }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [copied, setCopied] = useState(false);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const colors = {
    cyan: "group-hover:text-cyan-400 group-hover:border-cyan-500/50",
    purple: "group-hover:text-purple-400 group-hover:border-purple-500/50",
    green: "group-hover:text-green-400 group-hover:border-green-500/50"
  };

  const bgGradients = {
    cyan: "rgba(6, 182, 212, 0.15)",
    purple: "rgba(168, 85, 247, 0.15)",
    green: "rgba(34, 197, 94, 0.15)"
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex items-center gap-5 p-5 rounded-2xl bg-[#0b0f14] border border-white/5 overflow-hidden transition-all duration-500 cursor-default"
    >
      {/* Moving Spotlight Gradient */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              ${bgGradients[color]},
              transparent 80%
            )
          `,
        }}
      />

      {/* Tech Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:18px_18px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />

      {/* Icon Box */}
      <div className={`relative z-10 w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${colors[color]} shadow-lg`}>
         <Icon size={24} className="text-gray-400 transition-colors duration-300 group-hover:text-white" />
      </div>
      
      {/* Text Content */}
      <div className="relative z-10 flex-1">
        <div className="flex justify-between items-center">
            <p className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-1 group-hover:text-white/60 transition-colors">{label}</p>
        </div>
        <h4 className="text-lg md:text-xl font-bold text-gray-200 transition-all duration-300 group-hover:text-white group-hover:tracking-wide group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] select-all">
            {value}
        </h4>
      </div>

      {/* Copy Button */}
      <button 
        onClick={handleCopy}
        className="relative z-20 p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300 group/btn"
        title="Copy to clipboard"
      >
        <AnimatePresence mode="wait">
           {copied ? (
             <motion.div
               key="check"
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               exit={{ scale: 0 }}
             >
                <Check size={18} className="text-green-400" />
             </motion.div>
           ) : (
             <motion.div
               key="copy"
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               exit={{ scale: 0 }}
             >
                <Copy size={18} className="text-gray-500 group-hover/btn:text-cyan-400 transition-colors" />
             </motion.div>
           )}
        </AnimatePresence>
      </button>
    </motion.div>
  );
};

const Contact: React.FC = () => {
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-l from-cyan-900/10 to-transparent blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
             {/* Modern Interactive Header */}
             <div 
                className="flex flex-col items-start gap-4 mb-8 cursor-pointer group w-fit"
                onMouseEnter={() => setIsHeaderHovered(true)}
                onMouseLeave={() => setIsHeaderHovered(false)}
            >
                <div className="flex items-center gap-4">
                    <h2 className="text-5xl md:text-7xl font-black text-white font-space-grotesk tracking-tighter transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500">
                        Contact
                    </h2>
                    <motion.div 
                        animate={{ rotate: isHeaderHovered ? 180 : 0, scale: isHeaderHovered ? 1.2 : 1 }}
                        className="p-2 rounded-full border border-white/10 bg-white/5 text-gray-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-colors"
                    >
                        <Send size={32} />
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
                    // OPEN_COMMUNICATION_CHANNEL
                </p>
            </div>

            <p className="text-xl text-gray-400 mb-8">
              "Let’s secure systems by thinking like attackers."
            </p>
            
            {/* Enhanced Magic Contact List */}
            <div className="space-y-4 mb-10">
              <ContactItem 
                icon={Mail} 
                label="Email" 
                value="ankitsingh362003@gmail.com" 
                color="cyan"
              />
              <ContactItem 
                icon={Phone} 
                label="Phone" 
                value="+91 84348 82990" 
                color="purple"
              />
              <ContactItem 
                icon={MapPin} 
                label="Location" 
                value="Navi Mumbai, India" 
                color="green"
              />
            </div>

            {/* Resume Download Button (Modern Web3 Style) */}
            <div className="mt-10">
                <motion.a 
                   href="https://drive.google.com/drive/folders/1lGPcDDO0SBC4UIQyiCgInnmm-N0iVa43?usp=sharing" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="group relative w-full sm:w-auto inline-flex items-center justify-between gap-6 px-6 py-4 bg-[#0f141a] border border-cyan-500/30 rounded-xl overflow-hidden hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]"
                   animate={isHeaderHovered ? {
                      y: [0, -8, 0],
                      rotate: [0, 1, -1, 0],
                      scale: [1, 1.03, 1],
                      boxShadow: [
                          "0 0 0px rgba(34,211,238,0)",
                          "0 0 30px rgba(34,211,238,0.3)",
                          "0 0 0px rgba(34,211,238,0)"
                      ],
                      borderColor: [
                          "rgba(6,182,212,0.3)", 
                          "rgba(34,211,238,0.8)", 
                          "rgba(6,182,212,0.3)"
                      ]
                   } : {}}
                   transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                   }}
                >
                   {/* Gradient Hover Effect */}
                   <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                   
                   <div className="flex items-center gap-4 relative z-10">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                         <Download size={20} className="text-cyan-400" />
                      </div>
                      <div className="flex flex-col text-left">
                         <span className="text-xs text-gray-500 font-mono uppercase tracking-wider group-hover:text-cyan-400/80 transition-colors">Professional CV</span>
                         <span className="text-lg font-bold text-white group-hover:text-cyan-100 transition-colors">View Resume</span>
                      </div>
                   </div>

                   <div className="relative z-10 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 hidden sm:block">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)] animate-pulse" />
                   </div>
                </motion.a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="https://www.linkedin.com/in/4nkitsingh/" target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[120px] px-6 py-4 bg-[#0077b5]/10 hover:bg-[#0077b5]/20 border border-[#0077b5]/30 hover:border-[#0077b5] rounded-xl text-white font-medium flex items-center justify-center gap-3 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,119,181,0.3)] group">
                <Linkedin size={20} className="group-hover:text-[#0077b5] transition-colors" /> LinkedIn
              </a>
              <a href="https://4nkit.medium.com/" target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[120px] px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white rounded-xl text-white font-medium flex items-center justify-center gap-3 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] group">
                <FileText size={20} className="group-hover:text-gray-300 transition-colors" /> Medium
              </a>
              <a href="https://www.youtube.com/@astech.4u" target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[120px] px-6 py-4 bg-[#FF0000]/10 hover:bg-[#FF0000]/20 border border-[#FF0000]/30 hover:border-[#FF0000] rounded-xl text-white font-medium flex items-center justify-center gap-3 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,0,0.3)] group">
                <Youtube size={20} className="group-hover:text-[#FF0000] transition-colors" /> YouTube
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl transform rotate-3 scale-95 rounded-2xl opacity-50" />
            <form className="relative bg-[#0b0f14] border border-gray-800 p-8 rounded-2xl shadow-2xl space-y-6">
              <h3 className="text-2xl font-bold mb-2">Initialize Communication</h3>
              
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Identity</label>
                <input type="text" className="w-full bg-[#161b22] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="John Doe" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Coordinates (Email)</label>
                <input type="email" className="w-full bg-[#161b22] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="john@company.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">Payload (Message)</label>
                <textarea rows={4} className="w-full bg-[#161b22] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Describe your security needs..."></textarea>
              </div>

              <button type="button" className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-xl border border-cyan-400/20 hover:border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_35px_rgba(6,182,212,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group">
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Transmit Message
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-20 py-8 border-t border-white/5 text-center text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Ankit Singh. All Systems Operational.</p>
      </div>
    </section>
  );
};

export default Contact;