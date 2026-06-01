import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Cpu, Shield, Database, Mail } from 'lucide-react';

export default function Hero() {
  const words = [
    "IoT Specialist",
    "Cybersecurity Analyst",
    "Blockchain Developer",
    "Computer Science Engineer"
  ];
  
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      // Pause at full word
      const timeout = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden grid-bg">
      {/* Glow Ambient Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-iot-cyan/15 blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-block-purple/15 blur-[120px] animate-pulse-slow [animation-delay:2s]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyber-green/10 blur-[150px] animate-pulse-slow [animation-delay:4s]" />

      <div className="max-w-7xl mx-auto px-6 z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Welcome Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyber-green animate-ping" />
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-300">Available for Placements & Internships</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight text-white max-w-5xl leading-tight">
            Hi, I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-iot-cyan via-cyber-green to-block-purple">Lochana B</span>
          </h1>

          {/* Typewriter Specializations */}
          <div className="h-10 sm:h-12 flex items-center justify-center">
            <h2 className="font-display font-semibold text-lg sm:text-2xl md:text-3xl text-gray-300">
              Specializing in <span className="text-white border-r-2 border-cyber-green pr-1 animate-pulse">
                {words[index].substring(0, subIndex)}
              </span>
            </h2>
          </div>

          {/* Core Tagline */}
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mt-2">
            A motivated CSE student at SNS College of Engineering, Coimbatore. Passionate about building decentralized systems, hacking networks ethically, and programming IoT devices.
          </p>

          {/* Floating Skill Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <motion.div 
              whileHover={{ y: -5 }} 
              className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-xs font-medium text-white glow-cyan-hover transition-all duration-300"
            >
              <Cpu size={14} className="text-iot-cyan" />
              <span>Internet of Things (IoT)</span>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }} 
              className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-xs font-medium text-white glow-green-hover transition-all duration-300"
            >
              <Shield size={14} className="text-cyber-green" />
              <span>Cybersecurity</span>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }} 
              className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-xs font-medium text-white glow-purple-hover transition-all duration-300"
            >
              <Database size={14} className="text-block-purple" />
              <span>Blockchain Tech</span>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href="#projects"
              className="group flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-black bg-gradient-to-r from-iot-cyan via-cyber-green to-block-purple hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-cyber-green/10"
            >
              <span>View Projects</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 active:scale-[0.98] transition-all duration-300"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 mt-12">
            <a 
              href="https://linkedin.com/in/lochana-b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a 
              href="mailto:chanarchu2005@gmail.com"
              className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Absolute floating micro-particles */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Scroll Down</span>
        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1 h-3 rounded-full bg-gray-500" 
        />
      </div>
    </section>
  );
}
