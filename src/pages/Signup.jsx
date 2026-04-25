import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Signup() {
  const [role, setRole] = useState('volunteer');

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center p-4 pt-24 pb-12">
        <div className="w-full max-w-lg bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 p-8 sm:p-10 relative overflow-hidden">
          
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-40 h-40 rounded-full bg-blue-50 blur-3xl opacity-70 pointer-events-none"></div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 mb-6 shadow-sm">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Create an Account</h2>
              <p className="text-sm text-gray-500 mt-2 font-medium">
                Join Pathik as a Volunteer or NGO to start making a difference.
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              
              <div>
                <label htmlFor="role" className="block text-sm font-bold text-gray-700 mb-2">
                  I am a...
                </label>
                <div className="relative">
                  <select 
                    id="role" 
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-gray-800 appearance-none font-medium cursor-pointer"
                  >
                    <option value="volunteer">Volunteer</option>
                    <option value="ngo">NGO / Organization</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {role === 'ngo' && (
                <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                  <label htmlFor="orgName" className="block text-sm font-bold text-gray-700 mb-2">
                    Organization Name
                  </label>
                  <input 
                    type="text" 
                    id="orgName" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-gray-800 placeholder-gray-400"
                    placeholder="Enter organization name" 
                  />
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                  {role === 'ngo' ? 'Contact Person Name' : 'Full Name'}
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-gray-800 placeholder-gray-400"
                  placeholder={role === 'ngo' ? "Enter your name" : "Enter your full name"} 
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-gray-800 placeholder-gray-400"
                  placeholder="Enter your email" 
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-2">
                    Password
                  </label>
                  <input 
                    type="password" 
                    id="password" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-gray-800 placeholder-gray-400"
                    placeholder="Create a password" 
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-bold text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <input 
                    type="password" 
                    id="confirmPassword" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-gray-800 placeholder-gray-400"
                    placeholder="Confirm password" 
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full flex justify-center py-3.5 px-4 mt-2 border border-transparent rounded-xl shadow-lg shadow-blue-600/20 text-base font-bold text-white bg-blue-600 hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign up for Pathik
              </button>
            </form>

            <div className="mt-8 text-center border-t border-gray-100 pt-6">
              <p className="text-sm text-gray-600 font-medium">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-600 hover:text-blue-800 font-bold transition-colors">
                  Log in instead
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
