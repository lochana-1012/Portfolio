import React from 'react';
import { Cpu } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-white/5 bg-dark-bg/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-2 font-display font-bold text-sm tracking-tight text-white/60">
          <div className="w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center">
            <Cpu size={12} className="text-iot-cyan" />
          </div>
          <span>LOCHANA<span className="text-cyber-green">.B</span></span>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 font-medium">
          © {currentYear} Lochana B. All Rights Reserved. Built with React & Tailwind CSS.
        </p>

        {/* Sub-tag */}
        <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
          IoT • Security • Blockchain
        </span>

      </div>
    </footer>
  );
}
