import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import CyberBackground from './components/ui/CyberBackground';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Tools from './sections/Tools';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import { GraduationCap, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="relative min-h-screen text-white selection:bg-cyan-500/30">
      <CyberBackground />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Tools />
        <Experience />
        <Certifications />
        <Projects />
        
        {/* Education Section */}
        <section id="education" className="py-24 relative overflow-hidden">
           <div className="absolute inset-0 bg-black/40 skew-y-3 transform origin-top-left -z-10" />
           <div className="container mx-auto px-4">
              <div className="flex flex-col items-center text-center mb-12">
                 <h2 className="text-3xl font-bold font-space-grotesk mb-4 text-white">Academic Background</h2>
                 <p className="text-gray-400">Foundational education and university degree.</p>
              </div>
              
              <div className="max-w-3xl mx-auto">
                 <div className="relative p-1 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl">
                    <div className="bg-[#0b0f14] rounded-xl p-8 md:p-12 relative overflow-hidden">
                       <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                       
                       <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                          <div className="w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center border border-gray-800 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                             <GraduationCap size={40} className="text-cyan-400" />
                          </div>
                          
                          <div className="flex-1 text-center md:text-left">
                             <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Bachelor of Arts in English</h3>
                             <p className="text-xl text-cyan-400 font-medium mb-4">Vinoba Bhave University</p>
                             
                             <div className="flex flex-col md:flex-row items-center gap-4 text-gray-400 text-sm justify-center md:justify-start">
                                <span className="flex items-center gap-2">
                                  <MapPin size={14} /> Jharkhand, India
                                </span>
                                <span className="hidden md:block w-1 h-1 bg-gray-600 rounded-full" />
                                <span>Graduated with Honors</span>
                             </div>
                          </div>
                          
                          <div className="hidden md:block">
                             <div className="px-4 py-2 bg-white/5 border border-white/10 rounded text-xs font-mono text-gray-400 uppercase tracking-widest">
                                Verified
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>
        
        <Contact />
      </main>
    </div>
  );
}

export default App;