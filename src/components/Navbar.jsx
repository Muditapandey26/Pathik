import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LeafIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
  </svg>
);

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-slate-100 fixed w-full top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-2.5 group transition-transform hover:scale-[1.02]">
            <div className="w-10 h-10 bg-teal-700 text-white rounded-xl flex items-center justify-center shadow-lg shadow-teal-700/20 group-hover:rotate-3 transition-transform">
              <LeafIcon size={24} />
            </div>
            <span className="text-slate-900 font-black text-2xl tracking-tight">Pathik</span>
          </Link>
          
          <div className="hidden md:flex space-x-10 items-center">
            <Link to="/" className="text-slate-500 hover:text-teal-700 font-bold text-sm uppercase tracking-wider transition-colors">Home</Link>
            <Link to="/report-need" className="text-slate-500 hover:text-teal-700 font-bold text-sm uppercase tracking-wider transition-colors">Report Need</Link>
            <Link to="/login" className="text-slate-500 hover:text-teal-700 font-bold text-sm uppercase tracking-wider transition-colors">Login</Link>
            <Link to="/signup" className="bg-teal-700 text-white px-7 py-3 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-teal-800 hover:-translate-y-0.5 transition-all shadow-lg shadow-teal-700/25 active:scale-95">
              Get Started
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-800 focus:outline-none p-2">
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-4 space-y-2 shadow-lg">
          <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-700 font-medium hover:bg-slate-50 rounded-md">Home</Link>
          <Link to="/report-need" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-700 font-medium hover:bg-slate-50 rounded-md">Report Need</Link>
          <Link to="/login" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-700 font-medium hover:bg-slate-50 rounded-md">Login</Link>
          <Link to="/signup" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-teal-700 font-medium hover:bg-teal-50 rounded-md">Sign Up</Link>
        </div>
      )}
    </nav>
  );
}
