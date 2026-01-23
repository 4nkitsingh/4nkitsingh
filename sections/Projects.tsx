import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Lock, Database, Code2 } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Offensive Security Infographic',
    category: 'Achievement',
    description: 'Awarded 1-year OffSec subscription for creating an outstanding infographic detailing offensive security methodologies. Source- https://x.com/offsectraining/status/1779875584501244195',
    tech: ['Design', 'Education', 'Methodology'],
    image: 'https://pbs.twimg.com/media/GLNjS_XXQAAxLax?format=jpg&name=large'
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
    description: 'Contributed to the development of a security training platform, creating challenges and educational content. - Source: https://thedssecurity.com/',
    tech: ['Education', 'React', 'Cybersecurity'],
    image: 'https://ds-security-web.s3.amazonaws.com/ui/media/images/comingsoon.gif'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-[#080c11]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold font-space-grotesk mb-4">Operations & Research</h2>
            <p className="text-gray-400 max-w-xl">Selected works, CTF achievements, and development projects focusing on security.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
            View All Archives <ExternalLink size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative bg-[#0f141a] rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500/30 transition-all duration-300"
            >
              {/* Image Overlay */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f141a] to-transparent z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-4 right-4 z-20">
                   <span className="px-3 py-1 text-xs font-bold bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-white">
                      {project.category}
                   </span>
                </div>
              </div>

              <div className="p-6 relative z-20">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs text-gray-500 bg-gray-900 px-2 py-1 rounded border border-gray-800">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                    <Github size={16} /> Code
                  </button>
                  <button className="flex-1 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                    <ExternalLink size={16} /> Details
                  </button>
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
