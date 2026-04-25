import React from 'react';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';

export default function CreateTask() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans flex flex-col text-slate-800">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center p-4 pt-32 pb-20">
        <div className="w-full max-w-3xl bg-white rounded-[3rem] shadow-2xl shadow-slate-200/60 border border-slate-100 p-10 sm:p-16 relative overflow-hidden">
          
          <div className="absolute top-0 left-0 -ml-24 -mt-24 w-64 h-64 rounded-full bg-teal-50 blur-[80px] opacity-70 pointer-events-none"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-6 mb-12 border-b border-slate-100 pb-10">
              <Link to="/ngo/dashboard" className="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-900 transition-all active:scale-95">
                <span aria-hidden="true" className="text-2xl">&larr;</span>
              </Link>
              <div>
                <h2 className="text-4xl font-black text-slate-900 tracking-tight">Create Task</h2>
                <p className="text-slate-500 font-medium mt-1">Broadcast your requirement to the community.</p>
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
              
              <div className="space-y-3">
                <label htmlFor="title" className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                  Task Title
                </label>
                <input 
                  type="text" 
                  id="title" 
                  className="w-full px-6 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-700 transition-all text-slate-800 placeholder-slate-400 font-medium"
                  placeholder="E.g., Medical Camp Setup" 
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="skill" className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                    Skill Required
                  </label>
                  <div className="relative">
                    <select 
                      id="skill" 
                      className="w-full px-6 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-700 transition-all text-slate-800 appearance-none font-bold cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled>Select skill</option>
                      <option value="physical">Physical Labor</option>
                      <option value="medical">Medical Professional</option>
                      <option value="logistics">Logistics / Driving</option>
                      <option value="education">Education / Teaching</option>
                      <option value="other">Other / General</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-slate-500">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="urgency" className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                    Urgency Level
                  </label>
                  <div className="relative">
                    <select 
                      id="urgency" 
                      className="w-full px-6 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-700 transition-all text-slate-800 appearance-none font-bold cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled>Select urgency</option>
                      <option value="open">Open (Flexible)</option>
                      <option value="in progress">In Progress</option>
                      <option value="urgent">Urgent (Immediate)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-slate-500">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="hours" className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                    Estimated Hours
                  </label>
                  <input 
                    type="number" 
                    id="hours" 
                    min="1"
                    className="w-full px-6 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-700 transition-all text-slate-800 placeholder-slate-400 font-medium"
                    placeholder="E.g., 4" 
                  />
                </div>
                
                <div className="space-y-3">
                  <label htmlFor="location" className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                    Location
                  </label>
                  <input 
                    type="text" 
                    id="location" 
                    className="w-full px-6 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-700 transition-all text-slate-800 placeholder-slate-400 font-medium"
                    placeholder="Specific area or Remote" 
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                  Supporting Documents
                </label>
                <div className="w-full border-2 border-dashed border-slate-200 rounded-[2rem] p-10 flex flex-col items-center justify-center bg-slate-50/30 hover:bg-teal-50/30 hover:border-teal-200 transition-all cursor-pointer group">
                  <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center text-teal-700 mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                  </div>
                  <p className="text-sm font-black text-teal-700 mb-1">Upload Media or PDF</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Max file size: 10MB</p>
                </div>
              </div>

              <div className="pt-6 flex justify-end gap-5">
                <Link 
                  to="/ngo/dashboard" 
                  className="px-10 py-5 border-2 border-slate-100 text-slate-500 text-sm font-black rounded-2xl hover:bg-slate-50 hover:text-slate-900 transition-all active:scale-95 uppercase tracking-widest"
                >
                  Cancel
                </Link>
                <button 
                  type="submit" 
                  className="px-12 py-5 bg-teal-700 text-white text-sm font-black rounded-2xl shadow-xl shadow-teal-700/25 hover:bg-teal-800 hover:-translate-y-1 transition-all duration-300 active:scale-95 uppercase tracking-widest"
                >
                  Publish Task
                </button>
              </div>
            </form>

          </div>
        </div>
      </main>
    </div>
  );
}
