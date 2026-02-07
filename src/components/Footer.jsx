import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand Section */}
          <div className="col-span-1">
            <Link
              to="/home"
              className="text-2xl font-bold tracking-tighter
                         bg-gradient-to-r from-white via-pink-500 to-purple-800
                         bg-clip-text text-transparent drop-shadow-lg transition-all duration-300 hover:brightness-125"
            >
              CoDi AI
            </Link>
            <p className="mt-4 text-white/80 text-sm leading-relaxed">
              Empowering learners through AI-driven educational experiences.
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-xs font-bold text-white/70 uppercase tracking-[0.2em] mb-6">Platform</h4>
            <ul className="space-y-4">
              <li><Link to="/courses" className="text-white/80 hover:text-white transition text-sm">All Courses</Link></li>
              <li><Link to="/learning" className="text-white/80 hover:text-white transition text-sm">AI Tutor</Link></li>
              <li><Link to="/roadmap" className="text-white/80 hover:text-white transition text-sm">Learning Roadmap</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-bold text-white/70 uppercase tracking-[0.2em] mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-white/80 hover:text-white transition text-sm">About Us</Link></li>
              <li><Link to="/careers" className="text-white/80 hover:text-white transition text-sm">Careers</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-white transition text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div>
            <h4 className="text-xs font-bold text-white/70 uppercase tracking-[0.2em] mb-6">Stay Connected</h4>
            <div className="flex flex-col gap-4">
              <p className="text-white/80 text-sm">
                Join our AI newsletter for latest updates.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-white/20 border border-white/30 text-white text-sm rounded-l-xl px-4 py-2 w-full backdrop-blur-sm focus:outline-none focus:border-white/70 placeholder:text-white/50 transition-all"
                />
                <button className="bg-white/30 text-white px-4 py-2 rounded-r-xl hover:bg-white/50 transition-all">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-xs font-medium">
            © {new Date().getFullYear()} CoDi AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-white/60 hover:text-white transition text-xs">Privacy Policy</Link>
            <Link to="/terms" className="text-white/60 hover:text-white transition text-xs">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Optional overlay for subtle gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30 pointer-events-none"></div>
    </footer>
  );
}

export default Footer;
