import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ChatWindow from '../components/Chatbot/ChatWindow';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col text-slate-800 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />
      
      {/* Main Container - Padded for navbar */}
      <main className="flex-grow pt-28 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row max-w-7xl mx-auto w-full gap-12 items-center">
        
        {/* Left Content Area (Hero & CTAs) */}
        <section className="flex-1 flex flex-col justify-center">
          <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200/60 p-10 md:p-16 border border-slate-100 h-full flex flex-col justify-center relative overflow-hidden">
            
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-teal-50 blur-[100px] opacity-80 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-72 h-72 rounded-full bg-sky-50 blur-[80px] opacity-60 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-teal-50/80 border border-teal-100/50 text-teal-800 text-[11px] font-black uppercase tracking-[0.2em] mb-10 w-max shadow-sm">
                <span className="w-2 h-2 rounded-full bg-teal-600 animate-ping"></span>
                Empowering Communities
              </div>
              
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-slate-900 leading-[0.95] tracking-[-0.04em] mb-8">
                Amplify Your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-700 via-teal-600 to-sky-500">
                  Social Impact
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl font-bold text-slate-600 mb-6 leading-snug tracking-tight">
                The modern coordination engine for <span className="text-slate-900">grassroots change.</span>
              </p>
              
              <p className="text-lg text-slate-500 mb-14 leading-relaxed max-w-xl font-medium">
                Pathik bridges the gap between communities in need, dedicated volunteers, and verified NGOs. Report crises, coordinate relief, and scale impact through our unified, real-time platform.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-5 items-stretch sm:items-center">
                <Link 
                  to="/signup" 
                  className="inline-flex justify-center items-center px-10 py-5 bg-teal-700 text-white text-lg font-black rounded-2xl shadow-xl shadow-teal-700/30 hover:bg-teal-800 hover:shadow-teal-700/40 hover:-translate-y-1 transition-all duration-300 active:scale-95"
                >
                  Join as Volunteer
                </Link>
                <Link 
                  to="/report-need" 
                  className="inline-flex justify-center items-center px-10 py-5 bg-white text-slate-800 border-2 border-slate-100 text-lg font-black rounded-2xl shadow-sm hover:border-teal-100 hover:bg-teal-50/30 hover:-translate-y-1 transition-all duration-300 active:scale-95"
                >
                  Report Crisis
                </Link>
              </div>
              
              <div className="mt-12 flex items-center gap-4 text-sm font-bold text-slate-400">
                <span className="uppercase tracking-widest text-[10px]">Trusted by organizations</span>
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-xs font-black text-slate-400">NGO</div>
                  ))}
                </div>
                <Link 
                  to="/login" 
                  className="ml-2 text-teal-700 hover:text-teal-900 hover:underline transition-colors font-black flex items-center gap-1"
                >
                  NGO Partner Login <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Right Chatbot Panel */}
        <aside className="w-full lg:w-96 flex-shrink-0">
          <div className="h-[600px] lg:h-full">
            <ChatWindow />
          </div>
        </aside>

      </main>
    </div>
  );
}
