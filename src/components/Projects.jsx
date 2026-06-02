import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Globe, ArrowUpRight, ExternalLink, ShieldCheck, Database, Droplet } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'IoT', 'Web & Security'];

  const projectsData = [
    {
      title: "Smart Stick for Blind People",
      category: "IoT",
      description: "An assistive smart device for visually impaired users. Utilizes ultrasonic sensors and real-time buzzer/vibration haptic feedback for intelligent obstacle detection and obstacle-free navigation.",
      tech: ["Arduino", "Ultrasonic Sensor", "Vibration Motor", "Buzzer", "Embedded C", "IoT"],
      icon: Cpu,
      accentColor: "from-iot-cyan to-pink-300",
      accentBorder: "group-hover:border-iot-cyan/40",
      glowBg: "rgba(255, 117, 151, 0.05)",
      previewIcon: Cpu,
      demoLink: "#",
      githubLink: "#",
      features: ["Real-time obstacle calculation", "Low-power embedded systems", "Instant haptic warning feedback"]
    },
    {
      title: "Vital View: Real-Time QR Records",
      category: "Web & Security",
      description: "A secure, real-time QR-based records management platform designed to store, instantly verify, and securely fetch vital user files or credentials, improving speed and integrity.",
      tech: ["Python", "Flask/Django", "SQL", "JavaScript", "HTML/CSS"],
      icon: ShieldCheck,
      accentColor: "from-cyber-green to-amber-200",
      accentBorder: "group-hover:border-cyber-green/40",
      glowBg: "rgba(255, 209, 102, 0.05)",
      previewIcon: Database,
      demoLink: "#",
      githubLink: "#",
      features: ["Unique dynamic QR encoding", "Secure database encryption", "High-speed document fetching"]
    },
    {
      title: "Smart Water Quality System",
      category: "IoT",
      description: "An environmental IoT solution analyzing water purity metrics in real-time. Features multi-sensor arrays calculating pH, turbidity, and temperature, pushing instant danger alerts.",
      tech: ["Arduino", "pH Sensor", "Turbidity Sensor", "Temperature Sensor", "IoT Cloud", "Embedded C"],
      icon: Droplet,
      accentColor: "from-block-purple to-emerald-200",
      accentBorder: "group-hover:border-block-purple/40",
      glowBg: "rgba(6, 214, 160, 0.05)",
      previewIcon: Droplet,
      demoLink: "#",
      githubLink: "#",
      status: "In Development",
      features: ["Multi-metric sensor calibration", "Automated alert notification", "Real-time chart visualization"]
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-block-purple mb-2">My Work</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-iot-cyan via-cyber-green to-block-purple">Projects</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-iot-cyan via-cyber-green to-block-purple rounded-full mt-4" />
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 ${
                filter === cat
                  ? 'bg-white/10 text-white border border-white/20'
                  : 'bg-transparent text-gray-400 border border-transparent hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -8 }}
                  className="glass-card rounded-2xl overflow-hidden border border-white/5 flex flex-col h-full group hover:border-white/10 transition-all duration-300 relative"
                  style={{ '--glow-bg': project.glowBg }}
                >
                  {/* Decorative background hover glow */}
                  <div className="absolute inset-0 bg-[var(--glow-bg)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Project Image Placeholder / Header Tech Graphic */}
                  <div className={`h-48 bg-gradient-to-br ${project.accentColor} p-6 flex flex-col justify-between relative overflow-hidden`}>
                    {/* SVG Graphic patterns for extra depth */}
                    <div className="absolute inset-0 grid-bg opacity-20" />
                    
                    <div className="flex justify-between items-start z-10">
                      <span className="px-2.5 py-1 rounded bg-black/40 backdrop-blur-md text-[10px] font-semibold text-white uppercase tracking-wider">
                        {project.category}
                      </span>
                      {project.status && (
                        <span className="px-2.5 py-1 rounded bg-cyber-green/90 text-[10px] font-semibold text-black uppercase tracking-wider animate-pulse">
                          {project.status}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex justify-between items-end z-10">
                      <div className="w-12 h-12 rounded-xl bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/10">
                        <IconComponent size={24} />
                      </div>
                      
                      <div className="flex gap-2">
                        <a 
                          href={project.githubLink}
                          className="w-8 h-8 rounded-lg bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black border border-white/10 transition-colors duration-300"
                          aria-label="GitHub Repository"
                        >
                          <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </a>
                        <a 
                          href={project.demoLink}
                          className="w-8 h-8 rounded-lg bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black border border-white/10 transition-colors duration-300"
                        >
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-grow flex flex-col justify-between relative z-10">
                    <div className="space-y-4">
                      <h3 className="font-display font-bold text-white text-lg tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Features bullets */}
                      <ul className="space-y-1 pt-2">
                        {project.features.map((feat, fidx) => (
                          <li key={fidx} className="flex items-center gap-2 text-xs text-gray-300">
                            <span className="w-1 h-1 rounded-full bg-cyber-green" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-white/5">
                      {project.tech.map((t) => (
                        <span 
                          key={t}
                          className="px-2 py-0.5 rounded text-[10px] font-semibold text-gray-400 bg-white/5 border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
