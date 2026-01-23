import React from 'react';
import { motion } from 'framer-motion';

const tools = [
  { name: 'Burp Suite', color: '#ff6633' },
  { name: 'Nessus', color: '#0070b8' },
  { name: 'Kali Linux', color: '#557C94' },
  { name: 'Metasploit', color: '#005572' },
  { name: 'Frida', color: '#c64fbd' },
  { name: 'BloodHound', color: '#7eae53' },
  { name: 'Postman', color: '#ff6c37' },
  { name: 'Wireshark', color: '#1d8cba' },
  { name: 'Nmap', color: '#4d5d6d' },
  { name: 'Docker', color: '#2496ed' }
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
             <div key={idx} className="flex-shrink-0 w-48 h-16 bg-gray-900/50 backdrop-blur-md border border-white/5 rounded-lg flex items-center gap-4 px-4 hover:bg-gray-800 hover:border-cyan-500/30 transition-all cursor-default">
                <div 
                  className="w-8 h-8 rounded bg-black/50 flex items-center justify-center font-bold"
                  style={{ color: tool.color }}
                >
                   {tool.name.charAt(0)}
                </div>
                <span className="text-sm font-medium text-gray-300">
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
             <div key={idx} className="flex-shrink-0 w-48 h-16 bg-gray-900/50 backdrop-blur-md border border-white/5 rounded-lg flex items-center gap-4 px-4 hover:bg-gray-800 hover:border-purple-500/30 transition-all cursor-default">
                <div 
                  className="w-8 h-8 rounded bg-black/50 flex items-center justify-center font-bold"
                  style={{ color: tool.color }}
                >
                   {tool.name.charAt(0)}
                </div>
                <span className="text-sm font-medium text-gray-300">
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