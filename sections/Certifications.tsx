import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Shield } from 'lucide-react';

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
    link: "https://www.credential.net/d757f388-15c9-4012-a629-6db3653acb9f?trk=public_profile_see-credential#gs.b47ksl"
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
    link: "https://aspen.eccouncil.org/VerifyBadge?type=certification&a=uvwonILVn01xFzNW+WgQxw4OSG25XOi5MiJ9WCMSVr0=&trk=public_profile_see-credential"
  },
  {
    name: "CSE",
    title: "Cyber Security Expert - Simplilearn",
    date: "August 2023",
    styles: {
        glow: "bg-purple-500/20",
        hoverGlow: "group-hover:bg-purple-500/40",
        border: "border-purple-500",
        text: "text-purple-400",
        hoverText: "hover:text-purple-300",
        shadow: "shadow-[0_0_30px_rgba(168,85,247,0.3)]"
    },
    link: "https://success.simplilearn.com/6974fb77-5f7a-45e3-be6a-df0f69e1934b?trk=public_profile_see-credential"
  }
];

const CertificationBadge = ({ cert, index }: { cert: typeof certs[0], index: number }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="flex flex-col items-center group"
        >
            {/* 3D Badge Area */}
            <div className="relative w-40 h-40 mb-8 cursor-pointer">
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
            </div>

            {/* Text Details */}
            <div className="text-center max-w-xs z-10">
                <div className={`inline-block px-3 py-1 mb-3 rounded-full bg-white/5 border border-white/10 ${cert.styles.text} text-xs font-bold tracking-widest font-mono`}>
                    VERIFIED
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{cert.date}</p>

                <a 
                    href={cert.link} 
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
  return (
    <section className="py-24 bg-gradient-to-b from-transparent to-[#05070a] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[128px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4 font-space-grotesk text-white">Global Certifications</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
                Industry-recognized credentials validating advanced offensive security expertise.
            </p>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-24">
            {certs.map((cert, idx) => (
                <CertificationBadge key={idx} cert={cert} index={idx} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
