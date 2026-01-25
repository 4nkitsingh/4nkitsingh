import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Terminal, Shield, ChevronDown, Share2, Crosshair } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Subtle parallax for Hero
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.3]);
  const heroBlur = useTransform(scrollY, [0, 500], [0, 10]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#05070a] text-white flex flex-col items-center justify-center p-4">
         <Shield size={48} className="text-red-500 mb-4" />
         <h2 className="text-2xl font-bold mb-4">404: Intel Not Found</h2>
         <Link to="/blog" className="text-cyan-400 hover:underline">Return to Base</Link>
      </div>
    );
  }

  const isWalkthrough = post.category === 'walkthrough';

  return (
    <article className="min-h-screen bg-[#05070a] text-gray-200 font-sans selection:bg-cyan-500/30 selection:text-white pb-32">
       
       {/* Reading Progress Bar */}
       <motion.div
          className={`fixed top-0 left-0 right-0 h-1 bg-gradient-to-r ${isWalkthrough ? 'from-green-400 via-emerald-500 to-green-400' : 'from-cyan-400 via-purple-500 to-cyan-400'} origin-left z-50 shadow-[0_0_15px_rgba(6,182,212,0.5)]`}
          style={{ scaleX }}
       />

       {/* --- HERO SECTION --- */}
       <div ref={heroRef} className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
          <motion.div 
            style={{ y: heroY, opacity: heroOpacity, filter: `blur(${heroBlur}px)` }} // Needs template literal for blur
            className="absolute inset-0 z-0"
          >
             <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[#05070a]/50 to-[#05070a] z-10" />
             <img src={post.image} alt="Background" className="w-full h-full object-cover" />
          </motion.div>
          
          <div className="container mx-auto px-4 max-w-5xl relative z-10 pt-20 text-center">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
             >
                <Link to="/blog" className={`inline-flex items-center text-sm font-medium ${isWalkthrough ? 'text-green-400 hover:border-green-500/30' : 'text-cyan-400 hover:border-cyan-500/30'} mb-8 px-5 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all`}>
                   <ArrowLeft size={16} className="mr-2" /> {isWalkthrough ? 'Back to CTF Walkthroughs' : 'Back to Articles'}
                </Link>
                
                <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk tracking-tight text-white mb-8 leading-[1.1] drop-shadow-2xl">
                   {post.title}
                </h1>
                
                <div className="flex flex-wrap justify-center gap-6 text-gray-300 font-mono text-sm uppercase tracking-wider bg-black/30 backdrop-blur-sm inline-block px-8 py-4 rounded-2xl border border-white/5">
                   <span className={`flex items-center gap-2 ${isWalkthrough ? 'text-green-400' : 'text-cyan-400'}`}>
                      {isWalkthrough ? <Crosshair size={16} /> : <Calendar size={16} />} 
                      {post.date}
                   </span>
                   <span className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                   <span className="flex items-center gap-2"><Clock size={16} className="text-purple-400"/> {post.readTime}</span>
                   <span className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                   <span className="flex items-center gap-2"><Shield size={16} className={isWalkthrough ? "text-red-400" : "text-green-400"}/> {post.tags[0]}</span>
                </div>
             </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce"
          >
            <ChevronDown size={32} />
          </motion.div>
       </div>

       {/* --- CONTENT BODY --- */}
       <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <div className="space-y-12 md:space-y-16">
             {post.content.map((block, idx) => {
                // Determine block type and render accordingly
                switch (block.type) {
                   case 'heading':
                      return (
                         <motion.div 
                           key={idx}
                           initial={{ opacity: 0, y: 20 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true, margin: "-50px" }}
                           transition={{ duration: 0.6 }}
                           className="pt-12 md:pt-16 first:pt-0"
                         >
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-space-grotesk leading-tight tracking-tight">
                               {block.value}
                            </h2>
                            <div className={`h-1 w-20 bg-gradient-to-r ${isWalkthrough ? 'from-green-500 to-emerald-500' : 'from-cyan-500 to-purple-500'} rounded-full opacity-80`} />
                         </motion.div>
                      );

                   case 'subheading':
                      return (
                         <motion.div 
                           key={idx}
                           initial={{ opacity: 0, y: 20 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           className="pt-8"
                         >
                            <h3 className={`text-2xl font-bold ${isWalkthrough ? 'text-green-100' : 'text-cyan-100'} mb-4 flex items-center gap-3`}>
                               <span className={`w-2 h-2 ${isWalkthrough ? 'bg-green-400' : 'bg-cyan-400'} rounded-full`} />
                               {block.value}
                            </h3>
                         </motion.div>
                      );

                   case 'paragraph':
                      return (
                         <motion.p 
                           key={idx}
                           initial={{ opacity: 0, y: 10 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ duration: 0.5 }}
                           className="text-lg md:text-xl text-gray-200 leading-relaxed font-normal"
                         >
                            {block.value}
                         </motion.p>
                      );

                   case 'list':
                      return (
                         <motion.ul 
                           key={idx}
                           initial={{ opacity: 0, x: -10 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true }}
                           className="space-y-4 pl-6 border-l-2 border-white/10 my-8"
                         >
                            {(block.value as string[]).map((item, i) => (
                               <li key={i} className="text-lg text-gray-300 leading-relaxed flex items-start gap-3">
                                  <div className={`mt-2.5 w-1.5 h-1.5 rounded-full ${isWalkthrough ? 'bg-green-500' : 'bg-cyan-500'} flex-shrink-0`} />
                                  <span>{item}</span>
                               </li>
                            ))}
                         </motion.ul>
                      );

                   case 'code':
                      return (
                         <motion.div 
                           key={idx}
                           initial={{ opacity: 0, scale: 0.98 }}
                           whileInView={{ opacity: 1, scale: 1 }}
                           viewport={{ once: true, margin: "-100px" }}
                           transition={{ duration: 0.6 }}
                           className="my-10"
                         >
                            <div className="rounded-2xl overflow-hidden bg-[#0d1117] border border-white/10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]">
                               {/* Mac-style Window Header */}
                               <div className="flex items-center justify-between px-5 py-3 bg-[#161b22] border-b border-white/5">
                                  <div className="flex gap-2">
                                     <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                     <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                     <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                                  </div>
                                  <div className="flex items-center gap-2 opacity-50">
                                     <Terminal size={12} className="text-gray-400" />
                                     <span className="text-xs font-mono text-gray-400 uppercase">{block.language || 'Code'}</span>
                                  </div>
                               </div>
                               <div className="p-6 md:p-8 overflow-x-auto">
                                  <pre className="font-mono text-sm md:text-base leading-relaxed text-blue-100">
                                     <code>{block.value}</code>
                                  </pre>
                               </div>
                            </div>
                         </motion.div>
                      );

                   case 'image':
                      return (
                         <motion.div 
                           key={idx}
                           initial={{ opacity: 0, scale: 0.95 }}
                           whileInView={{ opacity: 1, scale: 1 }}
                           viewport={{ once: true }}
                           transition={{ duration: 0.8 }}
                           className="my-12"
                         >
                            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                               <img 
                                 src={block.value as string} 
                                 alt={block.caption || 'Illustration'} 
                                 className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" 
                               />
                               {block.caption && (
                                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                                     <p className="text-sm font-mono text-cyan-400 uppercase tracking-widest text-center">{block.caption}</p>
                                  </div>
                               )}
                            </div>
                         </motion.div>
                      );
                   default:
                      return null;
                }
             })}
          </div>

          {/* --- FOOTER --- */}
          <div className="mt-32 pt-10 border-t border-white/10">
             <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 p-[1px]">
                      <div className="w-full h-full rounded-xl bg-black flex items-center justify-center">
                         <span className="text-lg font-bold text-white">4S</span>
                      </div>
                   </div>
                   <div>
                      <h4 className="text-white font-bold">Written by 4nkitsingh</h4>
                      <p className="text-sm text-gray-500">Offensive Security Specialist</p>
                   </div>
                </div>
                
                <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-medium transition-colors text-gray-300 hover:text-white border border-white/5">
                        <Share2 size={16} /> Share Intel
                    </button>
                    <Link to="/blog" className={`flex items-center gap-2 px-4 py-2 ${isWalkthrough ? 'bg-green-600/10 hover:bg-green-600/20 text-green-400 border-green-500/20' : 'bg-cyan-600/10 hover:bg-cyan-600/20 text-cyan-400 border-cyan-500/20'} rounded-lg text-sm font-medium transition-colors border`}>
                        View All Logs
                    </Link>
                </div>
             </div>
          </div>
       </div>

    </article>
  );
};

export default BlogPost;