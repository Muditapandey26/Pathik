import React from 'react';
import Navbar from '../components/Navbar';

export default function ReportNeed() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans flex flex-col text-slate-800">
      <Navbar />

      <main className="flex-grow flex items-center justify-center p-4 pt-32 pb-20">
        <div className="w-full max-w-3xl bg-white rounded-[3rem] shadow-2xl shadow-slate-200/60 border border-slate-100 p-10 sm:p-16 relative overflow-hidden">

          {/* Decorative accents */}
          <div className="absolute top-0 right-0 -mr-24 -mt-24 w-64 h-64 rounded-full bg-teal-50 blur-[80px] opacity-70 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-64 h-64 rounded-full bg-sky-50 blur-[80px] opacity-70 pointer-events-none"></div>

          <div className="relative z-10">
            <div className="text-center mb-14">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-[1.5rem] bg-teal-50 border border-teal-100 text-teal-700 mb-8 shadow-sm">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-4">Report a Crisis</h2>
              <p className="text-base text-slate-500 font-medium max-w-xl mx-auto leading-relaxed">
                Connect your community with help. Every report is reviewed by our verified NGO partners to ensure rapid assistance.
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-8">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                    Your Name <span className="text-slate-300 lowercase font-bold">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-6 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-700 transition-all text-slate-800 placeholder-slate-400 font-medium"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="contact" className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                    Contact Info <span className="text-slate-300 lowercase font-bold">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="contact"
                    className="w-full px-6 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-700 transition-all text-slate-800 placeholder-slate-400 font-medium"
                    placeholder="Email or Phone"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="category" className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                  Category of Need
                </label>
                <div className="relative">
                  <select
                    id="category"
                    className="w-full px-6 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-700 transition-all text-slate-800 appearance-none font-bold cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>Select category</option>
                    <option value="medical">Medical Assistance</option>
                    <option value="food">Food & Supply Drop</option>
                    <option value="education">Education Support</option>
                    <option value="infrastructure">Infrastructure Repair</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-slate-500">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="city" className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                    City / District
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="w-full px-6 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-700 transition-all text-slate-800 placeholder-slate-400 font-medium"
                    placeholder="E.g., New Delhi"
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="pincode" className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                    Pincode / Zip Code
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    className="w-full px-6 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-700 transition-all text-slate-800 placeholder-slate-400 font-medium"
                    placeholder="E.g., 110001"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="description" className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                  Detailed Description
                </label>
                <textarea
                  id="description"
                  rows="4"
                  className="w-full px-6 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-700 transition-all text-slate-800 placeholder-slate-400 font-medium resize-none"
                  placeholder="Tell us more about the situation..."
                ></textarea>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full flex justify-center py-5 px-6 border border-transparent rounded-2xl shadow-xl shadow-teal-700/25 text-lg font-black text-white bg-teal-700 hover:bg-teal-800 hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-teal-500/20 active:scale-95 uppercase tracking-widest"
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
