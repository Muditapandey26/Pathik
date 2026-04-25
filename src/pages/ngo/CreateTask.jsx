import React from 'react';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';

export default function CreateTask() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center p-4 pt-24 pb-12">
        <div className="w-full max-w-3xl bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 p-8 sm:p-12 relative overflow-hidden">
          
          <div className="absolute top-0 left-0 -ml-16 -mt-16 w-40 h-40 rounded-full bg-indigo-50 blur-3xl opacity-70 pointer-events-none"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-6">
              <Link to="/ngo/dashboard" className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 text-gray-500 hover:bg-gray-100 transition-colors">
                <span aria-hidden="true">&larr;</span>
              </Link>
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">Create New Task</h2>
                <p className="text-sm text-gray-500 mt-1 font-medium">Broadcast a volunteer requirement to the community.</p>
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              
              <div>
                <label htmlFor="title" className="block text-sm font-bold text-gray-700 mb-2">
                  Task Title
                </label>
                <input 
                  type="text" 
                  id="title" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-gray-800 placeholder-gray-400"
                  placeholder="E.g., Medical Camp Setup" 
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="skill" className="block text-sm font-bold text-gray-700 mb-2">
                    Skill Required
                  </label>
                  <div className="relative">
                    <select 
                      id="skill" 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-gray-800 appearance-none font-medium cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled>Select skill</option>
                      <option value="physical">Physical Labor</option>
                      <option value="medical">Medical Professional</option>
                      <option value="logistics">Logistics / Driving</option>
                      <option value="education">Education / Teaching</option>
                      <option value="other">Other / General</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="urgency" className="block text-sm font-bold text-gray-700 mb-2">
                    Urgency
                  </label>
                  <div className="relative">
                    <select 
                      id="urgency" 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-gray-800 appearance-none font-medium cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled>Select urgency</option>
                      <option value="open">Open (Flexible)</option>
                      <option value="in progress">In Progress</option>
                      <option value="urgent">Urgent (Immediate)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="hours" className="block text-sm font-bold text-gray-700 mb-2">
                    Estimated Hours
                  </label>
                  <input 
                    type="number" 
                    id="hours" 
                    min="1"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-gray-800 placeholder-gray-400"
                    placeholder="E.g., 4" 
                  />
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-bold text-gray-700 mb-2">
                    Location
                  </label>
                  <input 
                    type="text" 
                    id="location" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all text-gray-800 placeholder-gray-400"
                    placeholder="Specific area or Remote" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Optional Resource Upload
                </label>
                <div className="w-full border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center bg-gray-50/50 hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 mb-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                  </div>
                  <p className="text-sm font-bold text-indigo-600 mb-1">Click to upload or drag and drop</p>
                  <p className="text-xs font-medium text-gray-400">PDF, PNG, JPG up to 10MB</p>
                </div>
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <Link 
                  to="/ngo/dashboard" 
                  className="px-6 py-3.5 border border-gray-200 text-gray-700 text-sm font-bold rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </Link>
                <button 
                  type="submit" 
                  className="px-8 py-3.5 bg-indigo-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all duration-200"
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
