import React from 'react';
import { motion } from 'framer-motion';

const tools = [
  { 
    name: 'Burp Suite', 
    logo: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/burp_suite_logo_icon_168928.png'
  },
  { 
    name: 'Nessus', 
    logo: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/nessus_logo_icon_169992.png' 
  },
  { 
    name: 'Kali Linux', 
    logo: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/kali_linux_logo_icon_171302.png' 
  },
  { 
    name: 'Metasploit', 
    logo: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/metasploit_logo_icon_168868.png' 
  },
  { 
    name: 'Frida', 
    logo: 'https://avatars.githubusercontent.com/u/10268574?s=200&v=4' 
  },
  { 
    name: 'BloodHound', 
    logo: 'https://avatars.githubusercontent.com/u/20658760?s=200&v=4' 
  },
  { 
    name: 'Insomnia', 
    logo: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/insomnia_logo_icon_170566.png' 
  },
  { 
    name: 'Wireshark', 
    logo: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/wireshark_logo_icon_170425.png' 
  },
  { 
    name: 'Nmap', 
    logo: 'https://nmap.org/images/nmap-logo-256x256.png' 
  },
  { 
    name: 'Docker', 
    logo: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/docker_logo_icon_168673.png' 
  }
];

const Tools: React.FC = () => {
  return (
    <section className="py-24 overflow-hidden border-y border-white/5 bg-[#0b0f14] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-purple-500/5 pointer-events-none" />
      
      <div className="container mx-auto px-4 mb-12 relative z-10">
        <h3 className="text-center text-sm font-mono text-cyan-400/80 uppercase tracking-[0.3em] mb-2">Technological Infrastructure</h3>
        <h2 className="text-center text-3xl font-bold font-space-grotesk text-white">Powered By Industry Standards</h2>
      </div>
      
      {/* Row 1 - Moving Left */}
      <div className="flex overflow-hidden relative group mb-8">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0b0f14] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0b0f14] to-transparent z-10" />
        
        <motion.div 
          className="flex gap-8 items-center whitespace-nowrap px-4"
          animate={{ x: [0, -1035] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...tools, ...tools, ...tools].map((tool, idx) => (
             <div key={idx} className="flex-shrink-0 w-52 h-20 bg-gray-900/50 backdrop-blur-md border border-white/5 rounded-xl flex items-center gap-4 px-4 hover:bg-gray-800 hover:border-cyan-500/30 transition-all cursor-default group/tool">
                <div className="w-10 h-10 rounded-lg bg-white/5 p-1.5 flex items-center justify-center border border-white/5 group-hover/tool:border-cyan-500/30 transition-colors">
                   <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-sm font-bold text-gray-300 group-hover/tool:text-white transition-colors">
                  {tool.name}
                </span>
             </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2 - Moving Right */}
      <div className="flex overflow-hidden relative group">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0b0f14] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0b0f14] to-transparent z-10" />
        
        <motion.div 
          className="flex gap-8 items-center whitespace-nowrap px-4"
          animate={{ x: [-1035, 0] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          {[...tools].reverse().concat([...tools].reverse()).concat([...tools].reverse()).map((tool, idx) => (
             <div key={idx} className="flex-shrink-0 w-52 h-20 bg-gray-900/50 backdrop-blur-md border border-white/5 rounded-xl flex items-center gap-4 px-4 hover:bg-gray-800 hover:border-purple-500/30 transition-all cursor-default group/tool">
                <div className="w-10 h-10 rounded-lg bg-white/5 p-1.5 flex items-center justify-center border border-white/5 group-hover/tool:border-purple-500/30 transition-colors">
                   <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-sm font-bold text-gray-300 group-hover/tool:text-white transition-colors">
                  {tool.name}
                </span>
             </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Tools;