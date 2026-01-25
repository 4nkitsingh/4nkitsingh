import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Database, Terminal, Shield, Search, X, Crosshair, FileText, ExternalLink, BookOpen } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogCard = ({ post, index }: { post: any, index: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  // Mouse tracking logic for 3D Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-[450px] w-full perspective-1000 group cursor-pointer"
    >
      <Link to={`/blog/${post.slug}`} className="block h-full">
        <div className={`absolute inset-0 bg-gradient-to-br ${post.category === 'walkthrough' ? 'from-green-500/10 via-emerald-500/5 to-cyan-500/10' : 'from-cyan-500/10 via-purple-500/5 to-blue-500/10'} rounded-2xl transform translate-z-0 group-hover:scale-[0.98] transition-transform duration-500 border border-white/5 ${post.category === 'walkthrough' ? 'group-hover:border-green-500/40' : 'group-hover:border-cyan-500/40'} shadow-2xl backdrop-blur-sm`}>
          
          {/* Neon Glow on Hover */}
          <div className={`absolute inset-0 ${post.category === 'walkthrough' ? 'bg-green-500/20' : 'bg-cyan-500/20'} blur-[50px] opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-2xl`} />

          {/* Content Wrapper */}
          <div className="relative h-full flex flex-col p-6 rounded-2xl overflow-hidden" style={{ transform: "translateZ(20px)" }}>
            
            {/* Holographic Overlay Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay pointer-events-none" />

            {/* Image Section */}
            <div className={`relative h-48 w-full rounded-xl overflow-hidden mb-6 shadow-lg border border-white/10 ${post.category === 'walkthrough' ? 'group-hover:border-green-400/30' : 'group-hover:border-cyan-400/30'} transition-colors`} style={{ transform: "translateZ(40px)" }}>
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute top-3 right-3">
                 <span className={`px-2 py-1 ${post.category === 'walkthrough' ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'} text-[10px] font-bold uppercase tracking-wider rounded border backdrop-blur-md`}>
                    {post.category === 'walkthrough' ? 'Walkthrough' : 'Article'}
                 </span>
              </div>
              
              {/* Tags */}
              <div className="absolute bottom-3 left-3 flex gap-2">
                 {post.tags.slice(0, 1).map((tag: string) => (
                    <span key={tag} className={`px-2 py-1 ${post.category === 'walkthrough' ? 'bg-green-500/80 text-black shadow-[0_0_10px_rgba(34,197,94,0.6)]' : 'bg-cyan-500/80 text-black shadow-[0_0_10px_rgba(6,182,212,0.6)]'} text-[10px] font-bold uppercase tracking-wider rounded backdrop-blur-md`}>
                       {tag}
                    </span>
                 ))}
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 flex flex-col" style={{ transform: "translateZ(30px)" }}>
              <div className="flex justify-between items-center text-xs text-gray-400 font-mono mb-3">
                 <span className="flex items-center gap-1"><Calendar size={12} className={post.category === 'walkthrough' ? 'text-green-400' : 'text-cyan-400'}/> {post.date}</span>
                 <span className="flex items-center gap-1"><Clock size={12} className="text-purple-400"/> {post.readTime}</span>
              </div>

              <h2 className={`text-xl font-bold text-white mb-2 leading-tight ${post.category === 'walkthrough' ? 'group-hover:text-green-300' : 'group-hover:text-cyan-300'} transition-colors`}>
                 {post.title}
              </h2>
              
              <p className="text-sm text-gray-400 line-clamp-2 mb-4">
                 {post.excerpt}
              </p>

              <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                 <div className={`text-xs font-mono text-gray-500 ${post.category === 'walkthrough' ? 'group-hover:text-green-400' : 'group-hover:text-cyan-400'} transition-colors`}>
                    {post.category === 'walkthrough' ? 'TARGET: COMPROMISED' : 'SEC_LEVEL: HIGH'}
                 </div>
                 <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center ${post.category === 'walkthrough' ? 'group-hover:bg-green-500' : 'group-hover:bg-cyan-500'} group-hover:text-black transition-all duration-300`}>
                    <ArrowRight size={14} />
                 </div>
              </div>
            </div>
            
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<'article' | 'walkthrough'>('article');
  const [isMediumHovered, setIsMediumHovered] = useState(false);

  const filteredPosts = blogPosts.filter(post => 
    post.category === activeTab &&
    (post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 bg-[#05070a] relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
         <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px]" />
         <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px]" />
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Modern 3D Header */}
        <div className="flex flex-col items-center text-center mb-12">
           <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             className="relative inline-block"
           >
              <h1 className="text-6xl md:text-8xl font-black font-space-grotesk tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 relative z-10">
                 INTEL<span className={activeTab === 'walkthrough' ? "text-green-500" : "text-cyan-500"}>.LOG</span>
              </h1>
           </motion.div>
           
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="text-xl text-gray-400 mt-6 max-w-2xl font-light"
           >
              {activeTab === 'article' 
                ? "Encrypted transmissions from the offensive security frontline." 
                : "Tactical debriefs and step-by-step exploitation guides."}
           </motion.p>
        </div>

        {/* --- TAB SWITCHER --- */}
        <div className="flex justify-center mb-12">
            <div className="relative bg-[#0d1117] p-1.5 rounded-2xl border border-white/10 flex items-center shadow-2xl">
                {/* Sliding Background */}
                <motion.div 
                    className={`absolute top-1.5 bottom-1.5 rounded-xl ${activeTab === 'article' ? 'bg-cyan-600/20' : 'bg-green-600/20'}`}
                    initial={false}
                    animate={{ 
                        x: activeTab === 'article' ? 0 : '100%',
                        width: '50%' 
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
                
                <button 
                    onClick={() => setActiveTab('article')}
                    className={`relative z-10 px-8 py-3 rounded-xl flex items-center gap-2 font-bold font-mono transition-colors duration-300 ${activeTab === 'article' ? 'text-cyan-400' : 'text-gray-500 hover:text-gray-300'}`}
                >
                    <FileText size={18} /> ARTICLES
                </button>
                <button 
                    onClick={() => setActiveTab('walkthrough')}
                    className={`relative z-10 px-8 py-3 rounded-xl flex items-center gap-2 font-bold font-mono transition-colors duration-300 ${activeTab === 'walkthrough' ? 'text-green-400' : 'text-gray-500 hover:text-gray-300'}`}
                >
                    <Crosshair size={18} /> CTF WALKTHROUGHS
                </button>
            </div>
        </div>

        {/* Search Bar - Liquid Glass UI */}
        <div className="max-w-2xl mx-auto mb-16 relative z-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative group"
            >
                {/* Neon Glow under search */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${activeTab === 'walkthrough' ? 'from-green-500 to-emerald-500' : 'from-cyan-500 to-purple-500'} rounded-xl blur opacity-25 group-hover:opacity-75 transition-all duration-1000 group-hover:duration-200`} />
                
                <div className="relative flex items-center bg-[#0b0f14]/80 backdrop-blur-xl rounded-xl border border-white/10 p-2 shadow-2xl">
                   <div className="pl-4 pr-2 text-gray-400">
                      <Search size={20} />
                   </div>
                   <input 
                      type="text"
                      placeholder={activeTab === 'article' ? "Search articles (e.g., AD, JWT, Protocols)..." : "Search targets (e.g., HTB, Windows, PrivEsc)..."}
                      className="w-full bg-transparent text-white placeholder-gray-500 px-2 py-3 focus:outline-none font-mono text-sm"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                   />
                   {searchQuery && (
                      <button 
                        onClick={() => setSearchQuery('')} 
                        className="p-2 text-gray-500 hover:text-white transition-colors"
                      >
                         <X size={16} />
                      </button>
                   )}
                   <div className="hidden md:block px-3 py-1.5 mx-2 bg-white/5 rounded-lg text-xs text-gray-500 font-mono border border-white/5 shadow-inner">
                      FILTERS: ON
                   </div>
                </div>
            </motion.div>
        </div>

        {/* Categories / Stats Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 items-center">
           <div className={`px-6 py-2 rounded-full border text-sm font-mono flex items-center gap-2 ${activeTab === 'walkthrough' ? 'bg-green-900/10 border-green-500/20 text-green-400' : 'bg-cyan-900/10 border-cyan-500/20 text-cyan-400'}`}>
              <Database size={14} /> Total: {filteredPosts.length} Entries
           </div>
           
           {/* Showcase: Medium Blog Button Container */}
           <div 
             className="relative"
             onMouseEnter={() => setIsMediumHovered(true)}
             onMouseLeave={() => setIsMediumHovered(false)}
           >
             {/* Big Stylish Page-like Pop-up */}
             <AnimatePresence>
               {isMediumHovered && (
                 <motion.div
                   initial={{ opacity: 0, y: 30, scale: 0.9, rotateX: -10 }}
                   animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                   exit={{ opacity: 0, y: 30, scale: 0.9, rotateX: -10 }}
                   transition={{ type: "spring", stiffness: 300, damping: 25 }}
                   style={{ transformOrigin: "bottom center" }}
                   className="absolute bottom-full left-1/2 -translate-x-1/2 mb-8 w-[90vw] md:w-[450px] bg-[#05070a] border border-white/20 rounded-2xl p-8 z-50 shadow-[0_0_100px_rgba(255,255,255,0.2)] overflow-hidden"
                 >
                    {/* Decorative Background Elements */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay" />
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-50" />
                    <div className="absolute -right-20 -top-20 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -left-20 bottom-0 w-40 h-40 bg-gray-500/10 rounded-full blur-3xl pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col items-center text-center">
                       <div className="w-16 h-16 bg-white text-black rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_25px_rgba(255,255,255,0.3)] transform rotate-3">
                           <BookOpen size={32} />
                       </div>
                       
                       <h3 className="text-3xl font-bold font-space-grotesk text-white mb-3 leading-tight tracking-tight">
                         Knowledge Repository
                       </h3>
                       
                       <div className="w-12 h-1 bg-white/20 rounded-full mb-6" />

                       <p className="text-gray-300 text-lg leading-relaxed font-light">
                         "In Medium I share <span className="text-white font-bold border-b border-white/40 pb-0.5">updated notes</span>, comprehensive <span className="text-white font-bold border-b border-white/40 pb-0.5">guides</span> and security <span className="text-white font-bold border-b border-white/40 pb-0.5">best practices</span>."
                       </p>
                       
                       <div className="mt-6 flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest">
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Live Feed
                       </div>
                    </div>
                 </motion.div>
               )}
             </AnimatePresence>

             {/* The Trigger Button */}
             <motion.a 
               href="https://4nkit.medium.com/" 
               target="_blank" 
               rel="noopener noreferrer"
               whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,255,255,0.4)" }}
               whileTap={{ scale: 0.95 }}
               className="px-6 py-2 rounded-full bg-white text-black font-bold font-mono text-sm flex items-center gap-2 transition-all duration-300 group shadow-[0_0_15px_rgba(255,255,255,0.2)] border border-transparent hover:bg-gray-100 relative z-10"
             >
                <FileText size={16} className="text-black group-hover:scale-110 transition-transform" /> 
                <span>Read on Medium</span>
                <ExternalLink size={14} className="opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
             </motion.a>
           </div>
        </div>

        {/* 3D Grid Layout */}
        <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 perspective-2000"
        >
          <AnimatePresence mode='popLayout'>
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, idx) => (
                <BlogCard key={post.id} post={post} index={idx} />
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full text-center py-20"
              >
                  <div className="inline-block p-6 rounded-full bg-white/5 border border-white/10 mb-4">
                     <Search size={40} className="text-gray-600" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">No Records Found</h3>
                  <p className="text-gray-400">Refine your search parameters or check a different frequency.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
};

export default Blog;