import React from 'react';
import Navbar from '../../components/Navbar';
import ProfileSummary from '../../components/Volunteer/ProfileSummary';
import TaskFeed from '../../components/Volunteer/TaskFeed';
import TaskCard from '../../components/Volunteer/TaskCard';

export default function VolunteerDashboard() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans flex flex-col text-slate-800">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1 w-12 bg-teal-600 rounded-full"></span>
              <span className="text-[10px] font-black text-teal-600 uppercase tracking-[0.3em]">Volunteer Portal</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">Dashboard</h1>
            <p className="text-slate-500 font-medium mt-2 text-lg">Welcome back, <span className="text-teal-700 font-bold">Volunteer</span>. Ready to make a difference?</p>
          </div>
          <button className="px-8 py-4 bg-teal-700 text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-xl shadow-teal-700/25 hover:bg-teal-800 hover:-translate-y-1 transition-all active:scale-95">
            Explore Opportunities
          </button>
        </div>

        {/* Dashboard Grid Shell */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Profile Summary Shell */}
          <div className="lg:col-span-3 w-full bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100/50 p-8 flex flex-col transition-all hover:shadow-2xl hover:shadow-slate-200/60">
            <h2 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
              Your Profile
            </h2>
            <ProfileSummary />
          </div>

          {/* Center Column: Main Task Feed Shell */}
          <div className="md:col-span-1 lg:col-span-6 w-full flex flex-col gap-8">
            <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100/50 p-6 sm:p-10 min-h-[600px] flex flex-col">
              <div className="flex-grow flex flex-col">
                <TaskFeed />
              </div>
            </div>
          </div>

          {/* Right Column: Upcoming Tasks Panel Shell */}
          <div className="lg:col-span-3 w-full bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100/50 p-8 flex flex-col transition-all hover:shadow-2xl hover:shadow-slate-200/60">
            <h2 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              Coming Up
            </h2>
            <div className="flex-grow flex flex-col gap-4">
              <TaskCard 
                title="Weekend Beach Cleanup"
                ngoName="Ocean Savers"
                location="Sunny Beach"
                date="Sat, 8 AM"
                status="in progress"
                description="Don't forget your gloves! See you at the main pier."
              />
              <TaskCard 
                title="Teach Basic Math"
                ngoName="EduCare"
                location="City Library"
                date="Monday"
                status="open"
                description="Awaiting final confirmation from coordinator."
              />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
