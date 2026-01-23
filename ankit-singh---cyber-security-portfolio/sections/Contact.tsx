import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Linkedin, FileText, Send, Youtube } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-l from-cyan-900/10 to-transparent blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-5xl font-bold font-space-grotesk mb-6">Let's Secure the Future</h2>
            <p className="text-xl text-gray-400 mb-8">
              "Let’s secure systems by thinking like attackers."
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors cursor-default">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-cyan-400 border border-white/5">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:ankitsingh362003@gmail.com" className="text-lg">ankitsingh362003@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors cursor-default">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-purple-400 border border-white/5">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-lg">+91 84348 82990</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-300 hover:text-green-400 transition-colors cursor-default">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-green-400 border border-white/5">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-lg">Navi Mumbai, India</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <a href="#" className="px-6 py-3 bg-[#0077b5]/20 hover:bg-[#0077b5]/40 border border-[#0077b5]/50 rounded-lg text-white font-medium flex items-center gap-2 transition-all hover:scale-105">
                <Linkedin size={20} /> LinkedIn
              </a>
              <a href="#" className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white font-medium flex items-center gap-2 transition-all hover:scale-105">
                <FileText size={20} /> Medium
              </a>
              <a href="#" className="px-6 py-3 bg-red-600/20 hover:bg-red-600/40 border border-red-500/50 rounded-lg text-white font-medium flex items-center gap-2 transition-all hover:scale-105">
                <Youtube size={20} /> YouTube
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

              <button type="button" className="w-full py-4 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white font-bold rounded-lg shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center gap-2 group">
                <Send size={18} className="group-hover:translate-x-1 transition-transform" /> Transmit
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