import React from 'react';
import { motion } from 'framer-motion';
import { Code2, PenTool, LayoutGrid, Award } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code2,
      color: "text-iot-cyan",
      glowColor: "bg-iot-cyan",
      skills: [
        { name: "Python", level: 85 },
        { name: "React.js", level: 80 },
        { name: "JavaScript", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "SQL", level: 75 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: PenTool,
      color: "text-cyber-green",
      glowColor: "bg-cyber-green",
      skills: [
        { name: "Arduino ID & Hardware", level: 85 },
        { name: "Figma & Canva", level: 80 },
        { name: "Git & Version Control", level: 85 },
        { name: "Power BI & Excel", level: 75 },
        { name: "VS Code", level: 90 }
      ]
    },
    {
      title: "Specializations",
      icon: LayoutGrid,
      color: "text-block-purple",
      glowColor: "bg-block-purple",
      skills: [
        { name: "IoT Development", level: 85 },
        { name: "Machine Learning Basics", level: 70 },
        { name: "Scrum & JIRA", level: 75 }
      ]
    }
  ];

  const softSkills = [
    "Creativity",
    "Problem Solving",
    "Teamwork",
    "Communication",
    "Time Management",
    "Quick Learner"
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-dark-bg grid-bg">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-iot-cyan/5 blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-cyber-green/5 blur-[100px] animate-pulse-slow [animation-delay:3s]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-iot-cyan mb-2">My Toolbox</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-iot-cyan via-cyber-green to-block-purple">Expertise</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-iot-cyan via-cyber-green to-block-purple rounded-full mt-4" />
        </div>

        {/* Skills Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={catIdx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIdx * 0.15 }}
                className="glass-card p-6 rounded-2xl border border-white/5 relative group hover:border-white/10 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className={`p-2.5 rounded-lg bg-white/5 border border-white/10 ${category.color}`}>
                    <IconComponent size={20} />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg tracking-wide">{category.title}</h3>
                </div>

                {/* Skill Bars */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="space-y-2">
                      <div className="flex justify-between items-center text-sm font-medium">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className={`font-mono text-xs ${category.color}`}>{skill.level}%</span>
                      </div>
                      
                      {/* Progress Track */}
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                        {/* Animated Bar Filler */}
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut", delay: skillIdx * 0.1 }}
                          className={`h-full rounded-full bg-gradient-to-r ${
                            category.title === "Programming" 
                              ? "from-iot-cyan to-cyber-green"
                              : category.title === "Tools & Platforms"
                              ? "from-cyber-green to-block-purple"
                              : "from-block-purple to-iot-cyan"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 glass-card p-8 rounded-2xl border border-white/5 text-center max-w-4xl mx-auto"
        >
          <h4 className="font-display font-semibold text-lg text-white mb-6 flex items-center justify-center gap-2">
            <Award className="text-cyber-green animate-bounce" size={20} /> Professional & Interpersonal Strengths
          </h4>
          
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-300 bg-white/5 border border-white/10 hover:border-cyber-green/50 hover:text-white transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
