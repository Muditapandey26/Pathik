import React from 'react';
import Navbar from '../components/Navbar';

export default function ReportNeed() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center p-4 pt-24 pb-12">
        <div className="w-full max-w-2xl bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 p-8 sm:p-12 relative overflow-hidden">
          
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-40 h-40 rounded-full bg-blue-50 blur-3xl opacity-70 pointer-events-none"></div>

          <div className="relative z-10">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 mb-6 shadow-sm">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Report a Need</h2>
              <p className="text-sm text-gray-500 mt-3 font-medium max-w-lg mx-auto leading-relaxed">
                If you know a community or an individual who requires assistance, let us know. Our NGOs and volunteers will step in to help. You do not need an account to submit a report.
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                    Your Name <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-gray-800 placeholder-gray-400"
                    placeholder="John Doe" 
                  />
                </div>

                <div>
                  <label htmlFor="contact" className="block text-sm font-bold text-gray-700 mb-2">
                    Contact Info <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <input 
                    type="text" 
                    id="contact" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-gray-800 placeholder-gray-400"
                    placeholder="Email or Phone number" 
                  />
                </div>
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-bold text-gray-700 mb-2">
                  Category of Need
                </label>
                <div className="relative">
                  <select 
                    id="category" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-gray-800 appearance-none font-medium cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>Select category</option>
                    <option value="medical">Medical Assistance</option>
                    <option value="food">Food & Supply Drop</option>
                    <option value="education">Education Support</option>
                    <option value="infrastructure">Infrastructure Repair</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="city" className="block text-sm font-bold text-gray-700 mb-2">
                    City / District
                  </label>
                  <input 
                    type="text" 
                    id="city" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-gray-800 placeholder-gray-400"
                    placeholder="E.g., New Delhi" 
                  />
                </div>
                
                <div>
                  <label htmlFor="pincode" className="block text-sm font-bold text-gray-700 mb-2">
                    Pincode / Zip Code
                  </label>
                  <input 
                    type="text" 
                    id="pincode" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-gray-800 placeholder-gray-400"
                    placeholder="E.g., 110001" 
                  />
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-bold text-gray-700 mb-2">
                  Detailed Description
                </label>
                <textarea 
                  id="description" 
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-gray-800 placeholder-gray-400 resize-none"
                  placeholder="Please describe the situation, number of people affected, and specific requirements..." 
                ></textarea>
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-lg shadow-blue-600/20 text-base font-bold text-white bg-blue-600 hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Submit Public Report
                </button>
              </div>
            </form>

          </div>
        </div>
      </main>
    </div>
  );
}
