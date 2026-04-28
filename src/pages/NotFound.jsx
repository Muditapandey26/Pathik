import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function NotFound() {
  React.useEffect(() => {
    document.title = "Pathik | Page Not Found";
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col text-slate-800">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-teal-50 rounded-3xl mb-8 border border-teal-100 shadow-sm">
            <span className="text-4xl font-black text-teal-700">404</span>
          </div>
          
          <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Lost in Pathik?</h1>
          <p className="text-slate-500 text-lg mb-10 max-w-md mx-auto font-medium">
            The page you're looking for doesn't exist or has been moved to another coordinate.
          </p>
          
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-700 text-white font-black rounded-2xl shadow-xl shadow-teal-700/25 hover:bg-teal-800 hover:-translate-y-1 transition-all duration-300 active:scale-95"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
