import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Lock, Database, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Offensive Security Infographic',
    category: 'Achievement',
    description: 'Awarded 1-year OffSec subscription for creating an outstanding infographic detailing offensive security methodologies.',
    tech: ['Design', 'Education', 'Methodology'],
    image: 'https://pbs.twimg.com/media/GLNjS_XXQAAxLax?format=jpg&name=large',
    link: 'https://x.com/offsectraining/status/1779875584501244195'
  },
  {
    id: '2',
    title: 'CTF Domination',
    category: 'Research',
    description: 'Exploited 173+ machines across PG Play, PortSwigger, HTB, and TryHackMe. Documented writeups for complex exploit chains.',
    tech: ['Penetration Testing', 'Exploit Dev', 'Linux'],
    image: 'https://www.hackthebox.com/images/landingv3/og/og-b2c-home.jpg'
  },
  {
    id: '3',
    title: 'Adsflix.in Security',
    category: 'Web Security',
    description: 'Developed and secured an investment web application. Implemented robust input validation and secure authentication flows.',
    tech: ['Web Dev', 'Secure Coding', 'PHP/SQL'],
    image: 'https://www.koombea.com/wp-content/uploads/2022/01/website-vs-web-application-banner@2x.webp'
  },
  {
    id: '4',
    title: 'DS Security Platform',
    category: 'Contribution',
    description: 'Contributed to the development of a security training platform, creating challenges and educational content.',
    tech: ['Education', 'React', 'Cybersecurity'],
    image: 'https://ds-security-web.s3.amazonaws.com/ui/media/images/comingsoon.gif',
    link: 'https://thedssecurity.com/'
  }
];

const Projects: React.FC = () => {
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);

  return (
    <section id="projects" className="py-24 bg-[#080c11]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          
          {/* Modern Interactive Header */}
          <div 
            className="flex flex-col items-start gap-4 cursor-pointer group w-fit"
            onMouseEnter={() => setIsHeaderHovered(true)}
            onMouseLeave={() => setIsHeaderHovered(false)}
          >
             <div className="flex items-center gap-4">
                <h2 className="text-5xl md:text-7xl font-black text-white font-space-grotesk tracking-tighter transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500">
                    Operations
                </h2>
                <motion.div 
                    animate={{ rotate: isHeaderHovered ? 180 : 0, scale: isHeaderHovered ? 1.2 : 1 }}
                    className="p-2 rounded-full border border-white/10 bg-white/5 text-gray-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-colors"
                >
                    <Database size={32} />
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
                // CLASSIFIED_ARCHIVES
             </p>
          </div>

          <Link 
            to="/blog"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/50 rounded-lg text-cyan-400 transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:-translate-y-0.5 mt-4 md:mt-0"
          >
            View All Archives <ExternalLink size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative bg-[#0f141a] rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 shadow-xl"
            >
              {/* Image Overlay */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f141a] to-transparent z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20">
                   <span className="px-3 py-1 text-xs font-bold bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-white shadow-lg">
                      {project.category}
                   </span>
                </div>
              </div>

              <div className="p-6 relative z-20">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs text-gray-500 bg-gray-900 px-2.5 py-1 rounded border border-gray-800 group-hover:border-gray-700 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 py-2.5 bg-[#0b0f14] hover:bg-gray-800 border border-gray-700 hover:border-white rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 group/btn">
                    <Github size={16} className="text-gray-400 group-hover/btn:text-white transition-colors" /> Code
                  </button>
                  {project.link ? (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 bg-[#0b0f14] hover:bg-cyan-950/30 border border-gray-700 hover:border-cyan-500 rounded-lg text-sm font-medium text-cyan-400 transition-all flex items-center justify-center gap-2 hover:shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                    >
                      <ExternalLink size={16} /> Source
                    </a>
                  ) : (
                    <button className="flex-1 py-2.5 bg-[#0b0f14] hover:bg-cyan-950/30 border border-gray-700 hover:border-cyan-500 rounded-lg text-sm font-medium text-cyan-400 transition-all flex items-center justify-center gap-2 hover:shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                        <ExternalLink size={16} /> Details
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;