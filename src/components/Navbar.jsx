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
    <nav className="bg-white border-b border-gray-100 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2 text-blue-600 font-bold text-xl">
            <LeafIcon size={28} />
            <span>Pathik</span>
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Home</Link>
            <Link to="/report-need" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Report Need</Link>
            <Link to="/login" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Login</Link>
            <Link to="/signup" className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm">
              Sign Up
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900 focus:outline-none p-2">
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-4 space-y-2 shadow-lg">
          <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 font-medium hover:bg-gray-50 rounded-md">Home</Link>
          <Link to="/report-need" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 font-medium hover:bg-gray-50 rounded-md">Report Need</Link>
          <Link to="/login" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-700 font-medium hover:bg-gray-50 rounded-md">Login</Link>
          <Link to="/signup" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-blue-600 font-medium hover:bg-blue-50 rounded-md">Sign Up</Link>
        </div>
      )}
    </nav>
  );
}
