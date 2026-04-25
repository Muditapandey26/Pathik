import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ChatWindow from '../components/Chatbot/ChatWindow';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <Navbar />
      
      {/* Main Container - Padded for navbar */}
      <main className="flex-grow pt-24 pb-8 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row max-w-7xl mx-auto w-full gap-8">
        
        {/* Left Content Area (Hero & CTAs) */}
        <section className="flex-1 flex flex-col justify-center">
          <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 p-8 md:p-14 border border-gray-100 h-full flex flex-col justify-center relative overflow-hidden">
            
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-blue-50 blur-3xl opacity-60 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 border border-blue-100 text-blue-700 text-sm font-bold tracking-wide mb-8 w-max">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></span>
                PATHIK PLATFORM
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6">
                Amplify Your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Social Impact
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                The modern operating system for grassroots change.
              </p>
              
              <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-2xl font-medium">
                Pathik streamlines coordination between communities in need, dedicated volunteers, and verified NGOs. Report crises, organize relief, and track impact—all in one unified platform.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-stretch sm:items-center">
                <Link 
                  to="/signup" 
                  className="inline-flex justify-center items-center px-8 py-4 bg-blue-600 text-white text-lg font-bold rounded-xl shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-200"
                >
                  Volunteer Now
                </Link>
                <Link 
                  to="/report-need" 
                  className="inline-flex justify-center items-center px-8 py-4 bg-white text-gray-800 border-2 border-gray-200 text-lg font-bold rounded-xl shadow-sm hover:border-gray-300 hover:bg-gray-50 hover:-translate-y-0.5 transition-all duration-200"
                >
                  Report Community Need
                </Link>
              </div>
              
              <div className="mt-8 flex items-center gap-3 text-base font-medium text-gray-500">
                <span>Are you an organization?</span>
                <Link 
                  to="/login" 
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors font-bold flex items-center gap-1"
                >
                  NGO Login <span aria-hidden="true">&rarr;</span>
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
