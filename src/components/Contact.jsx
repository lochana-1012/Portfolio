import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  const validate = () => {
    let tempErrors = {};
    if (!formState.name.trim()) tempErrors.name = "Name is required";
    if (!formState.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formState.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formState.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email Me",
      value: "chanarchu2005@gmail.com",
      href: "mailto:chanarchu2005@gmail.com",
      color: "text-iot-cyan"
    },
    {
      icon: Phone,
      label: "Call Me",
      value: "+91 8870577912",
      href: "tel:+918870577912",
      color: "text-cyber-green"
    },
    {
      icon: MapPin,
      label: "My Location",
      value: "7, NSK Nagar Villupuram",
      href: "https://maps.google.com",
      color: "text-block-purple"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-dark-bg">
      {/* Glow Ambient Blob */}
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-block-purple/10 blur-[150px] animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-iot-cyan mb-2">Get In Touch</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-iot-cyan to-block-purple">Me</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-iot-cyan to-block-purple rounded-full mt-4" />
        </div>

        {/* Outer Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-wide">
                Let's discuss your next project!
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Feel free to reach out to me for internship offers, project collaborations, or just a friendly chat about Internet of Things, Network Security, or Blockchain systems.
              </p>
            </div>

            {/* Visual Icon List */}
            <div className="space-y-5">
              {contactInfo.map((info, idx) => {
                const IconComponent = info.icon;
                return (
                  <a
                    key={idx}
                    href={info.href}
                    target={info.icon === MapPin ? "_blank" : undefined}
                    rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/5 hover:border-white/10 transition-all duration-300 group"
                  >
                    <div className={`p-3 rounded-lg bg-white/5 border border-white/10 ${info.color} group-hover:scale-105 transition-transform duration-300`}>
                      <IconComponent size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold font-mono tracking-widest text-gray-500 uppercase block">{info.label}</span>
                      <span className="text-sm font-semibold text-white mt-0.5 group-hover:text-gray-300 transition-colors duration-300">{info.value}</span>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Grid */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/lochana-babu/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/5 bg-white/5 text-gray-400 hover:text-white hover:border-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300 text-xs font-semibold"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-iot-cyan">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/lochana-1012"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/5 bg-white/5 text-gray-400 hover:text-white hover:border-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300 text-xs font-semibold"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-cyber-green">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-white/5"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold font-mono tracking-widest text-gray-400 uppercase">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border bg-white/5 text-sm text-white placeholder-gray-500 focus:outline-none focus:bg-white/10 transition-colors duration-300 ${
                      errors.name ? 'border-red-500/50' : 'border-white/10 focus:border-cyber-green/50'
                    }`}
                    placeholder="Enter your name"
                  />
                  {errors.name && <p className="text-[11px] text-red-400 font-medium flex items-center gap-1 mt-1"><AlertCircle size={10} /> {errors.name}</p>}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold font-mono tracking-widest text-gray-400 uppercase">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border bg-white/5 text-sm text-white placeholder-gray-500 focus:outline-none focus:bg-white/10 transition-colors duration-300 ${
                      errors.email ? 'border-red-500/50' : 'border-white/10 focus:border-cyber-green/50'
                    }`}
                    placeholder="Enter your email"
                  />
                  {errors.email && <p className="text-[11px] text-red-400 font-medium flex items-center gap-1 mt-1"><AlertCircle size={10} /> {errors.email}</p>}
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-bold font-mono tracking-widest text-gray-400 uppercase">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border bg-white/5 text-sm text-white placeholder-gray-500 focus:outline-none focus:bg-white/10 transition-colors duration-300 ${
                      errors.subject ? 'border-red-500/50' : 'border-white/10 focus:border-cyber-green/50'
                    }`}
                    placeholder="Enter message subject"
                  />
                  {errors.subject && <p className="text-[11px] text-red-400 font-medium flex items-center gap-1 mt-1"><AlertCircle size={10} /> {errors.subject}</p>}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold font-mono tracking-widest text-gray-400 uppercase">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border bg-white/5 text-sm text-white placeholder-gray-500 focus:outline-none focus:bg-white/10 transition-colors duration-300 resize-none ${
                      errors.message ? 'border-red-500/50' : 'border-white/10 focus:border-cyber-green/50'
                    }`}
                    placeholder="Enter your message details..."
                  />
                  {errors.message && <p className="text-[11px] text-red-400 font-medium flex items-center gap-1 mt-1"><AlertCircle size={10} /> {errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full group flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm text-black bg-gradient-to-r from-iot-cyan via-cyber-green to-block-purple hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:scale-100 transition-all duration-300 mt-2 shadow-lg shadow-cyber-green/10"
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle size={16} />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
