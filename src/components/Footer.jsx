import React from 'react';
import { Link } from 'react-router-dom';

const PathikLogo = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 21C4 18.2386 7.58172 16 12 16C16.4183 16 20 18.2386 20 21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 16V12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-50" />
    <path d="M8 21H16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 font-sans relative">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 text-white group">
              <div className="w-10 h-10 bg-teal-700 text-white rounded-xl flex items-center justify-center shadow-lg shadow-teal-700/20 group-hover:rotate-3 transition-transform">
                <PathikLogo size={24} />
              </div>
              <span className="font-black text-2xl tracking-tight">Pathik</span>
            </Link>
            <p className="text-zinc-500 max-w-xs leading-relaxed">
              Empowering communities and coordinating grassroots action through a unified coordination engine.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4">
              {['About', 'Features', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`} 
                    className="inline-block transition-all duration-200 hover:translate-x-1 hover:text-teal-500"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials Column */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Follow Us</h4>
            <div className="flex gap-4">
              {[
                { name: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                { name: 'Twitter', path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
                { name: 'LinkedIn', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' }
              ].map((social) => (
                <a 
                  key={social.name}
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:scale-110 transition-transform duration-200 border border-zinc-800"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-medium">
            &copy; {new Date().getFullYear()} Pathik. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-teal-700 text-white rounded-2xl shadow-2xl shadow-teal-900/50 flex items-center justify-center hover:bg-teal-600 hover:-translate-y-1 transition-all duration-300 active:scale-95 z-40 group"
        aria-label="Back to top"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-0.5 transition-transform">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </footer>
  );
}
