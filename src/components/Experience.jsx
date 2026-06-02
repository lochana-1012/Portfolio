import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, ShieldAlert, Award as Trophy, Network, Calendar, ExternalLink, X } from 'lucide-react';

export default function Experience() {
  const [activeCert, setActiveCert] = useState(null);

  const internships = [
    {
      company: "Thirsty Crowz",
      role: "Design & Digital Marketing Intern",
      duration: "2024 - 2025",
      description: "Designed brand visuals and marketing layouts using Canva and Adobe tools. Contributed to establishing and maintaining a consistent visual identity across social and digital channels.",
      color: "border-iot-cyan"
    },
    {
      company: "Internpre Company",
      role: "Front-End Developer Intern (Online)",
      duration: "2023 - 2024",
      description: "Built and deployed responsive, cross-browser web pages using HTML, CSS, and JavaScript. Focused on improving page load performance and mobile usability.",
      color: "border-cyber-green"
    },
    {
      company: "Ether Infotech",
      role: "Data Analyst & ML Intern",
      duration: "2023 - 2024",
      description: "Analyzed and visualized real-world datasets using Python and Power BI. Built and optimized machine learning models to improve prediction accuracy.",
      color: "border-block-purple"
    }
  ];

  const certifications = [
    { name: "Azure AI Fundamentals", issuer: "Microsoft", year: "2025", image: "cert-azure.png" },
    { name: "GIT Certification", issuer: "Prepinsta", year: "2025", image: "cert-git.png" },
    { name: "Database Management System", issuer: "NPTEL", year: "2025", image: "cert-dbms.png" },
    { name: "Getting Started with Microsoft Excel", issuer: "Coursera", year: "2025", image: "cert-excel.png" },
    { name: "Cisco Networking Certification", issuer: "Cisco", year: "2025", image: null }
  ];

  const achievements = [
    { title: "3rd Place - Hackathon", context: "Karunya University, Coimbatore", year: "2026" },
    { title: "2nd Place - Hackathon", context: "Info Institute of Technology, Coimbatore", year: "2025" },
    { title: "Workshop Participation", context: "Hindustan Institute of Technology & CIET", year: "2024" }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-dark-bg grid-bg">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-cyber-green mb-2">My Journey</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white">
            Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-iot-cyan via-cyber-green to-block-purple">Credentials</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-iot-cyan via-cyber-green to-block-purple rounded-full mt-4" />
        </div>

        {/* Dual Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Internships */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display font-semibold text-xl text-white flex items-center gap-2 mb-8">
              <Briefcase className="text-iot-cyan animate-pulse" size={20} /> Work History
            </h3>

            <div className="relative pl-6 border-l border-white/10 space-y-8">
              {internships.map((intern, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative space-y-2 group"
                >
                  {/* Glowing Node Point */}
                  <div className={`absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full bg-dark-bg border-2 ${intern.color} flex items-center justify-center`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:scale-125 transition-transform duration-300" />
                  </div>
                  
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <h4 className="font-semibold text-white text-base tracking-wide group-hover:text-cyber-green transition-colors duration-300">{intern.company}</h4>
                    <span className="flex items-center gap-1 text-[11px] font-mono font-medium text-gray-400 bg-white/5 border border-white/5 px-2 py-0.5 rounded">
                      <Calendar size={10} /> {intern.duration}
                    </span>
                  </div>
                  <p className="text-xs font-mono font-medium text-cyber-green/95">{intern.role}</p>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed pt-1">{intern.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Certs & Achievements */}
          <div className="lg:col-span-6 space-y-12">
            
            {/* Certifications Block */}
            <div className="space-y-6">
              <h3 className="font-display font-semibold text-xl text-white flex items-center gap-2 mb-6">
                <Network className="text-block-purple animate-pulse" size={20} /> Certifications
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => cert.image && setActiveCert(cert)}
                    className={`glass-card p-4 rounded-xl border border-white/5 transition-all duration-300 flex flex-col justify-between ${
                      cert.image ? 'cursor-pointer hover:border-block-purple/40 hover:shadow-[0_0_15px_rgba(138,43,226,0.15)]' : ''
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex justify-between items-start gap-1 flex-wrap">
                        <span className="text-[10px] font-bold font-mono tracking-widest text-block-purple uppercase">{cert.issuer}</span>
                        {cert.image && (
                          <span className="text-[9px] font-semibold text-cyber-green bg-cyber-green/10 border border-cyber-green/20 px-1.5 py-0.5 rounded flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-pulse" /> View Certificate
                          </span>
                        )}
                      </div>
                      <h4 className="font-semibold text-white text-xs sm:text-sm leading-snug tracking-wide">{cert.name}</h4>
                    </div>
                    <span className="text-[10px] font-mono text-gray-500 mt-3 align-bottom block">Issued: {cert.year}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements Block */}
            <div className="space-y-6">
              <h3 className="font-display font-semibold text-xl text-white flex items-center gap-2 mb-6">
                <Trophy className="text-cyber-green" size={20} /> Accomplishments & Hackathons
              </h3>

              <div className="space-y-4">
                {achievements.map((ach, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 5 }}
                    className="glass-card p-4 rounded-xl border border-white/5 hover:border-cyber-green/40 transition-all duration-300 flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-cyber-green/10 border border-cyber-green/20 flex items-center justify-center text-cyber-green shrink-0">
                      <Trophy size={16} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm tracking-wide">{ach.title}</h4>
                      <p className="text-xs text-gray-400 mt-0.5">{ach.context} • {ach.year}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Certificate Viewer Modal */}
      {activeCert && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActiveCert(null)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-3xl w-full bg-dark-card border border-white/10 rounded-2xl overflow-hidden p-2 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveCert(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-black/60 hover:bg-black/90 text-white border border-white/10 transition-colors z-10"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
            
            <div className="p-4 flex flex-col gap-3">
              <div className="border-b border-white/5 pb-2">
                <span className="text-xs font-bold text-block-purple uppercase tracking-wider">{activeCert.issuer}</span>
                <h4 className="text-white font-semibold text-base sm:text-lg">{activeCert.name}</h4>
              </div>
              <img 
                src={`${import.meta.env.BASE_URL}${activeCert.image}`} 
                className="w-full h-auto rounded-lg max-h-[70vh] object-contain bg-white/5 shadow-inner" 
                alt={activeCert.name} 
              />
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
