import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center p-4 pt-24 pb-12">
        <div className="w-full max-w-md bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 p-8 sm:p-10 relative overflow-hidden">
          
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-40 h-40 rounded-full bg-blue-50 blur-3xl opacity-70 pointer-events-none"></div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 mb-6 shadow-sm">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Welcome Back</h2>
              <p className="text-sm text-gray-500 mt-2 font-medium">
                Login to your Pathik account to continue making an impact.
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
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
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="password" className="block text-sm font-bold text-gray-700">
                    Password
                  </label>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-800 font-bold transition-colors">
                    Forgot password?
                  </a>
                </div>
                <input 
                  type="password" 
                  id="password" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-gray-800 placeholder-gray-400"
                  placeholder="Enter your password" 
                />
              </div>

              <button 
                type="submit" 
                className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-lg shadow-blue-600/20 text-base font-bold text-white bg-blue-600 hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign in to Pathik
              </button>
            </form>

            <div className="mt-8 text-center border-t border-gray-100 pt-6">
              <p className="text-sm text-gray-600 font-medium">
                Don't have an account yet?{' '}
                <Link to="/signup" className="text-blue-600 hover:text-blue-800 font-bold transition-colors">
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
