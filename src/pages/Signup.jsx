import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Signup() {
  const [role, setRole] = useState('volunteer');

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans flex flex-col text-slate-800">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center p-4 pt-32 pb-20">
        <div className="w-full max-w-xl bg-white rounded-[3rem] shadow-2xl shadow-slate-200/60 border border-slate-100 p-10 sm:p-14 relative overflow-hidden">
          
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 -mr-24 -mt-24 w-64 h-64 rounded-full bg-teal-50 blur-[80px] opacity-70 pointer-events-none"></div>

          <div className="relative z-10 text-center mb-10">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-3">Join Pathik</h2>
            <p className="text-slate-500 font-medium">Empower your community with grassroots action.</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
            
            <div className="space-y-3">
              <label htmlFor="role" className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                I am a...
              </label>
              <div className="relative">
                <select 
                  id="role" 
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-6 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-700 transition-all text-slate-800 appearance-none font-bold cursor-pointer"
                >
                  <option value="volunteer">Volunteer</option>
                  <option value="ngo">NGO / Organization</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-slate-500">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            {role === 'ngo' && (
              <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                <label htmlFor="orgName" className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                  Organization Name
                </label>
                <input 
                  type="text" 
                  id="orgName" 
                  className="w-full px-6 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-700 transition-all text-slate-800 placeholder-slate-400 font-medium"
                  placeholder="E.g., Global Relief" 
                />
              </div>
            )}

            <div className="space-y-3">
              <label htmlFor="name" className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                {role === 'ngo' ? 'Contact Person Name' : 'Full Name'}
              </label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-6 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-700 transition-all text-slate-800 placeholder-slate-400 font-medium"
                placeholder={role === 'ngo' ? "Your name" : "Your full name"} 
              />
            </div>

            <div className="space-y-3">
              <label htmlFor="email" className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                Email Address
              </label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-6 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-700 transition-all text-slate-800 placeholder-slate-400 font-medium"
                placeholder="you@example.com" 
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label htmlFor="password" className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                  Password
                </label>
                <input 
                  type="password" 
                  id="password" 
                  className="w-full px-6 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-700 transition-all text-slate-800 placeholder-slate-400 font-medium"
                  placeholder="••••••••" 
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="confirmPassword" className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                  Confirm
                </label>
                <input 
                  type="password" 
                  id="confirmPassword" 
                  className="w-full px-6 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-700 transition-all text-slate-800 placeholder-slate-400 font-medium"
                  placeholder="••••••••" 
                />
              </div>
            </div>

            <div className="pt-6">
              <button 
                type="submit" 
                className="w-full flex justify-center py-5 px-6 border border-transparent rounded-2xl shadow-xl shadow-teal-700/25 text-lg font-black text-white bg-teal-700 hover:bg-teal-800 hover:-translate-y-1 transition-all duration-300 active:scale-95 uppercase tracking-widest"
              >
                Create Account
              </button>
            </div>
          </form>

          <div className="mt-10 text-center border-t border-slate-100 pt-8">
            <p className="text-sm text-slate-500 font-medium">
              Already with us?{' '}
              <Link to="/login" className="text-teal-700 hover:text-teal-900 font-black transition-colors">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
