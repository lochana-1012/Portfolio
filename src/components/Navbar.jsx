import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section on scroll
      const sections = navItems.map(item => document.getElementById(item.href.replace('#', '')));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].href.replace('#', ''));
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-dark-bg/85 backdrop-blur-md border-b border-white/5 py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2 group font-display font-bold text-xl tracking-tight text-white">
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-iot-cyan via-cyber-green to-block-purple flex items-center justify-center p-[1px] shadow-lg group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-dark-bg rounded-[7px] flex items-center justify-center">
              <Cpu size={16} className="text-iot-cyan group-hover:text-cyber-green transition-colors duration-300" />
            </div>
          </div>
          <span>LOCHANA<span className="text-cyber-green">.B</span></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`font-medium text-sm transition-all duration-300 relative py-1 ${
                activeSection === item.href.replace('#', '')
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.label}
              {activeSection === item.href.replace('#', '') && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-iot-cyan via-cyber-green to-block-purple rounded-full animate-pulse" />
              )}
            </a>
          ))}
          
          <a
            href="#contact"
            className="px-5 py-2 rounded-lg text-xs font-semibold text-white border border-white/10 hover:border-cyber-green hover:shadow-[0_0_15px_rgba(255,209,102,0.2)] transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 text-white transition-colors duration-300"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-y-0 right-0 w-80 bg-dark-bg/95 border-l border-white/10 z-50 p-8 shadow-2xl transition-all duration-500 ease-out transform md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex justify-between items-center mb-12">
          <span className="font-display font-bold text-white text-lg">Navigation</span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg border border-white/5 bg-white/5 text-white"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`font-display text-lg font-medium transition-all duration-300 ${
                activeSection === item.href.replace('#', '')
                  ? 'text-white pl-3 border-l-2 border-cyber-green'
                  : 'text-gray-400 hover:text-white pl-0'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-6 w-full py-3 rounded-lg text-center font-semibold text-white bg-gradient-to-r from-iot-cyan via-cyber-green to-block-purple"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
