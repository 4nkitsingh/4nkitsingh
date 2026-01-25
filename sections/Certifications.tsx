import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, Shield, X, Maximize2 } from 'lucide-react';

const certs = [
  {
    name: "OSCP",
    title: "Offensive Security Certified Professional",
    date: "June 2024",
    styles: {
        glow: "bg-red-500/20",
        hoverGlow: "group-hover:bg-red-500/40",
        border: "border-red-500",
        text: "text-red-400",
        hoverText: "hover:text-red-300",
        shadow: "shadow-[0_0_30px_rgba(239,68,68,0.3)]"
    },
    link: "https://www.credential.net/d757f388-15c9-4012-a629-6db3653acb9f?trk=public_profile_see-credential#gs.b47ksl",
    certImage: "https://media.licdn.com/dms/image/v2/D4D22AQG4b8eoEm1c2Q/feedshare-shrink_800/feedshare-shrink_800/0/1719061096410?e=1770854400&v=beta&t=Z6Ao9-YWgUB8MIrBKUY4qO9IXQGDWrqQSte1flC2RBE"
  },
  {
    name: "CEH",
    title: "Certified Ethical Hacker",
    date: "August 2023",
    styles: {
        glow: "bg-blue-500/20",
        hoverGlow: "group-hover:bg-blue-500/40",
        border: "border-blue-500",
        text: "text-blue-400",
        hoverText: "hover:text-blue-300",
        shadow: "shadow-[0_0_30px_rgba(59,130,246,0.3)]"
    },
    link: "https://aspen.eccouncil.org/VerifyBadge?type=certification&a=uvwonILVn01xFzNW+WgQxw4OSG25XOi5MiJ9WCMSVr0=&trk=public_profile_see-credential",
    certImage: "https://media.licdn.com/dms/image/sync/v2/D4D27AQHChOJ_0ROG6Q/articleshare-shrink_800/articleshare-shrink_800/0/1754692580023?e=1769958000&v=beta&t=pql_bcoF2Uv16bloUT0sH_8GeI7Ad6MYVrEXdz9vZD8"
  },
  {
    name: "CSE",
    title: "Cyber Security Expert",
    date: "August 2023",
    styles: {
        glow: "bg-purple-500/20",
        hoverGlow: "group-hover:bg-purple-500/40",
        border: "border-purple-500",
        text: "text-purple-400",
        hoverText: "hover:text-purple-300",
        shadow: "shadow-[0_0_30px_rgba(168,85,247,0.3)]"
    },
    link: "https://success.simplilearn.com/6974fb77-5f7a-45e3-be6a-df0f69e1934b?trk=public_profile_see-credential",
    certImage: "https://media.licdn.com/dms/image/v2/D5622AQHK5f6CEPD6dQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1692659561979?e=1770854400&v=beta&t=csODA8FUvY_16GQZ3EDKpC1TiSxXQXGRv8CLVSowGTM"
  }
];

interface CertificationBadgeProps {
  cert: typeof certs[0];
  index: number;
  onActivate: (cert: typeof certs[0]) => void;
}

const CertificationBadge: React.FC<CertificationBadgeProps> = ({ cert, index, onActivate }) => {
    // Only add interaction if a certImage is defined
    const hasInteraction = !!cert.certImage;

    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="flex flex-col items-center group"
        >
            {/* 3D Badge Area - Hover Trigger 1 */}
            <div 
                className={`relative w-40 h-40 mb-8 ${hasInteraction ? 'cursor-zoom-in' : 'cursor-pointer'}`}
                onMouseEnter={() => hasInteraction && onActivate(cert)}
            >
                {/* Ambient Glow */}
                <div className={`absolute inset-0 ${cert.styles.glow} blur-3xl rounded-full ${cert.styles.hoverGlow} transition-all duration-500`} />
                
                {/* Rotating Container */}
                <motion.div 
                    animate={{ rotateY: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: index * 2 }}
                    className="w-full h-full relative preserve-3d"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    <div className={`absolute inset-0 bg-gradient-to-br from-gray-900 to-black border-2 ${cert.styles.border} rounded-full flex items-center justify-center ${cert.styles.shadow} backdrop-blur-md`}>
                        <div className="text-center transform translate-z-10">
                            <Shield size={36} className={`mx-auto ${cert.styles.text} mb-2 drop-shadow-md`} />
                            <div className="font-black text-white text-xl tracking-tighter">{cert.name}</div>
                        </div>
                        {/* Inner Ring */}
                        <div className="absolute inset-2 border border-dashed border-white/20 rounded-full" />
                    </div>
                </motion.div>
                
                {hasInteraction && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[10px] px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
                        View Certificate
                    </div>
                )}
            </div>

            {/* Text Details */}
            <div className="text-center max-w-xs z-10">
                <div className={`inline-block px-3 py-1 mb-3 rounded-full bg-white/5 border border-white/10 ${cert.styles.text} text-xs font-bold tracking-widest font-mono`}>
                    VERIFIED
                </div>
                
                {/* Title - Hover Trigger 2 */}
                <h3 
                    className={`text-2xl font-bold text-white mb-2 ${hasInteraction ? 'hover:text-cyan-400 cursor-zoom-in transition-colors' : ''}`}
                    onMouseEnter={() => hasInteraction && onActivate(cert)}
                >
                    {cert.title}
                </h3>
                
                <p className="text-sm text-gray-400 mb-4">{cert.date}</p>

                <a 
                    href={cert.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-sm font-medium ${cert.styles.text} ${cert.styles.hoverText} transition-colors group/link`}
                >
                    <span>View Credential</span>
                    <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
            </div>
        </motion.div>
    );
}

const Certifications: React.FC = () => {
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);
  const [activeCert, setActiveCert] = useState<typeof certs[0] | null>(null);

  const closeOverlay = () => setActiveCert(null);

  return (
    <section className="py-24 bg-gradient-to-b from-transparent to-[#05070a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[128px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16">
            {/* Modern Interactive Header */}
            <div 
                className="flex flex-col items-center gap-4 mb-8 cursor-pointer group w-fit"
                onMouseEnter={() => setIsHeaderHovered(true)}
                onMouseLeave={() => setIsHeaderHovered(false)}
            >
                <div className="flex items-center gap-4">
                    <h2 className="text-5xl md:text-7xl font-black text-white font-space-grotesk tracking-tighter transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500">
                        Credentials
                    </h2>
                    <motion.div 
                        animate={{ rotate: isHeaderHovered ? 180 : 0, scale: isHeaderHovered ? 1.2 : 1 }}
                        className="p-2 rounded-full border border-white/10 bg-white/5 text-gray-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-colors"
                    >
                        <Award size={32} />
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
                    // AUTHORIZED_PERSONNEL
                </p>
            </div>

            <p className="text-gray-400 max-w-xl mx-auto text-center">
                Industry-recognized credentials validating advanced offensive security expertise.
            </p>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-24">
            {certs.map((cert, idx) => (
                <CertificationBadge 
                    key={idx} 
                    cert={cert} 
                    index={idx} 
                    onActivate={setActiveCert}
                />
            ))}
        </div>
      </div>

      {/* Full Screen Popup Overlay */}
      <AnimatePresence>
        {activeCert && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
                onClick={closeOverlay} // Click outside to close
            >
                <motion.div 
                    initial={{ scale: 0.9, y: 20, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 0.9, y: 20, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="relative max-w-5xl w-full max-h-[90vh] flex flex-col bg-[#0b0f14] border border-cyan-500/30 rounded-2xl p-1 shadow-[0_0_100px_rgba(6,182,212,0.15)] overflow-hidden"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
                >
                     {/* Close Button - More prominent */}
                     <button 
                        onClick={closeOverlay}
                        className="absolute top-4 right-4 z-50 p-2 bg-black/60 hover:bg-red-500 border border-white/10 hover:border-red-400 rounded-full text-white transition-all duration-300 hover:rotate-90 shadow-lg"
                        title="Close Overlay"
                     >
                        <X size={24} />
                     </button>

                     {/* Image Container - Big Showcase */}
                     <div className="relative flex-1 rounded-xl overflow-hidden bg-[#05070a] flex items-center justify-center p-4">
                        {/* Background Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
                        
                        {/* Scanline Animation */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500/50 shadow-[0_0_15px_rgba(34,211,238,0.8)] animate-scan opacity-20 pointer-events-none" />

                        {activeCert.certImage && (
                            <div className="relative group/image">
                                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-20 group-hover/image:opacity-40 transition duration-500"></div>
                                <img 
                                    src={activeCert.certImage} 
                                    alt={activeCert.name} 
                                    className="relative max-h-[75vh] w-auto object-contain rounded-lg border border-white/10 shadow-2xl"
                                />
                            </div>
                        )}
                     </div>

                     {/* Footer Info */}
                     <div className="p-4 bg-[#0f141a] border-t border-white/5 flex items-center justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-white">{activeCert.name}</h3>
                            <p className="text-cyan-400 font-mono text-xs uppercase tracking-widest">{activeCert.title}</p>
                        </div>
                        <div className="flex items-center gap-3">
                             <a 
                                href={activeCert.link} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                             >
                                <ExternalLink size={16} /> Verify
                             </a>
                        </div>
                     </div>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Certifications;