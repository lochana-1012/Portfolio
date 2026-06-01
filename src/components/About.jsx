import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, GraduationCap, MapPin, Milestone } from 'lucide-react';

export default function About() {
  const education = [
    {
      institution: "SNS College of Engineering",
      location: "Coimbatore, Tamil Nadu",
      degree: "Bachelor of Engineering - Computer Science and Engineering",
      specialization: "IoT, Cyber Security including Blockchain Technology",
      duration: "2023 - 2027",
      grade: "CGPA: 8.42",
      icon: GraduationCap,
      color: "text-iot-cyan",
      borderColor: "hover:border-iot-cyan/40"
    },
    {
      institution: "Government Model Girls Higher Secondary School",
      location: "Villupuram, Tamil Nadu",
      degree: "HSS (Higher Secondary School)",
      specialization: "State Board - Computer Science Stream",
      duration: "2022 - 2023",
      grade: "Percentage: 79%",
      icon: BookOpen,
      color: "text-cyber-green",
      borderColor: "hover:border-cyber-green/40"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-cyber-green mb-2">Who I Am</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-iot-cyan to-cyber-green">Me</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-iot-cyan to-cyber-green rounded-full mt-4" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            {/* Tech Wireframe Avatar Container */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl p-[1px] bg-gradient-to-tr from-iot-cyan via-cyber-green to-block-purple shadow-2xl shadow-cyber-green/5">
              <div className="w-full h-full bg-dark-card rounded-[15px] p-6 flex flex-col justify-between overflow-hidden relative group">
                
                {/* Background Tech Grids */}
                <div className="absolute inset-0 grid-bg opacity-30 group-hover:opacity-40 transition-opacity duration-300" />
                
                {/* Floating Node Orbs */}
                <div className="absolute top-8 left-8 w-4 h-4 rounded-full bg-iot-cyan/40 animate-ping" />
                <div className="absolute bottom-12 right-12 w-3 h-3 rounded-full bg-block-purple/40 animate-ping [animation-delay:1s]" />
                
                {/* Visual Avatar Structure */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4 text-center">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full border-2 border-dashed border-cyber-green/50 flex items-center justify-center p-2 animate-[spin_20s_linear_infinite]" />
                    <div className="absolute inset-2 w-20 h-20 rounded-full border border-iot-cyan/40 flex items-center justify-center p-2 animate-[spin_10s_linear_infinite_reverse]" />
                    <div className="absolute inset-4 w-16 h-16 rounded-full bg-gradient-to-tr from-iot-cyan to-block-purple flex items-center justify-center">
                      <GraduationCap size={24} className="text-white" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-display font-bold text-white text-lg">B. Lochana</h3>
                    <p className="text-xs text-cyber-green font-mono uppercase tracking-wider mt-1">CS Engineer in Training</p>
                  </div>
                  
                  <div className="flex gap-2 text-xs text-gray-400 font-medium">
                    <span className="flex items-center gap-1"><MapPin size={12} className="text-iot-cyan" /> Coimbatore</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Milestone size={12} className="text-block-purple" /> Batch: 23-27</span>
                  </div>
                </div>

                {/* Bottom Border Accent Glow */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-iot-cyan via-cyber-green to-block-purple" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="font-display font-semibold text-xl sm:text-2xl text-white">
                Forward-Thinking Engineer & Innovator
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                A motivated and forward-thinking woman aspiring to achieve my life goals and enlighten my future. As a quick learner with a wide mindset, strong time management skills, and high integrity, I am passionate about technology, problem-solving, and creating meaningful solutions through innovation.
              </p>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                My undergraduate coursework blends core computer science fields with specialized tracks in **Internet of Things (IoT)**, **Cybersecurity**, and **Blockchain technology**. I actively engage in hackathons, workshops, and build real-world connected systems.
              </p>
            </div>

            {/* Education Timeline */}
            <div className="space-y-4">
              <h4 className="font-display font-semibold text-lg text-white flex items-center gap-2">
                <GraduationCap className="text-cyber-green" size={20} /> Education Path
              </h4>
              
              <div className="flex flex-col gap-4">
                {education.map((edu, idx) => {
                  const IconComponent = edu.icon;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 5 }}
                      className={`glass-card p-5 rounded-xl transition-all duration-300 ${edu.borderColor} border border-white/5 relative`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                        <div className="flex items-start gap-4">
                          <div className={`p-2.5 rounded-lg bg-white/5 border border-white/10 ${edu.color}`}>
                            <IconComponent size={20} />
                          </div>
                          <div>
                            <h5 className="font-semibold text-white text-base leading-snug">{edu.institution}</h5>
                            <p className="text-xs text-gray-400 mt-0.5">{edu.location}</p>
                            <p className="text-sm text-gray-300 font-medium mt-2">{edu.degree}</p>
                            {edu.specialization && (
                              <p className="text-xs text-gray-400 mt-1">{edu.specialization}</p>
                            )}
                          </div>
                        </div>
                        
                        <div className="sm:text-right flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 mt-2 sm:mt-0">
                          <span className="text-xs font-mono px-2 py-1 rounded bg-white/5 border border-white/10 text-white">{edu.duration}</span>
                          <span className={`text-xs font-bold font-mono tracking-wider ${edu.color}`}>{edu.grade}</span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
